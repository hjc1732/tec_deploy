(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{1441:function(e,r,t){"use strict";t.r(r);var a=t(7),s=Object(a.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"dledger集群搭建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dledger集群搭建"}},[e._v("#")]),e._v(" Dledger集群搭建")]),e._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),r("p",[e._v("该文档主要介绍如何部署自动容灾切换的 RocketMQ-on-DLedger Group。")]),e._v(" "),r("p",[e._v("RocketMQ-on-DLedger Group 是指一组"),r("strong",[e._v("相同名称")]),e._v("的 Broker，至少需要 3 个节点，通过 Raft 自动选举出一个 Leader，其余节点 作为 Follower，并在 Leader 和 Follower 之间复制数据以保证高可用。"),r("br"),e._v("\nRocketMQ-on-DLedger Group 能自动容灾切换，并保证数据一致。"),r("br"),e._v("\nRocketMQ-on-DLedger Group 是可以水平扩展的，也即可以部署任意多个 RocketMQ-on-DLedger Group 同时对外提供服务。")]),e._v(" "),r("h2",{attrs:{id:"_1-新集群部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-新集群部署"}},[e._v("#")]),e._v(" 1. 新集群部署")]),e._v(" "),r("h4",{attrs:{id:"_1-1-编写配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-编写配置"}},[e._v("#")]),e._v(" 1.1 编写配置")]),e._v(" "),r("p",[e._v("每个 RocketMQ-on-DLedger Group 至少准备三台机器（本文假设为 3）。"),r("br"),e._v("\n编写 3 个配置文件，建议参考 conf/dledger 目录下的配置文件样例。"),r("br"),e._v("\n关键配置介绍：")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("name")]),e._v(" "),r("th",[e._v("含义")]),e._v(" "),r("th",[e._v("举例")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("enableDLegerCommitLog")]),e._v(" "),r("td",[e._v("是否启动 DLedger")]),e._v(" "),r("td",[e._v("true")])]),e._v(" "),r("tr",[r("td",[e._v("dLegerGroup")]),e._v(" "),r("td",[e._v("DLedger Raft Group的名字，建议和 brokerName 保持一致")]),e._v(" "),r("td",[e._v("RaftNode00")])]),e._v(" "),r("tr",[r("td",[e._v("dLegerPeers")]),e._v(" "),r("td",[e._v("DLedger Group 内各节点的端口信息，同一个 Group 内的各个节点配置必须要保证一致")]),e._v(" "),r("td",[e._v("n0-127.0.0.1:40911;n1-127.0.0.1:40912;n2-127.0.0.1:40913")])]),e._v(" "),r("tr",[r("td",[e._v("dLegerSelfId")]),e._v(" "),r("td",[e._v("节点 id, 必须属于 dLegerPeers 中的一个；同 Group 内各个节点要唯一")]),e._v(" "),r("td",[e._v("n0")])]),e._v(" "),r("tr",[r("td",[e._v("sendMessageThreadPoolNums")]),e._v(" "),r("td",[e._v("发送线程个数，建议配置成 Cpu 核数")]),e._v(" "),r("td",[e._v("16")])])])]),e._v(" "),r("p",[e._v("这里贴出 conf/dledger/broker-n0.conf 的配置举例。")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("brokerClusterName = RaftCluster\nbrokerName=RaftNode00\nlistenPort=30911\nnamesrvAddr=127.0.0.1:9876\nstorePathRootDir=/tmp/rmqstore/node00\nstorePathCommitLog=/tmp/rmqstore/node00/commitlog\nenableDLegerCommitLog=true\ndLegerGroup=RaftNode00\ndLegerPeers=n0-127.0.0.1:40911;n1-127.0.0.1:40912;n2-127.0.0.1:40913\n## must be unique\ndLegerSelfId=n0\nsendMessageThreadPoolNums=16\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br")])]),r("h3",{attrs:{id:"_1-2-启动-broker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-启动-broker"}},[e._v("#")]),e._v(" 1.2 启动 Broker")]),e._v(" "),r("p",[e._v("与老版本的启动方式一致。")]),e._v(" "),r("p",[r("code",[e._v("nohup sh bin/mqbroker -c conf/dledger/xxx-n0.conf &")]),r("br"),e._v(" "),r("code",[e._v("nohup sh bin/mqbroker -c conf/dledger/xxx-n1.conf &")]),r("br"),e._v(" "),r("code",[e._v("nohup sh bin/mqbroker -c conf/dledger/xxx-n2.conf &")])]),e._v(" "),r("h2",{attrs:{id:"_2-旧集群升级"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-旧集群升级"}},[e._v("#")]),e._v(" 2. 旧集群升级")]),e._v(" "),r("p",[e._v("如果旧集群采用 Master 方式部署，则每个 Master 都需要转换成一个 RocketMQ-on-DLedger Group。"),r("br"),e._v("\n如果旧集群采用 Master-Slave 方式部署，则每个 Master-Slave 组都需要转换成一个 RocketMQ-on-DLedger Group。")]),e._v(" "),r("h3",{attrs:{id:"_2-1-杀掉旧的-broker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-杀掉旧的-broker"}},[e._v("#")]),e._v(" 2.1 杀掉旧的 Broker")]),e._v(" "),r("p",[e._v("可以通过 kill 命令来完成，也可以调用 "),r("code",[e._v("bin/mqshutdown broker")]),e._v("。")]),e._v(" "),r("h3",{attrs:{id:"_2-2-检查旧的-commitlog"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-检查旧的-commitlog"}},[e._v("#")]),e._v(" 2.2 检查旧的 Commitlog")]),e._v(" "),r("p",[e._v("RocketMQ-on-DLedger 组中的每个节点，可以兼容旧的 Commitlog ，但其 Raft 复制过程，只能针对新增加的消息。因此，为了避免出现异常，需要保证 旧的 Commitlog 是一致的。"),r("br"),e._v("\n如果旧的集群是采用 Master-Slave 方式部署，有可能在shutdown时，其数据并不是一致的，建议通过md5sum 的方式，检查最近的最少 2 个 Commmitlog 文件，如果发现不一致，则通过拷贝的方式进行对齐。")]),e._v(" "),r("p",[e._v("虽然 RocketMQ-on-DLedger Group 也可以以 2 节点方式部署，但其会丧失容灾切换能力（2n + 1 原则，至少需要3个节点才能容忍其中 1 个宕机）。"),r("br"),e._v("\n所以在对齐了 Master 和 Slave 的 Commitlog 之后，还需要准备第 3 台机器，并把旧的 Commitlog 从 Master 拷贝到 第 3 台机器（记得同时拷贝一下 config 文件夹）。")]),e._v(" "),r("p",[e._v("在 3 台机器准备好了之后，旧 Commitlog 文件也保证一致之后，就可以开始走下一步修改配置了。")]),e._v(" "),r("h3",{attrs:{id:"_2-3-修改配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-修改配置"}},[e._v("#")]),e._v(" 2.3 修改配置")]),e._v(" "),r("p",[e._v("参考新集群部署。")]),e._v(" "),r("h3",{attrs:{id:"_2-4-重新启动-broker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-重新启动-broker"}},[e._v("#")]),e._v(" 2.4 重新启动 Broker")]),e._v(" "),r("p",[e._v("参考新集群部署。")])])}),[],!1,null,null,null);r.default=s.exports}}]);