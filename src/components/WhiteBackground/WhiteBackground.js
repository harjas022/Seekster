import React from 'react';
import Card from './Card';

const WhiteBackground = () => {
    return (
        <div className="bg-white">
            <div className="container py-8 py-md-10">
                <div className="d-flex flex-column flex-md-row justify-content-md-stretch">
                    <div id="left-column" className="d-flex flex-column justify-content-stretch">
                        
                        <Card 
                            Background="#ebf4fa"
                            Title="Still have questions?"
                            Caption="Check out FAQs in our help center."
                            Text="black"
                            ButtonText="Read more"
                        />

                        <Card 
                            Background="#1d4f91"
                            Title="We're hiring!"
                            Caption="Are you committed to helping local businesses and professionals be successful?"
                            Text="white"
                            ButtonText="View careers"
                        />

                    </div>

                    <div id="right-column" className="d-flex flex-column align-items-stretch justify-content-stretch">
                        <div className="bg-primary rounded-lg p-0 pt-5 pl-5 pr-5 m-3 flex-grow-1 d-flex flex-column align-items-center justify-content-between">
                            <div className="d-flex flex-column align-items-center">
                                <h5 className="text-white">
                                    Looking for work?
                                </h5>
                                <p className="mt-2 mb-3 text-center text-white">
                                    Download the app and create your profile.
                                </p>
                                <div className="d-flex flex-wrap align-items-center justify-content-center">
                                    <a href="/" className="btn btn-lg btn-footer px-4 d-flex align-items-center mt-3 mx-2">
                                        App Store
                                    </a>
                                    <a href="/" className="btn btn-lg btn-footer px-4 d-flex align-items-center mt-3 mx-2">
                                        Google Play
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhiteBackground;