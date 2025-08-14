import { createContext, useState, useContext } from "react";

const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (title, description) => {
    const newRecipe = { id: Date.now(), title, description };
    setRecipes((prev) => [...prev, newRecipe]);
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  return useContext(RecipeContext);
}
