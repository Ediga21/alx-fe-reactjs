import { useParams } from "react-router-dom";

export default function RecipeDetails() {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Recipe Details</h2>
      <p className="text-gray-700">Details for recipe with ID: {id}</p>
    </div>
  );
}
