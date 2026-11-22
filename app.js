const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    console.log("From the /");
    res.send('New York, New York');
})

app.get('/protected', (req, res) => {
    
    array = atob(req.headers.authorization.split(' ')[1]).split(':');
    username = array[0];
    password = array[1];

    if(username =='admin' && password == 'admin') {
        res.send('Welcome, authanticated client');
    }



    res.set('WWw-Authenticate','Basic real="401"');
    res.status(401).send('Not Authorized');
}) 

app.listen(PORT, () =>{
    console.log("Server starter" + PORT);
})