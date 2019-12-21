import React, { Component } from "react";
import Toaster from "../Toaster/Toaster";

import { Button, Row, Col, Container, Form } from "react-bootstrap";

export default class NameForm extends Component {
  constructor() {
    super();
    this.nameInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      nameValue: "",
      toggle: false
    };
  }

  handleChange() {
    console.log("clicked");
    const value = this.nameInput.current.value;
    this.setState({
      nameValue: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ toggle: true });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={e => this.handleSubmit(e)}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter name"
                    ref={this.nameInput}
                    onChange={() => this.handleChange()}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          <Toaster
            message={this.state.nameValue}
            showToast={this.state.toggle}
            toastColor={this.state.nameValue.length > 0 ? "green" : "red"}
          />
        </Container>
      </div>
    );
  }
}
