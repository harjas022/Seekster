import React from 'react';
import './../../styles/_navbar.scss';
import logo from './../../assets/logo.png';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md py-sm-1 py-lg-0 pl-5 bg-transparent position-absolute w-100"
            style={{zIndex: 2}}>

            <a className="navbar-brand mr-0 d-flex align-items-center" href="/">
                <img 
                src={logo}
                alt="Seekwork logo"
                />
            </a>
            <button class="navbar-toggler p-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                        <circle cx="24" cy="23" r="19" stroke="white" strokeWidth="2"></circle>
                        <rect x="14" y="16" width="20" height="2" rx="1" fill="white"></rect>
                        <rect x="14" y="22" width="20" height="2" rx="1" fill="white"></rect>
                        <rect x="14" y="28" width="20" height="2" rx="1" fill="white"></rect>
                    </g>
                    <defs>
                        <filter id="filter0_d" x="0" y="0" width="48" height="48"  filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                <feOffset dy="1"></feOffset>
                                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.760784 0 0 0 0 0.792157 0 0 0 0 0.839216 0 0 0 0.25 0"></feColorMatrix>
                                <feBlend mode="normal" in2="BackgroundImageFix"  result="effect1_dropShadow"></feBlend>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                        </filter>
                    </defs>
                </svg>
            </button>
            <div className="d-none d-md-flex">
                <ul id="navbar-list"
                    className="navbar-nav font-weight-medium ml-5">
                    <li className="nav-item ml-0 mr-5">
                        <a className="nav-link text-white" href="/businesses">For Businesses</a>
                    </li>
                    <li className="nav-item ml-0 mr-5">
                        <a className="nav-link text-white" href="/workers">For Workers</a>
                    </li>
                </ul>
            </div>

</nav>
    );
}

export default NavBar;


// py-lg-5 py-xl-7 pl-5