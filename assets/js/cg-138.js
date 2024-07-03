(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{1078:function(s,a,t){s.exports=t.p+"assets/img/image-20210623061645125.df7ff6e7.png"},1532:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux-软件安装及java开发环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-软件安装及java开发环境搭建"}},[s._v("#")]),s._v(" Linux_软件安装及Java开发环境搭建")]),s._v(" "),a("p",[a("strong",[s._v("ps -ef | grep tomcat 查看tomcat 是否启动")])]),s._v(" "),a("h2",{attrs:{id:"一、安装jdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、安装jdk"}},[s._v("#")]),s._v(" 一、安装JDK")]),s._v(" "),a("blockquote",[a("p",[s._v("在Linux下安装JDK，并配置JAVA_HOME环境变量……")]),s._v(" "),a("p",[s._v("卸载openjdk\n1执行  rpm -qa | grep java\n2把看到的内容依次执行 如：")]),s._v(" "),a("p",[s._v("​                           rpm -e --nodeps java-1.8.0-openjdk-1.8.0.191.b12-0.el7_5.x86_64\n​\t\t\t\t\t\t  rpm -e --nodeps java-1.8.0-openjdk-1.8.0.131-11.b12.el7.x86_64\n​                          rpm -e --nodeps java-1.8.0-openjdk-headless-1.8.0.131-11.b12.el7.x86_64\n​\t\t\t\t\t\t  rpm -e --nodeps tzdata-java-2017b-1.el7.noarch\n​\t\t\t\t\t\t全删\n​\t直到再次执行1，看不到任何内容")])]),s._v(" "),a("h3",{attrs:{id:"_1-1、下载jdk的压缩包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、下载jdk的压缩包"}},[s._v("#")]),s._v(" 1.1、下载JDK的压缩包")]),s._v(" "),a("blockquote",[a("p",[s._v("去官网下载压缩包，由于oracle官网更新，需要登录并同意协议才允许下载")]),s._v(" "),a("p",[a("a",{attrs:{href:""}},[s._v("https://www.oracle.com/java/technologies/javase-jdk8-downloads.html")])])]),s._v(" "),a("h3",{attrs:{id:"_1-2、将jdk压缩包拉取到linux系统中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、将jdk压缩包拉取到linux系统中"}},[s._v("#")]),s._v(" 1.2、将jdk压缩包拉取到Linux系统中")]),s._v(" "),a("blockquote",[a("p",[s._v("需要使用图形化界面的xftp拖拽到Linux操作系统")])]),s._v(" "),a("h3",{attrs:{id:"_1-3、将jdk的压缩包解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3、将jdk的压缩包解压"}},[s._v("#")]),s._v(" 1.3、将jdk的压缩包解压")]),s._v(" "),a("blockquote",[a("p",[s._v("后期大多软件都安装在/usr/local下，直接使用tar解压")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在/usr/local/新建目录jdk")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" jdk\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压到新建的jdk目录")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" jdk-8u281-linux-x64.tar.gz "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" /usr/local/jdk\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_1-4、配置环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4、配置环境变量"}},[s._v("#")]),s._v(" 1.4、配置环境变量")]),s._v(" "),a("blockquote",[a("p",[s._v("Linux提供了两种环境变量的文件")]),s._v(" "),a("ul",[a("li",[s._v("第一个是用户级别的环境变量，存放在：~/.bashrc")]),s._v(" "),a("li",[a("strong",[s._v("第二个是系统级别的环境变量，存放在：/etc/profile")])])]),s._v(" "),a("p",[s._v("修改哪个文件都可以（建议采用第二种方式），毕竟虚拟机就我们自己使用")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑/etc/profile")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在环境变量文件中，添加如下内容     不要直接复制版本，版本可能不同")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/jdk/jdk1.8.0_144\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新加载环境变量文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最终测试")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-version")]),s._v("\njavac "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(".0_144\n$ javac "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-version")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v(" version "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.8.0_144"')]),s._v("\nJava"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" SE Runtime Environment "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("build "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v(".0_144-b09"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nJava HotSpot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("-Bit Server VM "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("build "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25.144")]),s._v("-b09, mixed mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"二、安装tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、安装tomcat"}},[s._v("#")]),s._v(" 二、安装Tomcat")]),s._v(" "),a("blockquote",[a("p",[s._v("在Linux下安装Tomcat，以便部署工程到Linux操作系统")])]),s._v(" "),a("h3",{attrs:{id:"_2-1、下载tomcat的压缩包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、下载tomcat的压缩包"}},[s._v("#")]),s._v(" 2.1、下载Tomcat的压缩包")]),s._v(" "),a("blockquote",[a("p",[s._v("Tomcat8.x下载地址：https://tomcat.apache.org/download-80.cgi")])]),s._v(" "),a("h3",{attrs:{id:"_2-2、解压压缩包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、解压压缩包"}},[s._v("#")]),s._v(" 2.2、解压压缩包")]),s._v(" "),a("blockquote",[a("p",[s._v("一样解压到/usr/local目录下")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在/usr/local/新建目录tomcat")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" tomcat\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压到新建的tomcat目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" apache-tomcat-8.5.68.tar.gz "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" /usr/local/tomcat/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_2-3、启动tomcat并监听日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3、启动tomcat并监听日志"}},[s._v("#")]),s._v(" 2.3、启动Tomcat并监听日志")]),s._v(" "),a("blockquote",[a("p",[s._v("通过./执行可运行文件，并使用tail监控日志信息")]),s._v(" "),a("p",[s._v("ps -ef | grep tomcat 查看tomcat 是否启动")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 跳转到tomcat的bin目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/tomcat/apache-tomcat-8.5.68/bin\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\n./startup.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监控日志")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/logs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" catalina.out\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动成功如下，看到xxx ms就是成功了")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("-Jun-2021 06:08:07.620 INFO "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("localhost-startStop-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" org.apache.catalina.startup.HostConfig.deployDirectory Deployment of web application directory "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("/usr/local/tomcat/apache-tomcat-8.5.68/webapps/manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" has finished "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("-Jun-2021 06:08:07.623 INFO "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" org.apache.coyote.AbstractProtocol.start Starting ProtocolHandler "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http-nio-8080"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("-Jun-2021 06:08:07.636 INFO "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" org.apache.catalina.startup.Catalina.start Server startup "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("541")]),s._v(" ms\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"_2-4、关闭防火墙并访问tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4、关闭防火墙并访问tomcat"}},[s._v("#")]),s._v(" 2.4、关闭防火墙并访问tomcat")]),s._v(" "),a("blockquote",[a("p",[s._v("由于Linux防火墙的限制限制我们还不能访问Linux中的Tomcat")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭防火墙")]),s._v("\n$ systemctl stop firewalld\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止firewall开机启动")]),s._v("\n$ systemctl disable firewalld\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("在Windows浏览器地址栏输入"),a("code",[s._v("http://Linux虚拟机的IP地址:8080")]),s._v("，能够看到如下页面，证明tomcat配置成功")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(1078),alt:"image-20210623061645125"}})]),s._v(" "),a("h2",{attrs:{id:"三、安装mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、安装mysql"}},[s._v("#")]),s._v(" 三、安装MySQL")]),s._v(" "),a("blockquote",[a("p",[s._v("在MySQL下用yum的方式安装MySQL")])]),s._v(" "),a("h3",{attrs:{id:"_3-1、准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、准备工作"}},[s._v("#")]),s._v(" 3.1、准备工作")]),s._v(" "),a("p",[s._v("先在/usr/local下新建mysql目录，cd到这个目录下，再执行以下命令")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看系统自带的Mariadb ")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-qa")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mariadb\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载系统自带的Mariadb")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--nodeps")]),s._v(" 刚才查询到的mariadb版本信息\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭防火墙")]),s._v("\n$ systemctl stop firewalld.service\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止firewall开机启动")]),s._v("\n$ systemctl disable firewalld.service \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_3-2、安装mysql的yum存储库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、安装mysql的yum存储库"}},[s._v("#")]),s._v(" 3.2、安装MySQL的YUM存储库")]),s._v(" "),a("blockquote",[a("p",[s._v("使用wget下载即可，不过需要先下载wget，再通过wget下载rpm包")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首先通过yum下载wget命令")]),s._v("\n$ yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过wget下载MySQL存储库 z")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#https://dev.mysql.com/get/mysql80-community-release-el7-7.noarch.rpm     8.0版本")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_3-3、安装下载好的rpm包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3、安装下载好的rpm包"}},[s._v("#")]),s._v(" 3.3、安装下载好的rpm包")]),s._v(" "),a("blockquote",[a("p",[s._v("使用rpm包的命令直接安装")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装Yum Repository")]),s._v("\n$ yum localinstall mysql57-community-release-el7-11.noarch.rpm\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查 mysql 源是否安装成功")]),s._v("\n$ yum repolist enabled "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql.*-community.*"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_3-4、安装mysql服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4、安装mysql服务器"}},[s._v("#")]),s._v(" 3.4、安装MySQL服务器")]),s._v(" "),a("blockquote",[a("p",[s._v("开始安装，这一步需要下载一段时间")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-community-server "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--nogpgcheck")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-5、启动mysql服务-并连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5、启动mysql服务-并连接"}},[s._v("#")]),s._v(" 3.5、启动MySQL服务，并连接")]),s._v(" "),a("blockquote",[a("p",[s._v("安装成功后，手动启动，并使用日志中的密码登陆，而且第一个操作必须是修改密码，才可后续正常操作")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动MySQL服务")]),s._v("\n$ systemctl start mysqld\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看MySQL运行状态，如果显示running说明运行成功")]),s._v("\n$ systemctl status mysqld   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running dead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看初始化密码")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'temporary password'")]),s._v(" /var/log/mysqld.log\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接MySQL服务，使用初始化密码登录")]),s._v("\n$ mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" root "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\nEnter password:刚才查询到的密码\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改密码校验策略")]),s._v("\n$ mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" global "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("validate_password_policy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改密码最小长度")]),s._v("\n$ mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" global "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("validate_password_length")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果没有进行上面两个设置，修改密码，要求密码，必须携带大写字母，小写字母，数字，特殊符号")]),s._v("\n$ mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ALTER "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" IDENTIFIED BY "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"_3-6、开启远程连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-6、开启远程连接"}},[s._v("#")]),s._v(" 3.6、开启远程连接")]),s._v(" "),a("blockquote",[a("p",[s._v("默认MySQL禁止远程链接，需要单独创建一个用户开启远程链接，这样就可以在windows下使用图形化工具连接")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 任何库和表使用root用户在任意主机上都可以访问")]),s._v("\n$ mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" GRANT ALL PRIVILEGES ON *.* TO "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" IDENTIFIED BY "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v(" WITH GRANT OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n$ mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" FLUSH PRIVILEGES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_3-7、mysql字符编码设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-7、mysql字符编码设置"}},[s._v("#")]),s._v(" 3.7、MySQL字符编码设置")]),s._v(" "),a("blockquote",[a("p",[s._v("客户端提供MYSQL的环境，但是不支持中文,通过以下命令可以查看mysql的字符集")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看mysql的字符集")]),s._v("\n$ mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show variables like "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'character_set%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+--------------------------+----------------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Variable_name            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Value                      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------------+----------------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_client     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" utf8                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" utf8                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_database   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" latin1                     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_filesystem "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" binary                     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_results    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" utf8                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_server     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" latin1                     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_system     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" utf8                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_sets_dir       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" /usr/share/mysql/charsets/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------------+----------------------------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" rows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("blockquote",[a("p",[s._v("为了让 MySQL支持中文，需要把字符集改成UTF-8")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/my.cnf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("将文件内容修改如下")])]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[s._v("[client]\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("3306")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("socket")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/var/lib/mysql/mysql.sock")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default-character-set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("utf8mb4")]),s._v("\n\n[mysqld]\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("datadir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/var/lib/mysql")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("socket")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/var/lib/mysql/mysql.sock")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("mysql")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("symbolic-links")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("character-set-server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("utf8mb4")]),s._v("\n\n[mysql]\nno-auto-rehash\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default-character-set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("utf8mb4")]),s._v("\n\n[mysqld_safe]\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("log-error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/var/log/mysqld.log")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("pid-file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/var/run/mysqld/mysqld.pid")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("blockquote",[a("p",[s._v("重启mysql服务")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ systemctl restart mysqld\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("登录mysql，重新查看数据库编码")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show variables like "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'character_set%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+--------------------------+----------------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Variable_name            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Value                      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------------+----------------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_client     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" utf8mb4                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" utf8mb4                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_database   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" utf8mb4                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_filesystem "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" binary                     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_results    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" utf8mb4                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_server     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" utf8mb4                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_set_system     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" utf8                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" character_sets_dir       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" /usr/share/mysql/charsets/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------------+----------------------------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" rows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"_3-8、使用windows下的客户端工具连接mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-8、使用windows下的客户端工具连接mysql"}},[s._v("#")]),s._v(" 3.8、使用Windows下的客户端工具连接MySQL")]),s._v(" "),a("blockquote",[a("p",[s._v("在Navicat或SQLyog中输入用户名和密码连接MySQL。")])]),s._v(" "),a("h2",{attrs:{id:"四、部署ssm工程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、部署ssm工程"}},[s._v("#")]),s._v(" 四、部署SSM工程")]),s._v(" "),a("p",[s._v("如果要想让发布之后的项目的访问路径为/，把war的名字设置为ROOT")]),s._v(" "),a("blockquote",[a("p",[s._v("部署项目到Linux中需要注意一下内容：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("项目要保证在Windows下是没有问题的，再考虑部署到Linux。")])]),s._v(" "),a("li",[s._v("将开发环境中的内容更改为测试环境。\n"),a("ul",[a("li",[s._v("连接数据库的信息。")]),s._v(" "),a("li",[s._v("存放文件的路径。")]),s._v(" "),a("li",[s._v("日志文件存放的位置。")]),s._v(" "),a("li",[s._v("项目路径问题。")])])]),s._v(" "),a("li",[s._v("将Maven项目打包。")]),s._v(" "),a("li",[s._v("根据项目路径的不同，将项目部署到Tomcat中。")]),s._v(" "),a("li",[s._v("在部署到Linux操作系统中后，一定要查看日志。")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);