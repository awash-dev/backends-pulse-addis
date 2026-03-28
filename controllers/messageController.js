const asyncHandler = require("express-async-handler");
const Message = require("../models/message");
const User = require("../models/User");
const Chat = require("../models/Chat");


// send messages
const sendMessage = asyncHandler(async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    return res.status(500).json({ error: "Message or chatId missing." });
  }

  const messageObj = {
    sender: req.user._id,
    message: content,
    chat: chatId,
  };

  try {
    let message = await Message.create(messageObj);

    message = await message.populate("sender", "name pic");

    message = await message.populate("chat", "chatName isGroupChat users");

    await Chat.findByIdAndUpdate(chatId, {
      latestMessage: message._id,
    });

    res.json(message);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Message could not be sent." });
  }
});

// get messages
const getMessages = asyncHandler(async (req, res) => {

  if(!req.params.id){
    return res.status(500).json({ error: "Invalid or chatId not found in params." });
  }

  try {
    const messages = await Message.find({ chat: req.params.id })
      .populate("sender", "name pic email")
      .populate("chat");

      res.json(messages);

    } catch (error) {
      return res.status(500).json({ error: error.message });
  }
});

module.exports = { sendMessage , getMessages};
