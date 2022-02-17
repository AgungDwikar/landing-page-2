import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import FlexBox from "./views/tailwind/FexBox";
import NotFound from "./views/404/NotFound";
import Landing from "./components/layout/Landing";
import Signin from "./components/layout/Signin";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./views/app/dashboard/Dashboard";
import Candidat from "./views/app/candidat/Candidat"
import Talent from "./views/app/talent/Talent"
import Curriculum from "./views/app/curriculum/Curriculum"
import Hiring from "./views/app/hiring/Hiring"
import Setting from "./views/app/setting/Setting"
import Batch from "./views/app/batch/Batch"


function Routes() {
    return useRoutes([
        { path: "/", element: <Landing /> },
        { path: "/signin", element: <Signin /> },
        { path: "/flexbox", element: <FlexBox /> },
        { path: "/404found", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404found" /> },
        {
            path: "/app",
            element: <AppLayout />,
            children: [
                { path: "dashboard", element: <Dashboard /> },
                { path: "candidat", element: <Candidat /> },
                { path: "batch", element: <Batch /> },
                { path: "talent", element: <Talent /> },
                { path: "curriculum", element: <Curriculum /> },
                { path: "hiring", element: <Hiring /> },
                { path: "setting", element: <Setting /> },
            ],
        },
    ]);
}

export default Routes;
