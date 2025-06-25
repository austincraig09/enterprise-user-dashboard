require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const email = "test@example.com";
  const password = "password123";

  const existing = await User.findOne({ email });
  if (existing) {
    console.log("Test user already exists.");
    return mongoose.disconnect();
  }

  const hashed = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashed });

  console.log(`✅ Test user created:
  Email:    ${email}
  Password: ${password}`);

  mongoose.disconnect();
};

seed().catch((err) => {
  console.error("❌ Seeding failed:", err);
  mongoose.disconnect();
});
