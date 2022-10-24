const express = require('express');
const app = express();
const myList=[];
app.get('/', (req, res) => {
   let list= '<ul>';
   for(const i in myList){
    list+=`<li>${e}</li>`;
   }
   list+='</ul>';
     res.send(`${list}`);
});
app.use(express.urlencoded());
app.get('/add', (req, res) => {
    let html=`<form action="/add" method="POST">
    <label for="add">add to array:</label> <input type="text" id="add" name="add" value=""> <input type="submit" value="Submit"></form>`;
     res.send(
           html  
     );
 });
 app.post('/add', (req, res) => {
     myList.push(req.body.name);
     res.redirect(303,'/');
});
app.listen(3000);

