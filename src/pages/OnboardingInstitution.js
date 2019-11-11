import React, { Component } from 'react'
import FormCard from '../components/FormCard'

const AUTH_FLOW_FORM_CONTENT = {
  title: 'Select your Institution',
  formLabel: 'Select instution',
  buttonTextLeft: 'Next',
  // 1: {
  //   title: 'Email',
  //   subtitle: 'We’re gonna confirm this, so use a real one!',
  //   formLabel: 'Email',
  //   buttonTextLeft: 'Next',
  // },
  // 2: {
  //   title: 'Confirm Code',
  //   subtitle: 'We sent a top secret code to your email.',
  //   formLabel: 'Confirmation code',
  //   buttonTextLeft: 'Resend',
  //   buttonTextRight: 'Continue',
  // }
}

export default class OnboardingInstitution extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formText: ''
    }
  }

  render() {
    return (
      <div>
        onboarding-institution
        <FormCard
          title={AUTH_FLOW_FORM_CONTENT.title}
          subtitle={AUTH_FLOW_FORM_CONTENT.subtitle}
          formLabel={AUTH_FLOW_FORM_CONTENT.formLabel}
          buttonTextLeft={AUTH_FLOW_FORM_CONTENT.buttonTextLeft}
          buttonTextRight={AUTH_FLOW_FORM_CONTENT.buttonTextRight}
          onClickNext={() => {}}
        />
      </div>
    )
  }
}
