const mongoose = require("mongoose");

const contractModal = mongoose.Schema({
  userId: { type: String },
  channelData: [
    {
      name: { type: String },
      saltValue: { type: String },
      byteCode: { type: String },
    },
  ],
});

const contractSchema = mongoose.model("contract", contractModal);

module.exports = contractSchema;
