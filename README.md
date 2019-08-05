# Rest-api module
## Done exercises
  - _getAllCars() url_: 'http://localhost:3050/api/cars'.
  - _getAllCarById(2) url_: 'http://localhost:3050/api/cars/2'.
  - _addCar(car) url_: 'http://localhost:3050/api/cars'. `POST` http verb.
  - _editCar(car) url_: 'http://localhost:3050/api/car/:car.car_id'. `PUT` http verb.
   ```diff
  //There was a line (84) with a typo in cars.js inside the server folder
  //(express req.params are casted as strings and car_id is a number so strict comparison didn't work)
  -(item) => item.car_id === req.params.id
  +(item) => item.car_id === +req.params.id
  ```
  - _deleteCar(carId) url_: 'http://localhost:3050/api/car/:carId'. `DELETE` http verb.
  
    - All requests were made using axios + fetch as extra (with the special usage of await).
