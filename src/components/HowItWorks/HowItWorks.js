import React from 'react';
import Column from './Column';

const HowItWorks = () => {
    return (
        <div id="how-it-works"
            className="bg-secondary d-flex flex-column align-items-center py-8">
            
            <h5 className="text-center">
                Make our network of 50K workers, yours
            </h5>

            <h4 className="text-center font-weight-bold d-block mx-4 mx-md-0">
                Find proven essential workers ready right now
            </h4>

            <div className="container mt-5">
                <div className="row">
                    <Column 
                        Caption="Business post shifts required positions."
                        d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                        fill="#084E8A"
                        d2="M22 22V14C22 12.8954 22.8954 12 24 12C25.1046 12 26 12.8954 26 14V22H34C35.1046 22 36 22.8954 36 24C36 25.1046 35.1046 26 34 26H26V34C26 35.1046 25.1046 36 24 36C22.8954 36 22 35.1046 22 34V26H14C12.8954 26 12 25.1046 12 24C12 22.8954 12.8954 22 14 22H22Z"
                        fill2="#B4E0FA"/>
                    <Column 
                        Caption="Reliable workers take on shifts around their schedules."
                        d="M8 8.00012L23.2628 5.13834C23.75 5.04699 24.25 5.04699 24.7372 5.13834L40 8.00012V26.5661C40 32.4349 36.9767 37.8897 32 41.0001L25.06 45.3376C24.4115 45.743 23.5885 45.743 22.94 45.3376L16 41.0001C11.0233 37.8897 8 32.4349 8 26.5661V8.00012Z"
                        fill="#ADD2EB"
                        d2="M24 22C21.7909 22 20 20.2091 20 18C20 15.7909 21.7909 14 24 14C26.2091 14 28 15.7909 28 18C28 20.2091 26.2091 22 24 22Z"
                        fill2="#147BD1"
                        />
                    <Column 
                        Caption="Seekwork takes care of everything else from documentation to insurance, & payments."
                        d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                        fill="#084E8A"
                        d2="M22 22V14C22 12.8954 22.8954 12 24 12C25.1046 12 26 12.8954 26 14V22H34C35.1046 22 36 22.8954 36 24C36 25.1046 35.1046 26 34 26H26V34C26 35.1046 25.1046 36 24 36C22.8954 36 22 35.1046 22 34V26H14C12.8954 26 12 25.1046 12 24C12 22.8954 12.8954 22 14 22H22Z"
                        fill2="#B4E0FA"/>
                </div>
            </div>  

        </div>
    );
}

export default HowItWorks;