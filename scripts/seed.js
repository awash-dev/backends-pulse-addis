const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const Brand = require("../models/Brand");
const Product = require("../models/Product");
const Category = require("../models/ProductCategory");
const Subcategory = require("../models/ProductSubcategory");
const User = require("../models/User");
const Store = require("../models/Store");
const Blog = require("../models/Blog");
const Color = require("../models/Color");
const Discount = require("../models/promotion");

const {
  pharmacyAds,
  pharmacyBrands,
  pharmacyCategories,
  pharmacyColorTitles,
  pharmacyProducts,
  pharmacySubcategories,
  getProductImageSetByCategory,
} = require("./pharmacySeedData");

const MONGO_DB_URL = process.env.MONGO_DB_URL || process.env.MONGODB_URL;

const makeSlug = (value, index) =>
  `${String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}-${Date.now()}-${index}`;

const connectDB = async () => {
  if (!MONGO_DB_URL) {
    throw new Error("Missing MongoDB URL. Set MONGO_DB_URL or MONGODB_URL.");
  }
  await mongoose.connect(MONGO_DB_URL);
  console.log("MongoDB connected.");
};

const getAdminUser = async () => {
  const admin = await User.findOne({ role: { $in: ["admin", "superAdmin"] } });
  if (!admin) {
    throw new Error(
      "No admin/superAdmin user found. Create one before seeding.",
    );
  }
  return admin;
};

const seedData = async () => {
  await connectDB();
  try {
    console.log("Cleaning existing data...");
    await Promise.all([
      Brand.deleteMany({}),
      Product.deleteMany({}),
      Category.deleteMany({}),
      Subcategory.deleteMany({}),
      Store.deleteMany({}),
      Blog.deleteMany({}),
      Color.deleteMany({}),
      Discount.deleteMany({}),
    ]);

    const admin = await getAdminUser();
    const adminId = admin._id;

    console.log("Seeding store and colors...");
    const store = await Store.create({
      storeId: "PHARM-ET-001",
      storeName: "RiseTech Ethiopia Pharmacy",
      owner_id: adminId,
      address: "Addis Ababa, Bole",
    });

    const colors = await Color.insertMany(
      pharmacyColorTitles.map((title) => ({
        title,
        PostedByuserId: adminId,
      })),
    );

    console.log("Seeding categories and subcategories...");
    await Category.insertMany(
      pharmacyCategories.map((item) => ({
        title: item.title,
        image: item.image,
        PostedByuserId: adminId,
      })),
    );

    await Subcategory.insertMany(
      pharmacySubcategories.map((item) => ({
        title: item.title,
        image: item.image,
        PostedByuserId: adminId,
      })),
    );

    console.log("Seeding brands...");
    await Brand.insertMany(
      pharmacyBrands.map((title) => ({
        title,
        PostedByuserId: adminId,
      })),
    );

    console.log("Seeding Ethiopia pharmacy products...");
    const productsData = pharmacyProducts.map((item, index) => ({
      title: item.title,
      slug: makeSlug(item.title, index),
      description: item.description,
      price: item.price,
      category: item.category,
      subcategory: item.subcategory,
      brand: item.brand,
      quantity: item.quantity,
      PostedByuserId: adminId,
      store: store._id,
      ProductApproved: "approved",
      colors: [
        {
          color: colors[index % colors.length]._id,
          images: getProductImageSetByCategory(item.category, index),
        },
      ],
      tags:
        Array.isArray(item.tags) && item.tags.length
          ? item.tags
          : ["ethiopia", "pharmacy"],
    }));

    await Product.insertMany(productsData);

    console.log("Seeding promotion banners and popups...");
    const adsToSeed = [
      ...pharmacyAds.map((url, index) => ({
        title: `Ethiopia Pharmacy Banner ${index + 1}`,
        description: "RiseTech Ethiopia pharmacy campaign",
        category: "Main Slider",
        subcategory: "all",
        images: [{ public_id: `seed/banner-${index + 1}`, secure_url: url }],
        author: String(adminId),
      })),
      {
        title: "Elite Medical Care",
        description:
          "<strong>Exclusive 20% Discount</strong> on all diagnostic equipments this week. <br/> Use code: PULSE20",
        category: "Popup",
        subcategory: "shop",
        images: [
          {
            public_id: "seed/popup-1",
            secure_url:
              "https://images.unsplash.com/photo-1576091160550-2173bdd99625?auto=format&fit=crop&w=1200&q=80",
          },
        ],
        author: String(adminId),
      },
    ];

    await Blog.insertMany(adsToSeed);

    console.log("Seed completed successfully.");
  } finally {
    await mongoose.disconnect();
  }
};

const updatePharmacyImages = async () => {
  await connectDB();
  try {
    const categories = pharmacyCategories.map((item) => item.title);
    const products = await Product.find({ category: { $in: categories } });
    console.log(`Updating images for ${products.length} pharmacy products...`);

    for (let index = 0; index < products.length; index += 1) {
      const product = products[index];
      const imageSet = getProductImageSetByCategory(product.category, index);

      if (Array.isArray(product.colors) && product.colors.length > 0) {
        product.colors[0].images = imageSet;
      } else {
        product.colors = [{ images: imageSet }];
      }

      product.markModified("colors");
      await product.save();
    }

    console.log("Pharmacy images updated successfully.");
  } finally {
    await mongoose.disconnect();
  }
};

const run = async () => {
  try {
    const args = process.argv.slice(2);
    if (args.includes("--update")) {
      await updatePharmacyImages();
      return;
    }
    await seedData();
  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exitCode = 1;
  }
};

run();
