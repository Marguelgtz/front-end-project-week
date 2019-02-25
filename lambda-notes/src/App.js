import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchNotes} from './actions'
import {HashRouter as Router} from 'react-router-dom';

import './App.css';
import NoteList from './components/noteViews/NoteList';
import SideNav from './components/SideNav';
import NewNote from './components/noteViews/NewNote';
import Note from './components/note'
import NoteEdit from './components/noteViews/NoteEdit'
import Register from './auth/Register'
import Login from './auth/Login'

class App extends Component {
  constructor(){
    super();
    this.state = {
      filteredNotes: [],
      searchValue: '',
    }
  }

  componentDidMount = () => {
    this.props.fetchNotes()
  }

  filterHandler = e => {
    let filterNotes = this.props.notes.filter(note => note.title.toLowerCase().includes(e))
    this.setState({
      filteredNotes: filterNotes,
      searchValue: e,
    })
  }

  render() {
    return (
      <div className="app-main-container">
        <Router>

        <div className="App">
        <SideNav className="nav-component" 
          searchValue={this.state.searchValue}
          filter={this.filterHandler}/>
        <Switch>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          
          <Route exact path='/' render={() =>   <NoteList notes=  {this.state.filteredNotes.length > 0 ?  this.state.filteredNotes : this.props.notes} />}/>
          <Route path='/new' component={NewNote}/>
          <Route exact path='/note/:id' component={Note}/>
          <Route exact path='/note/edit/:id'  component={NoteEdit}/>
        </Switch>
        {/* <NewNote/> */}
        </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
})

export default connect(mapStateToProps, {fetchNotes})(App);


