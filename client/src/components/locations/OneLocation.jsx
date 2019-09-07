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
  let viewedCar = useSelector(state => state.locations.viewedLoc);

  if(viewedLoc != null && viewedLoc.id != null)
  {
    //continue..
  }
  else
    {
      dispatch(getOneLoc(props.match.params.car_id, null, props.history));
    }

  let lg1 = (
    <>
  <Col>
  <ListGroup flush className="text-primary text-right">
        <ListGroupItem>ID</ListGroupItem>
        <ListGroupItem>Name</ListGroupItem>
        <ListGroupItem>Address</ListGroupItem>
        <ListGroupItem>Cars</ListGroupItem>
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
        <ListGroupItem>
        {viewedCar.location != null ?
        (<a href={"/locations/"+viewedCar.location.id} >
          {viewedCar.location.name} 
        </a>)
          :null
        }

          <hr />
          {viewedCar.location != null ?
          viewedCar.location.address :null}
       </ListGroupItem>
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
export default withRouter(OneLocation);
