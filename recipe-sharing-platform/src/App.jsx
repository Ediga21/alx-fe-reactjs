import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetail from "./components/RecipeDetail"; // Import the detail page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* Detail page route */}
      </Routes>
    </Router>
  );
}

export default App;