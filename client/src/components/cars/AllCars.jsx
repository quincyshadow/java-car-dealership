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
  CardBody
} from "reactstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { withRouter } from 'react-router-dom';

import { getAllCars, getOneCar } from "../../store/cars/actions";

const AllCars = props => {
  const styles = {
    rowStyles: {
      marginTop: "22vh"
    }
  };

  const dispatch = useDispatch();
  let getCars = function() {
    dispatch(getAllCars(null, props.history));
  }
  
  useEffect(() => {
    getCars();
  },[])

  const [cars, setCars] = useState({});
  //
  // useEffect(() => {
  //   getCars();
  // }, []);

  let carItems = [];
  let carList = useSelector(state => state.cars.carList);

  let idAndRedir = function(id)
  {
    dispatch(getOneCar(id, null, props.history));
    // props.history.push(`/${id}`)
  }

  if (carList) {
    carItems = carList.map(item => {
      let card = (
        <Card key={item.id} className="col-4">
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
                <li>Location: {item.locationId}</li>
              </ul>
            </CardText>
            {/* <Button onClick={`./cars/${item.id}`}>View Car</Button> */}
            <Button onClick={() =>idAndRedir(item.id)}>View Car</Button>
          </CardBody>
        </Card>
      );
      return card;
    });

    //{"id":1,"vin":"ASD123","year":2019,"make":"Chevroley","model":"Cruze","miles":23,"price":20500,"photoUrl":null,"locationId":1}
  }

  return (
    <Container>
      {/* {console.log(cars)} */}
      <Row>{carItems}</Row>

      {/* {JSON.stringify(carList[0])} */}
      {/* {console.log("CARLIST ----")} */}
      {/* {console.log(carItems)} */}
    </Container>
  );
};

export default withRouter(AllCars);
