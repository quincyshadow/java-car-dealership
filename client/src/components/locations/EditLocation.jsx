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
import { getOneLoc } from "../../store/locations/actions";

const EditLocation = props => {

  

  // const [car, setCar] = React.useState('');


  const dispatch = useDispatch();

  let viewedLoc = useSelector(state => state.locations.viewedLoc);

  if(viewedLoc != null && viewedLoc.id != null)
  {
    //continue..
  }
  else
    {
      dispatch(getOneLoc(props.match.params.location_id, null, props.history, "edit"));
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
           }
       })

     console.log("new data");
     console.log(clearObj);


    let response = await axios.patch(`/locations/${data.id}`, clearObj, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    if(response.data)
    {
      let id = response.data.id;
      // eslint-disable-next-line no-restricted-globals
      dispatch(getOneLoc(response.data.id, null, props.history));
    }

  };
  return (
    <Container className="pt-5">

      <Row className="pb-4 justify-content-center">
        <Col lg="8">
          <h2>Edit Location: {viewedLoc.model}</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
              <Label for="id">ID</Label>
              <Input disabled type="text" defaultValue={viewedLoc.id} name="id" id="id" innerRef={register({ pattern: /\d+/ })} />
            </FormGroup>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" defaultValue={viewedLoc.name} name="name" id="name" innerRef={register} />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input type="text" defaultValue={viewedLoc.address} name="address" id="address" innerRef={register} />
            </FormGroup>
            <Input type="submit" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default withRouter(EditLocation);
