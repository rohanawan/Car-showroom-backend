const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCar = {
  body: Joi.object().keys({
    color: Joi.string().required(),
    category: Joi.string().custom(objectId),
    model: Joi.string().required(),
    make: Joi.string().required(),
    registraionNO: Joi.string().required(),
  }),
};

const getCars = {
  query: Joi.object().keys({
    color: Joi.string(),
    model: Joi.string(),
    category: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getCar = {
  params: Joi.object().keys({
    carId: Joi.string().custom(objectId),
  }),
};

const updateCar = {
  params: Joi.object().keys({
    carId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    color: Joi.string().required(),
    category: Joi.string().custom(objectId),
    model: Joi.string().required(),
    make: Joi.string().required(),
    registraionNO: Joi.string().required(),
  }),
};

const deleteCar = {
  params: Joi.object().keys({
    carId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCar,
  getCar,
  getCars,
  updateCar,
  deleteCar,
};
