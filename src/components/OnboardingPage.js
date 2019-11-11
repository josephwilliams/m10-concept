import React from 'react'
import FormCard from '../components/FormCard';
import TokenLogo from '../assets/token-logo.png';
import OnboardingIcon from '../assets/onboarding-icon.png';
import './OnboardingPage.css';

const OnboardingPage = ({
  AUTH_FLOW_FORM_CONTENT,
}) => (
  <div className={'onboardingPageWrapper'}>
    <div className={'onboardingCardColumn'}>
      <div className={'onboardingPageLogo'}>
         <img
          src={TokenLogo}
          alt={'Token'}
          style={{ width: 150 }}
         />
      </div>
      <FormCard
        title={AUTH_FLOW_FORM_CONTENT.title}
        subtitle={AUTH_FLOW_FORM_CONTENT.subtitle}
        formLabel={AUTH_FLOW_FORM_CONTENT.formLabel}
        buttonTextLeft={AUTH_FLOW_FORM_CONTENT.buttonTextLeft}
        buttonTextRight={AUTH_FLOW_FORM_CONTENT.buttonTextRight}
        buttonLinkTo={AUTH_FLOW_FORM_CONTENT.buttonLinkTo}
      />
    </div>
    <div className={'onboardingPageTitleColumn'}>
      <div className={'onboardingPageIconImageWrapper'}>
        <img
         src={OnboardingIcon}
         alt={'Token'}
         style={{ width: 60 }}
        />
      </div>
      <div className={'onboardingPageTitle'}>
        {'For logging in, and sending money!'}
      </div>
      <div className={'onboardingPageSubtitle'}>
        {'Here’s the thing, we trust you, but banks need a little proof before they let just anyone start moving money around. So here we are.'}
      </div>
    </div>
  </div>
)

export default OnboardingPage;
