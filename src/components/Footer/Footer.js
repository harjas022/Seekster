import React from 'react';
//import './_footer.scss';
import Column from './Column';
import SocialButtons from './SocialButtons';
import Legal from './Legal';


class Footer extends React.Component {
    render() {

        const col_1_title = 'Company';
        const col_1 = ['About', 'Contact Us'];
        const key_1 = "companyLinks";

        const col_2_title = 'Business';
        const col_2 = ['Get Started', 'FAQ'];
        const key_2 = "businessLinks";

        const col_3_title = 'Workers';
        const col_3 =['Get Started', 'FAQ'];
        const key_3 = "workerLinks";

        return (
            <div 
                id="footer"
                className="py-md-4 bg-footer">

                <div className="container py-md-4">
                    <div className="row">
                        <Column  
                            Title={col_1_title}
                            Content={col_1}
                            Key={key_1}
                            />
                        
                        <Column  
                            Title={col_2_title}
                            Content={col_2}
                            Key={key_2}
                            />

                        <Column  
                            Title={col_3_title}
                            Content={col_3}
                            Key={key_3}
                            />
                    </div>
                </div>


                <div id="border">
                        <div className="container d-flex flex-column flex-md-row align-items-center">
                            
                            <SocialButtons />

                            <Legal />

                        </div>
                </div>
            </div>
        );
    }
}

export default Footer;