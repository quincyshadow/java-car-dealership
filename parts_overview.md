# Parts Routes

## Index

- [Home](/README.md)
- [Cars Overview](/cars_overview.md)
- [Locations Overview](/locations_overview.md)
- [Customers Overview](/customers_overview.md)
- [Transactions Overview](/transactions_overview.md)
- [Parts Overview](/parts_overview.md)

## Client Parts Routes

| Route Name       | Request Method | Example Request URL | Route                  |
| ---------------- | -------------- | ------------------- | ---------------------- |
| parts index      | `GET`          | `/parts`            | `/parts`               |
| single part page | `GET`          | `/parts/1`          | `/parts/:part_id`      |
| part new page    | `GET`          | `/parts/new`        | `/parts/new`           |
| part edit        | `GET`          | `/parts/1/edit`     | `/parts/:part_id/edit` |

## Server Parts Routes

| Route Name   | Request Method | Example Request URL | Route             |
| ------------ | -------------- | ------------------- | ----------------- |
| all parts    | `GET`          | `/parts`            | `/parts`          |
| part update  | `PATCH`        | `/parts/1/`         | `/parts/:part_id` |
| part create  | `POST`         | `/parts`            | `/parts`          |
| part destroy | `DELETE`       | `/parts/1`          | `/parts/:part_id` |

## Parts Table

| Column Name | Data Type |
| ----------- | --------- |
| id          | SERIAL    |
| part_number | STRING    |
| name        | STRING    |
| quantity    | INT       |

## User Stories

- As a user, I can see all of the parts with the name.
- As a user, when I click one of part in the list, I am taken to a page that shows me the full details about that part.
- As a user, I am able to search the list by part number
- As a user, when I click the add button, it takes me to a form that allows me to add a part to the list.
- As a user, I am able to remove a part from this list by clicking the delete button next to the part.
- As a user, I can click the edit button to take me to a form that will let me edit the part.
