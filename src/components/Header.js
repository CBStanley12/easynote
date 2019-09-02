import React from 'react';

const Header = ({ click, isPreviewDisplayed }) => {
    return (
        <header className="header">
            <h1 className="header-title">Markdown Previewer</h1>
            <i className={`header-icon fa ${isPreviewDisplayed ? "fa-eye" : "fa-eye-slash"}`} onClick={click}></i>
        </header>
    )
}

export default Header;