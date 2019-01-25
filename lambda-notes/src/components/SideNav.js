import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 

class SideNav extends Component {

  inputChangeHandler = e => {
    this.props.filter(e.target.value)
  }

  searchChangeHandler = e => {
    this.props.filter(e.target.value);
  }

  render() { 
    return (
      <div className="nav-main-container">
        <div className="nav-header-container">
          <h2>NOTES APP</h2>
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="buttons-search-container">
          <Link to="/">
            <div className="nav-button">View Notes</div>
          </Link>
          <Link to="/new">
            <div className="nav-button">New Note +</div>
          </Link>
        <div className="search-container">
          <input 
            type="text"
            placeholder="Search"
            className="search-imput"
            value={this.props.searchValue}
            onChange={this.searchChangeHandler} />
        </div>
        </div>
      </div>
    );
  }
}

export default SideNav;