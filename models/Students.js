const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    rollNo: { type: String},
    name: { type: String },
    fatherName: { type: String },
    addharNo: { type: String }
})

module.exports = mongoose.model('Student', StudentSchema);