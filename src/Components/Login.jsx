import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../Utils/Slices/userSlices";
import { LOGIN_BACKROUND } from "../Utils/constans";

const Login = () => {
  const dispath = useDispatch();

  const [isSignInForm, setSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleButtonClick = async () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    console.log(message);

    if (!isSignInForm) {
      await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://lh3.googleusercontent.com/a/ACg8ocIeWhGCoXkfiJtxksYV5cZljRbGUst1t6g9c9bvajYS7sC2Syk=s288-c-no",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              const userObj = {
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              };
              console.log(userObj);
              // dispath(addUser(userObj));
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "- " + errorMessage);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "- " + errorMessage);
          // ..
        });
    } else {
      await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email, displayName, photoURL } = user;

          const userObj = {
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          };

          dispath(addUser(userObj));

          // ...
        })
        .catch((error) => {
          console.log(error);
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode & " - " & errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute inset-0 bg-black/[0.4]"></div>{" "}
      <img
        src={LOGIN_BACKROUND}
        alt="Netflix Login Screen Background"
        className="w-full h-screen object-cover"
      />
      <form
        // Changed className here
        onSubmit={(e) => e.preventDefault()}
        className="absolute rounded-sm bg-black/[0.7] p-12 w-full max-w-md mt-28 mx-auto right-0 left-0 top-0 text-white z-10"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700 font-medium text-white w-full rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 font-medium text-white w-full rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 font-medium text-white w-full rounded-sm"
        />
        {errorMessage && (
          <p className="my-6 text-red-500 font-medium">{errorMessage}</p>
        )}
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-sm cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4">
          {isSignInForm ? "New to Netflix? " : "Already a user? "}
          <span className="underline cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "Sign Up" : "Sign In"}
          </span>{" "}
          Now
        </p>
      </form>
    </div>
  );
};

export default Login;
