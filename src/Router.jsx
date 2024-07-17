import React from 'react'
import {createBrowserRouter, Navigate} from "react-router-dom"
import Root from "./components/Root"
import Home from "./components/Home"
import Login from "./components/Login"
import NotFound from './components/NotFound'



const router = createBrowserRouter(
    
    [
        {
            path: "/login",
            element: <Login />,
            errorElement: <NotFound /> ,
        },
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                    index: true
                }, 
                
            ],
            errorElement: <NotFound />,
        }
       
    ]
)

export default router