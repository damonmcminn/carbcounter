!function t(r,o,e){function n(a,i){if(!o[a]){if(!r[a]){var c="function"==typeof require&&require;if(!i&&c)return c(a,!0);if(u)return u(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var s=o[a]={exports:{}};r[a][0].call(s.exports,function(t){var o=r[a][1][t];return n(o?o:t)},s,s.exports,t,r,o,e)}return o[a].exports}for(var u="function"==typeof require&&require,a=0;a<e.length;a++)n(e[a]);return n}({1:[function(t){var r=t("./carbController"),o=t("./carbFactory");angular.module("nutrition",[]).factory("CarbFactory",["$http","$location",o]).controller("CarbController",["CarbFactory",r])},{"./carbController":2,"./carbFactory":3}],2:[function(t,r){function o(t){var r=t,o=this;o.search=function(){o.prevSearch=o.words,r.search(o.words,o.weight).then(function(t){o.food=t.food,o.results=t.results})},o.loadMore=function(){r.getNext(o.results.next,o.weight).then(function(t){o.results=t.results,o.food=o.food.concat(t.food)})},o.clear=function(){delete o.food,delete o.results}}r.exports=o},{}],3:[function(t,r){function o(t,r,o){return o?Math.round(t*r*100):Number(t*r).toFixed(2)}function e(t,r){function e(r,e){var n=void 0===e,u=e||1;return t.get(r).then(function(t){var r=t.data;return{results:{none:0===r.foods.length,more:void 0!==r.links.next,unit:n?"%":"g",next:r.links.next},food:r.foods.map(function(t){return{name:t.name,carbs:o(t.carbohydrate,u,n)}})}})}t.defaults.useXDomain=!0,delete t.defaults.headers.common["X-Requested-With"];var n="localhost"===r.host(),u="http://localhost:50000/",a="https://api.damonmcminn.com/",i=(n?u:a)+"nutrition/food?name=";return{search:function(t,r){var o=t.split(" ").join("-"),n=i+o;return e(n,r)},getNext:e}}r.exports=e},{}]},{},[1]);
//# sourceMappingURL=nutrition.js.map