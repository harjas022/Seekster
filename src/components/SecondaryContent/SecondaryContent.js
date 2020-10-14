import React from 'react'
import SignUpForm from './../Utils/SignUpForm';

const SecondaryContent = (props) => {
    return (
        <div className={(props.ID == "Business") ? "bg-business" : "bg-workers"}>

            <div className="container-fluid px-5 px-xl-7 pb-0 pb-md-10 pt-10">
                
                <div className="row">

                    <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-center-lg-start text-center text-sm-left">
                        
                        <h1 className="text-white text-left text-lg-left">
                            {props.Header}
                        </h1>

                        <h5 className="font-weight-normal text-left text-sm-center text-lg-left mt-2"
                            style={{color: "#EBF4FA"}}>
                            <small>
                                {props.Caption}
                            </small>
                        </h5>
                    </div>
                
                    <SignUpForm />

                </div>

            </div>

        </div>
    );
}

export default SecondaryContent;