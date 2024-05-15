import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import Marketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import Test from "views/admin/testpage";
import DataTables from "views/admin/dataTables";
import { CiGrid42 } from "react-icons/ci";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Tracker",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/tracker",
    component: DataTables,
  },
  {
    name: "Test",
    layout: "/admin",
    icon: <Icon as={CiGrid42} width='20px' height='20px' color='inherit' />,
    path: "/test",
    component: Profile,
  },
  {
    name: "Test particular",
    layout: "/test",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    path: "/te",
    component: Test,
  },
  {
    name: "Store",
    layout: "/admin",
    path: "/store",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: Marketplace,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
];

export default routes;
