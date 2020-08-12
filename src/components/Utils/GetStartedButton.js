import React from 'react';
import './../../styles/_getStartedButton.scss';

const GetStartedButton = (props) => {
    return (
        <div 
            className="d-flex flex-wrap align-items-center">
            
            <a href="/" className="btn btn-lg btn-primary mt-3 mr-5 px-4" id="get-started-button">
                {props.ButtonText}
            </a>

        </div>
    );
}

export default GetStartedButton;