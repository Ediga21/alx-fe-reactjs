import { useState } from 'react';
import SearchForm from './components/SearchForm';
import { searchUsers } from './services/githubService';

export default function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (criteria) => {
    setLoading(true);
    const users = await searchUsers(criteria);
    setResults(users);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>
      <SearchForm onSearch={handleSearch} />
      
      {loading ? (
        <p className="text-center mt-4">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {results.map((user) => (
            <div key={user.id} className="bg-white p-4 rounded shadow">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <h2 className="text-lg font-semibold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}