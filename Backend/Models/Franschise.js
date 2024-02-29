// schema.js

const mongoose = require('mongoose');

const franschiseSchema = new mongoose.Schema({
  username: {
    type: String,
   
  },
  email: {
    type: String,
   
  },
  state: {
    type: String,
   
  },
  mobile:{
    type:String,
   
  },
  City:{
    type:String,
  
  },
  investment:{
    type: String, 
  
  },
  yesOrNo: {
    type: String, // Assuming you want to store 'yes' or 'no' as strings
    enum: ['Yes', 'No'] // Restrict the field to only allow 'yes' or 'no'

  },
});

const Contact = mongoose.model('franschise', franschiseSchema);

module.exports = Contact;
