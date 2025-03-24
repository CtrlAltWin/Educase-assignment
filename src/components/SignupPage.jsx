import { useNavigate } from "react-router-dom";
const SignupPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center h-[99vh] items-center">
      <div className="px-5 pt-8 pb-10 w-96 border border-gray-300">
        <h1 className="text-2xl font-bold mb-4">
          <div>Create your</div>
          <div>PopX account</div>
        </h1>
        <form>
          <label className="relative top-2 left-2 z-10 bg-gray-100 text-sm font-medium text-violet-600">
            Full Name<span className="text-red-500 text-lg">*</span>
          </label>
          <input
            type="text"
            className="w-full py-[7px] px-2 border border-gray-300 rounded-lg mb-1 outline-none"
            placeholder="Marry Doe"
          />

          <label className="relative top-2 left-2 z-10 bg-gray-100 text-sm font-medium text-violet-600">
            Phone number<span className="text-red-500 text-lg">*</span>
          </label>
          <input
            type="text"
            className="w-full py-[7px] px-2 border border-gray-300 rounded-lg mb-1 outline-none"
            placeholder="Marry Doe"
          />

          <label className="relative top-2 left-2 z-10 bg-gray-100 text-sm font-medium text-violet-600">
            Email address<span className="text-red-500 text-lg">*</span>
          </label>
          <input
            type="email"
            className="w-full py-[7px] px-2 border border-gray-300 rounded-lg mb-1 outline-none"
            placeholder="Marry Doe"
          />

          <label className="relative top-2 left-2 z-10 bg-gray-100 text-sm font-medium text-violet-600">
            Password<span className="text-red-500 text-lg">*</span>
          </label>
          <input
            type="password"
            className="w-full py-[7px] px-2 border border-gray-300 rounded-lg mb-1 outline-none"
            placeholder="Marry Doe"
          />

          <label className="relative top-2 left-2 z-10 bg-gray-100 text-sm font-medium text-violet-600">
            Company name
          </label>
          <input
            type="text"
            className="w-full py-[7px] px-2 border border-gray-300 rounded-lg mb-1 outline-none"
            placeholder="Marry Doe"
          />

          <p className="text-sm font-medium mt-3">
            Are you an Agency?<span className="text-red-500 text-lg">*</span>
          </p>
          <div className="flex items-center gap-4 mb-4 accent-violet-600">
            <label className="relative top-2 left-2 z-10 bg-gray-100 flex items-center gap-1">
              <input type="radio" name="agency" className="active:scale-115" />{" "}
              Yes
            </label>
            <label className="relative top-2 left-2 z-10 bg-gray-100 flex items-center gap-1">
              <input type="radio" name="agency" className="active:scale-115" />{" "}
              No
            </label>
          </div>
          <button
            onClick={(event) => {
              event.preventDefault();
              navigate("/profile");
            }}
            className="w-full mt-16 bg-violet-600 text-white py-2 rounded-lg font-semibold"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
