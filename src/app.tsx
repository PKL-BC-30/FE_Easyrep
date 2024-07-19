import { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import GridPage from "./pages/gridpage";
import LandingPage from "./pages/landingpage";
import RequireAdmin from "./pages/middleware";
import UserManagement from "./pages/gridmanagement"
import TentangPage from "./pages/tentang"

const App: Component = () => {
  return (
    <Routes>
      <Route path="/landingpage" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={RegisterPage} />
      <Route path="/tentang" component={TentangPage} />
      <Route
        path="/useradmin"
        component={() => (
          <RequireAdmin>
            <GridPage />
          </RequireAdmin>
        )}
      />
      <Route
        path="/usermanagement"
        component={() => (
          <RequireAdmin>
            <UserManagement />
          </RequireAdmin>
        )}
      />
    </Routes>
  );
};

export default App;
