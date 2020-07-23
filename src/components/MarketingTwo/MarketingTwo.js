import React from 'react';
import GetStartedButton from './../Utils/GetStartedButton';
// import './_marketingTwo.scss';

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
                    <p className="mt-4 font-weight-bold" style={{color: '#084E8A'}}>
                        FOR WORKERS
                    </p>
                    <h3 className="mt-2">
                        Work where you want, <br /> when you want
                    </h3>
                    <p className="mt-3" style={{color: '#454f5b'}}>
                        Thousands of professionals use Instawork to quickly find flexible work.
                    </p>
                    <ul id="marketingList">
                        <li>Set your own schedule</li>
                        <li>Earn more money on every shift</li>
                        <li>Learn new skills and make new connections</li>
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