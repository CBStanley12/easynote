import React, { Component } from 'react';
import '../styles/app.css';
import Editor from './Editor';
import Preview from './Preview';
import Header from './Header';
import Sidebar from './Sidebar';
import Menu from './Menu';

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
      isPreviewDisplayed: false,
      isMenuDisplayed: false,
      settings: {
        theme: "system",
        font: "serif"
      }
    }
    this.createNewNote = this.createNewNote.bind(this);
    this.handleNoteEdit = this.handleNoteEdit.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.togglePreview = this.togglePreview.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.selectNote = this.selectNote.bind(this);
    this.getStoredNotes = this.getStoredNotes.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.changeFont = this.changeFont.bind(this);
    this.getStoredSettings = this.getStoredSettings.bind(this);
  }

  // Function to create a new note
  createNewNote() {
    let notesCopy = this.state.notes;
    let ID = "_" + Math.random().toString(36).substring(2, 12);

    let newNote = {
      id: ID,
      title: "New Note...",
      preview: "",
      text: ""
    };

    notesCopy.unshift(newNote);

    this.setState({
      isPreviewDisplayed: false,
      notes: notesCopy,
      activeNote: 0
    });

    if (window.innerWidth <= 900) {
      let sidebar = document.querySelector('.layout-sidebar');

      sidebar.dataset.active = "is-hidden";
    }

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

    if (window.innerWidth <= 900) {
      let sidebar = document.querySelector('.layout-sidebar');

      sidebar.dataset.active = "is-active";
    }
  }

  // Function to toggle the markdown preview
  togglePreview() {
    this.setState({
      isPreviewDisplayed: !this.state.isPreviewDisplayed
    })
  }

  // Function to toggle the menu
  toggleMenu() {
    this.setState({
      isMenuDisplayed: !this.state.isMenuDisplayed
    })
  }

  // Function to display the currently selected note
  selectNote(e) {
    if (window.innerWidth <= 900) {
      let sidebar = document.querySelector('.layout-sidebar');

      sidebar.dataset.active = "is-hidden";
    }

    for (let i = 0; i < this.state.notes.length; i++) {
      if (this.state.notes[i].id === parseInt(e.currentTarget.id)) {
        this.setState({ activeNote: i })
      }
    }

    this.setState({
      isPreviewDisplayed: false
    })

    setTimeout(() => {
      document.querySelector('textarea').focus();
    }, 300);
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
    if (localStorage.storedNotes) { this.getStoredNotes(); }
    if (localStorage.storedSettings) { this.getStoredSettings(); }

    if (window.innerWidth <= 900) {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    if (this.state.settings.theme === "system") {
      const DARK_PREFERENCE = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const THEME_ELEM = document.querySelector("#theme");

      if (DARK_PREFERENCE) {
        THEME_ELEM.dataset.theme = "dark";
      } else {
        THEME_ELEM.dataset.theme = "light";
      }
    }
  }

  // Function to change the current theme
  changeTheme(e) {
    let settingsCopy = this.state.settings;
    settingsCopy.theme = e.target.value;

    const DARK_PREFERENCE = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const THEME_ELEM = document.querySelector("#theme");

    if (settingsCopy.theme === "system") {
      if (window.matchMedia && DARK_PREFERENCE) {
        THEME_ELEM.dataset.theme = "dark";
      } else {
        THEME_ELEM.dataset.theme = "light";
      }
    }

    this.setState({
      settings: settingsCopy
    })
  }

  // Function to change the current font
  changeFont(e) {
    let settingsCopy = this.state.settings;
    settingsCopy.font = e.target.value;

    this.setState({
      settings: settingsCopy
    })
  }

  // Function to retrieve stored settings from localStorage
  getStoredSettings() {
    let storedSettings = JSON.parse(localStorage.storedSettings);
    this.setState({ settings: storedSettings })
  }

  // Function to save notes and settings to localStorage

  render() {
    const { notes, activeNote, isMenuDisplayed, isPreviewDisplayed, settings } = this.state;
    const { togglePreview, toggleMenu, createNewNote, handleNoteEdit, deleteNote, selectNote, changeTheme, changeFont } = this;

    // Save notes and settings to localStorage before unloading
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("storedNotes", JSON.stringify(notes));
      localStorage.setItem("storedSettings", JSON.stringify(settings));
    });

    // Unload event for mobile (iOS) browsers
    window.addEventListener("unload", () => {
      localStorage.setItem("storedNotes", JSON.stringify(notes));
      localStorage.setItem("storedSettings", JSON.stringify(settings));
    });

    let content;
    let textContent = (notes.length > 0) ? notes[activeNote].text : "";

    if (isPreviewDisplayed) {
      content = <Preview textContent={textContent} font={settings.font} />;
    } else {
      content = <Editor textContent={textContent} font={settings.font} notes={notes} onChange={handleNoteEdit} />;
    }

    return (
      <div id="theme" data-theme={settings.theme}>
        <Menu isMenuDisplayed={isMenuDisplayed} theme={settings.theme} font={settings.font} changeTheme={changeTheme} changeFont={changeFont} />
        <div className="layout-overlay" data-display={isMenuDisplayed ? "is-active" : "is-hidden"} onClick={toggleMenu}></div>
        <div className="layout-container">
          <Sidebar notes={notes} font={settings.font} toggleMenu={toggleMenu} activeNote={activeNote} selectNote={selectNote} newNote={createNewNote} />
          <Header togglePreview={togglePreview} deleteNote={deleteNote} isPreviewDisplayed={isPreviewDisplayed} />
          {content}
        </div>
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
