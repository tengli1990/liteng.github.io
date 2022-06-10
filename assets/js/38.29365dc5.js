(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{467:function(s,e,a){"use strict";a.r(e);var t=a(14),l=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"webassembly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webassembly"}},[s._v("#")]),s._v(" WebAssembly")]),s._v(" "),a("ul",[a("li",[s._v("WASM的特点")]),s._v(" "),a("li",[s._v("性能表现")]),s._v(" "),a("li",[s._v("WASM开发工具")]),s._v(" "),a("li",[s._v("应用场景")]),s._v(" "),a("li",[s._v("JavaScript API")]),s._v(" "),a("li",[s._v("C语言编译成WebAssembly")]),s._v(" "),a("li",[s._v("实现一个 Hello World")])]),s._v(" "),a("h2",{attrs:{id:"wasm的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wasm的特点"}},[s._v("#")]),s._v(" WASM的特点")]),s._v(" "),a("p",[a("img",{attrs:{src:"/blog/webassembly-characteristic.png",alt:"img"}})]),s._v(" "),a("ul",[a("li",[a("p",[s._v("高效\nWebAssembly 有一套完整的语义，实际上wasm是体积小且加载快的二进制格式，其目的就是充分发挥硬件能力以达到原生执行效率")])]),s._v(" "),a("li",[a("p",[s._v("安全\nWebAssembly 运行在一个沙箱化的执行环境中，甚至可以在现有的JavaScript 虚拟机中实现。在web环境中，WebAssembly 将会严格遵守同源策略以及浏览器安全策略。")])]),s._v(" "),a("li",[a("p",[s._v("开放\nWebAssembly 设计了一个非常规整的文本格式用来调试、测试、实验、优化、学习、教学或者编写程序。可以以这种格式在web页面上查看wasm模块的源码。")])]),s._v(" "),a("li",[a("p",[s._v("标准\nWebAssembly 在web中被设计成无版本、特性可测试、向后兼容的。WebAssembly 可以被JavaScript调用，进入JavaScript 上下文，也可以像Web API 一样调用浏览器的功能。当然 WebAssembly 不仅可以运行在浏览器上，也可以运行在非web环境下。")])])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("对比JS还有以下优点")]),s._v(" "),a("ul",[a("li",[s._v("体积小、下载快")]),s._v(" "),a("li",[s._v("不需要引擎解释")]),s._v(" "),a("li",[s._v("兼容性比较少")]),s._v(" "),a("li",[s._v("虽然编译出来的是字节码，并不是机械码，需要引擎转换，但是时间可以忽略不计。")])])]),s._v(" "),a("p",[a("strong",[s._v("那么我们来看下下JS 和 WASM的处理步骤")]),s._v(" "),a("img",{attrs:{src:"/blog/webassembly-js_vs_wasm.png",alt:"img"}})]),s._v(" "),a("ul",[a("li",[s._v("JS"),a("br"),s._v(" "),a("code",[s._v("解释引擎解释 -> 编译 -> 优化 -> 执行 -> 处理GC")])]),s._v(" "),a("li",[s._v("WASM"),a("br"),s._v(" "),a("code",[s._v("解码 -> 编译优化 -> 执行")]),a("br"),s._v("\nWASM中没有GC步骤的，需要手动处理。")])]),s._v(" "),a("h2",{attrs:{id:"wasm的工具-和-性能表现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wasm的工具-和-性能表现"}},[s._v("#")]),s._v(" WASM的工具 和 性能表现")]),s._v(" "),a("ul",[a("li",[s._v("AssemblyScript:支持直接将 TypeScript 编译成 WebAssembly。这对于前端来 说，入门的门槛很低的。")]),s._v(" "),a("li",[s._v("Emscripten:可以说是 WebAssembly 的灵魂工具。将其他的高级语言，编译成 WebAssembly。\n"),a("a",{attrs:{href:"https://github.com/emscripten-core/emscripten",target:"_blank",rel:"noopener noreferrer"}},[s._v("Emscripten下载地址"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("WABT:将 WebAssembly在字节码和文本格式相互转换的一个工具，方便开发者 去理解这个 wasm 到底是在做什么事。")])]),s._v(" "),a("blockquote",[a("p",[s._v("WebAssembly版本和原生JavaScript版本的递归无优化的Fibonacci函数，下图是这 两个函数在值是45、48、50的时候的性能对比。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/blog/webassembly-performance.png",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),a("h2",{attrs:{id:"javascript-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-api"}},[s._v("#")]),s._v(" JavaScript API")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly",target:"_blank",rel:"noopener noreferrer"}},[s._v("MDN-方法和属性"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"c语言编译成webassembly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c语言编译成webassembly"}},[s._v("#")]),s._v(" C语言编译成WebAssembly")]),s._v(" "),a("h2",{attrs:{id:"webassembly实现一个hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webassembly实现一个hello-world"}},[s._v("#")]),s._v(" WebAssembly实现一个Hello World")])])}),[],!1,null,null,null);e.default=l.exports}}]);