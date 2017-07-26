process.env.NODE_ENV = process.env.NODE_ENV || 'development';
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let Promise = require('bluebird');
let cors = require('cors');
let config = require(`./config/${process.env.NODE_ENV}.js`);
let fileUploader = require('express-fileupload');
let swaggerTools = require('swagger-tools');
let YAML = require('yamljs');
let YAML = require('yamljs');
let swaggerDoc = YAML.load('openapi.yaml');
let alphanumeric = require('alphanumeric-id');



