import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
