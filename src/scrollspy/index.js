'use strict';

require('./scrollspy');
require('../helpers/dimensions');
require('../helpers/debounce');

var MODULE_NAME = 'mgcrea.ngStrap.module.scrollspy';

angular.module(MODULE_NAME, ['mgcrea.ngStrap.scrollspy']);

module.exports = MODULE_NAME;
