# Cars Routes

## Index

- [Home](/)
- [Cars Overview](/cars_overview.md)
- [Locations Overview](/locations_overview.md)
- [Customers Overview](/customers_overview.md)
- [Transactions Overview](/transactions_overview.md)

## Client Routes

| Route Name      | Request Method | Example Request URL | Route                |
| --------------- | -------------- | ------------------- | -------------------- |
| cars index      | `GET`          | `/cars`             | `/cars`              |
| single car page | `GET`          | `/cars/1`           | `/cars/:car_id`      |
| cars edit       | `GET`          | `/cars/1/edit`      | `/cars/:car_id/edit` |
| cars new page   | `GET`          | `/cars/new`         | `/cars/new`          |

## Server Routes

| Route Name   | Request Method | Example Request URL | Route           |
| ------------ | -------------- | ------------------- | --------------- |
| all cars     | `GET`          | `/cars`             | `/cars`         |
| cars create  | `POST`         | `/cars`             | `/cars`         |
| cars update  | `PATCH`        | `/cars/1`           | `/cars/:car_id` |
| cars destroy | `DELETE`       | `/cars/1`           | `/cars/:car_id` |

## Cars Table

| Column Name | Data Type |
| ----------- | --------- |
| id          | SERIAL    |
| vin         | STRING    |
| year        | INT       |
| make        | STRING    |
| model       | STRING    |
| miles       | INT       |
| price       | INT       |
| photo_url   | STRING    |
| location_id | INT       |

- For scalability and analytics, you might consider normalizing this data a little more into separate tables, however, it's not required.

## User Stories

- As a user, I can see all of the cars with the year, make, model and the dealerships they are located at.
- As a user, when I click one of cars in the list, I am taken to a page that shows me the full details about that car.
- As a user, when I click the add button, it takes me to a form that allows me to add a car to the list.
- As a user, I am able to remove a car from this list by clicking the delete button next to the car.
- As a user, I can click the edit button to take me to a form that will let me edit the car.
