(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{1404:function(t,s,a){"use strict";a.r(s);var e=a(7),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"sql概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql概述"}},[t._v("#")]),t._v(" SQL概述")]),t._v(" "),s("h2",{attrs:{id:"一、关于sql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、关于sql"}},[t._v("#")]),t._v(" 一、关于SQL")]),t._v(" "),s("h3",{attrs:{id:"_1-1、sql概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、sql概述"}},[t._v("#")]),t._v(" 1.1、SQL概述")]),t._v(" "),s("blockquote",[s("p",[t._v("SQL：Structured Query Language（结构化查询语言），客户端使用SQL来操作数据库，可以应用到所有关系型数据库中。")]),t._v(" "),s("p",[t._v("SQL语言标准由ISO（国际标准化组织）发布，ISO定义了很多SQL标准（例如SQL99）对RDBMS进行统一的操作，相同的语句可以操作Oracle，MySQL。"),s("strong",[t._v("各个数据库厂商有自己的标准，类似于方言，MySQL中的limit。")])]),t._v(" "),s("p",[t._v("SQL语法：")]),t._v(" "),s("ul",[s("li",[t._v("SQL语句可以在单行或多行书写，以分号结尾；")]),t._v(" "),s("li",[t._v("可使用空格和缩进来增强语句的可读性；")]),t._v(" "),s("li",[t._v("MySQL不区分大小写，建议大写。")])]),t._v(" "),s("p",[t._v("经验：通常执行对数据库的“增删改查”，简称C（Create）R（Read）U（Update）D（Delete）。")])]),t._v(" "),s("h3",{attrs:{id:"_1-2、sql分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、sql分类"}},[t._v("#")]),t._v(" 1.2、SQL分类")]),t._v(" "),s("blockquote",[s("p",[t._v("DDL(Data Definition Language)数据定义语言：创建、删除、修改库与表结构；")]),t._v(" "),s("p",[s("strong",[t._v("DML(Data Manipulation Language)数据操作语言：增、删、改表记录；")])]),t._v(" "),s("p",[t._v("TPL(Transaction Process Language)事务处理语言：用于对事务进行处理；")]),t._v(" "),s("p",[s("strong",[t._v("DQL(Data Query Language)数据查询语言：用来查询记录；")])]),t._v(" "),s("p",[t._v("DCL(Data Control Language)数据控制语言：用来定义访问权限和安全级别。")])]),t._v(" "),s("h2",{attrs:{id:"二、数据库操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、数据库操作"}},[t._v("#")]),t._v(" 二、数据库操作")]),t._v(" "),s("h3",{attrs:{id:"_2-1、查看数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、查看数据库"}},[t._v("#")]),t._v(" 2.1、查看数据库")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有的数据库")]),t._v("\nmysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASES")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("数据库名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("information_schema")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("信息数据库，其中保存着关于所有数据库的信息（元数据），元数据是关于数据的数据，如数据库名或表名，列的数据类型，或访问权限等。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("mysql")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("核心数据库，主要负责存储数据库的用户、权限设置、关键字等，以及需要使用的控制和管理信息，不可以删除。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("performance_schema")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("性能优化的数据库，MySQL 5.5版本中新增的一个性能优化的引擎。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("sys")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("系统数据库，MySQL5.7版本中新增的可以快速的了解元数据信息的系统库，便于发现数据库的多样信息，解决性能瓶颈问题。")])])])]),t._v(" "),s("p",[t._v("慢查询  >10S,SQL")]),t._v(" "),s("h3",{attrs:{id:"_2-2、切换数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、切换数据库"}},[t._v("#")]),t._v(" 2.2、切换数据库")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到想要操作的数据库")]),t._v("\nmysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USE")]),t._v(" sys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"_2-3、查询当前使用的数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3、查询当前使用的数据库"}},[t._v("#")]),t._v(" 2.3、查询当前使用的数据库")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("database")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"_2-4、创建数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4、创建数据库"}},[t._v("#")]),t._v(" 2.4、创建数据库")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建名字为mydb1数据库")]),t._v("\nmysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" mydb1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建数据库并设置编码格式为utf8")]),t._v("\nmysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" mydb2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARACTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" utf8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#如果mydb3数据库不存在，则创建；如果存在，则不创建。")]),t._v("\nmysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" mydb3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"_2-5、查看数据库创建信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5、查看数据库创建信息"}},[t._v("#")]),t._v(" 2.5、查看数据库创建信息")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v(" mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" mydb1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"_2-6、修改数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6、修改数据库"}},[t._v("#")]),t._v(" 2.6、修改数据库")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#修改数据库的字符集")]),t._v("\nmysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" mydb1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARACTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" gbk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"_2-7、删除数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-7、删除数据库"}},[t._v("#")]),t._v(" 2.7、删除数据库")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除数据库mydb1")]),t._v("\nmysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" mydb1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#如果存在数据库mydb2就删除")]),t._v("\nmysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" mydb2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"三、表的操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、表的操作"}},[t._v("#")]),t._v(" 三、表的操作")]),t._v(" "),s("h3",{attrs:{id:"_3-1、数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、数据类型"}},[t._v("#")]),t._v(" 3.1、数据类型")]),t._v(" "),s("blockquote",[s("p",[t._v("MySQL支持多种类型，大致可以分为三类：")]),t._v(" "),s("ul",[s("li",[t._v("数值；    int  bigint  double decimal")]),t._v(" "),s("li",[t._v("字符串(字符)类型；  char varchar")]),t._v(" "),s("li",[t._v("日期时间。 datetime")])]),t._v(" "),s("p",[t._v("数据类型对于我们约束数据的类型有很大的帮助。")])]),t._v(" "),s("h4",{attrs:{id:"_3-1-1、数值类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1、数值类型"}},[t._v("#")]),t._v(" 3.1.1、数值类型")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("大小")]),t._v(" "),s("th",[t._v("范围（有符号）")]),t._v(" "),s("th",[t._v("范围（无符号）")]),t._v(" "),s("th",[t._v("用途")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("INT")])]),t._v(" "),s("td",[t._v("4 字节")]),t._v(" "),s("td",[t._v("(-2 147 483 648，2 147 483 647)")]),t._v(" "),s("td",[t._v("(0，4 294 967 295)")]),t._v(" "),s("td",[t._v("大整数值")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("DOUBLE")])]),t._v(" "),s("td",[t._v("8 字节")]),t._v(" "),s("td",[t._v("（-1.797E+308,-2.22E-308）")]),t._v(" "),s("td",[t._v("(0,2.22E-308,1.797E+308)")]),t._v(" "),s("td",[t._v("双精度浮点数值")])]),t._v(" "),s("tr",[s("td",[t._v("DOUBLE(M,D)")]),t._v(" "),s("td",[t._v("8个字节，M表示长度，D表示小数位数")]),t._v(" "),s("td",[t._v("同上，受M和D的约束   DOUBLE(5,2) -999.99-999.99")]),t._v(" "),s("td",[t._v("同上，受M和D的约束")]),t._v(" "),s("td",[t._v("双精度浮点数值")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("DECIMAL")]),t._v("(M,D)")]),t._v(" "),s("td",[t._v("DECIMAL(M,D)")]),t._v(" "),s("td",[t._v("依赖于M和D的值，M最大值为65")]),t._v(" "),s("td",[t._v("依赖于M和D的值，M最大值为65")]),t._v(" "),s("td",[t._v("小数值，和钱相关，不会出现精度缺失的问题")])])])]),t._v(" "),s("h4",{attrs:{id:"_3-1-2、字符串类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2、字符串类型"}},[t._v("#")]),t._v(" 3.1.2、字符串类型")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("大小")]),t._v(" "),s("th",[t._v("用途")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("CHAR")])]),t._v(" "),s("td",[t._v("0-255字符")]),t._v(" "),s("td",[t._v("定长字符串CHAR(10)10个字符")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("VARCHAR")])]),t._v(" "),s("td",[t._v("0-65535 字节")]),t._v(" "),s("td",[t._v("变长字符串VARCHAR(10)10个字符")])]),t._v(" "),s("tr",[s("td",[t._v("BLOB（binary large object）")]),t._v(" "),s("td",[t._v("0-65535字节")]),t._v(" "),s("td",[t._v("二进制形式的长文本数据")])]),t._v(" "),s("tr",[s("td",[t._v("TEXT")]),t._v(" "),s("td",[t._v("0-65535字节")]),t._v(" "),s("td",[t._v("长文本数据")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("关于CHAR和VARCHAR：")]),t._v(" "),s("ul",[s("li",[t._v("CHAR(255) 数据长度不足指定长度，补足到指定长度，用于身份证号，手机号，时间固定长度的内容；")]),t._v(" "),s("li",[t._v("VARCHAR(65535)  数据长度不足指定长度，不补足到指定长度，用于用户名，备注不固定长度的内容；")]),t._v(" "),s("li",[t._v("VARCHAR单独至少花一个字节保存数据长度，如果长度超过一个字节，就要花费两个字节。")])])]),t._v(" "),s("p",[t._v("慢查询  >10  BLOB")]),t._v(" "),s("h4",{attrs:{id:"_3-1-3、日期时间类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3、日期时间类型"}},[t._v("#")]),t._v(" 3.1.3、日期时间类型")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("大小")]),t._v(" "),s("th",[t._v("范围")]),t._v(" "),s("th",[t._v("格式")]),t._v(" "),s("th",[t._v("用途")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("DATE")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),s("td",[t._v("1000-01-01/9999-12-31")]),t._v(" "),s("td",[t._v("YYYY-MM-DD")]),t._v(" "),s("td",[t._v("日期值")])]),t._v(" "),s("tr",[s("td",[t._v("TIME")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),s("td",[t._v("'-838:59:59'/'838:59:59'")]),t._v(" "),s("td",[t._v("HH:MM:SS")]),t._v(" "),s("td",[t._v("时间值或持续时间")])]),t._v(" "),s("tr",[s("td",[t._v("YEAR")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),s("td",[t._v("1901/2155")]),t._v(" "),s("td",[t._v("YYYY")]),t._v(" "),s("td",[t._v("年份值")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("DATETIME")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),s("td",[t._v("1000-01-01 00:00:00/9999-12-31 23:59:59")]),t._v(" "),s("td",[t._v("YYYY-MM-DD HH:MM:SS")]),t._v(" "),s("td",[t._v("混合日期和时间值")])]),t._v(" "),s("tr",[s("td",[t._v("TIMESTAMP")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),s("td",[t._v("1970-01-01 00:00:00/2038 结束时间是第 "),s("strong",[t._v("2147483647")]),t._v(" 秒北京时间 "),s("strong",[t._v("2038-1-19 11:14:07")]),t._v("，格林尼治时间 2038年1月19日 凌晨 03:14:07")]),t._v(" "),s("td",[t._v("YYYYMMDD HHMMSS")]),t._v(" "),s("td",[t._v("混合日期和时间值，时间戳")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-2、创建表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、创建表"}},[t._v("#")]),t._v(" 3.2、创建表")]),t._v(" "),s("blockquote",[s("p",[t._v("语法：")])]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 表名（\n\t列名 数据类型 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("约束"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t列名 数据类型 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("约束"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t列名 数据类型 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("约束"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//最后一列的末尾不加逗号")]),t._v("\n）"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可根据需要指定表的字符编码集")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("blockquote",[s("p",[t._v("关于约束后面会讲到，这里可以暂时不关注。")]),t._v(" "),s("p",[t._v("举例：")])]),t._v(" "),s("p",[t._v("学生表（student）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("列名")]),t._v(" "),s("th",[t._v("数据类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("INT")]),t._v(" "),s("td",[t._v("编号")])]),t._v(" "),s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("VARCHAR(20)")]),t._v(" "),s("td",[t._v("姓名")])]),t._v(" "),s("tr",[s("td",[t._v("age")]),t._v(" "),s("td",[t._v("INT")]),t._v(" "),s("td",[t._v("年龄")])]),t._v(" "),s("tr",[s("td",[t._v("birthday")]),t._v(" "),s("td",[t._v("TIMESTAMP")]),t._v(" "),s("td",[t._v("生日")])]),t._v(" "),s("tr",[s("td",[t._v("phonenum")]),t._v(" "),s("td",[t._v("CHAR(11)")]),t._v(" "),s("td",[t._v("手机号")])]),t._v(" "),s("tr",[s("td",[t._v("address")]),t._v(" "),s("td",[t._v("VARCHAR(20)")]),t._v(" "),s("td",[t._v("住址")])])])]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" student "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tid "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    age "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    birthday "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TIMESTAMP")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    phonenum "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHAR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    address "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h3",{attrs:{id:"_3-3、查看表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3、查看表"}},[t._v("#")]),t._v(" 3.3、查看表")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前数据库中所有表名称")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLES")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看指定表的创建语句")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" CRqEATE "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" 表名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看表结构")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),t._v(" 表名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"_3-4、修改表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4、修改表"}},[t._v("#")]),t._v(" 3.4、修改表")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加列")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" 表名 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    列名 列类型"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    列名 列类型\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改列类型(如果被修改的列已存在数据，那么新的类型可能会影响到已存在数据), 修改表中的某列时，也要写全列的名字，数据类型，约束")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" 表名 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("MODIFY")]),t._v(" 列名 列类型"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改列名, 在给定列新名称时，要指定列的类型和约束")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" 表名 CHANGE 原列名 新列名 列类型"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除列, 删除列时，每次只能删除一列")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" 表名 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" 列名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改表名称")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" 原表名 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RENAME")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" 新表名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" 原表名 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RENAME")]),t._v(" 新表名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("h3",{attrs:{id:"_3-5、删除表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5、删除表"}},[t._v("#")]),t._v(" 3.5、删除表")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" 表名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);