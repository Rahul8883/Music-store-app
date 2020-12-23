const express = require('express');
const musicController = require('../controller/music.controller');

const router = express.Router();
router.post('/tracks', musicController.uploadMusicInDBController);
router.get('/getTracks', musicController.getMusicFromDBController)
router.delete('/delTrack/:id', musicController.deleteMusicFromDBController)
router.get('/cart/:id', musicController.getCartData)
router.post('/addToCart', musicController.addToCartController)
router.get('/getCartItem', musicController.getCartItemInController)
router.delete('/deleteCart/:id', musicController.deletecartItemInController)

module.exports = router;