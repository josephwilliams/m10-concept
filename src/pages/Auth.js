import React, { Component } from 'react'

const AUTH_FLOW_FORM_CONTENT_BY_STEP = {
  0: {
    title: 'Select your Institution',
    formLabel: 'Select instution',
  },
  1: {
    title: 'Email',
    subtitle: 'We’re gonna confirm this, so use a real one!',
    formLabel: 'Email',
    buttonText1: 'Next',
  },
  2: {
    title: 'Confirm Code',
    subtitle: 'We sent a top secret code to your email.',
    formLabel: 'Confirmation code',
    buttonText1: 'Resend',
    buttonText2: 'Continue',
  }
}

export default class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authFlowStep: 0,
    }
  }

  updateAuthFlowStep

  render() {
    return (
      <div>
        <h2>Auth</h2>
      </div>
    )
  }
}
