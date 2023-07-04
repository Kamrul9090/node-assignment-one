const express = require('express');
const userController = require('../../controllers/user.controller');
const router = express.Router();



router.route('/all')
    .get(userController.allUser);

router.route('/save')
    .post(userController.postData);

router.route('/:id')
    .patch(userController.updateData)
router.route('/bulk-update')
    .put(userController.multipleUpdate)
router.route('/:id')
    .delete(userController.deleteData)

module.exports = router;