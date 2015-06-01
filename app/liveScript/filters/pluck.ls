'use strict';

angular.module 'ngDiscoApp' .filter 'pluck', -> (input, value) -> input.map (.(value)) if input