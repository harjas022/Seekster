import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';
import SecondaryContent from './components/SecondaryContent/SecondaryContent';
import Footer from './components/Footer/Footer';

class Workers extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Content 
                    BgColor="#00848e"
                    Title1="Your go-to platform for flexible work"
                    Caption="Earn more with hourly shifts. Take control of when and where you work."
                    FormTitle="Earn more on your own schedule"/>
            </div>
        );
    }
}

export default Workers;