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
      markdown: placeholder,
      isPreviewDisplayed: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.displayPreview = this.displayPreview.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }

  displayPreview() {
    if (!this.state.isPreviewDisplayed) {
      this.setState({
        isPreviewDisplayed: true
      });
    } else {
      this.setState({
        isPreviewDisplayed: false
      });
    }
  }

  render() {
    const { markdown, isPreviewDisplayed } = this.state;
    const { handleChange, displayPreview } = this;

    return (
      <div className="layout-container">
        <Header click={displayPreview} isPreviewDisplayed={isPreviewDisplayed} />
        <Sidebar />
        <Editor markdown={markdown} onChange={handleChange} isPreviewDisplayed={isPreviewDisplayed} />
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
