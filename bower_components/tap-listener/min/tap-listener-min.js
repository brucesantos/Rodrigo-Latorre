!function(t,e){"use strict";"function"==typeof define&&define.amd?define(["unipointer/unipointer"],function(n){return e(t,n)}):"object"==typeof exports?module.exports=e(t,require("unipointer")):t.TapListener=e(t,t.Unipointer)}(window,function t(e,n){"use strict";function o(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function i(t){this.bindTap(t)}i.prototype=new n,i.prototype.bindTap=function(t){t&&(this.unbindTap(),this.tapElement=t,this._bindStartEvent(t,!0))},i.prototype.unbindTap=function(){this.tapElement&&(this._bindStartEvent(this.tapElement,!0),delete this.tapElement)};var p=i.prototype.pointerDown;i.prototype.pointerDown=function(t){"touchstart"==t.type&&o(t),p.apply(this,arguments)};var r=void 0!==e.pageYOffset;return i.prototype.pointerUp=function(t,o){var i=n.getPointerPoint(o),p=this.tapElement.getBoundingClientRect(),u=r?e.pageXOffset:document.body.scrollLeft,s=r?e.pageYOffset:document.body.scrollTop,a=i.x>=p.left+u&&i.x<=p.right+u&&i.y>=p.top+s&&i.y<=p.bottom+s;a&&this.emitEvent("tap",[t,o])},i.prototype.destroy=function(){this.pointerDone(),this.unbindTap()},i});