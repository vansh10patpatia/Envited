import React, { useEffect } from "react";
import { Routes, Route,Navigate, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Create from "./pages/Event/Create";

const routes = [
  {
    path: "/",
    exact: true,
    element : <Home />,
  },
  {
    path: "/event",
    exact   : true,
    element : <Event />,
  },
  {
    path : "/create",
    exact : true,
    element : <Create />,
  }
]



export default function Navigation() {


  return (
    <Routes>
      {routes.map((route, index) => (
        <Route 
          key={index} 
          path={route.path} 
          element={route.element}
        />
      ))}
    </Routes>
  );
}
