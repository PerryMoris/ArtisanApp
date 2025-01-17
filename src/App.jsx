import React from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import router from "./Router"
import {RouterProvider} from "react-router-dom"

function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
