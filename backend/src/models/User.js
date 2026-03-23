const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    addresses: [{
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true }
    }],
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    profilePicture: { type: String }
}, { timestamps: true });

// Define authentication methods
userSchema.methods.isValidPassword = function(password) {
    return this.password === password; // In a real application, use hashing
};

const User = mongoose.model('User', userSchema);

module.exports = User;