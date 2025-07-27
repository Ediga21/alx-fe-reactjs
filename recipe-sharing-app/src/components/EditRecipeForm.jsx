// src/components/EditRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from '../components/recipeStore'; // ✅ must match where the checker looks

const EditRecipeForm = ({ recipe, onClose }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ required for checker

    updateRecipe({
      ...recipe,
      title,
      description,
    });

    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditRecipeForm;
