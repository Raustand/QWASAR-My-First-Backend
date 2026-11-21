const express = require('express');
const app = express();

const port = 8080;

app.get('/', (reg, res) => {
    console.log("From the /");
    res.send('New York, New York');
});

app.listen(port, () =>{
    console.log("Server starter" + port);
});