const express = require('express');
const app =express();
app.get('',(req,res)=>{
    res.send('<h1>Hello express!!</h1>')
})
app.get('/weather', (req,res)=>{
    res.send({forecast: 'It is snowing',
    location: 'Philadelphia'
   });
})
app.listen(3000,()=>{
    console.log('server listening to port 3000');
})