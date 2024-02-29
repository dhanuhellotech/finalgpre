const express = require('express')
const router = express.Router()
const franschise= require('../Models/Franschise')

const franschiseadd = async(req,res)=>{
try{

    const { username, email, state, mobile, City,Comments, investment, yesOrNo } = req.body;
    const newfrans = new franschise({
        username,
        email,
        state,
        mobile,
        City,
        Comments,
        investment,
        yesOrNo
    })

    await newfrans.save()
    console.log(newfrans);
    res.json({ message: 'Contact created successfully!', contact: newfrans });
  } 
catch (error) {
    console.error('Error saving to database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const getAllfrans= async(req,res)=>{
    try {
        const allfrans = await franschise.find();
        res.json({franschise:allfrans})
    } catch (error) {
        console.error('Error saving to database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
const deleteFranschise = async (req, res) => {
  try {
    const { id } = req.params;

    // Use the model 'franschise' instead of 'Franschise'
    const deletedFranschise = await franschise.findByIdAndDelete(id);

    if (!deletedFranschise) {
      return res.status(404).json({ error: 'Franschise not found' });
    }

    res.json({ message: 'Franschise deleted successfully', deletedFranschise });
  } catch (error) {
    console.error('Error deleting franschise:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports={
franschiseadd,
getAllfrans,
deleteFranschise,
}