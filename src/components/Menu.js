import React from 'react';

const Menu = ({ isMenuDisplayed }) => {
    return (
        <div className="layout-menu" data-active={isMenuDisplayed ? "is-active" : ""}>
            <h2>This is the menu</h2>
        </div>
    )
}

export default Menu;