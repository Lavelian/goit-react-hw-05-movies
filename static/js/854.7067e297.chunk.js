"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[854],{129:function(t,r,e){e.d(r,{Hx:function(){return f},U:function(){return h},Y5:function(){return o},wq:function(){return p},wr:function(){return s}});var n=e(861),a=e(757),c=e.n(a),i=e(44),u="b36a691b07ce9c3557881351abfd0b29",s=function(){var t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.Z.get("https://api.themoviedb.org/3/trending/all/day",{params:{api_key:u}}),t.abrupt("return",r);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(r),{params:{api_key:u}});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits"),{params:{api_key:u}});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews"),{params:{api_key:u,page:1}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie",{params:{language:"en-US",api_key:u,page:1,query:r}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},854:function(t,r,e){e.r(r),e.d(r,{default:function(){return g}});var n,a,c=e(885),i=e(791),u=e(129),s=e(739),o=e(168),p=e(444),f=p.ZP.li(n||(n=(0,o.Z)(["\n  & img {\n    width: 350px;\n    height: 525px;\n  }\n  & p {\n    margin: 0;\n    padding: 0;\n  }\n"]))),h=e(184),d=function(t){var r,e,n=t.name,a=t.character,c=t.profile_path,i=void 0===c?"":c;return(0,h.jsxs)(f,{children:[(0,h.jsx)("img",{src:(r="https://image.tmdb.org/t/p/w500",e=i,e?r+e:"https://www.themoviedb.org/assets/2/apple-touch-icon-cfba7699efe7a742de25c28e08c38525f19381d31087c69e89d6bcb8e3c0ddfa.png"),alt:n}),(0,h.jsx)("p",{children:n}),(0,h.jsxs)("p",{children:[" Character: ",a]})]})},v=p.ZP.ul(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 20px;\n  row-gap: 10px;\n"]))),m=function(t){var r=t.castsData.cast,e=void 0===r?[]:r;return(0,h.jsx)(v,{children:e.length>0?e.map((function(t){var r=t.name,e=t.character,n=t.profile_path,a=t.credit_id;return(0,h.jsx)(d,{name:r,character:e,profile_path:n},a)})):"We don't have any cast list for this movie"})},g=function(){var t=(0,s.UO)().movieId,r=(0,i.useState)([]),e=(0,c.Z)(r,2),n=e[0],a=e[1];return(0,i.useEffect)((function(){(0,u.wq)(t).then((function(t){var r=t.data;return a(r)}))}),[t]),(0,h.jsx)(m,{castsData:n})}}}]);
//# sourceMappingURL=854.7067e297.chunk.js.map