import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  author: {
    fontSize: 10,
    color: '#6e6d6d',
    fontWeight: 'bold',
  },
  content: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 0.3,
    borderColor: '#6e6d6d',
  },
});

export default styles;
