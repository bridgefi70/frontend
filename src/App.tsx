import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Layout from "./components/layout/Layout";

// import Signin from "./pages/Signin";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main website layout */}
        <Route element={<Layout />}>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Authentication */}
          {/* <Route path="/signin" element={<Signin />} /> */}

        </Route>

      </Routes>

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </BrowserRouter>
  );
};

export default App;