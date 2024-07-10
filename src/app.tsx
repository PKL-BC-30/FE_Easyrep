import { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import LoginPage from "./pages/about";
import RegisterPage from "./pages/home";
import GridPage from "./pages/GridPage";
import LandingPage from "./pages/landingpage";
import RequireAdmin from "./pages/middleware";
import UserManagement from "./pages/GridManagement"
import TentangPage from "./pages/tentang"

const App: Component = () => {
  return (
    <Routes>
      <Route path="/landingpage" component={LandingPage} />
      <Route path="/about" component={LoginPage} />
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
