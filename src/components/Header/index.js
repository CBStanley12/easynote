import './styles.css';
import React from 'react';
import Button from '../Button';

const Header = ({ isSidebarActive, toggleSidebar, toggleMarkdown, deleteNote, isMarkdownDisplayed }) => {
    return (
        <header className="l-header header" data-theme="light">
			<Button
				cls="btn--left" click={toggleSidebar}
				label={(isSidebarActive) ? 'Hide Sidebar' : 'Show Sidebar'}
				tabIndex="4"
				icon={(isSidebarActive) ? 'sidebarHide' : 'sidebarShow'} />
            <div className="header_icons">
				<Button
					cls="btn--right" click={toggleMarkdown}
					label={(isMarkdownDisplayed) ? 'Hide Markdown' : 'Show Markdown'}
					tabIndex="5"
					icon={(isMarkdownDisplayed) ? 'markdownHide' : 'markdownShow'}
				/>
				<Button cls="btn--right" click={deleteNote} label="Delete Note" tabIndex="6" icon="delete" />
            </div>
        </header>
    )
}

export default Header;