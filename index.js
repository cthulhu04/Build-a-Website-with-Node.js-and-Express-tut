// index.js

/**
 * Required External Modules
 */
const express = require('express');
const path = require('path');
const { title } = require('process');


/**
 * App Variables
 */
const app = express();
const PORT = process.env.PORT || 8000;

/**
 *  App Configuration
 */

 app.set('views', path.join(__dirname, 'views'));
 app.set("view engine", "pug");
 app.use(express.static(path.join(__dirname, 'public')));
 
/**
 * Routes Definitions
 */

 app.get('/', (req, res) => {
     //res.status(200).send("WHATABYTE: Food For Devs");
     res.render('index', { title: "home" });
 })

 app.use('/user', (req, res) => {
     res.render('user', {title: 'Profile', userProfile: {nickname: 'Auth0'} });
 })

app.use('/logout', (req, res) => {
    // next go here for the second part of this tutorial
    // https://auth0.com/blog/create-a-simple-and-secure-node-express-app/
   
    if(req.originalUrl === "/logout") {
        res.render('index', { title: "home" });
    } else {
        console.log('can not log out');
    }
});

// app.use('/demo', (req, res) => {
//     res.render('demo', { 
//         intro : false,
//     });
//     console.log('demo page');
// });

/**
 * Server Activation
 */

 app.listen(PORT, () => {
    console.log(`Listening to requests on http://localhost:${PORT}`);
 })