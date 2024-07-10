import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import catImage1 from './assets/1.jpg';
import catImage2 from './assets/2.jpg';
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
    client.models.Cat.observeQuery().subscribe({
      next: (data) => setCats([...data.items]),
    });
  }, []);

  function createCat() {
    const content = window.prompt("Cat content");
    const imageUrl = window.prompt("Cat image URL");
    if (content && imageUrl) {
      client.models.Cat.create({ content, imageUrl });
    }
  }

  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="App">
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
          {selectedOption === '1' && <img src={catImage1} alt="Cat" />}
          {selectedOption === '2' && <img src={catImage2} alt="Cat" />}
          <button onClick={signOut}>Sign out</button>
          <button onClick={createCat}>+ new cat</button>
          <ul>
          {cats.map((cat) => (
            <li key={cat.id}>
              <p>{cat.content}</p>
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
