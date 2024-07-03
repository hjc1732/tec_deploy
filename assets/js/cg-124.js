(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{1442:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"白名单过滤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#白名单过滤"}},[s._v("#")]),s._v(" 白名单过滤")]),s._v(" "),t("h2",{attrs:{id:"仓库地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#仓库地址"}},[s._v("#")]),s._v(" 仓库地址")]),s._v(" "),t("p",[s._v("https://gitee.com/hujincheng1732/whitelist-spring-boot-starter")]),s._v(" "),t("h2",{attrs:{id:"git地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git地址"}},[s._v("#")]),s._v(" Git地址")]),s._v(" "),t("p",[s._v("https://gitee.com/hujincheng1732/whitelist-spring-boot-starter.git")]),s._v(" "),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("h3",{attrs:{id:"_1、引入依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、引入依赖"}},[s._v("#")]),s._v(" 1、引入依赖")]),s._v(" "),t("p",[s._v("暂未上传maven仓库，需要git下载源码insatll到本地仓库引入使用")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" <dependency>\n     <groupId>io.starter</groupId>\n     <artifactId>whitelist-spring-boot-starter</artifactId>\n     <version>0.0.1-SNAPSHOT</version>\n </dependency>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"_2、application-properties中添加需要过滤的用户-逗号间隔"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、application-properties中添加需要过滤的用户-逗号间隔"}},[s._v("#")]),s._v(" 2、application.properties中添加需要过滤的用户,逗号间隔")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("io.starter.whitelist.users=zs,ls,ww\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3、控制器添加注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、控制器添加注解"}},[s._v("#")]),s._v(" 3、控制器添加注解")]),s._v(" "),t("h4",{attrs:{id:"_1、注解-dowhitelist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、注解-dowhitelist"}},[s._v("#")]),s._v(" 1、注解@DoWhiteList")]),s._v(" "),t("h4",{attrs:{id:"_2、注解参数key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、注解参数key"}},[s._v("#")]),s._v(" 2、注解参数key")]),s._v(" "),t("p",[s._v("与参数或与入参中的属性一致，方可获取到对应属性的值")]),s._v(" "),t("h4",{attrs:{id:"_3、注解参数returnjson"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、注解参数returnjson"}},[s._v("#")]),s._v(" 3、注解参数returnJson")]),s._v(" "),t("p",[s._v("表示拦截之后的返回参数，传入json")]),s._v(" "),t("h4",{attrs:{id:"_4、使用注解示范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、使用注解示范"}},[s._v("#")]),s._v(" 4、使用注解示范")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@DoWhiteList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userId"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("returnJson "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{\\"code\\": 500, \\"msg\\": \\"success\\"}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@GetMapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/testWhiteList"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@ResponseBody")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@DoWhiteList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userId"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("returnJson "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{\\"code\\": 500, \\"msg\\": \\"success\\"}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("testWhiteList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestParam")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" userId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setAge")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("userId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"_4、常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、常见问题"}},[s._v("#")]),s._v(" 4、常见问题")]),s._v(" "),t("h4",{attrs:{id:"_1、注解无效-无法拦截用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、注解无效-无法拦截用户"}},[s._v("#")]),s._v(" 1、注解无效，无法拦截用户")]),s._v(" "),t("p",[s._v("需要配置包扫描路径，当前starter路径在io.starter下，如果启动类不在当前包下，需要配置启动类包扫描starter包，同时需要扫描启动类下的包")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@SpringBootApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("scanBasePackages "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"io"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//配置启动类包扫描")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//或者这个样，没测试  ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//@SpringBootApplication")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//@ComponentScan(basePackages = {"io.*"})')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestApplication")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpringApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("白名单starter测试项目的目录结构")]),s._v(" "),t("p",[t("img",{attrs:{src:a(662),alt:"four"}})])])}),[],!1,null,null,null);t.default=e.exports},662:function(s,t,a){s.exports=a.p+"assets/img/four.d44783b3.png"}}]);