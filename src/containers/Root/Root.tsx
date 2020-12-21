import { Footer } from 'components/Footer';
import { Navbar } from 'components/Navbar';
import CharacterProfile from 'containers/CharacterProfile';
import Characters from 'containers/Characters';
import Main from 'containers/Main';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { RouteConst } from 'consts';

export const Root: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} component={Main} />
        <Route path={`${RouteConst.Character}/:id`} component={CharacterProfile} />
        <Route path={RouteConst.CharactersList} component={Characters} />
      </Switch>
      <Footer/>
    </>
  );
};

export default Root;
