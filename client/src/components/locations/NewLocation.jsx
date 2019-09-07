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
// import { getOneCar } from "../../store/cars/actions";

const NewLocation = props => {
  // const styles = {
  //   rowStyles: {
  //     marginTop: "22vh"
  //   }
  // };

  const dispatch = useDispatch();
  // let getNewCar = function() {
  //   (getOneCar(props.match.params.car_id, null, props.history));
  // }

  // useEffect(() => {
  //   getNewCar();
  // },[])

  // let carItems = [];
  //   let viewedCar = useSelector(state => state.cars.viewedCar);
  //
  //   if(viewedCar != null && viewedCar.id != null)
  //   {
  //     //continue..
  //   }
  //   else
  //     {
  //       dispatch(getOneCar(props.match.params.car_id, null, props.history));
  //     }

  // useEffect(() => {
  //   getNewCar();
  // }, []);
  // let idAndRedir = function(id)
  // {
  //   dispatch(getOneCar(id, null, props.history));
  //   // props.history.push(`/${id}`)
  // }

  // if (carList) {
  //   carItems = carList.map(item => {
  //     let card = (
  //       <Card key={item.id} className="col-4">
  //         <CardImg
  //           top
  //           width="100%"
  //           src={item.photoUrl}
  //           alt={`${item.make} ${item.model}`}
  //         />
  //         <CardBody>
  //           <CardTitle>
  //             {item.year} {item.make} {item.model}
  //           </CardTitle>
  //           <CardSubtitle>${item.price}</CardSubtitle>
  //           <CardText>
  //             <ul>
  //               <li>VIN: {item.vin}</li>
  //               <li>Miles: {item.miles}</li>
  //               <li>Location: {item.locationId}</li>
  //             </ul>
  //           </CardText>
  //           {/* <Button onClick={`./cars/${item.id}`}>View Car</Button> */}
  //           <Button onClick={() =>idAndRedir(item.id)}>View Car</Button>
  //         </CardBody>
  //       </Card>
  //     );
  //     return card;
  //   });

  // {"id":1,"vin":"ASD123","year":2019,"make":"Chevroley","model":"Cruze","miles":23,"price":20500,"photoUrl":null,"locationId":1}
  //
  //   let lg1 = (
  //     <>
  //   <Col>
  //   <ListGroup flush className="text-primary text-right">
  //         <ListGroupItem>ID</ListGroupItem>
  //         <ListGroupItem>VIN</ListGroupItem>
  //         <ListGroupItem>Year</ListGroupItem>
  //         <ListGroupItem>Make</ListGroupItem>
  //         <ListGroupItem>Model</ListGroupItem>
  //         <ListGroupItem>Miles</ListGroupItem>
  //         <ListGroupItem>Price</ListGroupItem>
  //         <ListGroupItem>Location</ListGroupItem>
  //   </ListGroup>
  //   </Col>
  //   <Col>
  //   <ListGroup className="font-weight-bold">
  //         <ListGroupItem>{viewedCar.id}</ListGroupItem>
  //         <ListGroupItem>{viewedCar.vin}</ListGroupItem>
  //         <ListGroupItem>{viewedCar.year}</ListGroupItem>
  //         <ListGroupItem>{viewedCar.make}</ListGroupItem>
  //         <ListGroupItem>{viewedCar.model}</ListGroupItem>
  //         <ListGroupItem>{viewedCar.miles}</ListGroupItem>
  //         <ListGroupItem>${viewedCar.price != null ? viewedCar.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : null}</ListGroupItem>
  //         <ListGroupItem>
  //         {viewedCar.location != null ?
  //         (<a href={"/locations/"+viewedCar.location.id} >
  //           {viewedCar.location.name}
  //         </a>)
  //           :null
  //         }
  //
  //           <hr />
  //           {viewedCar.location != null ?
  //           viewedCar.location.address :null}
  //        </ListGroupItem>
  //   </ListGroup>
  //   </Col>
  //   </>
  //     );

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
export default withRouter(NewLocation);
