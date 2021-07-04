(function(t){function e(e){for(var n,l,c=e[0],s=e[1],u=e[2],d=0,p=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);i&&i(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},o=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var i=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2465:function(t,e,a){"use strict";a("891a")},"4e21":function(t,e,a){"use strict";a("cac8")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"inputFormWrapper"},[a("input-form",{on:{"new-block":t.addAtEnd}}),a("button",{staticClass:"btn btnPrimary",on:{click:t.createJson}},[t._v("Create Json")]),a("a",{attrs:{href:"/getJson"}},[a("button",{staticClass:"btn btnSecondary",on:{click:t.downloadJson}},[t._v(" Download Json ")])]),a("div",{staticClass:"blocksWrapper"},[a("flow-chart-block",{attrs:{blockInputType:!0,placeholderText:"Enter text for usermessage block.",draggable:"true","block-data":{type:"usermessage",id:999,value:"Dummy Text"}},nativeOn:{dragstart:function(e){return t.draggingStarted(e,{type:"usermessage",value:t.userMessage})}},model:{value:t.userMessage,callback:function(e){t.userMessage=e},expression:"userMessage"}}),a("flow-chart-block",{attrs:{blockInputType:!0,placeholderText:"Enter text for utterance block.",draggable:"true","block-data":{type:"utterance",id:998,value:"Hello"}},nativeOn:{dragstart:function(e){return t.draggingStarted(e,{type:"utterance",value:t.utterance})}},model:{value:t.utterance,callback:function(e){t.utterance=e},expression:"utterance"}}),a("flow-chart-block",{attrs:{blockInputType:!0,placeholderText:"Enter text for action block.",draggable:"true","block-data":{type:"action",id:997,value:"Hello"}},nativeOn:{dragstart:function(e){return t.draggingStarted(e,{type:"action",value:t.action})}},model:{value:t.action,callback:function(e){t.action=e},expression:"action"}})],1),a("span",{staticClass:"info"},[t._v("*"+t._s(t.dataOutputted))])],1),a("div",{staticClass:"flowChartOutputWrapper"},[a("div",{ref:"flowChartContainer",staticClass:"flowChartOutput",on:{drop:t.onDrop,dragenter:function(t){t.preventDefault()},dragover:function(t){t.preventDefault()}}},t._l(t.flowChartBlocks,(function(e){return a("flow-chart-block",{key:"blockItem"+e.type+e.id,staticClass:"draggable",attrs:{"block-data":e,draggable:"true"},on:{"delete-block":t.deleteBlock},nativeOn:{dragstart:function(a){return t.draggingStarted(a,e.id)}}})})),1),a("span",{staticClass:"info"},[t._v("*Click on the block to delete it")])])])},o=[],l=a("b85c"),c=a("3835"),s=(a("7db0"),a("c740"),a("a434"),a("a630"),a("3ca3"),a("a9e3"),a("4de4"),a("d81d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"inputForm",attrs:{autocomplete:"off",action:"#"},on:{submit:function(e){return e.preventDefault(),t.addNewBlock.apply(null,arguments)}}},[a("select",{ref:"inputType",attrs:{name:"inputType",id:"inputType",required:""}},[a("option",{attrs:{value:"UserMessage"}},[t._v("UserMessage")]),a("option",{attrs:{value:"Utterance"}},[t._v("Utterance")]),a("option",{attrs:{value:"Action"}},[t._v("Action")])]),a("input",{ref:"inputValue",staticClass:"inputValue",attrs:{type:"text",id:"inputValue",placeholder:"Enter Text",required:""}}),a("button",{staticClass:"submit"},[t._v("Add in flowchart")])])}),u=[],i={name:"InputForm",emits:["new-block"],methods:{addNewBlock:function(){this.$emit("new-block",[this.$refs.inputType.value,this.$refs.inputValue.value]),this.$refs.inputValue.value=""}}},d=i,p=(a("4e21"),a("2877")),f=Object(p["a"])(d,s,u,!1,null,"2045a176",null),h=f.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flowChartBlock",class:"flowChartBlock--"+t.blockData.type,attrs:{id:t.blockData.id},on:{click:function(e){return t.$emit("delete-block",t.blockData.id)}}},[t.blockInputType?a("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"blockInput",attrs:{type:"text",placeholder:t.placeholderText},domProps:{value:t.val},on:{input:[function(e){e.target.composing||(t.val=e.target.value)},function(e){return t.$emit("input",t.val)}]}}):a("span",[t._v(t._s(t.blockData.value))])])},v=[],g={name:"FlowChartBlock",emits:["delete-block"],props:{blockData:{type:Object,default:null},blockInputType:{type:Boolean,default:!1},placeholderText:{type:String,default:"Enter Text"}},data:function(){return{val:""}}},k=g,m=(a("2465"),Object(p["a"])(k,b,v,!1,null,"56f6de76",null)),y=m.exports,w=a("bc3a"),C=a.n(w),O={name:"App",components:{InputForm:h,FlowChartBlock:y},data:function(){return{flowChartBlocks:[{type:"usermessage",id:1,value:"dummy text - user message block"},{type:"action",id:2,value:"dummy text - action block"},{type:"utterance",id:3,value:"dummy text - utterance block"}],newId:3,dataOutputted:"Data's been updated, create Json again.",userMessage:"",utterance:"",action:""}},methods:{draggingStarted:function(t,e){if(e instanceof Object)return e=JSON.stringify(e),void t.dataTransfer.setData("blockData",e);t.dataTransfer.setData("blockId",e)},onDrop:function(t){var e,a=t.dataTransfer.getData("blockId"),n=this.getDragAfterElement(t.clientY),r=NaN;if(a?(e=this.flowChartBlocks.find((function(t){return t.id===parseInt(a)})),r=this.flowChartBlocks.findIndex((function(t){return t.id===parseInt(a)}))):(e=JSON.parse(t.dataTransfer.getData("blockData")),e=this.createflowChartBlocks(e)),void 0===n)isNaN(r)||this.flowChartBlocks.splice(r,1),this.flowChartBlocks.push(e);else{var o=this.flowChartBlocks.findIndex((function(t){return t.id===n.id}));isNaN(r)||this.flowChartBlocks.splice(r,1),this.flowChartBlocks.splice(o,0,e)}},getDragAfterElement:function(t){var e=Array.from(this.$refs.flowChartContainer.querySelectorAll(".draggable"));return e.reduce((function(e,a){var n=a.getBoundingClientRect(),r=t-n.top-n.height/2;return r<0&&r>e.offset?{offset:r,element:a}:e}),{offset:Number.NEGATIVE_INFINITY}).element},createflowChartBlocks:function(t){return this.newId++,Object.assign(t,{id:this.newId})},addAtEnd:function(t){var e=Object(c["a"])(t,2),a=e[0],n=e[1],r=this.createflowChartBlocks({type:a.toLowerCase(),value:n});this.flowChartBlocks.push(r),this.dataOutputted="Data's been updated, create Json again."},deleteBlock:function(t){this.flowChartBlocks=this.flowChartBlocks.filter((function(e){return e.id!=t})),this.dataOutputted="Data's been updated, create Json again."},downloadJson:function(){this.dataOutputted="Downloading the JSON file"},createJson:function(){var t,e=this,a=this.flowChartBlocks.map((function(t){return{id:t.id,type:t.type,value:t.value}})),n=!1,r={response:[]},o=1,c=[],s=Object(l["a"])(a);try{for(s.s();!(t=s.n()).done;){var u=t.value;o++,"usermessage"===u.type?n?(c.push(r),r={query:u,response:[]}):(r.query=u,n=!0):r.response.push(u),o==a.length&&c.push(r)}}catch(i){s.e(i)}finally{s.f()}C.a.post("/saveData",c).then((function(){e.dataOutputted="Data's been saved in Json format."})).catch((function(t){t&&(e.dataOutputted="Something went wrong.")}))}}},x=O,B=(a("5c0b"),Object(p["a"])(x,r,o,!1,null,null,null)),D=B.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(D)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"891a":function(t,e,a){},"9c0c":function(t,e,a){},cac8:function(t,e,a){}});
//# sourceMappingURL=app.cb8484ba.js.map