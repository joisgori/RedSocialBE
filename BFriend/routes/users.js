var express = require('express');
var router = express.Router();
var userController = require('../controller/UserController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Patrón para crear las rutas
router.get('/signup', function(req, res, next) {
  //res.render('Nombre de archivo pug)
  res.render('formulario');
});

router.post('/signup',userController.store);

module.exports = router;
