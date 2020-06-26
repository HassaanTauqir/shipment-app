This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technology Stack

This project is built using
- React
- Typescript
- NPM

## How to run

Run the following commands

For development environment
```
npm install
npm start
```

For production environment
```
npm install
npm run start:prod
```

See [Available Scripts](#available-scripts) for more information.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the necessary `node_modules` required to run this application. Please make sure to run this script once before using any other script.

### `npm start`

Runs the client app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Runs the server on port 8000
Open [http://localhost:8000/shipments](http://localhost:8000/shipments) to view it in the browser.

The page will hot reload if you make edits.<br />
You will also see any lint errors in the console.

If you want to run client and server separately, you can replace `start` with `client`/`server` respectively in the command.

**Important Note**
Please make sure the server port is not being used when command is run, otherwise the server won't start.

### `npm run start:prod`

Builds and Runs the client app in the production mode (see [build](#npm-run-build) for more details) using Express server.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

Runs the server on port 9000
Open [http://localhost:9000/shipments](http://localhost:9000/shipments) to view it in the browser.

If you want to run client and server separately, you can replace `start` with `client`/`server` respectively.

**Important Note**
Please make sure the server port is not being used when command is run, otherwise the server won't start.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
