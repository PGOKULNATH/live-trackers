const express = require('express');
const router = express.Router();
const users = require('../models/user');
const auth = require('../auth/auth');

router.post('/', auth, async (req, res) => {
  if (req.user.id !== '1550912489') {
    return res.status(400).json({ msg: 'Invalid User' });
  }
  const { id, injury } = req.body;
  try {
    let user = await users.findOne({ id });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Soldier' });
    }

    user.injury.push(injury);
    const user1 = await users.findByIdAndUpdate(
      user._id,
      { $set: user },
      { new: true }
    );
    res.json(user1);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'server error' });
  }
});

router.delete('/', auth, async (req, res) => {
  if (req.user.id !== '1550912489') {
    return res.status(400).json({ msg: 'Invalid User' });
  }
  console.log(req.query);
  const { id, injury_id } = req.query;
  try {
    const user = await users.findOne({ id });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Soldier' });
    }

    user.injury.splice(injury_id, 1);
    const user1 = await users.findByIdAndUpdate(
      user._id,
      { $set: user },
      { new: true }
    );
    res.json(user1);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'server error' });
  }
});

module.exports = router;
