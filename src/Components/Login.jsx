import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute inset-0 bg-black/[0.4]"></div>{" "}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_medium.jpg"
        alt="Netflix Login Screen Background"
        className="w-full h-screen object-cover"
      />
      <form
        action=""
        // Changed className here
        className="absolute rounded-sm bg-black/[0.7] p-12 w-full max-w-md mt-28 mx-auto right-0 left-0 top-0 text-white z-10"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700 font-medium text-white w-full rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 font-medium text-white w-full rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 font-medium text-white w-full rounded-sm"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-sm cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4">
          {isSignInForm ? "New to Netflix? " : "Already a user? "}
          <span className="underline cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </span>{" "}
          Now
        </p>
      </form>
    </div>
  );
};

export default Login;
