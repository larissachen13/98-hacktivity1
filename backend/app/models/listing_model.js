import mongoose, { Schema } from 'mongoose';

const ListingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    validate: {
      validator: (num) => (num >= 0),
      message: 'only positive floats allowed: {VALUE}',
    },
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  creationDate: {
    type: Date,
    default: Date.Now,
  },
  lastModified: {
    type: Date,
    default: Date.Now,
  },
});

// create model class
const ListingModel = mongoose.model('Listing', ListingSchema);

export default ListingModel;
