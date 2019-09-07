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

import { getAllLocs, getOneLoc, deleteOneLoc } from "../../store/locations/actions";

const AllLocations = props => {
  const styles = {
    rowStyles: {
      marginTop: "22vh"
    }
  };

  const dispatch = useDispatch();
  let getLocs = function() {
    dispatch(getAllLocs(null, props.history));
  }
  

  const [locs, setLocs] = useState({});
  //
  // useEffect(() => {
  //   getCars();
  // }, []);

  let locItems = [];
  let locList = useSelector(state => state.locations.locList);

  useEffect(() => {
    getLocs();
  },[locList])
  let idAndRedir = function(id)
  {
    dispatch(getOneLoc(id, null, props.history));
    // props.history.push(`/${id}`)
  }

  let deleteAndRedir = function(id)
  {
    dispatch(deleteOneLoc(id, null, props.history));
    getLocs();
  }

  if (locList) {
    locItems = locList.map(item => {
      let card = (
        <Card key={item.id} className="col-4">
          {/* <CardImg */}
          {/*   top */}
          {/*   width="100%" */}
          {/*   src={item.photoUrl} */}
          {/*   alt={`${item.make} ${item.model}`} */}
          {/* /> */}
          <CardBody>
            <CardTitle>
              <h4>{item.name}</h4>
            </CardTitle>
            <CardSubtitle>{item.address}</CardSubtitle>
            <CardText>
              Please come visit us. We are open.
              Cars in Inventory: <mark>{item.cars.length}</mark>
              {/* <ul> */}
              {/*   <li>VIN: {item.vin}</li> */}
              {/*   <li>Miles: {item.miles}</li> */}
              {/*   <li>Location: {item.locationId}</li> */}
              {/* </ul> */}
            </CardText>
            {/* <Button onClick={`./cars/${item.id}`}>View Car</Button> */}
            <Button color="primary" className="mr-1" onClick={() =>idAndRedir(item.id)}>View Location</Button>
            <Button color="warning" className="float-right mr-1" href={"/location/"+item.id+"/edit" }>Edit</Button>
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
      {/* <p>Loclist is {locList != null ? JSON.stringify(locList[0]) : 'null at position 0'}</p> */}
      <Row><Col><h2>Locations</h2></Col></Row>
      <Row>{locItems}</Row>

      {/* {JSON.stringify(locList[0])} */}
      {/* {console.log("CARLIST ----")} */}
      {/* {console.log(carItems)} */}
    </Container>
  );
};

export default withRouter(AllLocations);
