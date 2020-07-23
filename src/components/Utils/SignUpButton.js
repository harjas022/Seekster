import React from 'react';
import './../../styles/_SignUp.scss';

const SignUpButton = (props) => {

    const buttonStyle = {
        color: props.Text, 
        backgroundColor: props.Background
    }

    return (
        <div className="dropdown">
            <button
                id="sign-up-button" 
                className="btn btn-lg font-weight-normal mx-2 ml-sm-0 px-5"
                style={buttonStyle}>

                Sign up

            </button>
        </div>
    );
}

export default SignUpButton;