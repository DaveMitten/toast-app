import React, { useState } from "react";
import Toaster from "../Toaster/Toaster";

import { Button, Row, Col, Container } from "react-bootstrap";

const FailedToast = () => {
  const [show, setShow] = useState(false);
  const failure = "red";

  console.log("showToast", show);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Button onClick={() => setShow(true)}> Show Failed Toast</Button>
            <Toaster toastColor={failure} showToast={show} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FailedToast;
