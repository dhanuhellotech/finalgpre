
import React,{useState,useEffect}from 'react';
import axios from 'axios'
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import BlogPost from '../common/parentscorner/Blog';
import SearchBox from '../common/parentscorner/SearchBox';
import RecentPosts from '../common/parentscorner/RecentPosts'
import image from '../assets/394562384_238991408857558_6630068315573485841_n.jpg';
// import './ParentsCorner.css'; // You can create this file for additional styles
import './Parentscorner.css'
import WhatsApp from '../whatsapp/WhatsApp';
import FloatingMailIcon from './email floating icon/Floating';

export default function ParentsCorner() {

  const [blogPosts, setBlogPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = async () => {
    try {
      // Fetch blog posts from your admin panel API endpoint
      const response = await axios.get('http://localhost:5678/blogs');
      setBlogPosts(response.data);

      // Fetch recent posts (you can adjust the endpoint accordingly)
      const recentPostsResponse = await axios.get('http://localhost:5678/recent-posts');
      setRecentPosts(recentPostsResponse.data);
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  return (
  
<div className="container-xxl bg-white p-0">
  {/* Spinner Start */}
  {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}
  {/* Spinner End */}
  {/* Navbar Start */}
<Navbar/>
  {/* Navbar End */}
  {/* Page Header End */}
  <div className="container-xxl py-5 page-header position-relative mb-5">
    <div className="container py-5">
      <h1 className="display-2 text-white animated slideInDown mb-4">Parents Corner</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        {/* <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Parents Corner</li>
        </ol> */}
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Contact Start */}
  <div className="container-xxl py-5"style={{ backgroundImage: `url('assets/img/homeform.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '90vh',marginTop:'5%' }}>
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <h1 className="mb-3">Blogs</h1>
      </div>
      {/* <div className="row g-4 mb-5">
        <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: 75, height: 75}}>
            <i className="fa fa-map-marker-alt fa-2x text-primary" />
          </div>
          <h6>123 Street, New York, USA</h6>
        </div>
        <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.3s">
          <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: 75, height: 75}}>
            <i className="fa fa-envelope-open fa-2x text-primary" />
          </div>
          <h6>info@example.com</h6>
        </div>
        <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.5s">
          <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: 75, height: 75}}>
            <i className="fa fa-phone-alt fa-2x text-primary" />
          </div>
          <h6>+012 345 6789</h6>
        </div>
      </div> */}
      
      <section className="blog padding">
        <div className="parent-corner-container">
          <div className="left-section-parent">
            <SearchBox />
            <RecentPosts posts={blogPosts} />
          </div>
          <div className="right-section-parent">
          {blogPosts.map((post) => (
                  <BlogPost key={post._id} post={post} />
                ))}
          </div>
        </div>
      </section>
    </div>
  </div>
  {/* Contact End */}
  {/* Footer Start */}
 <Footer/>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>

  <WhatsApp phoneNumber="6374970664" message="Hello! I'm interested in your services."/>
  <FloatingMailIcon emailAddress="thegpreschool@gmail.com" /> 

</div>


  )
}