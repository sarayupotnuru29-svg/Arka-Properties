import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Enquiry } from "./pages/Enquiry";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "projects", Component: Projects },
      { path: "contact", Component: Contact },
      { path: "enquiry", Component: Enquiry },
    ],
  },
]);
