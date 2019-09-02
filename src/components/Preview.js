import React from 'react';
import marked from 'marked';

marked.setOptions({
    breaks: true,
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
}

const Preview = ({ markdown, isPreviewDisplayed }) => {
    return (
        <div className={`preview ${!isPreviewDisplayed ? "hide" : ""}`}>
            <div className="preview_display" dangerouslySetInnerHTML={{__html: marked(markdown, {renderer: renderer})}} />
        </div>
    )
}

export default Preview;