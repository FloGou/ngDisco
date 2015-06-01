'use strict';

angular.module 'ngDiscoApp' .filter 'avg', (sumFilter) -> (input) -> if input && input.length then sumFilter(input) / input.length else 0