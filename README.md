***NOTICE FOR WSL***
Please restart mySQL server upon entering WSL (If it is not started or in an error state).
```
sudo service mysql restart
```
1. Please create a mysql db.
```
mysql -uroot -e "create database if not exists java_car_dealership;"
```
(For testing purposes, you can manually drop tables with the format...)
```
mysql -uroot java_car_dealership;
#Then,
drop table cars;
drop table locations;
```
(These tables are automatically generated when Java/Spring server starts, as long as the database exists.)

2. Please start the Java/Spring backend api. To do this from the root dir, it is 
```
./gradlew bootRun
```

3. Please execute the client npm script.
```
npm start
```
### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
Your app is ready to be deployed!

# Car Dealership Management Tool

## Summary

You were tasked to create a location dealership management tool for a used location dealer with multiple locations.

The base goals of this project will create a basic vehicle inventory management tool. The stretch goals will add customer and purchase management, as well, making it a pretty solid dealer management software. (Not that I know how to run a dealership. I'm a dev. What do I know...) The nightmare mode and nightmare mode+ are just insane. You have to want it...do you?

> NOTE: You won't want to fork this repo, as it could be subject to alterations and/or additions as time goes on.

### Index

- [Home](/README.md)
- [Cars Overview](/cars_overview.md)
- [Locations Overview](/locations_overview.md)
- [Customers Overview](/customers_overview.md)
- [Transactions Overview](/transactions_overview.md)
- [Parts Overview](/parts_overview.md)

### Client Component Tree

- [Click here](https://www.lucidchart.com/invitations/accept/6b87f693-f0fd-451e-8e94-72eef2d629aa)

### Main Features

- Base Goals

  - Show all locations
  - Show single location details
  - Add/Edit location
  - Show all locations
  - Show single location and their inventory
  - Add/Edit location

  > NOTE: `/` is a login/signup page

- Stretch Goals

  - Show all customers
  - Show single customer
  - Add/Edit customer
  - Show all transactions
  - Show single transaction
  - Add/Edit transaction

- Nightmare Mode

  - Add employee management
    - Employee productivity/performance
    - Track different employees in different departments (parts, sales, service, etc.)
  - Add a parts department (sales and inventory management)
    - Make transactions a join table and differentiate types of sales, maybe?
  - Add a service department
    - Current jobs / parts used / invoices / customers...
  - Add sales analytics
    - Use data visualization libraries like chartsjs or the like.

- Nightmare Mode+

  - Add customer acquisition functionality
    - Mailchimp integration, Send email via MailGun, etc.
  - Add online purchase functionality
    - Stripe integration
