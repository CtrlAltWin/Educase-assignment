import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className="h-[95vh] w-96 border border-gray-300 px-5 mt-5 pt-[63vh]">
        <h1 className="font-semibold text-3xl mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 text-xl mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="w-full">
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
    </div>
  );
};

export default LandingPage;
