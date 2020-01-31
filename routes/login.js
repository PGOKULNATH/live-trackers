const express = require('express');
const router = express.Router();
const config = require('config');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
  const { name, password } = req.body;

  try {
    if (name === 'Commander' && password === 'Soldier') {
      const payload = {
        user: {
          id: '1550912489'
        }
      };

      jwt.sign(
        payload,
        config.get('secret'),
        {
          expiresIn: 36000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } else {
      res.status(400).json({ msg: 'Invalid Username or Password' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'server error' });
  }
});

module.exports = router;
