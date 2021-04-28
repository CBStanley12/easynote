const formatNotePreview = (note) => {
	const REGEX = /#{1,}|\*{1,}/gm;
		
	let filteredNote = note.replace(REGEX, "");

	let title = filteredNote.split('\n', 1)[0];
	let text = filteredNote.substring(title.length + 1);

	return [title, text];
}

export default formatNotePreview;