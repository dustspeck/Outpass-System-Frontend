import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import store from "./store";

import * as ROUTES from "../constants/routes";
// pages
import Login from "../features/Auth/Login/Login";

// Components
import Loading from "../components/Loading/Loading";
// import DashboardMenu from "../components/Dashboard/DashboardMenu";
// import PageNotFound from "../components/PageNotFound";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <Loading>
            <Routes>
              {/* Landing Pages */}
              {/* <Route path={ROUTES.HOME} element={<Home />} /> */}

              {/* Auth Routes */}
              {/* <Route path={ROUTES.REGISTER} element={<Register />} /> */}
              <Route path={ROUTES.LOGIN} element={<Login />} />
            </Routes>
          </Loading>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
