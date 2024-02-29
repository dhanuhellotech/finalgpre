const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 5678;
const Admission = require('./Models/AddmissionForm')
const Contact = require('./Models/Contact.form')
const Franschise = require('./Models/Franschise')
const {Addmission }=require('./Models/Enquiry')
// Importing routers and middlewares
const router = require('./Router/Router');
const blogRoutes = require('./Router/blogRoutes');
const eventRoutes  = require('./Router/eventRoutes');
const addressRoutes = require('./Router/addressRoutes');
const userRoutes = require('./Router/userRoutes');
const calendarPdfRouter = require('./Router/calendarPdfRoute');
const topbarRoutes= require('./Router/tobbarRouter');
const  teacherRoutes= require('./Router/teacherRoutes');
const newsletterRoutes = require('./Router/newsletterRoutes');
const classRoutes = require('./Router/classRoutes');
const timetableRoutes = require('./Router/timetableRoutes');
const calendarRoutes =require('./Router/calendarRoutes');
const username = 'gpreeschool@gmail.com'; // Replace with actual username
const password = 'gpreeschool@gmail.com';
// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('uploads'));
app.use('/', router);
app.use('/uploads', express.static('uploads'));
app.use('/blogs', blogRoutes);
app.use('/calendar-pdf', calendarPdfRouter);
app.use('/api', addressRoutes);
app.use('/top',topbarRoutes);
app.use('/time', timetableRoutes);
app.use('/events', eventRoutes);

// blog


app.use('/calendar', calendarRoutes);
app.use('/teachers', teacherRoutes); 
app.use('/newsletter', newsletterRoutes)
app.use('/classes',classRoutes)
// MongoDB connection
mongoose.connect(
  "mongodb+srv://dhanalakshmihellotech:lbXKBJugIDBkvIrG@cluster0.vzg4i8n.mongodb.net/Gpreschool_local",
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log('Connected to MongoDB');
});

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({ 
  service: 'gmail',
  auth: {
    user: 'hrhellowtec@gmail.com', // Replace with your Gmail email address
    pass: 'hgvg nmis mcnf egxq' // Replace with your Gmail password
  }
});

// Route to handle sending reset email
app.post('/api/send-reset-email', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email address is required' });
  }

  const mailOptions = {
    from: 'dhanalakshmihellotech@gmail.com',
    to: email,
    subject: 'Hello',
    text: `Username: ${username}\nPassword: ${password}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending reset email:', error);
      res.status(500).json({ error: 'Failed to send reset password email' });
    } else {
      console.log('Reset email sent:', info.response);
      res.status(200).json({ message: 'Reset password email sent successfully' });
    }
  }); 
});

// Route to handle admission form submission
app.post('/api/Addmission', async (req, res) => {
  console.log('Addmission form submitted');
  try {
    const formData = req.body;
    console.log('Form data:', formData); // Log the form data to check if it's received correctly

    // Store formData in your database
    // Example: Insert formData into MongoDB using Mongoose
    // const admission = await Admission.create(formData);
    
    // Send email with form details
    const admission = await Admission.create(formData);

    // Send email with form details
    await sendAdmissionEmail(formData);

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting admission form:', error);
    res.status(500).json({ error: 'Failed to submit admission form' });
  }
});

// Function to send admission email
async function  sendAdmissionEmail(formData) {
  try {


    const formDetails = `
      Child's First Name: ${formData.childFirstName}
      Child's Last Name: ${formData.childLastName}
      Parent's First Name: ${formData.parentFirstName}
      Parent's Last Name: ${formData.parentLastName}
      Date of Birth: ${formData.dateOfBirth}
      Gender: ${formData.gender}
      Grade Applying For: ${formData.gradeApplyingFor}
      Preferred Start Date: ${formData.preferredStartDate}
      Additional Comments: ${formData.additionalComments || 'N/A'}
    `;
    const mailOptions = {
      from: ' ',
      to: 'thegpreschool@gmail.com ', // Replace with recipient email address
      subject: 'New Admission Form Submission',
      text: `Form Details:\n${formDetails}`
    };

    await transporter.sendMail(mailOptions);
    console.log('Admission email sent successfully');
  } catch (error) {
    console.error('Error sending admission email:', error);
    throw new Error('Failed to send admission email');
  }
}
//contact form nodemailer

app.post('/api/contact', async (req, res) => {
  console.log('Contact form submitted');
  try {
    const formData = req.body;
    console.log('Form data:', formData); // Log the form data to check if it's received correctly

    // Save the form data to the database


    // Send email with form details
    await sendContactEmail(formData);

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting Franschise form:', error);
    res.status(500).json({ error: 'Failed to submit franschise form' });
  }
});

// Function to send contact form email
async function sendContactEmail(formData) {
  try {
    const mailOptions = {
      from: '',
      to: 'dhanalakshmihellotech@gmail.com', // Replace with recipient email address
      subject: 'New Contact Form Submission',
      text: `Form Details:\nUsername: ${formData.username}\nEmail: ${formData.email}\nLocation: ${formData.location}\nMobile: ${formData.mobile}\nCity: ${formData.City}\nComments: ${formData.Comments}`
    };

    await transporter.sendMail(mailOptions);
    console.log('Contact email sent successfully');
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw new Error('Failed to send contact email');
  }
}

//franchise form
app.post('/api/franschise', async (req, res) => {
  console.log('franschise form submitted');
  try {
    const formData = req.body;
    console.log('Form data:', formData); // Log the form data to check if it's received correctly

    // Save the form data to the database
 

    // Send email with form details
    await sendFranchiseEmail(formData);

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting franschise form:', error);
    res.status(500).json({ error: 'Failed to submit franschise form' });
  }
});
async function sendFranchiseEmail(formData) {
  try {
    const mailOptions = {
      from: '', // Optional field
      to: 'thegpreschool@gmail.com', // Replace with recipient email address
      subject: 'New Franschise Form Submission',
      text: `Form Details:\nUsername: ${formData.username}\nEmail: ${formData.email}\nState: ${formData.state}\nMobile: ${formData.mobile}\nCity: ${formData.City}\nInvestment: ${formData.investment}\nyesOrNo: ${formData.yesOrNo}`
    };

    await transporter.sendMail(mailOptions);
    console.log('Franschise email sent successfully');
  } catch (error) {
    console.error('Error sending franschise email:', error);
    throw new Error('Failed to send franschise email');
  }
}

//enquiry form 
app.post('/api/enquiry', async (req, res) => {
  console.log('Enquiry form submitted');
  try {
    const formData = req.body;
    console.log('Form data:', formData); // Log the form data to check if it's received correctly

    // Save the form data to the database
    // const addmission = await Addmission.create(formData);

    // Send email with form details
    await sendEmail(formData);

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting Enquiry form:', error);
    res.status(500).json({ error: 'Failed to submit Enquiry form' });
  }
});
async function sendEmail(formData) {
  try {
    const mailOptions = {
      from: '',
      to: 'dhanalakshmihellotech@gmail.com', // Replace with recipient email address
      subject: 'New Enquiry Form Submission',
      text: `Form Details:\nUsername: ${formData.username}\nEmail: ${formData.email}\nstate: ${formData.state}\nAddress: ${formData.Address}\nMobile: ${formData.mobile}\nchildname: ${formData.childname}\nchildgrade: ${formData.childgrade}\nmessage: ${formData.message}`
    };

    await transporter.sendMail(mailOptions);
    console.log('Enquiry  email sent successfully');
  } catch (error) {
    console.error('Error sending franschise email:', error);
    throw new Error('Failed to send franschise email');
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

