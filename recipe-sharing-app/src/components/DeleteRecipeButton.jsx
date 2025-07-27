import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore'; // ✅ Correct path

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this recipe?');
    if (confirmDelete) {
      deleteRecipe(recipeId);
      navigate('/'); // Go back to homepage after deletion
    }
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: '10px', color: 'white', background: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
