
### Client Location Routes
| Route Name           | Request Method | Example Request URL    |  Route                   
|----------------------|----------------|------------------------|----------------------
| location index       | `GET`          | `/locations`            |  `/locations`
| single location page | `GET`          | `/locations/1`          |  `/locations/:location_id`
| location new page    | `GET`          | `/locations/new`        |  `/locations/new`
| location edit        | `GET`          | `/locations/1/edit`     |  `/locations/:location_id/edit`

### Server Location Routes
| Route Name         | Request Method | Example Request URL |  Route                   
|--------------------|----------------|---------------------|----------------------
| all locations      | `GET`          | `/locations`         |  `/locations`
| location update    | `PATCH`        | `/locations/1/`      |  `/locations/:location_id`
| location create    | `POST`         | `/locations`         |  `/locations`
| location destroy   | `DELETE`       | `/locations/1`       |  `/locations/:location_id`

### Locations Table
| Column Name    | Data Type             
|----------------|----------------
| id             | SERIAL          
| name           | STRING    
| address        | STRING     

### User Stories
* As a user, I can see all of the locations with the name.
* As a user, when I click one of location in the list, I am taken to a page that shows me the full details about that location.
* As a user, when I click the add button, it takes me to a form that allows me to add a location to the list.
* As a user, I am able to remove a location from this list by clicking the delete button next to the location.
* As a user, I can click the edit button to take me to a form that will let me edit the location.
