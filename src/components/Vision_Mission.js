import React from 'react'
export default function Vision_Mission() {
  return (
    <>
        <div className="vision-mission-container grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mx-auto my-9">
            <div className="vision-container p-3 text-center text-white">
                <h1>Vision</h1>
                <p>To be an institute of national repute creating technocrats to serve the society. society.</p>
            </div>
            <div className="mission-container p-3 text-center">
                <h1>Mission</h1>
                <ul>
                    <li>To set up state of the art infrastructure, laboratories, library and supporting services.</li>
                    <li>To achieve academic excellence in teaching and learning through continuous development using latest technologies and resources.</li>
                    <li>To inculcate technical and entrepreneurial skills, moral and ethical values in students.</li>
                    <li>To build strategic networking with alumni, industries and academic institutions.</li>
                </ul>
            </div>
        </div>
    </>
  )
}
