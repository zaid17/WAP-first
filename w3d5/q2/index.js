const express = require('express');
const app = express();
app.get('/', (req, res) => {
 
    const html=`<form action="/result" method="post">
    <label for="name">Name:</label>
  <input type="text" id="name" name="name" value="">
    <label for="age">Age:</label>
    <input type="text" id="lname" name="age" value="">
    <input type="submit" value="Submit">
  </form>`;
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

