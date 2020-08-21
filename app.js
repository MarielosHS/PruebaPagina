const express = require('express');
const app = express();
const morgan = require('morgan'); //entender solicitudes http

app.set('port', process.env.PORT || 3000); //puerto de servidor 3000 
app.use(morgan('dev'));
app.use(express.static('public'));

const server= app.listen(3000, () => {
    console.log(` Server on port ${app.get('port')} `);
});


