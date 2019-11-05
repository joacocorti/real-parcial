const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PropertySchema = Schema({
  description: String,
  slug: String,
  type: String,
  price: String,
  featured: Boolean,
  currency: String,
  photo: String,
  sector: {
    type: String,
    enum: ['Banda Norte', 'Macro Centro', 'Bimaco', 'Alberdi']
  }

});

const propertyModel = mongoose.model('spacios', PropertySchema);

module.exports = propertyModel;
