import React from 'react';

const Editor = (props) => {
    return (
        <textarea id="editor" value={props.markdown} onChange={props.onChange} type="text" className="w-100" rows="30" />
    )
}

export default Editor;