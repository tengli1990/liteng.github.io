(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{494:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"性能优化启示录-h5版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能优化启示录-h5版"}},[t._v("#")]),t._v(" 性能优化启示录 H5版")]),t._v(" "),s("h2",{attrs:{id:"一-为什么要进行性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-为什么要进行性能优化"}},[t._v("#")]),t._v(" 一.为什么要进行性能优化？")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("57%的用户更在乎网⻚在3秒内是否完成加载。")])]),t._v(" "),s("li",[s("p",[t._v("52%的在线用户认为网⻚打开速度影响到他们对网站的忠实度。")])]),t._v(" "),s("li",[s("p",[t._v("每慢1秒造成⻚面 PV 降低11%，用户满意度也随之降低降低16%。")])]),t._v(" "),s("li",[s("p",[t._v("近半数移动用户因为在10秒内仍未打开⻚面从而放弃。")])])]),t._v(" "),s("h2",{attrs:{id:"二-性能优化学徒工"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-性能优化学徒工"}},[t._v("#")]),t._v(" 二.性能优化学徒工")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("雅虎军规")])]),t._v(" "),s("li",[s("p",[t._v("缓存策略")])]),t._v(" "),s("li",[s("p",[t._v("网站协议")])]),t._v(" "),s("li",[s("p",[t._v("小字为先")])])]),t._v(" "),s("h3",{attrs:{id:"雅虎军规践行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#雅虎军规践行"}},[t._v("#")]),t._v(" 雅虎军规践行")]),t._v(" "),s("YahooRules"),t._v(" "),s("h3",{attrs:{id:"缓存的优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存的优先级"}},[t._v("#")]),t._v(" 缓存的优先级")]),t._v(" "),s("p",[s("code",[t._v("cache-control")]),t._v(" > "),s("code",[t._v("expires")]),t._v(" > "),s("code",[t._v("etag")]),t._v(" > "),s("code",[t._v("last-modified")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/performance-h5-01.jpg",alt:"缓存的优先级"}})]),t._v(" "),s("h4",{attrs:{id:"cache-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[t._v("#")]),t._v(" cache-control")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("设置过期的时间⻓度(秒)，在这个时间范围内，浏览器请求都会直 接读缓存。当 expires 和 cache-control 都存在时，cache-control 的 优先级更高。")])]),t._v(" "),s("h4",{attrs:{id:"expires"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[t._v("#")]),t._v(" expires")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("expires: Thu, 16 May 2019 03:05:59 GMT\n在 http 头中设置一个过期时间，在这个过期时间之前，浏览器的请求都不会发出，而是\n自动从缓存中读取文件，除非缓存被清空，或者强制刷新。缺陷在于，服务器时间和用 户端时间可能存在不一致，所以 HTTP/1.1 加入了 cache-control 头来改进这个问题。")])]),t._v(" "),s("h4",{attrs:{id:"etag-if-none-match"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etag-if-none-match"}},[t._v("#")]),t._v(" etag / if-none-match")]),t._v(" "),s("p",[t._v("这也是一组请求/响应头"),s("br"),t._v('\n响应头:etag: "D5FC8B85A045FF720547BC36FC872550"'),s("br"),t._v('\n请求头:if-none-match: "D5FC8B85A045FF720547BC36FC872550"')]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("原理类似，服务器端返回资源时，如果头部带上了 etag，那么资源下次请求时就会把值加入到请求头 if-none-match 中，服务器可以对比 这个值，确定资源是否发生变化，如果没有发生变化，则返回 304。")])]),t._v(" "),s("h4",{attrs:{id:"last-modified-if-modified-since"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-if-modified-since"}},[t._v("#")]),t._v(" last-modified / if-modified-since")]),t._v(" "),s("p",[t._v("这是一组请求/相应头"),s("br"),t._v("\n响应头: last-modified: Wed, 16 May 2018 02:57:16 GMT 01"),s("br"),t._v("\n请求头:if-modified-since: Wed, 16 May 2018 05:55:38 GMT")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("服务器端返回资源时，如果头部带上了 last-modified，那么 资源下次请求时就会把值加入到请求头 if-modified-since 中，服务器可以对比这个值，确定资源是否发生变化，如果 没有发生变化，则返回 304。")])]),t._v(" "),s("h3",{attrs:{id:"http-2-多路复用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-2-多路复用"}},[t._v("#")]),t._v(" HTTP/2 多路复用")]),t._v(" "),s("p",[t._v("浏览器请求//xx.cn/a.js--\x3e解析域名—>HTTP连接—>服务器处理文件—>返回数据--\x3e浏览器解析、渲染文件。")]),t._v(" "),s("p",[t._v("Keep-Alive解决的核心问 题就在此，一定时间内，同一域名多次请求数据，只建立一次HTTP请求，其他请求可复用每一次建立的连接通道，以达到提高请求 效率的问题。")]),t._v(" "),s("p",[t._v("一定时间是可以配置的，HTTP1.1还是存在效率问题，第一个:串行的文件传输。第二个:连接数过多，对头阻塞问题。")]),t._v(" "),s("p",[t._v("HTTP/2对同一 域名下所有请求都是基于流，也就是说同一域名不管访问多少文件，也只建立一路连接。同样Apache的最大连接数为300，因为有了 这个新特性，最大的并发就可以提升到300，比原来提升了300倍!")]),t._v(" "),s("h2",{attrs:{id:"三-渲染中性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-渲染中性能优化"}},[t._v("#")]),t._v(" 三.渲染中性能优化")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("重绘影响")])]),t._v(" "),s("li",[s("p",[t._v("重排影响")])]),t._v(" "),s("li",[s("p",[t._v("如何规避")])]),t._v(" "),s("li",[s("p",[t._v("高效渲染")])])]),t._v(" "),s("h4",{attrs:{id:"代码演示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("#")]),t._v(" 代码演示")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v(" slog\n")])])]),s("h2",{attrs:{id:"四-⻚面加载性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四-⻚面加载性能优化"}},[t._v("#")]),t._v(" 四.⻚面加载性能优化")]),t._v(" "),s("p",[s("code",[t._v("CSR")]),t._v(" "),s("code",[t._v("FMP")]),t._v(" "),s("code",[t._v("SSR")]),t._v(" "),s("code",[t._v("TTI")])]),t._v(" "),s("h3",{attrs:{id:"你必须知道的概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#你必须知道的概念"}},[t._v("#")]),t._v(" 你必须知道的概念")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("EN")]),t._v(" "),s("th",[t._v("ZN")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("TTFB")]),t._v(" "),s("td",[t._v("首字节时间")])]),t._v(" "),s("tr",[s("td",[t._v("FP")]),t._v(" "),s("td",[t._v("首次绘制")])]),t._v(" "),s("tr",[s("td",[t._v("FCP")]),t._v(" "),s("td",[t._v("首次有内容的绘制")])]),t._v(" "),s("tr",[s("td",[t._v("FMP")]),t._v(" "),s("td",[t._v("首次有意义的绘制")])]),t._v(" "),s("tr",[s("td",[t._v("Isomorphic Javascript")]),t._v(" "),s("td",[t._v("同构化")])]),t._v(" "),s("tr",[s("td",[t._v("SSR&&CSR")]),t._v(" "),s("td",[t._v("服务端渲染和客户端渲染")])]),t._v(" "),s("tr",[s("td",[t._v("Long tasks")]),t._v(" "),s("td",[t._v("超过50ms的任务")])]),t._v(" "),s("tr",[s("td",[t._v("TTI")]),t._v(" "),s("td",[t._v("可交互时间")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("div",{staticStyle:{width:"40px"}},[t._v("缩写")])]),t._v(" "),s("th",[s("div",{staticStyle:{width:"180px"}},[t._v("全称")])]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("LCP")]),t._v(" "),s("td",[t._v("最大内容绘制  "),s("br"),t._v(" Largest Contentful Paint")]),t._v(" "),s("td",[t._v("用于记录视窗内最大的元素绘制时间，该时间会随着页面渲染变化而变化，因为页面中的最大元素在渲染过程中可能发生改变，另外该指标会在用户第一次交互后停止记录")])]),t._v(" "),s("tr",[s("td",[t._v("FID")]),t._v(" "),s("td",[t._v("首次输入延迟 "),s("br"),t._v("First Input Delay")]),t._v(" "),s("td",[t._v("记录在FCP 到 TTI之间用户首次与页面"),s("code",[t._v("交互时响应的延迟")])])]),t._v(" "),s("tr",[s("td",[t._v("TBT")]),t._v(" "),s("td",[t._v("总阻塞时间  "),s("br"),t._v(" Total Blocking Time")]),t._v(" "),s("td",[t._v("记录在 FCP 到 TTI 之间所有长任务的"),s("code",[t._v("阻塞时间总和")])])]),t._v(" "),s("tr",[s("td",[t._v("CLS")]),t._v(" "),s("td",[t._v("累计布局偏移 "),s("br"),t._v(" Cumulative Layout Shift")]),t._v(" "),s("td",[t._v("记录页面上非预期的位移波动，使用按钮动态添加了某个元素，导致页面上其他位置的代码发生了偏移，")])])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("核心的任务指标")]),t._v(" "),s("p",[s("code",[t._v("LCP")]),t._v("代表了页面的速度指标，"),s("code",[t._v("LCP")]),t._v("能体现的东西更多一些，一是指标时时更新，数据更精确，二是代表着页面最大元素的渲染时间，最大元素的快速载入能让用户感觉性能还挺好。")]),t._v(" "),s("p",[s("code",[t._v("FID")]),t._v(" 代表页面的交互体验指标，交互响应的快会让用户觉得网页流畅。")]),t._v(" "),s("p",[s("code",[t._v("CLS")]),t._v(" 代表了页面的稳定指标，尤其在手机上这个指标更为重要，因为手机屏幕小，"),s("code",[t._v("CLS")]),t._v(" 值大的话会让用户觉得页面体验做的很差。")])]),t._v(" "),s("h4",{attrs:{id:"_2017-05-google-user-centric-performance-metrics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2017-05-google-user-centric-performance-metrics"}},[t._v("#")]),t._v(" 2017-05 Google: User-centric Performance Metrics")]),t._v(" "),s("p",[s("img",{attrs:{src:"/performance-h5-03.jpg",alt:"你必须知道的概念"}})]),t._v(" "),s("h4",{attrs:{id:"使用performanceobserver检测fp、fcp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用performanceobserver检测fp、fcp"}},[t._v("#")]),t._v(" 使用PerformanceObserver检测FP、FCP")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    性能检测之FP、FCP\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" observer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" o "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   observer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("entryTypes")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'paint'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("以上代码的结果为")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("first-paint\n76.32999999987078\n0\nfirst-contentful-paint\n76.32999999987078\n0\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("当页面显示完全空白的时，不会触发FP和FCP"),s("br"),t._v("\n当页面内容完全空白，但是存在有背景颜色元素显示时，会触发FP"),s("br"),t._v("\n页面中只要存在显示的内容，会触发FP和FCP")])]),t._v(" "),s("h4",{attrs:{id:"为什么会出现白屏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么会出现白屏"}},[t._v("#")]),t._v(" 为什么会出现白屏？")]),t._v(" "),s("p",[s("img",{attrs:{src:"/performance-h5-05.jpg",alt:"你必须知道的概念"}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("页面白屏原因")]),t._v(" "),s("ul",[s("li",[t._v("CSS & JS 文件获取")]),t._v(" "),s("li",[t._v("JS 文件解析")]),t._v(" "),s("li",[t._v("DOM 生成")]),t._v(" "),s("li",[t._v("CSSOM 生成")])])]),t._v(" "),s("li",[s("p",[t._v("首帧包含HTML内容")]),t._v(" "),s("ul",[s("li",[t._v("基本的DOM")]),t._v(" "),s("li",[t._v("基本的CSS")])])])]),t._v(" "),s("h3",{attrs:{id:"关于vue的执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于vue的执行"}},[t._v("#")]),t._v(" 关于vue的执行")]),t._v(" "),s("h4",{attrs:{id:"created"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#created"}},[t._v("#")]),t._v(" created")]),t._v(" "),s("ul",[s("li",[t._v("触发数据获取")]),t._v(" "),s("li",[t._v("页面内容为空节点")])]),t._v(" "),s("h4",{attrs:{id:"mounted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mounted"}},[t._v("#")]),t._v(" mounted")]),t._v(" "),s("ul",[s("li",[t._v("页面首次渲染、包含基本的框架结构")])]),t._v(" "),s("h4",{attrs:{id:"updated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updated"}},[t._v("#")]),t._v(" updated")]),t._v(" "),s("ul",[s("li",[t._v("数据获取完成，触发试图更新")]),t._v(" "),s("li",[t._v("试图内容会发生变化")])]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[s("img",{attrs:{src:"/performance-h5-06.png",alt:"总结"}})]),t._v(" "),s("h2",{attrs:{id:"相关连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关连接"}},[t._v("#")]),t._v(" 相关连接")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://web.dev/lcp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LCP（Largest Contentful Paint）-最大内容渲染"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://web.dev/fid/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FID（First Input Delay）-首次输入延迟"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://web.dev/tbt/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TBT（Total Blocking Time）-总阻塞时间"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://web.dev/cls/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CLS（Cumulative Layout Shift）-累计布局偏移"),s("OutboundLink")],1)])],1)}),[],!1,null,null,null);a.default=r.exports}}]);