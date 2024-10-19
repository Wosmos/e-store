import { useState } from "react";
import Img from "../../assets/Top.png";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi"; // Import icons from react-icons




const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const [isFocused, setIsFocused] = useState(false); // State to manage input focus

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle showPassword state
  };

  const handleInputFocus = () => {
    setIsFocused(true); // Set input focus state to true
  };
  const handleInputBlur = () => {
    setIsFocused(false); // Set input focus state to false
  };
  return (
    <section className="flex h-[100vh] w-full flex-col bg-white md:flex-row">
      {/* left side */}

      <p className="font-poppins absolute top-8 w-full text-center text-[24px] font-medium leading-[1] sm:w-1/2">
        3legant
        <span className="text-[#6c7275]">.</span>
      </p>

      <img
        src={Img}
        alt="left img"
        className="h-[340px] w-full bg-[#F2F4F6] object-contain md:h-full md:w-1/2"
      />
      {/* right side */}
      <div className="flex flex-col items-center justify-center md:flex-grow">
        <form className="flex w-full flex-col gap-8 px-8 py-10 md:h-1/2 md:w-1/2 md:px-0 md:py-0">
          <h1 className="font-poppins text-[40px] font-medium leading-[1.1] tracking-[-0.4px] text-[#141718]">
            Sign In
          </h1>
          <p className="font-poppins -mt-2 text-[14px] text-[#6c7275]">
            Dont have an account?{" "}
            <a className="font-poppins text-[#38cb89] hover:underline" href="/">
              Sign Up
            </a>
          </p>
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="relative w-full">
              <input
                name="username"
                type="text"
                className="peer w-full border-b border-[#e8ecef] bg-inherit py-1 text-black/90 transition-colors focus:border-b-2 focus:border-[#38cb89] focus:bg-white focus:outline-none"
              />
              <label className="font-inter absolute left-0 top-1 cursor-text text-[16px] text-[#6c7275] transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#38cb89]">
                Username / Email
              </label>
            </div>
            <div className="relative w-full">
              <input
                name="password"
                type={showPassword ? "text" : "password"} // Conditionally render text or password type
                className="peer w-full border-b border-[#e8ecef] bg-inherit py-1 pr-10 text-black/90 transition-colors focus:border-b-2 focus:border-[#38cb89] focus:bg-white focus:outline-none"
                onFocus={handleInputFocus} // Handle input focus
                onBlur={handleInputBlur} // Handle input blur
              />
              <label
                className={`font-inter absolute left-0 top-1 cursor-text text-[16px] text-[#6c7275] transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#38cb89] ${
                  isFocused || showPassword
                    ? "-top-4 text-xs text-[#38cb89]"
                    : "text-[#38cb89]"
                }`}
              >
                Password
              </label>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {/* Toggle button with conditional rendering based on showPassword state */}
                <button
                  type="button"
                  className="focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <HiOutlineEyeOff className="h-6 w-6 text-[#6c7275]" />
                  ) : (
                    <HiOutlineEye className="h-6 w-6 text-[#6c7275]" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex h-6 w-full flex-row items-center">
              <input
                type="checkbox"
                name="checkbox"
                className="h-5 w-5 text-yellow-100 accent-[#38cb89] "
              />
              <span className="font-inter ml-2 text-[16px] text-[#6c7275]">
                Remember me 
              </span>
              <a
                href="/"
                className="font-inter ml-9 text-base font-semibold leading-[1.63] text-[#141718] hover:text-[#38cb89] hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <button className="font-inter relative flex w-full transform items-center justify-center gap-8 rounded-lg bg-[#141718] py-2.5 font-medium leading-[1.63] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#38cb89]">
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
