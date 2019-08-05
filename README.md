# Rest-api module
## Done exercises
  - _getAllCars() url_: 'http://localhost:3050/api/cars'.
  - _getAllCarById(2) url_: 'http://localhost:3050/api/cars/2'.
  - _addCar(car) url_: 'http://localhost:3050/api/cars'. `POST` http verb.
  - _editCar(car) url_: 'http://localhost:3050/api/car/:car.car_id'. `PUT` http verb.
   ```diff
  //There was a line with a typo in cars.js inside server folder --> line 84
  -(item) => item.car_id === req.params.id            
  +(item) => item.car_id === +req.params.id
  ```
  - _deleteCar(carId) url_: 'http://localhost:3050/api/car/:carId'. `DELETE` http verb.
