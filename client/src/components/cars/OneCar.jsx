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

import { getOneCar } from "../../store/cars/actions";

const OneCar = props => {
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
  let viewedCar = useSelector(state => state.cars.viewedCar);

  if(viewedCar.id != null)
  {
  }
  else
    {
      dispatch(getOneCar(props.match.params.car_id, null, props.history));
    }

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

  //{"id":1,"vin":"ASD123","year":2019,"make":"Chevroley","model":"Cruze","miles":23,"price":20500,"photoUrl":null,"locationId":1}

  let lg1 = (
    <>
  <Col>
  <ListGroup flush className="text-primary text-right">
        <ListGroupItem>ID</ListGroupItem>
        <ListGroupItem>VIN</ListGroupItem>
        <ListGroupItem>Year</ListGroupItem>
        <ListGroupItem>Make</ListGroupItem>
        <ListGroupItem>Model</ListGroupItem>
        <ListGroupItem>Miles</ListGroupItem>
        <ListGroupItem>Price</ListGroupItem>
        <ListGroupItem>Location</ListGroupItem>
  </ListGroup>
  </Col>
  <Col>
  <ListGroup className="font-weight-bold">
        <ListGroupItem>{viewedCar.id}</ListGroupItem>
        <ListGroupItem>{viewedCar.vin}</ListGroupItem>
        <ListGroupItem>{viewedCar.year}</ListGroupItem>
        <ListGroupItem>{viewedCar.make}</ListGroupItem>
        <ListGroupItem>{viewedCar.model}</ListGroupItem>
        <ListGroupItem>{viewedCar.miles}</ListGroupItem>
        <ListGroupItem>${viewedCar.price != null ? viewedCar.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : null}</ListGroupItem>
        <ListGroupItem>{viewedCar.locationId}</ListGroupItem>
  </ListGroup>
  </Col>
  </>
    );

  return (
    <Container className="pt-5">
      {/* {console.log(cars)} */}
      <Row>
        <Col>
          <img src={viewedCar.photoUrl} className="img-fluid" />
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
export default withRouter(OneCar);
