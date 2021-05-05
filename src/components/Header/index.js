import './styles.css';
import React from 'react';
import Button from '../Button';

const Header = ({ isSidebarActive, toggleSidebar, togglePreview, deleteNote, isPreviewDisplayed }) => {
    return (
        <header className="l-header header" data-theme="light">
			<Button
				cls="btn--left" click={toggleSidebar}
				label={(isSidebarActive) ? 'Hide Sidebar' : 'Show Sidebar'}
				tabIndex="4"
				icon={(isSidebarActive) ? 'sidebarHide' : 'sidebarShow'} />
            <div className="header_icons">
				<Button cls="btn--right" click={togglePreview} label="Toggle Preview" tabIndex="5" icon="markdownShow" />
				<Button cls="btn--right" click={deleteNote} label="Delete Note" tabIndex="6" icon="delete" />
            </div>
        </header>
    )
}

export default Header;