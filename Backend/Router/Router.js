const express = require('express');
const router = express.Router();
const contactController = require('../Controller/Contactus');
const franschiseController = require('../Controller/Franschise')
const EnquiryController = require("../Controller/Enquiry")
const admissionController = require("../Controller/Admission")
const eventRoutes = require('../Router/eventRoutes');
const blogRoutes = require('../Router/blogRoutes');
const calendarRoutes = require('../Router/calendarRoutes')
const teacherRoutes = require('../Router/teacherRoutes');
const newsletterRoutes = require( '../Router/newsletterRoutes')
const classRoutes = require('../Router/classRoutes')
const  timetableRoutes= require('../Router/timetableRoutes')
// const topbarRoutes =require('../Router/tobbarRouter')
router.post('/contacts', contactController.createContact);
const nodemailer = require('nodemailer');

router.get('/contacts', contactController.getAll);
router.get("/contacts/:id", contactController.getbyid);
router.put("/contacts/:id", contactController.updateById);
router.delete("/contacts/:id", contactController.deleteById);

//franschise
router.post("/franschise", franschiseController.franschiseadd);
router.get("/franschise", franschiseController.getAllfrans);
router.delete('/franschise/:id', franschiseController.deleteFranschise);

//enquiry
router.post("/enquiry", EnquiryController.childEnquiry);
router.get("/enquiry", EnquiryController.enquiryGet);
router.delete("/enquiry/:id", EnquiryController.deleteAdmissionById);

// //Addmission]
router.post("/Addmission", admissionController.createAdmission);
router.get('/Addmission', admissionController.getAllAdmissions);
router.delete("/Addmission/:id", admissionController.deleteByAdmissionId);

  
  // Function to send email

//event
// router.use('/events', eventRoutes);

// // blog
// router.use('/blogs', blogRoutes); 

// router.use('/calendar', calendarRoutes);
// router.use('/teachers', teacherRoutes); 
// router.use('/newsletter', newsletterRoutes)
// router.use('/classes',classRoutes)
// router.use('/', timetableRoutes);
// router.use('/topbar',topbarRoutes)
module.exports = router;
