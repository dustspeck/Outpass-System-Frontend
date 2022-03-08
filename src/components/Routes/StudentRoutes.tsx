import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { RootState } from "../../app/rootReduces";

import { LOGIN } from "../../constants/routes";
import { USER_ROLE } from "../../constants/userRoles";

interface IProgramManagerRouteProps extends RouteProps {}

const ProgramManagerRoute: React.FC<IProgramManagerRouteProps> = ({
  children,
  ...rest
}) => {
  const { isAuthenticated } = useSelector((state: RootState) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      // role: state.auth.user?.account_type,
    };
  }, shallowEqual);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (isAuthenticated) {
          return children;
        }
        return (
          <Redirect
            to={{
              pathname: LOGIN,
              state: {
                from: location,
              },
            }}
          />
        );
      }}
    />
  );
};

export default ProgramManagerRoute;
