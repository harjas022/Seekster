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
                <div className="d-flex flex-column justify-content-center align-items-center align-items-sm-start pt-10 py-sm-7 p-5 pl-xl-7 text-center text-sm-left">

                    <h1 className="text-white w-100">
                        Get the staff you need, <br /> when you need them.
                    </h1>

                    <h5 className="font-weight-normal mt-2 w-75 text-white">
                        We connect businesses with go-to hourly workers for one-time or ongoing shifts. Book one or many workers at a time.
                    </h5>

                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start mt-4">
                        
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