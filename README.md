## Content
* [About the application](#About-the-application)
* [Stacks](#Stacks)
* [Getting stated](#Getting-start-with-the-project)


## About the application
The following application was developed creating an API with Node, the front-end was developed with React and the mobile application was done with React Native.<br />

## Main feature:
Send the order request through the cellphone or tablet and communicate with the web application to manager the orders status. The status could be waiting, in progress or done.<br />
So then the backend store the data inside the database __MongoDb__ and then interact with the front-end through the __WebSockets__.<br/>

## Stacks: 
* Back-end
  * __Node__ + __Express__ + __Typescript__
  * __Multer__ to upload the images
  * __Socket.io__ to interact with front-end
  * __Mongoose__ + __MongoDb__ to manager the data base
* Front-end
  * __React__ + __Vite__ + __Typescript__
  * __Styled-Components__ to customize it
  * __Socket.io-client__ to interact back-end
  * __React-Toastify__ to notify the messages
  * __Axios__ to access the API
* Mobile
  * __React Native__ + __Expo__ + __Typescript__
  * __Styled-Components__ to customize it
  * __Axios__ to access the API
  * __DotEnv__ to configure PATH variables
<br />

## Getting start with the project 
Download the repository or clone it then get into the project's folder.<br/>
Rename the files _.env.example_ of the folder _web_ e _mobile_ to _.env_ and set the port to _ip:porta_ of the API.<br/>
```bash
$ git clone https://github.com/bruno-carneiro-da-silva/api
```
* Back-end
```bash
$ cd api
$ yarn
$ yarn dev
```
* Front-end
```bash
$ cd ..
$ cd web
$ yarn
$ yarn dev
```
* Mobile
```bash
$ cd ..
$ cd mobile
$ yarn
$ yarn start
```
