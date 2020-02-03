import React, { Component } from 'react';
import '../styles/app.css';
import Editor from './Editor';
import Preview from './Preview';
import Header from './Header';
import Sidebar from './Sidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 0,
          title: "Welcome to my React Markdown Previewer!",
          preview: "Start typing to preview your markdown text!",
          text: placeholder,
        }
      ],
      activeNote: 0,
      nextID: 1,
      isPreviewDisplayed: false
    }
    this.createNewNote = this.createNewNote.bind(this);
    this.handleNoteEdit = this.handleNoteEdit.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.togglePreview = this.togglePreview.bind(this);
    this.selectNote = this.selectNote.bind(this);
    this.getStoredNotes = this.getStoredNotes.bind(this);
  }

  // Function to create a new note
  createNewNote() {
    let notesCopy = this.state.notes;
    let newID = this.state.nextID;

    let newNote = {
      id: newID,
      title: "New Note...",
      preview: "",
      text: ""
    };

    notesCopy.unshift(newNote);

    this.setState({
      notes: notesCopy,
      nextID: newID + 1
    });

    document.querySelector('textarea').focus();
  }

  // Function to handle editing of the current note
  handleNoteEdit(e) {
    let notesCopy = this.state.notes;
    let index = this.state.activeNote;
    const regex = /#{1,}|\*{1,}/gm;

    let newText = e.target.value;
    let newTitle = e.target.value.split('\n', 1)[0].replace(regex, '');
    let newPreview = e.target.value.substring((newTitle.length + 1)).replace(regex, '');

    notesCopy[index].text = newText;
    notesCopy[index].title = e.target.value ? newTitle : "New Note...";
    notesCopy[index].preview = newPreview;

    // Move recently edited note to the top
    notesCopy.splice(0, 0, notesCopy.splice(index, 1)[0]);

    this.setState({
      notes: notesCopy,
      activeNote: 0
    });
  }

  // Function to delete a note
  deleteNote() {
    let notesCopy = this.state.notes;
    let index = this.state.activeNote;

    notesCopy.splice(index, 1);

    this.setState({
      notes: notesCopy,
      activeNote: 0
    })
  }

  // Function to toggle the markdown preview
  togglePreview() {
    this.setState({
      isPreviewDisplayed: !this.state.isPreviewDisplayed
    })
  }

  // Function to display the currently selected note
  selectNote(e) {
    for (let i = 0; i < this.state.notes.length; i++) {
      if (this.state.notes[i].id === parseInt(e.currentTarget.id)) {
        this.setState({ activeNote: i })
      }
    }
  }

  // Function to retrieve stored notes in localStorage
  getStoredNotes() {
    let nextID = this.state.nextID;
    let storedNotes = JSON.parse(localStorage.storedNotes);

    storedNotes.forEach(note => {
      if (note.id > nextID) {
        nextID = (note.id + 1);
      }
    })

    this.setState({
      notes: JSON.parse(localStorage.storedNotes),
      nextID: nextID
    })
  }

  componentDidMount() {
    this.getStoredNotes();
  }

  render() {
    const { notes, activeNote, isPreviewDisplayed } = this.state;
    const { togglePreview, createNewNote, handleNoteEdit, deleteNote, selectNote } = this;

    window.addEventListener("beforeunload", () => {
      localStorage.setItem("storedNotes", JSON.stringify(this.state.notes));
    });

    let content;
    let textContent = (notes.length > 0) ? notes[activeNote].text : "";

    if (isPreviewDisplayed) {
      content = <Preview textContent={textContent} />;
    } else {
      content = <Editor textContent={textContent} notes={notes} onChange={handleNoteEdit} />;
    }

    return (
      <div className="layout-container">
        <Sidebar notes={notes} activeNote={activeNote} selectNote={selectNote} newNote={createNewNote} />
        <Header togglePreview={togglePreview} deleteNote={deleteNote} isPreviewDisplayed={isPreviewDisplayed} />
        {content}
      </div>
    );
  }
}

const placeholder =
  `# Welcome to my React Markdown Previewer!
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

export default App;
