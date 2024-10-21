import { useReducer, useState } from "react";

const initialReducerValues = {
  enteredValue: "",
  isTouched: false,
};

const TYPES = {
  BLUR: "BLUR",
  INPUT: "INPUT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.INPUT:
      return {
        ...state,
        enteredValue: action.value,
      };

    case TYPES.BLUR:
      return {
        ...state,
        isTouched: true,
      };

    default:
      return initialReducerValues;
  }
};

const useInput = (validationValue) => {
  //   const [enteredValue, setEnteredValue] = useState("");
  //   const [isTouched, setIsTouched] = useState(false);
  const [inputState, dispatch] = useReducer(reducer, initialReducerValues);

  let fieldValidation = validationValue(inputState.enteredValue);
  let hasError = inputState.isTouched && !fieldValidation;

  const onBlurHandler = () => {
    // setIsTouched(true);
    dispatch({ type: TYPES.BLUR });
  };

  const onChangeHandler = (e) => {
    dispatch({ type: TYPES.INPUT, value: e.target.value });
    // setEnteredValue(e.target.value);
  };

  return {
    value : inputState.enteredValue,
    fieldValidation,
    hasError,
    onBlurHandler,
    onChangeHandler,
  };
};

export default useInput;
