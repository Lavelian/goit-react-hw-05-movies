"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[644],{129:function(t,n,r){r.d(n,{Hx:function(){return f},U:function(){return v},Y5:function(){return s},wq:function(){return p},wr:function(){return o}});var e=r(861),a=r(757),u=r.n(a),c=r(44),i="b36a691b07ce9c3557881351abfd0b29",o=function(){var t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.Z.get("https://api.themoviedb.org/3/trending/all/day",{params:{api_key:i}}),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n),{params:{api_key:i}});case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits"),{params:{api_key:i}});case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews"),{params:{api_key:i,page:1}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie",{params:{language:"en-US",api_key:i,page:1,query:n}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},644:function(t,n,r){r.r(n),r.d(n,{default:function(){return p}});var e=r(885),a=r(791),u=r(739),c=r(129),i=r(184),o=function(t){var n=t.author,r=t.content;return console.log("content",r),(0,i.jsxs)("li",{children:[(0,i.jsxs)("p",{children:["Author: ",n]}),(0,i.jsxs)("p",{children:[" ",r]})]})},s=function(t){var n=t.reviews,r=void 0===n?[]:n;return(0,i.jsx)("ul",{children:r.length>0?r.map((function(t){var n=t.author,r=t.content,e=t.id;return(0,i.jsx)(o,{author:n,content:r},e)})):"We don't have any revievs for this movie"})},p=function(t){var n=t.setIsLoading,r=(0,u.UO)().movieId,o=(0,a.useState)([]),p=(0,e.Z)(o,2),f=p[0],v=p[1];return(0,a.useEffect)((function(){n(!0),(0,c.Hx)(r).then((function(t){var n=t.results;v(n)})).catch((function(t){return console.log(t)})).finally((function(){n(!1)}))}),[r,n]),(0,i.jsx)(s,{reviews:f})}}}]);
//# sourceMappingURL=644.9b4df1c4.chunk.js.map