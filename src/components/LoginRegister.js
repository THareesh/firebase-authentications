import React from 'react'
import fire from '../config/firebase'

class LoginRegister extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      fireErrors: '',
      formTitle: 'login',
      loginBtn: true


    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  login = (e) => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        this.setState({ fireErrors: error.message })
      })
  }
  register = (e) => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        this.setState({ fireErrors: error.message })
      })
  }
  getAction = action => {
    if (action === 'reg') {
      this.setState({ formTitle: 'Register New User', loginBtn: false, fireErrors: '' })
    } else {
      this.setState({ formTitle: 'Login', loginBtn: true, fireErrors: '' })
    }
  }
  render() {
    let errorNotification = this.state.fireErrors ?
      (<div className="Error">{this.state.fireErrors}</div>) : null;

    let submitBtn = this.state.loginBtn ?
      (<input type='submit' className='loginBtn bg-light  float-left' onClick={this.login} value='Enter' />) :
      (<input type='submit' className='loginBtn bg-light float-left' onClick={this.register} value='Register' />)
    let loginRegister = this.state.loginBtn ?
      (<button className="registerBtn float-right bg-info" onClick={() => this.getAction('reg')} >Register</button>) :
      (<button className="registerBtn float-right bg-info" onClick={() => this.getAction('login')} >Login</button>)
    return (
      <div className="container m-auto w-25 ">
        <div className="card" style={{ marginTop: '9rem', borderStyle: 'groove', borderWidth: '7px' }}>
          <div className="card-header text-center bg-info ">
            {this.state.formTitle}
          </div>
          <div className='card-body'>
            {errorNotification}
            <form>
              <input
                type="text"
                name='email'
                className='form-control mt-2 '
                value={this.state.email}
                onChange={this.handleChange}
              />
              <input
                type="password"
                name='password'
                className='form-control mt-2'
                value={this.state.password}
                onChange={this.handleChange}
              />
            </form>
          </div>
          <div className='card-footer'>
            {submitBtn}
            {loginRegister}
          </div>

        </div>


      </div>
    )
  }
}
export default LoginRegister;