import api from '../services/api';

export const fetchRepo = async (fullName) => {
  const { data } = await api.get(`/repos/${fullName}`);
  return data;
};
