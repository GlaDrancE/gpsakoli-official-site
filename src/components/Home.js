import React from "react";
import { Slider, News_slider, Department_slider } from './Slider'
import Image_Background from "./Image_Background";
import Vision_Mission from "./Vision_Mission";
import Recruiters from "./Recruiters";
import Footer from "./Footer";
import Preloader from "./Preloader";
import { Link } from 'react-router-dom'
import galleryImg1 from '../images/college-images/1.jpg'
import galleryImg2 from '../images/college-images/2.jpg'
import galleryImg3 from '../images/college-images/3.jpg'
import galleryImg4 from '../images/college-images/4.jpg'
import galleryImg5 from '../images/college-images/5.jpg'
import galleryImg6 from '../images/college-images/6.jpg'
import galleryImg7 from '../images/college-images/7.jpg'
import galleryImg8 from '../images/college-images/8.jpg'
import galleryImg9 from '../images/college-images/9.jpg'


import news from '../images/news/7May2022.jpeg'

// Importing image
import principal from '../images/principal.png'
const notices = [
    { url: '#', msg: 'Admission Process Started 2023-24(Marathi)' },
    { url: '#', msg: 'Admission Process Started 2023-24(Marathi)' },
    { url: '#', msg: 'Admission Process Started 2023-24(Marathi)' },
    { url: '#', msg: 'Admission Process Started 2023-24(Marathi)' },
    { url: '#', msg: 'Admission Process Started 2023-24(Marathi)' },
]
const galleryImages = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6,
    galleryImg7,
    galleryImg8,
    galleryImg9
]
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
export default function Home() {
    return (
        <>
            <Preloader />
            <Slider />
            <div className="home-container">
                <div className="clg-about">
                    <div className="about-card w-full p-3 border-card">
                        <span className="small">About</span>
                        <h1 className="font-semibold">Welcome To <span className="heading-red">
                            Government Polytechnic, Sakoli</span> </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptatibus? Esse, dolore ut pariatur quos aperiam quam fugit ipsum laboriosam rerum beatae aspernatur quasi eos expedita eum repudiandae quis suscipit odit optio accusamus quisquam distinctio! <a href="#" className="heading-red">more....</a></p>
                    </div>
                    <div className="notice-card text-center">
                        <div className="notice-heading my-4 flex flex-col items-center">
                            <span className="underline"></span>
                            <h1>Notice Board</h1>
                        </div>
                        <div className="notices-container">
                            <div className="notice-inner-container">
                                {
                                    notices.map((notice) => (
                                        <a href={notice.url} className="notice">{notice.msg}</a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Image_Background />
                <div className="principal-message-container">
                    <div className="principal-message-card p-1 reveal">
                        <div className="principal-profile flex items-center">
                            <img src={principal} alt="" width={'150px'} height={'150px'} />
                            <div className="principal-name mx-1">
                                <div>
                                    Mr. S P Lambhade
                                </div>
                                <span>An Hon'ble Principal of Government Polytechnic Sakoli</span>
                            </div>
                        </div>
                        <p className="text-justify mt-8 text-base">
                            We believe that students are the architects of future; hence their boundless energies need to be channelized in the right direction. We, as an educational institute, do our best efforts to provide that right direction to students. Annual Sports & Cultural Festival; setting of new state of art labs; Students e-enabled education/ performance evaluation initiatives and well meaning students industrial trainings are a few of them. The Training and Placement Cell/ED Cell/Alumni Cell of the institute work tirelessly towards attainment of the common goal of ensuring employment for all students in various industries and helping budding entrepreneurs in establishing successful businesses. I wish that that the Institute will continue to leave its mark in the society by shaping the future of the youth of our country and transforming their potential into successful careers.
                        </p>
                    </div>
                    <div className="news-paper-card border-card reveal">
                        <h1 className="text-center font-bold">GP Sakoli In <span className="heading-red">News</span></h1>
                        <div className="news-container">
                            <Link to="/gpInNews">
                                <img src={news} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-bottom-container mt-10 pt-9">
                <Vision_Mission />
                <Department_slider />
                <div className="home-po-gallery-container grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8">
                    <div className="home-po-container">
                        <h1 className="relative heading-top-left-line">
                            Program <span className="heading-red">
                                Outcome</span>
                        </h1>
                        <div className="program-outcome-content reveal">
                            <ol>
                                <li>Basic and Discipline specific knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.
                                </li>
                                <li>Problem analysis: Identify and analyse well-defined engineering problems using codified standard methods.
                                </li>
                                <li>Design/ development of solutions: Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.
                                </li>
                                <li>
                                    Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.
                                </li>
                                <li>
                                    Engineering practices for society, sustainability and environment: Apply appropriate technology in context of society, sustainability, environment and ethical practices.
                                </li>
                                <li>
                                    Project Management: Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.
                                </li>
                                <li>
                                    Life-long learning: Ability to analyse individual needs and engage in updating in the context of technological changes.
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="gallery-container">
                        <h1 className="relative heading-top-left-line">
                            Photo <span className="heading-red">
                                Gallery</span>
                        </h1>
                        <div class="container mx-auto reveal">
                            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                                { galleryImages.map(element=>(
                                    <img className="galleryImg" src={element} />
                                )) }
                            </div>
                        </div>

                    </div>
                </div>
                <Recruiters />
                <Footer />
            </div>

        </>
    );
}