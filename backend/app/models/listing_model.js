import mongoose, { Schema } from 'mongoose';

const ListingSchema = new Schema({});

// create model class
const ListingModel = mongoose.model('Listing', ListingSchema);

export default ListingModel;
