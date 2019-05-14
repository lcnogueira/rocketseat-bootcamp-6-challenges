# Challenge 3 (Github Mobile Marker App) (Third React-Native Module)

## Description
You should create a mobile application from scratch and configure ESLint, EditorConfig, Reactotron, and Babel Root Import.

For this challenge, you should use a map to build an interface to register the localization of GitHub users. When the user presses the map, a modal with a username field will be open in order to get a Github username. After clicking on the save button, a request (use Redux Saga) will be sent to the Github API to get data like user name, avatar, and bio.

The app interface should look like the following.

<img width="602" alt="screens" src="https://user-images.githubusercontent.com/12154623/57719794-e7d0da00-7656-11e9-9805-1ef020d3ca03.png">


## How to start the app
1. Follow along with [Rocketseat installation instructions](https://docs.rocketseat.dev/ambiente-react-native/introducao) to make the environment ready.
2. Start the emulator (or connect your device via usb).
3. Clone this project.
4. Install the project dependencies: `yarn install`.
5. Create an account on [Mapbox](https://www.mapbox.com/) and [get an access token](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/).
6. Set `MAPBOX_ACCESS_TOKEN` in the `.env.example` file.
7. Rename the `.env.example` file to `.env`.
8. Start the app: `react-native run-android` (or `run-ios`).
9. You'll see the app in the emulator (or on your device screen).

## Preview
You can preview the project [here]().

## Debugging

### reactotron
Install [reactotron](https://github.com/infinitered/reactotron) to debug the app. The project configuration is almost done for you. You only need to update the `host` number inside `config/ReactotronConfig.js` in case you're debugging by using a physical device. If you are using an emulator, you can remove this information.

### skills
React Native, Redux Saga, Flux, Styled Components, Github API.
