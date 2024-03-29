import React, { useEffect } from 'react';
import marked, { Renderer } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs.css';

marked.setOptions({
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    langPrefix: 'language-',
    highlight: (code) => {
        return hljs.highlightAuto(code).value;
    }
});

let renderer = new Renderer();
renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
}

const useMarkdownPreview = (textContent) => {
    useEffect(() => {
        hljs.initHighlightingOnLoad();

        const codeList = document.querySelectorAll('pre code');
        codeList.forEach((code) => {
            return hljs.highlightBlock(code);
        });
    }, []);

    return (
        <article className="content_markdown" dangerouslySetInnerHTML={{ __html: marked(textContent, { renderer: renderer }) }} />
    )
}

export default useMarkdownPreview;