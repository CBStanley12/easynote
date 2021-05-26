import './styles.css';
import React from 'react';
import {ReactComponent as SearchIcon} from '../SVG/search.svg';
import Button from '../Button';
import formatNotePreview from '../../hooks/UseFormatNotePreview';

const Sidebar = ({ font, isSidebarActive, notes, activeNote, selectNote, toggleMenu, toggleSidebar, createNote }) => {
	function renderNotePreview(note) {
		let [title, text] = formatNotePreview(note.text);

		const handleClick = (e) => {
			selectNote(e);
			if (window.innerWidth <= 900) toggleSidebar();
		}
		
		return (
			<article
				key={note.id} id={note.id} tabIndex="-1"
				className={`sidebar_notes-preview ${(note.id === activeNote) ? 'active' : ''}`}
				onClick={handleClick} 
			>
				<h3 className="preview_title">{title}</h3>
				<p className="preview_text">{text}</p>
			</article>
		)
	}

	return (
		<aside className={`l-sidebar sidebar ${(isSidebarActive) ? 'active' : 'hidden'}`}>
			<header className="sidebar_header">
				<Button cls="btn--left" click={toggleMenu} label="Settings" tabIndex="1" icon="menu" />
				<label className="sidebar_header-search">
					<input type="search" placeholder="Search Notes" tabIndex="2" disabled></input>
					<SearchIcon />
				</label>
				<Button cls="btn--right" click={createNote} label="New Note" tabIndex="3" icon="create" />
			</header>
			<section className="sidebar_notes" data-font={font}>
				{(notes.length > 0) ? notes.map(note => renderNotePreview(note)) : <h3 className="sidebar_notes--empty">No Notes</h3>}
			</section>
		</aside>
	)
}

export default Sidebar;