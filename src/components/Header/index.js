import './styles.css';
import React from 'react';
import Button from '../Button';

const Header = ({ togglePreview, deleteNote, isPreviewDisplayed }) => {
    return (
        <header className="l-header header" data-theme="light">
			<Button cls="btn--left" click={toggleSidebar} label="Hide Sidebar" tabIndex="4" icon="sidebarHide" />
            <div className="header_icons">
				<Button cls="btn--right" click={togglePreview} label="Toggle Preview" tabIndex="5" icon="markdownShow" />
				<Button cls="btn--right" click={deleteNote} label="Delete Note" tabIndex="6" icon="delete" />
            </div>
        </header>
    )
}

function toggleSidebar() {
    const SIDEBAR = document.querySelector(".layout-sidebar");

    if (SIDEBAR.dataset.display === "is-active") {
        SIDEBAR.dataset.display = "is-hidden";
    } else {
        SIDEBAR.dataset.display = "is-active";
    }
}

export default Header;