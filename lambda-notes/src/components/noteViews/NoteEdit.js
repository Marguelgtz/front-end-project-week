import React from 'react';
import {connect} from 'react-redux';
import {editNote, getNote} from '../../actions';
import Switch from 'react-switch';
import MarkdownPreview from '../MarkdownPreview';


class Note extends React.Component {
  constructor(){
    super();
    this.state = {
      title: null,
      textBody: null,
      checked: false,
    }
    
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    this.props.getNote(this.props.match.params.id);
    console.log("CDM Invoked")
    setTimeout(() => {
      console.log("ST invoked")
      this.setState({
        title: this.props.note.title,
        textBody: this.props.note.textBody,
      })
    }, 300);
  }
 

  handleChange = checked => {
    this.forceUpdate();
    this.setState({checked})
  }

  editNoteHandler= e => {
    e.preventDefault();
    console.log(this.state);
    this.props.editNote(this.props.match.params.id, this.state);
    this.props.history.push("/");
  }
  

  inputHandler = e => {
    console.log(this.state)
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render(){

    return(
    
      <div className="edit-note-form">
        <div className="edit-note-header">
          <h2>Edit Note</h2>
          <p>Switch to markdown live editor</p>
          <Switch 
            onChange={this.handleChange}
            checked={this.state.checked} />
        </div>
      <div className="edit-form-container">
        <form>
          <div className="edit-title">
            <input 
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.inputHandler}
              />
          </div>
          {/* Normal text editor */}
          <div className="edit-body">
            <input 
              type="text"
              name="textBody"
              value={this.state.textBody}
              onChange={this.inputHandler}
              />
          </div>
          {/* Live Markdown Editor */}
          <div className="markdown-edit-body">
            <div className="edit-window">
            <input 
              type="text"
              name="textBody"
              value={this.state.textBody}
              onChange={this.inputHandler}
              />
            </div>
            <div className="preview-window">
              {/* need preview window to update on state change 
                possible fixes 
                  - renderers-nope
                  - componentWillUpdate
                  - calling render on ReactMarkdown on state change*/}
              
              <MarkdownPreview 
                noteBody={this.state.textBody} />
            </div>
          </div>
          <button onClick={this.editNoteHandler}>Submit</button>
        </form>
      </div>
    </div>
  )
  


  }
}

const mapStateToProps = state => ({
  note: state.note,
})

export default connect(mapStateToProps, {editNote, getNote})(Note);
