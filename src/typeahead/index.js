'use strict';

require('./typeahead');
require('./typeahead.tpl.html');
require('../tooltip');
require('../helpers/parse-options');

var MODULE_NAME = 'mgcrea.ngStrap.module.typeahead';

angular.module(MODULE_NAME, ['mgcrea.ngStrap.typeahead']);

module.exports = MODULE_NAME;
