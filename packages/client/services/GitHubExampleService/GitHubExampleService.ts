const getUsers = async (url, options = {}) => {
  return fetch(url, options).then(response => response.json());
};

export const GitHubExampleService = {
  getUsers: getUsers
}
