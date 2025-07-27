// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div style={{ padding: '1rem' }}>
        <h1>🍲 Recipe Sharing App</h1>

        {/* Navigation Links */}
        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link to="/favorites" style={{ marginRight: '1rem' }}>My Favorites</Link>
          <Link to="/recommendations">Recommendations</Link>
        </nav>

        <Routes>
          {/* Home page: Add, Search, List */}
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />

          {/* Recipe details page */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />

          {/* Favorites page */}
          <Route path="/favorites" element={<FavoritesList />} />

          {/* Recommendations page */}
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;