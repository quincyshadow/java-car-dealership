import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TopNav from './components/layout/TopNav'
import Login from './components/auth/Login'
// import Dashboard from './components/dashboard/Dashboard'
// import BillPay from './components/bill-pay/BillPay'
// import AccountSummary from './components/account-summary/AccountSummary'
import AllCars from './components/cars/AllCars';
import OneCar from './components/cars/OneCar'
import NewCar from './components/cars/NewCar'
import EditCar from './components/cars/EditCar'
import OneLocation from './components/locations/OneLocation'
import AllLocations from './components/locations/AllLocations'
import EditLocation from './components/locations/EditLocation'
import NewLocation from './components/locations/NewLocation'

function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <Switch>
          <Route exact path="/" component={Login} />

          <Route exact path="/locations" component={AllLocations} />
          <Route exact path="/locations/new" component={NewLocation} />
          <Route exact path="/locations/:location_id" component={OneLocation} />
          <Route exact path="/locations/:location_id/edit" component={EditLocation} />
          {/* <Route path="/locations/:location_id/edit" component={LocationSummaryEdit} /> */}

          <Route exact path="/cars" component={AllCars} />
          <Route exact path="/cars/new" component={NewCar} />  
          <Route exact path="/cars/:car_id" component={OneCar} />
          <Route path="/cars/:car_id/edit" component={EditCar} />   
          {/* <Route path="*" render={() => <div>Not found</div>} /> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App
