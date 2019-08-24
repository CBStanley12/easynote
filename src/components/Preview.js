import React from 'react';
import marked from 'marked';

marked.setOptions({
    breaks: true,
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
}

const Preview = (props) => {
    return (
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(props.markdown, {renderer: renderer})}} />
    )
}

export default Preview;