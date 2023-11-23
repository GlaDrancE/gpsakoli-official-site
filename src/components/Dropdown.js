import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import pdf from '../pdfs/PrLab.pdf'
export default function Dropdown(props) {
    const [showDD, setShowDD] = useState({height: '0', opacity: '0'})
    const handleMouseEnter = () => {
        setShowDD({height: '270%', opacity: '1'});
    };

    const handleMouseLeave = () => {
        setShowDD({height: '0', opacity: '0'});
    };

    return (
        <>
            <a href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><li>{props.link}</li></a>
            <div className="dropdown-container absolute align-center min-w-0 bg-white p-8" style={showDD} onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>

                {
                    props.ddcontent.map(element => (

                        <div className="dropdown-component">
                            <h1 className="dropdown-heading text-center">
                                {element.headings}
                            </h1>
                            <ul className='p-2'>
                                {
                                    element.content.map(content => (
                                        <Link to={content.contentUrl}>
                                            <li>{content.contentTitle}</li>
                                            <span className="hover-line"></span>
                                        </Link>
                                    ))
                                }
                            </ul>
                            <div className="hover-background"></div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export function Collapse_Dropdown(props) {

    const [showCD, setShowCD] = useState({transition: 'all .6s', height: '0', opacity: '0'});
    const toggleDD = () =>{
        if(showCD.height=='100vh'){setShowCD({transition: 'all .6s', height: '0', opacity: '0'}); return;}
        setShowCD({transition: 'all .6s', height: '100vh', opacity: '1'})
        console.log(showCD);
    }
    return (
        <>
            <div className='w-full bg-red-600 text-white my-5'>
                <div className='flex items-center p-4 justify-between dd-labs cursor-pointer' onClick={toggleDD}>
                    <header className='text-l'>{props.labs.lab_name}</header><svg width="30" height="30" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.5 3.75C18.7916 3.75 15.1665 4.84967 12.0831 6.90994C8.99964 8.97022 6.59641 11.8986 5.17727 15.3247C3.75812 18.7508 3.38681 22.5208 4.11028 26.1579C4.83376 29.7951 6.61952 33.136 9.24175 35.7583C11.864 38.3805 15.2049 40.1663 18.8421 40.8897C22.4792 41.6132 26.2492 41.2419 29.6753 39.8227C33.1014 38.4036 36.0298 36.0004 38.09 32.9169C40.1503 29.8335 41.25 26.2084 41.25 22.5C41.25 20.0377 40.765 17.5995 39.8227 15.3247C38.8805 13.0498 37.4993 10.9828 35.7582 9.24175C34.0171 7.50065 31.9502 6.11953 29.6753 5.17726C27.4005 4.23498 24.9623 3.75 22.5 3.75ZM22.5 37.5C19.5333 37.5 16.6332 36.6203 14.1664 34.972C11.6997 33.3238 9.77713 30.9811 8.64181 28.2403C7.5065 25.4994 7.20945 22.4834 7.78823 19.5736C8.36701 16.6639 9.79562 13.9912 11.8934 11.8934C13.9912 9.79561 16.6639 8.367 19.5736 7.78822C22.4834 7.20944 25.4994 7.50649 28.2402 8.64181C30.9811 9.77712 33.3238 11.6997 34.972 14.1664C36.6203 16.6332 37.5 19.5333 37.5 22.5C37.5 26.4782 35.9196 30.2936 33.1066 33.1066C30.2936 35.9196 26.4782 37.5 22.5 37.5Z" fill="white" />
                        <path d="M28.125 20.625H24.375V16.875C24.375 16.3777 24.1774 15.9008 23.8258 15.5492C23.4742 15.1975 22.9973 15 22.5 15C22.0027 15 21.5258 15.1975 21.1742 15.5492C20.8225 15.9008 20.625 16.3777 20.625 16.875V20.625H16.875C16.3777 20.625 15.9008 20.8225 15.5492 21.1742C15.1975 21.5258 15 22.0027 15 22.5C15 22.9973 15.1975 23.4742 15.5492 23.8258C15.9008 24.1774 16.3777 24.375 16.875 24.375H20.625V28.125C20.625 28.6223 20.8225 29.0992 21.1742 29.4508C21.5258 29.8024 22.0027 30 22.5 30C22.9973 30 23.4742 29.8024 23.8258 29.4508C24.1774 29.0992 24.375 28.6223 24.375 28.125V24.375H28.125C28.6223 24.375 29.0992 24.1774 29.4508 23.8258C29.8024 23.4742 30 22.9973 30 22.5C30 22.0027 29.8024 21.5258 29.4508 21.1742C29.0992 20.8225 28.6223 20.625 28.125 20.625Z" fill="white" />
                    </svg>
                </div>
                <div className="labs-body w-full h-screen" style={showCD}>
                    <iframe src={pdf} frameborder="0" className='w-full h-full'></iframe>
                </div>
            </div>
        </>
    )
}