'use strict';

require('./select');
require('./select.tpl.html');
require('../tooltip');
require('../helpers/date-formatter');
require('../helpers/date-parser');

var MODULE_NAME = 'mgcrea.ngStrap.module.timepicker';

angular.module(MODULE_NAME, ['mgcrea.ngStrap.timepicker']);

module.exports = MODULE_NAME;
