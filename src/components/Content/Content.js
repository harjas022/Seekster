import React from 'react';
// import SignUpButton from '../Utils/SignUpButton';
import Carousel from './../Utils/Carousel';
import firstPic from './../../assets/seekwork1.jpg';
import secondPic from './../../assets/seekwork2.jpg'
import thirdPic from './../../assets/seekwork3.jpg'
import SignUpForm from '../Utils/SignUpForm';


const Content = (props) => {
    return (
        <div 
            id="content"
            className="position-relative d-flex flex-column flex-sm-row align-items-md-center justify-content-between"
            style={{backgroundColor: props.BgColor}}
            >

            <div className="d-flex flex-column justify-content-between mt-8">
                <div className="d-flex flex-column ml-lg-5 justify-content-center align-items-center align-items-sm-start pt-10 py-sm-7 p-5 mt-sm-3 text-center text-sm-left">

                    <h1 className="mt-7 text-white w-100">
                        {props.Title1} <br/> {props.Title2}
                    </h1>

                    <h5 className="font-weight-normal mt-1 w-75 text-white">
                        <small>
                            {props.Caption}
                        </small>
                    </h5>

                    {/* {props.SignUp && 
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start mt-3">
                        
                            <SignUpButton 
                                Background="white"
                                Text="#1d4f91"
                            />
                
                        </div>
                    } */}

                </div>
            </div>

            {props.Carousel ? 
                <div>
                    <Carousel className="align-bottom"
                        Picture1={firstPic}
                        Picture2={secondPic}
                        Picture3={thirdPic}/> 
                </div>
                : 
                <div className="mr-8 mb-10">
                    <SignUpForm 
                        Title={props.FormTitle}
                        FormBusiness={props.FormBusiness}
                    />
                </div>}

        </div>
    );
}

export default Content;