import { createRoot} from "react-dom/client";
import { lazy,Suspense } from "react";
import { useRoutes } from "react-router-dom";
import AuthTabs from "./pages/auth/auth-tabs/AuthTabs";
import ForgotPassword from "./pages/auth/forgot-password/ForgotPassword";
import React from 'react'
import { ResetPassword } from "./pages/auth";
export const Approuter = () => {
    const elements=useRoutes([
        {
            path:'/',
            element:<AuthTabs/>
        },
        {
            path:'/forgot-password',
            element:<ForgotPassword/>
        },
        {
            path:'/reset-password',
            element:<ResetPassword/>
        },



    ]);
  return elements;
}



