import { Footer } from 'components/Footer';
import { Navbar } from 'components/Navbar';
import Characters from 'containers/Characters';
import CharactersPages from 'containers/CharactersPages';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { RouteConst } from 'consts';

export const Root: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} component={Characters} />
        <Route path={RouteConst.CharactersList} component={CharactersPages} />
        <Redirect to={RouteConst.Root} />
      </Switch>
      <Footer/>
    </>
  );
};

export default Root;
