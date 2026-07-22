import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { useContext } from "react";
import { MyStore } from "../../context/MyContext";
import Cart from "./cart/Cart";

const Home = () => {

  const { cartToggle } = useContext(MyStore)
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

        {cartToggle ? <div className="fixed inset-0 h-screen w-screen bg-black/60 backdrop-blur-sm z-40"><Cart /></div> : null}
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Home