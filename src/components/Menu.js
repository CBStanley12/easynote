import React from 'react';

/*
    TODO: Setting toggle to change theme (system, light, dark)
    TODO: Setting to choose preferred font (serif, sans-serif, monospace)
    TODO: Setting to choose preferred color scheme
*/

const Menu = ({ isMenuDisplayed }) => {
    return (
        <div className="layout-menu menu" data-active={isMenuDisplayed ? "is-active" : ""}>
            <header className="menu_header">
                <h2>Markdown</h2>
                <h2>Previewer</h2>
            </header>
            <div className="menu_settings">
                <h4 className="menu-title">
                    <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    SETTINGS
                </h4>
                <div className="settings">
                    <h5 className="settings_title">THEME</h5>

                    <label className="settings_option" for="theme-system">
                        System
                        <input type="radio" id="theme-system" name="theme" value="system" defaultChecked />
                        <span className="settings-radio"></span>
                    </label>

                    <label className="settings_option" for="theme-light">
                        Light
                        <input type="radio" id="theme-light" name="theme" value="light" />
                        <span className="settings-radio"></span>
                    </label>

                    <label className="settings_option" for="theme-dark">
                        Dark
                        <input type="radio" id="theme-dark" name="theme" value="dark" />
                        <span className="settings-radio"></span>
                    </label>
                </div>
                <div className="settings">
                    <h5 className="settings_title">FONT</h5>

                    <label className="settings_option" for="font-serif">
                        Serif
                        <input type="radio" id="font-serif" name="font" value="serif" defaultChecked />
                        <span className="settings-radio"></span>
                    </label>

                    <label className="settings_option" for="font-sans">
                        Sans-Serif
                        <input type="radio" id="font-sans" name="font" value="sans" />
                        <span className="settings-radio"></span>
                    </label>

                    <label className="settings_option" for="font-mono">
                        Monospace
                        <input type="radio" id="font-mono" name="font" value="mono" />
                        <span className="settings-radio"></span>
                    </label>
                </div>
            </div>
            <div className="menu_contact">
                <h4 className="menu-title">CONTACT</h4>
                <a className="menu-link" aria-label="External Link" href="https://github.com/CBStanley12/markdown-previewer" target="_blank" rel="noopener noreferrer">
                    <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    View Project on GitHub
                </a>
                <a className="menu-link" aria-label="External Link" href="https://github.com/CBStanley12/markdown-previewer/issues/new" target="_blank" rel="noopener noreferrer">
                    <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    Report an Issue
                </a>
            </div>
            <footer className="menu_footer">
                <small className="footer-copy">&copy; Coded by <a className="menu-link" aria-label="External Link" href="https://cbstanley.dev" target="_blank" rel="noopener noreferrer">Christopher Stanley</a></small>
            </footer>
        </div>
    )
}

export default Menu;