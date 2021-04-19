const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const employee = mongoose.model('employee');
router.get('/',(req,res)=>{
    res.render("employee/addoredit",{
        viewTitle:"Insert Employee"
    });
});
router.get('/aboutme',(req,res)=>{
    employee.find((err,docs)=>{
        if(!err)
        {
            res.render("employee/aboutme",{
                viewTitle:"aboutme"
            });
        }
        else
        {
            console.log('error in retrieving employee list :'+err);
        }
    });
    

});
router.post('/',(req,res)=>{
    insertrecord(req,res);
});


function insertrecord(req,res){
    var emp = new employee();
    emp.meetingname = req.body.meetingname;
    emp.noofpeopleattending=req.body.noofpeopleattending;
    emp.date=req.body.date;
    emp.starttime=req.body.starttime;
    emp.endtime=req.body.endtime;
    emp.save((err,doc)=>{
        if(!err)
        {
            res.redirect('employee/list');
        }
        else {
            console.log('Error during record insertion : ' + err);
                
        }
    });
}

router.get('/list',(req,res)=>{
    
    employee.find((err,docs)=>{
        if(!err)
        {
            res.render("employee/list",{
                list:docs
            });
        }
        else
        {
            console.log('error in retrieving employee list :'+err);
        }
    });
});

router.get('/delete/:id', (req, res) => {
    employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/employee/list');
        }
        else { console.log('Error in employee delete :' + err); }
    });
});


module.exports = router;