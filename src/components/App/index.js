import React from "react";
import "./styles.css";
import Content from "../Content";
import Header from "../Header/";
import Menu from "../Menu/";
import Sidebar from "../Sidebar";
import useStoredNotes from '../../hooks/UseStoredNotes';
import useStoredSettings from '../../hooks/UseStoredSettings';
import { useToggleSidebar, useToggleMenu, useToggleMarkdown } from '../../hooks/UseToggles';

const App = () => {
	const [notes, createNote, editNote, deleteNote, activeNote, selectNote] = useStoredNotes();
	const [theme, changeTheme, font, changeFont] = useStoredSettings();
	let activeNoteIndex = notes.findIndex(note => note.id === activeNote);

	const [isSidebarActive, toggleSidebar] = useToggleSidebar(),
		[isMenuActive, toggleMenu] = useToggleMenu(),
		[isMarkdownActive, toggleMarkdown] = useToggleMarkdown();


	return (
		<div className="l-container" data-theme={theme}>
			<Sidebar
				font={font}
				isSidebarActive={isSidebarActive}
				notes={notes}
				activeNote={activeNote}
				selectNote={selectNote}
				toggleMenu={toggleMenu}
				toggleSidebar={toggleSidebar}
				createNote={createNote}
			/>

			<Header
				isSidebarActive={isSidebarActive}
				toggleSidebar={toggleSidebar}
				isMarkdownActive={isMarkdownActive}
				toggleMarkdown={toggleMarkdown}
				deleteNote={deleteNote}
			/>

			<Content
				font={font}
				isMarkdownActive={isMarkdownActive}
				textContent={notes[activeNoteIndex].text}
				onChange={editNote}
			/>

			<Menu
				isMenuActive={isMenuActive}
				toggleMenu={toggleMenu}
				theme={theme}
				changeTheme={changeTheme}
				font={font}
				changeFont={changeFont}
			/>
		</div>
	)
}

export default App;