import React from 'react';
import marked from 'marked';

marked.setOptions({
    breaks: true,
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
}

const Preview = ({ textContent, font }) => {
    return (
        <div className="layout-content content" data-font={font}>
            <div dangerouslySetInnerHTML={{ __html: marked(textContent, { renderer: renderer }) }} />
        </div>
    )
}

export default Preview;