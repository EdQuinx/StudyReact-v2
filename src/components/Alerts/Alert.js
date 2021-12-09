import React from "react";

const Alert = (message) => {
  const [showAlert, setShowAlert] = React.useState(true);
  return (
    <>
      <div className="bg-gray-200 relative text-gray-600 py-3 px-3 rounded-lg">
        A simple secondary alert—check it out!
      </div>
    </>
  );
};

export default Alert;