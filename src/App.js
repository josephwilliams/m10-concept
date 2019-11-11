import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from 'react-router-dom';
import {
  OnboardingInstitution,
  OnboardingEmail,
  OnboardingConfirmationCode,
  DashboardHome,
  DashboardSettings,
  DashboardLoad,
  DashboardSend,
  DashboardUnload,
} from './pages'
import 'typeface-source-sans-pro'

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={'/'}>
            <OnboardingInstitution />
          </Route>
          <Route exact path={'/onboarding-institution'}>
            <OnboardingInstitution />
          </Route>
          <Route exact path={'/onboarding-email'}>
            <OnboardingEmail />
          </Route>
          <Route exact path={'/onboarding-confirmation-code'}>
            <OnboardingConfirmationCode />
          </Route>
          <Route path={'/dashboard-home'}>
            <DashboardHome />
          </Route>
          <Route path={'/dashboard-settings'}>
            <DashboardSettings />
          </Route>
          <Route path={'/dashboard-load'}>
            <DashboardLoad />
          </Route>
          <Route path={'/dashboard-send'}>
            <DashboardSend />
          </Route>
          <Route path={'/dashboard-unload'}>
            <DashboardUnload />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
