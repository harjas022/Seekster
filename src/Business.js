import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content'
import SecondaryContent from './components/SecondaryContent/SecondaryContent'
import Footer from './components/Footer/Footer'

class Business extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Content 
                    BgColor='#1d4f91'
                    Title1="Every business' staffing solution."
                    Caption="Fill staffing gaps in no time with access to our network of hourly workers. Book regular shifts or one-time jobs."
                    FormBusiness="True"
                    FormTitle="Sign Up for Free"/>  
            </div>
        );
    }
}

export default Business;