import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filtered = useRecipeStore((state) => state.filteredRecipes);
  const all = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const recipes = searchTerm ? filtered : all;

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 && <p>No recipes found.</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
