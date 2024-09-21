const Student = require('../models/Students');

async function addStudent(req, res){
    try{
        console.log(req.body, 'req.body');
        let student = new Student(req.body);
        await student.save();
        console.log(student);
        res.end("Added Successfully...");
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    addStudent
}

