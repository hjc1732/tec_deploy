(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{1436:function(e,t,r){"use strict";r.r(t);var s=r(7),a=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"dledger快速搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dledger快速搭建"}},[e._v("#")]),e._v(" Dledger快速搭建")]),e._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),t("p",[e._v("该文档主要介绍如何快速构建和部署基于 DLedger 的可以自动容灾切换的 RocketMQ 集群。")]),e._v(" "),t("p",[e._v("详细的新集群部署和旧集群升级指南请参考 "),t("RouterLink",{attrs:{to:"/中间件/rocketMq/mq/dledger/deploy_guide.html"}},[e._v("部署指南")]),e._v("。")],1),e._v(" "),t("h2",{attrs:{id:"_1-源码构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-源码构建"}},[e._v("#")]),e._v(" 1. 源码构建")]),e._v(" "),t("p",[e._v("构建分为两个部分，需要先构建 DLedger，然后 构建 RocketMQ")]),e._v(" "),t("h3",{attrs:{id:"_1-1-构建-dledger"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-构建-dledger"}},[e._v("#")]),e._v(" 1.1 构建 DLedger")]),e._v(" "),t("p",[t("code",[e._v("git clone https://github.com/openmessaging/openmessaging-storage-dledger.git")])]),e._v(" "),t("p",[t("code",[e._v("cd openmessaging-storage-dledger")])]),e._v(" "),t("p",[t("code",[e._v("mvn clean install -DskipTests")])]),e._v(" "),t("h3",{attrs:{id:"_1-2-构建-rocketmq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-构建-rocketmq"}},[e._v("#")]),e._v(" 1.2 构建 RocketMQ")]),e._v(" "),t("p",[t("code",[e._v("git clone https://github.com/apache/rocketmq.git")])]),e._v(" "),t("p",[t("code",[e._v("cd rocketmq")])]),e._v(" "),t("p",[t("code",[e._v("git checkout -b store_with_dledger origin/store_with_dledger")])]),e._v(" "),t("p",[t("code",[e._v("mvn -Prelease-all -DskipTests clean install -U")])]),e._v(" "),t("h2",{attrs:{id:"_2-快速部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-快速部署"}},[e._v("#")]),e._v(" 2. 快速部署")]),e._v(" "),t("p",[e._v("在构建成功后")]),e._v(" "),t("p",[t("code",[e._v("cd distribution/target/apache-rocketmq")])]),e._v(" "),t("p",[t("code",[e._v("sh bin/dledger/fast-try.sh start")])]),e._v(" "),t("p",[e._v("如果上面的步骤执行成功，可以通过 mqadmin 运维命令查看集群状态。")]),e._v(" "),t("p",[t("code",[e._v("sh bin/mqadmin clusterList -n 127.0.0.1:9876")])]),e._v(" "),t("p",[e._v("顺利的话，会看到如下内容：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://img.alicdn.com/5476e8b07b923/TB11Z.ZyCzqK1RjSZFLXXcn2XXa",alt:"ClusterList"}})]),e._v(" "),t("p",[e._v("（BID 为 0 的表示 Master，其余都是 Follower）")]),e._v(" "),t("p",[e._v("启动成功，现在可以向集群收发消息，并进行容灾切换测试了。")]),e._v(" "),t("p",[e._v("关闭快速集群，可以执行：")]),e._v(" "),t("p",[t("code",[e._v("sh bin/dledger/fast-try.sh stop")])]),e._v(" "),t("p",[e._v("快速部署，默认配置在 conf/dledger 里面，默认的存储路径在 /tmp/rmqstore。")]),e._v(" "),t("h2",{attrs:{id:"_3-容灾切换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-容灾切换"}},[e._v("#")]),e._v(" 3. 容灾切换")]),e._v(" "),t("p",[e._v("部署成功，杀掉 Leader 之后（在上面的例子中，杀掉端口 30931 所在的进程），等待约 10s 左右，用 clusterList 命令查看集群，就会发现 Leader 切换到另一个节点了。")])])}),[],!1,null,null,null);t.default=a.exports}}]);