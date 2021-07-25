# Profile Viewer

Mobx + StoreContext

 - I created a mobx store to allow easy handling of data with observables. Once an observable variable is modified it will cause a rerendering of the component.
Having a mobx store ,Allow a more flexible integration of future C.R.U.D operations as the app scales.

The use of context provider is to allow data to be accessible to all child components.  The data can be loaded once as compared to loading same data multiple times in every component that uses store data. This is good for performance.

Limitation

- No endpoint to retrieve single user profile on individual page
  - Data always changes when sample endpoint is hit
  - Cannot directly go to a user’s profile url without clicking from Home page because data always changes.

Possible improvements 
  - Adding more jest tests.
  -  HomePage - Adding more criteria to sort profiles.
- Files structure : Add Layouts for UI views ( e.g Side Bar / Header ) 

Live demo : https://montlamedi-profileviewer.netlify.app/

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
