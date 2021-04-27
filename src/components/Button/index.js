import './styles.css';
import React, { useState, useEffect } from 'react';
import {ReactComponent as CreateIcon} from '../SVG/create.svg';

const ICONS = {
	create: <CreateIcon />,
};

const Button = ({ cls, click, label, icon }) => {
	return (
		<button className={`btn btn-icon ${cls}`} onClick={click} aria-label={label}>
			{ ICONS[icon] }
		</button>
	)
}

export default Button;