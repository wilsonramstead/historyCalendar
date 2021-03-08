
const express = require('express');
var request = require('request');
const app = express();

app.use(express.json());


app.get('/history', (req,res) => {
    console.log('req.query.month: ', req.query.month);
    console.log('req.query.day: ', req.query.day);
    request({
        uri: 'http://history.muffinlabs.com/date/' + req.query.month + '/' + req.query.day
    }).pipe(res);
});

app.use(express.static( __dirname + '/public/dist/public'));

app.listen(8000, function(err) {
    if(err) {
        console.log("Error: ", err);
    } else {
        console.log("Running on port 8000");
    }
})
