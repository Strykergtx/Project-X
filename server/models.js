const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    email:String,
    userName:String,
    password:String,
    userId:String,
    bookings:[{
        listingId:String,
        status:Number,
        date:Date,
        }],
   });

   const SpaceSchema = new Schema ({
    name:String,
    listingId:String,
    city:String,
    description:String,
    pricing:Number,
    capacity:Number,
    detailedAddress:String,
    listedBy:String,
    features:String,
    amenities:String,
    extras:String,
    optionals:[{
        name:String,
        rental:Number,
        }],
    images:[],
    tags:[],
    currentBookings:[{
    }]
   });

const user =mongoose.model('user', UserSchema, 'users');
const space =mongoose.model('space', SpaceSchema, 'spaces');

const myModels={'user':mentee,'space':mentor}
module.exports = myModels;