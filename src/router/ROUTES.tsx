import Home from "../pages/Home";
import Settings from "../pages/Settings";
import { TemplateTypes } from "../templates";

export const routesPath = {
  home: "/",
  settings: "/settings",
};

export const ROUTES = [
  {
    path: routesPath.home,
    component: Home,
    template: TemplateTypes.default,
  },
  {
    path: routesPath.settings,
    component: Settings,
    template: TemplateTypes.default,
  },
];
