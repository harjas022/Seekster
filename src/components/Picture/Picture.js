import React from 'react';

const Picture = () => {
    return (
        <div className="position-relative">
            <picture style={{zIndex: 1}}>
                <source 
                    media="(max-width: 575.98px)"
                    data-srcSet="https://s.instawork.com/static/img/home/video/xs.6c5519999d85.jpg, https://s.instawork.com/static/img/home/video/xs@2x.b78a9a634719.jpg 2x"
                    srcSet="https://s.instawork.com/static/img/home/video/xs.6c5519999d85.jpg, https://s.instawork.com/static/img/home/video/xs@2x.b78a9a634719.jpg 2x"
                />
                <source 
                    media="(min-width: 576px) and (max-width: 767.98px)"
                    data-srcSet="https://s.instawork.com/static/img/home/video/sm.8058cdc4aa5b.jpg, https://s.instawork.com/static/img/home/video/sm@2x.5fbf83a7c123.jpg 2x"
                    srcSet="https://s.instawork.com/static/img/home/video/sm.8058cdc4aa5b.jpg, https://s.instawork.com/static/img/home/video/sm@2x.5fbf83a7c123.jpg 2x"
                />
                <source 
                    media="(min-width: 768px) and (max-width: 991.98px)"
                    data-srcSet="https://s.instawork.com/static/img/home/video/sm.8058cdc4aa5b.jpg, https://s.instawork.com/static/img/home/video/sm@2x.5fbf83a7c123.jpg 2x"
                    srcSet="https://s.instawork.com/static/img/home/video/sm.8058cdc4aa5b.jpg, https://s.instawork.com/static/img/home/video/sm@2x.5fbf83a7c123.jpg 2x"
                />
                <source 
                    media="(min-width: 992px) and (max-width: 1199.98px)"
                    data-srcSet="https://s.instawork.com/static/img/home/video/lg.97d86943e459.jpg, https://s.instawork.com/static/img/home/video/lg@2x.99adc3f39db5.jpg 2x"
                    srcSet="https://s.instawork.com/static/img/home/video/lg.97d86943e459.jpg, https://s.instawork.com/static/img/home/video/lg@2x.99adc3f39db5.jpg 2x"
                />
                <source 
                    media="(min-width: 1200px)"
                    data-srcSet="https://s.instawork.com/static/img/home/video/xl.6365d5733bb9.jpg, https://s.instawork.com/static/img/home/video/xl@2x.49e71d80a2bc.jpg 2x"
                    srcSet="https://s.instawork.com/static/img/home/video/xl.6365d5733bb9.jpg, https://s.instawork.com/static/img/home/video/xl@2x.49e71d80a2bc.jpg 2x"
                />
                <img 
                    className="img-fluid w-100 lazyloaded"
                    data-src="https://s.instawork.com/static/img/home/video/xs.6c5519999d85.jpg"
                    src="https://s.instawork.com/static/img/home/video/xs.6c5519999d85.jpg"
                />
            </picture>
        </div>
    );
}

export default Picture;