import React from 'react';

const Editor = ({ textContent, onChange }) => {
    return (
        <div className="layout-content">
            <textarea className="content" value={textContent} onChange={onChange} type="text" rows="30" />
        </div>
    )
}

export default Editor;