import { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import LoginPage from "./pages/about";
import RegisterPage from "./pages/home";
import GridPage from "./pages/GridPage";
import LandingPage from "./pages/landingpage";

const App: Component = () => {
  return (
    <Routes>
      <Route path="/landingpage" component={LandingPage} />
      <Route path="/about" component={LoginPage} />
      <Route path="/" component={RegisterPage} />
      <Route path="/useradmin" component={GridPage} />
    </Routes>
  );
};

export default App;
