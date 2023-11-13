import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";

const InputPasssaword = () => {
  const [type, setType] = useState("password");
  const [show, setShow] = useState(false);
  const switchVisibility = (visibility) => {
    setShow(visibility);
    setType(visibility ? "text" : "password");
  };

  return (
    <div className="input-password">
      <input type={type} />
      {!show && (
        <AiOutlineEye
          className="password-icon"
          onClick={() => switchVisibility(true)}
        />
      )}
      {show && (
        <AiOutlineEyeInvisible
          className="password-icon"
          onClick={() => switchVisibility(false)}
        />
      )}
    </div>
  );
};

export default InputPasssaword;
