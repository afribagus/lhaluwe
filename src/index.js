import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import DetailFoods from "./components/DetailFoods/DetailFoods";
import Footer from "./components/Footer/Footer";
import { Foods } from "./components/Foods/Foods";
import AllUsers from "./components/AllUsers/AllUsers";
import Profile from "./components/Profile/Profile";
import Rating from "./components/Rating/Rating";
import FoodList from './components/FoodList/FoodList';
import OurRecipes from './components/OurRecipes/OurRecipes';
import AddFood from './components/AddFood/AddFood';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Favorite from './components/Favorite/Favorite';
import Detail from './components/Detail/Detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement: <p>Page Not Found</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/our-recipes",
        element:
          localStorage.getItem("role") === "admin" ? (
            <FoodList />
          ) : (
            <OurRecipes/>
          ),
      },
      {
        path: "/foods",
        element: <Foods />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all-users",
        element: <AllUsers />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/detail/:foodID",
        element: <Detail />,
      },
      {
        path: "/detail-foods/:id",
        element: <DetailFoods />,
      },
      {
        path: "/rating/:foodsID",
        element: <Rating />,
      },
      {
        path: "/favorite",
        element: localStorage.getItem("token") ? <Favorite /> : <ErrorPage />,
      },
      {
        path: "/add-food",
        element:
          localStorage.getItem("role") === "admin" ? (
            <AddFood />
          ) : (
            <ErrorPage />
          ),
      },
    ],
  },
  {
    path: "/form",
    element: <Form />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
