(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1468:function(v,a,_){"use strict";_.r(a);var t=_(7),s=Object(t.a)({},(function(){var v=this,a=v._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"日志简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志简介"}},[v._v("#")]),v._v(" 日志简介")]),v._v(" "),a("h2",{attrs:{id:"日志概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志概述"}},[v._v("#")]),v._v(" 日志概述")]),v._v(" "),a("p",[v._v("只要程序员投身在实际的学习和生产环境中，就会对日志的重要性有着充分的认知，尤其是对于 Web 以及更高级的应用。在很多情况下，日志可能是我们了解应用如何执行的唯一方式。")]),v._v(" "),a("p",[v._v("但是现实是很多程序员对于日志的记录的认知比较肤浅，认为日志的记录输出是一件很简单而且会自动发生的事情，所以会经常忽略和日志相关的问题。")]),v._v(" "),a("p",[v._v("所以本课程主要就是针对于对于日志概念以及日志的框架不太熟悉的这类开发人群，更加详细且真实的体会日志为我们在开发和生产环境当中所带来的好处。")]),v._v(" "),a("p",[v._v("Java 语言的强大之处就是因为它强大而且成熟的生态体系。其中包括日志框架，就有很多成熟的开源资源可以直接使用。")]),v._v(" "),a("h2",{attrs:{id:"日志文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志文件"}},[v._v("#")]),v._v(" 日志文件")]),v._v(" "),a("p",[v._v("日志文件是用于记录系统操作事件的文件集合。它具有处理历史数据、诊断问题的追踪以及理解系统的活动等重要的作用。")]),v._v(" "),a("h3",{attrs:{id:"调试日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试日志"}},[v._v("#")]),v._v(" 调试日志")]),v._v(" "),a("p",[v._v("在软件开发中，我们要去经常的调试程序，或者做一些状态的输出，便于我们查询程序的运行状况。为了让我们能够更加灵活且方便的控制这些调试信息，我们肯定是需要更加专业的日志技术。我们平时在调试程序的过程中所使用的肯定就是专业开发工具自带的debug功能，可以实时查看程序运行情况，但不能有效保存运行情况的信息。调试日志是能够更加方便的去“重现”这些问题。")]),v._v(" "),a("h3",{attrs:{id:"系统日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统日志"}},[v._v("#")]),v._v(" 系统日志")]),v._v(" "),a("p",[v._v("系统日志是用来记录系统中硬件、软件和系统相关问题的信息。同时还可以监视系统中发生的事件。用户可以通过它来检查错误发生的原因，或者寻找收到攻击是留下的痕迹。")]),v._v(" "),a("p",[v._v("系统日志包括系统日志、应用日志和安全日志这几种分类。")]),v._v(" "),a("h2",{attrs:{id:"日志框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志框架"}},[v._v("#")]),v._v(" 日志框架")]),v._v(" "),a("h3",{attrs:{id:"日志框架的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志框架的作用"}},[v._v("#")]),v._v(" 日志框架的作用")]),v._v(" "),a("ul",[a("li",[v._v("控制日志输出的内容和格式。")]),v._v(" "),a("li",[v._v("控制日志输出的位置。")]),v._v(" "),a("li",[v._v("日志文件相关的优化，如异步操作、归档、压缩..")]),v._v(" "),a("li",[v._v("日志系统的维护。")]),v._v(" "),a("li",[v._v("面向接口开发 - 日志的门面。")])]),v._v(" "),a("h3",{attrs:{id:"日志框架的价值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志框架的价值"}},[v._v("#")]),v._v(" 日志框架的价值")]),v._v(" "),a("p",[v._v("因为软件系统发展到了今天非常的复杂，特别是服务器的软件，涉及到的知识和内容问题非常的多。对于日志记录来讲，在某些方面使用别人研发好的成熟的框架，这就相当于让别人帮你完成一些基础的工作。让我们可以有更多的时间去关注、处理我们的业务逻辑问题。")]),v._v(" "),a("p",[v._v("比如事务处理，日志记录等一些安全性的问题，我们使用框架丢做，不会影响业务的开发效率。")]),v._v(" "),a("p",[v._v("同时框架也是在不断升级的，我们可以不断的享受框架为我们带来的好处。")]),v._v(" "),a("h3",{attrs:{id:"流行的日志框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流行的日志框架"}},[v._v("#")]),v._v(" 流行的日志框架")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("JUL")])])]),v._v(" "),a("p",[v._v("java.util.logging JAVA原生日志框架")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("Log4j")])])]),v._v(" "),a("p",[v._v("Apache的一个开源项目")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("Logback")])])]),v._v(" "),a("p",[v._v("由Log4j之父做的另一个开源项目，业界称之为log4j后浪，一个可靠、通用且灵活的java日志框架")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("Log4j2")])])]),v._v(" "),a("p",[v._v("Log4j官方的第二个版本，各个方面都与Logback及其相似，具有插件式结构、配置文件优化等特征。SpringBoot1.4版本以后就不再支持log4j，所以第二个版本——log4j2应运而生。")]),v._v(" "),a("ul",[a("li",[v._v("JCL")])]),v._v(" "),a("p",[v._v("日志门面")]),v._v(" "),a("ul",[a("li",[v._v("SLF4J")])]),v._v(" "),a("p",[v._v("日志门面")]),v._v(" "),a("p",[a("img",{attrs:{src:_(451),alt:"img"}})]),v._v(" "),a("h3",{attrs:{id:"日志门面和日志实现的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志门面和日志实现的区别"}},[v._v("#")]),v._v(" 日志门面和日志实现的区别")]),v._v(" "),a("p",[v._v("日志框架技术JUL、Logback、Log4j、Log4j2用来方便有效的记录日志信息")]),v._v(" "),a("p",[v._v("日志门面技术JCL、SLF4J")]),v._v(" "),a("p",[v._v("为什么要使用日志门面技术？")]),v._v(" "),a("p",[v._v("每一种日志框架都有自己单独的 API，要使用对应的框架就要使用对应的 API，这就大大的增加了应用程序代码对于日志框架的耦合性。")]),v._v(" "),a("p",[v._v("我们使用了日志门面技术之后，对于应用程序来说，无论底层的日志柜架如何改变，应用程序不需要修改任意一行代码，就可以直接发布了。")]),v._v(" "),a("p",[a("img",{attrs:{src:_(452),alt:"img"}})])])}),[],!1,null,null,null);a.default=s.exports},451:function(v,a,_){v.exports=_.p+"assets/img/1640615686151-35e56c90-d723-4a5e-a133-4d895a677794.fd9256a4.jpeg"},452:function(v,a,_){v.exports=_.p+"assets/img/1640615226892-272ecefb-e5dd-4693-a7de-832b3fd91ddb.5ccb969d.png"}}]);