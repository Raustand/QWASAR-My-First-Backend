const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    console.log("From the /");
    res.send('New York, New York');
});

app.listen(PORT, () =>{
    console.log("Server starter" + PORT);
});