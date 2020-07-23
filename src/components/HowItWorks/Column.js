import React from 'react';

const Column = (props) => {
    return (
        <div className="col-12 col-md-4 d-flex flex-column align-items-center text-center">

            <svg height="48" width="48" viewBox="0 0 48 48" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                    <path
                        d={props.d}
                        fill={props.fill}>
                    </path>
                    <path
                        d={props.d2}
                        fill={props.fill2}>
                    </path>
            </svg>

            <h5 className="font-weight-normal mt-3">
                {props.Caption}
            </h5>

        </div>
    );
}

export default Column;