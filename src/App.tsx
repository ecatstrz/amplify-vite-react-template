// import catImage from './assets/c2ba9d93-5267-4ac5-9f61-78c83a0d8667.jpg';

// /**
//  * The main App component that renders the application.
//  */
// function App() {
//   return (
//     <div className="App">
//       <img src={catImage} alt="Cat" />
//     </div>
//   );
// }

// export default App;
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import catImage from './assets/1.jpg';

/**
 * The main App component that renders the application.
 */
function App() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="App">
          <img src={catImage} alt="Cat" />
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
