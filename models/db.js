const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/employeedb',{useNewUrlParser:true},(err)=>{
    if(!err) {console.log('mongodb connection succeeded')}
    else {console.log('mongodb connection not established'+err)}
});
require('./employee.model');