import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Dropdown from './Dropdown';
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination, EffectCreative, EffectCoverflow } from 'swiper/modules';

// All slider Images
import image1 from '../images/welcome.jpg'
import image2 from '../images/c1.jpg'
import image3 from '../images/c2.jpg'
import image4 from '../images/c3.jpg'



// All News Images
import news1 from '../images/news/7May2022.jpeg'
import news2 from '../images/news/15sep_22_engday.jpeg'
import news3 from '../images/news/Induction_Program_21sep22.jpeg'
import news4 from '../images/news/Jaldharohar_18Sep22.jpeg'
import news5 from '../images/news/tiranga_12aug22.jpeg'




// All Department Images
import dept1 from '../images/computer.jpg'
import dept2 from '../images/electronics.jpg'
import dept3 from '../images/electrical.jpg'
import dept4 from '../images/mechanical.jpg'
import dept5 from '../images/civil.jpg'

// Logo image
import logo from '../images/logo.png'

// Polygon background images
import polygon_1 from '../images/Polygon-1.png'
import polygon_2 from '../images/Polygon-2.png'
import polygon_3 from '../images/Polygon-3.png'


// Hamburger Icon
// import hamburger from '../images/icons/hamburger.png'
const images = [
  {
    src: image1, alt: 'First Image', msg:'Welcome to Government Polytechnic Sakoli'},
  { src: image2, alt: 'Second Image', msg: 'Tree Plantation' },
  { src: image3, alt: 'Third Image', msg: 'Fire extinguisher Experiment' },
  { src: image4, alt: 'Fourth Image', msg: 'Clicknet training' },
]


const newses = [
  { src: news1, alt: '7 May 2022', year: 2022 },
  { src: news2, alt: '15 Sep 2022', year: 2022 },
  { src: news3, alt: 'Introduction Program 21 Sep 2022', year: 2022 },
  { src: news4, alt: 'Jaldhraohar 18 Sep 2022', year: 2022 },
  { src: news5, alt: 'Tiranga 12 Aug 2022', year: 2022 },
]



const departments = [
  { src: dept1, alt: 'Comupter Engineering' },
  { src: dept2, alt: 'Electronics Engineering' },
  { src: dept3, alt: 'Electrical Engineering' },
  { src: dept4, alt: 'Mechanical Engineering' },
  { src: dept5, alt: 'Civil Engineering' }
]




const link1 = [
  {
    headings: 'Department', content: [
      { contentTitle: 'Computer Technology', contentUrl: '/computer-technology' },
      { contentTitle: 'Civil Engineering', contentUrl: '/civil-engineering' },
      { contentTitle: 'Electrical Engineering', contentUrl: '/electrical-engineering' },
      { contentTitle: 'Electronics and Tel. Comm. Engineering', contentUrl: '/electronics-engineering' },
      { contentTitle: 'Mechanical Engineering', contentUrl: '/mechanical-engineering' },
      { contentTitle: 'Science and Humanities', contentUrl: '/science-humanities' },
      { contentTitle: 'Applied Mechanics', contentUrl: '/applied-mechanics' }]
  },

  {
    headings: 'Facilities', content: [
      { contentTitle: 'Library', contentUrl: '/library' },
      { contentTitle: 'Gymkhana', contentUrl: '' },
      { contentTitle: 'Student Cooperative Store', contentUrl: '' },
      { contentTitle: 'Canteen', contentUrl: '' },
      { contentTitle: 'Boys Hostel', contentUrl: '' },
      { contentTitle: 'Internet', contentUrl: '' }]
  },
  {
    headings: 'Accreditation and Reports', content: [
      { contentTitle: 'NBA Accreditation Status', contentUrl: '' },
      { contentTitle: 'EOA (AICTE) Reports', contentUrl: '' },
      { contentTitle: 'Monitoring Reports', contentUrl: '' },
      { contentTitle: 'Audit Reports', contentUrl: '' }]
  },
]
const link2 = [
  { headings: 'Department', content: ['Computer Technology', 'Civil Engineering', 'Electrical Engineering', 'Electronics and Tel. Comm. Engineering', 'Mechanical Engineering', 'Science and Humanities', 'Applied Mechanics'] },
  { headings: 'Facilities', content: ['Library', 'Gymkhana', 'Student Cooperative Store', 'Canteen', 'Boys Hostel', 'Internet'] },
  { headings: 'Accreditation and Reports', content: ['NBA Accreditation Status', 'EOA (AICTE) Reports', 'Monitoring Reports', 'Audit Reports'] },
]
const link3 = [
  { headings: 'Department', content: ['Computer Technology', 'Civil Engineering', 'Electrical Engineering', 'Electronics and Tel. Comm. Engineering', 'Mechanical Engineering', 'Science and Humanities', 'Applied Mechanics'] },
  { headings: 'Facilities', content: ['Library', 'Gymkhana', 'Student Cooperative Store', 'Canteen', 'Boys Hostel', 'Internet'] },
  { headings: 'Accreditation and Reports', content: ['NBA Accreditation Status', 'EOA (AICTE) Reports', 'Monitoring Reports', 'Audit Reports'] },
]
const link4 = [
  { headings: 'Department', content: ['Computer Technology', 'Civil Engineering', 'Electrical Engineering', 'Electronics and Tel. Comm. Engineering', 'Mechanical Engineering', 'Science and Humanities', 'Applied Mechanics'] },
  { headings: 'Facilities', content: ['Library', 'Gymkhana', 'Student Cooperative Store', 'Canteen', 'Boys Hostel', 'Internet'] },
  { headings: 'Accreditation and Reports', content: ['NBA Accreditation Status', 'EOA (AICTE) Reports', 'Monitoring Reports', 'Audit Reports'] },
]
const link5 = [
  { headings: 'Department', content: ['Computer Technology', 'Civil Engineering', 'Electrical Engineering', 'Electronics and Tel. Comm. Engineering', 'Mechanical Engineering', 'Science and Humanities', 'Applied Mechanics'] },
  { headings: 'Facilities', content: ['Library', 'Gymkhana', 'Student Cooperative Store', 'Canteen', 'Boys Hostel', 'Internet'] },
  { headings: 'Accreditation and Reports', content: ['NBA Accreditation Status', 'EOA (AICTE) Reports', 'Monitoring Reports', 'Audit Reports'] },
]


export function Slider() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState({ opacity: '0', top: '0', height: '0'})
  function handleMobileNav() {
    if (showMobileNav.opacity == '0') {
      setShowMobileNav({ opacity: '1', top: '25%', height: 'auto'}); return;
    }
    setShowMobileNav({ opacity: '0', top: '0', height: '0'});
  }
  // function handleScroll(e){
  //   const winScroll =
  //   document.body.scrollTop || document.documentElement.scrollTop

  // const height =
  //   document.documentElement.scrollHeight -
  //   document.documentElement.clientHeight
  // const scrolled = winScroll / height
  // console.log(scrolled);
  // }
  return (
    <>

      <div className='main-slider'>

        <header className="header-comp">
          <div className="mobile-home top-12 absolute m-4" style={{ width: '2.5rem' }}>
            <Link to="/" id='home'>
              <li className='list-none'>
                <svg width="25" height="15" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.9779 14.0846V23.2328C26.9779 23.5632 26.8572 23.8491 26.6158 24.0905C26.3744 24.3319 26.0885 24.4526 25.7582 24.4526H18.4395V17.134H13.5604V24.4526H6.2418C5.91145 24.4526 5.62556 24.3319 5.38415 24.0905C5.14274 23.8491 5.02203 23.5632 5.02203 23.2328V14.0846C5.02203 14.0718 5.02521 14.0528 5.03156 14.0274C5.03791 14.002 5.04109 13.9829 5.04109 13.9702L16 4.93626L26.9589 13.9702C26.9716 13.9956 26.9779 14.0337 26.9779 14.0846ZM31.2281 12.7695L30.0464 14.1799C29.9448 14.2942 29.8114 14.3641 29.6462 14.3895H29.589C29.4238 14.3895 29.2904 14.345 29.1888 14.2561L16 3.25908L2.81119 14.2561C2.65872 14.3577 2.50625 14.4022 2.35378 14.3895C2.1886 14.3641 2.05519 14.2942 1.95354 14.1799L0.771883 12.7695C0.670235 12.6424 0.625764 12.4931 0.63847 12.3216C0.651176 12.1501 0.721059 12.0135 0.848119 11.9118L14.5515 0.495532C14.9581 0.165177 15.4409 0 16 0C16.5591 0 17.0419 0.165177 17.4485 0.495532L22.0989 4.38356V0.667063C22.0989 0.489179 22.156 0.343061 22.2704 0.228707C22.3847 0.114354 22.5309 0.0571768 22.7087 0.0571768H26.3681C26.5459 0.0571768 26.6921 0.114354 26.8064 0.228707C26.9208 0.343061 26.9779 0.489179 26.9779 0.667063V8.44311L31.1519 11.9118C31.2789 12.0135 31.3488 12.1501 31.3615 12.3216C31.3742 12.4931 31.3297 12.6424 31.2281 12.7695Z" fill="white" />
                </svg>
              </li>
            </Link>
          </div>
          <div className="mobile-menu top-12 absolute right-0 m-4" onClick={handleMobileNav}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="25" height="25"><path fill="#ffffff" d="M8.2 13h47.5v6.3H8.2zM8.2 28.8h47.5v6.4H8.2zM8.2 44.7h47.5V51H8.2z" class="color134563 svgShape"></path></svg>
          </div>
          <nav style={showMobileNav} className='mobile-dropdown-menu'>
            <div className="mobile-header-location flex items-center sm:justify-center">
              <svg width="59" height="74" viewBox="0 0 59 74" fill="darkred" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M29.5 0.611816C22.8696 0.611816 16.5107 3.36643 11.8223 8.26966C7.13392 13.1729 4.5 19.8231 4.5 26.7573C4.5 44.4056 26.5313 64.3415 27.4688 65.1913C28.0348 65.6976 28.7551 65.9758 29.5 65.9758C30.2449 65.9758 30.9652 65.6976 31.5312 65.1913C32.625 64.3415 54.5 44.4056 54.5 26.7573C54.5 19.8231 51.8661 13.1729 47.1777 8.26966C42.4893 3.36643 36.1304 0.611816 29.5 0.611816ZM29.5 58.2954C22.8438 51.759 10.75 37.6731 10.75 26.7573C10.75 21.5567 12.7254 16.569 16.2417 12.8916C19.7581 9.21415 24.5272 7.1482 29.5 7.1482C34.4728 7.1482 39.2419 9.21415 42.7583 12.8916C46.2746 16.569 48.25 21.5567 48.25 26.7573C48.25 37.6731 36.1562 51.7917 29.5 58.2954ZM29.5 13.6846C27.0277 13.6846 24.611 14.4513 22.5554 15.8877C20.4998 17.3242 18.8976 19.3659 17.9515 21.7546C17.0054 24.1433 16.7579 26.7718 17.2402 29.3077C17.7225 31.8436 18.913 34.1729 20.6612 36.0012C22.4093 37.8294 24.6366 39.0745 27.0614 39.5789C29.4861 40.0833 31.9995 39.8244 34.2835 38.835C36.5676 37.8455 38.5199 36.17 39.8934 34.0202C41.2669 31.8704 42 29.3429 42 26.7573C42 23.2902 40.683 19.9651 38.3388 17.5135C35.9946 15.0619 32.8152 13.6846 29.5 13.6846ZM29.5 33.2937C28.2639 33.2937 27.0555 32.9104 26.0277 32.1921C24.9999 31.4739 24.1988 30.4531 23.7258 29.2587C23.2527 28.0643 23.1289 26.7501 23.3701 25.4822C23.6112 24.2142 24.2065 23.0495 25.0806 22.1354C25.9547 21.2213 27.0683 20.5988 28.2807 20.3466C29.4931 20.0943 30.7497 20.2238 31.8918 20.7185C33.0338 21.2132 34.0099 22.051 34.6967 23.1259C35.3834 24.2008 35.75 25.4646 35.75 26.7573C35.75 28.4909 35.0915 30.1534 33.9194 31.3793C32.7473 32.6051 31.1576 33.2937 29.5 33.2937Z" fill="darkred" />
                </g>
              </svg>

              <p className="college-address mx-3">
                Government Polytechnic, Sakoli Sendurwafa Sakoli, Maharashtra 441802
              </p>
            </div>
            <div>
              <MobileNav url='#' link='Academics' ddcontent={link1} />
            </div>
            <div>
              <MobileNav url='#' link='Student Corner' ddcontent={link1} />
            </div>
            <div>
              <MobileNav url='#' link='Training and Placements' ddcontent={link1} />
            </div>
            <div>
              <MobileNav url='#' link='Committees' ddcontent={link1} />
            </div>
            <div>
              <MobileNav url='#' link='Alumni' ddcontent={link1} />
            </div>
            <div>
              <MobileNav url='#' link='Research, Publication and Patents' ddcontent={link1} />
            </div>
          </nav>
          <div className="logo-header flex justify-between text-white px-8 py-4">
            <div className="logo flex items-center">
              <img src={logo} alt="" width={90} />
              <h2 className='clg-name'>GOVERNMENT POLYTECHNIC SAKOLI</h2>
            </div>
            <div className="header-location flex items-center sm:justify-center">
              <svg width="59" height="74" viewBox="0 0 59 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_ddddd_45_9)">
                  <path d="M29.5 0.611816C22.8696 0.611816 16.5107 3.36643 11.8223 8.26966C7.13392 13.1729 4.5 19.8231 4.5 26.7573C4.5 44.4056 26.5313 64.3415 27.4688 65.1913C28.0348 65.6976 28.7551 65.9758 29.5 65.9758C30.2449 65.9758 30.9652 65.6976 31.5312 65.1913C32.625 64.3415 54.5 44.4056 54.5 26.7573C54.5 19.8231 51.8661 13.1729 47.1777 8.26966C42.4893 3.36643 36.1304 0.611816 29.5 0.611816ZM29.5 58.2954C22.8438 51.759 10.75 37.6731 10.75 26.7573C10.75 21.5567 12.7254 16.569 16.2417 12.8916C19.7581 9.21415 24.5272 7.1482 29.5 7.1482C34.4728 7.1482 39.2419 9.21415 42.7583 12.8916C46.2746 16.569 48.25 21.5567 48.25 26.7573C48.25 37.6731 36.1562 51.7917 29.5 58.2954ZM29.5 13.6846C27.0277 13.6846 24.611 14.4513 22.5554 15.8877C20.4998 17.3242 18.8976 19.3659 17.9515 21.7546C17.0054 24.1433 16.7579 26.7718 17.2402 29.3077C17.7225 31.8436 18.913 34.1729 20.6612 36.0012C22.4093 37.8294 24.6366 39.0745 27.0614 39.5789C29.4861 40.0833 31.9995 39.8244 34.2835 38.835C36.5676 37.8455 38.5199 36.17 39.8934 34.0202C41.2669 31.8704 42 29.3429 42 26.7573C42 23.2902 40.683 19.9651 38.3388 17.5135C35.9946 15.0619 32.8152 13.6846 29.5 13.6846ZM29.5 33.2937C28.2639 33.2937 27.0555 32.9104 26.0277 32.1921C24.9999 31.4739 24.1988 30.4531 23.7258 29.2587C23.2527 28.0643 23.1289 26.7501 23.3701 25.4822C23.6112 24.2142 24.2065 23.0495 25.0806 22.1354C25.9547 21.2213 27.0683 20.5988 28.2807 20.3466C29.4931 20.0943 30.7497 20.2238 31.8918 20.7185C33.0338 21.2132 34.0099 22.051 34.6967 23.1259C35.3834 24.2008 35.75 25.4646 35.75 26.7573C35.75 28.4909 35.0915 30.1534 33.9194 31.3793C32.7473 32.6051 31.1576 33.2937 29.5 33.2937Z" fill="white" />
                </g>
                <defs>
                  <filter id="filter0_ddddd_45_9" x="0.5" y="0.611816" width="58" height="73.364" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_9" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_45_9" result="effect2_dropShadow_45_9" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="effect2_dropShadow_45_9" result="effect3_dropShadow_45_9" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="effect3_dropShadow_45_9" result="effect4_dropShadow_45_9" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="effect4_dropShadow_45_9" result="effect5_dropShadow_45_9" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_45_9" result="shape" />
                  </filter>
                </defs>
              </svg>

              <p className="college-address mx-3">
                Government Polytechnic, Sakoli Sendurwafa Sakoli, Maharashtra 441802
              </p>
            </div>
          </div>
          <nav className='slider-nav flex w-full justify-center'>
            <ul className='flex justify-center items-center'>
              <div>
                <Link to="/" id='home'>
                  <li>
                    <svg width="25" height="15" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.9779 14.0846V23.2328C26.9779 23.5632 26.8572 23.8491 26.6158 24.0905C26.3744 24.3319 26.0885 24.4526 25.7582 24.4526H18.4395V17.134H13.5604V24.4526H6.2418C5.91145 24.4526 5.62556 24.3319 5.38415 24.0905C5.14274 23.8491 5.02203 23.5632 5.02203 23.2328V14.0846C5.02203 14.0718 5.02521 14.0528 5.03156 14.0274C5.03791 14.002 5.04109 13.9829 5.04109 13.9702L16 4.93626L26.9589 13.9702C26.9716 13.9956 26.9779 14.0337 26.9779 14.0846ZM31.2281 12.7695L30.0464 14.1799C29.9448 14.2942 29.8114 14.3641 29.6462 14.3895H29.589C29.4238 14.3895 29.2904 14.345 29.1888 14.2561L16 3.25908L2.81119 14.2561C2.65872 14.3577 2.50625 14.4022 2.35378 14.3895C2.1886 14.3641 2.05519 14.2942 1.95354 14.1799L0.771883 12.7695C0.670235 12.6424 0.625764 12.4931 0.63847 12.3216C0.651176 12.1501 0.721059 12.0135 0.848119 11.9118L14.5515 0.495532C14.9581 0.165177 15.4409 0 16 0C16.5591 0 17.0419 0.165177 17.4485 0.495532L22.0989 4.38356V0.667063C22.0989 0.489179 22.156 0.343061 22.2704 0.228707C22.3847 0.114354 22.5309 0.0571768 22.7087 0.0571768H26.3681C26.5459 0.0571768 26.6921 0.114354 26.8064 0.228707C26.9208 0.343061 26.9779 0.489179 26.9779 0.667063V8.44311L31.1519 11.9118C31.2789 12.0135 31.3488 12.1501 31.3615 12.3216C31.3742 12.4931 31.3297 12.6424 31.2281 12.7695Z" fill="white" />
                    </svg>
                  </li>
                </Link>
              </div>

              <div>
                <Dropdown url='#' link='Academics' ddcontent={link1} />
              </div>
              <div>
                <Dropdown url='#' link='Student Corner' ddcontent={link1} />
              </div>
              <div>
                <Dropdown url='#' link='Training and Placements' ddcontent={link1} />
              </div>
              <div>
                <Dropdown url='#' link='Committees' ddcontent={link1} />
              </div>
              <div>
                <Dropdown url='#' link='Alumni' ddcontent={link1} />
              </div>
              <div>
                <Dropdown url='#' link='Research, Publication and Patents' ddcontent={link5} />
              </div>
            </ul>
          </nav>
        </header>
        <Swiper
          // cssMode={true}
          spaceBetween={60}
          navigation={true}
          loop={true}
          effect={'fade'}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide>
              <img src={image.src} width={'100%'} />
              <div className='Slider-content text-white'>
                <div className="slide-title text-center w-full">
                  <h1 className='slide-left'>{image.msg}</h1>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}




export function News_slider() {
  return (
    <>

      <Swiper
        grabCursor={true}
        effect={'fade'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        {
          newses.map((news) => (
            <SwiperSlide>
              <img src={news.src} alt="" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}



export function Department_slider() {
  return (
    <>

      <div className="department-slider-container relative my-16">
        <img className='polygon' src={polygon_1} alt="" />
        <img className='polygon' src={polygon_2} alt="" />
        <img className='polygon' src={polygon_3} alt="" />
        <div className="department-slider-inner-container lg:p-10 md:p-7">
          <div className="dept-heading text-center">
            <h1 className='relative heading-top-center-line'>Available <span className="text-red-700">Branch</span></h1>
            <div className="small" style={{ color: 'black', fontWeight: 300 }}>DIPLOMA COURSES</div>
          </div>
          <div className="dept-slider-container">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {departments.map((e) => (
                <SwiperSlide>
                  <a href="#" className='departmentImages'>
                    <img src={e.src} />
                    <div className="dept-images-cover">{e.alt}</div>
                  </a>
                </SwiperSlide>

              ))}
            </Swiper>
          </div>
        </div>
      </div>

    </>
  )
}