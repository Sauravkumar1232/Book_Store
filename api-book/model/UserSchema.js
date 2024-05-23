const mongoose = require("mongoose");
const timeStamp = require("mongoose-timestamps");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: Number, default: 2, enum: [1, 2], required: true },
  lastLogin: { type: Date, required: false },
  aadharCard: { type: Number, required: true },
  createdAt: Date,
  updatedAt: Date,
});
UserSchema.plugin(timeStamp, { index: true });
module.exports = mongoose.model("User", UserSchema);
