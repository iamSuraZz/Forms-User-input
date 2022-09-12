import React from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFName,
    isValid: enteredFNameIsValid,
    hasError: FNameInputHasError,
    valueChangeHandler: FNameChangeHandler,
    inputBlurHandler: FNameBlurHandler,
    reset: resetFNameInput,
  } = useInput((value) => value !== "");

  const {
    value: enteredLName,
    isValid: enteredLNameIsValid,
    hasError: LNameInputHasError,
    valueChangeHandler: LNameChangeHandler,
    inputBlurHandler: LNameBlurHandler,
    reset: resetLNameInput,
  } = useInput((value) => value !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    resetFNameInput();
    resetLNameInput();
    resetEmailInput();
  };

  const FNameInputClasses = FNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const LNameInputClasses = LNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={FNameInputClasses}>
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            value={enteredFName}
            onChange={FNameChangeHandler}
            onBlur={FNameBlurHandler}
            type="text"
            id="f-name"
          />
          {FNameInputHasError && (
            <p className="error-text">First-name must not be empty</p>
          )}
        </div>
        <div className={LNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            value={enteredLName}
            onChange={LNameChangeHandler}
            onBlur={LNameBlurHandler}
            type="text"
            id="l-name"
          />
          {LNameInputHasError && (
            <p className="error-text">Last-name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="email"
          id="email"
        />
        {emailInputHasError && (
          <p className="error-text">Enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
