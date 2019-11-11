import React from 'react'
import OnboardingPage from '../components/OnboardingPage'

const FORM_CONTENT = {
  title: 'Confirm Code',
  subtitle: 'We sent a top secret code to your email.',
  formLabel: 'Confirmation Code',
  buttonTextLeft: 'Continue',
  buttonLinkTo: '/dashboard-home'
}

const OnboardingEmail = () => (
  <OnboardingPage
    AUTH_FLOW_FORM_CONTENT={FORM_CONTENT}
  />
);

export default OnboardingEmail;
