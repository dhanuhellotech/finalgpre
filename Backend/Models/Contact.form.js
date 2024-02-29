// schema.js

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  username: {
    type: String,
   
  },
  email: {
    type: String,
   
  },
  location: {
    type: String,
   
  },
  mobile:{
    type:String,
   
  },
  City:{
    type:String,
  
  },
  Comments:{
    type:String,
  
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
