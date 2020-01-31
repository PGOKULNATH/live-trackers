const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token no access' });
  }

  try {
    const decoded = jwt.verify(token, config.get('secret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Invalid token' });
  }
};
