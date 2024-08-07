import '@aws-amplify/ui-react/styles.css';
import { useState } from 'react';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import UploadCat from './pages/UploadCat';
import ViewCat from './pages/ViewCat';
import type { Schema } from "../amplify/data/resource";

function App() {
  const [showHome] = useState<boolean>(true);
  const [selectedCat, setSelectedCat] = useState<Schema["Cat"]["type"] | null>(null);

  return (
    <div className="App">
      <SignIn />
      {showHome ? (
        <Home />
      ) : (
        <UploadCat />
      )}
      {selectedCat && (
        <ViewCat selectedCat={selectedCat} onClose={() => setSelectedCat(null)} />
      )}
    </div>
  );
}

export default App;
