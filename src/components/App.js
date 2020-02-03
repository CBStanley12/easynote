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
          title: "Test Note 1",
          preview: "Test preview one...",
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
    this.handleChange = this.handleChange.bind(this);
    this.displayPreview = this.displayPreview.bind(this);
    this.selectNote = this.selectNote.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }

  displayPreview() {
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
    const { handleChange, displayPreview, selectNote } = this;

    let content;

    if (isPreviewDisplayed) {
      content = <Preview textContent={notes[activeNote].text} />;
    } else {
      content = <Editor textContent={notes[activeNote].text} onChange={handleChange} />;
    }

    return (
      <div className="layout-container">
        <Header click={displayPreview} isPreviewDisplayed={isPreviewDisplayed} />
        <Sidebar notes={notes} activeNote={activeNote} click={selectNote} />
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
