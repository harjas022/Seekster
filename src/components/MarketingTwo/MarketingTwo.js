import React from 'react';
import GetStartedButton from './../Utils/GetStartedButton';
import './../../styles/_marketingTwo.scss';

class MarketingTwo extends React.Component {
    render() {
        return (
            <div 
                id="marketingTwo"
                className="d-flex flex-column flex-md-row align-items-center justify-content-center py-5 pr-4 bg-third">

                <div className="mr-4">
                    <picture>
                        <source 
                            media="(max-width: 575.98px)"
                            data-srcSet="https://s.instawork.com/static/img/home/pro/xs.ff1ca0e1e04e.png, https://s.instawork.com/static/img/home/pro/xs@2x.783e3dc3a6e3.png 2x"
                            srcSet="https://s.instawork.com/static/img/home/pro/xs.ff1ca0e1e04e.png, https://s.instawork.com/static/img/home/pro/xs@2x.783e3dc3a6e3.png 2x"
                        />
                        <source
                            media="(min-width: 576px) and (max-width: 767.98px)"
                            data-srcSet="https://s.instawork.com/static/img/home/pro/sm.ff1ca0e1e04e.png, https://s.instawork.com/static/img/home/pro/sm@2x.783e3dc3a6e3.png 2x"
                            srcSet="https://s.instawork.com/static/img/home/pro/sm.ff1ca0e1e04e.png, https://s.instawork.com/static/img/home/pro/sm@2x.783e3dc3a6e3.png 2x"
                        />
                        <source 
                            media="(min-width: 768px) and (max-width: 991.98px)"
                            data-srcSet="https://s.instawork.com/static/img/home/pro/sm.ff1ca0e1e04e.png, https://s.instawork.com/static/img/home/pro/sm@2x.783e3dc3a6e3.png 2x"
                            srcSet="https://s.instawork.com/static/img/home/pro/sm.ff1ca0e1e04e.png, https://s.instawork.com/static/img/home/pro/sm@2x.783e3dc3a6e3.png 2x"
                        />
                        <source 
                            media="(min-width: 992px) and (max-width: 1199.98px)"
                            data-srcSet="https://s.instawork.com/static/img/home/pro/lg.ad8f43210899.png, https://s.instawork.com/static/img/home/pro/lg@2x.5cb3efe6ccb7.png 2x"
                            srcSet="https://s.instawork.com/static/img/home/pro/lg.ad8f43210899.png, https://s.instawork.com/static/img/home/pro/lg@2x.5cb3efe6ccb7.png 2x"
                        />
                        <source 
                            media="(min-width: 1200px)"
                            data-srcSet="https://s.instawork.com/static/img/home/pro/xl.e92e394912d9.png, https://s.instawork.com/static/img/home/pro/xl@2x.05a54ea45f5b.png 2x"
                            srcSet="https://s.instawork.com/static/img/home/pro/xl.e92e394912d9.png, https://s.instawork.com/static/img/home/pro/xl@2x.05a54ea45f5b.png 2x"
                        />
                        <img 
                            className="img-fluid ls-is-cached lazyloaded"
                            data-src="https://s.instawork.com/static/img/home/pro/xs.ff1ca0e1e04e.png"
                            alt="Worker choosing gigs"
                            src="https://s.instawork.com/static/img/home/pro/xs.ff1ca0e1e04e.png"
                        />
                    </picture>
                </div>

                <div className="d-flex flex-column align-items-start mx-4">
                    <h6 className="mt-4 font-weight-bold" style={{color: '#084E8A'}}>
                        FOR WORKERS
                    </h6>
                    <h3 className="mt-2 font-weight-bold">
                        You have control of when <br /> and where you work.
                    </h3>
                    <p className="mt-0 font-weight-bold" style={{fontSize:'1rem'}}>
                        Join Seekwork & immediately find flexible work.
                    </p>
                    <p className="mt-2" style={{color: '#454f5b', fontSize:'1rem', opacity: '80%'}}>
                        Let Seekwork get you everything you want from your career:
                    </p>
                    <ul id="marketingList" style={{color: '#454f5b', fontSize: '1rem', opacity: '80%'}}>
                        <li>Work around your schedule</li>
                        <li>Earn more with every shift</li>
                        <li>Grow your network and master new skills </li>
                    </ul>
                    <div className="d-flex flex-wrap align-items-center">
                        <GetStartedButton 
                            ButtonText="Get started"
                        />
                    </div>
                
                </div>

            </div>
        );
    }
}

export default MarketingTwo;