import React from 'react'
import {connect}from 'react-redux'
import {register} from '../actions/index'


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.register(this.state)
    this.setState({
      username: '',
      password: ''
    })
  }

  render() { 
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">Username</label>
            <input 
              type="text"
              name='username'
              value={this.state.username}
              onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input 
              type="password"
              name='password'
              value={this.state.password}
              onChange={this.handleChange} />
          </div>
          <button type='submit'>register</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  //when securingPass = true --> loading animation
  notes: state.securingPass,
  userInfo: state.userInfo
})

export default connect(mapStateToProps, {register})(Register);