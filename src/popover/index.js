'use strict';

require('./popover');
require('./popover.tpl.html');
require('../tooltip');

var MODULE_NAME = 'mgcrea.ngStrap.module.popover';

angular.module(MODULE_NAME, ['mgcrea.ngStrap.popover']);

module.exports = MODULE_NAME;
