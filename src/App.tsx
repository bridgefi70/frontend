import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import CreateEvents from "./pages/CreateEvents";
import CreateEventsTicketing from "./pages/CreateEventsTicketing";
import CreateEventsSchedule from "./pages/CreateEventsSchedule";
import CreateEventsReview from "./pages/CreateEventsReview";
import EventLaunched from "./pages/EventLaunched";

// import Signin from "./pages/Signin";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main website layout */}
        <Route element={<Layout />}>
          {/* Home */}
          <Route path="/" element={<Home />} />
          {/* Events */}
          <Route path="/create-events" element={<CreateEvents />} />
          {/* Schedule */}
          <Route
            path="/create-events/schedule"
            element={<CreateEventsSchedule />}
          />

          {/* Ticketing */}
          <Route
            path="/create-events/ticketing"
            element={<CreateEventsTicketing />}
          />
          {/* Review */}
          <Route
            path="/create-events/review"
            element={<CreateEventsReview />}
          />
          {/* Launched */}
          <Route path="/create-events/launched" element={<EventLaunched />} />

          {/* Authentication */}
          {/* <Route path="/signin" element={<Signin />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
      </Routes>

      {/* Toast Notifications */}
      <Toaster position="top-right" reverseOrder={false} />
    </BrowserRouter>
  );
};

export default App;
