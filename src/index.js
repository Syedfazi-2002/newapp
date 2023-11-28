import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/js/bootstrap'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './services/app/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Countries from './services/app/features/Countries';
import CountryDetails from './services/app/features/CountryDetails';
import Photo from './services/app/features/show';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children :[
      {
          path :"/Photo",
          element : <Photo></Photo>,
      },
      {
        path : "/countrieslist",
        element : <Countries></Countries>,
      },
      {
        path : "/countrieslist/countrydetails/:name",
        element : <CountryDetails></CountryDetails>,
      },
      {
        path : "/countries",
        element : <Countries></Countries>
      }
    ]
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
