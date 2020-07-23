import React from 'react';

const Column = (props) => {
    return (
        <div className="col-12 col-md-3">
            <a 
                data-toggle="collapse" href={'#' + props.Key}
                aria-controls="{props.Key}" aria-expanded="false">
                    <h6 className="text-white mb-3 mt-4 mt-md-0">
                        {props.Title}
                    </h6>
            </a>

            <div id={props.Key} className="collapse show">
                <ul id="footerLinks"
                    className="list-unstyled">

                    {props.Content.map((item, index) => {
                        return (
                            <li className="mb-2" key={index}>
                                <a className="text-white" href="/">
                                    {item}
                                </a>
                            </li>
                        );
                    })}

                </ul>
            </div>
        </div>
    );
}

export default Column;