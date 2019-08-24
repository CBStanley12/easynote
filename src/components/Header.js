import React from 'react';

const Header = ({ click, isPreviewDisplayed }) => {
    return (
        <header className="header">
            <h1 className="header-title">Markdown Previewer</h1>
            <i className={`fa ${isPreviewDisplayed ? "fa-eye-slash" : "fa-eye"}`} onClick={click}></i>
        </header>
    )
}

export default Header;