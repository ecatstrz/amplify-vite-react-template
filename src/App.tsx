import { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { listCatPictures } from './graphql/queries';
import { createCatPicture } from './graphql/mutations';
import type { CatPicture } from '../amplify/data/types';

function App() {
  const [catPictures, setCatPictures] = useState<CatPicture[]>([]);

  async function fetchCatPictures() {
    const result = await API.graphql(graphqlOperation(listCatPictures)) as { data: { listCatPictures: { items: CatPicture[] } } };
    setCatPictures(result.data.listCatPictures.items);
  }

  useEffect(() => {
    fetchCatPictures();
  }, []);

  async function addCatPicture(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const file = event.currentTarget.catPicture.files[0];
    const reader = new FileReader();
    reader.onload = async () => {
      const imageData = btoa(reader.result as string);
      await API.graphql(graphqlOperation(createCatPicture, { input: {
        imageData, 
        description: file.name
      }}));
      fetchCatPictures();
    };
    reader.readAsBinaryString(file);
  }

  return (
    <div className="App">
      {catPictures.map(catPicture => (
        <img key={catPicture.id} 
             src={`data:image/jpeg;base64,${catPicture.imageData}`} 
             alt={catPicture.description} />
      ))}

      <form onSubmit={addCatPicture}>
        <label htmlFor="catPicture">Choose a cat picture:</label>
        <input type="file" id="catPicture" name="catPicture" accept="image/*" required />
        <button type="submit">Add Cat Picture</button>
      </form>
    </div>
  );
}

export default App;
