'use strict';

require('./select');
require('./select.tpl.html');
require('../tooltip');
require('../helpers/parse-options');

var MODULE_NAME = 'mgcrea.ngStrap.module.select';

angular.module(MODULE_NAME, ['mgcrea.ngStrap.select']);

module.exports = MODULE_NAME;
