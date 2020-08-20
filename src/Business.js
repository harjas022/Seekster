import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';
import SignUpForm from './components/Utils/SignUpForm';

class Business extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Content 
                    Title1="Every business' staffing solution."
                    Caption="Fill staffing gaps in no time with access to our network of hourly workers. Book regular shifts or one-time jobs."
                    BgColor="#1d4f91" 
                    Choice={<SignUpForm 
                                Title="Get started in seconds"
                            />}
                />
                <NavBar />
                
            </div>
        );
    }
}

export default Business;