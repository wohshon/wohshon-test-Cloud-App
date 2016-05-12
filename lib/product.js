var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var product= new express.Router();
product.use(cors());
product.use(bodyParser());

var productStore=[];

product.get('/', function(req,res) {
  return res.json(productStore);  
});

product.get('/:id', function(req,res) {
  return res.json(productStore[req.params.id]);  
});