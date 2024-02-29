import React, { useState, useEffect } from 'react';
import Navbar from '../../common/Navbar.jsx';
import Footer from '../../common/Footer.jsx';
import WhatsApp from '../../whatsapp/WhatsApp.jsx';
import axios from 'axios';
import './newsletter.css'
import FloatingMailIcon from '../email floating icon/Floating.jsx';
import { client,imageUrl } from '../../clientaxios/Client.js';
export default function Newsletter() {
  const [newsletterPDFs, setNewsletterPDFs] = useState([]);

  useEffect(() => {
    fetchNewsletterPDFs();
  }, []);

  const fetchNewsletterPDFs = async () => {
    try {
      const response = await client.get('/newsletter');
      setNewsletterPDFs(response.data);
    } catch (error) {
      console.error('Error fetching newsletter PDFs:', error);
    }
  };

  return (
    <div>
      <div className="container-xxl bg-white p-0" >
        {/* Navbar Start */}
        <Navbar />
        {/* Navbar End */}
        {/* Page Header */}
        <div className="container-xxl py-5 page-header position-relative mb-5">
          <div className="container py-5">
            <h1 className="display-2 text-white animated slideInDown mb-4">
              Newsletter
            </h1>
            <nav aria-label="breadcrumb" className="animated slideInDown">
              {/* Breadcrumb navigation */}
            </nav>
          </div>
        </div>
        {/* Page Header End */}
        {/* Display Monthly Newsletter PDFs */}
        <div className="container py-5 parallax" style={{ backgroundImage: `url('assets/img/3d-grunge-interior-with-wooden-blue-painted-walls-floor.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '90vh', marginTop: '5%', backgroundAttachment: 'fixed' }}>
  <h2 className="text-black mb-4" style={{ backgroundColor: 'white', textAlign: 'center', padding: '10px', fontFamily: 'monospace', fontWeight: 'bolder' }}>Monthly Newsletters</h2>
  <div className="table-responsive">
  <table className="table"style={{ borderCollapse: 'separate', borderSpacing: '10px',height: "30vw", width:"100%"}}>
    <thead>
      <tr>
        <th style={{ color: 'white', fontSize: '25px' }}>Title</th>
        <th style={{ color: 'white', fontSize: '25px' }}>Description</th>
        <th style={{ color: 'white', fontSize: '25px' }}>PDF Filename</th>
      </tr>
    </thead>
    <tbody>
      {newsletterPDFs.map((pdf, index) => (
        <tr style={{ color: 'white', fontSize: '25px' }} key={index}>
          <td style={{ color: 'white', fontSize: '25px' }}>{pdf.title}</td>
          <td style={{ color: 'white', fontSize: '25px' }}>{pdf.description}</td>
          <td style={{ color: 'white', fontSize: '25px' }}><a href={`${imageUrl}/${pdf.filePath}`} target="_blank" rel="noreferrer">{pdf.filename}</a></td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
</div>

        {/* Display Monthly Newsletter PDFs End */}
        {/* Footer */}
        <Footer />
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
          <i className="bi bi-arrow-up" />
        </a>
      </div>
      {/* WhatsApp Component */}
      <WhatsApp phoneNumber="6374970664" message="Hello! I'm interested in your services." />
      <FloatingMailIcon emailAddress="thegpreschool@gmail.com" /> 
    </div>
  );
}
