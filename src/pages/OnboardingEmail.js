import React  from 'react';
import OnboardingPage from '../components/OnboardingPage';

const FORM_CONTENT = {
  title: 'Email',
  subtitle: 'We’re gonna confirm this, so use a real one!',
  formLabel: 'Email',
  buttonTextLeft: 'Next',
  buttonLinkTo: '/onboarding-confirmation-code'
};

const OnboardingEmail = () => (
  <OnboardingPage
    AUTH_FLOW_FORM_CONTENT={FORM_CONTENT}
  />
);

export default OnboardingEmail;
