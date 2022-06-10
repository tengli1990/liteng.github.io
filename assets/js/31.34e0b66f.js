(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{461:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"枚举"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#枚举"}},[t._v("#")]),t._v(" 枚举")]),t._v(" "),a("h3",{attrs:{id:"字符串枚举"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串枚举"}},[t._v("#")]),t._v(" 字符串枚举")]),t._v(" "),a("p",[t._v("概念很简单，但是又细微的运行时差别。在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" Direction "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Up "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UP"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Down "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DOWN"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" up"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Direction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Up\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// UP")]),t._v("\n")])])]),a("h3",{attrs:{id:"异构枚举"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异构枚举"}},[t._v("#")]),t._v(" 异构枚举")]),t._v(" "),a("p",[t._v("混合字符串和数字成员: 不推荐这么做")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" BooleanLikeHeterogeneousEnum "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    No "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Yes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YES"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"计算过的和常量成员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算过的和常量成员"}},[t._v("#")]),t._v(" 计算过的和常量成员")]),t._v(" "),a("p",[t._v("枚举成员使用 常量枚举表达式初始化。 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。 当一个表达式满足下面条件之一时，它就是一个常量枚举表达式：")]),t._v(" "),a("ul",[a("li",[t._v("一个枚举表达式字面量（主要是字符串字面量或数字字面量）")]),t._v(" "),a("li",[t._v("一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）")]),t._v(" "),a("li",[t._v("带括号的常量枚举表达式")]),t._v(" "),a("li",[t._v("一元运算符 +, -, ~其中之一应用在了常量枚举表达式")]),t._v(" "),a("li",[t._v("常量枚举表达式做为二元运算符 +, -, *, /, %, <<, >>, >>>, &, |, ^的操作对象。 若常数枚举表达式求值后为 NaN或 Infinity，则会在编译阶段报错。")])]),t._v(" "),a("p",[t._v("所有其它情况的枚举成员被当作是需要计算得出的值。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" FileAccess "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// contant members")]),t._v("\n  None"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Read  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Write "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ReadWrite "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Read "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// computed member")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("G")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);