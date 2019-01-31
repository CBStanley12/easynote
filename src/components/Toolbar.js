import React from 'react';

const Toolbar = (props) => {
    return (
        <div className="toolbar">
            <i className={props.icon} />
            {props.text}
        </div>
    )
}

export default Toolbar;