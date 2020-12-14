import React from "react";
import { Redirect, Route, Switch } from "react-router";

import { RouteConst } from "../../consts";

const Root: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path={RouteConst.PageOne} render={() => <div>Page1</div>} />
        <Route path={RouteConst.PageTwo} render={() => <div>Page2</div>} />
        <Route path={RouteConst.PageThree} render={() => <div>Page3</div>} />
        <Redirect to={RouteConst.Root} />
      </Switch>
    </>
  );
};

export default Root;
