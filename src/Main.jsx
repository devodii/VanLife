import React from "react";
import {
   Outlet,
   Route,
   RouterProvider,
   createBrowserRouter,
   createRoutesFromElements,
   redirect,
} from "react-router-dom";
import About from "./Pages/About";
import styled from "styled-components";
import Home from "./Pages/Home";
import Vans, { loader as homeVanLoader, loader } from "./Pages/Vans";
import VanDetails, { vanDetailLoader } from "./Pages/VanDetails";
import Layout from "./Components/Layout";
import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import HostLinks from "./Components/HostLayout";
import HostVans from "./Pages/Host/HostVans";
import HostVanDetails, {
   loader as hostVanDetailsLoader,
} from "./Pages/Host/HostVanDetails";
import HostVanPriceDetails from "./Pages/Host/VanDetails/HostVanPriceDetails";
import HostVanPhotoDetails from "./Pages/Host/VanDetails/HostVanPhotoDetails";
import HostVanMainDetails from "./Pages/Host/VanDetails/HostVanMainDetails";
import Test from "./Components/Test";
import NotFound from "./Pages/NotFound";
import Error from "./Components/Error";
import Login, { loader as loginLoader, loginAction } from "./Pages/Login";
import { HostVanLoader } from "./Pages/Host/HostVans";
import { requireAuth } from "./api";
import TestLogin, { TestAction } from "./Components/Test/Login";
import TestArray from "./Components/Test/Test";

const Main = () => {
   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path="/" element={<Layout />}>
            {/* Layoute route must have a hole as a parent for its children so that react-router can find the route that matches the url. otherwise, it overwrites all the route */}
            <Route index element={<Home />} />
            {/* <Route path="test" element={<Test />} /> */}
            <Route path="about" element={<About />} />

            <Route path="vans">
               <Route
                  index
                  element={<Vans />}
                  loader={homeVanLoader}
                  errorElement={<Error />}
               />
               <Route
                  path=":id"
                  element={<VanDetails />}
                  loader={vanDetailLoader}
               />
            </Route>

            <Route path="host" element={<HostLinks />} loader={requireAuth}>
               {/*  Nested routes are used when you want to keep displaying some UI on the page, but also want to display more */}
               <Route
                  index
                  element={<Dashboard />}
                  loader={async () => await requireAuth()}
               />
               <Route
                  loader={async () => await requireAuth()}
                  path="income"
                  element={<Income />}
               />
               <Route
                  path="vans"
                  element={<HostVans />}
                  loader={HostVanLoader}
               />
               <Route
                  path="vans/:id"
                  element={<HostVanDetails />}
                  loader={hostVanDetailsLoader}
               >
                  <Route
                     index
                     element={<HostVanMainDetails />}
                     loader={async () => await requireAuth()}
                  />
                  <Route
                     path="pricing"
                     element={<HostVanPriceDetails />}
                     loader={async () => await requireAuth()}
                  />
                  <Route
                     path="photos"
                     element={<HostVanPhotoDetails />}
                     loader={async () => await requireAuth()}
                  />
               </Route>
               <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route
               path="login"
               element={<Login />}
               loader={loginLoader}
               action={loginAction}
            />
            <Route path="*" element={<NotFound />} />
            <Route path="test" element={<Outlet />}>
               <Route
                  path="login"
                  element={<TestLogin />}
                  action={TestAction}
               />
               <Route
                  path="array"
                  element={<TestArray />}
                  action={TestAction}
               />
            </Route>
         </Route>
      )
   );

   return <RouterProvider router={router} className />;
};
export default Main;
