// export default App;
// import React from 'react';
import catImage from './assets/c2ba9d93-5267-4ac5-9f61-78c83a0d8667.jpg';
// import catImage from 's3://amplify-d3tvty808zfcjf-ma-amplifydataamplifycodege-o6mwyb4yj1zc/cat.jpg';

function App() {
  return (
    <div className="App">
      <img src={catImage} alt="Cat" />
    </div>
  );
}

export default App;
