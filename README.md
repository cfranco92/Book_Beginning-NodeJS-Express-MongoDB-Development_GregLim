# Book_Beginning-NodeJS-Express-MongoDB-Development_GregLim
I've learned a range of topics like user authentication, data, validation, asynchronous JavaScript, password hashing, Express, MongoDB, templating engines, maintaining user sessions and more.

# Chapter 1: Introduction
We will build a blog app which lets users write blog entries once they sign up with an account.

## Benefits of NodeJS
* Firstly, the V8 JavaScript engine used in Google Chrome is fast and can execute thousands of instructions a second.
* Secondly, Node.js encourages an asynchronous coding style making for faster code to manage concurrency while avoiding multithreaded problems.
* Thirdly, because of its popularity, JavaScript offers NodeJS acces to many useful libraries.
* And of course, NodeJS provides us the ability to share code between browser and server since they both use JavaScript code. Based on this, developers have created the MEAN stack, an all-JavaScript web application stack consisting of MongoDB (a database controlled by JavaScript), Express, Angular (a front-end JavaScript framework) and NOdeJS. Using JavaScript everywhere is a major benefit od NodeJS. In fact, there is also a MERN stack where insted of using Angular, React is used as the front end.

In this chapter we understood how a request and respond cycle between a client and server works by coding and starting up a simple server example. We handled requests and responded appropriately whit both text and HTML.

# Chapter 2: Introduction to npm & Express
In our app from chapter one, we imported packages from Node.js itself e.g., http, fs. Now the Node.js community have lots of developers who write custom modules/packages that we can use in our own apps. These packages are hosted on a site called npmjs.com where we can search to seed wich is appropriate to use in our own code. We use npm (or Node Package Manager) to manage the packages that we download. npm is an official helper for Node projects that comes along with Node when we installed it.

```
    $ npm init
```
```
    $ npm install express
```

We learnt how to install third party custom packages using npm. A core custom package is Express which helps make it easier to handle requests and serve responses, thus making app development in Node easier in general. We generated the package.json file that maintains our project metadata particularly its dependencies in an organized manner. We also learnt how to serve static files to make CSS an JavaScript files available to the HTML client files.

# Chapter 3: Beginning Our Blog Project
Install NODEMON
```
    $ npm install nodemon --save-dev
```
We began our blog project with an existing blog template from startbootstrap.com and incorporated it into a Node.js project. Using the nodemon package, we automatically detect code changes in our project and restart the server. Page routes were created to serve the home, about and post pages. A navigation bar was created to contain the links to these routes.

# Chapter 4: Templating Engines
EJS is one of the more popular templating engines and is made bu the people who created Express. All these different templating engines at the end of the day have the same purpose which is to output HTML.

Install EJS:
```
    $ npm install ejs --save
```

Documentations of EJS:
https://ejs.co/#docs 

We refactored our code to use the EJS templating engine to dynamically render HTML pages. We called res.render to dynamically render a view with some variables. To resolve the problem of repeating code in multiple pages for e.g. navigation bar, we used EJS layouts.

# Chapter 5: Introduction to MongoDB
We will use MongoDB as the backend database for our app. You can of course use other solutions to persist your application data e.g.in file, in a relational SQL database, or in another kind of storage mechanism. In this chapter, we wil cover the popular MongoDB for database storage.

Install MongoDB:
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/ 

First run:
```
   brew tap mongodb/brew 
```
```
    brew install mongodb.community@4.0
```

Running MongoDB:
```
    mongod --config /usr/local/etc/mongod-conf
```

Installing MongoDB Compass:
https://www.mongodb.com/download-center/compass

Add Mongoose library:
```
    $ npm install mongoose
```

There are many search constraints conditions you can apply to find. Refer to https://docs.mongodb.com/manual/tutorial/query-documents/ for more information.

We were introduced to MongoDB, a NoSQL database that stores data in the form of collections and documents. Using Mongoose, we connected our Node application with the Mongo database. We defined models using the schema interface to represent the collections in our database. We illustrated Create, Read, Update and Delete operations via Mongoose. Finally, we used MongoDB Compass to see the stored data visually in MongoDB.
