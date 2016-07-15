'use strict';

require('./datepicker');
require('./datepicker.tpl.html');
require('../helpers/date-parser');
require('../helpers/date-formatter');
require('../tooltip');

var MODULE_NAME = 'mgcrea.ngStrap.module.datepicker';

angular.module(MODULE_NAME, ['mgcrea.ngStrap.datepicker']);

module.exports = MODULE_NAME;
