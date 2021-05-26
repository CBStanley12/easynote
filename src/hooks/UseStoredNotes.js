import { useState } from 'react';
import useLocalStorage from './UseLocalStorage';

const placeholderNote = `# Welcome to my React Markdown Previewer!
## Start typing to preview your markdown text!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

const defaultNotes = [
	{
		id: '_jig5f12qvx',
		text: placeholderNote,
		status: ''
	}
];

const generateID = () => `_${Math.random().toString(36).substring(2,12)}`;

const useStoredNotes = () => {
	const [notes, setNotes] = useLocalStorage(
		'easynote-notes',
		defaultNotes
	);
	const [activeNote, setActiveNote] = useState(notes[0].id);

	const createNote = () => {
		let ID = generateID();
		setNotes([{id: ID, text: '# ', status: 'active'}, ...notes]);
		setActiveNote(ID);
	};

	const editNote = (e) => {
		let notesCopy = [...notes];
		let index = notesCopy.findIndex(note => note.id === activeNote);
		let note = notesCopy[index];

		notesCopy.splice(index, 1);
		note.text = e.target.value;
		notesCopy.unshift(note);

		setNotes(notesCopy);
	};

	const deleteNote = () => {
		let notesCopy = [...notes];
		let index = notesCopy.findIndex(note => note.id === activeNote);

		notesCopy.splice(index, 1);

		setNotes(notesCopy);
		setActiveNote(notesCopy[0].id);
	};

	const selectNote = (e) => setActiveNote(e.target.id);

	return [notes, createNote, editNote, deleteNote, activeNote, selectNote];
}

export default useStoredNotes;