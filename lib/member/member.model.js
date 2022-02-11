import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const MemberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please add a first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please add a last name"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Please add DOB"],
  },
  userName: {
    type: String,
    required: [true, "Please add a username"],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
  },
  phone: {
    type: Number,
    required: [true, "Please add a phone number"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// Encrypt password using bcrypt
MemberSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
MemberSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, "asgjdhgdsjkskjadiuyamx", {
    expiresIn: 30,
  });
};

// Match user entered password to hashed password in database
MemberSchema.methods.matchPassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Member", MemberSchema);
