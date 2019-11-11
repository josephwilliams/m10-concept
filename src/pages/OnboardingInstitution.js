import React from 'react';
import OnboardingPage from '../components/OnboardingPage';

const FORM_CONTENT = {
  title: 'Select your Institution',
  formLabel: 'Select instution',
  buttonTextLeft: 'Next',
  buttonLinkTo: '/onboarding-email'
};

const OnboardingInstitution = () => (
  <OnboardingPage
    AUTH_FLOW_FORM_CONTENT={FORM_CONTENT}
  />
);

export default OnboardingInstitution;
