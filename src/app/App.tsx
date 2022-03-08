import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import store from "./store";

import * as ROUTES from "../constants/routes";

import StudentRoute from "../components/Routes/StudentRoutes";

// pages
import Home from "../features/Home/Home";
import Login from "../features/Auth/Login/Login";
import StudentDashboard from "../features/Student/StudentDashboard/StudentDashboard";
import WardenDashboard from "../features/Warden/WardenDashboard/WardenDashboard";

// Components
import Loading from "../components/Loading/Loading";
// import DashboardMenu from "../components/Dashboard/DashboardMenu";
// import PageNotFound from "../components/PageNotFound";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <Loading>
            <Switch>
              {/* Landing Pages */}
              <Route exact path={ROUTES.HOME}>
                <Home />
              </Route>

              {/* Auth Routes */}

              <Route exact path={ROUTES.LOGIN}>
                <Login />
              </Route>

              {/* Student Routes */}
              <StudentRoute exact path={ROUTES.STUDENT_DASHBOARD}>
                <StudentDashboard />
              </StudentRoute>
            </Switch>
          </Loading>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
