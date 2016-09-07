var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  // res.send('respond with a resource');
  res.json({ user: 'tobi' });
});

router.get('/thisuser', function(req, res) {
  res.json({ user: 'tobi' });
})

module.exports = router;
