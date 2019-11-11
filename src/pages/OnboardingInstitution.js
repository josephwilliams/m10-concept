import React from 'react';
import OnboardingPage from '../components/OnboardingPage';

const AUTH_FLOW_FORM_CONTENT = {
  title: 'Select your Institution',
  formLabel: 'Select instution',
  buttonTextLeft: 'Next',
};

const OnboardingInstitution = () => (
  <OnboardingPage
    AUTH_FLOW_FORM_CONTENT={AUTH_FLOW_FORM_CONTENT}
  />
);

export default OnboardingInstitution;
