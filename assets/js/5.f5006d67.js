(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{170:function(t,n,e){"use strict";var o=e(3),s=e(14),i=e(17),c=e(68),l=e(65),r=e(6),a=e(86).f,u=e(87).f,f=e(8).f,v=e(178).trim,p=o.Number,_=p,h=p.prototype,m="Number"==i(e(66)(h)),d="trim"in String.prototype,b=function(t){var n=l(t,!1);if("string"==typeof n&&n.length>2){var e,o,s,i=(n=d?n.trim():v(n,3)).charCodeAt(0);if(43===i||45===i){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===i){switch(n.charCodeAt(1)){case 66:case 98:o=2,s=49;break;case 79:case 111:o=8,s=55;break;default:return+n}for(var c,r=n.slice(2),a=0,u=r.length;a<u;a++)if((c=r.charCodeAt(a))<48||c>s)return NaN;return parseInt(r,o)}}return+n};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof p&&(m?r(function(){h.valueOf.call(e)}):"Number"!=i(e))?c(new _(b(n)),e,p):b(n)};for(var g,C=e(7)?a(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),$=0;C.length>$;$++)s(_,g=C[$])&&!s(p,g)&&f(p,g,u(_,g));p.prototype=h,h.constructor=p,e(11)(o,"Number",p)}},178:function(t,n,e){var o=e(10),s=e(18),i=e(6),c=e(179),l="["+c+"]",r=RegExp("^"+l+l+"*"),a=RegExp(l+l+"*$"),u=function(t,n,e){var s={},l=i(function(){return!!c[t]()||"​"!="​"[t]()}),r=s[t]=l?n(f):c[t];e&&(s[e]=r),o(o.P+o.F*l,"String",s)},f=u.trim=function(t,n){return t=String(s(t)),1&n&&(t=t.replace(r,"")),2&n&&(t=t.replace(a,"")),t};t.exports=u},179:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},190:function(t,n,e){},191:function(t,n,e){},192:function(t,n,e){},221:function(t,n,e){"use strict";var o=e(190);e.n(o).a},222:function(t,n,e){"use strict";var o=e(191);e.n(o).a},223:function(t,n,e){"use strict";var o=e(192);e.n(o).a},228:function(t,n,e){"use strict";e.r(n);e(27);e(170);var o,s={name:"VpartsToast",props:{autoClose:{type:[Boolean,Number],default:5,validator:function(t){return!1===t||"number"==typeof t}},closeButton:{type:Object,default:function(){return{text:"关闭",callback:void 0}}},enableHtml:{type:Boolean,default:!1},position:{type:String,default:"top",validator:function(t){return["top","bottom","middle"].indexOf(t)>=0}}},mounted:function(){this.updateStyles(),this.execAutoClose()},computed:{toastClasses:function(){return t={},n="position-".concat(this.position),e=!0,n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t;var t,n,e}},methods:{updateStyles:function(){var t=this;this.$nextTick(function(){t.$refs.line.style.height="".concat(t.$refs.toast.getBoundingClientRect().height,"px")})},execAutoClose:function(){var t=this;this.autoClose&&setTimeout(function(){t.close()},1e3*this.autoClose)},close:function(){this.$el.remove(),this.$emit("close"),this.$destroy()},onClickClose:function(){this.close(),this.closeButton&&"function"==typeof this.closeButton.callback&&this.closeButton.callback(this)}}},i=(e(221),e(1)),c=Object(i.a)(s,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"v-toast",class:t.toastClasses},[e("div",{ref:"toast",staticClass:"toast"},[e("div",{staticClass:"message"},[t.enableHtml?e("div",{domProps:{innerHTML:t._s(t.$slots.default[0])}}):t._t("default")],2),t._v(" "),e("div",{ref:"line",staticClass:"line"}),t._v(" "),t.closeButton?e("span",{staticClass:"close",on:{click:t.onClickClose}},[t._v("\n      "+t._s(t.closeButton.text)+"\n    ")]):t._e()])])},[],!1,null,"a850ae86",null).exports,l={install:function(t,n){t.prototype.$toast=function(n,e){o&&o.close(),o=function(t){var n=t.Vue,e=t.message,o=t.propsData,s=t.onClose,i=new(n.extend(c))({propsData:o});return i.$slots.default=[e],i.$mount(),i.$on("close",s),document.body.appendChild(i.$el),i}({Vue:t,message:n,propsData:e,onClose:function(){o=null}})}}};var r=e(193);e(0).a.use(l);var a={components:{vButton:r.a},methods:{onClickButton:function(){this.$toast("你知道点我就可以关闭吗？",{closeButton:{text:"知道了",callback:function(){console.log("用户已经点击")}}})},onClickHtml:function(){this.$toast('<strong style="color:red">可支持html哦</strong>',{closeButton:{text:"我知道了",callback:function(t){console.log("用户说知道了")}},enableHtml:!0,position:"top",autoClose:1})}},data:function(){return{content:"\n          <style>\n            .v-toast {\n              z-index: 300;\n            }\n          </style>\n          <v-button @click=\"$toast('点击弹出提示')\">上方弹出</v-button>\n          <v-button @click=\"$toast('点击弹出提示', {position:'middle'})\">中间弹出</v-button>\n          <v-button @click=\"$toast('点击弹出提示', {position:'bottom'})\">下方弹出</v-button>\n      ".replace(/^ {8}/gm,"").trim(),contentClose:"\n        methods: {\n          onClickButton() {\n            this.$toast('你知道点我就可以关闭吗？', {\n              closeButton: {\n                text: '知道了',\n                callback: () => {\n                    console.log('用户已经点击')\n                }\n              }\n            })\n          }\n        }\n      ",contentHtml:"\n      onClickHtml () {\n        this.$toast('<strong style=\"color:red\">可支持html哦</strong>', {\n          closeButton: {\n            text: '我知道了',\n            callback (toast) {\n              console.log('用户说知道了')\n            }\n          },\n          enableHtml: true,\n          position: 'top',\n          autoClose: 1\n        })\n      }\n      "}}},u=(e(222),e(223),Object(i.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"paddinv-top":"16px"}},[e("h2",[t._v("使用this.$toast即可使用")]),t._v(" "),t._m(0),t._v(" "),e("div",[e("v-button",{on:{click:function(n){return t.$toast("点击弹出提示")}}},[t._v("上方弹出")]),t._v(" "),e("v-button",{on:{click:function(n){return t.$toast("点击弹出提示",{position:"middle"})}}},[t._v("中间弹出")]),t._v(" "),e("v-button",{on:{click:function(n){return t.$toast("点击弹出提示",{position:"bottom"})}}},[t._v("下方弹出")])],1),t._v(" "),t._m(1),t._v(" "),e("pre",[e("code",[t._v(t._s(t.content))])]),t._v(" "),e("p",[t._v("设置关闭按钮")]),t._v(" "),e("div",[e("v-button",{on:{click:t.onClickButton}},[t._v("弹出可关闭")])],1),t._v(" "),t._m(2),t._v(" "),e("pre",[e("code",[t._v(t._s(t.contentClose))])]),t._v(" "),t._m(3),t._v(" "),e("div",[e("v-button",{on:{click:t.onClickHtml}},[t._v("支持html")])],1),t._v(" "),t._m(4),t._v(" "),e("pre",[e("code",[t._v(t._s(t.contentHtml))])])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("可插入html")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"8e441604",null));n.default=u.exports}}]);