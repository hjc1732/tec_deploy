(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1421:function(t,a,s){"use strict";s.r(a);var e=s(7),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),a("p",[a("strong",[t._v("1 git init           初始化git")])]),t._v(" "),a("p",[a("strong",[t._v("2 git status     看工作区文件状态")])]),t._v(" "),a("p",[a("strong",[t._v("3 git add        将游离态的文件提交到暂存区")])]),t._v(" "),a("p",[a("strong",[t._v('4 git commit -m "提交说明"      将暂存区的文件提交到本地仓库')])]),t._v(" "),a("p",[a("strong",[t._v("5 git log --oneline                      显示提交版本")])]),t._v(" "),a("p",[a("strong",[t._v("6 git checkout  版本编号         切换版本")])]),t._v(" "),a("p",[a("strong",[t._v("7 git push 将本地仓库的文件提交到远程仓库")])]),t._v(" "),a("p",[a("strong",[t._v("8 git clone 首次拉取")])]),t._v(" "),a("p",[a("strong",[t._v("9 git pull 更新本地代码")])]),t._v(" "),a("p",[a("strong",[t._v("10 git branch  查看本地分支   -r 查看远程分支  ,")])]),t._v(" "),a("p",[a("strong",[t._v("11 git branch 分支名   新建本地分支")])]),t._v(" "),a("p",[a("strong",[t._v("12  git checkout    分支名  切换本地分支")])]),t._v(" "),a("p",[t._v("**13 git merge   分支名  分支合并 **")]),t._v(" "),a("p",[a("strong",[t._v("与提交有关： git add   | git commit    |  git  push")])]),t._v(" "),a("p",[a("strong",[t._v("与拉取有关: git clone |  git pull")])]),t._v(" "),a("p",[a("strong",[t._v("分支 ：  git  branch     | git checkout 分支名  |   git merge   合并分支")])]),t._v(" "),a("p",[a("strong",[t._v("代码冲突后: 用merge解决")])]),t._v(" "),a("h2",{attrs:{id:"一-git简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-git简介"}},[t._v("#")]),t._v(" 一：Git简介")]),t._v(" "),a("p",[t._v("官网：https://git-scm.com/")]),t._v(" "),a("p",[a("img",{attrs:{src:s(537),alt:"image-20201206093056733"}})]),t._v(" "),a("p",[t._v("​    "),a("strong",[t._v("面试题")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("git是项目版本管理与多人协同开发一个工具")])])]),t._v(" "),a("h3",{attrs:{id:"_1-1-项目版本管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-项目版本管理"}},[t._v("#")]),t._v(" 1.1：项目版本管理")]),t._v(" "),a("p",[a("img",{attrs:{src:s(538),alt:"image-20201210094959229"}})]),t._v(" "),a("h3",{attrs:{id:"_1-2-多人协同开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-多人协同开发"}},[t._v("#")]),t._v(" 1.2：多人协同开发")]),t._v(" "),a("blockquote",[a("p",[t._v("一个团队开发一个项目")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(539),alt:"image-20201210103151790"}})]),t._v(" "),a("h2",{attrs:{id:"二-git安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-git安装"}},[t._v("#")]),t._v(" 二：Git安装")]),t._v(" "),a("h3",{attrs:{id:"_3-1-下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-下载"}},[t._v("#")]),t._v(" 3.1：下载")]),t._v(" "),a("p",[t._v("下载地址："),a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git-scm.com/downloads"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_3-2-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-安装"}},[t._v("#")]),t._v(" 3.2：安装")]),t._v(" "),a("blockquote",[a("p",[t._v("指定一个安装目录，然后一路Next即可")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(540),alt:"image-20201210103801584"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(541),alt:"image-20201210103836177"}})]),t._v(" "),a("h3",{attrs:{id:"_3-3-全局配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-全局配置"}},[t._v("#")]),t._v(" 3.3：全局配置")]),t._v(" "),a("blockquote",[a("p",[t._v("自报家门")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Name"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#用户名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email@example.com"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#邮箱")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-l")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"三-git架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-git架构"}},[t._v("#")]),t._v(" 三：Git架构")]),t._v(" "),a("p",[a("img",{attrs:{src:s(542),alt:"image-20201210110408191"}})]),t._v(" "),a("h2",{attrs:{id:"四-git基本操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-git基本操作"}},[t._v("#")]),t._v(" 四：Git基本操作")]),t._v(" "),a("blockquote",[a("p",[t._v("第一步：创建工作区")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(543),alt:"image-20201210110557828"}})]),t._v(" "),a("blockquote",[a("p",[t._v("第二步：初始化git，生成本地仓库和暂存区")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(544),alt:"image-20201210110847724"}})]),t._v(" "),a("blockquote",[a("p",[t._v("第三步：代码编写")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(545),alt:"image-20201210111023441"}})]),t._v(" "),a("blockquote",[a("p",[t._v("第四步：将文件提交到暂存区，暂时存储")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(546),alt:"image-20201210111205850"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(547),alt:"image-20201210111408726"}})]),t._v(" "),a("blockquote",[a("p",[t._v("第五步：将暂存区的代码提交到本地仓库，生成一个git版本")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(548),alt:"image-20201210111732097"}})]),t._v(" "),a("blockquote",[a("p",[t._v("看提交日志")]),t._v(" "),a("p",[t._v("git log")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(549),alt:"image-20201210112015995"}})]),t._v(" "),a("blockquote",[a("p",[t._v("版本的切换")]),t._v(" "),a("p",[t._v("git checkout 版本号")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(550),alt:"image-20201210112518250"}})]),t._v(" "),a("h2",{attrs:{id:"五-git远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-git远程仓库"}},[t._v("#")]),t._v(" 五：Git远程仓库")]),t._v(" "),a("h3",{attrs:{id:"_5-1-远程仓库选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-远程仓库选择"}},[t._v("#")]),t._v(" 5.1：远程仓库选择")]),t._v(" "),a("p",[t._v("选择一：github("),a("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/"),a("OutboundLink")],1),t._v(")  pass")]),t._v(" "),a("p",[t._v("选择二：码云("),a("a",{attrs:{href:"https://gitee.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/"),a("OutboundLink")],1),t._v(")  【优选】")]),t._v(" "),a("p",[t._v("选择三：使用GitLab搭建自己的远程仓库，企业开发首选（运维篇）")]),t._v(" "),a("h3",{attrs:{id:"_5-2-在码云上创建远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-在码云上创建远程仓库"}},[t._v("#")]),t._v(" 5.2：在码云上创建远程仓库")]),t._v(" "),a("p",[a("img",{attrs:{src:s(551),alt:"image-20201210141241104"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(552),alt:"image-20201210141551763"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(553),alt:"image-20201210141716015"}})]),t._v(" "),a("h3",{attrs:{id:"_5-3-远程仓库操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-远程仓库操作"}},[t._v("#")]),t._v(" 5.3：远程仓库操作")]),t._v(" "),a("blockquote",[a("p",[t._v("push本地仓库代码到远程仓库")]),t._v(" "),a("p",[t._v("git push  https://gitee.com/zhuximing/xiaomi-parent.git   master:master")]),t._v(" "),a("p",[t._v("第一个master就是本地仓库的master分支")]),t._v(" "),a("p",[t._v("第二个master是远程仓库的master分支")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(554),alt:"image-20201210142217376"}})]),t._v(" "),a("h4",{attrs:{id:"_5-3-1-关联远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-1-关联远程仓库"}},[t._v("#")]),t._v(" 5.3.1：关联远程仓库")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("git remote add origin url")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:s(555),alt:"image-20201206140807945"}})])])])]),t._v(" "),a("h4",{attrs:{id:"_5-3-2-推送文件到远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-2-推送文件到远程仓库"}},[t._v("#")]),t._v(" 5.3.2 ：推送文件到远程仓库")]),t._v(" "),a("p",[a("img",{attrs:{src:s(556),alt:"image-20201210143248193"}})]),t._v(" "),a("h4",{attrs:{id:"_5-3-3-克隆远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-3-克隆远程仓库"}},[t._v("#")]),t._v(" 5.3.3：克隆远程仓库")]),t._v(" "),a("blockquote",[a("p",[t._v("将远程仓库的代码clone到本地")]),t._v(" "),a("p",[t._v("git clone https://gitee.com/zhuximing/xiaomi-parent.git -b master")]),t._v(" "),a("p",[t._v("-b 表示指定远程仓库的某个分支进行克隆")]),t._v(" "),a("p",[t._v("clone 只做一遍")])]),t._v(" "),a("h4",{attrs:{id:"_5-3-4-拉取远程仓库代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-4-拉取远程仓库代码"}},[t._v("#")]),t._v(" 5.3.4：拉取远程仓库代码")]),t._v(" "),a("blockquote",[a("p",[t._v("git pull origin【url】master:master")]),t._v(" "),a("p",[t._v("第一个master是远程仓库的master分支")]),t._v(" "),a("p",[t._v("第二个master是本地仓库的分支")])]),t._v(" "),a("p",[t._v("window缓存gitee的账户")]),t._v(" "),a("p",[a("img",{attrs:{src:s(557),alt:"image-20201210152626284"}})]),t._v(" "),a("h4",{attrs:{id:"_5-3-5-多人协作代码冲突-企业中用idea处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-5-多人协作代码冲突-企业中用idea处理"}},[t._v("#")]),t._v(" 5.3.5：多人协作代码冲突   (企业中用idea处理)")]),t._v(" "),a("p",[t._v("演示冲突：")]),t._v(" "),a("p",[t._v("jack前进一步")]),t._v(" "),a("p",[t._v("rose也前进一步")]),t._v(" "),a("p",[t._v("jack   push 代码到远程仓库")]),t._v(" "),a("p",[t._v("rose push  代码到远程仓库")]),t._v(" "),a("p",[t._v("rose提示你需要先pull")]),t._v(" "),a("p",[t._v("rose pull代码  报错【reject】")]),t._v(" "),a("p",[t._v("涉及到三方合并【jack本地、rose本地、jack和rose前一个共同的版本】")]),t._v(" "),a("p",[t._v("三方合并的思路")]),t._v(" "),a("p",[t._v("第一步：git fetch origin   ======>将远程的.git信息下载到本地")]),t._v(" "),a("p",[t._v("第二步：git merge origin/master   ==>将远程的master手动合并到本地的master")]),t._v(" "),a("p",[t._v("第三步：合并报错，【conflit  合并冲突】")]),t._v(" "),a("p",[t._v("第四步：人工解决【协商最终的结果】")]),t._v(" "),a("p",[t._v("第五步：将合并的结果push到远程仓库")]),t._v(" "),a("p",[t._v("第六步：另一方将解决的结果pull下来")]),t._v(" "),a("p",[t._v("到此  冲突解决完毕！！！！！")]),t._v(" "),a("p",[a("img",{attrs:{src:s(558),alt:"image-20201210155857448"}})]),t._v(" "),a("h2",{attrs:{id:"六-git分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六-git分支"}},[t._v("#")]),t._v(" 六：Git分支")]),t._v(" "),a("h4",{attrs:{id:"_6-1-为什么要有分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-为什么要有分支"}},[t._v("#")]),t._v(" 6.1：为什么要有分支")]),t._v(" "),a("p",[a("img",{attrs:{src:s(559),alt:"image-20201210170722995"}})]),t._v(" "),a("h4",{attrs:{id:"_6-2-查看分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-查看分支"}},[t._v("#")]),t._v(" 6.2：查看分支")]),t._v(" "),a("blockquote",[a("p",[t._v("git branch 查看本地的分支")]),t._v(" "),a("p",[t._v("git branch -r 查看远程的分支")])]),t._v(" "),a("h4",{attrs:{id:"_6-3-基于master创建分支-bankpay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-基于master创建分支-bankpay"}},[t._v("#")]),t._v(" 6.3：基于master创建分支（bankpay）")]),t._v(" "),a("blockquote",[a("p",[t._v("创建分支")]),t._v(" "),a("p",[t._v("git branch 分支名称")])]),t._v(" "),a("h4",{attrs:{id:"_6-4-分支切换命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-分支切换命令"}},[t._v("#")]),t._v(" 6.4：分支切换命令")]),t._v(" "),a("blockquote",[a("p",[t._v("git checkout  分支名称")])]),t._v(" "),a("h4",{attrs:{id:"_6-5-将master1分支推到远程协同开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-将master1分支推到远程协同开发"}},[t._v("#")]),t._v(" 6.5：将master1分支推到远程协同开发")]),t._v(" "),a("blockquote",[a("p",[t._v("git push origin master1:master1")]),t._v(" "),a("p",[t._v("第一个master1是本地仓库分支")]),t._v(" "),a("p",[t._v("第二个master1是远程仓库的分支，如果远程仓库没有该分支，会自动创建改分支")])]),t._v(" "),a("h4",{attrs:{id:"_6-6-master1分支合并到master"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-master1分支合并到master"}},[t._v("#")]),t._v(" 6.6：master1分支合并到master")]),t._v(" "),a("blockquote",[a("p",[t._v("第一步：切换到master分支")]),t._v(" "),a("p",[t._v("git checkout master")]),t._v(" "),a("p",[t._v("第二步：合并（master1->master）")]),t._v(" "),a("p",[t._v("在本地完成合并")]),t._v(" "),a("p",[t._v("git merge master1")]),t._v(" "),a("p",[t._v("第三步：push到远程仓库master分支")]),t._v(" "),a("p",[t._v("git push origin master:master")])]),t._v(" "),a("h4",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("h2",{attrs:{id:"七-idea中使用git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七-idea中使用git"}},[t._v("#")]),t._v(" 七：Idea中使用Git")]),t._v(" "),a("h4",{attrs:{id:"_7-1-关联git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-关联git"}},[t._v("#")]),t._v(" 7.1 关联Git")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:""}},[t._v("File > Settings")]),t._v("  关联过程是自动的")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(560),alt:"image-20201211091826004"}})]),t._v(" "),a("h4",{attrs:{id:"_7-2-创建本地仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-创建本地仓库"}},[t._v("#")]),t._v(" 7.2 创建本地仓库")]),t._v(" "),a("p",[a("img",{attrs:{src:s(561),alt:"image-20201211092127617"}})]),t._v(" "),a("p",[t._v("或者")]),t._v(" "),a("p",[a("img",{attrs:{src:s(562),alt:"image-20201211092222756"}})]),t._v(" "),a("blockquote",[a("ul",[a("li",[a("p",[t._v("新建项目后，在项目目录下创建为git仓库")])]),t._v(" "),a("li",[a("p",[t._v("注意： 要在建仓库前，设置"),a("a",{attrs:{href:""}},[t._v('忽略文件 ".gitignore"')])]),t._v(" "),a("p",[t._v("作用：被忽略的文件会被版本记录忽略，版本中不包含它们。比如.idea目录 、*.iml 、target")]),t._v(" "),a("p",[t._v("范围：不需要和其他开发共享的文件，具体见下图。")])])])]),t._v(" "),a("p",[t._v("忽略文件或目录【如果文件或者目录加入了忽略列表，那么在add的时候以及在commit的时候该文件或目录直接忽略掉】")]),t._v(" "),a("p",[t._v("第一步：下载插件")]),t._v(" "),a("p",[a("img",{attrs:{src:s(563),alt:"image-20201211092646040"}})]),t._v(" "),a("p",[t._v("第二步：使用插件，协助创建.gitignore文件")]),t._v(" "),a("p",[a("img",{attrs:{src:s(564),alt:"image-20201211092807773"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(565),alt:"image-20201211093243769"}})]),t._v(" "),a("p",[t._v("忽略java")]),t._v(" "),a("p",[t._v("gen下写target")]),t._v(" "),a("h4",{attrs:{id:"_7-3-提交到本地仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-提交到本地仓库"}},[t._v("#")]),t._v(" 7.3 提交到本地仓库")]),t._v(" "),a("blockquote",[a("p",[t._v("创建好仓库后，做第一次提交。")])]),t._v(" "),a("h4",{attrs:{id:"_7-4-push到远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-push到远程仓库"}},[t._v("#")]),t._v(" 7.4：push到远程仓库")]),t._v(" "),a("p",[a("img",{attrs:{src:s(566),alt:"image-20201211094639303"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(567),alt:"image-20201211094435008"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(568),alt:"image-20201211094549389"}})]),t._v(" "),a("h4",{attrs:{id:"_7-5-克隆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-克隆"}},[t._v("#")]),t._v(" 7.5：克隆")]),t._v(" "),a("p",[a("img",{attrs:{src:s(569),alt:"image-20201211095245097"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(570),alt:"image-20201211095401693"}})]),t._v(" "),a("h4",{attrs:{id:"_7-6-协同开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-6-协同开发"}},[t._v("#")]),t._v(" 7.6：协同开发")]),t._v(" "),a("p",[t._v("A commit and push , B pull")]),t._v(" "),a("h4",{attrs:{id:"_7-7-冲突演示和解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-7-冲突演示和解决"}},[t._v("#")]),t._v(" 7.7：冲突演示和解决")]),t._v(" "),a("p",[t._v("A commit and push , B 没有 pull ,在 旧版本上修改，push的时候发生冲突")]),t._v(" "),a("p",[t._v("解决方案: merge")]),t._v(" "),a("h4",{attrs:{id:"_7-8分支操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-8分支操作"}},[t._v("#")]),t._v(" 7.8分支操作")]),t._v(" "),a("h5",{attrs:{id:"_7-8-0-查看分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-8-0-查看分支"}},[t._v("#")]),t._v(" 7.8.0：查看分支")]),t._v(" "),a("p",[a("img",{attrs:{src:s(571),alt:"image-20201211105534959"}})]),t._v(" "),a("h5",{attrs:{id:"_7-8-1-新建分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-8-1-新建分支"}},[t._v("#")]),t._v(" 7.8.1：新建分支")]),t._v(" "),a("p",[a("img",{attrs:{src:s(572),alt:"image-20201211105719937"}})]),t._v(" "),a("h5",{attrs:{id:"_7-8-2-上传分支到远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-8-2-上传分支到远程仓库"}},[t._v("#")]),t._v(" 7.8.2 上传分支到远程仓库")]),t._v(" "),a("p",[t._v("右键，push即可")]),t._v(" "),a("h5",{attrs:{id:"_7-8-3-分支合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-8-3-分支合并"}},[t._v("#")]),t._v(" 7.8.3：分支合并")]),t._v(" "),a("p",[t._v("先切换到master分支, 光标移到 master1 右键 ----merge into current")]),t._v(" "),a("h5",{attrs:{id:"_7-8-4-合并结果push到远程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-8-4-合并结果push到远程"}},[t._v("#")]),t._v(" 7.8.4：合并结果push到远程")]),t._v(" "),a("p",[t._v("第一天上班，怎么用git ？")]),t._v(" "),a("p",[t._v("领导告诉你的，远程仓库git地址 http://xxxxxxx ，账号是zzzz , 密码是xxxxx")]),t._v(" "),a("p",[t._v("1 配置 git插件")]),t._v(" "),a("p",[t._v("2 clone 代码")]),t._v(" "),a("p",[t._v("3 提交 commit Directory")]),t._v(" "),a("p",[t._v("4 拉取  pull")]),t._v(" "),a("p",[t._v("​")])])}),[],!1,null,null,null);a.default=r.exports},537:function(t,a,s){t.exports=s.p+"assets/img/image-20201206093056733.e384f277.png"},538:function(t,a,s){t.exports=s.p+"assets/img/image-20201210094959229.a94a22da.png"},539:function(t,a,s){t.exports=s.p+"assets/img/image-20201210103151790.2f6d8cf8.png"},540:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApsAAAB2CAYAAACH11gRAAAgAElEQVR4nO2dP47qvtfGn+9P7y4CEtReAKJAYnqXNAiJDZASKRILQLJEGTaAFNGkTE8kCpQFpJ6RIOvIWyQMSXAgATKXuff5SC4mE+xz/PfEPrb/AxCDEEIIIYSQBvjfnxaAEEIIIYT8vdDYJIQQQgghjUFjkxBCCCGENAaNTUIIIYQQ0hg0NgkhhBBCSGPQ2CSEEEIIIY1BY5MQQgghhDQGjU1CCCGEENIYNDYJIYQQQkhj0NgkhBBCCCGNQWOTEEIIIYQ0Bo1NQgghhBDSGDQ2CSGEEEJIYzRjbEoFR8lGon5LqO978afke/d8IXpYboQQ0ijNGJveHqfeAP9M901934s/Jd+758uvQ0BKCVM5MJvM1EfKTUiolxioAlI58H0fvu/DURLiBbGS+ghTgd8chDTD/yDVd0enC481Pg8bt4XBP9Nwqe970aB8woRyMm3EURkjpal0BUzHh++rNzVkG5JPdNEZjDHqGWi/Mt4rqpabgKkcOI4Pfz1H7wUpS7XGvHXAajbEcDjDoTXH+gmLR0gFJ9N/O8qENOV3uUh1rrdm3qjNjgPF/53LVyOXMJ2SscOBMq/N5sry5eQ416/0N7l4kzL5/p9jQuaSzf/2KmR0DW0L+4HTgMH57u33T8F8+deIIVXs+yqWQIzvIGKp/NhXMvOsRhBm7DhmLB757W8M1Pe9QhPyCTN2fCc2xfmZjJXvx0qKxvNFSDNWpnhpnL9DPhGbjh8r+Sb1RYhYiCf7xtL6VPKsapAqdpTM6CBiqZzYL8QnTCf2fV2eytjUlqGMleOU549u/BAyVk4hj+rId5W3ST1wcvIlz/xMnIluWVlkrHwVyzR+qTJxCBkrpzjuIZbKeXl9q9Y+RGyqN+5TGwjv3q8xvC7cWEYP4VkzuK0HlwXDHQ7o4+NfWROivu9FA/KJjz6MYAs7PD/xYA2HsLzw8lJD+RJ6Niw7vP/iH+Ld5btL1XILQ4RhiM9j9HSScjqCER2wy2ZbuMMhMtCvXYEEzHELh42HS3QhPGuCVVB89wDXjdCbV5xRkgNgu8XJqFGvQw/WNgC+3RPqyFcNYS4wgouZdYkztCdYBT3Mz9OTogO4G3i6qhl62ByATkEnz5q8fIazWvvoot16XZq/gV/fb5DK3PHZDGEvN/gsPhYSSrvcUvjt9nS70xTiL/JPqqDvX8Uf0LdWfflT5dFUugLip1R5qF3+oHyN8NP1RaDTAnD6Qn6oDfF1Aoz+R80y6KJt6P/jbQ5AN//sy94iQA9jzVJ3ETkA9p6HfWCg3b37+oXPIyK0UmOunnz3EfjoG4gOOxRNFW+fMXK7X9jfMGbC3R5fOplebnDeax8CUr3GNeN38dv7DVKV/yv9jzRhftqww/CqMVfG2+PkTCFtC14xeuVj3ovgrg6YjkfoGRHc2RJf0wXmPQOIXMwm9nfaQiosxj0Y5w4rCrBaWpcvVqngz89NNcBqmKSZpAMAEdzZJDMrJSBVmhaAKHKxXdqX+IQJNW2jhSOW1g4faoFRzwAQIXCX+q+xG/qe40OrhZZxwnZowRMSajFHEm1e33vyCWliOkjl23xheo4HEYLVMj/blvwA5nSc6gBEUYBtNv8y76nFGL1zRkcBgtMRe8u+1umWviV6IArgLi1cZd8d+erWl8ry5cogla17rvsAIKH87CAwh+/PU100ad5NV8B01hids8OdYbL7gLMewbiKU/NuqG+Nd9tHRt/X5XN1+SqTky9C4G5xbFDfHJXq86tIjK/ocPUpn8ya9troAjX6Xg/7YI75QuGrqF9oX7c3eNi4Y6xH99tvB3vYALAPMB9IwKuYO902DJzwFT4i3x3EB/oGcPrS/PDziAgjJKJ6t8syLP+/Z00A5UBhAqv4UrbfABAFLg7oY9QzEKyG6fvV2sdljAKAEdb+6PwDff9yi4bGwcrjVqXxo0a/ca/9PjJOkz+G1udGmuoxv6FCkKrM3yrxdzv78AjTiX3nnKaMVcaP59sPp+jXU/Qh0vo7idh08r+9+P9kfH2KeSBELFOZlFKxKVK/Ennbp6pUXyFiKWUszXM6MlbKTOS6yv8q8snE3ymV71s/cfYj1OT1d3ypbho/XdNxYjPjg5ik+4C+GT1yPlVa/+Aq8lWvL5XlE2bs5HwuEx+ysvLV+5I9ki+a+nvHd0mYTsFfrRBXlfbRYD6XyidV7Pv+zXDJpzL58nn5Wn3rldsjdUEfzrJd51nO77BW/onYVEl+OY6KpSirL2aqf1EGjc+myNRLYcaOLu80bVrIpG3l86iqfBV8Nm/1S9/tWl++Ze2ovC0XfTjPfsQiL5uSsZBS63N5q/3m8vEV/t6vHgdrjVv1xo/b+VKh/T44TjP8fMgso/cwz+zSm49e4zzibVy0Srd5RnkfntO+9As3Cvb4zLnGHRAZ7fzqS+rvlFvqER9oHwo+O3KKEVws7Yyvj2dhFWSWlcIQ3tcJMIC9ZcE+f3l5OxxuuGuV6huGyVf2LllaGqsONlb6BelZGA4zswuV5PPg7S/yeZcXsXEj9MYXFwep5ugFK0y+4wvhFX2bAABdtHHALpNZoWdh5p7q64sSn6rc0lpd+arXlyryyekIRrDKzAKH8KwtyrWtzu16D4T2Ei5GWJgCgIQafD31FV6lfTSZz6V4FobD4c1wnjUS5hi9KFvvQ3j2Eq6mvb1W34y4d8rtx6mRf0AI25pgNlvhhBbm63VyWkLpMmXSVxijaanvpvho43h2Kg13OEStKx/HhPz4sZ73cXJnGOamBGvI15sXdo5fZsLuEn7hBKClF/R50v55k+k37G0Ao9UBPO/xlcBX8epxsOq49cD4cYtK7ffBcZr8PBljM8DquwObPey0fUW4w6E1RgXXoPIo7AkmlocQAlKaUErBWaTLjvk3YW+DnKGV6yxT5KCn9fX5PEYwik5J0fHaZxU3fJcq6nvYlC+PPCtffuCVGPSAYH+9WJTzbUqeYH/qY+EomFLkjgQpNTZu6Ntta3yqQhuTYXYZp458D1AqX3m6L+FuPQhhL11gtIBSA+yv1ulqJFWpfTSczy9AW180NKrvC/qrP00YerAmEwxnK7joYb52SvUJ7SXcqNx3s9vuYbTOGnxlm5ey48cQw+Gk9OOpknzBqmBUz7QfHVpEB4k77PNmn1QOBnvNMvpb08A4mHJr3Hpo/CilZvutO06TH6dkg1AIb394URKvcLyX6dmGCwwGwH6/x3LrQtv3eHsExghTmfxu2j5ip6noxmh9debaemQArc6Tm5aq6Hv2YyrntfJFOF63xNS3KY9nTbDcHtEeL7D2fTg3Z0aAcn3TDRAvlq8+b7xRKLSxDQz0WrqOsg5V20eT+fwsdepLk/r+VH35xDGCdlDvto2SwfMWmo0WoQd7MsQqMDCaln1KpLNyo4X+gwx5o2/mlhsizchXwucRUcPGRKmh6W3gYoTpd8coYJYYbn+MRsbB++NW/fHjFu/cX5G6lG8Q8uzEKVxIyK5X2SdcH9ceJ+cDwn5ks5GA6czRO60wm2SWKIRZlljiiD6QEJ0xsJ9o04zcGSZNOQ8/pW/CU/J124VZnrRTLkZ39V5C6NmwPBuAgJBTLNYOOjmn8gJafZNdtf1KAteTrzYvKI9G0pUKg+MKK8yxMHcPlned9tFwPv8IP6Dvj9SXpH2cB/XsxsBOCw8YLl1Mp11Ymik4bx9gPi6mk31hA3e8xmg6gJsd3UUHOO7yUn+dgNEAEnc23rxSPh3hDodohH5H86tuGwYCbJ8Ys27PaIbYHQIsxgv483TjSrDC8q02o/y5cbD2+FHK39BfkTN3r6uU0wE6z0274Dy9XvfjFUC66zCCu6nuC5NMs8+x7p+gWyUtXyZ41TEMT+iL5+UTnRYQ7NPBwMM+0Psv5d9D8mGRey1E6FlYurgz06PX9/MYlRzhImF+3z9YQ76H0clXnu7ruFUPJNRgD8v24FkrnPq6maUKVG4fP5HPzxBid9DV+8KROT+i73PttyrexkVUPLsy1e+gm4a6ySeOJcv/otPSHLGUJZndRK+X+zjULb3C2yNA74Fbsp6RTy/z7qDvX2Sy/vpwfb67dC5MLNpHLJeT7xnfidWEr6aEfHxa8OfHwYfHDx3v3l+RutwwNgWk6WDe0ky/VzpnM4+3OTzmeB9+4QQD/enlzmAhJMxpP/26kTCLPZi3RwAAJ32FDO0l3NY8fw+xkDDVFB/1JdTysL515TP6WGTeE1JhPQLczUVzz1rhNFpDZXqC5L0TVtketTvAfFFY9hASH33jrv+TTt/Q3iIwRjn5ICRMZwzsHpDvCXTyeft0+TCzHCbV+KVn3enrgYDpZP00PVjbE0aL4lV7FajRPn4in58htLcIevOMfAKmGqAVAa1BOpD9kL6326/AR9sAWgNteZ2vcHTufT2kbhSXchcwF6PCxQFVCfF1MjBaO5n6nByRtujn+wMt3qbgEynw0df5NSTL//X7tifl08WYbrJbf/cv6ZjVCx6uz5V8NMMdDq0R1mdfVseBU/BTfIjPY+Jrn0YizAE6n0+YsD89Dj4xfuh49/6K1OM/YTrx+tY2v2BV2FGIxNhcz9GrdQ6YgOksgGUynX459yvAanbEOD1nMHJn2LbXl/8NLXjChFqMMmearbC0PvHhrDEyiueGJdzvNATM7zO5cH3+o/a8svyZi5fz1O7rm4/vQvkyxh35zjKOj5gtgek5f26cY5k9/+zqPDUgObNs0QZOLfTO6VY+r6ygbybd7Dlpj8pXq77UkE9IhcW8l55xGcBd7tFej3HM1ClhOrhuI/p6dzfdbD04t61c3cjGmz+P7pJ08Wy7Gu3jpflcUb46FM49XS036CwW6J9OOOw3sL3wpfreEERTX0r0LdS7c32ptkRZOOcwWGH54CyZMBU+vvbAoKy95eW/6r+kgtPZYGIj815et9yZkMEKs+M41zZu9Yn35SvE/12PCvmeG5OK+ediu9GUrzAvZ9niWq+zfNMv6/5mIKmgOpvvPlEIAXS7+BjMMUJetrrtQyon1eU150S+dhzMqqCp25XHjxr5cq/9Pj1Ok5/kx85ZqnTW2F8UGtf3Veey/RZ9f0S+8rMk/9Z8YWC5MVQN6VmSZed7vlF/zMDwTuGuz+YrCe0tTrWvYfu9UN/34k/J9+75QvSw3Mg1qTtA0eVFCJjTEfBOO9IJeSP+Q2J1kl9Gfmm36pIuuUlhyYjLL4SQawSkOcV41Lssy0cRggOvRySkDBqbhBBCCCGkMX50GZ0QQgghhPxb0NgkhBBCCCGNUX6DEPm7KBwhUXoE0avjKxxTkxxnY1U4eqY04ZcdFfM+CEjZRWeQ3PRh/0Y/USGhptDeEEMIIYQ8sI1dxKbjx76vYvkGW+rfJ7xpvggzdhwnNuX5GBcRS9OJ/UeP+Kkan1TJM3k5Pkacnz14tJBUfuw7ZixFJr+V/N3lK2RsKif2fT9W8g3qS538UE7sOH7s+z9ZDgwMDAwMvyw89kMhzVjdPYNOxKb6t84dq5YvPxuk8jXnBSaG0yPnCFaNT/9eajA+YpgIM3aKhqru2a8s3yT/fpexiRhCxEKIx8uUgYGBgeGvDw/7bIaeXeGYhy7auhvP/mKq5cvPY4ymKFwmia8TSu7GfUV8AsmVx9d58XmMrp5VQU5HMKJD/vrUcIdDZDxw9+5jvGv5/jHCEGEYPlymhBBC/n6e2CAkIG6O7wJSzV96z/Tv4F6+/DzexkXg7vGp+V901D19RXyJ8dkbm9pDseunmxivOH0V/DNTI/fHDt9+v/IlhBBC3pnLBqHsncRI7pg9oI9Rz8gcbp2/0zRyZ5iE17M8ufttMcLaH51/UP/OZO3dp9k0igeaFzaQFO9SFSbUtA20WmgZJ2yHFrzcfczFe6evN8IEpyP2lp25V7davpzjy94VHkUBttkNM6l8LRyxtHb4+L639om7ckMb1tXPJAa9CIdNc/F51goDf461075sChImpu0DltcR3KGLtgFEh2sj9fMYAb02ukDFupW5OzdyMdu2sU7rWLAaYj/wb94Bri3fuuWWqwcRAneLo07Um/Wlrh6oWJ8JIYSQ1xJf/MUuGz5Mx48dJWMhpdbnstK9wa+6u1vrlydi01HpRhHk5TYvMicbUjIbOoSIpZSxNM/PZaxUuuGk+O75HtwaG1xu54uMlZ+V77yxpiCf6cS+o2KlVGyKNC75Wt9EqV5773N5fOdNNX7spHXqsTTOeXedhijmYeX4LvkpTCfjc1jua1xavrXKraweFH02K9SXWnrUr89VQz5dBgYGBgaGS0iW0eUUI7jYfE+vhbC3AYxWB/De4FiZ1C8v514oPtA+bPJH6KR6LO2LzKFnYRX0MDbTtc8whOd58HZHRGhhrDrYWOnMp2dheJ4BAgB00cYBu0wioWdh5p4eUkOqOXrBCpNv+UJ49gSroIe5khf5vk6AAewtC/Z5Bs3b4fAqtzipMDguMXmV72FpfAKmmgLLIYazFQ6nCEZvDsd8h3VoD/vgUqfCrxPQ6iRL8eID7WPNO45rlJswx+hF2XoawrOXcAvvVaovtfR4bX0mhBBCqvBLDnVPjN+s/5/4aOO4y5sDctBDdLg2Ej6PUelGmMPm1rK+h/2pj4WjYErxnXZoP3I+pcSgBwT768VKbx8AvUF+w0101PhEFgzuR5AKqrN53SaXG/FJtUb/uEnyKvRgWxPMVgGM0RpKXkf103weI/QGiSBy0AOMPj5EUreg2dhUiQrl1m0b2nqap3p9qa7HK+szIYQQUo3E2PQ2cDHCVH6bcjBLDLc/hrdHYIwwlQAgMW0fsdMIZ4zW8H0/F9Yj4zLbk+N016bwrAmW2yPa4wXWvg/HUZAPT8xF0O6L+TziR/by/qChmRhLAbaF/yUzaRfjqDqfOEb63fPdtlFi5N0m3B0QtToQkBi0AgRBsqv9ow9obLwXkW50qkS1+lJHj9fWZ0IIIeQ+6QahELtDgMV4AX+euZnlraY7POyDOeYDCdFJblrRSRe5s9ctD6eEng3LswEICDnFYu2gk9uUVJV0hqv4u24bhu71VyJMqMEeVmFjjhACYdlmpmfiEx2U2VTh1wnoJ8Z/9ZSTXefnj4bL7xLj7aEPo/ALJ2OMD7ON1mmP5bGFdX+B/mkLu25cjVCxvtTU43X1mRBCCLlPMrMpTCzaRyyXEwyHQwyHQ0wauQJQQj4xjZIsH86x7p+0M0/ly+UPHlcjZGHWJ0ToWVi6eOBcRw/7AGh1rn8nOi0g2De3G1iYcBbA5uoqQYnp9IF1+SrxhV84oQWNuom+V0cY3cfbuIjSJeJLZB/oGxEOumnu+zFiHxgYjXo47b1khtAwoJ9OfBUhdgddPU122+dlq1pfKurx0vpMCCGEVCMxNsMdDq0R1ut06dlx4BT8uh7i84jIaKObRiLMATqfT5iw3h4BAJz0hlloL+G25nCUvMgtJEw1xccj6XUHmC8Ky4xC4qNvaA8rv4dnrXAaraEyEQqpsB6dsGrsTmkBc9HHYbkDhIDIBKnGaGUMEmE68H3/zgaeqvF5sFYnjNYOzIK+ixHgbjIHR1VKF0BoYxsYGC3MtEwEzMUIRrDNzcpVjg/nA+aD5OMl/MIJjxqu1QntLYLePFMPBEw1QCsCWoOLQVinvlTSo2J9rpN/Z/k/2gbQGnBJnhBCyBXJMrqcon2YYZiO2EIIoNvFx2CN9WCF4ffAlj9vEFjDH6H8/MzQxjZwMF/7mJ/PG3xqHPewD8Y3HOpC2JMZoBZY+/PkURTAXWY2QOTO7QTmvo85SpbfP48I0MZg6nyf25mciThDfqyvmi8erBmgFhl3hcjFapY54/Bbvh7Wfjs9HzFznuLch8IQ1W3TLtqGgd56jZHmv8H+kfMuK8bnWZjBxHS8xndxRAG2s0n+FIEaeEkGYr4eJeUWrDB7wlAPdwdE7a80/z9xDHR+vBXKt1a5netBmi9RgNVyAyxa6GOATvcTCENUqi919Khcn6tSzJde2tYz53oSQgj55/kvOXtvASw1Plvpcumy7kHshBBCCCGEAPhfsvEiuzSZIgTM6Qh4px3phBBCCCHkV/EfgBgQkOYU41Hvsss1ihAcHrwekRBCCCGEEHwbm4QQQgghhLyeX3KDECGEEEII+Y3Q2CSEEEIIIY1BY5MQQgghhDQGjU1CCCGEENIYNDYJIYQQQkhj0NgkhBBCCCGNQWOTEEIIIYQ0Bo1NQgghhBDSGDQ2CSGEEEJIY9DYJIQQQgghjUFjkxBCCCGENAaNTUIIIYQQ0hg0NgkhhBBCSGPQ2CSEEEIIIY1BY5MQQgghhDQGjU1CCCGEENIYNDYJIYQQQkhj0NgkhBBCCCGNQWOTEEIIIYQ0Bo1NQgghhBDSGDQ2CSGEEEJIYzRjbEoFR8lGon5LqO978afke/d8IXpYboQQ0ijNGJveHqfeAP9M901934s/Jd+758uvQ0BKCVM5MJvM1EfKTUiolxioAlI58H0fvu/DURLiBbGS+ghTgd8chDTD/0Eq+PNe6QvBagjLqxuth407xlQCXu3f/kao73vRoHzChFqM0DPSv6MAq4kFr9F0BUxnjZERYDU8p/VONCSf6KIzGGPUMxDsXxWpjqrlJmCqBfotA4YBIFg9nbJUa8xbLlYzG16Y5ONaAcP6nW4ioVRYzHu4VE8X2+MXYHvwAEjlY94DELmYTWyEF0Eu40Dxf+fyPa2u5BKmg/XIwDURAncJyw7z71eVLyfHuX6dH88w+Y43KZNR2iCjyMV2acP7Tjb/22sxL7qGtoW9cqAweWDMI4TcI4ZUse+rWAIxvoOIpfJjX8nMsxpBmLHjmLF45Le/MVDf9wpNyCfM2PGd2BTnZzJWvh8rKRrPFyHNWJnipXH+DvlEbDp+rOSb1BchYiGe7BtL61PJs6pBqthRMqODiKVyYr8QnzCd2Pd1eSpjU1uGMlaOU54/uvFDyFg5hTyqI99V3ib1wMnJlzzzM3EmumVlkbHyVSzT+KXKxCFkrJziuIdYKqf5+sbA8I+FG8voITxrBrf14LJguMMBfXz8K2tC1Pe9aEA+8dGHEWxxmazxYA2HsLzM7E1D+RJ69tUs0Tvx7vLdpWq5hSHCMMTnMXo6STkdwYgO2GWzLdzhEBno165AAua4hcPGy8xIhvCsCVZB8d0DXDdCb66q9e1yAGy3OBk16nXowdoGwLd7Qh35qiHMBUZwMbMucYb2BKugh/l5PVx0AHcDT1c1Qw+bA9Ap6ORZE+wHDpfUCXkhd3w2Q9jLDT6Lj4WE8n34jnnDvyiEvT3d7jSF+Iv8kyro+1fxB/StVV/+VHk0la6A+ClVHmqXPyhfI/x0fRHotACcvpC3g0J8nQCj/1GzDLpolywVe5sD0M0/+7K3CNDD2LyfihwAe8/DPjDQ7t59/cLnERFaqTFXT777CHz0DUSHHYp2pLfPGLndL+xvfASFuz2+dDLR4CTkpZQbm9KEKZB8yT8au7fHqT/Vfj1L5cNfL/AhTSjHh+87MEXGWb5gyAqp4Dj+tyO97yhIkYvw8j//8sUu1fmZg3y/WnDMd8x8fMKEUgqOMiEgYH6/60CVddA39D3HpxwHzlk+IVPddYb7bfmEzMiXjcd3oKRGPiEzOvhwivmXeU85Ti6flTL1Ot3St0QP31HQZt8d+erWl8ry5cogle1c95OUkw8r309803rzjC4lH1s30xUwM/XYMQUgTDjaOLPvrrG4YQjdbR8ZfV+Xz9Xlq0xOPgfK1Fshr9I3R6X6/CoS4ys6Xn3KJ7OmRrum/ZUYg6OFRr/Qhn3lg+hh40YwRvfbbwd7eEiMuN6gRu502zBwwlf4iHx3EB/oG8DpSzM6fR4RoYeBBOB5t32IQ08/6wkanIS8Gq3PjTTVY35DhSBVmb9V4u929uERphP7zjlNGauMH8+3H07Rr6foQ6T1dxKx6eR/e/H/yfj6FPNAiFimMimlYlOkfj7ytk9Vqb5CxFLKWJrndGSslJnIdZX/VeSTib9TKt+3fuLsR6jJ6+/4Ut00frqm48RmxgcxSfcBfTN65HyqtP7BVeSrXl8qyyfM2Mn5XCY+ZGXlq/cleyRfNPX3js+jMJ2Cv1ohrirto8F8LpVPqtj3/Zvhkk9l8uXz8rX61iu3R+qCPpxlu86znN9hrfwTsamS/HIcFUtRVl/MVP+iDBqfTZGpl8KMHV3eadq0kEnbyudRVfkq+Gze6pe+27W+fMvaUXlbpg8nA8OzITOz2cPcv8wUzEctvAJv46JV+jUc5X14TnuUrXhEwR6fOde4A6Li13/q75Rb6hEfaB8KPjtyihFcLO2Mr49nYRVklpXCEN7XCTCAvWXBDtM3vR0ON9y1SvUNQ3ieB2+XLC2NVQcbK9016VkYZnfxVpLPg7e/yOddXsTGjdAbX2agpJqjF6ww+Y4vhFf0bQIAdNHGAbtMZoWehZl7qq8vSnyqcktrdeWrXl+qyCenIxjBKuNzGcKztijXtjq36z0Q2ku4GGGRTKVCDb6e8nms0j6azOdSPAvD4fBmOO/8FeYYvShb70N49hKupr29Vt+MuHfK7cepkX9ACNuaYDZb4YQW5ut1+YxvEvnd2U3x0cbx7FQa7nCIWlc+jgn58WM97+Pkzgq712vIl11BSGfOS3eUFwm/cALQ0gtKCPkDZIzNAKvvDmz2sNP2FeEOh9ZYv3RaNQp7gonlIYSAPC8fL0a47ntC2NsgZ2jlOssUOehpfX0+jxGMolNSdLz2WcUN36WK+h42dql7wrPy5QdeiUEPCPbXi0k536bkCfanPhaOgikvfnuhbZUbGzf07bY1PlWhjclwkomvjnwPUCpfebov4W49CGEvXWC0gFID7J84a6Va+2g4n1+Atr5oaFTfF/RXf5ow9GBNJhjOVnDRw3xddCHKvGsv4Ublvpvddg+jddbgK9u8lB0/hhgOJ6UfT5XkC1YFo3qm/cA8TcwAAAZCSURBVOjQIjpI3GGf37AmlYPBnkchEfIsJT6bIbz94UVJvMLx/uxXt8BgAOz3eyy3LrR9j7dHYIwwlcnvpu0jdpo+xxitC1/OqU9eq/PkpqUq+p79mMp5rXwRNK5hqW9THs+aYLk9oj1eYH3Pxw1Aub7pBogXy1efN94oFNrYBgZ6Ld0HTR2qto8m8/lZ6tSXJvX9qfryicQ18/qrtZs4c9asE5oNWqEHezLEKjAwmpZ9SiQf6MZoof8gQ97om7maD95G5Svh84jo1kf/C6ChScjrKN8g5NnJ7JOQkM9OeXh7nGrvrjwjYDpz9E4rzIYTWJYNz/MQlvbEHpKJCwlhjoG9fgYxcmf6ZalJ+YxjZZ7S9wXydduFWZ6STvnqvYTQs5OZh+EMyy0wvjEzAqBE32RXbTXqyVebF5RHI+lKhcFxhdXpvJz+CHXaR8P5/CP8gL4/Ul/S9nH18ZgY3VVmePN0MS0x2Lx9cPsj1dvAjQyMpoP8c9FB0VoPv04PzoI/IZ+OMHFn0i6Vd9swEOCZRQsamoS8lrvXVcrpAJ3npl1wXp6t+/EKIN11GMHNnc92J7V9APTmWPdP2g5HuxydJPai41ue0BfPyyc6LSDYf99qk/Tl1z/Mv4fkwyL3WojQs7B0cWemR6/v5zEqOcJFwvy+f7CGfA+jk6883ddxqx5IqMEelu3Bs1Y49XUzSxWo3D5+Ip+fIcTuoKv3hSNzfkTf59pvVbyNi6h4dmWq30G3HHOTTxxLlv9Fp6U5YilLMruJXg/9nCjXLkjw9gjOO71/TD69zLuDvn+Rif/Ew/WZhiYhr+eGsSkgTQfzlmYZutI5m3m8zeExx/vwCycY6E8vdwYLIWFO++nshIRZ7MG8PQIAOOk7nNBewm3N8/cQCwlTTfFRX0ItD+tbVz6jj0XmPSEV1iPA3Vw096wVTqN17kik5L0TVtketTvAvHg0iZD46Bt3/Z90+ob2FoExyskHIWE6Y2D3gHxPoJPP26fLh9/pCkg1Rvnlra9JN5mdy/pperC2J4wW5h2XBQ012sdP5PMzhPYWQW+ekU/AVAO0IqA1SD+Efkjf2+1X4KNtAK2BtryE6VyOtbqtMLaBkSl3AXMxKlwcUJUQXycDo7WTqc/JEWmLfr4/0OJtCj6RAh99nV9Dsvxfv297Uj5djOkmu/V3/5KOWb3g4fp8z9CM47hSIITk+U+YTqy/2zYluL4PF0JCrefoXd2hewsB01kAy2RzyOUO3ACr2RHjdeLgH7kzbNvry/+GFrzCfdRRsMLS+sSHs8bIiODOJled8/2v0/yduogCuMvMRpjcnfHnO58llD//NkZu3xuf17fsDvr8Pb815DvLOD5itgSm5/zRvQckZbYYo2eU3SGM9N7vNnBqoXe5/Ft7x/FdfTPpmtPxbT0qyFervtSQL3dXcxTAXe7RXo9xzNQp/f3P+np3N91sPTi3rVzdyMZbcq9zsd3VaR8vzeeK8tVBSKjF/Lsur5YbdBYL9E8nHPYb2F74Un1vCKKpL2X3bOfr3bm+lLftfDpSLTA/3+0drLC0qq/i5GIyFT6+9sCgrL3l5b/qv6SC09lgYiPzXl633N3lwQqz4zjXNm71ifflq3Y3en5MKuafi+1GU77ChLPObiK77iuEqTD9sm7OaFY1JP/7779K7xHyL/Fj5yzdOivwbwyN6yuV5mzBv1jfH5Gv/CzJvzVfGFhuDNVCVf60nAwM7xbu+my+ktDe/pmNGn8I6vte/Cn53j1fiB6WGyGEvIb/kFid5JeRX9qtuqRLblJwdbjtJkEI+dfgMjohj0FjkxBCCCGENMaPLqMTQgghhJB/CxqbhBBCCCGkMWhsEkIIIYSQxqCxSQghhBBCGoPGJiGEEEIIaQwam4QQQgghpDFobBJCCCGEkMagsUkIIYQQQhqDxiYhhBBCCGkMGpuEEEIIIaQxaGwSQgghhJDGoLFJCCGEEEIag8YmIYQQQghpDBqbhBBCCCGkMWhsEkIIIYSQxqCxSQghhBBCGoPGJiGEEEIIaQwam4QQQgghpDFobBJCCCGEkMagsUkIIYQQQhqDxiYhhBBCCGkMGpuEEEIIIaQxaGwSQgghhJDGoLFJCCGEEEIag8YmIYQQQghpjP8HcKAYdQo1VlEAAAAASUVORK5CYII="},541:function(t,a,s){t.exports=s.p+"assets/img/image-20201210103836177.df0adf5e.png"},542:function(t,a,s){t.exports=s.p+"assets/img/image-20201210110408191.a6038ea2.png"},543:function(t,a,s){t.exports=s.p+"assets/img/image-20201210110557828.84bd7795.png"},544:function(t,a,s){t.exports=s.p+"assets/img/image-20201210110847724.21dbc2ca.png"},545:function(t,a,s){t.exports=s.p+"assets/img/image-20201210111023441.f74849b3.png"},546:function(t,a,s){t.exports=s.p+"assets/img/image-20201210111205850.7905379b.png"},547:function(t,a,s){t.exports=s.p+"assets/img/image-20201210111408726.cc8e4ead.png"},548:function(t,a,s){t.exports=s.p+"assets/img/image-20201210111732097.6f0720e4.png"},549:function(t,a,s){t.exports=s.p+"assets/img/image-20201210112015995.2c17dccc.png"},550:function(t,a,s){t.exports=s.p+"assets/img/image-20201210112518250.b3a607af.png"},551:function(t,a,s){t.exports=s.p+"assets/img/image-20201210141241104.c82e66e3.png"},552:function(t,a,s){t.exports=s.p+"assets/img/image-20201210141551763.6342cad9.png"},553:function(t,a,s){t.exports=s.p+"assets/img/image-20201210141716015.e19db232.png"},554:function(t,a,s){t.exports=s.p+"assets/img/image-20201210142217376.f565fcb5.png"},555:function(t,a,s){t.exports=s.p+"assets/img/image-20201206140807945.026644cf.png"},556:function(t,a,s){t.exports=s.p+"assets/img/image-20201210143248193.9a2c75a9.png"},557:function(t,a,s){t.exports=s.p+"assets/img/image-20201210152626284.77d77da1.png"},558:function(t,a,s){t.exports=s.p+"assets/img/image-20201210155857448.cf73f392.png"},559:function(t,a,s){t.exports=s.p+"assets/img/image-20201210170722995.f2bf9fc1.png"},560:function(t,a,s){t.exports=s.p+"assets/img/image-20201211091826004.47dd9bed.png"},561:function(t,a,s){t.exports=s.p+"assets/img/image-20201211092127617.505f97e6.png"},562:function(t,a,s){t.exports=s.p+"assets/img/image-20201211092222756.103cebf1.png"},563:function(t,a,s){t.exports=s.p+"assets/img/image-20201211092646040.9854853f.png"},564:function(t,a,s){t.exports=s.p+"assets/img/image-20201211092807773.f2a789c5.png"},565:function(t,a,s){t.exports=s.p+"assets/img/image-20201211093243769.4fa82abd.png"},566:function(t,a,s){t.exports=s.p+"assets/img/image-20201211094639303.245d0fe1.png"},567:function(t,a,s){t.exports=s.p+"assets/img/image-20201211094435008.8c60c4ea.png"},568:function(t,a,s){t.exports=s.p+"assets/img/image-20201211094549389.ea8ca7d0.png"},569:function(t,a,s){t.exports=s.p+"assets/img/image-20201211095245097.4e386df5.png"},570:function(t,a,s){t.exports=s.p+"assets/img/image-20201211095401693.68963ced.png"},571:function(t,a,s){t.exports=s.p+"assets/img/image-20201211105534959.e786296f.png"},572:function(t,a,s){t.exports=s.p+"assets/img/image-20201211105719937.a3948f36.png"}}]);