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

// type FormData = {
//   firstName: string,
//   lastName: string
// };
import { getOneCar } from "../../store/cars/actions";

const EditCar = props => {

  

  // const [car, setCar] = React.useState('');


  const dispatch = useDispatch();

  let viewedCar = useSelector(state => state.cars.viewedCar);

  if(viewedCar != null && viewedCar.id != null)
  {
    //continue..
  }
  else
    {
      dispatch(getOneCar(props.match.params.car_id, null, props.history, "edit"));
    }

  const { register, handleSubmit, formState } = useForm();

  const onSubmit = async (data) => {
     console.log("Data to be patched:")

     let clearObj = {};

     console.log(formState.touched)
     formState.touched.forEach(input =>
       {
         if(data[input])
           {
             clearObj[input] = data[input];

              if (input == "id") {
                clearObj.id != NaN ? clearObj.id = parseInt(clearObj.id) : clearObj.id = null;
              }
              if (input == "price") {
                clearObj.price != NaN ? clearObj.price = parseFloat(clearObj.price) : clearObj.price = null;
              }
              if (input == "locationId") {
                clearObj.locationId != NaN ? clearObj.locationId = parseInt(clearObj.locationId) : clearObj.locationId = null;
              }
              if (input == "year") {
                clearObj.year != NaN ? clearObj.year = parseInt(clearObj.year) : clearObj.year = null;
              }            
              if (input == "miles") {
                clearObj.miles != NaN ? clearObj.miles = parseInt(clearObj.miles) : clearObj.miles = null;
              }
           }
       })

     console.log("new data");
     console.log(clearObj);


    let response = await axios.patch(`/cars/${data.id}`, clearObj, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    if(response.data)
    {
      let id = response.data.id;
      // eslint-disable-next-line no-restricted-globals
      dispatch(getOneCar(response.data.id, null, props.history));
    }

  };
  // let handleSubmit = (data) =>
  // {
  //   console.log(submitted);
  // }

  return (
    <Container className="pt-5">
      <Row className="pb-4 justify-content-center">
        <Col lg="8">
          <h2>Edit Car: {viewedCar.model}</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
              <Label for="id">ID</Label>
              <Input disabled type="text" defaultValue={viewedCar.id} name="id" id="id" innerRef={register({ pattern: /\d+/ })} />
            </FormGroup>
            <FormGroup>
              <Label for="vin">VIN</Label>
              <Input type="text" defaultValue={viewedCar.vin} name="vin" id="vin" innerRef={register} />
            </FormGroup>
            <FormGroup>
              <Label for="make">Make</Label>
              <Input type="text" defaultValue={viewedCar.make} name="make" id="make" innerRef={register} />
            </FormGroup>
                        <FormGroup>
              <Label for="model">Model</Label>
              <Input type="text" defaultValue={viewedCar.model} name="model" id="model" innerRef={register} />
            </FormGroup>
                        <FormGroup>
              <Label for="year">Year</Label>
              <Input type="text" defaultValue={viewedCar.year} name="year" id="year" innerRef={register({ pattern: /\d+/ })} />
            </FormGroup>
            <FormGroup>
              <Label for="photoUrl">Photo Url</Label>
              <Input type="text" defaultValue={viewedCar.photoUrl} name="photoUrl" id="photoUrl" innerRef={register} />
            </FormGroup>
            <FormGroup>
              <Label for="miles">Miles</Label>
              <Input
                defaultValue={viewedCar.miles}
                type="number"
                name="miles"
                id="miles"
                innerRef={register({ pattern: /\d+/ })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                defaultValue={viewedCar.price}
                type="number"
                name="price"
                id="price"
                innerRef={register}
              />
            </FormGroup>
            <FormGroup>
              <Label for="locationId">Location</Label>
              <Input
                defaultValue={viewedCar.location != null ? viewedCar.location.id : null}
                type="number"
                name="locationId"
                id="locationId"
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
export default withRouter(EditCar);
