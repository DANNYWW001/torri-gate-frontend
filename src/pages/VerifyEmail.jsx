import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../assets/layout1.png";
import { BounceLoader } from "react-spinners";
import { MdCancel } from "react-icons/md";

const VerifyEmail = () => {
  const { token } = useParams();
  const [errorMsg, setErrorMsg] = useState("");
  const [status, setStatus] = useState("verifying");
  const checkToken = async () => {
    try {
      const response = await axiosInstance.post(`/auth/verify-email/${token}`, {
        token,
      });
      if (response.status === 200) {
        setStatus("success");
      }
    } catch (error) {
      setErrorMsg("Email Verification Failed");
      setStatus("error");
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  if (status === "verifying") {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-[505px] py-[29px] px-[26px] shadow-md text-center">
          <BounceLoader className="mx-auto my-2" />
          <h1 className="text-xl lg:text-[30px] font-semibold my-3">
            Email Verifying....
          </h1>
          <p className="text-[#666] text-lg">Please Wait</p>
        </div>
      </div>
    );
  }
  if (status === "success") {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-[505px] py-[29px] px-[26px] shadow-md">
          <img
            src={icon}
            alt="verify"
            className="bg-black text-white bg-rounded block mx-auto"
          />
          <h1 className="text-xl lg:text-[30px] font-semibold my-3">
            Verification Successful
          </h1>
          <p className="text-[#666] mb-4">
            Your account has been verified successfully
          </p>
          <Link to="/login">
            <button className="w-full font-semibold rounded-xl bg-[#0c0c0c] text-white h-[56px]">
              Proceed to Login
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
     <div className="flex items-center justify-center h-screen">
        <div className="text-center w-full max-w-[505px] py-[29px] px-[26px] shadow-md">
         <MdCancel size={80} className="text-red-500 mx-auto"/>
          <h1 className="text-xl lg:text-[30px] font-semibold my-3">
            Verification Failed
          </h1>
          <p className="text-[#666] mb-4">
            Invalid or Expired Token
          </p>
          <Link to="/login">
            <button className="w-full font-semibold rounded-xl bg-[#0c0c0c] text-white h-[56px]">
              Resend Verification Mail
            </button>
          </Link>
        </div>
      </div>
  );
};
export default VerifyEmail;
