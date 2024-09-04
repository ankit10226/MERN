import React from "react";
import Flex from "../../Components/HOC/Flex";

const NotFound = () => {
  return (
    <Flex>
      <div>
        <h1 className="text-5xl font-bold mb-4">404 Not Found</h1>
        <p className="text-xl mb-8">
          The page you are looking for does not exist.
        </p>
      </div>
    </Flex>
  );
};

export default NotFound;
