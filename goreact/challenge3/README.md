# Challenge 3 - Developer Marker App

## Description
Create a project from scratch by using create-react-app. Besides that, use ESLint, EditorConfig and Prettier tools in this project.

For this challenge, you should build an app by using "React Map GL" library from Uber. The app is about a developers localization repository. The user should be able to add developers to the map by clicking it and inserting the developer github username. The app should get the user data via github API and save it in redux state.

The app should look like this:

![listagem](https://user-images.githubusercontent.com/12154623/57225888-fd555c80-6fe3-11e9-9597-89a25b05efb3.png)

You can see a list of added users on the left menu bar and the users' avatars pointing to their positions on the map.

## Requirements
1. The user should be able to click on the map and add a new user to the clicked position;
2. A modal with a github username single field should open
3. The app should request the github API data like user name and avatar and save them in redux store.
4. The added user should appear on the left menu bar
5. The app should display messages in success and failure cases (you can use the react-toastify library).
6. The user should be able of removing the github users from the list by clicking on the "x" button on the sidebar.

## How to start the app
1. Create an account on [Mapbox](https://www.mapbox.com/) and [get an access token](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/).
2. Set `REACT_APP_MAPBOX_ACCESS_TOKEN` and `REACT_APP_GITHUB_USER` variables in the `.env.example` file.
3. Rename the `.env.example` file to `.env`.
4. Install the dependencies: `yarn install`.
5. Start the server: `yarn start`.
6. Visit `localhost:3000` :nerd_face:.

### Skills
React, Redux, Redux Saga, CSS, React Map GL (Uber).

### Preview
You can preview the project [here]()

### create-react-app
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

