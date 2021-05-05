import React, { Component } from "react";
import "./App.css";
import Content from "../Content";
import Header from "../Header/";
import Menu from "../Menu/";
import Sidebar from "../Sidebar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: "_jig5f12qvx",
          text: placeholder,
        },
      ],
      activeNote: "_jig5f12qvx",
      isMarkdownDisplayed: false,
	  isSidebarActive: true,
      isMenuActive: false,
      settings: {
        theme: "system",
        font: "serif",
      },
    };

    this.createNote = this.createNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.selectNote = this.selectNote.bind(this);

    this.toggleMarkdown = this.toggleMarkdown.bind(this);
	this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.changeFont = this.changeFont.bind(this);

    this.saveNotesToStorage = this.saveNotesToStorage.bind(this);
    this.getStoredNotes = this.getStoredNotes.bind(this);
    this.saveSettingsToStorage = this.saveSettingsToStorage.bind(this);
    this.getStoredSettings = this.getStoredSettings.bind(this);
  }

  // Function to handle creating a new note
  createNote() {
    let notesCopy = this.state.notes;
    let ID =
      "_" +
      Math.random()
        .toString(36)
        .substring(2, 12);

    let newNote = { id: ID, text: "" };
    notesCopy.unshift(newNote);

    this.setState({
      notes: notesCopy,
      activeNote: ID,
      isPreviewDisplayed: false,
    });

    this.saveNotesToStorage();
  }

  // Function to handle editing of the active note
  editNote(e) {
    let notesCopy = this.state.notes;
    let ID = this.state.activeNote;
    let newText = e.target.value;
    let index = notesCopy.findIndex((value, index, array) => {
      return value.id === ID;
    });

    notesCopy.unshift(notesCopy.splice(index, 1)[0]);

    if (notesCopy[0].id === ID) {
      notesCopy[0].text = newText;
    }

    this.setState({
      notes: notesCopy,
    });

    this.saveNotesToStorage();
  }

  // Function to handle deleting the active note
  deleteNote() {
    let notesCopy = this.state.notes;
    let ID = this.state.activeNote;
    let index = notesCopy.findIndex((value, index, array) => {
      return value.id === ID;
    });

    notesCopy.splice(index, 1);
    ID = notesCopy[0].id;

    this.setState({
      notes: notesCopy,
      activeNote: ID,
    });

    this.saveNotesToStorage();

    if (window.innerWidth <= 900) {
      let sidebar = document.querySelector(".layout-sidebar");
      sidebar.dataset.display = "is-active";
    }
  }

  // Function to handle selecting a note
  selectNote(e) {
    if (window.innerWidth <= 900) {
      let sidebar = document.querySelector(".layout-sidebar");
      sidebar.dataset.display = "is-hidden";
    }

    let ID = e.currentTarget.id;

    this.setState({
      activeNote: ID,
      isPreviewDisplayed: false,
    });

    /* setTimeout(() => {
      document.querySelector('textarea').focus();
    }, 300);*/
  }

  // Function to toggle the markdown preview
  toggleMarkdown() {
    this.setState({
      isMarkdownDisplayed: !this.state.isMarkdownDisplayed,
    });
  }

  // Function to toggle the sidebar
  toggleSidebar() {
    this.setState({
      isSidebarActive: !this.state.isSidebarActive
    });
  }

  // Function to toggle the menu
  toggleMenu() {
    this.setState({
      isMenuActive: !this.state.isMenuActive
    });
  }

  // Function to change the current theme
  changeTheme(e) {
    let settingsCopy = this.state.settings;
    settingsCopy.theme = e.target.value;

    const DARK_PREFERENCE = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;
    const THEME_ELEM = document.querySelector("#theme");

    if (settingsCopy.theme === "system") {
      if (window.matchMedia && DARK_PREFERENCE) {
        THEME_ELEM.dataset.theme = "dark";
      } else {
        THEME_ELEM.dataset.theme = "light";
      }
    }

    this.setState({
      settings: settingsCopy,
    });

    this.saveSettingsToStorage();
  }

  // Function to change the current font
  changeFont(e) {
    let settingsCopy = this.state.settings;
    settingsCopy.font = e.target.value;

    this.setState({
      settings: settingsCopy,
    });

    this.saveSettingsToStorage();
  }

  // Save notes to localStorage
  saveNotesToStorage() {
    localStorage.setItem("storedNotes", JSON.stringify(this.state.notes));
  }

  // Retrieve stored notes from localStorage
  getStoredNotes() {
    let storedNotes = JSON.parse(localStorage.storedNotes);
    let ID = storedNotes[0].id;

    this.setState({
      notes: storedNotes,
      activeNote: ID,
    });
  }

  // Save settings to localStorage
  saveSettingsToStorage() {
    localStorage.setItem("storedSettings", JSON.stringify(this.state.settings));
  }

  // Retrieve stored settings from localStorage
  getStoredSettings() {
    let storedSettings = JSON.parse(localStorage.storedSettings);

    this.setState({ settings: storedSettings });
  }

  componentDidMount() {
    if (localStorage.storedNotes) {
      this.getStoredNotes();
    }
    if (localStorage.storedSettings) {
      this.getStoredSettings();
    }

    if (window.innerWidth <= 900) {
      const sidebar = document.querySelector(".layout-sidebar");
      sidebar.dataset.display = "is-active";

      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    /*if (this.state.settings.theme === "system") {
      const DARK_PREFERENCE = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const THEME_ELEM = document.querySelector("#theme");

      if (DARK_PREFERENCE) {
        THEME_ELEM.dataset.theme = "dark";
      } else {
        THEME_ELEM.dataset.theme = "light";
      }
    }*/
  }

  render() {
    const {
      notes,
      activeNote,
	  isSidebarActive,
      isMenuActive,
      isMarkdownDisplayed,
      settings,
    } = this.state;
    const {
      createNote,
      editNote,
      deleteNote,
      selectNote,
	  toggleSidebar,
      toggleMenu,
      toggleMarkdown,
      changeTheme,
      changeFont,
    } = this;

    //let content;
    let index = notes.findIndex((value, index, array) => {
      return value.id === activeNote;
    });

    /*if (isPreviewDisplayed) {
      content = (
        <Preview textContent={notes.length > 0 ? notes[index].text : ""} />
      );
    } else {
      content = (
        <Editor
          textContent={notes.length > 0 ? notes[index].text : ""}
          notes={notes}
          onChange={editNote}
        />
      );
    }*/

    return (
      <div id="theme" data-theme={settings.theme} data-font={settings.font}>
        <Menu
          isActive={isMenuActive}
		  toggleMenu={toggleMenu}
          theme={settings.theme}
          font={settings.font}
          changeTheme={changeTheme}
          changeFont={changeFont}
        />
        <div
          className="layout-overlay"
          //data-display={isMenuDisplayed ? "is-active" : "is-hidden"}
          onClick={toggleMenu}
        ></div>
        <div className="l-container">
          <Sidebar
            notes={notes}
			isActive={isSidebarActive}
            toggleMenu={toggleMenu}
            activeNote={activeNote}
            selectNote={selectNote}
            newNote={createNote}
          />

          <Header
		  	isSidebarActive={isSidebarActive}
		  	toggleSidebar={toggleSidebar}
            toggleMarkdown={toggleMarkdown}
            deleteNote={deleteNote}
            isMarkdownDisplayed={isMarkdownDisplayed}
          />

          <Content
		  	isMarkdownDisplayed={isMarkdownDisplayed}
			textContent={(notes.length > 0) ? notes[index].text : null}
			onChange={editNote}
		  />
        </div>
      </div>
    );
  }
}

const placeholder = `# Welcome to my React Markdown Previewer!
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
