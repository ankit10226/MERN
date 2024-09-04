import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";
import { createPortal } from "react-dom";
import ErrorModal from "../../lib/ErrorModal/ErrorModal";
import Flex from "../../Components/HOC/Flex";
import sendRequest from "../../lib/utils/SendRequest";

const initialValue = { username: "", email: "", password: "", age: "" };
const initialError = {
  username: false,
  email: false,
  password: false,
  age: false,
};
const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialValue);
  const [errors, setErrors] = useState(initialError);

  const [errModal, setErrorModal] = useState(true);
  const [modalData, setModalData] = useState({
    showModal: false,
    title: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevState) => ({ ...prevState, [name]: value === "" }));
  };
  const formHandler = async (e) => {
    e.preventDefault();
    const newErrors = {
      username: formData.username === "",
      email: formData.email === "",
      password: formData.password === "",
      age: formData.age === "",
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || `HTTP error! Status: ${response.status}`
        );
      }

      setErrorModal(false);
      setModalData({
        showModal: true,
        title: "Success",
        message: data.message,
      });
    } catch (err) {
      setModalData({
        showModal: true,
        title: "An Error Occured",
        message: err.message,
      });
    }
  };

  const setHideModal = (data) => {
    setModalData((prevState) => ({
      ...prevState,
      showModal: data,
    }));
    if (errModal) {
      setFormData(initialValue);
    } else {
      navigate("/");
    }
  };
  return (
    <Flex>
      <div className="w-1/2 bg-white p-5 rounded-lg">
        {modalData.showModal &&
          createPortal(
            <ErrorModal
              title={modalData.title}
              message={modalData.message}
              hideModal={setHideModal}
            />,
            document.getElementById("modalShowContainer")
          )}

        <form onSubmit={formHandler}>
          <h3 className="font-semibold text-slate-500 text-xl">Signup User</h3>

          <Input
            type="text"
            label="Username"
            id="username"
            name="username"
            className={`${errors.username ? "border-red-500" : ""}`}
            value={formData.username}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            label="E-Mail"
            id="email"
            name="email"
            className={`${errors.email ? "border-red-500" : ""}`}
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            label="Password"
            id="password"
            name="password"
            className={`${errors.password ? "border-red-500" : ""}`}
            value={formData.password}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            label="Age"
            id="age"
            name="age"
            className={`${errors.age ? "border-red-500" : ""}`}
            value={formData.age}
            onChange={handleInputChange}
          />
          <div className="flex justify-center items-center">
            <Button type="submit">Signup</Button>
            <Link to={"/"}>
              <Button>Cancel</Button>
            </Link>
          </div>
        </form>
      </div>
    </Flex>
  );
};

export default Signup;
