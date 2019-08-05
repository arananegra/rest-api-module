import axios from 'axios';
import "babel-polyfill";

const baseUrl = 'http://localhost:3050';

const carsApiBaseUrls = `${baseUrl}/api/cars`;

export const getAllCars = () => {
	return new Promise(resolve =>
		axios.get(carsApiBaseUrls)
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


export const getAllCarsFetch = async () => {
	const response = await fetch(carsApiBaseUrls, {
		method: 'GET',
	});
	return await response.json();
};

export const getCarByIdFetch = async (id) => {
	const response = await fetch(`${carsApiBaseUrls}/${id}`, {
		method: 'GET',
	});
	return await response.json();
};


export const addCarFetch = async (car) => {
	await fetch(carsApiBaseUrls, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(car)
	});
};

export const editCarFetch = async (car) => {
	await fetch(`${carsApiBaseUrls}/${car.car_id}`, {
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(car)
	});
};

export const deleteCarFetch = async (carId) => {
	await fetch(`${carsApiBaseUrls}/${carId}`, {
		method: 'DELETE'
	});
};
