import RecipeCard from "../components/RecipeCard";

export default function Home() {
  // Temporary recipes for now
  const recipes = [
    { id: 1, title: "Jollof Rice", description: "A tasty West African dish." },
    { id: 2, title: "Pasta Alfredo", description: "Creamy and delicious pasta." }
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">All Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard 
            key={recipe.id} 
            id={recipe.id} 
            title={recipe.title} 
            description={recipe.description} 
          />
        ))}
      </div>
    </div>
  );
}
