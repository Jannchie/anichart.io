(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{175:function(e,t,o){"use strict";var r=o(1),n=o(176);r.a.use(n.a),t.a=function(e){var t=e.app,r=e.store;t.i18n=new n.a({locale:r.state.locale,fallbackLocale:"en",messages:{en:o(384),zh:o(385)}})}},177:function(e,t,o){"use strict";var r=o(1),n=o(255),c=o.n(n);o(386),o(388),o(390);r.a.use(c.a,{options:{lineNumbers:!0,line:!0,tabSize:2,styleActiveLine:!0,foldGutter:!0,styleSelectedText:!0,scrollbarStyle:"null",lineWrapping:!0,mode:"text/javascript",theme:"vscode-dark"},events:["scroll"]})},217:function(e,t,o){var content=o(299);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(17).default)("6a60078a",content,!0,{sourceMap:!1})},257:function(e,t,o){"use strict";o(23);var r={data:function(){return{clipped:!1,drawer:!1,fixed:!0,showMenu:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-pencil",title:"Edit Page",to:"/edit"},{icon:"mdi-view-grid",title:"List Charts",to:"/list"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"},{icon:"mdi-chart-areaspline",title:"Demo",to:"/demo-list"}],miniVariant:!0,title:"Anichart.io"}},methods:{getLangPath:function(e){return"/".concat(this.$store.state.locale).concat(e)},changeLanguage:function(e){this.$router.push({params:{lang:e}})}}},n=o(86),c=o(120),l=o.n(c),d=o(402),m=o(409),v=o(403),f=o(258),h=o(410),k=o(404),_=o(168),w=o(169),x=o(113),C=o(170),V=o(84),y=o(405),L=o(407),M=o(408),S=o(406),N=o(251),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",{attrs:{dark:""}},[o("v-navigation-drawer",{attrs:{"mini-variant":e.miniVariant,clipped:e.clipped,fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[o("v-list",e._l(e.items,(function(t,i){return o("v-list-item",{key:i,attrs:{to:e.getLangPath(t.to),router:"",exact:""}},[o("v-list-item-action",[o("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)],1)})),1)],1),e._v(" "),o("v-app-bar",{attrs:{"clipped-left":e.clipped,fixed:"",app:""}},[o("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),o("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.miniVariant=!e.miniVariant}}},[o("v-icon",[e._v("mdi-"+e._s("chevron-"+(e.miniVariant?"right":"left")))])],1),e._v(" "),o("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.clipped=!e.clipped}}},[o("v-icon",[e._v("mdi-application")])],1),e._v(" "),o("v-toolbar-title",{domProps:{textContent:e._s(e.title)}}),e._v(" "),o("v-spacer"),e._v(" "),o("v-menu",{staticStyle:{"max-width":"600px"},attrs:{absolute:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[o("v-btn",e._g(e._b({attrs:{text:""}},"v-btn",n,!1),r),[o("v-icon",{attrs:{left:""}},[e._v("mdi-web")]),e._v(e._s(e.$t("language"))+"\n        ")],1)]}}]),model:{value:e.showMenu,callback:function(t){e.showMenu=t},expression:"showMenu"}},[e._v(" "),o("v-list",e._l(["zh","en"],(function(t,r){return o("v-list-item",{key:r,on:{click:function(o){return o.stopPropagation(),e.changeLanguage(t)}}},[o("v-list-item-title",[e._v(e._s(e.$t("lang."+t)))])],1)})),1)],1)],1),e._v(" "),o("v-main",[o("v-container",[o("nuxt")],1)],1),e._v(" "),o("v-footer",{attrs:{absolute:!e.fixed,app:""}},[o("span",[e._v("© "+e._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);t.a=component.exports;l()(component,{VApp:d.a,VAppBar:m.a,VAppBarNavIcon:v.a,VBtn:f.a,VContainer:h.a,VFooter:k.a,VIcon:_.a,VList:w.a,VListItem:x.a,VListItemAction:C.a,VListItemContent:V.a,VListItemTitle:V.b,VMain:y.a,VMenu:L.a,VNavigationDrawer:M.a,VSpacer:S.a,VToolbarTitle:N.a})},272:function(e,t,o){o(273),e.exports=o(274)},292:function(e,t,o){"use strict";o.r(t);o(23);t.default=function(e){var t=e.isHMR,o=e.app,r=e.store,n=e.route,c=e.params,l=(e.error,e.redirect),d=o.i18n.fallbackLocale;if(!t){var m=c.lang;if("/"===n.fullPath)return r.commit("SET_LANG",d),o.i18n.locale=r.state.locale,l("/".concat(d).concat(n.fullPath));r.commit("SET_LANG",m),o.i18n.locale=r.state.locale}}},298:function(e,t,o){"use strict";o(217)},299:function(e,t,o){(t=o(16)(!1)).push([e.i,"h1[data-v-26ee17a1]{font-size:20px}",""]),e.exports=t},360:function(e,t,o){"use strict";o.r(t),o.d(t,"state",(function(){return r})),o.d(t,"mutations",(function(){return n}));o(37),o(55);var r=function(){return{locales:["en","zh"],locale:"zh"}},n={SET_LANG:function(e,t){e.locales.includes(t)&&(e.locale=t)}}},384:function(e){e.exports=JSON.parse('{"app":{"name":"Anichart.io"},"save":"Save","output":"Output","options":"Options","edit":{"preview":"Preview","title":"Edit"},"csv-file":"CSV File","import-csv-file":"Import CSV File","loading":"Loading","meta-table":"Meta Table","meta-table-desc":"Used to store details that do not change.","data-table":"Data Table","data-table-desc":"Used to store data records that change.","lang":{"zh":"Chinese","en":"English"},"language":"Language","demo":{"title":"Demo","line":"Simple Line Chart","bar":"Simple Bar Chart"}}')},385:function(e){e.exports=JSON.parse('{"app":{"name":"Anichart动态数据可视化"},"save":"保存","output":"导出","options":"配置项目","edit":{"preview":"预览","title":"编辑"},"csv-file":"CSV文件","import-csv-file":"载入CSV文件","loading":"载入中","meta-table":"信息表","meta-table-desc":"用于存放一些不会变动的详细信息","data-table":"数据表","data-table-desc":"用于存放一些会变化的数据记录","lang":{"zh":"简体中文","en":"英文"},"language":"语言","demo":{"title":"示例程序","line":"简单的动态折线图","bar":"简单的动态条形图"}}')},388:function(e,t,o){var content=o(389);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(17).default)("a12f3536",content,!0,{sourceMap:!1})},389:function(e,t,o){(t=o(16)(!1)).push([e.i,'.cm-s-vscode-dark span.cm-meta{color:#569cd6}.cm-s-vscode-dark span.cm-number{color:#b5cea8}.cm-s-vscode-dark span.cm-keyword{line-height:1em;font-weight:700;color:#569cd6}.cm-s-vscode-dark span.cm-def{color:#9cdcfe}.cm-s-vscode-dark span.cm-variable{color:#ddd6a3}.cm-s-vscode-dark span.cm-variable-2{color:#9cdcfe}.cm-s-vscode-dark span.cm-type,.cm-s-vscode-dark span.cm-variable-3{color:#a9b7c6}.cm-s-vscode-dark span.cm-property{color:#9cdcfe}.cm-s-vscode-dark span.cm-operator{color:#d4d4d4}.cm-s-vscode-dark span.cm-string{color:#ce9178}.cm-s-vscode-dark span.cm-string-2{color:#6a8759}.cm-s-vscode-dark span.cm-comment{color:#6a9955}.cm-s-vscode-dark span.cm-link{color:#287bde}.cm-s-vscode-dark span.cm-atom{color:#569cd6}.cm-s-vscode-dark span.cm-error{color:#bc3f3c}.cm-s-vscode-dark span.cm-tag{color:#569cd6}.cm-s-vscode-dark span.cm-attribute{color:#9cdcfe}.cm-s-vscode-dark span.cm-qualifier{color:#d7ba7d}.cm-s-vscode-dark span.cm-bracket{color:grey}.cm-s-vscode-dark.CodeMirror{background:#1e1e1e;color:#e9e9e9}.cm-s-vscode-dark .CodeMirror-cursor{border-left:1px solid #bebebe}.CodeMirror-activeline-background{background:#3a3a3a}.cm-s-vscode-dark div.CodeMirror-selected{background:#1e496c}.cm-s-vscode-dark .CodeMirror-gutters{background:#252526;border-right:1px solid grey;color:#606366}.cm-s-vscode-dark span.cm-builtin{color:#a9b7c6}.cm-s-vscode-dark{font-family:Consolas,"Courier New",monospace,serif}.cm-s-vscode-dark .CodeMirror-matchingbracket{background-color:#3b514d;color:#ff0!important}.CodeMirror-hints.vscode-dark{font-family:Consolas,"Courier New",monospace;color:#9c9e9e;background-color:#3b3e3f!important}.CodeMirror-hints.vscode-dark .CodeMirror-hint-active{background-color:#494d4e!important;color:#9c9e9e!important}',""]),e.exports=t},78:function(e,t,o){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(o(298),o(86)),c=o(120),l=o.n(c),d=o(402),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",{attrs:{dark:""}},[404===e.error.statusCode?o("h1",[e._v("\n    "+e._s(e.pageNotFound)+"\n  ")]):o("h1",[e._v("\n    "+e._s(e.otherError)+"\n  ")]),e._v(" "),o("NuxtLink",{attrs:{to:"/"}},[e._v(" Home page ")])],1)}),[],!1,null,"26ee17a1",null);t.a=component.exports;l()(component,{VApp:d.a})}},[[272,13,4,14]]]);