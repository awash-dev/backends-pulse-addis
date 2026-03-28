const Category = require("../models/ProductSubcategory.js");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId.js");
const ActivityLog = require("../models/Activity");
const createSubcategory = asyncHandler(async (req, res) => {
    try {
        if (req.user && req.user._id) {
            if (req.body === req.body) {
                req.body.PostedByuserId = req.body.PostedByuserId || req.user._id;
            } else if (typeof req.body === 'object') {
                req.body.PostedByuserId = req.body.PostedByuserId || req.user._id;
            }
        }
        const newCategory = await Category.create(req.body);

        await ActivityLog.create({
            action: "create SubCategory",
            resource: "SubCategory",
            resourceId: newCategory?._id,
          
            user: newCategory?.PostedByuserId || req.user?._id,
            details: { newCategory },
        });
        res.json(newCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const updateSubcategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        await ActivityLog.create({
            action: "Update SubCategory",
            resource: "SubCategory",
            resourceId: updatedCategory?._id,
            
            user: updatedCategory?.PostedByuserId || req.user?._id,
            details: { updatedCategory },
        });


        res.json(updatedCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const deleteSubcategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deletedCategory = await Category.findByIdAndDelete(id);

        await ActivityLog.create({
            action: "Delete SubCategory",
            resource: "SubCategory",
            resourceId: deletedCategory?._id,
          
            user: deletedCategory?.PostedByuserId || req.user?._id,
            details: {deletedCategory },
        });
        res.json(deletedCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const getSubcategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getaCategory = await Category.findById(id);
        res.json(getaCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const getallSubcategory = asyncHandler(async (req, res) => {
    try {
        const getallCategory = await Category.find();
        res.json(getallCategory);
    } catch (error) {
        throw new Error(error);
    }
});
module.exports = {
    createSubcategory,
    updateSubcategory,
    deleteSubcategory,
    getSubcategory,
    getallSubcategory,
};