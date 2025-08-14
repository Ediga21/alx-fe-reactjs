import { Link } from "react-router-dom";

export default function RecipeCard({ id, title, description }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={`/recipe/${id}`} 
        className="text-green-600 hover:underline font-medium"
      >
        View Details
      </Link>
    </div>
  );
}
