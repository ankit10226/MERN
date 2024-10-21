import React, { useState } from "react";
import Input from "../../Components/UI/Input/Input";
import Flex from "../../Components/HOC/Flex";
import Button from "../../Components/UI/Button/Button";
import useInput from "../../lib/hooks/use-input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.trim().includes('@');
const Form = () => { 
  const {
    value: firstNameValue,
    fieldValidation: firstNameErrorValidation,
    hasError: firstNameError,
    onBlurHandler: firstNameBlurHandler,
    onChangeHandler: firstNameChangeHandler,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    fieldValidation: lastNameErrorValidation,
    hasError: lastNameError,
    onBlurHandler: lastNameBlurHandler,
    onChangeHandler: lastNameChangeHandler,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    fieldValidation: emailErrorValidation,
    hasError: emailError,
    onBlurHandler: emailBlurHandler,
    onChangeHandler: emailChangeHandler,
  } = useInput(isEmail);

  let formIsNotValid = true; 
  formIsNotValid = !firstNameErrorValidation || !lastNameErrorValidation || !emailErrorValidation; 
  return (
    <Flex>
      <div className="w-1/2 bg-white p-5 rounded-lg">
        <form>
          <h3 className="font-semibold text-slate-500 text-xl">
            Form Validation
          </h3>
          <Input
            type="text"
            label="First Name"
            id="firstname"
            name="firstname"
            className={`${firstNameError ? "border-red-500" : ""}`}
            onBlur={firstNameBlurHandler}
            onChange={firstNameChangeHandler}
          />
          {firstNameError && <p className="text-red-900 font-semibold text-sm">Please Add First Name</p>}
          <Input
            type="text"
            label="Last Name"
            id="lastname"
            name="lastname"
            className={`${lastNameError ? "border-red-500" : ""}`}
            onBlur={lastNameBlurHandler}
            onChange={lastNameChangeHandler}
          />
          {lastNameError && <p className="text-red-900 font-semibold text-sm">Please Add Last Name</p>}
          <Input
            type="text"
            label="Last Name"
            id="lastname"
            name="lastname"
            className={`${emailError ? "border-red-500" : ""}`}
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
          />
          {emailError && <p className="text-red-900 font-semibold text-sm">Please Add Valid Email</p>}
          <div className="flex justify-center items-center">
            <Button type="submit" disabled={formIsNotValid}>Signup</Button>
          </div>
        </form>
      </div>
    </Flex>
  );
};

export default Form;
