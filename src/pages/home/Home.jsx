import React from "react";
import Footer from "./dashboard/components/Footer";
import Dashboard from "./dashboard/Dashboard";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <>
      {/* Self-contained fonts + animation keyframe (no separate CSS/config file) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>


      <div className="min-h-screen bg-[#0d0d0d]" style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <Navbar />
        <Outlet/>
        <Footer />
      </div>
    </>
  );
}

export default Home