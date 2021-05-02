import './styles.css';
import React from 'react';
import {ReactComponent as SearchIcon} from '../SVG/search.svg';
import Button from '../Button';
import formatNotePreview from '../../hooks/UseFormatNotePreview';

const Sidebar = ({ notes, activeNote, toggleMenu, selectNote, newNote }) => {
	function renderNotePreview(note) {
		let active = (note.id === activeNote),
			[title, text] = formatNotePreview(note.text);

		return (
			<article id={note.id} className="sidebar_notes-preview" data-state={active ? "is-active" : ""} onClick={selectNote}>
				<span className="preview_border"></span>
				<h3 className="preview_title">{title}</h3>
				<p className="preview_text">{text}</p>
			</article>
		)
	}

	return (
		<aside className="l-sidebar sidebar" data-theme="light">
			<header className="sidebar_header">
				<label className="sidebar_header-search">
					<input type="search" placeholder="Search Notes" tabIndex="1" disabled></input>
					<SearchIcon />
				</label>
				<Button cls="btn--right" click={() => console.log('Create note button clicked!')} label="New Note" tabIndex="2" icon="create" />
			</header>
			<section className="sidebar_notes">
				{(notes.length > 0) ? notes.map(note => renderNotePreview(note)) : <h3 className="sidebar_notes--empty">No Notes</h3>}
			</section>
		</aside>
	)
}

export default Sidebar;