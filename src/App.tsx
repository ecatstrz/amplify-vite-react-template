// import { Authenticator } from '@aws-amplify/ui-react'
// import '@aws-amplify/ui-react/styles.css'
// import { useEffect, useState } from "react";
// import type { Schema } from "../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";

// const client = generateClient<Schema>();

// function App() {
//   const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

//   useEffect(() => {
//     client.models.Todo.observeQuery().subscribe({
//       next: (data) => setTodos([...data.items]),
//     });
//   }, []);

//   function createTodo() {
//     client.models.Todo.create({ content: window.prompt("Todo content") });
//   }
  
    
//   function deleteTodo(id: string) {
//     client.models.Todo.delete({ id })
//   }

//   return (
        
//     <Authenticator>
//       {({ signOut }) => (
//     <main>
//       <h1>My todos</h1>
//       <button onClick={createTodo}>+ new</button>
//       <ul>
//         {todos.map(todo => <li
//           onClick={() => deleteTodo(todo.id)}
//           key={todo.id}>
//           {todo.content}
//         </li>)}
//       </ul>
//       <div>
//         🥳 App successfully hosted. Try creating a new todo.
//         <br />
//         <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
//           Review next step of this tutorial.
//         </a>
//       </div>
//       <button onClick={signOut}>Sign out</button>
//     </main>
        
//       )}
//       </Authenticator>
//   );
// }

// export default App;
// import React from 'react';
import catImage from '/projects/amplify-vite-react-template/src/assets/c2ba9d93-5267-4ac5-9f61-78c83a0d8667.jpg';
// import catImage from 's3://amplify-d3tvty808zfcjf-ma-amplifydataamplifycodege-o6mwyb4yj1zc/cat.jpg';

function App() {
  return (
    <div className="App">
      <img src={catImage} alt="Cat" />
    </div>
  );
}

export default App;
