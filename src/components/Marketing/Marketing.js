import React from 'react';
import './../../styles/_marketing.scss';
import GetStartedButton from './../Utils/GetStartedButton';

const Marketing = () => {
    return (
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center px-4 py-8 py-md-10"
            id="marketing">
            <div className="mr-4 flex-shrink-0">
                <picture>
                    <source 
                        media="(max-width: 575.98px)"
                        data-srcSet="https://s.instawork.com/static/img/home/biz/xs.7dc302c1db61.png, https://s.instawork.com/static/img/home/biz/xs@2x.3ba79e170f80.png 2x"
                        srcSet="https://s.instawork.com/static/img/home/biz/xs.7dc302c1db61.png, https://s.instawork.com/static/img/home/biz/xs@2x.3ba79e170f80.png 2x"
                    />
                    <source 
                        media="(min-width: 576px) and (max-width: 767.98px)"
                        data-srcSet="https://s.instawork.com/static/img/home/biz/sm.7dc302c1db61.png, https://s.instawork.com/static/img/home/biz/sm@2x.3ba79e170f80.png 2x"
                        srcSet="https://s.instawork.com/static/img/home/biz/sm.7dc302c1db61.png, https://s.instawork.com/static/img/home/biz/sm@2x.3ba79e170f80.png 2x"
                    />
                    <source 
                        media="(min-width: 768px) and (max-width: 991.98px)"
                        data-srcSet="https://s.instawork.com/static/img/home/biz/lg.f73798061315.png, https://s.instawork.com/static/img/home/biz/lg@2x.30b55b1b13db.png 2x"
                        srcSet="https://s.instawork.com/static/img/home/biz/lg.f73798061315.png, https://s.instawork.com/static/img/home/biz/lg@2x.30b55b1b13db.png 2x"
                    />
                    <source 
                        media="(min-width: 992px) and (max-width: 1199.98px)"
                        data-srcSet="https://s.instawork.com/static/img/home/biz/lg.f73798061315.png, https://s.instawork.com/static/img/home/biz/lg@2x.30b55b1b13db.png 2x"
                        srcSet="https://s.instawork.com/static/img/home/biz/lg.f73798061315.png, https://s.instawork.com/static/img/home/biz/lg@2x.30b55b1b13db.png 2x"
                    />
                    <source 
                        media="(min-width: 1200px)"
                        data-srcSet="https://s.instawork.com/static/img/home/biz/xl.f73798061315.png, https://s.instawork.com/static/img/home/biz/xl@2x.30b55b1b13db.png 2x"
                        srcSet="https://s.instawork.com/static/img/home/biz/xl.f73798061315.png, https://s.instawork.com/static/img/home/biz/xl@2x.30b55b1b13db.png 2x"
                    />
                    <img 
                        className="img-fluid ls-is-cached lazyloaded"
                        data-src="https://s.instawork.com/static/img/home/biz/xs.7dc302c1db61.png"
                        src="https://s.instawork.com/static/img/home/biz/xs.7dc302c1db61.png"
                    />
                </picture>
            </div>
            <div className="d-flex flex-column align-items-start mt-4 mt-md-0 mx-4">
                <p className="mt-4 font-weight-bold" style={{color: '#084E8A'}}>
                    FOR BUSINESSES
                </p>
                <h3 className="mt-2">
                    The essential staffing app <br /> for essential businesses
                </h3>
                <p className="mt-3">
                    We use hi-tech to be more high-touch. That's how we deliver when you need us most.
                </p>
                <ul className="list-unstyled" id="for-business">
                    <li>Professionals are rigorously vetted</li>
                    <li>97% of shifts are filled within 24 hours</li>
                    <li>App and local teams provide real-time support</li>
                </ul>
                <GetStartedButton 
                    ButtonText="Get started"
                />
            </div>
        </div>
    );
}

export default Marketing;