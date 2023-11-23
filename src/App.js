import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider'
import Department from './components/Department';
import Home from './components/Home';
import Dropdown from './components/Dropdown';
import Top_header from './components/Top_header'
import React, { Component, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


// Computer technology staff data
import cmstaff1 from './images/staff-imgs/computer/gpprincipal.jpeg';
import cmstaff2 from './images/staff-imgs/computer/bajpayee.jpeg';
import cmstaff3 from './images/staff-imgs/computer/lahoti.jpeg';
import cmstaff4 from './images/staff-imgs/computer/vbk.jpeg';
import Scmstaff1 from './images/supporting-staff-images/computer/aswale.png'
import Scmstaff2 from './images/supporting-staff-images/computer/dhabale.jpeg'

// Computer technology laboratories pdfs
import pdf1 from './pdfs/PrLab.pdf';
import pdf2 from './pdfs/hdLab.pdf';
import pdf3 from './pdfs/ntLab.pdf';
import pdf4 from './pdfs/dbLab.pdf';
import pdf5 from './pdfs/projectLab.pdf';
import pdf6 from './pdfs/SELab.pdf';
import UnderDevelopment from './components/UnderDevelopment';
const computerTechnologyStaff = [
  { image: cmstaff1, alt: 'sp lambhade sir', sname: 'Mr. S.P. Lambhade', resignation: 'Head Of Department', qualification: 'BE, ME(Soft Sys.)', Teaching_Exp: 31, contact: 9423433588, email: 'splambhade@gmail.com', detailed_bio: 'Detailed Bio' },
  { image: cmstaff1, alt: 'ma rahman sir', sname: 'Mr. M.A. Rahman', resignation: 'Lecturer', qualification: 'BE, ME', Teaching_Exp: 25, contact: 9922586721, email: 'ma.rahman@rediffmail.com', detailed_bio: 'Detailed Bio' },
  { image: cmstaff2, alt: 'bajpayee sir', sname: 'Mr. A.A. Lambhade', resignation: 'Lecturer', qualification: 'BE, MTech', Teaching_Exp: 10, contact: 7276405509, email: 'abhijeet.bajpayee@gov.in', detailed_bio: 'Detailed Bio' },
  { image: cmstaff3, alt: 'lahoti sir', sname: 'Mr. P.B. Lahoti', resignation: 'Lecturer', qualification: 'BE, MTech, PhD (Persuing)', Teaching_Exp: 11, contact: 9403738895, email: 'lahotipawan@gmail.com', detailed_bio: 'Detailed Bio' },
  { image: cmstaff4, alt: 'vishal sir', sname: 'Mr. V.B. Khobragade', resignation: 'Lecturer', qualification: 'BE, MTech', Teaching_Exp: 11, contact: 9766953403, email: 'vform29@gmail.com', detailed_bio: 'Detailed Bio' },

  // You can add more staff ids here, put the data in json format. as given below
  ///* { image: cmstaff6, alt: '',sname:'', resignation:'', qualification: '', Teaching_Exp: , contact: , email: '', detailed_bio: ''},*/
];
const computerTechnologySupportingStaff = [
  { image: Scmstaff1, alt: 'r.m. aswale', sname: 'Smt. R.M. Aswale', resignation: 'Lab Assitant', qualification: 'BTech, MTech', Teaching_Exp: 8, contact: 9623441321, email: 'rupaliberad@gmail.com', detailed_bio: 'Detailed Bio' },
  { image: Scmstaff2, alt: 'm.s. dhabale', sname: 'Mr. M.S. Dhabale', resignation: 'Peon', qualification: 'SSC', Teaching_Exp: 10, contact: 7507122671, email: 'XXXX@gmail.com', detailed_bio: 'Detailed Bio' },
]
const cm_labs = [
  { lab_name: 'Programming Lab', pdf: pdf1 },
  { lab_name: 'Hardware Lab', pdf: pdf2 },
  { lab_name: 'Network Lab', pdf: pdf3 },
  { lab_name: 'Database Lab', pdf: pdf4 },
  { lab_name: 'Project Lab', pdf: pdf5 },
  { lab_name: 'Software Lab', pdf: pdf6 },
]


// import ejstaff1 from './images/staff-imgs/computer/gpprincipal.jpeg';
// import ejstaff2 from './images/staff-imgs/computer/bajpayee.jpeg';
// import ejstaff3 from './images/staff-imgs/computer/lahoti.jpeg';
// import ejstaff4 from './images/staff-imgs/computer/vbk.jpeg';
// const electricalEngineering = [
//   { image: ejstaff1, alt: 'sp lambhade sir' },
//   { image: ejstaff2, alt: 'bajpayee sir' },
//   { image: ejstaff3, alt: 'lahoti sir' },
//   { image: ejstaff4, alt: 'vishal bhau' },
//   // { image: ejstaff5, alt: '' },
// ]



// import eestaff1 from './images/staff-imgs/computer/gpprincipal.jpeg';
// import eestaff2 from './images/staff-imgs/computer/bajpayee.jpeg';
// import eestaff3 from './images/staff-imgs/computer/lahoti.jpeg';
// import eestaff4 from './images/staff-imgs/computer/vbk.jpeg';
// const electronicsEngineering = [
//   { image: eestaff1, alt: 'sp lambhade sir' },
//   { image: eestaff2, alt: 'bajpayee sir' },
//   { image: eestaff3, alt: 'lahoti sir' },
//   { image: eestaff4, alt: 'vishal bhau' },
//   // { image: ejstaff5, alt: '' },
// ]



// import mestaff1 from './images/staff-imgs/computer/gpprincipal.jpeg';
// import mestaff2 from './images/staff-imgs/computer/bajpayee.jpeg';
// import mestaff3 from './images/staff-imgs/computer/lahoti.jpeg';
// import mestaff4 from './images/staff-imgs/computer/vbk.jpeg';
// const mechanicalEngineering = [
//   { image: mestaff1, alt: 'sp lambhade sir' },
//   { image: mestaff2, alt: 'bajpayee sir' },
//   { image: mestaff3, alt: 'lahoti sir' },
//   { image: mestaff4, alt: 'vishal sir' },
//   // { image: ejstaff5, alt: '' },
// ]



// import cestaff1 from './images/staff-imgs/computer/gpprincipal.jpeg';
// import cestaff2 from './images/staff-imgs/computer/bajpayee.jpeg';
// import cestaff3 from './images/staff-imgs/computer/lahoti.jpeg';
// import cestaff4 from './images/staff-imgs/computer/vbk.jpeg';
// const civilEngineering = [
//   { image: cestaff1, alt: 'sp lambhade sir' },
//   { image: cestaff2, alt: 'bajpayee sir' },
//   { image: cestaff3, alt: 'lahoti sir' },
//   { image: cestaff4, alt: 'vishal bhau' },
//   // { image: ejstaff5, alt: '' },
// ]

// let myVariable = 1234;
function App() {
  const { progress, setProgress } = useState(0);

  return (
    <>
      <Router>
        <Top_header />
        <LoadingBar color='black' progress={100} shadow={true} height={4} />
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/computer-technology' element={<Department staff={computerTechnologyStaff} supporintStaff={computerTechnologySupportingStaff} labs={cm_labs} />}></Route>
          <Route path='/electrical-engineering' element={<Department staff={computerTechnologyStaff} supporintStaff={computerTechnologySupportingStaff} labs={cm_labs} />}></Route>
          <Route path='/civil-engineering' element={<Department staff={computerTechnologyStaff} supporintStaff={computerTechnologySupportingStaff} labs={cm_labs} />}></Route>
          <Route path='/mechanical-engineering' element={<Department staff={computerTechnologyStaff} supporintStaff={computerTechnologySupportingStaff} labs={cm_labs} />}></Route>
          <Route path='/electronics-engineering' element={<Department staff={computerTechnologyStaff} supporintStaff={computerTechnologySupportingStaff} labs={cm_labs} />}></Route>
          <Route path='/science-humanities' element={<Department staff={computerTechnologyStaff} supporintStaff={computerTechnologySupportingStaff} labs={cm_labs} />}></Route>
          <Route path='/applied-mechanics' element={<Department staff={computerTechnologyStaff} supporintStaff={computerTechnologySupportingStaff} labs={cm_labs} />}></Route>

          <Route path='/library' element={<UnderDevelopment />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
