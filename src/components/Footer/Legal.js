import React from 'react';

const Legal = () => {
    return (
        <div 
            id="legal"
            className="d-flex flex-row flex-wrap align-items-center mt-4 mt-md-0 text-white"
            style={{opacity: 0.7}}>

            <span  href="/" className="mr-3">
                © 2020 Instawork
            </span>

            <a href="/" className="mr-3 text-white">
                Privacy Policy
            </a>

            <a href="/" className="mr-3 text-white">
                Terms of Use
            </a>

        </div>
    );
}

export default Legal;