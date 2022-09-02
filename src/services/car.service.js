const httpStatus = require('http-status');
const { Car } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Get car by registraionNO
 * @param {string} registraionNO
 * @returns {Promise<Car>}
 */
const getCarByRegistraionNO = async (registraionNO) => {
  return Car.findOne({ registraionNO });
};

/**
 * Create a car
 * @param {Object} carBody
 * @returns {Promise<Car>}
 */
const createCar = async (carBody) => {
  if (await getCarByRegistraionNO(carBody.registraionNO)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Car registraion number is already present');
  }
  return Car.create(carBody);
};

/**
 * Query for cars
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCars = async (filter, options) => {
  const cars = await Car.paginate(filter, options);
  return cars;
};

/**
 * Get car by id
 * @param {ObjectId} id
 * @returns {Promise<Car>}
 */
const getCarById = async (id) => {
  return Car.findById(id);
};

/**
 * Update car by id
 * @param {ObjectId} carId
 * @param {Object} updateBody
 * @returns {Promise<Car>}
 */
const updateCarById = async (carId, updateBody) => {
  const car = await getCarById(carId);
  if (!car) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Car not found');
  }
  Object.assign(car, updateBody);
  await car.save();
  return car;
};

/**
 * Delete car by id
 * @param {ObjectId} carId
 * @returns {Promise<Car>}
 */
const deleteCarById = async (carId) => {
  const car = await getCarById(carId);
  if (!car) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Car not found');
  }
  await car.remove();
  return car;
};

module.exports = {
  createCar,
  queryCars,
  getCarById,
  getCarByRegistraionNO,
  updateCarById,
  deleteCarById,
};
