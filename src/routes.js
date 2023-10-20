import { AboutUs } from "./layouts/pages/landing-pages/about-us";
import { ContactUs } from "./layouts/pages/landing-pages/contact-us";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InfoIcon from "@mui/icons-material/Info";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import React from "react";
import { SlideBar } from "./components/dashboard/Navbar";
import { Navbar } from "./components/web/Navbar/Navbar";

export const routes = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    route: "/",
    component: <Navbar />,
  },
  {
    name: "Acerca de nosotros",
    icon: <InfoIcon />,
    route: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contáctanos",
    icon: <MailOutlineIcon />,
    route: "/contact-us",
    component: <ContactUs />,
  },
  {
    name: "SlideBar",
    icon: <MailOutlineIcon />,
    route: "/slidebar",
    component: <SlideBar />,
  },
];

export default routes;
