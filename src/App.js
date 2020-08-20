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
import Carousel from './components/Utils/Carousel';
import firstPic from './assets/me.jpg'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Content 
        Title1="Seekwork links the right workers to you,"
        Title2="when & where you need them."
        Caption="Whether businesses seek one-time or recurring workers - Seekwork makes it happen."
        BgColor="#1479ce"
        Choice= {<Carousel 
                  Picture1={firstPic} 
                  Picture2={firstPic} />}
      />
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