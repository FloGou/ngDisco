'use strict';
angular.module('ngDiscoApp').filter('sum', function(){
  return prelude.fold(curry$(function(x$, y$){
    return x$ + y$;
  }), 0);
});
function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}