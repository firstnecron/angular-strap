'use strict';

require('./dropdown');
require('./dropdown.tpl.html');
require('../tooltip');

var MODULE_NAME = 'mgcrea.ngStrap.module.dropdown';

angular.module(MODULE_NAME, ['mgcrea.ngStrap.dropdown']);

module.exports = MODULE_NAME;
