export const getUsers = () =>
  fetch("http://localhost:3005/users").then((loadedUsers) => {
    return loadedUsers.json();
  });
