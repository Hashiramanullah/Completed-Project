const express = require('express');
const router = express.Router();

const auth = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/roleMiddleware');
const { register, login, getProfile, getAllUsers } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', auth, getProfile);
router.get('/admin/users', auth, authorize(['admin']), getAllUsers);

module.exports = router;