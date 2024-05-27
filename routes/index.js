var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/v1/diary', function (req, res){
  res.status(200).json({
    "message" : "daily diary"
  })
})

router.post('/api/v1/diary', function (req, res) {
  res.status(201).json(
  {
    "message" : "daily diary"
  })
})

module.exports = router;
