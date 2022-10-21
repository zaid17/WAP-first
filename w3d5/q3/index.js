const express = require('express');
const app = express();
app.get('/', (req, res) => {
 

    const html=`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <link type="css" href="css/day.css" rel="stylesheet">
    <link type="css" href="css/night.css" rel="stylesheet"
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
   <h1>hello</h1>
        <form action="/result" method="post">
            <label for="name">Name:</label>
          <input type="text" id="name" name="name" value="">
            <label for="age">Age:</label>
            <input type="text" id="lname" name="age" value="">
            <input type="submit" value="Submit">
          </form>
    </body>
    </html>`;

    const date = new Date();
    const hour = date.getHours();
    
    const path = require('path')
    
    
    if(hour>=6 && hour<=18){
        app.use('/css', express.static(path.join(__dirname,'css','day.css')))
    }else{
        app.use('/css', express.static(path.join(__dirname, 'css','night.css')))
    }
    
     res.send(
           html  
     );
});
app.use(express.urlencoded());
app.post('/result', (req, res) => {
    console.log(req.body);
    const name= req.body.name;
    const age= req.body.age;
     res.send(`Welcome ${name} age:${age}`);
});
app.listen(3000);

