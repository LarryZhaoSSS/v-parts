(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{189:function(t,o,e){},220:function(t,o,e){"use strict";var n=e(189);e.n(n).a},231:function(t,o,e){"use strict";e.r(o);var n=e(193),i={name:"VpartsPopover",props:{position:{type:String,default:"top",validator:function(t){return["top","bottom","left","right"].indexOf(t)>=0}},trigger:{type:String,default:"click",validator:function(t){return["click","hover"].indexOf(t)>=0}}},mounted:function(){"click"===this.trigger?this.$refs.popover.addEventListener("click",this.onClick):(this.$refs.popover.addEventListener("mouseenter",this.open),this.$refs.popover.addEventListener("mouseleave",this.close))},computed:{openEvent:function(){return"click"===this.trigger?"click":"mouseenter"},closeEvent:function(){return"click"===this.trigger?"click":"mouseleave"}},data:function(){return{visible:!1}},methods:{positionContent:function(){var t=this.$refs,o=t.contentWrapper,e=t.triggerWrapper;document.body.appendChild(o);var n=e.getBoundingClientRect(),i=n.width,v=n.height,r=n.top,p=n.left,s=o.getBoundingClientRect().height,c={top:{top:r+window.scrollY,left:p+window.scrollX},bottom:{top:r+v+window.scrollY,left:p+window.scrollX},left:{top:r+window.scrollY+(v-s)/2,left:p+window.scrollX},right:{top:r+window.scrollY+(v-s)/2,left:p+window.scrollX+i}};o.style.left=c[this.position].left+"px",o.style.top=c[this.position].top+"px"},onClickDocument:function(t){this.$refs.popover&&(this.$refs.popover===t.target||this.$refs.popover.contains(t.target))||this.$refs.contentWrapper&&(this.$refs.contentWrapper===t.target||this.$refs.contentWrapper.contains(t.target))||this.close()},open:function(){var t=this;this.visible=!0,this.$nextTick(function(){t.positionContent(),document.addEventListener("click",t.onClickDocument)})},close:function(){this.visible=!1,document.removeEventListener("click",this.onClickDocument)},onClick:function(t){this.$refs.triggerWrapper.contains(t.target)&&(!0===this.visible?this.close():this.open())}}},v=(e(220),e(1)),r=Object(v.a)(i,function(){var t,o=this.$createElement,e=this._self._c||o;return e("div",{ref:"popover",staticClass:"popover"},[this.visible?e("div",{ref:"contentWrapper",staticClass:"content-wrapper",class:(t={},t["position-"+this.position]=!0,t)},[this._t("content",null,{close:this.close})],2):this._e(),this._v(" "),e("span",{ref:"triggerWrapper",staticStyle:{display:"inline-block"}},[this._t("default")],2)])},[],!1,null,"57523148",null).exports,p={components:{vButton:n.a,vPopover:r},data:function(){return{contentClick:'\n    <v-popover position="bottom">\n      <template slot="content">\n        <div>popover</div>\n      </template>\n      <v-button>出现下方</v-button>\n    </v-popover>\n\n    <v-popover position="top">\n      <template slot="content">\n        <div>popover</div>\n      </template>\n      <v-button>出现上方</v-button>\n    </v-popover>\n\n    <v-popover position="left">\n      <template slot="content" slot-scope="{close}">\n        <div>popover content\n          <div>\n            <a href="http://qq.com">qq官网</a>\n          </div>\n          <v-button @click="close">点我关闭</v-button>\n        </div>\n      </template>\n      <v-button>出现左侧,支持html</v-button>\n    </v-popover>\n\n    <v-popover position="right">\n      <template slot="content">\n        <div>popover content</div>\n      </template>\n      <v-button>出现右侧</v-button>\n    </v-popover>\n    ',contentHover:'\n    <v-popover position="bottom" trigger="hover">\n      <template slot="content">\n        <div>popover</div>\n      </template>\n      <v-button>出现下方</v-button>\n    </v-popover>\n\n    <v-popover position="top" trigger="hover">\n      <template slot="content">\n        <div>popover</div>\n      </template>\n      <v-button>出现上方</v-button>\n    </v-popover>\n\n    <v-popover position="left" trigger="hover">\n      <template slot="content">\n        <div>popover</div>\n      </template>\n      <v-button>出现左方</v-button>\n    </v-popover>\n\n    <v-popover position="right" trigger="hover">\n      <template slot="content">\n        <div>popover content</div>\n      </template>\n      <v-button>出现右方</v-button>\n    </v-popover>\n    '}}},s=Object(v.a)(p,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("h3",[t._v("默认点击触发")]),t._v(" "),e("v-popover",{attrs:{position:"bottom"}},[e("template",{slot:"content"},[e("div",[t._v("popover")])]),t._v(" "),e("v-button",[t._v("出现下方")])],2),t._v(" "),e("v-popover",{attrs:{position:"top"}},[e("template",{slot:"content"},[e("div",[t._v("popover")])]),t._v(" "),e("v-button",[t._v("出现上方")])],2),t._v(" "),e("v-popover",{attrs:{position:"left"},scopedSlots:t._u([{key:"content",fn:function(o){var n=o.close;return[e("div",[t._v("popover content\n        "),e("div",[e("a",{attrs:{href:"http://qq.com"}},[t._v("qq官网")])]),t._v(" "),e("v-button",{on:{click:n}},[t._v("点我关闭")])],1)]}}])},[t._v(" "),e("v-button",[t._v("出现左侧,支持html")])],1),t._v(" "),e("v-popover",{attrs:{position:"right"}},[e("template",{slot:"content"},[e("div",[t._v("popover content")])]),t._v(" "),e("v-button",[t._v("出现右侧")])],2),t._v(" "),t._m(0),t._v(" "),e("pre",[e("code",[t._v(t._s(t.contentClick))])]),t._v(" "),e("h3",[t._v("hover触发")]),t._v(" "),e("v-popover",{attrs:{position:"bottom",trigger:"hover"}},[e("template",{slot:"content"},[e("div",[t._v("popover")])]),t._v(" "),e("v-button",[t._v("出现下方")])],2),t._v(" "),e("v-popover",{attrs:{position:"top",trigger:"hover"}},[e("template",{slot:"content"},[e("div",[t._v("popover")])]),t._v(" "),e("v-button",[t._v("出现上方")])],2),t._v(" "),e("v-popover",{attrs:{position:"left",trigger:"hover"}},[e("template",{slot:"content"},[e("div",[t._v("popover")])]),t._v(" "),e("v-button",[t._v("出现左方")])],2),t._v(" "),e("v-popover",{attrs:{position:"right",trigger:"hover"}},[e("template",{slot:"content"},[e("div",[t._v("popover content")])]),t._v(" "),e("v-button",[t._v("出现右方")])],2),t._v(" "),t._m(1),t._v(" "),e("pre",[e("code",[t._v(t._s(t.contentHover))])])],1)},[function(){var t=this.$createElement,o=this._self._c||t;return o("p",[o("strong",[this._v("代码")])])},function(){var t=this.$createElement,o=this._self._c||t;return o("p",[o("strong",[this._v("代码")])])}],!1,null,"241b4f0c",null);o.default=s.exports}}]);