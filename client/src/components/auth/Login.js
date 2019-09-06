import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import LoginForm from './LoginForm'
const Login = props => {
  const styles = {
    rowStyles: {
      marginTop: '22vh'
    }
  }

  return (
    <Container>
      <Row style={styles.rowStyles}>
      <Button href="/cars" className="mr-4">View All Cars</Button>
      <Button href="/locations">View All Dealerships</Button>
      </Row>
    </Container>
  )
}
export default Login
