export const getRoles = () =>
  fetch("http://localhost:3005/roles").then((loadedRoles) => {
    return loadedRoles.json();
  });
