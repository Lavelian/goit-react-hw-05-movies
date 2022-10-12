"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[294],{129:function(n,e,t){t.d(e,{Hx:function(){return h},U:function(){return f},Y5:function(){return s},wq:function(){return p},wr:function(){return u}});var r=t(861),a=t(757),i=t.n(a),o=t(44),c="b36a691b07ce9c3557881351abfd0b29",u=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.Z.get("https://api.themoviedb.org/3/trending/all/day",{params:{api_key:c}}),n.abrupt("return",e);case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e),{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits"),{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),{params:{api_key:c,page:1}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie",{params:{language:"en-US",api_key:c,page:1,query:e}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},294:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,a,i,o,c,u,s,p,h=t(885),f=t(739),l=t(129),d=t(791),m=t(168),v=t(444),x=v.ZP.img(r||(r=(0,m.Z)(["\n  width: 350px;\n"]))),g=v.ZP.h2(a||(a=(0,m.Z)(["\n  margin-top: ","px;\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]})),Z=v.ZP.p(i||(i=(0,m.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[3]})),b=v.ZP.h3(o||(o=(0,m.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[4]})),j=v.ZP.p(c||(c=(0,m.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[3]})),w=v.ZP.h3(u||(u=(0,m.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[4]})),k=v.ZP.p(s||(s=(0,m.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[3]})),y=t(895),_=t(184),P=function(n){var e=n.dataMovie,t=e.title,r=e.overview,a=e.genres,i=void 0===a?[]:a,o=e.poster_path,c=void 0===o?"":o,u=e.vote_average,s="https://image.tmdb.org/t/p/w500"+c,p=function(n){return n.length?n.map((function(n){return n.name})).join(","):"Not Found"}(i);return(0,_.jsxs)(y.Z,{display:"flex",children:[(0,_.jsx)(x,{src:s,alt:t}),(0,_.jsxs)(y.Z,{ml:2,children:[(0,_.jsx)(g,{children:t}),(0,_.jsx)(Z,{children:u}),(0,_.jsx)(b,{children:"Overview"}),(0,_.jsx)(j,{children:r}),(0,_.jsx)(w,{children:"Genres"}),(0,_.jsx)(k,{children:p})]})]})},U=t(87),C=(0,v.ZP)(U.OL)(p||(p=(0,m.Z)(["\n  display: inline-flex;\n  padding: ","px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: ",";\n  &.active {\n    background-color: ",";\n    color: ",";\n  }\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: ",";\n  }\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary})),O=function(){return(0,_.jsxs)(y.Z,{as:"ul",display:"flex",my:1,children:[(0,_.jsx)("li",{children:(0,_.jsx)(C,{to:"cast",children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(C,{to:"reviews",children:"Reviews"})})]})},S=function(n){var e=n.to,t=n.children;return(0,_.jsx)(U.rU,{to:e,children:t})},q=t(66),F=function(){var n,e,t=(0,d.useState)([]),r=(0,h.Z)(t,2),a=r[0],i=r[1],o=(0,f.UO)().movieId,c=(0,f.TH)(),u=null!==(n=null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return console.log(c.state),(0,d.useEffect)((function(){(0,l.Y5)(o).then((function(n){var e=n.data;i(e)}))}),[o]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(S,{to:u,children:"Go Back"}),(0,_.jsx)(P,{dataMovie:a}),(0,_.jsx)(O,{}),(0,_.jsx)(d.Suspense,{fallback:(0,_.jsx)(q.Z,{}),children:(0,_.jsx)(f.j3,{})})]})}}}]);
//# sourceMappingURL=294.5096ccf0.chunk.js.map