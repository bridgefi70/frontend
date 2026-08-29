import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-[#050216]">
      {/* Secure perimeter frame */}
      <div
        className="perimeter-frame"
        aria-hidden="true"
      />

      <Navbar />

      <main className="px-2 md:px-0">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}