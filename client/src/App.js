import logo from './logo.svg';
// import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About.jsx'
import ClassSkill from './components/pages/ClassSkill.jsx';
import Contact from './components/pages/Contact.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParentsCorner from './components/pages/ParentsCorner.jsx';
import Franchise from './components/pages/franchise/Franchise.jsx';
import Curriculum from './components/pages/Curriculum.jsx';
import HighLights from './components/pages/HighLights.jsx';
import Footer from './components/common/Footer.jsx';
import Admission from './components/pages/Admission.jsx';
import Testimonial from './components/pages/Testimonial.jsx';
import Class from './components/pages/specialclasses/Class.jsx';
import Calendar from './components/pages/Academiccalendar/Calendar.jsx';
import Timetable from './components/pages/timetable/Timetable.jsx';
import Teacher from './components/pages/teachers/Teacher.jsx';
import Newsletter from './components/pages/newsletter/Newsletter.jsx';
function App() {
  return (
    <Router>
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourstory" element={<About />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contact" element={<Contact />} />       
         <Route path="/franchise" element={<Franchise/>} />

        <Route path="/parentscorner" element={<ParentsCorner/>} />
        <Route path="/highlight" element={<HighLights/>} />
<Route path="/admission" element={<Admission/>}/>
<Route path="/classes" element={<Class/>}/>
<Route path="/calendar" element={<Calendar/>}/>
<Route path="/timetable" element={<Timetable/>}/>
<Route path="/teachers" element={<Teacher/>}/>
<Route path="/newsletter" element={<Newsletter/>}/>
      </Routes>
    </div>

  </Router>
  );
}

export default App;
