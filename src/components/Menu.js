import React from 'react';

const Menu = ({ isMenuDisplayed, theme, font, changeTheme, changeFont }) => {
    return (
        <div className="layout-menu menu" data-active={isMenuDisplayed ? "is-active" : ""}>
            <div className="menu_settings">
                <h4 className="menu-title">
                    <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    SETTINGS
                </h4>
                <form className="settings" onChange={changeTheme}>
                    <h5 className="settings_title">THEME</h5>

                    <label className="settings_option" htmlFor="theme-system">
                        System
                        <input type="radio" id="theme-system" name="theme" value="system"
                            checked={theme === "system" ? true : false}
                            readOnly
                        />
                        <span className="settings-radio"></span>
                    </label>

                    <label className="settings_option" htmlFor="theme-light">
                        Light
                        <input type="radio" id="theme-light" name="theme" value="light"
                            checked={theme === "light" ? true : false}
                            readOnly
                        />
                        <span className="settings-radio"></span>
                    </label>

                    <label className="settings_option" htmlFor="theme-dark">
                        Dark
                        <input type="radio" id="theme-dark" name="theme" value="dark"
                            checked={theme === "dark" ? true : false}
                            readOnly
                        />
                        <span className="settings-radio"></span>
                    </label>
                </form>
                <div className="settings" onChange={changeFont}>
                    <h5 className="settings_title">FONT</h5>

                    <label className="settings_option" htmlFor="font-serif">
                        Serif
                        <input type="radio" id="font-serif" name="font" value="serif"
                            checked={font === "serif" ? true : false}
                            readOnly
                        />
                        <span className="settings-radio"></span>
                    </label>

                    <label className="settings_option" htmlFor="font-sans">
                        Sans-Serif
                        <input type="radio" id="font-sans" name="font" value="sans"
                            checked={font === "sans" ? true : false}
                            readOnly
                        />
                        <span className="settings-radio"></span>
                    </label>

                    <label className="settings_option" htmlFor="font-mono">
                        Monospace
                        <input type="radio" id="font-mono" name="font" value="mono"
                            checked={font === "mono" ? true : false}
                            readOnly
                        />
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