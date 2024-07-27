const dotenv = require('dotenv');
const express = require('express');


dotenv.config();

const app = express();
// const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${PORT}`);
});



module.exports = app;