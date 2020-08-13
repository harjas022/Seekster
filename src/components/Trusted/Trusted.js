import React from 'react';

class Trusted extends React.Component {
    render() {
        return (
            <div className="container-fluid text-center d-block py-6"
                id="marketingOne">
                <h3 className="pb-md-2 font-weight-bold">Trusted by over hundreds of businesses</h3>
                <h6 className="pb-md-5">Don't take our word for it</h6>

                <picture style={{zIndex: 1}}>
                    <source 
                        media="(max-width: 575.98px)"
                        data-srcSet="https://s.instawork.com/static/img/home/biz_logos/xs.1dbe57775aea.png, https://s.instawork.com/static/img/home/biz_logos/xs@2x.1fad7599f3d8.png 2x"
                        srcSet="https://s.instawork.com/static/img/home/biz_logos/xs.1dbe57775aea.png, https://s.instawork.com/static/img/home/biz_logos/xs@2x.1fad7599f3d8.png 2x"
                    />
                    <source 
                        media="(min-width: 576px) and (max-width: 767.98px)"
                        data-srcSet="https://s.instawork.com/static/img/home/biz_logos/sm.1dbe57775aea.png, https://s.instawork.com/static/img/home/biz_logos/sm@2x.1fad7599f3d8.png 2x"
                        srcSet="https://s.instawork.com/static/img/home/biz_logos/sm.1dbe57775aea.png, https://s.instawork.com/static/img/home/biz_logos/sm@2x.1fad7599f3d8.png 2x"
                    />
                    <source 
                        media="(min-width: 768px) and (max-width: 991.98px)"
                        data-srcSet="https://s.instawork.com/static/img/home/biz_logos/sm.1dbe57775aea.png, https://s.instawork.com/static/img/home/biz_logos/sm@2x.1fad7599f3d8.png 2x"
                        srcSet="https://s.instawork.com/static/img/home/biz_logos/sm.1dbe57775aea.png, https://s.instawork.com/static/img/home/biz_logos/sm@2x.1fad7599f3d8.png 2x"
                    />
                    <source 
                        media="(min-width: 992px) and (max-width: 1199.98px)"
                        data-srcSet="https://s.instawork.com/static/img/home/biz_logos/lg.17337b33f362.png, https://s.instawork.com/static/img/home/biz_logos/lg@2x.b1596df5cc6b.png 2x"
                        srcSet="https://s.instawork.com/static/img/home/biz_logos/lg.17337b33f362.png, https://s.instawork.com/static/img/home/biz_logos/lg@2x.b1596df5cc6b.png 2x"
                    />
                    <source 
                        media="(min-width: 1200px)"
                        data-srcSet="https://s.instawork.com/static/img/home/biz_logos/xl.17337b33f362.png, https://s.instawork.com/static/img/home/biz_logos/xl@2x.b1596df5cc6b.png 2x"
                        srcSet="https://s.instawork.com/static/img/home/biz_logos/xl.17337b33f362.png, https://s.instawork.com/static/img/home/biz_logos/xl@2x.b1596df5cc6b.png 2x"
                    />
                    <img 
                        className="img-fluid ls-is-cached lazyloaded"
                        data-src="https://s.instawork.com/static/img/home/biz_logos/xs.1dbe57775aea.png"
                        alt="Logos of businesses using Instawork"
                        src="https://s.instawork.com/static/img/home/biz_logos/xs.1dbe57775aea.png"
                    />
                </picture>
            </div>
        );
    }
}

export default Trusted;