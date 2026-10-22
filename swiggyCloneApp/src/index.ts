import express from 'express';

let app: express.Application = express();


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// app.get('/api/user/login', (req, res) => {
//     // console.log(req);

//     const data = {name: "Kholofelo", email: "rkmoropane@gmail.com"}
//     res.status(200).send(data);
// });

// app.get('/api/user/login', (req, res) => {
//     // console.log(req);

//     const data = {name: "Kholofelo", email: "rkmoropane@gmail.com"}
//     res.json(data).status(200);
// });

app.get('/api/user/login', (req, res) => {
    // Get the Query Params keys and values
    console.log("Query Params", req.query);
    // Get the email value from Query Params
    console.log("Email", req.query.email);

    // send the response
    res.status(200).send("Success");
});

app.get('/api/user/test', (req, res) => {
    // console.log(req);
    res.status(200).send("Test API is working");
});