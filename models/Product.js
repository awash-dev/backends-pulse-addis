const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const colorSchema = new mongoose.Schema({
  color: { type: String, required: true },
  image: { type: String, required: true }, 
});

var productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
      default: 100.0,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
      default: 0,
    },
    PostedByuserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
      required: true, 
    },
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Store', 
      required: true
    },
    ProductApproved:{
      type: String,
    enum: ['pending', 'approved', 'rejected'], 
    default: 'pending',
    },
    rejectionReason: {
      type: Object, 
      default: null, 
    },
    colors: [
      {
        color: { type: mongoose.Schema.Types.ObjectId, ref: "Color" },
        images: [
          {
            public_id: { type: String },
            secure_url: { type: String },
          },
        ],
      },
    ],
<<<<<<< HEAD
=======
    // ── Pharmacy-specific fields ──
    strength: {
      type: String,
      default: null, // e.g. "500mg", "10ml", "250mg/5ml"
    },
    requiresPrescription: {
      type: Boolean,
      default: false,
    },
    prescriptionPlans: [
      {
        planName: { type: String }, // e.g. "Weekly Plan", "Monthly Pack"
        duration: { type: String }, // e.g. "7 days", "30 days"
        dosage: { type: String },   // e.g. "1 tablet twice daily"
        price: { type: Number },
        description: { type: String },
      },
    ],
>>>>>>> ec22384 (Initialize backend repository)
    tags: [String],
    ratings: [
      {
        star: Number,
        comment: String,
        postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
    totalrating: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Product", productSchema);
