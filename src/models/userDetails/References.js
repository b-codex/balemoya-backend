const mongoose = require("mongoose");
const ReferencesSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "FullName is required"],
    },
    phoneNumber: {
      type: String,
      required: [true, "PhoneNumber is required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("References", ReferencesSchema);
