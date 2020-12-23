/******************************************************************************
 *  @Purpose        : To create a server to connect with front end for getting 
                      request and sending response to client.
 *  @file           : server.js        
 *  @author         : RAHUL RANJAN
 *  @version        : v0.1
 *  @since          : 01-02-2020
 ******************************************************************************/
const databaseConfig = require('./configuration/dbConfig');
const userRouter = require("./router/user.router");
const musicRouter = require('./router/music.router');

const mongoose = require("mongoose");
const express = require("express");
const expressEjsLayouts = require('express-ejs-layouts')
const cors = require('cors')
const morgan = require('morgan')
const app = express();
const hostname = '127.0.0.1';
const port = 8080;

app.use(morgan('dev'));
app.use(cors())
app.set("view engine", "ejs");

app.use(expressEjsLayouts);
app.use(express.static("public"));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Create Express server && Express Router configuration.
 */
app.use("/", userRouter);
app.use('/', musicRouter)

mongoose.connect(databaseConfig.URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("connected to database successfully");
    })
    .catch((err) => {
        return res.status(400).json({ message: "Error while connecting with database" });
    });
const con = mongoose.connection;
con.on("open", () => {
    console.log("Database connected....");
})

//passport authentication
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

//Make the Appliaction run by using listen and port 8080
app.listen(port, hostname, () => {
    console.log(`Server is listening on port ${port} and hostname :`); // ${hostname}
});