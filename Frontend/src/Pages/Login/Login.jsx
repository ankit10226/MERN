import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button"; 
import { createPortal } from "react-dom";
import Flex from "../../Components/HOC/Flex";
import ErrorModal from "../../lib/ErrorModal/ErrorModal";
import { useAuth } from "../../lib/context/AuthContextProvider";

const initialValue = { username: "", password: "" };
const initialError = { username: false, password: false };
const Login = () => {
  const navigate = useNavigate();
  const { setLogin } = useAuth();

  const [formData, setFormData] = useState(initialValue);
  const [errors, setErrors] = useState(initialError); 
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
      password: formData.password === "",
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }
 

    try {
      // const res = await axios.post("http://localhost:5000/login", formData);
      const response = await fetch("http://localhost:5000/login", {
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
 
      setLogin({
        token: data.token,
        username: data.username,
        id: data.id,
        isLoggedIn: true,
      });
      navigate("/home");
    } catch (err) {
      console.log(err);
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
    setFormData(initialValue);
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
          <h3 className="font-semibold text-slate-500 text-xl">Login User</h3>
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
            label="Password"
            id="password"
            name="password"
            className={`${errors.password ? "border-red-500" : ""}`}
            value={formData.password}
            onChange={handleInputChange}
          />
          <div className="flex justify-center items-center">
            <Button type="submit">Login</Button>
            <Link to={"/signup"}>
              <Button>Signup</Button>
            </Link>
          </div>
        </form>
      </div>
    </Flex>
  );
};

export default Login;
