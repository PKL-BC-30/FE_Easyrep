import type { Component } from "solid-js";
import GridComponent from "../pages/GridComponent";
import './asset/css/GridPage.css'

const GridPage: Component = () => {
  return (
    <div>
      <h1>AG Grid Page</h1>
      <GridComponent />
    </div>
  );
};

export default GridPage;
