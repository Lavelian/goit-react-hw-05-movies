"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[859],{129:function(n,t,e){e.d(t,{Hx:function(){return f},U:function(){return d},Y5:function(){return s},wq:function(){return p},wr:function(){return o}});var r=e(861),a=e(757),i=e.n(a),u=e(44),c="b36a691b07ce9c3557881351abfd0b29",o=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.Z.get("https://api.themoviedb.org/3/trending/all/day",{params:{api_key:c}}),n.abrupt("return",t);case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t),{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),{params:{api_key:c,page:1}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie",{params:{language:"en-US",api_key:c,page:1,query:t}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},17:function(n,t,e){e.d(t,{Z:function(){return g}});var r,a,i,u=e(739),c=e(168),o=e(731),s=e(444),p=(0,s.ZP)(o.OL)(r||(r=(0,c.Z)(["\n  & img {\n    width: 350px;\n    height: 525px;\n  }\n  & p {\n    margin: 0;\n  }\n"]))),f=e(184),d=function(n){var t,e,r=n.trendingMoviesUrl,a=n.trendingMoviesID,i=n.title,c=(0,u.TH)();return(0,f.jsxs)(p,{to:"/movies/".concat(a),state:{from:c},children:[(0,f.jsx)("img",{src:(t="https://image.tmdb.org/t/p/w500",e=r,e?t+e:"https://www.themoviedb.org/assets/2/apple-touch-icon-cfba7699efe7a742de25c28e08c38525f19381d31087c69e89d6bcb8e3c0ddfa.png"),alt:""}),(0,f.jsx)("p",{children:i})]})},v=s.ZP.ul(a||(a=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 20px;\n  row-gap: 10px;\n"]))),h=s.ZP.h1(i||(i=(0,c.Z)(["\n  display: flex;\n  margin-bottom: ","px;\n  justify-content: center;\n"])),(function(n){return n.theme.space[3]})),l=function(n){var t=n.movies,e=n.trendingMovies,r=void 0===e?null:e;return(0,f.jsxs)(f.Fragment,{children:[r&&(0,f.jsx)(h,{children:r}),t.length>0&&(0,f.jsx)(v,{children:t.map((function(n){var t=n.poster_path,e=n.id,r=n.title;return r&&(0,f.jsx)("li",{children:(0,f.jsx)(d,{trendingMoviesUrl:t,trendingMoviesID:e,title:r})},e)}))})]})},g=l;l.defaultProps={movies:[]}},859:function(n,t,e){e.r(t),e.d(t,{default:function(){return o}});var r=e(885),a=e(17),i=e(129),u=e(791),c=e(184),o=function(n){var t=n.setIsLoading,e=(0,u.useState)([]),o=(0,r.Z)(e,2),s=o[0],p=o[1];return(0,u.useEffect)((function(){console.log(t),t(!0),(0,i.wr)().then((function(n){var t=n.data.results;p(t)})).catch((function(n){console.log(n)})).finally((function(){t(!1)}))}),[t]),(0,c.jsxs)("main",{children:[(0,c.jsx)(a.Z,{movies:s,trendingMovies:"Trending Movies"})," "]})}}}]);
//# sourceMappingURL=859.9cfceb99.chunk.js.map