# Challenge 1 (First Node Module)

## Description
Create an app by using ExpressJS, Nunjucks, EditorConfig e ESLint.

### Routes
* `/`: starter route. It renders a page with a form which has just a field that represents the user age.
* `/check`: a route that is invoked by the form in the starter page through `POST` method. It checks the user age and redirects him to `/minor` (in case he is less than 18 years old) or `major` (in case he is older) accordingly to his age;
* `/major`: it renders a page with the text `You are of age and you are x years old`. `x` should be the value inserted through the form input;
* `/minor`: it renders a page with the text `You are underage and you are x years old`. `x` should be the value inserted through the form input.

### Middlewares
The `/major` and `/minor` routes should use middleware to check if the age info is available in the Query Params. If it doesn't exist, the middleware should redirect the user to the home page. By the other hand, in case the info exists, the middleware should keep the common flow.

## How to test the app
1. Install the dependencies: `yarn install`
2. Start the app: `yarn start`
3. Visit `localhost:3000` :rocket:.
