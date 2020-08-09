import React from "react";

import Login from "../../app/login/components/login";
import Register from "../../app/register/components/register";
import ForgotPassword from "../../app/forgot-password/components/forgot-password";
import ChangePassword from "../../app/change-password/components/change-password";

import Dashboard from "../../app/dashboard/components/dashboard";
import Users from "../../app/users/components/users";
import AddUser from "../../app/add-user/components/add-user";
import UserDetails from "../../app/user-details/components/user-details";
import UserProfile from "../../app/user-profile/components/user-profile";
import Projects from "../../app/projects/components/projects";
import Resources from "../../app/resources/components/resources";

import Roles from "./role-constants";

export default {
  publicRoutes: {
    login: {
      name: "login",
      path: "/login",
      fullPath: "/",
      component: Login,
      roles: [
        Roles.admin,
        Roles.humanResources,
        Roles.officeManager,
        Roles.projectManager,
      ],
    },
    register: {
      name: "register",
      path: "register",
      fullPath: "/register",
      component: Register,
      roles: [
        Roles.admin,
        Roles.humanResources,
        Roles.officeManager,
        Roles.projectManager,
      ],
    },

    forgotPassword: {
      name: "forgot-password",
      path: "forgot-password",
      fullPath: "/forgot-password",
      component: ForgotPassword,
      roles: [
        Roles.admin,
        Roles.humanResources,
        Roles.officeManager,
        Roles.projectManager,
      ],
    },
    changePassword: {
      name: "change-password",
      path: "change-password",
      fullPath: "/change-password",
      component: ChangePassword,
      roles: [
        Roles.admin,
        Roles.humanResources,
        Roles.officeManager,
        Roles.projectManager,
      ],
    },
  },
  privateRoutes: {
    users: {
      name: "users",
      path: "/users",
      fullPath: "/app/users",
      component: Users,
      roles: [
        Roles.admin,
        Roles.humanResources,
        Roles.officeManager,
        Roles.projectManager,
      ],
    },
    addUser: {
      name: "add-user",
      path: "/add_user",
      fullPath: "/app/add_user",
      component: AddUser,
      roles: [Roles.admin, Roles.officeManager],
    },
    userDetails: {
      name: "user-details",
      path: "/users/:id",
      fullPath: "/app/users/:id",
      component: UserDetails,
      roles: [
        Roles.admin,
        Roles.humanResources,
        Roles.officeManager,
        Roles.projectManager,
      ],
    },
    userProfile: {
      name: "profile",
      path: "/profile",
      fullPath: "/app/profile",
      component: UserProfile,
      roles: [
        Roles.admin,
        Roles.humanResources,
        Roles.officeManager,
        Roles.projectManager,
      ],
    },
    projects: {
      name: "projects",
      path: "/projects",
      fullPath: "/app/projects",
      component: Projects,
      roles: [Roles.admin, Roles.officeManager, Roles.projectManager],
    },
    resources: {
      name: "resources",
      path: "/resources",
      fullPath: "/app/resources",
      component: Resources,
      roles: [Roles.admin, Roles.officeManager],
    },
    dashboard: {
      name: "dashboard",
      path: "/dashboard",
      fullPath: "/app/dashboard",
      component: Dashboard,
      roles: [
        Roles.admin,
        Roles.humanResources,
        Roles.officeManager,
        Roles.projectManager,
      ],
    },
  },
};
