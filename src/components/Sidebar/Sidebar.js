import React, { useState, useEffect } from 'react';

const Sidebar = ({ notes, activeNote, toggleMenu, selectNote, newNote }) => {
    let notesContent;

    if (notes.length > 0) {
        notesContent = notes.map(note => {
            return <Note key={note.id} id={note.id} text={note.text} active={note.id === activeNote ? true : false} click={selectNote} />
        });
    } else {
        notesContent = <h3 className="sidebar_notes--empty">No Notes</h3>;
    }

    return (
        <aside className="layout-sidebar sidebar" data-display="is-active">
            <header className="sidebar_header">
                <button className="btn btn-icon btn--left" onClick={toggleMenu} aria-label="Menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
                <button className="btn btn-icon btn--right" onClick={newNote} aria-label="New Note">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                </button>
            </header>
            <div className="sidebar_notes">
                {notesContent}
            </div>
        </aside>
    )
}

const Note = ({ id, text, active, click }) => {
    const REGEX = /#{1,}|\*{1,}/gm;
    let altText = text ? text.replace(REGEX, "") : "";

    const [title, setTitle] = useState("");
    useEffect(() => {
        let newTitle = altText ? altText.split('\n', 1)[0] : "New Note...";

        return setTitle(newTitle);
    });

    const [preview, setPreview] = useState("");
    useEffect(() => {
        let newPreview = altText ? altText.substring((title.length + 1)) : "";

        return setPreview(newPreview);
    });

    return (
        <div id={id} className="note" data-state={active ? "is-active" : ""} onClick={click}>
            <h3 className="note_title">{title}</h3>
            <p className="note_text">{preview}</p>
        </div>
    )
}

export default Sidebar;