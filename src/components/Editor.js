import React from 'react';

const Editor = ({ textContent, font, notes, onChange }) => {
    return (
        <div className="layout-content">
            <textarea disabled={(notes.length > 0) ? false : true} className="content" value={textContent} onChange={onChange} type="text" data-font={font} />
        </div>
    )
}

export default Editor;