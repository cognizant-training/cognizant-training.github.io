document.getElementById('loadUsers').addEventListener('click', () => {
  fetchUsers()
    .then(users => displayUsers(users))
    .catch(error => console.error('Error fetching users:', error));
});

function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });
}

function displayUsers(users) {
  const userList = document.getElementById('userList');
  userList.innerHTML = ''; // Clear existing list
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.name} (${user.email})`;
    userList.appendChild(li);
  });
}
