import React, { Component } from 'react'
import FormCard from '../components/FormCard'

const AUTH_FLOW_FORM_CONTENT = {
  title: 'Email',
  subtitle: 'We’re gonna confirm this, so use a real one!',
  formLabel: 'Email',
  buttonTextLeft: 'Next',
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
        <FormCard
          title={AUTH_FLOW_FORM_CONTENT.title}
          subtitle={AUTH_FLOW_FORM_CONTENT.subtitle}
          formLabel={AUTH_FLOW_FORM_CONTENT.formLabel}
          buttonTextLeft={AUTH_FLOW_FORM_CONTENT.buttonTextLeft}
          buttonTextRight={AUTH_FLOW_FORM_CONTENT.buttonTextRight}
          buttonLinkTo={'/onboarding-confirmation-code'}
        />
      </div>
    )
  }
}
