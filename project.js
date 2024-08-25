const express = require('express');
const app = express();
app.get('/sayad/js', function(req, res) {
    // console.log(req.headers);
    res.send('Welcome! GET received!');
    res;
});

app.post('/sayad/js', function(req, res) {
    res.send('POST request received. Thanks!');
});

app.listen(4450);
