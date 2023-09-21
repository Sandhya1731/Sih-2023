import React from "react";
import style1 from "../Login/signup.module.css";
import { useState, useEffect } from "react";

import google from "../images/google.png";

function Login() {
  // const [inputs, setInputs] = useState({});

  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");

  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);

  const handleSubmit = () => {
    if (formError) {
      alert("saved");

      window.location.href = `/abc/`;
    }
  };
  let formError = true;
  const formhandler = () => {
    formError = true;

    if (password.length < 1) {
      setCheckPassword(true);
      formError = false;
    } else {
      setCheckPassword(false);
    }
    if (email.length < 1) {
      setCheckEmail(true);
      formError = false;
    } else {
      setCheckEmail(false);
    }
  };

  useEffect(() => {
    formhandler();
  }, [email, password]);
  return (
    <div className={style1.container}>
      <div>Name</div>
      <div>
        <h3>Login</h3>
      </div>
      <div>
        <span className={style1.already}>New user?</span>{" "}
        <span className={style1.signIn}>Sign Up</span>
      </div>

      <form noValidate>
        <label>
          <h2>Email address:</h2>
          <input
            type="text"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {checkEmail ? (
            <div className={style1.errormsg}>Please enter the email</div>
          ) : null}
        </label>
        <label>
          <h2>Password:</h2>
          <div className={style1.passwordInputContainer}>
            <input
              type="password"
              name="password"
              placeholder="*************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {checkPassword ? (
              <div className={style1.errormsg}>Please enter the password</div>
            ) : null}
          </div>
        </label>

        <input
          type="button"
          value="Login"
          className={style1.submitButton}
          onClick={() => handleSubmit()}
        />
      </form>

      <div className={style1.flexContainer}>
        <hr className={style1.line} />
        <div className={style1.or}>OR</div>
        <hr className={style1.line} />
      </div>
      <div className={style1.google} style={{ cursor: "pointer" }}>
        <img className={style1.gLogo} src={google} alt="logo"></img>
        <div>Login with Google</div>
      </div>
    </div>
  );
}

export default Login;
