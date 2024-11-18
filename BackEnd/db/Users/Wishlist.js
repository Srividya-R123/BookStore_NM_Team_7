
// models/WishlistItem.js

const mongoose = require('mongoose');

const wishlistItemSchema = new mongoose.Schema({
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userName:String,
    author: String,
    itemImage:String,
    genre:String,
    title:String,
    description:String,
    price:String,
});

module.exports = mongoose.model('WishlistItem', wishlistItemSchema);


