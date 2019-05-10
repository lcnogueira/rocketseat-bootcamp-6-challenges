# Challenge 1 - Posts List App (First React-Native Module)
You should create a mobile application from scratch and configure ESLint, EditorConfig, Reactotron, ReactDevTools and Babel Module Resolver. You should reproduce the following layout by using FlexBox:

![feed](https://user-images.githubusercontent.com/12154623/57330413-53adc280-70ec-11e9-846f-ed1f136a5834.png)

You'll create a posts feed that looks like the above image.

## Requirements
1. The layout should be created by using only the `<View />`, `<Text />` and `<ScrollView />` components from React Native.
2. The white box should be in a separate component called `Post` inside a file called `Post.js`.
3. The posts should be stored in the main component state and each one should contain information about the post title, author and description.

## How to start the app
1. Follow along with [Rocketseat installation instructions](https://docs.rocketseat.dev/ambiente-react-native/introducao) to make the environment ready.
2. Start the emulator (or connect your device via usb).
3. Clone this project.
4. Install the project dependencies: `yarn install`.
5. Start the app: `react-native run-android` (or `run-ios`).
6. You'll see the app in the emulator (or on your device screen).

## Debugging
You can use `reactotron` or `react-devtools` (or both) to debug the app.

### reactotron
Install [reactotron](https://github.com/infinitered/reactotron) to debug the app. The project configuration is almost done for you. You only need to update the `host` number inside `config/ReactotronConfig.js` in case you're debugging by using a physical device. If you are using an emulator, you can remove this information.

### react-devtools
On another terminal tab, run `yarn run react-devtool`. The `react-devtools` standalone application will open. Once you refresh the app, `react-devtools` will connect and you'll see the components tree.

### troubleshooting
If you're debugging via USB and you have any trouble on using `react-devtools` you can run:

```
adb reverse tcp:8097 tcp:8097
```

## Skills
React Native, Flexbox.
