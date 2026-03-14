import React from "react";

function LoginSignUp() {
  return (
    <div className="login w-full h-screen pt-20 bg-[#fce3fe]">
      <div className="login-container w-[580px] h-auto bg-white mx-auto p-10">
        <h1 className="m-5 text-3xl">Sign Up</h1>
        <div className="login-fields flex flex-col gap-7 mt-8">
          <input
            type="text"
            placeholder="Your Name"
            className="h-[72px] w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-xl"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="h-[72px] w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-xl"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-[72px] w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-xl"
          />
        </div>
        <button className="w-full h-[72px] text-white bg-[#ff4141] mt-7 border-none text-2xl cursor-pointer">
          Continue
        </button>
        <p className="mt-5 text-[#5c5c5c] text-[18px]">
          Already have an account ?{" "}
          <span className="text-red-500 font-semibold cursor-pointer">
            Login here
          </span>
        </p>
        <div className="agree flex items-center mt-6 gap-5 text-[#5c5c5c]">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
