// import type { Schema } from "../API";
import type { Schema } from "../../amplify/data/resource";

interface ViewCatProps {
  selectedCat: Schema["Cat"]["type"];
  onClose: () => void;
}

const ViewCat = ({ selectedCat, onClose }: ViewCatProps) => {
  if (!selectedCat) return null;

  return (
    <div>
      <p>{selectedCat.name}</p>
      <img src={selectedCat.imageUrl || ''} alt="Cat" />
      <button onClick={onClose}>Back to Home</button>
    </div>
  );
};

export default ViewCat;
