import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useEffect, useState } from 'react';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../amplify/data/resource";

const client = generateClient<Schema>();

function App() {
  const [selectedCat, setSelectedCat] = useState<Schema["Cat"]["type"] | null>(null);
  const [cats, setCats] = useState<Array<Schema["Cat"]["type"]>>([]);
  const [showHome, setShowHome] = useState<boolean>(true);

  useEffect(() => {
    const subscription = client.models.Cat.observeQuery().subscribe({
      next: (data) => setCats([...data.items]),
    });

    const handleCreateCat = async () => {
      const confirmed = await createCat();
      if (confirmed) {
        subscription.unsubscribe();
        const newSubscription = client.models.Cat.observeQuery().subscribe({
          next: (data) => setCats([...data.items]),
        });
        return () => newSubscription.unsubscribe();
      }
    };

    handleCreateCat();

    return () => subscription.unsubscribe();
  }, []);

  function createCat(): Promise<boolean> {
    return new Promise((resolve) => {
      const name = window.prompt("Cat name");
      if (!name) {
        resolve(false);
        return;
      }

      const imageUrl = window.prompt("Cat image URL");
      if (!imageUrl) {
        resolve(false);
        return;
      }

      const confirmed = window.confirm(`Create a new cat with name "${name}" and image URL "${imageUrl}"?`);
      if (confirmed) {
        client.models.Cat.create({ name, imageUrl });
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }

  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="App">
          {showHome ? (
            <>
              <select value={selectedCat?.id || ''} onChange={(e) => setSelectedCat(cats.find((cat) => cat.id === e.target.value) || null)}>
                <option value="">Select a cat</option>
                {cats.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              {selectedCat && (
                <div>
                  <p>{selectedCat.name}</p>
                  <img src={selectedCat.imageUrl || ''} alt="Cat" />
                </div>
              )}
              <button onClick={() => setShowHome(false)}>+ new cat</button>
              <button onClick={signOut}>Sign out</button>
            </>
          ) : (
            <>
              <button onClick={createCat}>Create New Cat</button>
              <button onClick={() => setShowHome(true)}>Return to Home</button>
            </>
          )}
          <ul>
            {cats.map((cat) => (
              <li key={cat.id}>
                <p>{cat.name}</p>
                {cat.imageUrl && <img src={cat.imageUrl} alt="Cat" />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
