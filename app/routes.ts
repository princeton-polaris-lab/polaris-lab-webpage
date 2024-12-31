import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
  } from "@react-router/dev/routes";

export default [
    route("/", "routes/scaffolding.tsx", [
        index("routes/home.tsx"),
        route("about", "routes/about.tsx"),
        route("people", "routes/people.tsx"),
        route("publications", "routes/publications.tsx"),
        route("contact", "routes/contact.tsx"),
      ]),
  ] satisfies RouteConfig;
  
