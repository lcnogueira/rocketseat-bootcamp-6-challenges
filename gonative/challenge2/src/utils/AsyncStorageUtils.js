import AsyncStorage from '@react-native-community/async-storage';

const KEY = 'GitIssues:repositories';

export const getLocalRepos = async () => JSON.parse(await AsyncStorage.getItem(KEY));

export const saveLocalRepos = async (repos) => {
  await AsyncStorage.setItem(KEY, JSON.stringify(repos));
};
