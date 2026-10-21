


## ExpressJS
What is ExpressJS?
- Is a free and open-source web application framework for Node.js
- It is used for designing and building web applications quickly and easily.
- Express.js only requires Javascript, so maing it easier for developers to build web apps & APIs without any effort.
- Lightweight & helps to organize web apps on serve-side into a more organized MVC architecture.

### Sample code without ExpressJS

```
const http = require('http');

const srver = http.createServer((req, res) => {
    if(req.url =="/") {
        res.write('Hello world');
        res.end():
    }
    if (req.url == '/api/restaurants') {
        res.write('Return restaurants list');
        res.end();
    }
});

server.listen(3000);
console.log('Listen on port 3000');
```

### Sample code with ExpressJS
```
const express = require('express');

const app = express();

// apis
app.post('/', (req, res) => {
    res.send('Hello world');
});

app.post('/api/restaurants', (req, res) => {
    res.send('Return restaurant list');
});

app.listen(3000, () => console.log('Listening on port 3000...'));
```
### Why ExpressJS needed?
- Saves development time
- Make use of middleware
- Provides Advance Routing
- Easy Debugging
- Templating engines - `.ejs` file extension

## MongoDB
- Is a noSQL database, it is also called a distributed database at it's core.
- Stores data in flexible, JSON-like documents (BSON).
- Database => Collections => Posts, Users, etc
### Example of Users collection:
```
{
    name: "Prem",
    age: 15,
    status: "A",
    groups: ["Games", "news"]
}
{
    name: "Diya",                     //field: value
    age: 25,                          //field: value
    status: "Unmarried",              //field: value
    groups: ["Political", "news"]     //field: value
}
```
- This particular database is called Schema less.

### SQL Terms/Concepts
- Database
- Tables
- Rows
- Columns

### MongoDB Terms/Concepts
- Database
- Collections
- Documents (BSON)
- Fields


