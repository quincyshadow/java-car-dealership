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

const NewCar = props => {

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const onSubmit = async data => {
    //All are set to null, if cannot parse or empty. >By JSON.stringify();
    data.miles = Math.round(parseFloat(data.miles));
    data.price = parseFloat(data.price);
    data.locationid = parseInt(data.locationid);
    data.year = parseInt(data.year);
    if (Number.isNaN(data.miles)) {
      data.miles = null;
    }
    if (Number.isNaN(data.price)) {
      data.miles = null;
    }
    if (Number.isNaN(data.location)) {
      data.miles = null;
    }
        if (Number.isNaN(data.year)) {
      data.miles = null;
    }

    let JSONString = JSON.stringify(data);

    console.log(data);

    let response = await axios.post("/cars", data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    if(response.data)
    {
      let id = response.data.car.id;
      // eslint-disable-next-line no-restricted-globals
      props.history.push(`/cars/${id}`);
    }

  };
  // let handleSubmit = (data) =>
  // {
  //   console.log(submitted);
  // }

  return (
    <Container className="pt-5">
      {/* {console.log(cars)} */}

      <Row className="pb-4 justify-content-center">
        <Col lg="8">
          <h2>Add a New Car</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label for="vin">VIN</Label>
              <Input type="text" name="vin" id="vin" innerRef={register} />
            </FormGroup>
            <FormGroup>
              <Label for="make">Make</Label>
              <Input type="text" name="make" id="make" innerRef={register} />
            </FormGroup>
                        <FormGroup>
              <Label for="model">Model</Label>
              <Input type="text" name="model" id="model" innerRef={register} />
            </FormGroup>
                        <FormGroup>
              <Label for="year">Year</Label>
              <Input type="text" name="year" id="year" innerRef={register({ pattern: /\d+/ })} />
            </FormGroup>
            <FormGroup>
              <Label for="photoUrl">Photo Url</Label>
              <Input type="text" name="photoUrl" id="photoUrl" innerRef={register} />
            </FormGroup>
            <FormGroup>
              <Label for="miles">Miles</Label>
              <Input
                type="number"
                name="miles"
                id="miles"
                innerRef={register({ pattern: /\d+/ })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                type="number"
                name="price"
                id="price"
                innerRef={register}
              />
            </FormGroup>
            <FormGroup>
              <Label for="locationid">Location</Label>
              <Input
                type="number"
                name="locationid"
                id="locationid"
                innerRef={register({ pattern: /\d+/ })}
              />
              {/* <select name="gender" ref={register}> */}
              {/*   <option value="male">male</option> */}
              {/*   <option value="female">female</option> */}
              {/* </select> */}
            </FormGroup>
            <Input type="submit" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default withRouter(NewCar);
