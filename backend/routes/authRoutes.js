const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");

router.post("/login", login);
router.post("/register", register);

const User = require("../models/User");

// TODO: Rename these to something more descriptive
router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({
      message: "You're authenticated",
      user,
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

router.put("/update", auth, async (req, res) => {
  const { email, password } = req.body;

  try {
    const updates = {};
    if (email) updates.email = email;
    if (password) {
      const hashed = await bcrypt.hash(password, 10);
      updates.password = hashed;
    }

    const updatedUser = await User.findByIdAndUpdate(req.user.id, updates, {
      new: true,
    }).select("-password");

    res.json({ user: updatedUser });
  } catch (err) {
    res.status(500).json({ error: "Profile update failed" });
  }
});
