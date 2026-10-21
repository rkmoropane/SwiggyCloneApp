import express from 'express';

let app: express.Application = express();


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

const object = {id: 1, name: 'Kholofelo', age: 25};

const object2 = { ...object, email: "rkmoropane@gmail.com", age: 30, name: "Kholofelo Moropane", id: 4};
const object3 = { ...object, ...object2, phone: "+27676736472", id: 5};

console.log(object3);

const array1 = [1, 2, 4];
const array2 = [1, 2, 4];

const array3 = [...array1, ...array2];

console.log(array3);
