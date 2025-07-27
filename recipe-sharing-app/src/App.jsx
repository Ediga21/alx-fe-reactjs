// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails'; // ✅ Import the new component

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          {/* Home page: show form and list */}
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          {/* Recipe details page */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;