'use strict';

angular.module 'ngDiscoApp' .filter 'truncate', -> (input, size, c) -> prelude.slice(0, size, input) + (c || '…')