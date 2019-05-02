const key = '@GoReact2:repositories';

export const getLocalRepos = () => JSON.parse(localStorage.getItem(key)) || [];

export const saveLocalRepos = (repos) => {
  localStorage.setItem(key, JSON.stringify(repos));
};
