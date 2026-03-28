const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Blog = require("./models/Blog");
const Product = require("./models/Product");

dotenv.config();

const specialOfferAds = [
  {
    title: "Prenatal Vitamins & Supplements",
    description:
      "Get 20% off all top-tier prenatal care and maternal multivitamins today.",
    category: "Special Offers",
    subcategory: "supplements",
    images: [
      {
        secure_url:
          "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
  {
    title: "Diabetic Care Equipment Deals",
    description:
      "Upgrade your testing kits with modern accurate Glucometers - discounted exclusively.",
    category: "Special Offers",
    subcategory: "equipment",
    images: [
      {
        secure_url:
          "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
  {
    title: "Baby Care Essentials",
    description:
      "Premium diapers and delicate skin care products available at lowest market prices in Addis.",
    category: "Special Offers",
    subcategory: "baby",
    images: [
      {
        secure_url:
          "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
  {
    title: "Heart Health Meds",
    description:
      "Monthly subscription discounts for blood pressure monitors and supplements.",
    category: "Special Offers",
    subcategory: "medicine",
    images: [
      {
        secure_url:
          "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
];

const seedData = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Clear old special offers
    await Blog.deleteMany({ category: "Special Offers" });
    console.log("Cleared old Special Offers");

    // Insert new
    await Blog.insertMany(specialOfferAds);
    console.log(
      "Inserted new generic Special Offers Ads with reliable imagery",
    );

    // Update products for "Top Trends" and "Super Deals"
    const products = await Product.find({}).limit(16);
    if (products.length < 4) {
      console.log(
        "Not enough products in DB to seed trends. Try creating some from admin panel.",
      );
      process.exit();
    }

    let index = 0;
    for (let product of products) {
      let updatedTags = Array.isArray(product.tags) ? [...product.tags] : [];
      if (index < 4) {
        if (!updatedTags.includes("trending")) updatedTags.push("trending");
        if (!updatedTags.includes("popular")) updatedTags.push("popular");
      } else if (index >= 4 && index < 8) {
        if (!updatedTags.includes("vip")) updatedTags.push("vip");
      } else if (index >= 8 && index < 12) {
        if (!updatedTags.includes("flash sale")) updatedTags.push("flash sale");
      } else {
        if (!updatedTags.includes("10 day discount"))
          updatedTags.push("10 day discount");
      }

      product.tags = updatedTags;
      await product.save();
      index++;
    }

    console.log("Updated Tags for Top Trends, Super Deals & Extra Tag blocks!");

    console.log("Data Seceding Completed successfully!");
    process.exit();
  } catch (error) {
    console.error("Error with data seeding", error);
    process.exit(1);
  }
};

seedData();
