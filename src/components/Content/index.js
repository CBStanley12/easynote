import './styles.css';
import React from 'react';
import useMarkdownPreview from '../../hooks/UseMarkdownPreview';

const Content = ({ isMarkdownDisplayed, textContent, onChange }) => {
	let editor = <textarea disabled={(textContent) ? false : true} className="content_editor" value={textContent} onChange={onChange} type="text" />,
		markdown = useMarkdownPreview(textContent);

    return (
        <main className="content" data-theme="light">
			{(isMarkdownDisplayed) ? markdown : editor}
        </main>
    )
}

export default Content;