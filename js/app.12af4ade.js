(function(t){function a(a){for(var n,i,s=a[0],u=a[1],o=a[2],c=0,f=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);h&&h(a);while(f.length)f.shift()();return l.push.apply(l,o||[]),e()}function e(){for(var t,a=0;a<l.length;a++){for(var e=l[a],n=!0,s=1;s<e.length;s++){var u=e[s];0!==r[u]&&(n=!1)}n&&(l.splice(a--,1),t=i(i.s=e[0]))}return t}var n={},r={app:0},l=[];function i(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)i.d(e,n,function(a){return t[a]}.bind(null,n));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/2048/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=a,s=s.slice();for(var o=0;o<s.length;o++)a(s[o]);var h=u;l.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var n=e("85ec"),r=e.n(n);r.a},"2cf9":function(t,a,e){"use strict";var n=e("a305"),r=e.n(n);r.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},l=[],i=(e("034f"),e("2877")),s={},u=Object(i["a"])(s,r,l,!1,null,null,null),o=u.exports,h=e("8c4f"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"index",on:{mousedown:t.MouseDown,mouseup:t.MouseUp,touchstart:t.MouseUp,touchend:t.MouseDown}},[e("div",{staticClass:"container"},[e("transition-group",{staticClass:"fa-content",attrs:{name:"cell",tag:"div"}},t._l(t.gameData,(function(a){return e("div",{key:a.id,staticClass:"box cell"},[e("h1",{class:a.ani,style:{backgroundColor:a.color}},[t._v(t._s(a.num))])])})),0)],1)])},f=[],d=(e("c975"),e("a434"),e("d3b7"),e("25f0"),{name:"Home",data:function(){return{gameData:[],data:[[null,null,null,null],[null,null,null,null],[null,null,null,null],[null,null,null,null]],reData:[[],[],[],[]],testData:[[],[],[],[]],dx:0,dy:0,x:0,y:0,angle:0}},created:function(){},mounted:function(){this.addData(),this.addData();var t=this;window.addEventListener("keyup",(function(a){switch(a.keyCode){case 37:t.left();break;case 38:t.up();break;case 39:t.right();break;case 40:t.bottom();break;default:console.log("無符合")}}))},methods:{newArr:function(){for(var t=new Array,a=0;a<4;a++){for(var e=new Array,n=0;n<4;n++){var r={id:[a].toString()+[n].toString(),num:null,class:""};e.push(r)}t.push(e)}return t},MouseDown:function(t){this.dx=t.clientX,this.dy=t.clientY},MouseUp:function(t){var a=t.clientX,e=t.clientY,n=this.dx,r=this.dy,l=180*Math.atan2(e-r,a-n)/Math.PI,i=180*Math.atan2(r-r,n+100-n)/Math.PI;l=l<=-90?360+l:l,i=i<=-90?360+i:i;var s=Math.floor(i-l);s=s<0?s+360:s,this.angle=s,0!=s&&(45<s&&s<135?this.up():135<s&&s<225?this.left():225<s&&s<315?this.bottom():this.right())},up:function(){var t=this.data;this.reData=[[],[],[],[]];for(var a=0;a<t.length;a++)for(var e=0;e<t[a].length;e++)this.reData[e].push(t[a][e]);for(var n=0;n<this.reData.length;n++){for(var r=this.reData[n].length;r>0;r--){var l=this.reData[n].indexOf(null);l>-1&&this.reData[n].splice(l,1)}for(var i=0;i<this.reData[n].length;i++)this.isNumber(this.reData[n][i])&&this.isNumber(this.reData[n][i+1])&&this.reData[n][i]==this.reData[n][i+1]&&(this.reData[n][i]=2*this.reData[n][i],this.reData[n].splice(i+1,1))}this.filling(this.reData),this.testData=[[],[],[],[]];for(var s=0;s<this.reData.length;s++)for(var u=0;u<this.reData[s].length;u++)this.testData[u].push(this.reData[s][u]);this.data=this.testData,this.addData(),this.way="top"},bottom:function(){var t=this.data;this.reData=[[],[],[],[]];for(var a=0;a<t.length;a++)for(var e=0;e<t[a].length;e++)this.reData[e].push(t[a][e]);for(var n=0;n<this.reData.length;n++){for(var r=this.reData[n].length;r>0;r--){var l=this.reData[n].indexOf(null);l>-1&&this.reData[n].splice(l,1)}for(var i=this.reData[n].length;i>0;i--)this.isNumber(this.reData[n][i])&&this.isNumber(this.reData[n][i-1])&&this.reData[n][i]==this.reData[n][i-1]&&(this.reData[n][i]=2*this.reData[n][i],this.reData[n].splice(i-1,1));for(var s=0;s<4;s++)if(this.reData[s].length<4)for(var u=4-this.reData[s].length,o=0;o<u;o++)this.reData[n].unshift(null)}this.testData=[[],[],[],[]];for(var h=0;h<this.reData.length;h++)for(var c=0;c<this.reData[h].length;c++)this.testData[c].push(this.reData[h][c]);this.data=this.testData,this.addData(),this.way="bottom"},left:function(){for(var t=this.data,a=0;a<t.length;a++){for(var e=t[a].length;e>0;e--){var n=t[a].indexOf(null);n>-1&&t[a].splice(n,1)}for(var r=0;r<t[a].length;r++)this.isNumber(t[a][r])&&this.isNumber(t[a][r+1])&&t[a][r]==t[a][r+1]&&(t[a][r]=2*t[a][r],t[a].splice(r+1,1))}this.filling(this.data),this.addData(),this.way="left"},right:function(){for(var t=this.data,a=0;a<t.length;a++){for(var e=t[a].length;e>0;e--){var n=t[a].indexOf(null);n>-1&&t[a].splice(n,1)}for(var r=t[a].length;r>0;r--)this.isNumber(t[a][r])&&this.isNumber(t[a][r-1])&&t[a][r]==t[a][r-1]&&(t[a][r]=2*t[a][r],t[a].splice(r-1,1));for(var l=0;l<4;l++)if(t[l].length<4)for(var i=4-t[l].length,s=0;s<i;s++)t[a].unshift(null)}this.addData(),this.way="right"},isNumber:function(t){var a=/^[0-9]+.?[0-9]*/;return!!a.test(t)},addData:function(){var t=parseInt(4*Math.random()),a=parseInt(4*Math.random());null==this.data[t][a]?this.data[t].splice([a],1,2):this.addData()},filling:function(t){for(var a=t,e=0;e<a.length;e++)for(var n=0;n<4;n++)a[e][n]||(a[e][n]=null)}},watch:{data:function(t){for(var a=[],e=0;e<t.length;e++)for(var n=0;n<t[e].length;n++){var r="",l="";switch(l=null==t[e][n]?"":2==t[e][n]?"newborn":"right"==this.way?"right":"left"==this.way?"left":"top"==this.way?"top":"bottom"==this.way?"bottom":"",t[e][n]){case 2:r="#D4EFDF";break;case 4:r="#A9DFBF";break;case 8:r="#7dcea0";break;case 16:r="#52BE80";break;case 32:r="#27AE60";break;case 64:r="#229954";break;case 128:r="#1E8449";break;case 256:r="#196F3D";break;case 512:r="#145A32";break;case 1024:r="#500B3B";break;case 2048:r="000000";break}var i={id:e.toString()+n.toString(),num:t[e][n],color:r,ani:l};a.push(i)}this.gameData=a;for(var s=[],u=0;u<t.length;u++)for(var o=0;o<t[u].length;o++)2048==t[u][o]?(alert("遊戲結束"),this.data=[[null,null,null,null],[null,null,null,null],[null,null,null,null],[null,null,null,null]],this.addData()):null==t[u][o]&&s.push(t[u][o]);0==s.length&&(alert("遊戲結束"),this.data=[[null,null,null,null],[null,null,null,null],[null,null,null,null],[null,null,null,null]],this.addData())}}}),p=d,v=(e("2cf9"),Object(i["a"])(p,c,f,!1,null,null,null)),D=v.exports;n["a"].use(h["a"]);var g=[{path:"/",name:"Home",component:D}],b=new h["a"]({mode:"history",base:"/2048/",routes:g}),m=b,y=e("2f62");n["a"].use(y["a"]);var w=new y["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:m,store:w,render:function(t){return t(o)}}).$mount("#app")},"85ec":function(t,a,e){},a305:function(t,a,e){}});
//# sourceMappingURL=app.12af4ade.js.map