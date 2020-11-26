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