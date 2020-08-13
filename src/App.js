import React from 'react';
import './styles/main.scss';
import Content from './components/Content/Content';
import NavBar from './components/NavBar/NavBar';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Marketing from './components/Marketing/Marketing';
import Picture from './components/Picture/Picture';
import Trusted from './components/Trusted/Trusted';
import MarketingTwo from './components/MarketingTwo/MarketingTwo';
import WhiteBackground from './components/WhiteBackground/WhiteBackground';
import LearningMore from './components/LearningMore/LearningMore';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Content />
      <HowItWorks />
      <Marketing />
      <Picture />
      <Trusted />
      <MarketingTwo />
      <WhiteBackground />
      <LearningMore />
      <Footer />
    </div>
  );
}

export default App;