(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1085:function(a,s,t){a.exports=t.p+"assets/img/image-20210623220657570.2aae52df.png"},1086:function(a,s,t){a.exports=t.p+"assets/img/image-20210623221608714.4989a996.png"},1087:function(a,s,t){a.exports=t.p+"assets/img/image-20210623225328478.f17275be.png"},1088:function(a,s,t){a.exports=t.p+"assets/img/1586512751639.e2eb32a3.png"},1089:function(a,s,t){a.exports=t.p+"assets/img/1586513061851.bcf8efdb.png"},1541:function(a,s,t){"use strict";t.r(s);var e=t(7),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[a._v("#")]),a._v(" Nginx")]),a._v(" "),s("h2",{attrs:{id:"一、nginx概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、nginx概述"}},[a._v("#")]),a._v(" 一、Nginx概述")]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("Nginx")]),a._v(" (engine x) 是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。Nginx是由伊戈尔·赛索耶夫为俄罗斯访问量第二的Rambler.ru站点（俄文：Рамблер）开发的，第一个公开版本0.1.0发布于2004年10月4日。")]),a._v(" "),s("p",[a._v("其将源代码以类BSD许可证的形式发布，因它的稳定性、丰富的功能集、简单的配置文件和低系统资源的消耗而闻名。2011年6月1日，nginx 1.0.4发布。")]),a._v(" "),s("p",[a._v("Nginx是一款轻量级的Web服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器，在BSD-like 协议下发行。其特点是占有内存少，并发能力强，事实上nginx的并发能力在同类型的网页服务器中表现较好，中国大陆使用nginx网站用户有：百度、京东、新浪、网易、腾讯、淘宝等。")]),a._v(" "),s("p",[s("strong",[a._v("主要功能： 面试题")])]),a._v(" "),s("ul",[s("li",[a._v("反向代理；")]),a._v(" "),s("li",[a._v("负载均衡；")]),a._v(" "),s("li",[a._v("动静分离。")])])]),a._v(" "),s("h2",{attrs:{id:"二、nginx安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、nginx安装"}},[a._v("#")]),a._v(" 二、Nginx安装")]),a._v(" "),s("h3",{attrs:{id:"_2-1、下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、下载"}},[a._v("#")]),a._v(" 2.1、下载")]),a._v(" "),s("blockquote",[s("p",[s("code",[a._v("http://nginx.org/en/download.html")])])]),a._v(" "),s("p",[s("img",{attrs:{src:t(1085),alt:"image-20210623220657570"}})]),a._v(" "),s("h3",{attrs:{id:"_2-2、windows下安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、windows下安装"}},[a._v("#")]),a._v(" 2.2、Windows下安装")]),a._v(" "),s("blockquote",[s("p",[a._v("解压nginx的压缩包。")]),a._v(" "),s("p",[a._v("打开cmd，切换到nginx的安装目录。")])]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动nginx")]),a._v("\n$ start nginx\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("blockquote",[s("p",[a._v("在浏览器中访问："),s("code",[a._v("http://localhost:80")]),a._v("，出现如下内容证明nginx安装成功")])]),a._v(" "),s("p",[s("img",{attrs:{src:t(1086),alt:"image-20210623221608714"}})]),a._v(" "),s("h3",{attrs:{id:"_2-3、linux下安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3、linux下安装"}},[a._v("#")]),a._v(" 2.3、Linux下安装")]),a._v(" "),s("h4",{attrs:{id:"_2-3-1、准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1、准备工作"}},[a._v("#")]),a._v(" 2.3.1、准备工作")]),a._v(" "),s("blockquote",[s("p",[a._v("安装gcc，gcc是c语言编译器，后面会用到。 (javac    ,编译c /c++/object  c)")])]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ yum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" gcc       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("已安装 gcc -v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("blockquote",[s("p",[a._v("pcre、pcre-devel安装，pcre是一个perl库，包括perl兼容的正则表达式库，nginx的http模块使用pcre来解析正则表达式，所以需要安装pcre库。")])]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" pcre pcre-devel\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("blockquote",[s("p",[a._v("zlib安装，zlib库提供了很多种压缩和解压缩方式nginx使用zlib对http包的内容进行gzip，所以需要安装。")])]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" zlib zlib-devel\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("blockquote",[s("p",[a._v("openssl是web安全通信的基石，没有openssl，可以说我们的信息都是在裸奔。")])]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" openssl openssl-devel\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"_2-3-2、安装nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2、安装nginx"}},[a._v("#")]),a._v(" 2.3.2、安装Nginx")]),a._v(" "),s("blockquote",[s("p",[a._v("上传从官网下载的nginx安装包到Linux，解压。")])]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-zxvf")]),a._v(" nginx-1.20.1.tar.gz\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("blockquote",[s("p",[a._v("进入解压后的目录，执行下面三个命令")])]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ ./configure              检查配置是否满足nginx安装要求\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("                     编译\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h4",{attrs:{id:"_2-3-3、linux下运行及验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3、linux下运行及验证"}},[a._v("#")]),a._v(" 2.3.3、Linux下运行及验证")]),a._v(" "),s("blockquote",[s("p",[a._v("进入nginx的安装目录的"),s("code",[a._v("/sbin")]),a._v("，经过上面的操作，nginx被安装在了"),s("code",[a._v("/usr/local/nginx")]),a._v("目录下。")])]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /usr/local/nginx/sbin\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("blockquote",[s("p",[a._v("运行nginx")])]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ ./nginx         （ps "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ef")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" nginx）\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("blockquote",[s("p",[a._v("在浏览器中访问："),s("code",[a._v("http://linux的ip地址:80")]),a._v("，出现如下内容证明nginx安装成功")])]),a._v(" "),s("p",[s("img",{attrs:{src:t(1087),alt:"image-20210623225328478"}})]),a._v(" "),s("h3",{attrs:{id:"_2-4、nginx常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4、nginx常用命令"}},[a._v("#")]),a._v(" 2.4、nginx常用命令")]),a._v(" "),s("p",[a._v("etc/profile类似配置windows下的path")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动Nginx             常用")]),a._v("\n$ ./nginx\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重新载入配置文件        常用  （-s  signal信号）")]),a._v("\n$ ./nginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" reload            \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重启 Nginx")]),a._v("\n$ ./nginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" reopen\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 停止 Nginx               快速退出")]),a._v("\n$ ./nginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" stop         \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 停止 Nginx              常用  完整有序退出 ")]),a._v("\n$ ./nginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" quit         \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 测试配置文件是否正确     常用")]),a._v("\n$ ./nginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("h2",{attrs:{id:"三、反向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、反向代理"}},[a._v("#")]),a._v(" 三、反向代理")]),a._v(" "),s("h3",{attrs:{id:"_3-1、正向代理和反向代理-面试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、正向代理和反向代理-面试"}},[a._v("#")]),a._v(" 3.1、正向代理和反向代理    面试")]),a._v(" "),s("blockquote",[s("p",[a._v("正向代理：")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("正向代理服务是由客户端设立的。")])]),a._v(" "),s("li",[a._v("客户端了解代理服务器和目标服务器都是谁。")]),a._v(" "),s("li",[a._v("帮助咱们实现突破访问权限，提高访问的速度，对"),s("strong",[a._v("目标服务器隐藏客户端的ip地址")]),a._v("。")])])]),a._v(" "),s("p",[s("img",{attrs:{src:t(1088),alt:"1586512751639"}})]),a._v(" "),s("blockquote",[s("p",[a._v("反向代理：")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("反向代理服务器是配置在服务端的")]),a._v("。")]),a._v(" "),s("li",[a._v("客户端是不知道访问的到底是哪一台服务器。")]),a._v(" "),s("li",[a._v("做到负载均衡，并且可以"),s("strong",[a._v("隐藏服务器真正的ip地址")]),a._v("。")])])]),a._v(" "),s("p",[s("img",{attrs:{src:t(1089),alt:"1586513061851"}})]),a._v(" "),s("h3",{attrs:{id:"_3-2、实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、实现"}},[a._v("#")]),a._v(" 3.2、实现")]),a._v(" "),s("blockquote",[s("p",[a._v("按照如下方式修改nginx配置文件（conf目录下的nginx.conf文件）")])]),a._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    listen")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("      80;")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    server_name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v(" localhost;")]),a._v("\n\t\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\t# 基于反向代理访问到Tomcat服务器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    location")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("/ {")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    \tproxy_pass")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("http://localhost:8081/;")]),a._v("\n    }\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("blockquote",[s("p",[a._v("此时我们准备一个应用在tomcat中运行（可以是之前ssm的应用），访问"),s("code",[a._v("http://localhost:80/应用名")]),a._v("，此时可以访问到部署到tomcat中的应用。")])]),a._v(" "),s("h2",{attrs:{id:"四、负载均衡-面试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、负载均衡-面试"}},[a._v("#")]),a._v(" 四、负载均衡    面试")]),a._v(" "),s("blockquote",[s("p",[a._v("Nginx为我们默认提供了三种负载均衡的策略 ：")]),a._v(" "),s("ul",[s("li",[a._v("轮询：将客户端发起的请求，平均的分配给每一台服务器。")]),a._v(" "),s("li",[a._v("权重：会将客户端的请求，根据服务器的权重值不同，分配不同的数量。")]),a._v(" "),s("li",[a._v("ip_hash：基于发起请求的客户端的ip地址不同，他始终会将请求发送到指定的服务器上。")])]),a._v(" "),s("p",[a._v("此时我们需要在两个不同端口（9999、9900）上分别开启一个应用。")])]),a._v(" "),s("h3",{attrs:{id:"_4-1、基于轮询的负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1、基于轮询的负载均衡"}},[a._v("#")]),a._v(" 4.1、基于轮询的负载均衡")]),a._v(" "),s("blockquote",[s("p",[a._v("轮询方式是Nginx负载默认的方式，顾名思义，所有请求都按照时间顺序分配到不同的服务上。")]),a._v(" "),s("p",[a._v("基于轮询的负载均衡需要进行如下的配置：")])]),a._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("upstream")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("名字 {")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("ip:port;")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("ip:port;")]),a._v("\n}\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    listen")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("80;")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    server_name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("localhost;")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    location")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("/ {")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    \tproxy_pass")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("http://upstream的名字/;")]),a._v("\n    }\n}\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -----------------------------------------------")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 案例")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("upstream")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("mytest {")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("localhost:8080;  ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("localhost:8081;")]),a._v("\n}\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    listen")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("80;")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    server_name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("localhost;")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    location")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("/ {")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    \tproxy_pass")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("http://mytest/;")]),a._v("\n    }\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br")])]),s("h3",{attrs:{id:"_4-2、基于权重的负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2、基于权重的负载均衡"}},[a._v("#")]),a._v(" 4.2、基于权重的负载均衡")]),a._v(" "),s("blockquote",[s("p",[a._v("指定每个服务的权重比例，weight和访问比率成正比，通常用于后端服务机器性能不统一，将性能好的分配权重高来发挥服务器最大性能。")])]),a._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("upstream")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("名字 {")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("\tserver")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("ip:port weight=权重比例;")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("\tserver")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("ip:port weight=权重比例;")]),a._v("\n}\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("\tlisten")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("80;")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("\tserver_name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("localhost;")]),a._v("\n  \n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("\tlocation")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("/ {")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("\t\tproxy_pass")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("http://upstream的名字/;")]),a._v("\n\t}\n}\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -----------------------------------------------")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 案例")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("upstream")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("mytest {")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("localhost:9999 weight=1;")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("localhost:9900 weight=3;")]),a._v("\n}\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    listen")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("80;")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    server_name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("localhost;")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    location")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("/ {")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    \tproxy_pass")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("http://mytest/;")]),a._v("\n    }\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br")])]),s("h3",{attrs:{id:"_4-3、基于ip-hash的负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3、基于ip-hash的负载均衡"}},[a._v("#")]),a._v(" 4.3、基于ip_hash的负载均衡")]),a._v(" "),s("blockquote",[s("p",[a._v("每个请求都根据访问ip的hash结果分配，经过这样的处理，每个访客固定访问一个后端服务。")])]),a._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("upstream")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("名字 {")]),a._v("\n    ip_hash;\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("ip:port;")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("ip:port;")]),a._v("\n}\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    listen")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("80;")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    server_name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("localhost;")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    location")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("/ {")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    \tproxy_pass")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("http://upstream的名字/;")]),a._v("\n    }\n}\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -----------------------------------------------")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 案例")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("upstream")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("mytest {")]),a._v("\n\tip_hash;\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("localhost:9999;")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("localhost:9900;")]),a._v("\n}\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    listen")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("80;")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    server_name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("localhost;")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    location")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("/ {")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    \tproxy_pass")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("http://mytest/;")]),a._v("\n    }\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br")])]),s("h2",{attrs:{id:"五、动静分离-面试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、动静分离-面试"}},[a._v("#")]),a._v(" 五、动静分离  面试")]),a._v(" "),s("blockquote",[s("p",[a._v("在弄清动静分离之前，我们要先明白什么是动，什么是静。")]),a._v(" "),s("p",[a._v("在Web开发中，通常来说，"),s("strong",[a._v("动态资源其实就是指那些后台资源(servlet、jsp...)，而静态资源就是指HTML，JavaScript，CSS，img等文件")]),a._v("。")]),a._v(" "),s("p",[a._v("一般来说，都需要将动态资源和静态资源分开，将静态资源部署在Nginx上，当一个请求来的时候，如果是静态资源的请求，就直接到nginx配置的静态资源目录下面获取资源，如果是动态资源的请求，nginx利用反向代理的原理，把请求转发给后台应用去处理，从而实现"),s("strong",[a._v("动静分离")]),a._v("。")]),a._v(" "),s("p",[a._v("在使用前后端分离之后，可以很大程度的提升静态资源的访问速度，同时在开发过程中也可以让前后端开发并行可以有效的提高开发效率，也可以有些的减少联调时间 。")])]),a._v(" "),s("h3",{attrs:{id:"_5-1、准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1、准备工作"}},[a._v("#")]),a._v(" 5.1、准备工作")]),a._v(" "),s("blockquote",[s("p",[a._v("服务端：一个基于springboot的web应用。")]),a._v(" "),s("p",[a._v("前端：使用vue，通过axios为服务端发送请求。")])]),a._v(" "),s("p",[a._v("​")]),a._v(" "),s("h3",{attrs:{id:"_5-2、nginx配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2、nginx配置"}},[a._v("#")]),a._v(" 5.2、nginx配置")]),a._v(" "),s("blockquote",[s("p",[a._v("nginx.conf配置")])]),a._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("upstream")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("mytest {")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("localhost:8080;")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("localhost:8081;")]),a._v("\n}\n\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("server")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    listen")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("      80;")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    server_name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v(" localhost;")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("    #拦截静态资源")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    location")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("~ .*\\.(html|htm|gif|jpg|jpeg|bmp|png|ico|js|css|map|eot|svg|ttf|woff|woff2)$    {")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("\t\troot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("/usr/local/userPro;")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("\t\tindex")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("index.html index.htm;")]),a._v("\n\t}\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\t# 反向代理服务器资源")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    location")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("/ {")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("    \tproxy_pass")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("http://mytest/;")]),a._v("\n    }\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br")])]),s("blockquote")])}),[],!1,null,null,null);s.default=n.exports}}]);