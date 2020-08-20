import React from 'react';
import Content from './components/Content/Content';
import NavBar from './components/NavBar/NavBar';

class Workers extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Content 
                    BgColor="#00848e"
                />
            </div>
        );
    }
}

export default Workers;