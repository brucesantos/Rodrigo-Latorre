!function(e){"use strict";function t(e,t){return e[c](t)}function n(e){if(!e.parentNode){var t=document.createDocumentFragment();t.appendChild(e)}}function r(e,t){n(e);for(var r=e.parentNode.querySelectorAll(t),o=0,c=r.length;c>o;o++)if(r[o]===e)return!0;return!1}function o(e,r){return n(e),t(e,r)}var c=function(){if(e.matches)return"matches";if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],n=0,r=t.length;r>n;n++){var o=t[n],c=o+"MatchesSelector";if(e[c])return c}}(),i;if(c){var u=document.createElement("div"),f=t(u,"div");i=f?t:o}else i=r;"function"==typeof define&&define.amd?define(function(){return i}):"object"==typeof exports?module.exports=i:window.matchesSelector=i}(Element.prototype);