import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
  ListGroupItem,
  ListGroup
} from "reactstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import { getOneLoc } from "../../store/locations/actions";

const OneLocation = props => {
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
  let viewedLoc = useSelector(state => state.locations.viewedLoc);

  let locCars = [];

  if(viewedLoc != null && viewedLoc.id != null)
  {
    //continue..
    locCars = viewedLoc.cars.map(item =>
      {
        let card = (
          <Card key={item.id} className="">
            <CardImg
              top
              width="100%"
              src={item.photoUrl}
              alt={`${item.make} ${item.model}`}
            />
            <CardBody>
              <CardTitle>
                {item.year} {item.make} {item.model}
              </CardTitle>
              <CardSubtitle>${item.price}</CardSubtitle>
              <CardText>
                <ul>
                  <li>VIN: {item.vin}</li>
                  <li>Miles: {item.miles}</li>
                </ul>
              </CardText>
              <a href={"/cars/"+item.id} className="btn btn-primary stretched-link">View Car</a>
              {/* <Button onClick={`./cars/${item.id}`}>View Car</Button> */}
              {/* <Button color="primary" className="mr-1" onClick={() =>idAndRedir(item.id)}>View Car</Button>
              <Button color="warning" className="float-right mr-1" href={"/cars/"+item.id+"/edit" }>Edit</Button>
              <Button color="danger" className="float-right" onClick={() => deleteAndRedir(item.id) }>Delete</Button> */}
            </CardBody>
          </Card>)
        return card;
      })
  }
  else
    {
      dispatch(getOneLoc(props.match.params.location_id, null, props.history));
    }

  let lg1 = (
    <>
  <Col>
  <ListGroup flush className="text-primary text-right">
        <ListGroupItem>ID</ListGroupItem>
        <ListGroupItem>Name</ListGroupItem>
        <ListGroupItem>Address</ListGroupItem>
  </ListGroup>
  </Col>
  <Col>
  <ListGroup className="font-weight-bold">
        <ListGroupItem>{viewedLoc.id}</ListGroupItem>
        <ListGroupItem>{viewedLoc.name}</ListGroupItem>
        <ListGroupItem>{viewedLoc.address}</ListGroupItem>
  </ListGroup>
  </Col>
  </>
    );

  return (
    <Container className="pt-5">
      {/* {console.log(cars)} */}
      <Row>
        <Col>
        {locCars}
        </Col>
        <Col md="6" xs="12">
          <Row>
            {lg1}  
          </Row>
                
        </Col>
      </Row>

      {/* {JSON.stringify(carList[0])} */}
      {/* {console.log("CARLIST ----")} */}
      {console.log(props.match.params.car_id)}
    </Container>
  );
};
export default withRouter(OneLocation);
