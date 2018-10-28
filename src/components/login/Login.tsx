import React from 'react'

import Modal from '../modal/Modal'
import Splash from '../splash/Splash'
import Toggle from '../animations/Toggle'

import css from './Login.module.css'
import DotsLoading from '../animations/DotsLoading'

const REGISTRATION_URL = 'https://api.zeit.co/now/registration'

interface Props {
  onLoginChange: Function
}

class Login extends React.Component<Props> {
  state = {
    isLoggedIn: false,
    showModal: false,
    error: null,
    verificationPhrase: null,
    submitting: false,
    email: null,
    token: null,
  }

  verifyTimerId: NodeJS.Timeout | null = null
  input: React.RefObject<HTMLInputElement> = React.createRef()

  componentWillUnmount() {
    if (this.verifyTimerId == null) return

    clearTimeout(this.verifyTimerId)
  }

  componentDidMount() {
    const token = localStorage.getItem('now-token')

    if (token) {
      this.setState({ isLoggedIn: true })
    }
  }

  handleLoginClick = () => {
    if (this.state.isLoggedIn) {
      localStorage.removeItem('now-token')
      this.setState({ isLoggedIn: false })
      this.props.onLoginChange()
      return
    }

    this.setState({ showModal: true })
  }

  handleFormSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!this.input || !this.input.current) return

    this.initialLoginRequest(this.input.current.value)
  }

  initialLoginRequest = (email: string) => {
    this.setState({ submitting: true })
    fetch(REGISTRATION_URL, {
      method: 'POST',
      body: JSON.stringify({
        email,
        tokenNake: "karl.run's Live Dashboard",
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.error) {
          this.setState({ error: result.error.message })
          return
        }

        this.setState({
          verificationPhrase: result.securityCode,
          token: result.token,
          email: email,
        })

        this.verifyTimerId = setTimeout(this.verifyVerification, 2500)
      })
  }

  buildVerificationUrl = () => {
    const { email, token } = this.state

    return `${REGISTRATION_URL}/verify?email=${email}&token=${token}`
  }

  verifyVerification = () => {
    fetch(this.buildVerificationUrl(), { method: 'GET' })
      .then(response => response.json())
      .then(result => {
        if (result.error) {
          this.verifyTimerId = setTimeout(this.verifyVerification, 2500)
          return
        }

        localStorage.setItem('now-token', result.token)

        this.setState({ isLoggedIn: true, showModal: false }, () => {
          this.props.onLoginChange()
        })
      })
  }

  renderModal = () => (
    <Modal open={this.state.showModal}>
      <form className={css.loginForm} onSubmit={this.handleFormSubmit}>
        <div>Log in with your email</div>
        <input ref={this.input} type="email" required />
        <button type="submit" disabled={this.state.submitting}>
          Submit
        </button>
      </form>
      {this.state.error && (
        <div className={css.submitError}>{this.state.error}</div>
      )}
      {this.state.submitting &&
        !this.state.verificationPhrase && (
          <div>
            Hang on
            <DotsLoading />
          </div>
        )}
      {this.state.verificationPhrase && (
        <div className={css.verificationPhrase}>
          <div>Click the verification in your email.</div>
          <div>Make sure the phrase is:</div>
          <div>{`"${this.state.verificationPhrase}"`}</div>
        </div>
      )}
    </Modal>
  )

  render() {
    return (
      <div>
        <div className={css.login}>
          <button
            onClick={this.handleLoginClick}
            disabled={this.state.showModal}
          >
            <Toggle show={this.state.isLoggedIn}>
              {show =>
                show
                  ? props => <div style={props}>Log out</div>
                  : props => <div style={props}>Log in</div>
              }
            </Toggle>
          </button>
        </div>
        {!this.state.isLoggedIn && (
          <Splash onLoginClick={this.handleLoginClick} />
        )}
        {this.renderModal()}
      </div>
    )
  }
}

export default Login
