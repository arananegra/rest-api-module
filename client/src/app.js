import {addCarRows, cleanTable, populateEditCarForm, retrieveCarForm, retrieveCarId,} from './uiHelpers';
import {addCar, deleteCar, editCar, getAllCars, getCarById} from './API/carsApi';

document.addEventListener('DOMContentLoaded', () => {
	const buttonLoadCars = document.getElementById('loadcars');
	buttonLoadCars.addEventListener('click', (event) => {
		event.stopPropagation();
		cleanTable('cars-table');
		getAllCars().then((result) => {
			addCarRows(result, 'cars-table');
		});
	});

	const buttonLoadCar = document.getElementById('loadcar');
	buttonLoadCar.addEventListener('click', (event) => {
		event.stopPropagation();
		const carId = retrieveCarId();
		getCarById(carId)
			.then((r) => populateEditCarForm(r));
	});

	const buttonAddCar = document.getElementById('add');
	buttonAddCar.addEventListener('click', (event) => {
		event.stopPropagation();
		event.preventDefault();
		const car = retrieveCarForm();
		addCar(car)
			.then((_) => {
				cleanTable('cars-table');
				return getAllCars();
			})
			.then((result) => {
				addCarRows(result, 'cars-table');
			});
	});

	const buttonEditCar = document.getElementById('edit');
	buttonEditCar.addEventListener('click', (event) => {
		event.stopPropagation();
		event.preventDefault();
		const car = retrieveCarForm();
		car.car_id = retrieveCarId();
		editCar(car)
			.then((_) => {
				cleanTable('cars-table');
				return getAllCars();
			})
			.then((result) => {
				addCarRows(result, 'cars-table');
			});
	});

	const buttonDeleteCar = document.getElementById('delete');
	buttonDeleteCar.addEventListener('click', (event) => {
		event.stopPropagation();
		event.preventDefault();
		const carId = retrieveCarId();
		deleteCar(carId)
			.then((_) => {
				cleanTable('cars-table');
				return getAllCars();
			})
			.then((result) => {
				addCarRows(result, 'cars-table');
			});
	});
});
