(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{484:function(e,t,r){"use strict";r.r(t);var v=r(14),a=Object(v.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"vue2-x源码解析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue2-x源码解析"}},[e._v("#")]),e._v(" Vue2.x源码解析")]),e._v(" "),r("ul",[r("li",[e._v("Vue整体架构")]),e._v(" "),r("li",[e._v("双向数据绑定原理")]),e._v(" "),r("li",[e._v("Vue运行时的优化")])]),e._v(" "),r("h2",{attrs:{id:"vue-整体架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-整体架构"}},[e._v("#")]),e._v(" Vue 整体架构")]),e._v(" "),r("h3",{attrs:{id:"目录结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[e._v("#")]),e._v(" 目录结构")]),e._v(" "),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("├── dist                    // 打包后的vue版本\n├── flow                    // 类型检查， 3.0换了TypeScript\n├── script                  // 构建不同版本vue的相关配置\n├── src                     // 源码\n│   ├── compiler            // 模版编译器\n│   ├── core                // 双向数据绑定核心代码\n│       ├── components      // 通用的抽象组件\n│       ├── global-api      // 全局API\n│       ├── instance        // 实例的构造函数和方法\n│       ├── observer        // 数据响应式\n│       ├── utils           // 常用的工具函数\n│       └── vdom            // 虚拟DOM相关\n│   ├── platforms           // 平台的核心模块，不同平台的不同实现\n│   ├── server              // 服务端渲染\n│   ├── sfc                 // 处理但文件.vue的解析\n│   └── shared              // 提供全局用到的工具方法\n└── test                    // 单元测试等\n")])])]),r("p",[r("img",{attrs:{src:"/blog/vue-defineProperty.png",alt:"img"}})]),e._v(" "),r("h2",{attrs:{id:"vue运行时的优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue运行时的优化"}},[e._v("#")]),e._v(" Vue运行时的优化")]),e._v(" "),r("ul",[r("li",[e._v("完整版：同时包含编译器和运行时的版本。")]),e._v(" "),r("li",[e._v("编译器：用来将模板字符串编译成为 JavaScript 渲染函数的代码。")]),e._v(" "),r("li",[e._v("运行时：用来创建 Vue 实例、渲染并处理虚拟 DOM 等的代码，在这个过程中，保留的状态和数据。基本上就是除去编译器的其它一切。")])]),e._v(" "),r("h2",{attrs:{id:"双向数据绑定原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#双向数据绑定原理"}},[e._v("#")]),e._v(" 双向数据绑定原理")]),e._v(" "),r("p",[e._v("执行"),r("code",[e._v("vm=new Vue()")]),e._v("函数后，Observer会监听vm对象。\n当页面中执行获取vue实例下的数据时会触发Observer.get方法，初始化状态get没有值，那么就会把当前模板对应的Watcher添加到依赖收集，当该模板下的变量被赋值的时候 通过Observer.set方法通过依赖告诉对应的Watcher去更新")]),e._v(" "),r("ul",[r("li",[e._v("Object.defineProperty")]),e._v(" "),r("li",[e._v("Observer")]),e._v(" "),r("li",[e._v("Watcher")]),e._v(" "),r("li",[e._v("Dep")]),e._v(" "),r("li",[e._v("Directive")])])])}),[],!1,null,null,null);t.default=a.exports}}]);