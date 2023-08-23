import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
    redirect,
    Link,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path:'/',
        errorElement:
            <div className="button-container">
                <Link to="/">
                    <button className="my-button">Page Not Found. Go back home.</button>
                </Link>
            </div>,

        element:<App/>,
    },
    ])


function RealEstate (){
    return(
        <RouterProvider router={router}/>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RealEstate/>
  </React.StrictMode>,
)
