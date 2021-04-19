require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const Handlebars = require('handlebars')

const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const employeecontroller = require('./controllers/employeecontroller');

var app = express();
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());
app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'mainLayout',handlebars: allowInsecurePrototypeAccess(Handlebars),layoutsDir:__dirname+'/views/layouts/'}));
app.set('view engine','hbs');

app.listen(3000,()=>{
    console.log('express server started at 3000');
});
app.use('/employee',employeecontroller);