const express = require('express');
const router  = express.Router();

const center  = require('./centers');
const asset   = require('./assets');
const log   = require('./logs');
const auth    = require('./auth');

// Routes that is used for center
router.post('/api/create-center', center.createCenter);
router.get('/api/find-centers', center.findCenters);

// Routes that is used for assets
router.post('/api/create-asset', asset.createAsset);
router.get('/api/find-assets', asset.findAssets);
router.post('/api/update-asset', asset.updateAsset);

// Routes that is used for auth
router.get('/api/validate-token', auth.validateToken);

// Routes that is used for logs
router.get('/api/find-logs', log.findLogs);

module.exports = router;