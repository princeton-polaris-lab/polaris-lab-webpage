import {
    type RouteConfig,
    route,
    index,
  } from "@react-router/dev/routes";

export default [
  route("/", "routes/scaffolding.jsx", [
      index("routes/home.jsx"),
      route("about", "routes/about.jsx"),
      route("people", "routes/people.jsx"),
      route("publications", "routes/publications.jsx"),
      route("contact", "routes/contact.jsx"),
    ]),
  ] satisfies RouteConfig;
  
