import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import catImage1 from './assets/1.jpg';
import catImage2 from './assets/2.jpg';
import React, { useEffect, useState } from 'react';

/**
 * The main App component that renders the application.
 */

// this is a different branch
// I am trying to make things deploy again
function App() {
  const [selectedOption, setSelectedOption] = React.useState('');
  const [catImageUrl, setCatImageUrl] = useState('');

  const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const response = await fetch('/api/cats');
        const data = await response.json();
        const cat = data.find((item: { __typename: string; }) => item.__typename === 'Cat');
        if (cat) {
          setCatImageUrl(cat.imageUrl);
        }
      } catch (error) {
        console.error('Error fetching cat data:', error);
      }
    };

    fetchCatData();
  }, []);

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
          <img src={catImageUrl} alt="Cat" />
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
