const mongoose = require('mongoose');

var employeeschema = new mongoose.Schema({

    meetingname: {
        type: String,
        required: 'This field is required.'
    },
    noofpeopleattending: {
        type: Number
    },
    date: {
        type: String
    },
    starttime: {
        type: String
    },
    endtime:{
        type:String
    }


});

mongoose.model('employee',employeeschema);