'use strict';

require('./aside');
require('./aside.tpl.html');
require('../modal');

var MODULE_NAME = 'mgcrea.ngStrap.module.aside';

angular.module(MODULE_NAME, ['mgcrea.ngStrap.aside']);

module.exports = MODULE_NAME;
