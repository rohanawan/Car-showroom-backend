const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const carSchema = mongoose.Schema(
  {
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'category',
      required: true,
    },
    color: {
      type: String,
      required: true,
      index: true,
    },
    model: {
      type: String,
      required: true,
    },
    make: {
      type: String,
      required: true,
    },
    registraionNO: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
carSchema.plugin(toJSON);
carSchema.plugin(paginate);

/**
 * @typedef Car
 */
const Car = mongoose.model('Car', carSchema);

module.exports = Car;
