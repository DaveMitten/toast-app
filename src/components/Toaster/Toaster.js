import React, { useState, useEffect } from "react";
import { Toast } from "react-bootstrap";

const Toaster = ({ message, showToast, toastColor }) => {
  const [show, setShow] = useState(showToast);

  useEffect(() => {
      setShow(showToast);
  }, [showToast]);

  console.log("showToast", showToast);
  return (
    <>
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        style={{ backgroundColor: `${toastColor}` }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        </Toast.Header>
        <Toast.Body>
          { message ? message  : "Failed Toast"}
        </Toast.Body>
      </Toast>
    </>
  );
};

export default Toaster;
