import React from 'react';

const Sidebar = ({ notes, click }) => {
    return (
        <aside className="layout-sidebar sidebar">
            <header class="sidebar_header">
                <button className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
                <button className="icon">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                </button>
            </header>
            <div className="sidebar_notes">
                {
                    notes.map((note) => {
                        return <Note id={note.id} title={note.title} preview={note.preview} active={note.active} click={click} />
                    })
                }
            </div>
        </aside>
    )
}

const Note = ({ id, title, preview, active, click }) => {
    return (
        <div id={id} className="note" data-state={active ? "is-active" : ""} onClick={click}>
            <h3 class="note-title">{title}</h3>
            <p class="note-preview">{preview}</p>
        </div>
    )
}

export default Sidebar;