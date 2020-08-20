import React from 'react';

const SignUpForm = (props) => {
    return (
        <div className="col-12 col-sm-10 col-lg-6 offset-lg-0 col-xl-4 offset-xl-1 d-flex flex-column align-items-center position-relative my-7 my-lg-0">
            <div className="rounded-lg bg-white shadow-lg p-4 w-100">
                <h5 className="h2 text-center mb-3">
                    {props.Title}
                </h5>
                <form id="signUpForm ">
                    <div className="form-row">
                        <div className="col-12 col-sm-6">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" name="given_name" maxLength="254"
                                        className="form-control" placeHolder="First name"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;