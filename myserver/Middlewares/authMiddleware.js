const jwt = require('jsonwebtoken');
const config = require('../Config/config');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'Token is not provided' });

  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Unauthorized' });

    req.userId = decoded.id;
    next();
  });
};


const generateToken = (userId) => {
    return jwt.sign({ id: userId }, config.jwtSecret, { expiresIn: '1h' });
  };

module.exports = { verifyToken ,generateToken};
