import React, { useEffect } from "react";

import netflixLogo from "../../public/assets/netflix-logo.png";

import { auth } from "../Utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/Slices/userSlices";
import { USER_AVATAR } from "../Utils/constans";

const Header = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();

  const user = useSelector((store) => store.user);
  // console.log("user.photoURL", user?.photoURL);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        const userObj = {
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: USER_AVATAR,
        };
        dispath(addUser(userObj));
        navigate("/browse");
      } else {
        dispath(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-40" src={netflixLogo} alt="Netflix Logo" />
      {user && (
        <div
          className="flex w-1/6 justify-end items-center"
          onClick={handleSignOut}
        >
          {/* <img src={USER_AVATAR} alt="" /> */}
          <img src={user.photoURL} alt="" />
          <div className="text-white font-bold ml-2 cursor-pointer">
            <h3>{user.displayName}</h3>
            <button>Sign out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
