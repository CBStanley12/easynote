import React from 'react';

const Toolbar = (props) => {
    return (
        <div className="toolbar container-fluid">
            <div className="row">
                <div id="edit-tool" className="col-sm-12 col-md-5 border">
                    <i className={props.editIcon} />
                    {props.editText}
                </div>
                <div id="prev-tool" className="col-sm-12 col-md-6 ml-auto border">
                    <i className={props.prevIcon} />
                    {props.prevText}
                </div>
            </div>
        </div>
    )
}

export default Toolbar;