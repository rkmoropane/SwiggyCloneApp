# Backend Development with NodeJS — ZAIO Institute of Technology

## About this Course

In this course we will learn Asynchronous Node concepts, we will cover web servers and we will deploy our app to Heroku.

## Prerequisites

- HTML
- CSS
- JavaScript
- NodeJS Intro

## What's Inside

This course contains **16 sections**:

1. **Introduction to NodeJS, Express and MongoDB** — 12/12 | 0 incomplete | 99 mins
2. **Set up NodeJS project and basics deep dive** — 19/19 | 0 incomplete | 231 mins
3. **User Authentication** — 23/23 | 0 incomplete | 369 mins
4. **Getting Started with Food Delivery App** — 15/15 | 0 incomplete | 404 mins
5. **Implementing Dotenv file & a few Optimizations** — 4/4 | 0 incomplete | 37 mins
6. **Adding Pagination** — 4/4 | 0 incomplete | 28 mins
7. **Implementing Refresh Token for strong JWT Authentication** — 4/4 | 0 incomplete | 56 mins
8. **Blacklisting refresh Token using Radis & Applying few optimizations** — 13/13 | 0 incomplete | 209 mins
9. **Fixing Timezone error messages for no records available in Nodejs** — 7/7 | 0 incomplete | 44 mins
10. **Indexing in MongoDB** — 7/7 | 0 incomplete | 71 mins
11. **Update Profile Picture / Fix some Security Loopholes** — 4/4 | 0 incomplete | 28 mins
12. **Deploy Nodejs App for production to Heroku (It's Paid not free anymore)** — 8/8 | 0 incomplete | 55 mins
13. **E-Commerce App - Transform from Food Delivery app with appropriate changes** — 18/18 | 0 incomplete | 271 mins
14. **Integrate Stripe Payment Gateway** — 6/6 | 0 incomplete | 59 mins
15. **Some Important Bonus Videos** — 7/7 | 0 incomplete | 63 mins
16. **Understand & create Cronjobs** — 4/4 | 0 incomplete | 52 mins

## You'll Learn

- Making API calls to third-party services
- Asynchronous NodeJS
- Web servers
- GET requests
- REST APIs
- Express.js
- MongoDB and Mongoose
- User authentication and authorization
- JWT authentication
- Refresh tokens and token blacklisting
- Redis caching
- Pagination
- MongoDB indexing
- File uploads
- Geospatial queries
- E-commerce APIs
- Stripe payment integration
- Heroku deployment
- Cron jobs

---
## About this course:
### 1. NodeJS => Is an opensource and crossplatform, a runtime environment for executing JavaScript code outside of a website.
 > Ryan Dahl: Creator of NodeJS.
 > Used for Back-End Services => API(Application Programming Interface)

 > Known for building Highly-Scalable, Data-intensive & Real-time Apps used to power our client application

 > It's needed because - It is very easy to get started, it is great for prototyping & Agile development, used by many companies. It also for super-fast & highly scalable applications. Javascript is everywhere.

 > We can write a clean and more consistent codebase.

 > Large ecosystem of open-source libraries

 > Popular companies using NodeJS
  - Paypal
  - Uber
  - Netflix
  - Walmart & many more
> With NodeJS the apps are build almost twice as fast with fewer people & written in 33% fewer lines of code. It was constructed with 40% fewer files. It was 2X request/sec. And lastly response time was 35% faster response time.

### 2. Node Architecture:
- Before Javascript was used to build the application that runs inside the Browser. 
- Javascript engine, converted Javascript code to machine code. e.g **Microsoft** uses **Chakra** as Javascript engine, **Explore** uses **SpiderMonkey** and **Chrome** uses **v8** -- faster Javascript engine. The code executed in one browser is not the same as the one executed in another different Browser.
- Browser have various limitations but NodeJS doesnt.
- NodeJS is compared to Ruby, C# and Many more programming languages but Node is not a programming language, is not a framework, but a runtime environment for executing Javascript code.

### 3. How NodeJS works?
- Has non-Blocking Asynchronous feature. Serving many things at the same time.
- Has a single Thread for handling multiple requests. It can serve a different request at the  time, places it in an event queue. 
- This feature makes node very ideal I/O-intensive apps.

- in contrast to above feature, we have Blocking Synchronous feature. Different thread serve one request at the time, this feature makes the these threads more busy, some threads wait. It will need to utilize many more hardwares.

- NodeJS is not good for CPU-intensive apps -- image manipulations applications - When performing calculations it is not recommended. it should only be used for data-intensive applications, event real-time applications, where you need a lot of processing or interaction with database to manage the data, where the nodejs is needed the most.

### 4. What is ExpressJS
- Is free, open-source web application framework for Node.js
- It is used for designing and building web applications quickly and easily compared to raw nodeJS
- Only requires Javascript, so making it easier for developers to build web apps & APIs without any effort.
- It's wrapper on-top of NodeJS which comes in handy in reducing your time and fasten up your development time.
- Lightweight and helps to organize web apps on server-side into a more organized MVC architecture(Model-view Control).

#### Sample code without ExpressJS
```nodejs
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('Hello world');
        res.send();
    }
    if (req.url == '/api/restaurants') {
        res.write('Return restaurant list');
        res.send();
    }
})

server.listen(3000);
console.log('Listen on port 3000');

```

#### Building RESTful APIs with Express
```nodejs
const express = require('express');
const app = express();

// apis
app.post('/', (req, res) => {
    res.send('Hello world');
});

app.post('/api/restaurants', (req, res) => {
    res.send('Return restaurants list');
});

app.list(300, () => console.log('Listening on port 3000...'));

```
 > Includes the syntax for all CRUD operations
 > You can change the PORT number to any available one.

#### Why ExpressJS needed?
 > Saves development time. Develop in a quick manner
 > The need for the use of middleware, access some particular request outside the scope of your application like accessing the amazon apis, where you need to login first.
 > It is easy to use, just fewer lines. You can certain functions only when you have permissions.
 > Provides highly advanced Routing mechanism which helps in preventing the state of the web page, with the help of url.
 > Easy debugging, resolve things at the quick time.
 > Templating engines that allows to build dynamic content of the webpage, but building html templates of the server side.  `.ejs` file extension

### 5. What is MongoDB.
- No-sql Database
- Stores data in flexible, JSON-like documents(BSON)(Binary JSON)
- E.G. database => collections of BSON => posts & users
- e.g. Users => {name: "Prem"} {first_name: "James"}
- Schema-Less, schema it is structured model, which shows what kind of data you can pass in that database. 
- Comparison of MongoDB with MySQL:

 **SQL Term/Concepts**
 > Database
 > Tables
 > Rows
 > Columns

 **MongoDB Terms/Concepts**
 > Database
 > Collections
 > Documents (BSON)
 > Fields

#### example: User collections
```
{
    name: "Prem",               field: value
    age: 15,                    field: value
    status: "A",                field: value
    groups: ["Games", "News"]   field: value
}
{
    name: "Diya",                   field: value
    age: 25,                        field: value
    status: "Unmarried",            field: value
    groups: ["Political", "News"]   field: value
}
```

### 6. Mongodb: Connect to mongodb:
- The following is your connection string to your cluster:
 > `mongodb+srv://rkmoropane_db_user:<db_password>@cluster0.tsvcbkl.mongodb.net/`
 > `mongodb+srv://rkmoropane_db_user:<db_password>@cluster0.tsvcbkl.mongodb.net/`


### 7. Different types of requests in server:
- API requests:
 > **Get**: used to fetch data from server. Getting user details after logging in from the server.
 > **Post**: used to add some data on server. e.g. Adding a new user in databases, while signing up.
 > **Put**: used to update data (all user data) on server. e.g. updating user name, phone number and email ID.
 > **Patch**: used to update data (partial data) on server. e.g. Updaing onlu user phone number or email ID.
  > **Delete**: used to delete data from server. E.g. Deleting user from database.

##  
### 8. What's inside this Module:
- Creating new Nodejs Project & Setting it up (for Typescript)
- Understanding Routing and Middleware Basics
- Connect to MongoDB
- Handling Environment Variables
- Structure NodeJS Project along with Error Handling.
- Basics of Schema (Models)
- Implementing Request Validating & Overview of Http Error Status Code


### 9. Creating new Nodejs project & setting it up (for typescript)
- Set up NodeJS project and basics deep dive
- initialize your app:
```
npm init
```
- Install typescript and ts-node globally:
```
npm install -g typescript ts-node
```
TS-Node
 > ts-node it is used to transform the typescript to javascript which enables us to use Typescript with NodeJS. And it is executing all of it at runtime. 
 > Read more about it here: `https://www.npmjs.com/package/ts-node`

- Package installation:
```
npm install typescript ts-node express node @types/express @types/node nodemon @types/nodemon

```
- More about type/express:
 > `https://www.npmjs.com/package/@types/express`
 > Contains type definition for Express (http://expressjs.com).
- Along with all these we need the nodemon:
 > it is tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

- Updating the dependencies to the latest you can simply run:
```
npm update
```
in your package.json:
```.js
  "dependencies": {
    "@types/express": "^5.0.6",
  }
```
 > the `@types/express` will simply be updated to the latest version because of the `^` which means run it up against the latest version to date.
- Now when you run the scripts:
 > `npm test` which is inside the script key.
 > It helps us to pass any command you want which will be executed once you run the particular script.
 > e.g. let's add command for starting this project.
 ```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npm start"
    "ts-start": "npm start"
  },
  ```
> to run script 'ts-start' run the following command:
 ```
 npm run ts-start
```
- Create the configuration for Typescript: `tsconfig.json` add the contents.
- to run your typescript file, either using ts-node. use the following scripts:
> ts-node
```
  "scripts": {
    "start": "nodemon -exec ts-node src/index.ts"
  },
  ```
- Use the command `rs` restart the server in the terminal:
```
Server is running on port 3000
rs
[nodemon] starting `ts-node src/index.ts`
Server is running on port 3000
```


### 10. Promise, async await, and try catch
- Promise: 
 > Represents a result that may be available now, later, or never if the operation fails.
--- 


---
# Quiz Questions & Answers

## Day 1 — Introduction to NodeJS, Express, MongoDB & APIs

### 1. Why is Node.js popular for scalable and high-performance applications?
**Answer: C. It is built on the V8 JavaScript runtime engine**

### 2. What type of applications is Node.js particularly well-suited for?
**Answer: A. Real-time applications and APIs**

### 3. What does Node.js's event-driven, non-blocking I/O model allow?
**Answer: D. Asynchronous handling of events**

### 4. What does Node.js's single-threaded event-driven architecture mean?
**Answer: C. Uses a single thread to handle multiple simultaneous connections**

### 5. What is the primary function of the V8 engine?
**Answer: A. Parses and executes JavaScript code**

### 6. How does Node.js handle blocking I/O operations?
**Answer: D. By employing asynchronous callbacks and event-driven architecture**

### 7. What data model does MongoDB use?
**Answer: B. Document model**

### 8. What is BSON in MongoDB?
**Answer: B. A binary-encoded serialization of JSON-like documents**

### 9. What is the purpose of middleware in Express.js?
**Answer: C. To handle HTTP requests and responses**

### 10. Which HTTP method is used to retrieve data in a REST API?
**Answer: A. GET**

### 11. Which HTTP method is commonly used for form submission?
**Answer: B. POST**

### 12. Which HTTP method is commonly used to update an existing resource?
**Answer: C. PUT**

### 13. What is the purpose of the DELETE HTTP method?
**Answer: D. To request the removal of a specified resource**

### 14. What is the purpose of a Promise object in Node.js?
**Answer: A. To handle asynchronous operations and represent a value that might be available now, or in the future, or never**

### 15. What is the purpose of the `await` keyword?
**Answer: B. To wait for a Promise to settle and return its result**

### 16. Where should code that may throw an exception be placed?
**Answer: A. `try` block**

### 17. What is middleware in Node.js web applications?
**Answer: A. Functions that have access to request and response objects in the HTTP cycle**

### 18. What is the typical order of middleware execution?
**Answer: B. Middleware functions are executed before route handlers**

### 19. What is the purpose of error-handling middleware?
**Answer: D. To handle errors thrown by route handlers**

### 20. What is the purpose of environment variables?
**Answer: B. To store sensitive information like API keys**

### 21. How do you access environment variables in Node.js?
**Answer: D. Accessing it through the `process.env` object**

### 22. Which method is commonly used in Node.js to load environment variables?
**Answer: C. Using the dotenv module**

### 23. How can asynchronous errors commonly be handled in Node.js callbacks?
**Answer: C. Using callback functions with error as the first parameter**

### 24. What is the purpose of `process.on('uncaughtException', ...)`?
**Answer: B. To handle unhandled exceptions that occur during runtime**

### 25. Which method is commonly used to log errors in Node.js?
**Answer: A. `console.error()`**

---

## MongoDB Schema, CORS & Authentication

### 26. What is a MongoDB schema?
**Answer: A. A set of predefined rules for data validation**

### 27. How does MongoDB provide schema flexibility?
**Answer: B. It allows dynamic and flexible schemas**

### 28. What is a schema in database design?
**Answer: D. A structure that defines the organization of data**

### 29. What does CORS stand for?
**Answer: A. Cross-Origin Resource Sharing**

### 30. Which headers are commonly associated with CORS?
**Answer: D. `Access-Control-Allow-Origin` and `Access-Control-Allow-Headers`**

### 31. Which Express middleware is commonly used to enable CORS?
**Answer: A. `cors()`**

### 32. What is the purpose of an email verification token?
**Answer: A. To confirm the user's identity and ownership of the email address**

### 33. Which email service is commonly used for sending verification emails?
**Answer: B. SendGrid**

### 34. How can you ensure an email is unique during registration?
**Answer: D. Query the database to check if the email already exists**

### 35. Why are passwords encrypted or hashed?
**Answer: A. To enhance security and protect user credentials**

### 36. Which password hashing algorithm is commonly used in Node.js?
**Answer: B. bcrypt**

### 37. What is salting in bcrypt?
**Answer: D. Applying a random value to each password before hashing**

### 38. Where is user information stored in a JWT?
**Answer: B. Payload**

### 39. How can a JWT be transmitted?
**Answer: D. All of the above**

### 40. How does JWT authentication contribute to application security?
**Answer: B. By providing a secure way to transmit user information**

### 41. What is the purpose of a JWT secret key?
**Answer: C. It signs the token to verify its authenticity**

### 42. What is the role of authentication middleware?
**Answer: B. It handles user authentication and authorization**

### 43. How does authentication middleware protect routes?
**Answer: C. By preventing unauthorized access to protected routes**

### 44. What is a risk of not using proper authentication middleware?
**Answer: A. Exposure of sensitive information**

---

## Password Reset, Postman & User Profiles

### 45. Which HTTP method is commonly used for a password reset request?
**Answer: B. POST**

### 46. What information is commonly included in a password reset request?
**Answer: C. User's email address**

### 47. What is Postman primarily used for?
**Answer: C. Testing and sending HTTP requests to APIs**

### 48. What is the purpose of fetching user profiles?
**Answer: B. To display user details on the frontend**

### 49. Which REST method is commonly used to fetch a user profile?
**Answer: A. GET**

### 50. What would a user profile response typically contain?
**Answer: D. User's profile details such as name, email, and avatar**

---

## File Uploads & Geospatial Queries

### 51. What is Multer?
**Answer: A. A file uploading middleware**

### 52. Which HTTP method is commonly used for file uploads?
**Answer: B. POST**

### 53. What does Multer handle?
**Answer: C. Parsing form data**

### 54. What are geospatial queries in database systems?
**Answer: C. Queries that involve location-based information**

### 55. Which database systems support geospatial queries?
**Answer: D. Both relational and NoSQL databases**

### 56. How is geospatial data typically represented in the course context?
**Answer: A. Only latitude and longitude**

### 57. How can `populate()` be used to retrieve restaurant menu item details?
**Answer: A. `populate({ path: 'menuItems' })`**

### 58. What is the purpose of query projection?
**Answer: B. To specify which fields to include or exclude in query results**

### 59. What does `populate()` do between collections?
**Answer: C. Retrieves related data from another collection using references**

---

## CRUD, Dotenv & Pagination

### 60. What CRUD operation is used when adding user addresses?
**Answer: B. Create**

### 61. What does the Read operation do for user addresses?
**Answer: A. To display or retrieve existing address information**

### 62. What does the Delete operation do for user addresses?
**Answer: D. Removing existing address records**

### 63. What is the purpose of dotenv?
**Answer: B. To manage environment variables**

### 64. How do you load and configure dotenv?
**Answer: C. Using `require('dotenv').config()`**

### 65. What file extension is commonly used for environment variables?
**Answer: A. `.env`**

### 66. Which HTTP method is commonly used for a paginated API?
**Answer: A. GET**

### 67. Which parameters are typically used for pagination?
**Answer: C. `pageNumber` and `pageSize`**

### 68. Which npm package is commonly used for MongoDB pagination?
**Answer: B. `mongoose-pagination`**

---

## JWT Refresh Tokens & Redis

### 69. What is the purpose of a secret key in token authentication?
**Answer: A. To sign and verify tokens for authentication**

### 70. What commonly triggers automatic token renewal?
**Answer: D. The expiration of the Access Token**

### 71. How can a new Access Token and Refresh Token be generated automatically when the access token expires?
**Answer: A. By including an automatic token renewal mechanism on the client side**

### 72. Why should refresh tokens be stored securely?
**Answer: C. To minimize the risk of token theft or misuse**

### 73. Why is refresh-token blacklisting necessary?
**Answer: A. To prevent unauthorized use of compromised or stolen Refresh Tokens**

### 74. What security concern does refresh-token blacklisting address?
**Answer: B. Unauthorized access using compromised tokens**

### 75. What is the purpose of Redis caching?
**Answer: C. To speed up data access by storing frequently accessed data in memory**

### 76. Which Redis method is commonly used in the course context to establish a connection?
**Answer: A. `createClient()`**

### 77. How can Redis password authentication be performed?
**Answer: A. By using the `auth()` method with the password**

### 78. What does the `cluster` option do in Redis?
**Answer: B. It enables clustering support**

### 79. What is an advantage of Redis for refresh-token blacklisting compared with a traditional database?
**Answer: A. Faster access and retrieval of data**

### 80. Which Redis data structure is commonly used for blacklisted refresh tokens?
**Answer: B. Sets**

### 81. How can Redis be used to implement refresh-token blacklisting?
**Answer: A. By using Redis as an in-memory store to maintain a list of blacklisted tokens**

### 82. Why is refresh-token management important across multiple devices?
**Answer: B. To prevent unauthorized access from multiple devices**

### 83. What is a risk of not properly managing refresh tokens across multiple devices?
**Answer: A. Unauthorized access from compromised devices**

### 84. How can Redis manage refresh tokens for different devices?
**Answer: D. By associating each refresh token with a specific device identifier**

---

## Timezones, Errors & Server Infrastructure

### 85. Why is the current date/time important in a Node.js application?
**Answer: B. To ensure consistency across different devices**

### 86. What can happen when time zones are not handled correctly?
**Answer: C. Incorrect date and time representation**

### 87. How can port conflicts be addressed?
**Answer: A. By using environment variables for dynamic port assignment**

### 88. What response status code can be returned when a successful request has no records to return?
**Answer: A. 204 No Content**

### 89. Why is logging "No Records Found" useful?
**Answer: C. It assists in debugging and monitoring**

### 90. How can "No Records Found" errors be customized?
**Answer: B. By utilizing descriptive error messages**

### 91. What is MongoDB indexing used for?
**Answer: B. Improving query performance**

### 92. What is a MongoDB index?
**Answer: A. A data structure that improves the speed of data retrieval**

### 93. What is the primary purpose of creating an index on a field?
**Answer: C. To improve query performance on that field**

### 94. Which type of index can be used for a range of values?
**Answer: A. Single field index**

### 95. What is the purpose of a hashed index?
**Answer: C. To distribute data evenly across shards in a sharded cluster**

### 96. Which MongoDB operator is commonly used for pattern matching?
**Answer: D. `$regex`**

### 97. What is the purpose of `geoNear`?
**Answer: A. To retrieve documents based on their proximity to a specified point**

---

## Geospatial Operators & Express

### 98. What is the key feature of the `nearSphere` operator in MongoDB?
**Answer: B. It considers the curvature of the Earth when calculating distances**

### 99. How does the `geoWithin` operator differ from `geoNear` and `nearSphere`?
**Answer: D. It retrieves documents completely contained within a specified shape**

### 100. What MongoDB method is commonly used with the `geoNear` command to execute a geospatial query?
**Answer: A. `aggregate()`**

### 101. In Node.js Express framework, what HTTP method does `router.put` correspond to?
**Answer: C. PUT**

### 102. What is the purpose of the `.auth` method in the Express framework for Node.js?
**Answer: B. It sets up basic authentication for a route**

### 103. When working with Node.js `file.path`, what does it typically refer to?
**Answer: D. The path of a file in the file system**

---

## Server Scaling & Heroku

### 104. What is horizontal scaling in the context of server infrastructure?
**Answer: A. Adding more server instances to handle increased load**

### 105. In vertical scaling, what resources are typically increased to enhance server capacity?
**Answer: C. CPU, RAM, or storage of individual instances**

### 106. Which of the following is a potential advantage of horizontal scaling?
**Answer: A. Simplified server maintenance**

### 107. How can you deploy a Node.js app to Heroku using the Heroku CLI?
**Answer: B. `git push heroku master`**

### 108. What is the purpose of the Procfile in a Node.js app for Heroku?
**Answer: B. To declare the application's entry point and process types**

### 109. How does Heroku handle the installation of project dependencies during deployment?
**Answer: A. Automatically installs dependencies based on a predefined list**

---

## Phone Number Registration & User Privacy

### 110. What is a common approach for validating and registering users via phone number in a Node.js e-commerce app?
**Answer: A. Sending a one-time password (OTP) via SMS**

### 111. How can you securely handle user registration with phone numbers to prevent misuse?
**Answer: C. Implementing two-factor authentication (2FA)**

### 112. How can you address user privacy concerns related to phone number registration?
**Answer: B. Clearly communicating the purpose of phone number collection**

---

## Customer Profiles & Admin Features

### 113. Which component of the e-commerce app is typically involved in handling customer profile updates?
**Answer: A. Front-end**

### 114. What authentication measure can be implemented to validate customers during profile updates?
**Answer: A. Implementing multi-factor authentication**

### 115. What is the primary purpose of allowing customers to update their profiles in an e-commerce Node.js app?
**Answer: A. Providing personalized user experiences**

### 116. In the context of an e-commerce admin panel, who typically has access to the "Create & Fetch Category" feature?
**Answer: A. Store administrators or managers**

### 117. What is the purpose of the "Add & Fetch APIs for Store with Owner" feature in an e-commerce system?
**Answer: C. Providing store owners with a programmatic interface**

### 118. Why is the "Add & Fetch Subcategories" functionality important in an e-commerce system?
**Answer: B. To create a hierarchical product structure**

### 119. What HTTP method is commonly used for adding a new product in a RESTful API?
**Answer: A. POST**

### 120. In a Node.js application, which module is commonly used to handle incoming data from a form submission when adding a product?
**Answer: B. `body-parser`**

### 121. What response status code is typically returned upon successful addition of a product or cart manipulation?
**Answer: A. 201 Created**

---

## Stripe Payment Gateway

### 122. What is the primary purpose of Stripe keys in an e-commerce application?
**Answer: A. To process online payments**

### 123. Which type of Stripe key is used for server-to-server communication and is kept confidential?
**Answer: B. Secret key**

### 124. What is the purpose of the Stripe publishable key?
**Answer: D. To safely communicate with the Stripe API from the client-side**

### 125. Which method is commonly used to create a payment intent for a client's purchase in a Node.js app with Stripe integration?
**Answer: A. `stripe.paymentIntent.create()`**

### 126. In a Node.js app, what is the purpose of the Secret Key when interacting with the Stripe API?
**Answer: B. To securely communicate with the Stripe API from the server-side**

### 127. Which event is commonly triggered when a successful payment occurs in a Stripe-integrated Node.js app?
**Answer: D. `payment_intent.succeeded`**

---

## Regular Expressions & Email Validation

### 128. What is the primary purpose of using a regular expression to validate an email address in a model schema?
**Answer: A. To ensure email addresses meet a defined pattern**

### 129. Which quantifier is commonly used to specify the minimum and maximum length of the domain part in an email address?
**Answer: C. `{min, max}`**

### 130. What is the purpose of the character class `[a-zA-Z0-9]` in an email validation regular expression?
**Answer: B. Matches alphanumeric characters**

---

## React Hook Form

### 131. What is a virtual field in React Hook Form?
**Answer: C. A field that is managed by React Hook Form but does not have a corresponding input element**

### 132. How is a virtual field defined in React Hook Form?
**Answer: D. By including the field name in the `virtualFields` array when using the `useForm` hook**

### 133. What is the purpose of managing virtual fields in React Hook Form?
**Answer: A. To improve performance by avoiding unnecessary re-renders**

---

## Cron Jobs

### 134. In a cron expression, what does the asterisk (`*`) represent in the minute field?
**Answer: A. Every minute**

### 135. What is the purpose of cron jobs in web development?
**Answer: B. Automating scheduled tasks**

### 136. Which utility is commonly used for managing and monitoring cron jobs in Unix-like systems?
**Answer: D. `crontab`**

---

## Quick Revision

### Key Node.js Concepts
- Node.js uses the **V8 JavaScript engine**.
- Node.js is **event-driven** and uses **non-blocking I/O**.
- Express.js provides routing and middleware for web applications.
- REST APIs commonly use **GET, POST, PUT and DELETE**.
- Promises and `async/await` help manage asynchronous operations.

### Key MongoDB Concepts
- MongoDB uses a **document-based data model**.
- BSON is MongoDB's binary representation of JSON-like documents.
- Indexes improve query performance.
- `$regex` is used for pattern matching.
- Geospatial operators support location-based queries.
- `populate()` retrieves referenced documents.

### Authentication & Security
- Passwords should be securely hashed, commonly with **bcrypt**.
- JWTs contain a header, payload and signature.
- Secret keys must remain confidential.
- Refresh tokens should be securely stored and managed.
- Redis can be used for fast token blacklisting.
- OTP and 2FA can help verify users.

### Deployment
- Heroku can deploy Node.js applications from a Git repository.
- A **Procfile** defines process types and startup commands.
- Dependencies are installed from the project's dependency definitions.

### Payments
- Stripe provides online payment functionality.
- **Publishable keys** are suitable for client-side use.
- **Secret keys** are kept on the server.
- `payment_intent.succeeded` indicates a successful PaymentIntent.

### Cron Jobs
- Cron jobs automate recurring or scheduled tasks.
- In a cron expression, `*` in the minute field means every minute.
- `crontab` is commonly used to manage cron schedules.

---

## Progress

**Total quiz questions collected: 136**

Use this README as a revision sheet before completing the course quizzes. The answers reflect the expected answers used during the ZAIO quiz sessions.
