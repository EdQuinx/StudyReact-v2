import React from "react";

const Alert = ({message}) => {
  const [showAlert, setShowAlert] = React.useState(true);
  return (
    <>
      <div className="h-24 w-24 bg-white rounded-lg shadow-xl transform hover:translate-y-48 transition-transform ease-in-out duration-1000">
        A simple secondary alert—check it out!
      </div>
    </>
  );
};

export default Alert;