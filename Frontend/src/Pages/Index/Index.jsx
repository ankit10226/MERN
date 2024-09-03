import React from "react";
import Container from "../../Components/HOC/Container";
import Navbar from "../../Components/Includes/Navbar";
import Body from "../../Components/Includes/Body";
import Footer from "../../Components/Includes/Footer";
import Button from "../../Components/UI/Button/Button";
import homePic from "../../assets/images/homePic.png";

const Index = () => {
  return (
    <Container>
      <Navbar />
        <Body>
          <div className="grid grid-cols-2 h-full items-center">
            <div className="h-5/6 col-span-1 flex flex-col items-start justify-center">
              <Button className="rounded-md h-8 shadow w-32 bg-[#D1D3E8] text-[#232732] font-semibold my-2 cursor-pointer">
                Show Trailer
              </Button>
              <p className="text-[#24262F] font-semibold text-6xl">
                Where{" "}
                <span className="text-[#6439BA]">
                  achitects
                  <br />
                </span>{" "}
                create awesome
                <br /> things priceless
              </p>
              <p className="text-[#6E6C6D] pt-4 pb-4 text-xl">
                Find, explore and learn in an awesome <br /> place find, explore
                and learn in great.
              </p>
              <div>
                <Button className="rounded-md h-8 w-20 border border-[#6143BD] text-white font-semibold my-2 cursor-pointer bg-[#6143BD] ease-linear duration-300 mr-4">
                  Login
                </Button>
                <Button className="rounded-md h-8 shadow w-32 bg-[#D1D3E8] text-[#232732] font-semibold my-2 cursor-pointer">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="h-5/6 col-span-1 flex justify-end">
              <img src={homePic} alt="homePic" className="h-full" />
            </div>
          </div>
        </Body>
      <Footer />
    </Container>
  );
};

export default Index;
