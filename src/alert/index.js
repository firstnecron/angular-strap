'use strict';

require('./alert');
require('./alert.tpl.html');
require('../modal');

var MODULE_NAME = 'mgcrea.ngStrap.module.alert';

angular.module(MODULE_NAME, ['mgcrea.ngStrap.alert']);

module.exports = MODULE_NAME;
