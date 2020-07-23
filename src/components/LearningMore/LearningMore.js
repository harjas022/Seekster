import React from 'react'
import SignUpButton from './../Utils/SignUpButton';
// import './_learningMore.scss';

const LearningMore = () => {
    return (
        <div id="learningMore"
            className="d-flex flex-column justify-content-center align-items-center py-8 bg-secondary">
            
            <h3 className="font-weight-medium">
                Interested in learning more?
            </h3>

            <h5 className="text-center mt-2 mb-3 font-weight-normal"> 
                Create a free acount to explore more. 
                <br /> 
                Only pay once the shift is complete.
            </h5>

            <SignUpButton 
                Text="white"
                Background="#1479ce"
            />
            
        </div>
    );
}

export default LearningMore;