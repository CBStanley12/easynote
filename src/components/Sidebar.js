import React from 'react';

const Sidebar = ({ notes, activeNote, selectNote, newNote }) => {
    let notesContent;

    if (notes.length > 0) {
        notesContent = notes.map((note, index) => {
            return <Note key={note.id} id={note.id} title={note.title} preview={note.preview} active={index === activeNote ? true : false} click={selectNote} />
        });
    } else {
        notesContent = <h3 className="notes-empty">No Notes</h3>;
    }

    return (
        <aside className="layout-sidebar sidebar" data-active="is-active">
            <header className="sidebar_header">
                <button className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
                <button className="icon" onClick={newNote}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                </button>
            </header>
            <div className="sidebar_notes">
                {notesContent}
            </div>
        </aside>
    )
}

const Note = ({ id, title, preview, active, click }) => {
    return (
        <div id={id} className="note" data-state={active ? "is-active" : ""} onClick={click}>
            <h3 className="note-title">{title}</h3>
            <p className="note-preview">{preview}</p>
        </div>
    )
}

export default Sidebar;