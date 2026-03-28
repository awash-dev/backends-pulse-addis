const mongoose = require("mongoose");

const healthAdviceSchema = new mongoose.Schema(
  {
    conditionName: {
      type: String,
      required: true,
    },
    healthAdvice: {
      type: String,
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    image: {
      public_id: String,
      url: String,
      secure_url: String,
    },
    keySymptoms: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("HealthAdvice", healthAdviceSchema);
