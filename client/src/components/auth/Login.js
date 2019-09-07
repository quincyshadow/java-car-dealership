import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import LoginForm from './LoginForm'
const Login = props => {


  return (
    <Container>
      <Row className="mt-5">
      <Button href="/cars" className="mr-4">View All Cars</Button>
      <Button href="/locations">View All Dealerships</Button>
      </Row>
      <Row>
        <Col className="pt-3">
        <Button href="/cars/new" className="mr-4">New Car</Button>
      <Button href="/locations/new" className="mr-4">New Location</Button>
      </Col>
      </Row>
    </Container>
  )
}
export default Login
