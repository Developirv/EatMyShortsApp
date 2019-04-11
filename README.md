## EAT MY SHORTS

## Overview

The Eat My Shorts app will serve as a companion piece to complement the current podcast available on Spotify/ Apple Podcasts.

The app will serve as a tracker for the show hosts to know which episodes they have already published and which episodes are still needed in the context of the material covered. An example would be that the hosts can look at the entries on the app, and see that they have covered 4 episodes from season 6 and no episodes from season 2, this visual aid will not only enhance the show prep, but it will also allow fans to look at the data the show hosts have for each episode, setting up to be a "premium feature" that can be given to Patreon subscribers. Adversely, the show hosts can use the data taken from the "episode ratings" to engage with listeners and be used as a sort of "market reasearch" to help develop future plots and episode topics.

A user will be able to see original content derived by episode, including show notes, and tracking information such as date of origin, characters referenced, and ongoing show segments that may have been referenced in the podcast.

## User Stories

The Initial User stories are included below for project scope. The full user stories can be found in the trello link within "Project Links" below.

## Registration

As a user: I want the ability to see different levels of access on the Eat My Shorts app.

The "Fan" user will have access to list items in the "Shop" view and will be able to comment on any "Episode" entry once they have logged in.

The "Fan" will have access to comment on episode entries, rate the episode entries once they have logged in.

The Guest will have access to view all "Episode" entries uploaded to the app, but would need to login or register for the app to access "Comment", or the "Rate" features.

A "Fan" will only be able to use the features outlined above by successfully using the "sign-in" button on initial log-in.

A guest can only use the features outlined above after successfully signing-in.

## Episode Entries

As a user: I want to see the “Episode Entry” on an individual entry for each post.  The view will allow the user to view the entry details including Episode title, year of origin, Show notes from the hosts, and original artwork made by the hosts for the episode.  

The "Create An Episode" view will allow the hosts to add in the following new data to the database: 

   Episode Title: 
   Episode Description: 
   Episode Date: 
   Episode Original Air Date:
   Episode Show Notes: 
   Episode Rating: 
   Episode Link: 

   Upon clicking "submit" this information will be added to the database with other previous Episode entries.

The user will be able to leave a comment if they have registered.  

## Home Page

As a user: I want the “Home Page” to be available for a user who has signed-in upon clicking "Log-in" or completion of "Sign-up", and for a Guest who has not registered or logged in.

The home page will allow the user to see "Episode" posts that have been uploaded by the podcast hosts.

The "home page" view will allow me to click on an individual "Episode" entry, and upon clicking, the user will be taken to that "Episode" until the user decides to navigate away.

The home page will also show the new entries that the hosts upload.

## Technologies Used

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

MongoDB

Express

React

Nodejs

## Project Links

Trello Board: 

https://trello.com/b/RhLrlwc4/eatmyshorts

Heroku App Link: 

https://eatmyshorts.herokuapp.com/

IMGUR: Image Hosting for project:

https://eatmyshortspod.imgur.com/all


## Eat My Shorts Media Links:

## Spotify 
spotify:show:441Ajk0RlCQpSzUQX0k7Hm

https://open.spotify.com/show/441Ajk0RlCQpSzUQX0k7Hm?si=CVc7VHesSam5VLxrj_S50A

## Apple Podcasts:
https://t.co/dRIrIlxHUV

## Twitter: 
https://twitter.com/eatmyshortspod

@eatmyshortspod

## Instagram: 
https://instagram.com/eatmyshortspod

@eatmyshortspod

##  React Information below for project needs. Will Delete prior to final commit. 



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
