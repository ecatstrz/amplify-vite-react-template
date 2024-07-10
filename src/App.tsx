import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React, { useEffect, useState } from 'react';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../amplify/data/resource";

const client = generateClient<Schema>();

/**
 * The main App component that renders the application.
 */

// this is a different branch
// I am trying to make things deploy again
function App() {
  const [selectedOption, setSelectedOption] = React.useState('');
  const [cats, setCats] = useState<Array<Schema["Cat"]["type"]>>([]);

  const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const subscription = client.models.Cat.observeQuery().subscribe({
      next: (data) => setCats([...data.items]),
    });

    const handleCreateCat = async () => {
      const confirmed = await createCat();
      if (confirmed) {
        // Refresh the cats list after creating a new cat
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
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Select a cat</option>
            {cats.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
          {selectedOption && (
            <div>
              <p>{cats.find((cat) => cat.id === selectedOption)?.name}</p>
              <img src={cats.find((cat) => cat.id === selectedOption)?.imageUrl || ''} alt="Cat" />
            </div>
          )}
          <button onClick={signOut}>Sign out</button>
          <button onClick={createCat}>+ new cat</button>
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
