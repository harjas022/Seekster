import React from 'react';
import GetStartedButton from './../Utils/GetStartedButton';

const Card = (props) => {
    return (
        <div className="rounded-lg p-5 m-3 flex-grow-1 d-flex flex-column align-items-center justify-content-center" 
            style={{backgroundColor: props.Background, color: props.Text}}>
                
            <h5 className="text-center">
                {props.Title}
            </h5>
            <p className="mt-2 mb-4 text-center">
                {props.Caption}
            </p>
            <a href="/" className="btn btn-lg btn-primary px-5">
                {props.ButtonText}
            </a>
        </div>
    );
}

export default Card;