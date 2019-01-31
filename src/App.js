import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div id="app" class="row">
          <Editor />
          <Preview />
        </div>
      </div>
    );
  }
}

class Editor extends Component {
  render() {
    return (
      <div className="col-sm-12 col-6">
        <textarea id="editor" />
      </div>
    );
  }
}

class Preview extends Component {
  render() {
    return (
      <div className="col-sm-12 col-6">
        
      </div>
    );
  }
}

export default App;
