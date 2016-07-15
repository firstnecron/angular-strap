'use strict';

require('./affix');
require('../helpers/dimensions');
require('../helpers/debounce');

var MODULE_NAME = 'mgcrea.ngStrap.module.affix';

angular.module(MODULE_NAME, ['mgcrea.ngStrap.affix']);

module.exports = MODULE_NAME;
