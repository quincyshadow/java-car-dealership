import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { getAllCars } from '../../store/cars/actions'

const AllCars = props => {

  const styles = {
    rowStyles: {
      marginTop: '22vh'
    }
  }


  const dispatch = useDispatch()
  let getCars = async function() {
    // call our action creator
    dispatch(getAllCars( null, props.history));
  }

  // const [cars, setCars] = useState({});
  // 
  // useEffect(() => {
  //   getCars();
  // }, []);

  getCars();

  const carList = useSelector(state => state.cars.carList);

  return (
    <Container>
      {/* {console.log(cars)} */}
          {JSON.stringify(carList[0])}
          {console.log("CARLIST ----")}
          {console.log(carList)}

    </Container>
  )
}
export default AllCars
