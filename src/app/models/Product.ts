import {model, Schema} from 'mongoose';

//creating the object or in relational entity 'Category'
export const Product = model('Product', new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imagePath: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  ingredients: { // setting to be required as well
    required: true,
    type: [{
      name: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      },
    }]
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  }
}));

