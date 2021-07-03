(function(t){function e(e){for(var a,u,c=e[0],s=e[1],l=e[2],p=0,d=[];p<c.length;p++)u=c[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);i&&i(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},o={app:0},r=[];function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var i=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1be1":function(t,e,n){},"239c":function(t,e,n){"use strict";n("1be1")},"4e21":function(t,e,n){"use strict";n("cac8")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"inputFormWrapper"},[n("input-form",{on:{"new-block":t.updateflowChartBlocks}}),n("button",{staticClass:"btn btnPrimary",on:{click:t.createJson}},[t._v("Create Json")]),n("a",{attrs:{href:"/getJson"}},[n("button",{staticClass:"btn btnSecondary",on:{click:t.downloadJson}},[t._v(" Download Json ")])]),n("span",{staticClass:"info"},[t._v("*"+t._s(t.dataOutputted))])],1),n("div",{staticClass:"flowChartOutputWrapper"},[n("div",{staticClass:"flowChartOutput"},t._l(t.flowChartBlocks,(function(e){return n("flow-chart-block",{key:"blockItem"+e.type+e.id,attrs:{"block-data":e},on:{"delete-block":t.deleteBlock}})})),1),n("span",{staticClass:"info"},[t._v("*Click on the block to delete it")])])])},r=[],u=n("b85c"),c=n("3835"),s=(n("4de4"),n("d81d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"inputForm",attrs:{autocomplete:"off",action:"#"},on:{submit:function(e){return e.preventDefault(),t.addNewBlock.apply(null,arguments)}}},[n("select",{ref:"inputType",attrs:{name:"inputType",id:"inputType",required:""}},[n("option",{attrs:{value:"UserMessage"}},[t._v("UserMessage")]),n("option",{attrs:{value:"Utterance"}},[t._v("Utterance")]),n("option",{attrs:{value:"Action"}},[t._v("Action")])]),n("input",{ref:"inputValue",staticClass:"inputValue",attrs:{type:"text",id:"inputValue",placeholder:"Enter Text",required:""}}),n("button",{staticClass:"submit"},[t._v("Add in flowchart")])])}),l=[],i={name:"InputForm",emits:["new-block"],methods:{addNewBlock:function(){this.$emit("new-block",[this.$refs.inputType.value,this.$refs.inputValue.value]),this.$refs.inputValue.value=""}}},p=i,d=(n("4e21"),n("2877")),f=Object(d["a"])(p,s,l,!1,null,"2045a176",null),h=f.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flowChartBlock",class:"flowChartBlock--"+t.blockData.type,attrs:{id:t.blockData.id},on:{click:function(e){return t.$emit("delete-block",t.blockData.id)}}},[t._v(" "+t._s(t.blockData.value)+" ")])},v=[],m={name:"FlowChartBlock",emits:["delete-block"],props:{blockData:{type:Object,default:null}}},y=m,k=(n("239c"),Object(d["a"])(y,b,v,!1,null,"9a69ac40",null)),w=k.exports,C=n("bc3a"),O=n.n(C),g={name:"App",components:{InputForm:h,FlowChartBlock:w},data:function(){return{flowChartBlocks:[{type:"usermessage",id:1,value:"dummy text - user message block"},{type:"action",id:2,value:"dummy text - action block"},{type:"utterance",id:3,value:"dummy text - utterance block"}],newId:4,dataOutputted:"Data's been updated, create Json again."}},methods:{updateflowChartBlocks:function(t){var e=Object(c["a"])(t,2),n=e[0],a=e[1];this.flowChartBlocks.push({type:n.toLowerCase(),id:this.newId,value:a}),this.newId++,this.dataOutputted="Data's been updated, create Json again."},deleteBlock:function(t){this.flowChartBlocks=this.flowChartBlocks.filter((function(e){return e.id!=t})),this.dataOutputted="Data's been updated, create Json again."},downloadJson:function(){this.dataOutputted="Downloading the JSON file"},createJson:function(){var t,e=this,n=this.flowChartBlocks.map((function(t){return{id:t.id,type:t.type,value:t.value}})),a=!1,o={response:[]},r=1,c=[],s=Object(u["a"])(n);try{for(s.s();!(t=s.n()).done;){var l=t.value;r++,"usermessage"===l.type?a?(c.push(o),o={query:l,response:[]}):(o.query=l,a=!0):o.response.push(l),r==n.length&&c.push(o)}}catch(i){s.e(i)}finally{s.f()}O.a.post("/saveData",c).then((function(){e.dataOutputted="Data's been saved in Json format."})).catch((function(t){t&&(e.dataOutputted="Something went wrong.")}))}}},_=g,B=(n("5c0b"),Object(d["a"])(_,o,r,!1,null,null,null)),j=B.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},cac8:function(t,e,n){}});
//# sourceMappingURL=app.7432fbc3.js.map