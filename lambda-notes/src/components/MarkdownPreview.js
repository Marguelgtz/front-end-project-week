import React from 'react';
import ReactMarkdown from 'react-markdown';

class MarkdownPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      body: '',
    }
  }
  


  render() { 
    console.log(this.props.noteBody)
    return (
      <div className="edit-markdown-preview">
        {}
        <ReactMarkdown 
          source={this.props.noteBody} />
      </div>
    );
  }
}

export default MarkdownPreview;