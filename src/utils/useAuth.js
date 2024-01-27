import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../Store/authSlice";
import { generateOTP } from "../utils/helper.js";
import { useAuthModal } from "../utils/ModalContext.js";

const useAuth = () => {
  const { closeModal } = useAuthModal();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loginStep, setLoginStep] = useState(1);
  const [referralCode, setReferralCode] = useState("");
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [enteredOTP, setEnteredOTP] = useState("");
  const [signupStep, setSignupStep] = useState(1);
  const [showReferralCode, setShowReferralCode] = useState(false);

  const toggleMode = () => {
    setIsLogin((prevMode) => !prevMode);
    setLoginStep(1);
    setSignupStep(1);
  };
  const toogleReferral = () => {
    setShowReferralCode((prev) => !prev);
  };
  const validatePhone = (phoneNumber) => {
    const cleanPhoneNumber = phoneNumber.replace(/\D/g, "");
    return /^\d{10}$/.test(cleanPhoneNumber);
  };

  const handleLogin = () => {
    const signedUpUser = JSON.parse(localStorage.getItem("user"));

    if (!signedUpUser) {
      return;
    }

    if (loginStep === 1) {
      const isValidPhone = validatePhone(phone);

      if (isValidPhone) {
        const generatedOTP = generateOTP(6);
        console.log(generatedOTP);
        setGeneratedOTP(generatedOTP);
        setLoginStep(2);
      } else {
        console.log("Invalid phone number");
      }
    } else if (loginStep === 2) {
      if (enteredOTP === "") {
        console.log("Please enter OTP");
        return;
      }

      if (enteredOTP === generatedOTP) {
        dispatch(login(signedUpUser));
        closeModal();

        navigate("/");
      } else {
        console.log("Incorrect OTP");
      }
    }
  };
  const handleSignup = () => {
    if (signupStep === 1) {
      if (!name || !validatePhone(phone) || !email) {
        console.log("Please fill in all details");
        return;
      }

      const isValidPhone = validatePhone(phone);

      if (isValidPhone) {
        const generatedOTP = generateOTP(6);
        console.log(generatedOTP);
        setGeneratedOTP(generatedOTP);
        setSignupStep(2);
      } else {
        console.log("Invalid phone number");
      }
    } else if (signupStep === 2) {
      if (enteredOTP === "") {
        console.log("Please enter OTP");
        return;
      }

      if (enteredOTP === generatedOTP) {
        dispatch(signup({ name, phone, email }));
        closeModal();
      } else {
        console.log("Incorrect OTP");
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      handleLogin();
    } else {
      handleSignup();
    }
  };
  return {
    isLogin,
    phone,
    name,
    email,
    loginStep,
    referralCode,
    generatedOTP,
    enteredOTP,
    signupStep,
    setPhone,
    setName,
    setEmail,
    setReferralCode,
    setEnteredOTP,
    toggleMode,
    toogleReferral,
    validatePhone,
    handleSubmit,
    showReferralCode,
  };
};

export default useAuth;
