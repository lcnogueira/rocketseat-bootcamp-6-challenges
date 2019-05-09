import api from '~/services/api';

export const getRemoteRepo = async (repoName) => {
  const { data } = await api.get(`/repos/${repoName}`);
  return data;
};

export const getIssues = async (repoFullName, issuesState, page = 1, perPage = 100) => {
  const { data } = await api.get(
    // gets the first 10 pages by issueState
    `/repos/${repoFullName}/issues?page=${page}&per_page=${perPage}&state=${issuesState}`,
  );
  return data;
};
