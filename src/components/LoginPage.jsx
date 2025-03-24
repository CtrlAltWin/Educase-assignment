import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [isInputboxActive, setIsInputboxActive] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className="px-5 py-8 w-96 h-[95vh] mt-5 border border-gray-300">
        <h1 className="text-2xl font-bold">Signin to your</h1>
        <h1 className="text-2xl font-bold mb-3">PopX account</h1>
        <p className="text-gray-500 text-xl mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <form>
          <label className="relative top-2 left-2 z-10 bg-gray-100 text-sm font-medium text-violet-500">
            Email Address
          </label>
          <input
            type="email"
            className="w-full py-[7px] px-2 border border-gray-300 rounded-lg mb-4 outline-none"
            placeholder="Enter email address"
            onFocus={() => setIsInputboxActive(true)}
            onBlur={() => setIsInputboxActive(false)}
          />

          <label className="relative top-2 left-2 z-10 bg-gray-100 text-sm font-medium text-violet-500">
            Password
          </label>
          <input
            type="password"
            className="w-full py-[7px] px-2 border border-gray-300 rounded-lg mb-4 outline-none"
            placeholder="Enter password"
            onFocus={() => setIsInputboxActive(true)}
            onBlur={() => setIsInputboxActive(false)}
          />

          <button
            onClick={(event) => {
              event.preventDefault();
              navigate("/profile");
            }}
            className={
              "w-full mt-4 text-white py-2 rounded-lg font-semibold" +
              (isInputboxActive ? " bg-blue-400 rounded-none" : " bg-gray-300")
            }
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
