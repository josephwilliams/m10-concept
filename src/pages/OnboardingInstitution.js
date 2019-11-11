import React from 'react';
import OnboardingPage from '../components/OnboardingPage';

const FORM_CONTENT = {
  title: 'Select your Institution',
  formLabel: 'Select instution',
  buttonText: 'Next',
  buttonLinkTo: '/onboarding-email',
  setInputGlobalVariableOnButtonClick: 'institution',
};

const OnboardingInstitution = () => (
  <OnboardingPage
    AUTH_FLOW_FORM_CONTENT={FORM_CONTENT}
  />
);

export default OnboardingInstitution;
