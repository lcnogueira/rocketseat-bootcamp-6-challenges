import api from '~/services/api';

export const getRemoteRepo = async (repoName) => {
  const { data } = await api.get(`/repos/${repoName}`);
  return data;
};

export const getIssues = async (repoFullName, issuesState) => {
  const { data } = await api.get(`/repos/${repoFullName}/issues?state=${issuesState}`);
  return data;
};
