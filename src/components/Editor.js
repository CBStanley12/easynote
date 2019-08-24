import React from 'react';

const Editor = ({ markdown, onChange, isPreviewDisplayed }) => {
    return (
        <div className={`editor ${isPreviewDisplayed ? "hide" : ""}`}>
            <textarea className="editor_textarea" value={markdown} onChange={onChange} type="text" rows="30" />
        </div>
    )
}

export default Editor;