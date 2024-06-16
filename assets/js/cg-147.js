(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{1374:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视图"}},[s._v("#")]),s._v(" 视图")]),s._v(" "),a("p",[a("strong",[s._v("视图： 虚拟机表 ，将查询出的数据用视图的形式存起来，以便于再次查询")])]),s._v(" "),a("p",[a("strong",[s._v("create view v_name as select ...")])]),s._v(" "),a("h2",{attrs:{id:"一、是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[s._v("#")]),s._v(" 一、是什么")]),s._v(" "),a("h3",{attrs:{id:"_1-1、概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、概念"}},[s._v("#")]),s._v(" 1.1、概念")]),s._v(" "),a("blockquote",[a("p",[s._v("视图，虚拟表，从一个表或多个表中查询出来的表，作用和真实表一样，包含一系列带有行和列的数据。视图中，用户可以使用SELECT语句查询数据，也可以使用INSERT，UPDATE，DELETE修改记录，视图可以使用户操作方便，并保障数据库系统安全。")])]),s._v(" "),a("h3",{attrs:{id:"_1-2、特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、特点"}},[s._v("#")]),s._v(" 1.2、特点")]),s._v(" "),a("blockquote",[a("ul",[a("li",[a("p",[s._v("优点")])]),s._v(" "),a("li",[a("p",[s._v("简单化，数据所见即所得。")])]),s._v(" "),a("li",[a("p",[s._v("安全性，用户只能查询或修改他们所能见到得到的数据。")])]),s._v(" "),a("li",[a("p",[s._v("逻辑独立性，可以屏蔽真实表结构变化带来的影响。")])]),s._v(" "),a("li",[a("p",[s._v("缺点")])]),s._v(" "),a("li",[a("p",[s._v("性能相对较差，简单的查询也会变得稍显复杂。")])]),s._v(" "),a("li",[a("p",[s._v("修改不方便，特变是复杂的聚合视图基本无法修改。")])])])]),s._v(" "),a("h2",{attrs:{id:"二、视图的操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、视图的操作"}},[s._v("#")]),s._v(" 二、视图的操作")]),s._v(" "),a("h3",{attrs:{id:"_2-1、创建视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、创建视图"}},[s._v("#")]),s._v(" 2.1、创建视图")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 语法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" 视图名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" 查询语句"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建emp_info视图，通过视图从emp表中查询员工编号、姓名、总工资")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" emp_info\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" empno "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'编号'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ename "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'姓名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sal"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("IFNULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("comm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'总工资'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" emp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_2-2、使用视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、使用视图"}},[s._v("#")]),s._v(" 2.2、使用视图")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询编号为1003的员工信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" emp_info "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" 编号"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1003")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-3、修改视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3、修改视图"}},[s._v("#")]),s._v(" 2.3、修改视图")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 语法 方式1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("OR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLACE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" 视图名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" 查询语句"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 语法 方式2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" 视图名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" 查询语句"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("OR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLACE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" emp_info\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" empno "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'编号'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ename "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'姓名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sal "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'基本工资'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" emp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" emp_info\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" empno "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'编号'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ename "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'姓名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sal "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'基本工资'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" emp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"_2-4、删除视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4、删除视图"}},[s._v("#")]),s._v(" 2.4、删除视图")]),s._v(" "),a("blockquote",[a("p",[s._v("删除视图不会影响原表")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 语法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" 视图名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" emp_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_2-5、注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5、注意事项"}},[s._v("#")]),s._v(" 2.5、注意事项")]),s._v(" "),a("blockquote",[a("p",[s._v("视图不会独立存储数据，原表发生改变，视图也发生改变。没有优化任何查询性能。")]),s._v(" "),a("p",[s._v("如果视图包含以下结构中的一种，则视图不可更新")]),s._v(" "),a("ul",[a("li",[s._v("聚合函数的结果")]),s._v(" "),a("li",[s._v("DISTINCT  去重后的结果")]),s._v(" "),a("li",[s._v("GROUP BY 分组后的结果")]),s._v(" "),a("li",[s._v("HAVING  筛选过滤后的结果")]),s._v(" "),a("li",[s._v("UNION、UNION ALL 联合后的结果")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);