const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
var postalRateCalculator = require('./postalRateCalculator.js');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/getRate', postalRateCalculator.calculateRate)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))