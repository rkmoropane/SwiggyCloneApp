import express from 'express';

let app: express.Application = express();


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


function is_MathByX_Available() {
    return false;
};

function is_MathByY_Available() {
    return false;
};

function is_ScByX_Available() {
    return false;
};

function is_ScByY_Available() {
    return false;
};

function resultMathBook(): Promise<string> {
    return new Promise((resolve, reject) => {
        if (is_MathByX_Available()){
            resolve("Maths by X available");
        } else if (is_MathByY_Available()){
            resolve("Maths by Y available");
        } else {
            reject("Both books not available");
        }
    });
}

function resultScienceBook(): Promise<string> {
    return new Promise((resolve, reject) => {
        if (is_ScByX_Available()){
            resolve('Science by X is available');
        } else if (is_ScByY_Available()){
            resolve('Science by Y is available');
        } else {
            reject("Both Science books not available");
        }
    });
}

// Proper way to use then and catch with the result function
resultMathBook().then((result) => {
    console.log('data:', result);
    if(result) {
        resultScienceBook().then((result) => {
            console.log("data:", result);
        }).catch((error) => {
            console.log("Error:", error);
        });
    }
}).catch((error) => {
    console.log("Error:", error);
});

// Use the try and catch in the final to avoid using then and catch with the result function because it will return a promise and not a string value
async function final() {
    try {
        let result1 = await resultMathBook(); // pass the await to get the string value
        if (result1){
            console.log('data:', result1)
            result1 = await resultScienceBook();
        }
        return result1;
    } catch(e) {
        return Promise.reject(e);
    }    
};
// Not a proper way to use then and catch with the final function because it will return a promise and not a string value
final().then(data => {
    console.log("data:", data);
}).catch(e => {
    console.log("Error:", e);
});
