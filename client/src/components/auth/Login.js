import React from 'react'
import { Container, Row, Col } from 'reactstrap'
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
        <Col xs={{ size: 6, offset: 3 }}>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  )
}
export default Login
