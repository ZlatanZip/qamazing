import React from "react";

import Login from "../../app/login/components/login";
import Register from "../../app/register/components/register";
import ForgotPassword from "../../app/forgot-password/components/forgot-password";
import ChangePassword from "../../app/change-password/components/change-password";

import Dashboard from "../../app/dashboard/components/dashboard";
import Users from "../../app/users/components/users";
import AddUser from "../../app/add-user/components/add-user";
import UserDetails from "../../app/user-details/components/user-details";
import MyProfile from "../../app/my-profile/components/my-profile";
import Projects from "../../app/projects/components/projects";
import Resources from "../../app/resources/components/resources";

export default {
  publicRoutes: [
    { name: "login", path: "/", component: Login },
    { name: "register", path: "/register", component: Register },
    {
      name: "forgot-password",
      path: "/forgot-password",
      component: ForgotPassword,
    },
    {
      name: "change-password",
      path: "/change-password",
      component: ChangePassword,
    },

    { name: "users", path: "/app/users", component: Users },
    { name: "add-user", path: "/add_user", component: AddUser },
    { name: "user-details", path: "/users/:id", component: UserDetails },
    { name: "my-profile", path: "/my_profile", component: MyProfile },
    { name: "projects", path: "/projects", component: Projects },
    { name: "resources", path: "/resources", component: Resources },
    { name: "dashboard", path: "/dashboard", component: Dashboard },
  ],
};
