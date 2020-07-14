import React from "react";

import SideMenu from "../../../shared_components/side-menu/side-menu";

import "../styles/style.css";

const Project = () => {
  return (
    <div class="project-container">
      <div class="project_header">Company Name</div>
      <div class="project_menu_left">
        <SideMenu />
      </div>
      <div class="project_sideBar_left">Main</div>
      <div class="project_main">Rght</div>
      <div class="project_footer">Footer</div>
    </div>
  );
};

export default Project;
