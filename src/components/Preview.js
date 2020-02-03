import React from 'react';
import marked, { Renderer } from 'marked';
import hljs from 'highlight.js';

marked.setOptions({
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    langPrefix: 'language-',
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    }
});

let renderer = new Renderer();
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