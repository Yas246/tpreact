import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Acceuil from "pages/Acceuil";
import Find from "pages/Find";
import Browse from "pages/Browse";
import About from "pages/About";
import Profil from "pages/Profil";
import ResultatsPage from "pages/Resultats";

const ProjectRoutes = () => {
  let element = useRoutes([

    { path: "home", element: <Acceuil /> },
    { path: "*", element: <NotFound /> },
    { path: "/", element: <Home /> },
    { path: "find", element: <Find /> },
    { path: "browse", element: <Browse /> },
    { path: "about", element: <About /> },
    { path: "profil", element: <Profil /> },
    { path: "resultats", element: <ResultatsPage /> },
  ]);

  return element;
};

export default ProjectRoutes;
