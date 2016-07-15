'use strict';

require('./modal');
require('./modal.tpl.html');
require('../helpers/compiler');
require('../helpers/dimensions');

var MODULE_NAME = 'mgcrea.ngStrap.module.modal';

angular.module(MODULE_NAME, ['mgcrea.ngStrap.modal']);

module.exports = MODULE_NAME;
