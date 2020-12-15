import Characters from "containers/Characters";
import React from "react";
import { Redirect, Route, Switch } from "react-router";

import { RouteConst } from "consts";
import Components from "components";

export const Root: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Components} />
        <Route path={RouteConst.CharactersList} component={Characters} />
        <Redirect to={RouteConst.Root} />
      </Switch>
    </>
  );
};

export default Root;
