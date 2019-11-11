import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {
  OnboardingInstitution,
  OnboardingEmail,
  OnboardingConfirmationCode,
} from './pages'

export default function BasicExample() {
  return (
    <Router>
      <div className={''}>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
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
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
