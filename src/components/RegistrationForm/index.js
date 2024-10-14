import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    submitStatus: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState({firstName: '', lastName: '', submitStatus: true})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onClickAnotherResponse = () => {
    this.setState({
      submitStatus: false,
    })
  }

  renderRegistrationForm = () => {
    const {firstName, lastName} = this.state
    return (
      <form className="registration-form" onSubmit={this.onSubmitForm}>
        <label htmlFor="firstName" className="labels">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className="input-fields"
          placeholder="First name"
          value={firstName}
          onChange={this.onChangeFirstName}
        />
        <label htmlFor="lastName" className="labels">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className="input-fields"
          placeholder="Last name"
          value={lastName}
          onChange={this.onChangeLastName}
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    )
  }

  renderSubmittedWindow = () => (
    <div className="submitted-window">
      <img
        className="success-mg"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="success-msg">Submitted Successfully</p>
      <button
        type="button"
        className="submit-btn"
        onClick={this.onClickAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {submitStatus} = this.state
    return (
      <div className="registration-bg-container">
        <div className="registration-container">
          <h1 className="main-heading">Registration Form</h1>
          {submitStatus
            ? this.renderSubmittedWindow()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
