const express = require('express');

const router = express.Router();

//controllers
const mpesa = require('../controller/mpesa')

// //route to get the auth token
router.get('/api/mpesa-token', mpesa.mpesaToken);

// //lipa na mpesa online 
router.post('/api/stk-push',mpesa.mpesaToken, mpesa.mpesaSTKPush);

router.get('/api/lipa-na-mpesa-password',mpesa.mpesaPassword);

//callback url
router.post('/api/callback',mpesa.lipaNaMpesaOnlineCallback);

module.exports = router;