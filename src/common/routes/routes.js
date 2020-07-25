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
    {
      name: "login",
      path: "/",
      component: Login,
      image:
        "https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/100931756_248081899953714_1631715989982514868_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&amp;_nc_cat=106&amp;_nc_ohc=tQtzcQ-AhjkAX-eIT28&amp;oh=a684441d2cfa760c8f858635b452e69a&amp;oe=5F403FCA",
    },

    {name: "register", path: "register", component: Register},

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
  ],
  privateRoutes: [
    {
      name: "users",
      path: "/users",
      fullPath: "/app/users",
      roles: ["admin", "pr", "dado"],
      component: Users,
    },
    {name: "add-user", path: "/add_user", component: AddUser},
    {name: "user-details", path: "/users/:id", component: UserDetails},
    {name: "my-profile", path: "/my_profile", component: MyProfile},
    {
      name: "projects",
      path: "/projects",
      fullPath: "/app/projects",
      component: Projects,
    },
    {
      name: "resources",
      path: "/resources",
      fullPath: "/app/resources",
      component: Resources,
    },
    {name: "dashboard", path: "/dashboard", component: Dashboard},
  ],
};
