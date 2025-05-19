import React from "react";
import AuthWrapper from "../components/layout/AuthWrapper";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const CheckYourEmail = () => {
  const email = localStorage.getItem("email");
  return (
    <AuthWrapper>
      <div className="bg-white py-[29px] px-[26px] rounded-lg shadow-lg lg:w-[453px] w-full ">
        <Link to="/forgot-password">
          <button className="flex items-center gap-1.5">
            <FaArrowLeft /> Back
          </button>
        </Link>
        <div className="w-[355px] mt-4">
          <h1 className="text-2xl lg:text-[30px] font-semibold mb-3">
            Check Your Email
          </h1>
          <p className="text-[#666] text-[16px] font-normal ">
            Check the email address <br />
        <span className="font-semibold ml-1">{email}</span> for instructions
            to <br />reset your password.
          </p>
        </div>
        <button className="btn w-full mt-5 font-semibold bg-white py-6">
          Resend Mail
        </button>
      </div>
    </AuthWrapper>
  );
};

export default CheckYourEmail;
