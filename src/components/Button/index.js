import './styles.css';
import React, { useState, useEffect } from 'react';
import {ReactComponent as CreateIcon} from '../SVG/create.svg';
import {ReactComponent as SidebarHideIcon} from '../SVG/sidebar-hide.svg';
import {ReactComponent as SidebarShowIcon} from '../SVG/sidebar-show.svg';
import {ReactComponent as MarkdownHideIcon} from '../SVG/markdown-hide.svg';
import {ReactComponent as MarkdownShowIcon} from '../SVG/markdown-show.svg';
import {ReactComponent as DeleteIcon} from '../SVG/delete.svg';

const ICONS = {
	create: <CreateIcon />,
	sidebarHide: <SidebarHideIcon />,
	sidebarShow: <SidebarShowIcon />,
	markdownHide: <MarkdownHideIcon />,
	markdownShow: <MarkdownShowIcon />,
	delete: <DeleteIcon />,
};

const Button = ({ cls, click, label, icon }) => {
	return (
		<button className={`btn btn-icon ${cls}`} onClick={click} aria-label={label}>
			{ ICONS[icon] }
		</button>
	)
}

export default Button;