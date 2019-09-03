# Cars Routes

## Index

- [Home](/README.md)
- [Cars Overview](/cars_overview.md)
- [Locations Overview](/locations_overview.md)
- [Customers Overview](/customers_overview.md)
- [Transactions Overview](/transactions_overview.md)

## Client Routes

| Route Name      | Request Method | Example Request URL | Route                |
| --------------- | -------------- | ------------------- | -------------------- |
| locations index      | `GET`          | `/locations`             | `/locations`              |
| single location page | `GET`          | `/locations/1`           | `/locations/:car_id`      |
| locations edit       | `GET`          | `/locations/1/edit`      | `/locations/:car_id/edit` |
| locations new page   | `GET`          | `/locations/new`         | `/locations/new`          |

## Server Routes

| Route Name   | Request Method | Example Request URL | Route           |
| ------------ | -------------- | ------------------- | --------------- |
| all locations     | `GET`          | `/locations`             | `/locations`         |
| locations create  | `POST`         | `/locations`             | `/locations`         |
| locations update  | `PATCH`        | `/locations/1`           | `/locations/:car_id` |
| locations destroy | `DELETE`       | `/locations/1`           | `/locations/:car_id` |

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

- As a user, I can see all of the locations with the year, make, model and the dealerships they are located at.
- As a user, when I click one of locations in the list, I am taken to a page that shows me the full details about that location.
- As a user, when I click the add button, it takes me to a form that allows me to add a location to the list.
- As a user, I am able to remove a location from this list by clicking the delete button next to the location.
- As a user, I can click the edit button to take me to a form that will let me edit the location.
