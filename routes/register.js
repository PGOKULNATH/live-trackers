const express = require('express');
const router = express.Router();
const users = require('../models/user');
const auth = require('../auth/auth');

router.get('/', auth, async (req, res) => {
  if (req.user.id !== '1550912489') {
    return res.status(400).json({ msg: 'Invalid User' });
  }
  const id = req.query.id;
  try {
    const user = await users.findOne({ id });
    if (!user) {
      res.status(400).json({ msg: 'Invalid Solider' });
    }
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'server error' });
  }
});

router.post('/', auth, async (req, res) => {
  if (req.user.id !== '1550912489') {
    return res.status(400).json({ msg: 'Invalid User' });
  }
  console.log(req.body);
  const {
    id,
    name,
    email,
    batch,
    dob,
    blood,
    injury,
    age,
    spec,
    experience,
    designation
  } = req.body;

  try {
    let user = await users.findOne({ id });

    if (user) {
      return res.status(400).json({ msg: 'User Already Exists' });
    }

    user = new users({
      id,
      name,
      email,
      batch,
      dob,
      blood,
      injury,
      age,
      spec,
      experience,
      designation
    });

    await user.save();
    res.send(user);
  } catch (err) {
    console.log('Server Error');
    res.status(500).json({ msg: 'server failed' });
  }
});

router.put('/:id', auth, async (req, res) => {
  if (req.user.id !== '1550912489') {
    return res.status(400).json({ msg: 'Invalid User' });
  }

  const {
    id,
    name,
    email,
    batch,
    dob,
    blood,
    age,
    spec,
    experience,
    designation
  } = req.body;

  const userFields = {};
  if (id) userFields.id = id;
  if (name) userFields.name = name;
  if (email) userFields.email = email;
  if (batch) userFields.batch = batch;
  if (dob) userFields.dob = dob;
  if (blood) userFields.blood = blood;
  if (age) userFields.age = age;
  if (spec) userFields.dspec = spec;
  if (experience) userFields.experience = experience;
  if (designation) userFields.designation = designation;

  try {
    const user = await users.findOne({ id });
    var u = await users.findByIdAndUpdate(
      user._id,
      { $set: userFields },
      { new: true }
    );
    res.json(u);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/:id', auth, async (req, res) => {
  if (req.user.id !== '1550912489') {
    return res.status(400).json({ msg: 'Invalid User' });
  }
  try {
    await users.findOneAndRemove(req.params.id);
    res.json({ msg: 'User removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
