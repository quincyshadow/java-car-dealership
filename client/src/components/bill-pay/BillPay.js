import React, { useState } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  Container,
  Row,
  Col
} from 'reactstrap'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../store/auth/actions'
import { withRouter } from 'react-router-dom'

const BillPay = props => {
  const styles = {
    cardStyles: {
      padding: 20
    }
  }

  const [company, setCompany] = useState('')
  const [dollarAmount, setDollarAmount] = useState(0)
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    // call our action creator
    // dispatch(userLogin({ email, password }, props.history))
    setCompany('')
    setDollarAmount(0)
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card style={styles.cardStyles}>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Company</Label>
                <Input
                  type="select"
                  onChange={e => setCompany(e.target.value)}
                  value={company}
                >
                  <option value="subway">Subway</option>
                  <option value="jimmyjohns">Jimmy John's</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Amount</Label>
                <Input
                  type="number"
                  onChange={e => setDollarAmount(e.target.value)}
                  value={dollarAmount}
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(BillPay)
