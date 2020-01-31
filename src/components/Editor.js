import React from 'react';

const Editor = ({ markdown, isPreviewDisplayed, onChange }) => {
    return (
        <div className="layout-content">
            <textarea className="editor_textarea" placeholder={markdown} onChange={onChange} type="text" rows="30" />
        </div>
    )
}

export default Editor;