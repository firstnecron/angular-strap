'use strict';

require('./tooltip');
require('./tooltip.tpl.html');
require('../helpers/compiler');
require('../helpers/dimensions');

var MODULE_NAME = 'mgcrea.ngStrap.module.tooltip';

angular.module(MODULE_NAME, ['mgcrea.ngStrap.tooltip']);

module.exports = MODULE_NAME;
