# Challenge 2 - Githuber App (Second React-Native Module)

## Description
You should create a mobile application from scratch and configure ESLint, EditorConfig, Reactotron and Babel Module Resolver. For this challenge, you should build an app by consuming the Github API data to list repositories issues. Use Flexbox to build the app interface.

The app will allow the user to insert the name of an existing repository that will be shown on the first screen. The list of existing issues will appear on a new screen when the user clicks on a repository. Besides that, the user should be capable of filtering issues by "state" (open, closed and all). Both app pages should be stylized like the following images.

<div align="center">
  <img width="500" alt="screens" src="https://user-images.githubusercontent.com/12154623/57534998-ac14d800-7317-11e9-95ac-3f6b51b6297c.png">
</div>

## Requirements
- The input field used to add a new repository should accept information that follows the pattern "organization/repository" (Ex.: "facebook/react")
- When clicking on the "+" button, a new HTTP request should be sent to the Github API to get more information about the repository, and the ID, name, organization and avatar fields should be stored (using `AsyncStorage`) in the device.
- The repository list should be stored like an array in the device storage (AsyncStorage) and this list should be recovered when the app is initialized.
- The user should be able to update the repository list by dragging the list down by using the `<FlatList />` "refresh" option.
- When clicking on a repository, the user should be taken to the issues screen e, only at this moment, the app should request the issues from the API.
- The user should be capable of filtering the issues by "all" (default), "open" and "closed".
- The issue title line shouldn't wrap and a "..." symbol should be used at the end of the line to indicate that there's more content.
- When clicking on an issue, the user should be redirected to the issue URL outside of the app (by using the browser).
- The issues status tabs don't need to use `react-navigation`. You only need two buttons to achieve this task.

## How to start the app
1. Follow along with [Rocketseat installation instructions](https://docs.rocketseat.dev/ambiente-react-native/introducao) to make the environment ready.
2. Start the emulator (or connect your device via usb).
3. Clone this project.
4. Install the project dependencies: `yarn install`.
5. Start the app: `react-native run-android` (or `run-ios`).
6. You'll see the app in the emulator (or on your device screen).

## Preview
You can preview the final project here:

<div align="center">
<img height="500" width="250" alt="screens" src="https://user-images.githubusercontent.com/12154623/57539364-bab3bd00-7320-11e9-9012-c3eec2fd5a79.gif">
<img height="500" width="250" alt="native challenge 2 screen" src="https://user-images.githubusercontent.com/12154623/57539911-e71c0900-7321-11e9-8604-1439542c9ed8.jpg">
<img height="500" width="250" alt="native challenge 2 screen" src="https://user-images.githubusercontent.com/12154623/57539908-e5524580-7321-11e9-950a-db921a0b6bcb.jpg">
</div>



## Debugging

### reactotron
Install [reactotron](https://github.com/infinitered/reactotron) to debug the app. The project configuration is almost done for you. You only need to update the `host` number inside `config/ReactotronConfig.js` in case you're debugging by using a physical device. If you are using an emulator, you can remove this information.

### skills
React Native, Flexbox, Async Storage, Github API.
