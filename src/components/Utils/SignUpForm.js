import React from 'react';

const SignUpForm = (props) => {
    return (
        <div className="rounded-lg bg-white shadow-lg p-4 mt-10 w-100">
            <h2 className="h5 font-weight-bold text-center mb-3">
                {props.Title}
            </h2>

            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <div className="form-group">
                            <label className="font-weight-bold" style={{'opacity': 0.9}} 
                                    for="id_given_name">
                                First Name
                            </label>
                            <input type="text" maxLength="254" placeHolder="First Name"
                                    id="id_given_name" required/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="form-group">
                            <label className="font-weight-bold" style={{'opacity': 0.9}}
                                    for="id_last_name">
                                Last Name
                            </label>
                            <input type="text" maxLength="254" placeHolder="Last Name" 
                                    id="id_last_name" required/>
                        </div>
                    </div>
                </div>


                {props.FormBusiness && 

                <div className="form-row">
                    <div className="col-12 col-sm-6">

                        <div className="form-group">
                            <label className="font-weight-bold" style={{'opacity':0.8}}
                                    for="id_company">
                                Company
                            </label>
                            <input type="text" maxLength="254" placeHolder="Company" 
                                    id="id_company" required/>
                        </div>

                    </div>

                    <div className="col-12 col-sm-6">
                        <label className="font-weight-bold" style={{'opacity':0.8}}
                                for="id_phone">
                            Phone Number
                        </label>
                        <input type="text" maxLength="254" placeHolder="Phone Number" 
                                id="id_phone" required/>
                    </div>

                </div>}

                
                <div className="form-group">
                    <label className="font-weight-bold" style={{'opacity':0.8}}
                            for="id_email">
                        Work Email
                    </label>
                    <input className="d-block w-100" type="email" name="email" 
                            placeHolder="Email Address" id="id_email" required/>
                </div>
                <div className="form-group">
                    <div>
                        <label className="font-weight-bold" style={{'opacity':0.8}}
                                for="id_password">
                            Password
                        </label>
                        <input className="d-block w-100"
                            type="password" name="passowrd" maxLength="255" minLength="8"
                                placeHolder="Password" id="id_password" required/>

                    </div>
                </div>
                
                    <button className="btn btn-lg btn-primary w-100 mt-2" 
                            style={{'fontSize': 1 + 'rem'}}>
                        Sign up
                        
                </button>
            </form>
        </div>
    );
}

export default SignUpForm;