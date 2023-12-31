import React, { useState } from "react";
import * as Yup from "yup"; // Import Yup for validation
import style from "./signup.module.css";
import google from "./google.png";

function Signup() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [validationSchema] = useState(
    Yup.object().shape({
      username: Yup.string()
        .required("Full name is required")
        .matches(/[a-zA-Z]/, "Name must contain at least one letter"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email address is required"),
      password: Yup.string().required("Password is required"),
    })
  );

  const handleChange = async (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));

    try {
      await validationSchema.validateAt(name, { [name]: value });
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="container">
      <div>Name</div>
      <div>
        <h3>Create your account.</h3>
      </div>
      <div>
        <span className="already">Already have an account?</span>{" "}
        <span className="signIn">Sign In</span>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <label>
          <h2>Full name:</h2>
          <input
            type="text"
            name="username"
            placeholder="name"
            value={inputs.username || ""}
            onChange={handleChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </label>
        <label>
          <h2>Email address:</h2>
          <input
            type="text"
            name="email"
            placeholder="example@gmail.com"
            value={inputs.email || ""}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </label>
        <label>
          <h2>Password:</h2>
          <div className="passwordInputContainer">
            <input
              type="password"
              name="password"
              placeholder="*************"
              value={inputs.password || ""}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        </label>

        <input type="submit" value="Sign Up" className="submitButton" />
      </form>
      <div className="flex-container">
        <hr className="line" />
        <div className="or">OR</div>
        <hr className="line" />
      </div>
      <div className="google" style={{ cursor: "pointer" }}>
        <img className="gLogo" src={google} alt="logo"></img>
        <div>Sign Up with Google</div>
      </div>
    </div>
  );
}

export default Signup;
