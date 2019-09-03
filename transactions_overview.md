# Transactions Routes

## Index

- [Home](/README.md)
- [Cars Overview](/cars_overview.md)
- [Locations Overview](/locations_overview.md)
- [Customers Overview](/customers_overview.md)
- [Transactions Overview](/transactions_overview.md)
- [Parts Overview](/parts_overview.md)

## Client Routes

| Route Name         | Request Method | Example Request URL    | Route                                |
| ------------------ | -------------- | ---------------------- | ------------------------------------ |
| all transactions   | `GET`          | `/transactions`        | `/transactions`                      |
| single transaction | `GET`          | `/transactions/1`      | `/transactions/:transaction_id`      |
| edit transaction   | `GET`          | `/transactions/1/edit` | `/transactions/:transaction_id/edit` |
| add transaction    | `GET`          | `/transactions/add`    | `/transactions/add`                  |

## Server Routes

| Route Name          | Request Method | Example Request URL | Route                           |
| ------------------- | -------------- | ------------------- | ------------------------------- |
| all transactions    | `GET`          | `/transactions`     | `/transactions`                 |
| transactions create | `POST`         | `/transactions`     | `/transactions`                 |
| update transaction  | `PATCH`        | `/transactions/1`   | `/transactions/:transaction_id` |
| delete transaction  | `DELETE`       | `/transactions/1`   | `/transactions/:transaction_id` |

## transactions Table

| Column Name  | Data Type |
| ------------ | --------- |
| id           | SERIAL    |
| customer     | CUSTOMER  |
| location          | CAR       |
| date         | DATE      |
| amt          | INT       |
| has_warranty | BOOLEAN   |

## User Stories

- As a user, when I click one of transactions in the list, I am taken to a page that shows me the full details about that transaction.
- As a user, when I click the add button, it takes me to a form that allows me to add a transaction to the list.
- As a user, I am able to remove a transaction from this list by clicking the delete button next to the transaction.
- As a user, I can click the edit button to take me to a form that will let me edit the transaction.
