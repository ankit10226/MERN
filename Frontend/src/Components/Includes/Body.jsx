import React from "react"; 

const Body = (props) => {
  return (
    <div className="flex-grow w-full">
      {props.children}
    </div>
  );
};

export default Body;
