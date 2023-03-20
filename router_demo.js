const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname,'public');
const midelwarwecheck = require('./agecheckmidel');
const route = express.Router();


route.use(midelwarwecheck);
app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/index.html`);
})

app.get('/about',(_,res)=>{
    res.send('about');
});

route.get('/login',(req, res)=>{
    res.send("welcome to login");
});


app.use('/',route);
app.listen(5000);