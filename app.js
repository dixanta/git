const http=require('http');
const path=require('path');
const express=require('express');
const app=express();
const port=5000;
let server=http.createServer(app);

app.get('/',(req,res)=>{
    res.send('<h1>Hello World from node js</h1>');
});

app.get('/about',(req,res)=>{
    res.send('<h1>About PAge</h1>');
});

app.get('/users',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/index.html'));
});

app.get('/customers',(req,res)=>{
    res.send({customers:[{id:1,name:'ramesh'},{id:2,name:'suresh'}],total:2});

});


server.on('connection',(socket)=>{
    console.log(socket.address().address);
});

server.listen(port,()=>{
    console.log(`Server is running at ${port}`);
});

