(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{481:function(t,e,a){"use strict";a.r(e);var r=a(14),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react-源码分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-源码分析"}},[t._v("#")]),t._v(" React 源码分析")]),t._v(" "),a("p",[t._v("版本：16.13.0")]),t._v(" "),a("h2",{attrs:{id:"预备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预备工作"}},[t._v("#")]),t._v(" 预备工作")]),t._v(" "),a("ul",[a("li",[t._v("React.createElement")]),t._v(" "),a("li",[t._v("React.children.map")]),t._v(" "),a("li",[t._v("React.fiber的思路")]),t._v(" "),a("li",[t._v("ReactDom.render分析")]),t._v(" "),a("li",[t._v("更新state是怎么执行的")]),t._v(" "),a("li",[t._v("hooks源码分析")]),t._v(" "),a("li",[t._v("hooks实例分析")])]),t._v(" "),a("p",[t._v("工具")]),t._v(" "),a("ul",[a("li",[t._v("prettier格式化")])]),t._v(" "),a("h2",{attrs:{id:"react工作流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react工作流"}},[t._v("#")]),t._v(" React工作流")]),t._v(" "),a("p",[t._v("执行ReactDom.render() 都干了什么。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("legacyRenderSubtreeIntoContainer 方法做了哪些事情\n1、创建 reactRoot 在dom元素上挂在，FiberRoot\n2、初始化时调用 unbatchUpdates 非批处理\n为什么初始化时不用批处理，初始化操作不需要单独做批处理操作，不做的话会比较快。\nunbatchUpdates 方法\nexecutionContext 内部上下文，闭包\n状态为什么使用二进制？\n1.按位操作 减少执行时间\n2.方便比较，代码少\n"),a("strong",[t._v("需要了解 二进制按位操作及返码")]),t._v("\n3、运行时调用 updateContainer")]),t._v(" "),a("p",[t._v("1 拿到第一个FiberNode "),a("code",[t._v("container.current")]),t._v("\n2 设置 expirationTime")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);