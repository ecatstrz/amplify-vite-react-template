import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useEffect, useState } from 'react';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../amplify/data/resource";

const client = generateClient<Schema>();

function App() {
  const [selectedCat, setSelectedCat] = useState<Schema["Cat"]["type"] | null>(null);
  const [cats, setCats] = useState<Array<Schema["Cat"]["type"]>>([]);
  const [showCreateCatView, setShowCreateCatView] = useState<boolean>(false);
  const [showCatDetails, setShowCatDetails] = useState<boolean>(false);
  const [newCatName, setNewCatName] = useState<string>('');
  const [newCatImageUrl, setNewCatImageUrl] = useState<string>('');
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  useEffect(() => {
    if (authStatus === 'authenticated') {
      const subscription = client.models.Cat.observeQuery().subscribe({
        next: (data) => setCats([...data.items]),
      });

      return () => subscription.unsubscribe();
    }
  }, [authStatus]);

  const handleCreateCat = async () => {
    if (newCatName && newCatImageUrl) {
      await client.models.Cat.create({ name: newCatName, imageUrl: newCatImageUrl });
      setNewCatName('');
      setNewCatImageUrl('');
      setShowCreateCatView(false);
    }
  };

  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="App">
          {authStatus === 'authenticated' ? (
            <>
              <select value={selectedCat?.id || ''} onChange={(e) => setSelectedCat(cats.find((cat) => cat.id === e.target.value) || null)}>
                <option value="">Select a cat</option>
                {cats.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              <button onClick={() => setShowCatDetails(true)}>View Selected Cat</button>
              <button onClick={() => setShowCreateCatView(true)}>+ new cat</button>
              <button onClick={signOut}>Sign out</button>

              {showCreateCatView && (
                <>
                  <input
                    type="text"
                    placeholder="Cat name"
                    value={newCatName}
                    onChange={(e) => setNewCatName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Cat image URL"
                    value={newCatImageUrl}
                    onChange={(e) => setNewCatImageUrl(e.target.value)}
                  />
                  <button onClick={handleCreateCat}>Create New Cat</button>
                  <button onClick={() => setShowCreateCatView(false)}>Cancel</button>
                </>
              )}

              {showCatDetails && selectedCat && (
                <div>
                  <p>{selectedCat.name}</p>
                  <img src={selectedCat.imageUrl || ''} alt="Cat" />
                  <button onClick={() => setShowCatDetails(false)}>Back to Home</button>
                </div>
              )}
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      )}
    </Authenticator>
  );
}

export default App;
