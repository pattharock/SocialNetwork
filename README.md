# SocialNetwork
A full stack MERN implementation of a social networking application built on the Micro-services Architecture

This app is a ground up implementation of the way microservices work, highlighting the methodologies employed for asynchronous communication as well as data transfer takes place, between different microservices. A very basic implementaion of an Event Broker has been added as well. 

## client
This directory contains the frotend side of the application which allows users to create, and update posts and comments, built using ReactJS, bootstrapped with Create React App. Head over to the client directory and run `npm install` followed by `npm start` to install the dependencies and start the React App. 

#### Requirements
- [npm](https://www.npmjs.com/package/npm) v7.7.6 or higher


## server
This directorty contains all the microservices required for getting the app started. Before running any of the code in all subirectories of `server`, run `npm install` in each to install all the necesary dependencies.

#### Requirements
 - [NodeJS](https://nodejs.org/en/) v10.17.0 or higher
 - [npm](https://www.npmjs.com/package/npm) v7.7.6 or higher

### posts
After cloning the repository, head over to `server/posts` and run `npm start` in the CLI to start the comment service at `localhost:4000`. This service is responsible for creating new posts posts.

### comments
In `server/comments` run `npm start` to start the comments service at `localhost:4001`. This service is responsible for creating new comments on posts, as well as handle `CommentUpdated` events by asyncronously communicating with the moderation service. 

### moderation
A service has been implemented for the purpose of moderating comments based on preset conditions, flagging them as `pending`, `accepted`, or `rejected`. Post moderaiton, it emits an event of type `CommentUpdated` for updating them in the other services as well. It should be stared on `localhost:4002` by running `npm start` 

### query
This service is responsible for sending data accross to the frontend after querying the same and reducing it to an efficient Data Structure. Updation, where necessary, takes plavce asynchronously. Start it on `localhost:4005` by running `npm start`. As a proof of conecept implementation, the scenario of event sync has been handeled wherein events may be lost due to down-time of service. 


### event-bus
This serves as a simple implementation of how an event broker works in asynchronous communication between services. All the events are stored and can be retreived by the other services to sync all events in case of intermittent service failure. Start the bus at `localhost:4005` by running `npm start`.



