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
          id: 1,
          title: "Welcome to my React Markdown Previewer!",
          preview: "Start typing to preview your markdown text!",
          text: placeholder,
        },
        {
          id: 2,
          title: "Test Note 2",
          preview: "Test preview two...",
          text: "Test preview two text of note",
        },
        {
          id: 3,
          title: "Test Note 3",
          preview: "Test preview three...",
          text: "Test preview three text of note",
        }
      ],
      activeNote: 0,
      isPreviewDisplayed: false
    }
    this.createNewNote = this.createNewNote.bind(this);
    this.handleNoteEdit = this.handleNoteEdit.bind(this);
    this.togglePreview = this.togglePreview.bind(this);
    this.selectNote = this.selectNote.bind(this);
  }

  /*
    TODO: Function to toggle the sidebar
    TODO: Function to delete a note
    TODO: Functions to retrieve/store notes in localStorage
  */


  // Function to create a new note
  createNewNote() {
    let notesCopy = this.state.notes;
    let lastID = notesCopy[notesCopy.length - 1].id;

    let newNote = {
      id: (lastID + 1),
      title: "New Note...",
      preview: "",
      text: ""
    };

    notesCopy.push(newNote);

    this.setState({
      notes: notesCopy,
      activeNote: (notesCopy.length - 1)
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

  render() {
    const { notes, activeNote, isPreviewDisplayed } = this.state;
    const { handleNoteEdit, togglePreview, selectNote, createNewNote } = this;

    let content;

    if (isPreviewDisplayed) {
      content = <Preview textContent={notes[activeNote].text} />;
    } else {
      content = <Editor textContent={notes[activeNote].text} onChange={handleNoteEdit} />;
    }

    return (
      <div className="layout-container">
        <Header click={togglePreview} isPreviewDisplayed={isPreviewDisplayed} />
        <Sidebar notes={notes} activeNote={activeNote} click={selectNote} newNote={createNewNote} />
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
`

export default App;
