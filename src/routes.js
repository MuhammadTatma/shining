import { Navigate, useRoutes } from "react-router-dom";

//layout


//page
import Page404 from "./pages/page404";
import HomePage from "./pages/homePage";
import Survey from "./pages/survey";
import MainSurvey from "./pages/mainsurvey";
import Shop from "./pages/shop";


export default function Router() {
   const routes =  useRoutes([
    {
      path: 'signin',
      element: <div>login</div>,
    },
    {
      path: '/signup',
      element: <>signup</>
    },
    {
      path: '/home',
      element: <HomePage />
    },
    {
      path: '/survey',
      element: <Survey />,
    },
    {
      path: '/survey/:id',
      element: <MainSurvey />
    },
    {
      path: '/shop',
      element: <Shop />
    },
    {
      path: '/404',
      element: <Page404 />
    },
    {
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
   ]);

   return routes;
}