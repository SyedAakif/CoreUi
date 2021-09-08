import React from "react";

const Transactions = React.lazy(() =>
  import("./views/transactions/Tranasctions")
);

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Analyst = React.lazy(() => import("./views/analyst/Analyst"));
const Users = React.lazy(() => import('./views/users/Users'));
 
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/process", name: "Process", component: Dashboard },
  { path: "/analyst", name: "Process", component: Analyst },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/users", name: "Users", component: Users },
  { path: "/transactions", name: "Transactions", component: Transactions },
];

export default routes;
