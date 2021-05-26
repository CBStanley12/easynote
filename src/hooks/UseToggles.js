import { useState } from 'react';

export const useToggleSidebar = () => {
	const [sidebarState, setSidebarState] = useState(true);

	function toggleSidebar() { setSidebarState(!sidebarState); }

	return [sidebarState, toggleSidebar];
}

export const useToggleMenu = () => {
	const [menuState, setMenuState] = useState(false);

	function toggleMenu() { setMenuState(!menuState); }

	return [menuState, toggleMenu];
}

export const useToggleMarkdown = () => {
	const [markdownState, setMarkdownState] = useState(false);

	function toggleMarkdown() { setMarkdownState(!markdownState); }

	return [markdownState, toggleMarkdown];
}