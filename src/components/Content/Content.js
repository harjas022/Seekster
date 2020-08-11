import React from 'react';
import SignUpButton from '../Utils/SignUpButton';
import Carousel from './../Utils/Carousel';
import firstPic from './../../assets/me.jpg';
import secondPic from './../../assets/Norway.jpg'


const Content = () => {
    return (
        <div 
            id="content"
            className="bg-primary position-relative d-flex flex-column flex-sm-row align-items-md-center justify-content-between">
            
            <div className="d-flex flex-column justify-content-between">
                <div className="d-flex flex-column justify-content-center align-items-center align-items-sm-start pt-10 py-sm-7 p-5 mt-sm-3 text-center text-sm-left">

                    <h1 className="text-white w-100">
                        Seekwork links the right workers to you, 
                        <br /> when & where you need them.
                    </h1>

                    <h5 className="font-weight-normal mt-1 w-75 text-white">
                        <small>
                        Whether businesses seek one-time or recurring workers - Seekwork makes it happen.
                        </small>
                    </h5>

                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start mt-3">
                        
                        <SignUpButton 
                            Background="white"
                            Text="#1d4f91"
                        />

                    </div>

                </div>
            </div>

            <div>
                <Carousel 
                    Picture1={firstPic}
                    Picture2={secondPic}/>
            </div>

        </div>
    );
}

export default Content;