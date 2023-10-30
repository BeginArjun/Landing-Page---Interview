
import { useState } from "react";
import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";

const InputBox = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailEnteredMessage, setEmailEnteredMessage] = useState(null);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleChange = (e) => {
    setFormData(e.target.value);
    setIsValidEmail(false);
    setEmailEnteredMessage(null);
  };

  const validateEmail = (email) => {
    const validRegex = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zAZ]+\.)?(gmail|yahoo|rediff|hotmail)\.com$/;
    return validRegex.test(email);
  };

  const handleSubmit = () => {
    if (formData === enteredEmail) {
      setEmailEnteredMessage("Your email is already in our notify list. Try with another email");
      setFormData("");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      if (validateEmail(formData)) {
        setIsValidEmail(true);
        setEmailEnteredMessage(null);
        setEnteredEmail(formData);
      } else {
        setIsValidEmail(false);
        setEmailEnteredMessage("Invalid email");
        setFormData("");
      }

      setIsLoading(false);
    }, 2000); // Simulate a backend action with a 2-second delay
  };

  return (
    <div className="p-4 flex lg:flex-row flex-col justify-center items-start lg:w-[600px] w-[328px] lg:h-[52px] lg:gap-8 gap-3 relative">
      <div className="w-full flex flex-col justify-center">
        <div className="p-3 text-base lg:rounded-lg border-[1.5px] border-[#4D4D4D]">
          <input
            type="email"
            name="email"
            placeholder="Please Enter Your email id"
            className="w-full focus:border-none focus:outline-none bg-transparent focus:bg-transparent"
            value={formData}
            onChange={handleChange}
          />
        </div>
        {emailEnteredMessage && <p className="text-[#FD443A] font-[--poppins]">{emailEnteredMessage}</p>}
      </div>
      <button
        onClick={handleSubmit}
        disabled={isLoading || (isValidEmail && formData === enteredEmail) || formData === ""}
        className={`${theme === "light" ? "bg-black text-white disabled:text-slate-300" : "bg-white text-black disabled:text-[#0f0f0f]"} px-2 lg:py-5 py-2 lg:rounded-lg rounded-[4px] lg:w-[190px] w-full lg:h-[48px] inline-flex items-center justify-center`}
      >
        {isLoading ? (
          <Image src="./assets/loader.svg" className="animate-spin" width={50} height={50} />
        ) : isValidEmail ? (
          <Image src={theme === "light" ? "/assets/light-check.svg" : "/assets/dark-check.svg"} width={50} height={50} />
        ) : (
          "Notify Me"
        )}
      </button>
    </div>
  );
};

export default InputBox;
