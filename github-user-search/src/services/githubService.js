const BASE_URL = 'https://api.github.com/search/users?q=';

export async function searchUsers({ username, location, minRepos }) {
  let query = username;

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  const url = `${BASE_URL}${encodeURIComponent(query)}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.items || [];
}