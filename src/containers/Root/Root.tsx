import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { RouteConst } from 'consts';

import { Footer, Navbar } from 'components';
import CharacterProfile from 'containers/CharacterProfile';
import Characters from 'containers/Characters';
import HomePage from 'containers/HomePage';

export const Root: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route 
          path="/" 
          exact={true} 
          component={HomePage} 
        />
        <Route 
          path={`${RouteConst.Character}/:id`}
          component={CharacterProfile} 
        />
        <Route 
          path={RouteConst.CharactersList} 
          component={Characters} 
        />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
};

export default Root;
