import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TopNav from './components/layout/TopNav'
import Login from './components/auth/Login'
// import Dashboard from './components/dashboard/Dashboard'
// import BillPay from './components/bill-pay/BillPay'
// import AccountSummary from './components/account-summary/AccountSummary'

import AllCars from './components/cars/AllCars';


function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <Switch>
          <Route exact path="/" component={Login} />

          {/* <Route path="/locations" component={Locations} /> */}
          {/* <Route path="/locations/:location_id" component={LocationSummary} /> */}
          {/* <Route path="/locations/new" component={NewLocation} /> */}
          {/* <Route path="/locations/:location_id/edit" component={LocationSummaryEdit} /> */}

          <Route path="/cars" component={AllCars} />
          {/* <Route path="/cars/:car_id" component={CarSummary} /> */}
          {/* <Route path="/cars/:car_id/edit" component={CarSummaryEdit} /> */}
          {/* <Route path="/cars/new" component={NewCar} />      */}
          {/* <Route path="*" render={() => <div>Not found</div>} /> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App
