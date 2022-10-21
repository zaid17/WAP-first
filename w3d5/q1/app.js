const express = require('express');
const app = express();
app.get('/', (req, res) => {
    const name= req.query.name;
    const age= req.query.age;
     res.send(`Welcome ${name} age:${age}`);
});
app.listen(3000);

