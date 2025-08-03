const BASE_URL = 'https://api.github.com/search/users';

export async function searchUsers({ username, location, minRepos }) {
  let query = username;

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  const response = await fetch(`${BASE_URL}?q=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.items || [];
}