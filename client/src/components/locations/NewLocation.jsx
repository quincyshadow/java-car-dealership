import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import useForm from "react-hook-form";
import axios from "axios";

const NewLocation = props => {

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = async data => {

    let JSONString = JSON.stringify(data);
    console.log(data);

    let response = await axios.post("/locations", data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    if(response.data)
    {
      let id = response.data.id;
      // eslint-disable-next-line no-restricted-globals
      props.history.push(`/locations/${id}`);
    }

  };

  return (
    <Container className="pt-5">

      <Row className="pb-4 justify-content-center">
        <Col lg="8">
          <h2>Add a New Location</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" innerRef={register} />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input type="text" name="address" id="address" innerRef={register} />
            </FormGroup>
            <Input type="submit" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default withRouter(NewLocation);
