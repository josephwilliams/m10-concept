import React from 'react'
import OnboardingPage from '../components/OnboardingPage'

const AUTH_FLOW_FORM_CONTENT = {
  title: 'Confirm Code',
  subtitle: 'We sent a top secret code to your email.',
  formLabel: 'Confirmation Code',
  buttonTextLeft: 'Continue',
}

const OnboardingEmail = () => (
  <OnboardingPage
    AUTH_FLOW_FORM_CONTENT={AUTH_FLOW_FORM_CONTENT}
  />
);

export default OnboardingEmail;
