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

import { getAllCars, getOneCar, deleteOneCar } from "../../store/cars/actions";

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
  

  const [cars, setCars] = useState({});
  //
  // useEffect(() => {
  //   getCars();
  // }, []);

  let carItems = [];
  let carList = useSelector(state => state.cars.carList);

  useEffect(() => {
    getCars();
  },[])

  let idAndRedir = function(id)
  {
    dispatch(getOneCar(id, null, props.history));
    // props.history.push(`/${id}`)
  }

  let deleteAndRedir = function(id)
  {
    dispatch(deleteOneCar(id, null, props.history));
    getCars();
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
            <Button color="primary" className="mr-1" onClick={() =>idAndRedir(item.id)}>View Car</Button>
            <Button color="warning" className="float-right mr-1" href={"/cars/"+item.id+"/edit" }>Edit</Button>
            <Button color="danger" className="float-right" onClick={() => deleteAndRedir(item.id) }>Delete</Button>
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
      <Row><Col><h1>Cars</h1></Col></Row>
      <Row>{carItems}</Row>

      {/* {JSON.stringify(carList[0])} */}
      {/* {console.log("CARLIST ----")} */}
      {/* {console.log(carItems)} */}
    </Container>
  );
};

export default withRouter(AllCars);
