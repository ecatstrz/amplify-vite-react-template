import { useEffect, useState } from 'react';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>();

const Home = () => {
  const [selectedCat, setSelectedCat] = useState<Schema["Cat"]["type"] | null>(null);
  const [cats, setCats] = useState<Array<Schema["Cat"]["type"]>>([]);
  const [showCatDetails, setShowCatDetails] = useState<boolean>(false);

  useEffect(() => {
    const subscription = client.models.Cat.observeQuery().subscribe({
      next: (data) => setCats([...data.items]),
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <select value={selectedCat?.id || ''} onChange={(e) => setSelectedCat(cats.find((cat) => cat.id === e.target.value) || null)}>
        <option value="">Select a cat</option>
        {cats.map((cat) => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>
      <button onClick={() => setShowCatDetails(true)}>View Selected Cat</button>
      {showCatDetails && selectedCat && (
        <div>
          <p>{selectedCat.name}</p>
          <img src={selectedCat.imageUrl || ''} alt="Cat" />
          <button onClick={() => setShowCatDetails(false)}>Back to Home</button>
        </div>
      )}
    </div>
  );
};

export default Home;
