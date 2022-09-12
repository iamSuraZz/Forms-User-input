import React from "react";
import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: enteredFName,
    isValid: FNameIsValid,
    hasError: FNameHasError,
    valueChangeHandler: FNameChangeHandler,
    inputBlurHandler: FNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: enteredLName,
    isValid: LNameIsValid,
    hasError: LNameHasError,
    valueChangeHandler: LNameChangeHandler,
    inputBlurHandler: LNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (FNameIsValid && LNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredFName + " " + enteredLName + " " + enteredEmail);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const FNameClasses = FNameHasError ? "form-control invalid" : "form-control";

  const LNameClasses = LNameHasError ? "form-control invalid" : "form-control";

  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={FNameClasses}>
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            value={enteredFName}
            onChange={FNameChangeHandler}
            onBlur={FNameBlurHandler}
            type="text"
            id="f-name"
          />
          {FNameHasError && (
            <p className="error-text">First-name must not be empty</p>
          )}
        </div>
        <div className={LNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            value={enteredLName}
            onChange={LNameChangeHandler}
            onBlur={LNameBlurHandler}
            type="text"
            id="l-name"
          />
          {LNameHasError && (
            <p className="error-text">Last-name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="email"
          id="email"
        />
        {emailHasError && <p className="error-text">Enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
