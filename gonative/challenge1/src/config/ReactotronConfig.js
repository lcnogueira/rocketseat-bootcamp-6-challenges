import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  // Change the host number accordingly to your need
  const tron = Reactotron.configure({ host: '10.0.0.14' })
    .useReactNative()
    .connect();

  // eslint-disable-next-line no-console
  console.tron = tron;

  tron.clear();
}
