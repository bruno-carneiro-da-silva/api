import {model, Schema} from 'mongoose';

//creating the object or in relational entity 'Category'
export const Category = model('Category', new Schema({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
}));

