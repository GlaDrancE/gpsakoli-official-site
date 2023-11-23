import React, { useState } from 'react'
import { Slider, News_slider, Department_slider } from './Slider'
import Image_Background from "./Image_Background";
import Vision_Mission from "./Vision_Mission";
import Recruiters from "./Recruiters";
import Footer from "./Footer"
import StaffComponent from './StaffComponent';
import { Collapse_Dropdown } from './Dropdown';

export default function Department(props) {
    const [deptContent, setDeptContent] = useState('about-department');
    const [showDeptMenu, setShowDeptMenu] = useState('');
    function handleDeptMenu() {
        const mobileDeptMenu = document.querySelector('.mobile-dept-menu');
        if (showDeptMenu === '0%' && mobileDeptMenu.style.display !== 'none') {
            setShowDeptMenu('-100%');
            mobileDeptMenu.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" id="menu">        <path fill-rule="evenodd" d="M18.9 17.009c0 .551-.518.991-1.097.991h-3.15a.98.98 0 0 1-1.003-.991v-3A.994.994 0 0 1 14.653 13h3.15c.58 0 1.097.458 1.097 1.009v3zM17.803 11h-3.15c-1.74 0-3.103 1.352-3.103 3.009v3c0 1.657 1.363 2.991 3.103 2.991h3.15C19.543 20 21 18.666 21 17.009v-3C21 12.352 19.543 11 17.803 11zM7.35 17.009c0 .551-.518.991-1.097.991h-3.15a.98.98 0 0 1-1.003-.991v-3A.994.994 0 0 1 3.103 13h3.15c.58 0 1.097.458 1.097 1.009v3zM6.253 11h-3.15C1.363 11 0 12.352 0 14.009v3C0 18.666 1.363 20 3.103 20h3.15c1.74 0 3.197-1.334 3.197-2.991v-3C9.45 12.352 7.993 11 6.253 11zM18.9 6.009c0 .551-.518.991-1.097.991h-3.15a.98.98 0 0 1-1.003-.991v-3A.994.994 0 0 1 14.653 2h3.15c.58 0 1.097.458 1.097 1.009v3zM17.803 0h-3.15c-1.74 0-3.103 1.352-3.103 3.009v3C11.55 7.666 12.913 9 14.653 9h3.15C19.543 9 21 7.666 21 6.009v-3C21 1.352 19.543 0 17.803 0zM7.35 6.009c0 .551-.518.991-1.097.991h-3.15A.98.98 0 0 1 2.1 6.009v-3A.994.994 0 0 1 3.103 2h3.15c.58 0 1.097.458 1.097 1.009v3zM6.253 0h-3.15C1.363 0 0 1.352 0 3.009v3C0 7.666 1.363 9 3.103 9h3.15C7.993 9 9.45 7.666 9.45 6.009v-3C9.45 1.352 7.993 0 6.253 0z"></path>    </svg>';
            return;
        }


        setShowDeptMenu('0%');
        mobileDeptMenu.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" id="close"><g data-name="Layer 2"><path d="m13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" data-name="close"></path></g></svg>';
    }
    return (
        <>
            <Slider />
            <div className="department-main-container min-h-screen">
                <div className="mobile-dept-menu lg:hidden" onClick={handleDeptMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" id="menu">
                        <path fill-rule="evenodd" d="M18.9 17.009c0 .551-.518.991-1.097.991h-3.15a.98.98 0 0 1-1.003-.991v-3A.994.994 0 0 1 14.653 13h3.15c.58 0 1.097.458 1.097 1.009v3zM17.803 11h-3.15c-1.74 0-3.103 1.352-3.103 3.009v3c0 1.657 1.363 2.991 3.103 2.991h3.15C19.543 20 21 18.666 21 17.009v-3C21 12.352 19.543 11 17.803 11zM7.35 17.009c0 .551-.518.991-1.097.991h-3.15a.98.98 0 0 1-1.003-.991v-3A.994.994 0 0 1 3.103 13h3.15c.58 0 1.097.458 1.097 1.009v3zM6.253 11h-3.15C1.363 11 0 12.352 0 14.009v3C0 18.666 1.363 20 3.103 20h3.15c1.74 0 3.197-1.334 3.197-2.991v-3C9.45 12.352 7.993 11 6.253 11zM18.9 6.009c0 .551-.518.991-1.097.991h-3.15a.98.98 0 0 1-1.003-.991v-3A.994.994 0 0 1 14.653 2h3.15c.58 0 1.097.458 1.097 1.009v3zM17.803 0h-3.15c-1.74 0-3.103 1.352-3.103 3.009v3C11.55 7.666 12.913 9 14.653 9h3.15C19.543 9 21 7.666 21 6.009v-3C21 1.352 19.543 0 17.803 0zM7.35 6.009c0 .551-.518.991-1.097.991h-3.15A.98.98 0 0 1 2.1 6.009v-3A.994.994 0 0 1 3.103 2h3.15c.58 0 1.097.458 1.097 1.009v3zM6.253 0h-3.15C1.363 0 0 1.352 0 3.009v3C0 7.666 1.363 9 3.103 9h3.15C7.993 9 9.45 7.666 9.45 6.009v-3C9.45 1.352 7.993 0 6.253 0z"></path>
                    </svg>
                </div>
                <div className="department-heading text-center">
                    <h1>Department of Computer technology</h1>
                    <h1 className='heading-red'>NBA Accredited</h1>
                </div>
                <div className="department-dynamic-container">
                    <div className="dept-dynamic-change-container">
                        {deptContent === 'about-department' ? (<>
                            <div className="about-department-container text-justify p-2">
                                <h1>About <span className='heading-red'>Department</span></h1>
                                <p>Computer Engineering is core branch among other branches. Computer engineering continually push the capability and applicability of computer in every industry and every facet of modern life. it embeds computers in other machines and system, build network to transfer data and develop way to make computer faster, smaller and more capable.
                                    The pass outs have opportunities to work as Customer support Engineer, Programmer, Maintenance Engineer and hardware Engineer in various sector or companies like IBM, TCS, WIPRO, persistent software, tech. Mahindra, Infosys etc. Students can also start their own career in small software development firms or Hardware Maintenance firms.</p>
                            </div>
                            <Vision_Mission />
                            <div className='dept-peos-block my-16'>
                                <h1 className='heading-top-left-line'>PEOs</h1>
                                <ul>
                                    <li className="list-disc">PSO1: Computer Software and Hardware Usage: Use state-of-the-art technologies for operation and application of computer software and hardware.
                                    </li>
                                    <li className="list-disc"> PSO2: Computer Engineering Maintenance: Maintain computer engineering realted software and hardware systems.
                                    </li>
                                </ul>
                            </div>
                            <div className="dept-psos-pos-block grid lg:grid-cols-2 gap-8">
                                <div className="psos-block">
                                    <h1 className="heading-top-left-line">
                                        PSOs
                                    </h1>
                                    <ul className='text-justify'>
                                        <li className="list-disc">PSO1: Modern Software Usage: Use latest Mechanical engineering related softwares for simple design, drafting, manufacturing, maintenance and documentation of mechanical engineering components and processes.
                                        </li>
                                        <li className="list-disc">PSO2: Equipment and Instruments: Maintain equipment and instruments related to Mechanical Engineering.</li>
                                        <li className="list-disc">PSO3: Mechanical Engineering Processes: Manage Mechanical engineering processes by selecting and scheduling relevant equipment, substrates, quality control techniques, and operational parameters.</li>
                                    </ul>
                                </div>
                                <div className="pos-block">
                                    <h1>POs</h1>
                                    <ul className='text-justify'>
                                        <li className='list-disc'>
                                            PO1:Basic and Discipline Specific Knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.
                                        </li>
                                        <li className="list-disc">PO2: Problem analysis: Identify and analyse well-defined engineering problems using codified standard methods.</li>
                                        <li className="list-disc">PO3: Design/ development of solutions: Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.</li>
                                        <li className="list-disc">PO4: Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.</li>
                                        <li className="list-disc">PO5: Engineering practices for society, sustainability and environment: Apply appropriate technology in context of society, sustainability, environment and ethical practices.</li>
                                        <li className="list-disc">
                                            PO6: Project Management: Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.</li>
                                        <li className="list-disc">PO7: Life-long learning: Ability to analyses individual needs and engage in updating in the context of technological change.</li>

                                    </ul>
                                </div>
                            </div>
                        </>) : (deptContent === 'department-portfolio' ? <>
                            <h2 className='heading-top-center-line'><span className='heading-red'>Faculty</span> Profile</h2>
                            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12">
                                {
                                    props.staff.map(i => (
                                        <StaffComponent staffimages={i} />
                                    ))
                                }
                            </div>
                            <hr className='my-5' />
                            <h1 className='heading-top-center-line text-center my-4 supporting-heading'>Supporting <span className="heading-red"> Staff</span></h1>
                            <div className='grid grid-cols-2 gap-12'>
                                {
                                    props.supporintStaff.map(i => (
                                        <StaffComponent staffimages={i} />
                                    ))
                                }
                            </div>
                        </> : (deptContent === 'laboratories' ? (<><div className="w-full">
                            {props.labs.map(l => (
                                <Collapse_Dropdown labs={l} />
                            ))}
                        </div></>) : console.log('hello')))}

                        {/* {deptContent === 'about-department' ? (<></>):deptContent === 'department-portfolio'?(<>
                                
                            </>))
                            
                            
                        } */}
                        {/*  */}


                    </div>
                    <div className="dept-main-menu relative w-100" style={{ right: showDeptMenu }}>
                        <div className="inner-dept-main-menu absolute w-100 border-card">

                            <h1>Main <span className='heading-red'>Menu</span></h1>
                            <ul>
                                <li onClick={() => { handleDeptMenu(); setDeptContent('about-department') }}>About Department<span className="hover-line"></span></li>
                                <li onClick={() => { handleDeptMenu(); setDeptContent('department-portfolio') }}>Department Portfolio<span className="hover-line"></span></li>
                                <li onClick={() => { handleDeptMenu(); setDeptContent('digital-library') }}>Digital Library<span className="hover-line"></span></li>
                                <li onClick={() => { handleDeptMenu(); setDeptContent('vision-mission') }}>Vision & Mission<span className="hover-line"></span></li>
                                <li onClick={() => { handleDeptMenu(); setDeptContent('peos-psos') }}>PEOs & PSOs<span className="hover-line"></span></li>
                                <li onClick={() => { handleDeptMenu(); setDeptContent('pos') }}>POs<span className="hover-line"></span></li>
                                <li onClick={() => { handleDeptMenu(); setDeptContent('faculties') }}>Faculties<span className="hover-line"></span></li>
                                <li onClick={() => { handleDeptMenu(); setDeptContent('supporting-staff') }}>Supporting Staff<span className="hover-line"></span></li>
                                <li onClick={() => { handleDeptMenu(); setDeptContent('result-analysis') }}>Result Analysis<span className="hover-line"></span></li>
                                <li onClick={() => { handleDeptMenu(); setDeptContent('event-analysis') }}>Event & Analysis<span className="hover-line"></span></li>
                                <li onClick={() => { handleDeptMenu(); setDeptContent('mous') }}>MOUs<span className="hover-line"></span></li>
                                <li onClick={() => { handleDeptMenu(); setDeptContent('laboratories') }}>Laboratories<span className="hover-line"></span></li>
                                <li onClick={() => { handleDeptMenu(); setDeptContent('curriculum') }}>Curriculum<span className="hover-line"></span></li>
                                <li onClick={() => { handleDeptMenu(); setDeptContent('time-table') }}>Time Table<span className="hover-line"></span></li>
                                <li onClick={() => { handleDeptMenu(); setDeptContent('student-corner') }}>Student Corner<span className="hover-line"></span></li>
                                <li onClick={() => { handleDeptMenu(); setDeptContent('news-letter') }}>News Letter<span className="hover-line"></span></li>
                                <li onClick={() => { handleDeptMenu(); setDeptContent('internal-revenue-generation') }}>Internal Revenue Generation<span className="hover-line"></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

