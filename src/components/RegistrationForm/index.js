import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameBlurStatus: false,
    lastNameBlurStatus: false,
    submitStatus: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    const newFirstName = firstName === ''
    const newLastName = lastName === ''
    if (newFirstName || newLastName) {
      this.setState({
        firstNameBlurStatus: newFirstName,
        lastNameBlurStatus: newLastName,
      })
    } else {
      this.setState({firstName: '', lastName: '', submitStatus: true})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = event => {
    this.setState({firstNameBlurStatus: event.target.value === ''})
  }

  onBlurLastName = event => {
    this.setState({lastNameBlurStatus: event.target.value === ''})
  }

  onClickAnotherResponse = () => {
    this.setState({
      submitStatus: false,
    })
  }

  renderRegistrationForm = () => {
    const {
      firstName,
      lastName,
      firstNameBlurStatus,
      lastNameBlurStatus,
    } = this.state
    const firstNameInputClass = `input-fields ${
      firstNameBlurStatus ? 'with-blur' : 'without-blur'
    }`
    const lastNameInputClass = `input-fields ${
      lastNameBlurStatus ? 'with-blur' : 'without-blur'
    }`

    return (
      <form className="registration-form" onSubmit={this.onSubmitForm}>
        <label htmlFor="firstName" className="labels">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={firstNameInputClass}
          placeholder="First name"
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {firstNameBlurStatus && <p className="required">Required</p>}
        <label htmlFor="lastName" className="labels">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className={lastNameInputClass}
          placeholder="Last name"
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        {lastNameBlurStatus && <p className="required">Required</p>}
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
          <h1 className="main-heading">Registration</h1>
          {submitStatus
            ? this.renderSubmittedWindow()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
