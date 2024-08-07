import { useState } from 'react';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>();

const UploadCat = () => {
  const [showUpload, setShowUpload] = useState<boolean>(false);

  const createCat = () => {
    const name = window.prompt("Cat name");
    if (!name) return;

    const imageUrl = window.prompt("Cat image URL");
    if (!imageUrl) return;

    const confirmed = window.confirm(`Create a new cat with name "${name}" and image URL "${imageUrl}"?`);
    if (confirmed) {
      client.models.Cat.create({ name, imageUrl });
      setShowUpload(false);
    }
  };

  return (
    <div>
      {showUpload ? (
        <>
          <button onClick={createCat}>Create New Cat</button>
          <button onClick={() => setShowUpload(false)}>Cancel</button>
        </>
      ) : (
        <button onClick={() => setShowUpload(true)}>+ new cat</button>
      )}
    </div>
  );
};

export default UploadCat;
