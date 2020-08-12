import React from 'react';
import './../../styles/_marketing.scss';
import GetStartedButton from './../Utils/GetStartedButton';

const Marketing = () => {
    return (
        <div className="bg-third d-flex flex-column flex-sm-row align-items-center justify-content-center px-4 py-8 py-md-10"
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
                <h6 className="mt-4 font-weight-bold" style={{color: '#084E8A'}}>
                    FOR BUSINESSES
                </h6>
                <h3 className="mt-2 font-weight-bold">
                    Every business' staffing solution
                </h3>
                <p className="mt-2" style={{color: '#454f5b', fontSize:'1rem', opacity: '80%'}}>
                    We're able to meet your needs, through our ever growing network & cutting edge technology.
                </p>
                <ul id="for-business" style={{color: '#454f5b', fontSize: '1rem', opacity: '80%'}}>
                    <li>Within 24 hours, 97% of shifts are taken up</li>
                    <li>Guaranteed professionals</li>
                    <li>Get real-time support</li>
                </ul>
                <GetStartedButton 
                    ButtonText="Get started"
                />
            </div>
        </div>
    );
}

export default Marketing;