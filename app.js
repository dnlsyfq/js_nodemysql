const express = require('express');

const app = express();


app.get('/',function(req,res){
    res.send('Hello World');
})

app.get('/alien',function(req,res){
    const id = req.query.id
    res.send('Welcome Back Alien' + id);
})

/*
app.get('/alien/20',function(req,res){
    res.send('Hey Navin');
})
*/

app.get('/alien/:id',function(req,res){
    const id = req.params.id
    res.send(`${id} received`)
})

app.listen(9000,(req,res) => {
    console.log('Running');
});

