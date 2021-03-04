const express = require('express');

const app = express();

app.get('/index', (req, res) => {
    res.send('123');
})

app.listen(8888, () => {
    console.log('server ok!')
});