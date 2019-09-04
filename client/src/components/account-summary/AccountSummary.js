import React from 'react'
const AccountSummary = props => {
  return (
    <div>
      <p>
        Account Summary view for account number: {props.match.params.account_id}
      </p>
    </div>
  )
}
export default AccountSummary
