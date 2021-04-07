const express = require('express');
const router =require('./route');

const app = express();
app.use(express.json());

app.use(router);

app.listen(8080, () => console.log('app listening at 8080'));
