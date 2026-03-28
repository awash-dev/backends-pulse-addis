const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var prodactSubcategorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        PostedByuserId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', 
            required: true, 
        },
        image: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

//Export the model
module.exports = mongoose.model("ProductSubcategory", prodactSubcategorySchema);