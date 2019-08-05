import axios from 'axios';

const baseUrl = 'http://localhost:3050';

const carsApiBaseUrls = `${baseUrl}/api/cars`;

export const getAllCars = () => {
	return new Promise(resolve =>
		axios.get(`${carsApiBaseUrls}`)
			.then(response => resolve(response.data)))
};

export const getCarById = (id) => {
	return new Promise(resolve =>
		axios.get(`${carsApiBaseUrls}/${id}`)
			.then(response => resolve(response.data)))
};


export const addCar = (car) => {
	return new Promise(resolve =>
		axios.post(carsApiBaseUrls, car)
			.then(response => resolve(response.data)))
};

export const editCar = (car) => {
	return new Promise(resolve =>
		axios.put(`${carsApiBaseUrls}/${car.car_id}`, car)
			.then(response => resolve(response.data)))
};

export const deleteCar = (carId) => {
	return new Promise(resolve =>
		axios.delete(`${carsApiBaseUrls}/${carId}`)
			.then(response => resolve(response.data)))
};
