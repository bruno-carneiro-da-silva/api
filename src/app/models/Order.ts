import {model, Schema} from 'mongoose';

//creating the object or in relational entity 'Category'
export const Order = model('Order', new Schema({
  table: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['WAITING','IN_PROGRESS','DONE'],
    default: 'WAITING',
  },
  createAt: {
    type: Date,
    default: Date.now, // timestamps
  },
  products: {
    required: true,
    type: [{
      product:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        default: 1
      }
    }]
  }

}));

