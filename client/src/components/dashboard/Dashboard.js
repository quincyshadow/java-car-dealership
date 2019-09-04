import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
// import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
const Dashboard = props => {
  // const user = useSelector(state => state.auth.user)
  return (
    <div>
      <h1>Hello, {props.user.name}</h1>
      <h2>Accounts</h2>
      <ListGroup>
        <ListGroupItem onClick={() => props.history.push('/account/42230')}>
          ...-42230
        </ListGroupItem>
      </ListGroup>

      <h2>Bill Pay</h2>
      <ListGroup>
        <ListGroupItem onClick={() => props.history.push('/bill-pay')}>
          Subway...
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}
const mapStateToProps = state => ({
  user: state.auth.user
})
export default connect(mapStateToProps)(Dashboard)
