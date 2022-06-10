(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{470:function(t,a,s){"use strict";s.r(a);var r=s(14),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"css-矩阵-matrix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-矩阵-matrix"}},[t._v("#")]),t._v(" CSS 矩阵 - Matrix")]),t._v(" "),s("h2",{attrs:{id:"矩阵数学概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#矩阵数学概念"}},[t._v("#")]),t._v(" 矩阵数学概念")]),t._v(" "),s("h4",{attrs:{id:"什么是矩阵"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是矩阵"}},[t._v("#")]),t._v(" 什么是矩阵？")]),t._v(" "),s("p",[t._v("在数学中，矩阵(Matrix)是一个 按照⻓方阵列排列的复数或实数集合， 最早来自于方程组的系数及常数所构成 的方阵。")]),t._v(" "),s("p",[t._v("矩阵是高等代数学中的常⻅工具， 也常⻅于统计分析等应用数学学科中。 在物理学中，矩阵于电路学、力学、光 学和量子物理中都有应用;计算机科学 中，三维动画制作也需要用到矩阵。 矩阵的运算是数值分析领域的重要问 题。由 m × n 个数aij排成的m行n列的 数表称为m行n列的矩阵，简称m × n矩 阵。这m×n 个数称为矩阵A的元素，简 称为元")]),t._v(" "),s("h4",{attrs:{id:"矩阵的规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#矩阵的规则"}},[t._v("#")]),t._v(" 矩阵的规则")]),t._v(" "),s("p",[t._v("矩阵第m行与第n列交叉位置的那个值，等于第一个矩阵第m行与第二个矩阵第n 列，对应位置的每个值的乘积之和。。线性代数是向量计算的基础，很多重要的数学 模型都要用到向量计算。矩阵的本质就是线性方程式，两者是一一对应关系。如果从 线性方程式的⻆度，理解矩阵乘法就毫无难度。")]),t._v(" "),s("ul",[s("li",[t._v("线性方程组"),s("br"),t._v("\n矩阵的最初目的，只是为线性方程组提供一个简写形式。")]),t._v(" "),s("li",[t._v("矩阵乘法的规则"),s("br"),t._v("\n系数矩阵第一行的2和1，各自与x 和 y 的乘积之和，等于3。")]),t._v(" "),s("li",[t._v("CSS默认的XY"),s("br"),t._v("\n对于CSS属性来讲，默认的XY值为 transform的中心点。")])]),t._v(" "),s("h2",{attrs:{id:"css中矩阵的应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css中矩阵的应用"}},[t._v("#")]),t._v(" CSS中矩阵的应用")]),t._v(" "),s("h3",{attrs:{id:"_2d-3d矩阵应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2d-3d矩阵应用"}},[t._v("#")]),t._v(" 2D&3D矩阵应用")]),t._v(" "),s("p",[t._v("前者是元素2D平面的移动变换(transform)，后者则是3D变换。2D变换矩阵为3"),s("em",[t._v("3, 如上 面矩阵示意图;3D变换则是4")]),t._v("4的矩阵。")]),t._v(" "),s("h3",{attrs:{id:"transform原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transform原理"}},[t._v("#")]),t._v(" transform原理")]),t._v(" "),s("p",[t._v("skew：斜拉\nscale：缩放\nrotate：旋转\ntranslate：位移")]),t._v(" "),s("p",[t._v("无论是旋转还是拉伸什么的，本质上都 是应用的matrix()方法实现的(修改 matrix()方法固定几个值)，只是类似 于transform:rotate这种表现形式，我们 更容易理解，记忆与上手。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("matrix")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("通过 "),s("code",[t._v("transform-origin")]),t._v(" 属性进行设置的时 候，矩阵相关计算也随之发生改变。实 际图形效果上就是，旋转拉伸的中心点 变了!")]),t._v(" "),s("p",[t._v("体验一下效果\n"),s("TransformDemo")],1),t._v(" "),s("h3",{attrs:{id:"到底如何计算矩阵"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#到底如何计算矩阵"}},[t._v("#")]),t._v(" 到底如何计算矩阵？")]),t._v(" "),s("p",[t._v("transform: translate(30px, 30px); transform: matrix(1, 0, 0, 1, 30, 30); translate, rotate等方法都是需要单位\n的，而matrix方法e, f参数的单位可以省 略。")])])}),[],!1,null,null,null);a.default=n.exports}}]);