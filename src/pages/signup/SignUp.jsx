import Welcome from "./Welcome";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
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

      <div
        className="min-h-screen bg-[#0d0d0d] text-white flex"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <Welcome />
        <SignUpForm />
      </div>
    </>
  );
};

export default SignUp;