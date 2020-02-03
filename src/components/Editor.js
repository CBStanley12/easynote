import React from 'react';

const Editor = ({ markdown, onChange }) => {
    return (
        <div className="layout-content">
            <textarea className="content" value={markdown} onChange={onChange} type="text" rows="30" />
        </div>
    )
}

export default Editor;