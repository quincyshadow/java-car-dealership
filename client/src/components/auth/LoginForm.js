import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Card } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../store/auth/actions'
import { withRouter } from 'react-router-dom'

const LoginForm = props => {
  const styles = {
    cardStyles: {
      padding: 20
    }
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    // call our action creator
    dispatch(userLogin({ email, password }, props.history))
  }

  console.log('props in lf', props)

  return (
    <div>
      <Card style={styles.cardStyles}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="email-field">Email</Label>
            <Input
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password-field">Password</Label>
            <Input
              type="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Card>
    </div>
  )
}

export default withRouter(LoginForm)
