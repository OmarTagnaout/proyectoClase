var express = require('express');
var router = express.Router();

/* GET /  -> pinta views/index.ejs (la portada) */
router.get('/', function(req, res, next) {
  res.render('index', { title: '2ºDAW' });
});

/* GET /contacto  -> pinta views/contact.ejs */
router.get('/contacto', function(req, res, next) {
  res.render('contact', {});
});

module.exports = router;
