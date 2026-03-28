// controllers/userController.js
const User = require("../../../models/User");
const Order = require("../../../models/Order"); // Assuming you have an Order model
// Create User
const createUser = async (req, res) => {
  const { firstname, lastname, username, email, password, mobile, role } =
    req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser)
    return res.status(400).json({ message: "User already exists." });

  const newUser = new User({
    firstname,
    lastname,
    email,
    password,
    mobile,
    role,
  });
  await newUser.save();

  res
    .status(201)
    .json({ success: true, message: "User created successfully." });
};

// Get All Delivery Boys
const getDeliveryBoys = async (req, res) => {
  res.set("Cache-Control", "no-store"); // Disable caching

  const deliveryBoys = await User.find({ role: "deliveryBoy" });
  res.status(200).json(deliveryBoys);
};

// Assign Order to Delivery Boy
const getAssignedOrders = async (req, res) => {
  try {
    const { deliveryPersonId } = req.params; // Extract delivery person's ID

    console.log("Fetching orders for deliveryPersonId:", deliveryPersonId);

    const orders = await Order.find({ assignedTo: deliveryPersonId });

    console.log("Orders found:", orders); // Debugging log

    if (!orders || orders.length === 0) {
      console.log("No orders assigned.");
      return res.status(200).json([]); // Return an empty array, NOT a 404 error
    }

    return res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching assigned orders:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update Delivery Boy
const updateDeliveryBoy = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const updatedDeliveryBoy = await User.findByIdAndUpdate(id, updates, {
    new: true,
  });
  res.status(200).json(updatedDeliveryBoy);
};

// Delete Delivery Boy
const deleteDeliveryBoy = async (req, res) => {
  const { id } = req.params;

  await User.findByIdAndDelete(id);
  res.status(204).json({ message: "Delivery boy deleted successfully." });
};

const updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  console.log("Received orderId:", orderId); // Debugging
  console.log("Received status:", status);

  try {
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.orderStatus = status;
    await order.save();

    res.status(200).json({ message: "Order status updated successfully", order });
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
const getDeliveryBoyById = async (req, res) => {
  try {
    const { id } = req.params;
    
    console.log("Fetching delivery boy with ID:", id); // Debugging

    const deliveryBoy = await User.findOne({ _id: id, role: "deliveryBoy" });

    if (!deliveryBoy) {
      return res.status(404).json({ message: "Delivery boy not found." });
    }

    res.status(200).json(deliveryBoy);
  } catch (error) {
    console.error("Error fetching delivery boy:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

const activateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isActive = true; // Set isActive to true
    await user.save();

    res.status(200).json({ message: "User activated successfully", user });
  } catch (error) {
    console.error("Error activating user:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


const deactivateDeliveryPerson = async (req, res) => {
  try {
    const { id } = req.params; // Extract delivery person's ID

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "Delivery person not found" });
    }

    if (user.role !== "deliveryBoy") {
      return res.status(400).json({ message: "User is not a delivery person" });
    }

    user.isActive = false; // Set isActive to false
    await user.save();

    res.status(200).json({ message: "Delivery person deactivated successfully", user });
  } catch (error) {
    console.error("Error deactivating delivery person:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


module.exports = {
  createUser,
  getDeliveryBoys,
  getAssignedOrders,
  updateDeliveryBoy,
  deleteDeliveryBoy,
  updateOrderStatus,
  getDeliveryBoyById,
  activateUser,
  deactivateDeliveryPerson
};
