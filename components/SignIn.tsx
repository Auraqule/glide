"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { auth } from "./firebase";

type PageProps = {
  toast: any;
  setIsLoading: any;
};

const SignIn = ({ toast, setIsLoading }: PageProps) => {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        router.push("/dashboard");
        toast.success("Welcome back 😊");

        const user = userCredential.user;
        setEmail("");
        setPassword("");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <form onSubmit={submitHandler} className="flex flex-col  text-[#787885]">
      <input
        className="px-[25px] w-full mb-10 py-3 rounded-[6px] border outline-green-500 border-[#000066]/50"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
      />
      <div className="px-[25px] flex  items-center justify-between focus-within:border-[1.6px] focus-within:border-green-500 w-full py-3 bg-white rounded-[6px] border outline-green-500 border-[#000066]/50">
        <input
          className=" w-full pr-3 outline-none"
          type={isPasswordVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {isPasswordVisible ? (
          <IoEyeOutline
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            size={24}
          />
        ) : (
          <IoEyeOffOutline
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            size={24}
          />
        )}
      </div>
      <p className="text-[#00CCFF] hover:text-primaryBlue cursor-pointer text-sm mt-3 mb-7">
        Forgot password
      </p>

      <button
        className="px-[25px] hover:bg-blue-600 text-white w-full py-3 rounded-[30px] border bg-primaryBlue"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
};

export default SignIn;
