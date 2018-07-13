### React/Redux-Offline point of sale application
As a proof of concept this application will function as a progressive offline first app.

#### How does it work?
* Service worker (production build only) will cache all assets on first load and prioritise the use of them on subsequent page loads
* Product details and stock levels from the API are stored using [rt2zz/redux-persist](https://github.com/rt2zz/redux-persist) and re-hydrated if they can't be collected
* [redux-offline/redux-offline](https://github.com/redux-offline/redux-offline) monitors the online/offline status of the app and will queue up any requests that fail to be processed once the app goes back online

#### Installation:
1. `git clone https://github.com/chriscornford/pos-react.git`
2. `cd pos-react && yarn`
3. Ensure to add correct domain depending on your setup to `API_URL` inside `config.js`
4. Run development build `yarn start` and navigate to given local URL

##### Running production build
1. Follow installation steps
2. `yarn build`
3. `yarn add global serve`
4. `serve -s build`

Potential issues to consider:
* Item stock levels aren't real time, could run into issues if a product goes out of stock (using sockets would help solve this).
* Product API won't be able to handle pulling down thousands of products at a time.
* On refresh cart overrides its contents with the default state, this would cause issues as stock still appears to have decreased (redux-persist is being greedy and persisting changes to stock levels).
* If the API comes back with an error due to an item being out of stock the app doesn't handle it.

As this is a rough prototype here are the ways I would improve it:
* Add spec tests
* Ensure all components and containers have correct prop types
* Use immutable.js and reselect to clean up nasty code
* Use sockets to get more accurate real time data!!
* Use Eslint to ensure consistent code

References:
* [Introducing Redux Offline: Offline-First Architecture for Progressive Web Applications and React Native](https://hackernoon.com/introducing-redux-offline-offline-first-architecture-for-progressive-web-applications-and-react-68c5167ecfe0)
* https://github.com/redux-offline/redux-offline
* https://github.com/reduxjs/redux/tree/master/examples/shopping-cart

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), which provides a simple way to start React projects with no build configuration needed.