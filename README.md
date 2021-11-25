# Would You Rather Project

This project represents a Would You Rather game, where the user will select one of the exist users to login with, once logged in the user will redirect to the home page where user will find the question asked by other users, and using the navigation bar the user can create a question which will be found then in questions page, user can select any question and answer it, once answer other users selections will be shown.

User can navigate to leaderboard page to view his/her rank between other users.

## TL;DR

To get started developing right away:

* [`Look`](#Look) down below

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFYs
└── src
    ├── Components # this foler contains all the components in the app that might be reusable in another component
        ├── App.js # this is the main component that contains all the other components by some way and the navigation bar
        ├── CreateQuestion.js # this component contains a form to add new question
        ├── ErrorPage.js # this component should appear if user try to navigate to wrong question
        ├── Leaderboard.js # this components contains multiple UserCard component arranged by highest rank
        ├── Login.js #this component contains multiple UserCard component to select one to login with
        ├── NavBar.js # this component represent all available pages to navigate to
        ├── QuestionCard.js # this component represent some details about a question that exist in the questions list
        ├── QuestionDetails.js # this component show more details about questions and let user answer it
        ├── QuestionsList.js # this component shows two lists of questions (Unanswered & Answered)
        ├── UserCard.js # this component show details about each user
        ├── UsersList.js # this component lists all users
    ├── Redux # This folder encapsulate all files applies redux methods
        ├── actions # this folder conatins all the actions files 
            ├── login.js # this file contains all actions of user login and logout which then dispatched to reducer
            ├── questions.js # this file contains all actions of question (Add & Answer) which then dispatched to reducer
            ├── users.js # this file contains all actions of users retreiving from fake server which then dispatched to reducer
        ├── middlewares
            ├── index.js # this file where applied Middlewares is called
            ├── logger.js # this file contains a logger middleware function which then called in the index.js
        ├── reducers 
            ├── authedUser.js # contains a reducer for login and logout the user actions
            ├── index.js # this file combine all reducers which is then exported to createStore function in redux index
            ├── questions.js # contains a reducer for adding question and answer question actions
            ├── users.js # contains a reducer for loading users and update user with asked and answered questions actions
        ├── index.js # this file where createStore is called to create a store which then exported to App.js
    ├── utils.js
        ├── _DATA_.js # this file contains a fake database and it API functions
        ├── helpers.js # this filee contains some helper functions
    ├── bootstrap.css # this is a bootstrap CSS file contains some classes helped in developing the project UI
    ├── index.css # Global styles.
    └── index.js # this file where all the react app is rendered to the index.html file
```



### `Look`
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)