import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="items-center justify-center mt-[60vh] px-8">
      <h1 className="text-[3vmax] font-bold mb-2">Welcome to PopX</h1>
      <p className="text-gray-500 mb-6 text-[2vmax]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="sm:flex w-full sm:w-[70vw] gap-2 max-w-[600px]">
        <button
          className="w-full bg-violet-600 text-white py-2 rounded-lg font-semibold mb-2"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>

        <button
          className="w-full bg-violet-300 text-black py-2 rounded-lg font-semibold mb-2"
          onClick={() => navigate("/signin")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
