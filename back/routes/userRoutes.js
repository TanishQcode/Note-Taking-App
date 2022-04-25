
const express = require('express');
// const { updateProfile } = require('../../front/src/actions/userActions');
const { registerUser, authUser, updateUserProfile } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

const router= express.Router()


router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route('/profile').post(protect, updateUserProfile)



module.exports = router;