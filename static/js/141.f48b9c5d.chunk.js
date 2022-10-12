"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[141],{129:function(n,t,e){e.d(t,{Hx:function(){return f},U:function(){return l},Y5:function(){return c},wq:function(){return p},wr:function(){return o}});var r=e(861),a=e(757),i=e.n(a),u=e(44),s="b36a691b07ce9c3557881351abfd0b29",o=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.Z.get("https://api.themoviedb.org/3/trending/all/day",{params:{api_key:s}}),n.abrupt("return",t);case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t),{params:{api_key:s}});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{api_key:s}});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),{params:{api_key:s,page:1}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie",{params:{language:"en-US",api_key:s,page:1,query:t}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},17:function(n,t,e){e.d(t,{Z:function(){return d}});var r,a,i,u=e(739),s=e(168),o=e(87),c=e(444),p=(0,c.ZP)(o.OL)(r||(r=(0,s.Z)(["\n  & img {\n    width: 350px;\n  }\n  & p {\n    margin: 0;\n  }\n"]))),f=e(184),l=function(n){var t=n.trendingMoviesUrl,e=n.trendingMoviesID,r=n.title,a=(0,u.TH)();return(0,f.jsxs)(p,{to:"/movies/".concat(e),state:{from:a},children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+t,alt:""}),(0,f.jsx)("p",{children:r})]})},h=c.ZP.ul(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 20px;\n  row-gap: 10px;\n"]))),v=c.ZP.h1(i||(i=(0,s.Z)(["\n  display: flex;\n  margin-bottom: ","px;\n  justify-content: center;\n"])),(function(n){return n.theme.space[3]})),m=function(n){var t=n.movies,e=n.trendingMovies,r=void 0===e?null:e;return(0,f.jsxs)(f.Fragment,{children:[r&&(0,f.jsx)(v,{children:r}),(0,f.jsx)(h,{children:t.map((function(n){var t=n.poster_path,e=n.id,r=n.title;return r&&(0,f.jsx)("li",{children:(0,f.jsx)(l,{trendingMoviesUrl:t,trendingMoviesID:e,title:r})},e)}))})]})},d=m;m.defaultProps={movies:[]}},141:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,a,i,u=e(885),s=e(705),o=e(791),c=e(129),p=e(168),f=e(444),l=(0,f.ZP)(s.l0)(r||(r=(0,p.Z)(["\n  display: flex;\n  width: 500px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 5px;\n"]))),h=(0,f.ZP)(s.gN)(a||(a=(0,p.Z)(["\n  display: flex;\n  width: 100%;\n"]))),v=f.ZP.button(i||(i=(0,p.Z)(["\n  margin-left: 5px;\n"]))),m=e(17),d=e(184),g=function(){var n=(0,o.useState)(""),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,o.useState)([]),i=(0,u.Z)(a,2),p=i[0],f=i[1];return(0,o.useEffect)((function(){""!==e&&(0,c.U)(e).then((function(n){var t=n.results;f(t)}))}),[e]),(0,d.jsxs)("main",{children:[(0,d.jsx)(s.J9,{initialValues:{searchMovies:""},onSubmit:function(n,t){var a=n.searchMovies,i=t.resetForm;r(a.trim()),console.log(e),i()},children:(0,d.jsxs)(l,{children:[(0,d.jsx)(h,{type:"text",name:"searchMovies",autoComplete:"off",autoFocus:!0,placeholder:"Search Movies"}),(0,d.jsx)(v,{type:"submit",children:"Search"})]})}),(0,d.jsx)(m.Z,{movies:p})]})}}}]);
//# sourceMappingURL=141.f48b9c5d.chunk.js.map