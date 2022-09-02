const express = require('express');
// const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { carValidation } = require('../../validations');
const { carController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(validate(carValidation.createCar), carController.createCar)
  .get(validate(carValidation.getCars), carController.getCars);

router
  .route('/:carId')
  .get(validate(carValidation.getCar), carController.getCar)
  .patch(validate(carValidation.updateCar), carController.updateCar)
  .delete(validate(carValidation.deleteCar), carController.deleteCar);

module.exports = router;
