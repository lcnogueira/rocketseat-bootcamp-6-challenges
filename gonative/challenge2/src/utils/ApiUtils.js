import api from '~/services/api';

export const getRemoteRepo = async (repoName) => {
  const { data } = await api.get(`/repos/${repoName}`);
  return data;
};
