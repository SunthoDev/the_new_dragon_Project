import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import Main from './Component/Main/Main.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryData from './Component/CategoryData/CategoryData.jsx'
import NewsDetails from './Component/NewsDetails/NewsDetails.jsx'
import AuthProvider from './Component/AuthProvider/AuthProvider.jsx'
import Login from './Component/login/Login.jsx'
import SingUp from './Component/SingUp/SingUp.jsx'


let route=createBrowserRouter([

    { path:"/",
      element:<Home></Home>,
      children:[
        // {
        //   path:'/',
        //   element:<Main></Main>
        // },
        {
          path:'/about',
          element:<div>about</div>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<SingUp></SingUp>
        },
        {
          path:'/newsDetails/:id',
          element:<NewsDetails></NewsDetails>,
          loader:({params})=>fetch(`https://the-news-dragon-server-sunthodev.vercel.app/news/${params.id}`)
        },
        {
          path:'/categoryData/:id',
          element:<Main></Main>,
          loader:({params})=>fetch(`https://the-news-dragon-server-sunthodev.vercel.app/category/${params.id}`)
        },
      ]
    
    },
    {
      path:"*",
      element:<div><h2>This Error Page <br />400000000000000000000000044444444444444444444</h2></div>
    }

])


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <AuthProvider>

      <RouterProvider router={route}></RouterProvider>

    </AuthProvider>

  </React.StrictMode>,
  
)
