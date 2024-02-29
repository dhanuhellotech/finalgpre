// routes/calendarPdfRoute.js
const express = require('express');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res) => {
  // Create a new PDF document
  const doc = new PDFDocument();
  // Pipe the PDF document to a writable stream
  const stream = doc.pipe(fs.createWriteStream('calendar.pdf'));

  // Generate calendar content
  // You would add your logic here to generate the calendar content

  // End the document
  doc.end();

  // Send the generated PDF file to the client
  stream.on('finish', () => {
    res.download('calendar.pdf');
  });
});

module.exports = router;
