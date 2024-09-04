import React from "react";
import { useNavigate } from "react-router-dom";
import Flex from "../../Components/HOC/Flex";
import Button from "../../Components/UI/Button/Button";
import { useAuth } from "../../lib/context/AuthContext";
import Container from "../../Components/HOC/Container";
import Navbar from "../../Components/Includes/Navbar";
import Body from "../../Components/Includes/Body";
import Footer from "../../Components/Includes/Footer";

const Home = () => {
  const navigate = useNavigate();
  const { setLogout } = useAuth();

  const logoutUser = () => {
    if (confirm("Are You Sure?")) {
      setLogout();
      navigate("/");
    }
  };
  return (
    <Container>
      <Navbar />
      <Body>
        <div className="flex justify-center items-center h-full">
          <Button type="button" onClick={logoutUser}>
            Logout
          </Button>
        </div>
      </Body>
      <Footer />
    </Container>
  );
};

export default Home;
