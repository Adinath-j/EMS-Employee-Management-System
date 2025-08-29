import React, { useState } from "react";

const Login = ({ loginHandler }) => {

  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState('')
  const SubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(email,password)
    setPassword('')
    SetEmail('')
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-500 px-20 py-40 rounded-3xl">
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
          className="flex flex-col justify-center items-center"
        >
          <input
            value={email}
            onChange={(e) => {
              SetEmail(e.target.value);
            }}
            className="text-xl border-emerald-500 border-2 mt-4 rounded-full py-2 px-4 text-white outline-none placeholder:text-zinc-400"
            type="email"
            placeholder="Enter email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="text-xl border-emerald-500 mt-4 border-2 rounded-full py-2 px-4 text-white outline-none placeholder:text-zinc-400"
            type="password"
            placeholder="Enter password"
          />
          <button className=" text-xl bg-emerald-500 mt-4 border-white border-2 active:scale-95  rounded-xl py-2 px-4 text-white outline-none">
            { }
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
