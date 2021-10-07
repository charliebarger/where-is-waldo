import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function WrongSelection({ setWrongAnswer }) {
  const handleClose = () => {
    alert("yoooo");
    setWrongAnswer(false);
  };

  const closeAfter7 = () => toast("Will close after 7s", { autoClose: 7000 });

  useEffect(() => {
    closeAfter7();
  }, []);
  return (
    <div onClose={handleClose}>
      <ToastContainer autoClose={8000} onClose={handleClose} />
    </div>
  );
}
export default WrongSelection;
