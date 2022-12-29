"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { Loading, SignIn } from "../../../components";
import { auth, db } from "../../../components/firebase";
import {
  FcGoogle,
  BsFacebook,
  TiSocialTwitter,
  IoEyeOffOutline,
} from "../../../constants";

const tab = ["Register", "Sign in"];
const Auth = () => {
  const router = useRouter();
  const [tabID, setTabID] = useState<number>(0);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // ---------------FUNCTIONS------------------
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user.uid);
        try {
          setDoc(doc(db, "users", user.uid), {
            userID: user.uid,
            email,
            password,
          });
        } catch (error) {
          console.log(error);
        }
        setEmail("");
        setPassword("");
        setReferralCode("");
        router.push("dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-screen h-screen flex justify-center pt-8">
      {isLoading && <Loading />}
      <div className="w-1/2 min-w-[300px] sm:min-w-[320px] max-w-[600px] flex flex-col items-center">
        <img src="/logo.svg" alt="glide logo" />
        <div className="mt-8 mb-6 sm:mb-12">
          <div className={` text-lg  flex items-center space-x-12  `}>
            {tab.map((text, i) => (
              <p
                onClick={() => setTabID(i)}
                className={` ${
                  tabID === i
                    ? "font-semibold text-[#3A3A3A]"
                    : "text-[#3A3A3A]/80"
                } cursor-pointer`}
                key={i}
              >
                {text}
              </p>
            ))}
          </div>
          <div
            className={`h-1 relative mt-2 ${
              tabID === 0 ? "left-[5%]" : "left-[72%]"
            } w-10 rounded-md bg-[#00CCFF]`}
          />
        </div>

        {/* --------------REGISTER-------------- */}
        <div className=" mt-4 sm:mt-8 mb-[86px] w-full">
          {tabID === 0 ? (
            <form
              onSubmit={submitHandler}
              className="flex flex-col space-y-10 text-[#787885]"
            >
              <input
                className="px-[25px] w-full py-3 rounded-[6px] border outline-green-500 border-[#000066]/50"
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="px-[25px] flex items-center justify-between focus-within:border-[1.6px] focus-within:border-green-500 w-full py-3 bg-white rounded-[6px] border outline-green-500 border-[#000066]/50">
                <input
                  className=" w-full pr-3 outline-none"
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <input
                className="px-[25px] w-full py-3 rounded-[6px] border outline-green-500 border-[#000066]/50"
                type="text"
                placeholder="Referral Code (If any)"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
              />
              <button
                className="px-[25px] hover:bg-blue-600 text-white w-full py-3 rounded-[30px] border bg-primaryBlue"
                type="submit"
              >
                Create account
              </button>
            </form>
          ) : (
            <SignIn />
          )}
          {/* OTHER AUTH METHODS */}
          <div className=" my-6 sm:my-10 w-full flex flex-col items-center">
            <p className="text-#3A3A3A text-center">or continue with</p>
            <div className="my-8 sm:my-10  flex items-center space-x-6 justify-center">
              <FcGoogle size={30} />
              <BsFacebook size={30} color="#03a9f4" />
              <TiSocialTwitter size={36} color="#03a9f4" />
            </div>
            <div>
              <p className="text-xs text-center">
                By creating an account, you agree to{" "}
                <span className="text-[#03a9f4]">
                  Glide Free membership agreement{" "}
                </span>{" "}
                and <span className="text-[#03a9f4]">Privacy Policy.</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
