import { Icon } from "@chakra-ui/react";
import { SmallFooter } from "../components/Footer";
import logo from "/logo.svg";
import { LockIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function validateEmail(email) {
  // Regular expression for validating an email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regex
  if (emailRegex.test(email)) {
    return email; // Return the email if it's valid
  } else {
    return false; // Return false if it's invalid
  }
}
export default function Authentication() {
  const [isFocused, setIsFocused] = useState(false);
  const [isInput, setInput] = useState(false);
  const [isError, setError] = useState(false);
  const currentUser = useSelector((store) => store.auth);
  console.log(currentUser);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const handleEmail = (event) => {
    event.preventDefault();
    if (currentUser.email) {
      const password = event.target[0].value;
      console.log('here');
      
      dispatch({
        type: "LOGIN",
        payload: { email: currentUser.email, password },
      });
    } else if (!currentUser.email) {
      const isEmail = validateEmail(event.target[0].value);
      if (isEmail) {
        dispatch({
          type: "LOGIN",
          payload: { email: isEmail, password: false },
        });
        event.target[0].value = "";
        if (isError) setError("Invalid Email");
      }
    } else setError(true);
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser.isLoggedIn) {
      navigate("/");
    }
  }, [currentUser]);
  return (
    <section className="max-w-[1000px] m-auto">
      <div className="flex justify-between items-center p-4 py-8">
        <img src={logo} alt="logo" className="h-12" />
        <div className="flex gap-2">
          <p>Secure Login</p>
          <Icon as={LockIcon} boxSize={6} />
        </div>
      </div>
      <hr className="border-black" />
      <h3 className="text-2xl font-bold min-[800px]:w-2/5 m-auto text-center my-4">
        
        {currentUser.email && currentUser.isRegistered
              ? "Welcome back!!"
              : currentUser.email
              ? "Create password"
              : "Enter your email address to sign in or to create an account"}
      </h3>
      <form onSubmit={handleEmail} className="mb-20">
        <div
          className={`m-auto w-fit  input-container ${
            isFocused || isInput ? "focused" : ""
          }`}
        >
          <input
            type={currentUser.email ? "password" : "email"}
            minLength={6}
            required
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setInput(e.target.value)}
            className="email-input"
            ref={inputRef}
          />
          {isError && <p className="text-red-600">Invalid Email</p>}
          {currentUser.isError && <p className="text-red-600">{currentUser.isError}</p>}
          <label
            onClick={() => inputRef.current.focus()}
            className="placeholder"
          >
            {currentUser.email ? "Enter Password" : "Email Address"}
          </label>
        </div>
        <div className="m-auto w-fit my-4 ">
          <button
            className=" bg-primary text-white p-4 w-96 rounded-full"
            type="submit"
          >
            {currentUser.email && currentUser.isRegistered
              ? "Sign In"
              : currentUser.email
              ? "Create password"
              : "Continue"}
          </button>
        </div>
      </form>
      <form action=""></form>
      <section className="">
        <div className="block min-[640px]:flex gap-4 font-medium my-2 mt-60">
          <p className="hover:underline my-3 ">
            <a href="">Terms of Use</a>
          </p>
          <p className="hover:underline my-3">
            <a href="">Privacy Policy</a>
          </p>
          <p className="hover:underline my-3">
            <a href="">Your Privacy Rights & Choices</a>
          </p>
        </div>
        <p className="text-xs font-medium my-2">
          © 2002 - 2024 by Wayfair LLC, 4 Copley Place, 7th Floor, Boston, MA
          02116
        </p>
      </section>
    </section>
  );
}
