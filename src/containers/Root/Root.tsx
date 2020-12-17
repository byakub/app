import Characters from "containers/Characters";
import CharactersPages from "containers/CharactersPages";
import React from "react";
import { Redirect, Route, Switch } from "react-router";

import { RouteConst } from "consts";

export const Root: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Characters} />
        <Route path={RouteConst.CharactersList} component={CharactersPages} />
        <Redirect to={RouteConst.Root} />
      </Switch>
    </>
  );
};

export default Root;
