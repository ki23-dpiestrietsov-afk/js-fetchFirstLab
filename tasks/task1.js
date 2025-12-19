async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return data.map(user => ({
    id: user.id,
    name: user.name
  }));
}

module.exports = fetchUsers;
