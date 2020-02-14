import React, { Component } from 'react';
import '../styles/app.css';
import Editor from './Editor';
import Header from './Header';
import Menu from './Menu';
import Preview from './Preview';
import Sidebar from './Sidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: "_jig5f12qvx",
          text: placeholder
        }
      ],
      activeNote: "_jig5f12qvx",
      isPreviewDisplayed: false,
      isMenuDisplayed: false,
      settings: {
        theme: "system",
        font: "serif"
      }
    }

    this.createNote = this.createNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.selectNote = this.selectNote.bind(this);

    this.togglePreview = this.togglePreview.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.getStoredNotes = this.getStoredNotes.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.changeFont = this.changeFont.bind(this);
    this.getStoredSettings = this.getStoredSettings.bind(this);
  }

  // Function to handle creating a new note
  createNote() {
    let notesCopy = this.state.notes;
    let ID = "_" + Math.random().toString(36).substring(2, 12);

    let newNote = { id: ID, text: "" };
    notesCopy.unshift(newNote);

    this.setState({
      notes: notesCopy,
      activeNote: ID,
      isPreviewDisplayed: false
    });
  }

  // Function to handle editing of the active note
  editNote(e) {
    let notesCopy = this.state.notes;
    let ID = this.state.activeNote;

    let index = notesCopy.findIndex((value, index, array) => {
      return value.id === ID;
    });

    notesCopy[index].text = e.target.value;

    this.setState({
      notes: notesCopy
    });
  }

  // Function to handle deleting the active note
  deleteNote() {
    let notesCopy = this.state.notes;
    let ID = this.state.activeNote;

    if (notesCopy[0].id === ID) {
      notesCopy.splice(0, 1);
    }

    this.setState({
      notes: notesCopy
    })
  }

  // Function to handle selecting a note
  selectNote(e) {
    /* if (window.innerWidth <= 900) {
      let sidebar = document.querySelector('.layout-sidebar');

      sidebar.dataset.active = "is-hidden";
    } */
    let ID = e.currentTarget.id;

    this.setState({
      activeNote: ID,
      isPreviewDisplayed: false
    })

    /* setTimeout(() => {
      document.querySelector('textarea').focus();
    }, 300);*/
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

  // Function to retrieve stored notes in localStorage
  getStoredNotes() {
    let storedNotes = JSON.parse(localStorage.storedNotes);

    this.setState({
      notes: storedNotes
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
    const { createNote, editNote, deleteNote, selectNote, togglePreview, toggleMenu, changeTheme, changeFont } = this;

    /*// Save notes and settings to localStorage before unloading
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("storedNotes", JSON.stringify(notes));
      localStorage.setItem("storedSettings", JSON.stringify(settings));
    });

    // Unload event for mobile (iOS) browsers
    window.addEventListener("unload", () => {
      localStorage.setItem("storedNotes", JSON.stringify(notes));
      localStorage.setItem("storedSettings", JSON.stringify(settings));
    });*/

    let content;
    let textContent = (notes.length > 0) ? notes[0].text : "";

    if (isPreviewDisplayed) {
      content = <Preview textContent={textContent} />;
    } else {
      content = <Editor textContent={textContent} notes={notes} onChange={editNote} />;
    }

    return (
      <div id="theme" data-theme={settings.theme} data-font={settings.font}>
        <Menu isMenuDisplayed={isMenuDisplayed} theme={settings.theme} font={settings.font} changeTheme={changeTheme} changeFont={changeFont} />
        <div className="layout-overlay" data-display={isMenuDisplayed ? "is-active" : "is-hidden"} onClick={toggleMenu}></div>
        <div className="layout-container">
          <Sidebar notes={notes} toggleMenu={toggleMenu} activeNote={activeNote} selectNote={selectNote} newNote={createNote} />

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
