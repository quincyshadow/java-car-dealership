import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TopNav from './components/layout/TopNav'
import Login from './components/auth/Login'
import Dashboard from './components/dashboard/Dashboard'
import BillPay from './components/bill-pay/BillPay'
import AccountSummary from './components/account-summary/AccountSummary'

function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/bill-pay" component={BillPay} />
          <Route path="/account/:account_id" component={AccountSummary} />
          <Route path="*" render={() => <div>Not found</div>} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
