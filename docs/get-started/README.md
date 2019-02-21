---
title: 快速上手
---
# 引入v-parts UI
目前还不是正式版本,推荐部分引入组件, 比如Button,那么需要在项目的main.js中写入一下内容:
~~~
import 'v-parts/dist/index.css'
import {Button} from 'v-parts'
Vue.component('v-button', Button)
~~~
完整组件列表和引入方式
~~~
import {
Button ,
ButtonGroup ,
Icon ,
Input ,
Row ,
Col ,
Layout ,
Header ,
Content ,
Sider ,
Footer ,
Toast ,
plugin ,
Tabs ,
TabsHead ,
TabsBody ,
TabsPane ,
TabsItem ,
Collapse ,
CollapseItem 
Popover } from 'v-parts'
~~~