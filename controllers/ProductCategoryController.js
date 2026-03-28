const Category = require("../models/ProductCategory.js");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId.js");
const Activity = require("../models/Activity");

const createCategory = asyncHandler(async (req, res) => {
    try {
        if (req.user && req.user._id) {
            if (req.body === req.body) {
                req.body.PostedByuserId = req.body.PostedByuserId || req.user._id;
            } else if (typeof req.body === 'object') {
                req.body.PostedByuserId = req.body.PostedByuserId || req.user._id;
            }
        }
        const newCategory = await Category.create(req.body);
        console.log(newCategory )

        await Activity.create({
            action: "Create Category",
            resource: "Category",
            resourceId: newCategory?._id,
            user: newCategory?.PostedByuserId || req.user?._id,
            details: { deletedCoupon: req.body },
        });
        res.json(newCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        await Activity.create({
            action: "Update Category",
            resource: "Category ",
            resourceId: updatedCategory?._id,
          
            user: updatedCategory?.PostedByuserId || req.user?._id,
            details: { updatedCategory: req.body },
        });
        res.json(updatedCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deletedCategory = await Category.findByIdAndDelete(id);

        await Activity.create({
            action: "Delete Category",
            resource: "Category ",
            resourceId: deletedCategory?._id,
            user: deletedCategory?.PostedByuserId || req.user?._id,
            details: { deletedCategory: req.body },
        });


        res.json(deletedCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const getCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getaCategory = await Category.findById(id);
        res.json(getaCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const getallCategory = asyncHandler(async (req, res) => {
    try {
        const getallCategory = await Category.find();
        res.json(getallCategory);
    } catch (error) {
        throw new Error(error);
    }
});
module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getallCategory,
};