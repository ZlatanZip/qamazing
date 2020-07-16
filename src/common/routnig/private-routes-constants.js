import React from "react";

import Dashboard from "../../app/dashboard/components/dashboard";
import Users from "../../app/users/components/users";
import AddUser from "../../app/add-user/components/add-user";
import UserDetails from "../../app/user-details/components/user-details";
import MyProfile from "../../app/my-profile/components/my-profile";
import Projects from "../../app//projects/components/projects";
import Resources from "../../app/resources/components/resources";

export default [
  { name: "users", path: "/users", component: Users },
  { name: "add-user", path: "/add_user", component: AddUser },
  { name: "user-details", path: "/users/:id", component: UserDetails },
  { name: "my-profile", path: "/my_profile", component: MyProfile },
  { name: "projects", path: "/projects", component: Projects },
  { name: "resources", path: "/resources", component: Resources },
  //{ name: "dashboard", path: "/dashboard", component: <Dashboard/> },
];
