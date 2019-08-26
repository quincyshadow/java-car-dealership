# Customers Routes

## Index

- [Home](/README.md)
- [Cars Overview](/cars_overview.md)
- [Locations Overview](/locations_overview.md)
- [Customers Overview](/customers_overview.md)
- [Transactions Overview](/transactions_overview.md)
- [Parts Overview](/parts_overview.md)

## Client Routes

| Route Name      | Request Method | Example Request URL | Route                          |
| --------------- | -------------- | ------------------- | ------------------------------ |
| all customers   | `GET`          | `/customers`        | `/customers`                   |
| single customer | `GET`          | `/customers/1`      | `/customers/:customer_id`      |
| edit customer   | `GET`          | `/customers/1/edit` | `/customers/:customer_id/edit` |
| add customer    | `GET`          | `/customers/add`    | `/customers/add`               |

## Server Routes

| Route Name       | Request Method | Example Request URL | Route                     |
| ---------------- | -------------- | ------------------- | ------------------------- |
| all customers    | `GET`          | `/customers`        | `/customers`              |
| customers create | `POST`         | `/customers`        | `/customers`              |
| update customer  | `PATCH`        | `/customers/1`      | `/customers/:customer_id` |
| delete customer  | `DELETE`       | `/customers/1`      | `/customers/:customer_id` |

## Customers Table

| Column Name | Data Type |
| ----------- | --------- |
| id          | SERIAL    |
| fname       | STRING    |
| lname       | STRING    |
| email       | STRING    |
| address     | STRING    |
| phone       | STRING    |
| password    | STRING    |

- STRETCH GOAL: Could have a referred_by column with an associated "referrals" table or something

## User Stories

- As a user, when I click one of customers in the list, I am taken to a page that shows me the full details about that customer.
- As a user, when I click the add button, it takes me to a form that allows me to add a customer to the list.
- As a user, I am able to remove a customer from this list by clicking the delete button next to the customer.
- As a user, I can click the edit button to take me to a form that will let me edit the customer.
