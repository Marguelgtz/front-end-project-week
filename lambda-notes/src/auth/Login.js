
import React from 'react'
import {connect}from 'react-redux'
import {login} from '../actions/index'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInputChange = e => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.login(this.state)
    this.setState({
      username: '',
      password: ''
    })
  }

  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="">Username</label>
          <input 
            name='username'
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange}/>
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input 
            name='password'
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}/>
        </div>
        <div>
          <button type='submit'>login</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  //when securingPass = true --> loading animation
  notes: state.securingPass,
  userInfo: state.userInfo
})

export default connect(mapStateToProps, {login})(Login);