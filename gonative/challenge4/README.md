# Challenge 4 - GoCommerce (Forth React-Native Module)

## Description

You should build an e-commerce app. The user should be able to add products to the cart and, in the end, show the total order value.

Besides that, the data (products and categories) will be provided by an API built with json-server (the API file is inside the challenge folder).

The app interface should look like this:

<img width="903" alt="screens" src="https://user-images.githubusercontent.com/12154623/59198544-5deb3280-8b6a-11e9-8ffe-0e3430d02b75.png">

## Requirements

- The user should be able to add products, update its quantity and remove it from the cart;
- The cart value should be calculated by summing the prices and quantities;
- The categories bar should have a horizontal scroll to show all the categories;
- The asynchronous requests should use Redux Saga;
- The app should show loading signals while the categories and products requests are being processed.

## How to start the app

1. Clone this project.
2. Install the dependencies: `yarn install`;
3. Install the `json-server` dependency globally: `yarn add global json-server`;
4. Start the server: `yarn run server`;
5. Start the app: `react-native run-android (or run-ios)`

### Skills

React Native, Redux, Redux Saga, Redux Sauce, Redux Persist, Styled Components.

### Preview

You can preview the resulting project [here](https://vimeo.com/341353531)

### Tested on Android

This app was tested only on an Android smartphone, so it can behave differently on an IOs platform.

# React Native Boilerplate

This project was bootstrapped with a [template](https://github.com/lcnogueira/react-native-boilerplate) that I have created based on the Rocketseat Bootcamp.
