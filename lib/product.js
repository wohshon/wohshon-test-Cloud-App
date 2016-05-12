var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var product= new express.Router();
product.use(cors());
product.use(bodyParser());
