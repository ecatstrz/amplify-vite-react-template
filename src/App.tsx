import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import catImage1 from './assets/1.jpg';
import catImage2 from './assets/2.jpg';
import React from 'react';

/**
 * The main App component that renders the application.
 */

// this is a different branch
function App() {
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
  };

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
        </div>
      )}
    </Authenticator>
  );
}

export default App;
