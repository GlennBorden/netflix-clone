import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Home from "./Home";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailX = "gborden@icstars.org";
  const passX = "Glenn109007$";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === emailX && password === passX) {
      //   Navigate("/Home");
      alert("loggin in");
    } else {
      alert("Fuck");
    }
  };
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1612117881137-3TIGIIUIJBLHDD8GBUT6/Naruto1.jpg"
        alt=""
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>
            {/* {error ? <p className="p-3 bg-red-400 my-2">{error}</p> : null} */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button
                onClick={LinkHome}
                className="bg-red-600 py-3 my-6 rounded font-bold"
              >
                Sign In
              </button>
              {/* <button
                onclick="window.location='Home.php';"
                value="click here"
              /> */}
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me.
                </p>
                <p>Need Help?</p>
              </div>
              {/* <p className="py-8"> */}
              {/* <span className="text-gray-600">New to Net-Flex?</span>{" "} */}
              {/* <Link to="/signup">Sign Up</Link> */}
              {/* </p> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
