(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{1434:function(t,s,a){"use strict";a.r(s);var e=a(7),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[t._v("#")]),t._v(" 最佳实践")]),t._v(" "),s("h2",{attrs:{id:"_1-生产者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-生产者"}},[t._v("#")]),t._v(" 1   生产者")]),t._v(" "),s("h3",{attrs:{id:"_1-1-发送消息注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-发送消息注意事项"}},[t._v("#")]),t._v(" 1.1 发送消息注意事项")]),t._v(" "),s("h4",{attrs:{id:"_1-tags的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-tags的使用"}},[t._v("#")]),t._v(" 1  Tags的使用")]),t._v(" "),s("p",[t._v('一个应用尽可能用一个Topic，而消息子类型则可以用tags来标识。tags可以由应用自由设置，只有生产者在发送消息设置了tags，消费方在订阅消息时才可以利用tags通过broker做消息过滤：message.setTags("TagA")。')]),t._v(" "),s("h4",{attrs:{id:"_2-keys的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-keys的使用"}},[t._v("#")]),t._v(" 2 Keys的使用")]),t._v(" "),s("p",[t._v("每个消息在业务层面的唯一标识码要设置到keys字段，方便将来定位消息丢失问题。服务器会为每个消息创建索引（哈希索引），应用可以通过topic、key来查询这条消息内容，以及消息被谁消费。由于是哈希索引，请务必保证key尽可能唯一，这样可以避免潜在的哈希冲突。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 订单Id   ")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" orderId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20034568923546"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n   message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setKeys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("orderId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h4",{attrs:{id:"_3-日志的打印"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-日志的打印"}},[t._v("#")]),t._v(" 3 日志的打印")]),t._v(" "),s("p",[t._v("​消息发送成功或者失败要打印消息日志，务必要打印SendResult和key字段。send消息方法只要不抛异常，就代表发送成功。发送成功会有多个状态，在sendResult里定义。以下对每个状态进行说明：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("SEND_OK")])])]),t._v(" "),s("p",[t._v("消息发送成功。要注意的是消息发送成功也不意味着它是可靠的。要确保不会丢失任何消息，还应启用同步Master服务器或同步刷盘，即SYNC_MASTER或SYNC_FLUSH。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("FLUSH_DISK_TIMEOUT")])])]),t._v(" "),s("p",[t._v("消息发送成功但是服务器刷盘超时。此时消息已经进入服务器队列（内存），只有服务器宕机，消息才会丢失。消息存储配置参数中可以设置刷盘方式和同步刷盘时间长度，如果Broker服务器设置了刷盘方式为同步刷盘，即FlushDiskType=SYNC_FLUSH（默认为异步刷盘方式），当Broker服务器未在同步刷盘时间内（默认为5s）完成刷盘，则将返回该状态——刷盘超时。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("FLUSH_SLAVE_TIMEOUT")])])]),t._v(" "),s("p",[t._v("消息发送成功，但是服务器同步到Slave时超时。此时消息已经进入服务器队列，只有服务器宕机，消息才会丢失。如果Broker服务器的角色是同步Master，即SYNC_MASTER（默认是异步Master即ASYNC_MASTER），并且从Broker服务器未在同步刷盘时间（默认为5秒）内完成与主服务器的同步，则将返回该状态——数据同步到Slave服务器超时。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("SLAVE_NOT_AVAILABLE")])])]),t._v(" "),s("p",[t._v("消息发送成功，但是此时Slave不可用。如果Broker服务器的角色是同步Master，即SYNC_MASTER（默认是异步Master服务器即ASYNC_MASTER），但没有配置slave Broker服务器，则将返回该状态——无Slave服务器可用。")]),t._v(" "),s("h3",{attrs:{id:"_1-2-消息发送失败处理方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-消息发送失败处理方式"}},[t._v("#")]),t._v(" 1.2 消息发送失败处理方式")]),t._v(" "),s("p",[t._v("Producer的send方法本身支持内部重试，重试逻辑如下：")]),t._v(" "),s("ul",[s("li",[t._v("至多重试2次（同步发送为2次，异步发送为0次）。")]),t._v(" "),s("li",[t._v("如果发送失败，则轮转到下一个Broker。这个方法的总耗时时间不超过sendMsgTimeout设置的值，默认10s。")]),t._v(" "),s("li",[t._v("如果本身向broker发送消息产生超时异常，就不会再重试。")])]),t._v(" "),s("p",[t._v("以上策略也是在一定程度上保证了消息可以发送成功。如果业务对消息可靠性要求比较高，建议应用增加相应的重试逻辑：比如调用send同步方法发送失败时，则尝试将消息存储到db，然后由后台线程定时重试，确保消息一定到达Broker。")]),t._v(" "),s("p",[t._v("上述db重试方式为什么没有集成到MQ客户端内部做，而是要求应用自己去完成，主要基于以下几点考虑：首先，MQ的客户端设计为无状态模式，方便任意的水平扩展，且对机器资源的消耗仅仅是cpu、内存、网络。其次，如果MQ客户端内部集成一个KV存储模块，那么数据只有同步落盘才能较可靠，而同步落盘本身性能开销较大，所以通常会采用异步落盘，又由于应用关闭过程不受MQ运维人员控制，可能经常会发生 kill -9 这样暴力方式关闭，造成数据没有及时落盘而丢失。第三，Producer所在机器的可靠性较低，一般为虚拟机，不适合存储重要数据。综上，建议重试过程交由应用来控制。")]),t._v(" "),s("h3",{attrs:{id:"_1-3选择oneway形式发送"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3选择oneway形式发送"}},[t._v("#")]),t._v(" 1.3选择oneway形式发送")]),t._v(" "),s("p",[t._v("通常消息的发送是这样一个过程：")]),t._v(" "),s("ul",[s("li",[t._v("客户端发送请求到服务器")]),t._v(" "),s("li",[t._v("服务器处理请求")]),t._v(" "),s("li",[t._v("服务器向客户端返回应答")])]),t._v(" "),s("p",[t._v("所以，一次消息发送的耗时时间是上述三个步骤的总和，而某些场景要求耗时非常短，但是对可靠性要求并不高，例如日志收集类应用，此类应用可以采用oneway形式调用，oneway形式只发送请求不等待应答，而发送请求在客户端实现层面仅仅是一个操作系统系统调用的开销，即将数据写入客户端的socket缓冲区，此过程耗时通常在微秒级。")]),t._v(" "),s("h2",{attrs:{id:"_2-消费者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-消费者"}},[t._v("#")]),t._v(" 2   消费者")]),t._v(" "),s("h3",{attrs:{id:"_2-1-消费过程幂等"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-消费过程幂等"}},[t._v("#")]),t._v(" 2.1 消费过程幂等")]),t._v(" "),s("p",[t._v("RocketMQ无法避免消息重复（Exactly-Once），所以如果业务对消费重复非常敏感，务必要在业务层面进行去重处理。可以借助关系数据库进行去重。首先需要确定消息的唯一键，可以是msgId，也可以是消息内容中的唯一标识字段，例如订单Id等。在消费之前判断唯一键是否在关系数据库中存在。如果不存在则插入，并消费，否则跳过。（实际过程要考虑原子性问题，判断是否存在可以尝试插入，如果报主键冲突，则插入失败，直接跳过）")]),t._v(" "),s("p",[t._v("msgId一定是全局唯一标识符，但是实际使用中，可能会存在相同的消息有两个不同msgId的情况（消费者主动重发、因客户端重投机制导致的重复等），这种情况就需要使业务字段进行重复消费。")]),t._v(" "),s("h3",{attrs:{id:"_2-2-消费速度慢的处理方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-消费速度慢的处理方式"}},[t._v("#")]),t._v(" 2.2 消费速度慢的处理方式")]),t._v(" "),s("h4",{attrs:{id:"_1-提高消费并行度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-提高消费并行度"}},[t._v("#")]),t._v(" 1 提高消费并行度")]),t._v(" "),s("p",[t._v("绝大部分消息消费行为都属于 IO 密集型，即可能是操作数据库，或者调用 RPC，这类消费行为的消费速度在于后端数据库或者外系统的吞吐量，通过增加消费并行度，可以提高总的消费吞吐量，但是并行度增加到一定程度，反而会下降。所以，应用必须要设置合理的并行度。 如下有几种修改消费并行度的方法：")]),t._v(" "),s("ul",[s("li",[t._v("同一个 ConsumerGroup 下，通过增加 Consumer 实例数量来提高并行度（需要注意的是超过订阅队列数的 Consumer 实例无效）。可以通过加机器，或者在已有机器启动多个进程的方式。")]),t._v(" "),s("li",[t._v("提高单个 Consumer 的消费并行线程，通过修改参数 consumeThreadMin、consumeThreadMax实现。")])]),t._v(" "),s("h4",{attrs:{id:"_2-批量方式消费"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-批量方式消费"}},[t._v("#")]),t._v(" 2   批量方式消费")]),t._v(" "),s("p",[t._v("某些业务流程如果支持批量方式消费，则可以很大程度上提高消费吞吐量，例如订单扣款类应用，一次处理一个订单耗时 1 s，一次处理 10 个订单可能也只耗时 2 s，这样即可大幅度提高消费的吞吐量，通过设置 consumer的 consumeMessageBatchMaxSize 返个参数，默认是 1，即一次只消费一条消息，例如设置为 N，那么每次消费的消息数小于等于 N。")]),t._v(" "),s("h4",{attrs:{id:"_3-跳过非重要消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-跳过非重要消息"}},[t._v("#")]),t._v(" 3   跳过非重要消息")]),t._v(" "),s("p",[t._v("发生消息堆积时，如果消费速度一直追不上发送速度，如果业务对数据要求不高的话，可以选择丢弃不重要的消息。例如，当某个队列的消息数堆积到100000条以上，则尝试丢弃部分或全部消息，这样就可以快速追上发送消息的速度。示例代码如下：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConsumeConcurrentlyStatus")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("consumeMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageExt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" msgs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConsumeConcurrentlyContext")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" offset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" msgs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getQueueOffset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" maxOffset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n                msgs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PROPERTY_MAX_OFFSET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" diff "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseLong")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("diff "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO 消息堆积情况的特殊处理")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConsumeConcurrentlyStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CONSUME_SUCCESS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO 正常消费过程")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConsumeConcurrentlyStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CONSUME_SUCCESS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("h4",{attrs:{id:"_4-优化每条消息消费过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-优化每条消息消费过程"}},[t._v("#")]),t._v(" 4 优化每条消息消费过程")]),t._v(" "),s("p",[t._v("举例如下，某条消息的消费过程如下：")]),t._v(" "),s("ul",[s("li",[t._v("根据消息从 DB 查询【数据 1】")]),t._v(" "),s("li",[t._v("根据消息从 DB 查询【数据 2】")]),t._v(" "),s("li",[t._v("复杂的业务计算")]),t._v(" "),s("li",[t._v("向 DB 插入【数据 3】")]),t._v(" "),s("li",[t._v("向 DB 插入【数据 4】")])]),t._v(" "),s("p",[t._v("这条消息的消费过程中有4次与 DB的 交互，如果按照每次 5ms 计算，那么总共耗时 20ms，假设业务计算耗时 5ms，那么总过耗时 25ms，所以如果能把 4 次 DB 交互优化为 2 次，那么总耗时就可以优化到 15ms，即总体性能提高了 40%。所以应用如果对时延敏感的话，可以把DB部署在SSD硬盘，相比于SCSI磁盘，前者的RT会小很多。")]),t._v(" "),s("h3",{attrs:{id:"_2-3-消费打印日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-消费打印日志"}},[t._v("#")]),t._v(" 2.3 消费打印日志")]),t._v(" "),s("p",[t._v("如果消息量较少，建议在消费入口方法打印消息，消费耗时等，方便后续排查问题。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConsumeConcurrentlyStatus")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("consumeMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageExt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" msgs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConsumeConcurrentlyContext")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RECEIVE_MSG_BEGIN: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" msgs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO 正常消费过程")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConsumeConcurrentlyStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CONSUME_SUCCESS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("如果能打印每条消息消费耗时，那么在排查消费慢等线上问题时，会更方便。")]),t._v(" "),s("h3",{attrs:{id:"_2-4-其他消费建议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-其他消费建议"}},[t._v("#")]),t._v(" 2.4 其他消费建议")]),t._v(" "),s("h4",{attrs:{id:"_1-关于消费者和订阅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-关于消费者和订阅"}},[t._v("#")]),t._v(" 1 关于消费者和订阅")]),t._v(" "),s("p",[t._v("​第一件需要注意的事情是，不同的消费者组可以独立的消费一些 topic，并且每个消费者组都有自己的消费偏移量，请确保同一组内的每个消费者订阅信息保持一致。")]),t._v(" "),s("h4",{attrs:{id:"_2-关于有序消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-关于有序消息"}},[t._v("#")]),t._v(" 2 关于有序消息")]),t._v(" "),s("p",[t._v("消费者将锁定每个消息队列，以确保他们被逐个消费，虽然这将会导致性能下降，但是当你关心消息顺序的时候会很有用。我们不建议抛出异常，你可以返回 ConsumeOrderlyStatus.SUSPEND_CURRENT_QUEUE_A_MOMENT 作为替代。")]),t._v(" "),s("h4",{attrs:{id:"_3-关于并发消费"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-关于并发消费"}},[t._v("#")]),t._v(" 3 关于并发消费")]),t._v(" "),s("p",[t._v("顾名思义，消费者将并发消费这些消息，建议你使用它来获得良好性能，我们不建议抛出异常，你可以返回 ConsumeConcurrentlyStatus.RECONSUME_LATER 作为替代。")]),t._v(" "),s("h4",{attrs:{id:"_4-关于消费状态consume-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-关于消费状态consume-status"}},[t._v("#")]),t._v(" 4 关于消费状态Consume Status")]),t._v(" "),s("p",[t._v("对于并发的消费监听器，你可以返回 RECONSUME_LATER 来通知消费者现在不能消费这条消息，并且希望可以稍后重新消费它。然后，你可以继续消费其他消息。对于有序的消息监听器，因为你关心它的顺序，所以不能跳过消息，但是你可以返回SUSPEND_CURRENT_QUEUE_A_MOMENT 告诉消费者等待片刻。")]),t._v(" "),s("h4",{attrs:{id:"_5-关于blocking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-关于blocking"}},[t._v("#")]),t._v(" 5 关于Blocking")]),t._v(" "),s("p",[t._v("不建议阻塞监听器，因为它会阻塞线程池，并最终可能会终止消费进程")]),t._v(" "),s("h4",{attrs:{id:"_6-关于线程数设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-关于线程数设置"}},[t._v("#")]),t._v(" 6 关于线程数设置")]),t._v(" "),s("p",[t._v("消费者使用 ThreadPoolExecutor 在内部对消息进行消费，所以你可以通过设置 setConsumeThreadMin 或 setConsumeThreadMax 来改变它。")]),t._v(" "),s("h4",{attrs:{id:"_7-关于消费位点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-关于消费位点"}},[t._v("#")]),t._v(" 7 关于消费位点")]),t._v(" "),s("p",[t._v("当建立一个新的消费者组时，需要决定是否需要消费已经存在于 Broker 中的历史消息CONSUME_FROM_LAST_OFFSET 将会忽略历史消息，并消费之后生成的任何消息。CONSUME_FROM_FIRST_OFFSET 将会消费每个存在于 Broker 中的信息。你也可以使用 CONSUME_FROM_TIMESTAMP 来消费在指定时间戳后产生的消息。")]),t._v(" "),s("h2",{attrs:{id:"_3-broker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-broker"}},[t._v("#")]),t._v(" 3   Broker")]),t._v(" "),s("h3",{attrs:{id:"_3-1-broker-角色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-broker-角色"}},[t._v("#")]),t._v(" 3.1 Broker 角色")]),t._v(" "),s("p",[t._v("​  Broker 角色分为 ASYNC_MASTER（异步主机）、SYNC_MASTER（同步主机）以及SLAVE（从机）。如果对消息的可靠性要求比较严格，可以采用 SYNC_MASTER加SLAVE的部署方式。如果对消息可靠性要求不高，可以采用ASYNC_MASTER加SLAVE的部署方式。如果只是测试方便，则可以选择仅ASYNC_MASTER或仅SYNC_MASTER的部署方式。")]),t._v(" "),s("h3",{attrs:{id:"_3-2-flushdisktype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-flushdisktype"}},[t._v("#")]),t._v(" 3.2 FlushDiskType")]),t._v(" "),s("p",[t._v("​ SYNC_FLUSH（同步刷新）相比于ASYNC_FLUSH（异步处理）会损失很多性能，但是也更可靠，所以需要根据实际的业务场景做好权衡。")]),t._v(" "),s("h3",{attrs:{id:"_3-3-broker-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-broker-配置"}},[t._v("#")]),t._v(" 3.3 Broker 配置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("listenPort")]),t._v(" "),s("td",[t._v("10911")]),t._v(" "),s("td",[t._v("接受客户端连接的监听端口")])]),t._v(" "),s("tr",[s("td",[t._v("namesrvAddr")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("nameServer 地址")])]),t._v(" "),s("tr",[s("td",[t._v("brokerIP1")]),t._v(" "),s("td",[t._v("网卡的 InetAddress")]),t._v(" "),s("td",[t._v("当前 broker 监听的 IP")])]),t._v(" "),s("tr",[s("td",[t._v("brokerIP2")]),t._v(" "),s("td",[t._v("跟 brokerIP1 一样")]),t._v(" "),s("td",[t._v("存在主从 broker 时，如果在 broker 主节点上配置了 brokerIP2 属性，broker 从节点会连接主节点配置的 brokerIP2 进行同步")])]),t._v(" "),s("tr",[s("td",[t._v("brokerName")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("broker 的名称")])]),t._v(" "),s("tr",[s("td",[t._v("brokerClusterName")]),t._v(" "),s("td",[t._v("DefaultCluster")]),t._v(" "),s("td",[t._v("本 broker 所属的 Cluser 名称")])]),t._v(" "),s("tr",[s("td",[t._v("brokerId")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("broker id, 0 表示 master, 其他的正整数表示 slave")])]),t._v(" "),s("tr",[s("td",[t._v("storePathCommitLog")]),t._v(" "),s("td",[t._v("$HOME/store/commitlog/")]),t._v(" "),s("td",[t._v("存储 commit log 的路径")])]),t._v(" "),s("tr",[s("td",[t._v("storePathConsumerQueue")]),t._v(" "),s("td",[t._v("$HOME/store/consumequeue/")]),t._v(" "),s("td",[t._v("存储 consume queue 的路径")])]),t._v(" "),s("tr",[s("td",[t._v("mappedFileSizeCommitLog")]),t._v(" "),s("td",[t._v("1024 * 1024 * 1024(1G)")]),t._v(" "),s("td",[t._v("commit log 的映射文件大小")])]),t._v(" "),s("tr",[s("td",[t._v("deleteWhen")]),t._v(" "),s("td",[t._v("04")]),t._v(" "),s("td",[t._v("在每天的什么时间删除已经超过文件保留时间的 commit log")])]),t._v(" "),s("tr",[s("td",[t._v("fileReservedTime")]),t._v(" "),s("td",[t._v("72")]),t._v(" "),s("td",[t._v("以小时计算的文件保留时间")])]),t._v(" "),s("tr",[s("td",[t._v("brokerRole")]),t._v(" "),s("td",[t._v("ASYNC_MASTER")]),t._v(" "),s("td",[t._v("SYNC_MASTER/ASYNC_MASTER/SLAVE")])]),t._v(" "),s("tr",[s("td",[t._v("flushDiskType")]),t._v(" "),s("td",[t._v("ASYNC_FLUSH")]),t._v(" "),s("td",[t._v("SYNC_FLUSH/ASYNC_FLUSH SYNC_FLUSH 模式下的 broker 保证在收到确认生产者之前将消息刷盘。ASYNC_FLUSH 模式下的 broker 则利用刷盘一组消息的模式，可以取得更好的性能。")])])])]),t._v(" "),s("h2",{attrs:{id:"_4-nameserver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-nameserver"}},[t._v("#")]),t._v(" 4  NameServer")]),t._v(" "),s("p",[t._v("​RocketMQ 中，Name Servers 被设计用来做简单的路由管理。其职责包括：")]),t._v(" "),s("ul",[s("li",[t._v("Brokers 定期向每个名称服务器注册路由数据。")]),t._v(" "),s("li",[t._v("名称服务器为客户端，包括生产者，消费者和命令行客户端提供最新的路由信息。\n​"),s("br"),t._v("\n​")])]),t._v(" "),s("h2",{attrs:{id:"_5-客户端配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-客户端配置"}},[t._v("#")]),t._v(" 5 客户端配置")]),t._v(" "),s("p",[t._v("​ 相对于RocketMQ的Broker集群，生产者和消费者都是客户端。本小节主要描述生产者和消费者公共的行为配置。")]),t._v(" "),s("h3",{attrs:{id:"_5-1-客户端寻址方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-客户端寻址方式"}},[t._v("#")]),t._v(" 5.1 客户端寻址方式")]),t._v(" "),s("p",[t._v("RocketMQ可以令客户端找到Name Server, 然后通过Name Server再找到Broker。如下所示有多种配置方式，优先级由高到低，高优先级会覆盖低优先级。")]),t._v(" "),s("ul",[s("li",[t._v("代码中指定Name Server地址，多个namesrv地址之间用分号分割")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("producer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setNamesrvAddr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.1:9876;192.168.0.2:9876"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\nconsumer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setNamesrvAddr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.1:9876;192.168.0.2:9876"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ul",[s("li",[t._v("Java启动参数中指定Name Server地址")])]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-Drocketmq.namesrv.addr=192.168.0.1:9876;192.168.0.2:9876  \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("环境变量指定Name Server地址")])]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export   NAMESRV_ADDR=192.168.0.1:9876;192.168.0.2:9876   \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("HTTP静态服务器寻址（默认）")])]),t._v(" "),s("p",[t._v("客户端启动后，会定时访问一个静态HTTP服务器，地址如下："),s("a",{attrs:{href:"http://jmenv.tbsite.net:8080/rocketmq/nsaddr",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://jmenv.tbsite.net:8080/rocketmq/nsaddr"),s("OutboundLink")],1),t._v("，这个URL的返回内容如下：")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("192.168.0.1:9876;192.168.0.2:9876   \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("客户端默认每隔2分钟访问一次这个HTTP服务器，并更新本地的Name Server地址。URL已经在代码中硬编码，可通过修改/etc/hosts文件来改变要访问的服务器，例如在/etc/hosts增加如下配置：")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("10.232.22.67    jmenv.taobao.net   \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("推荐使用HTTP静态服务器寻址方式，好处是客户端部署简单，且Name Server集群可以热升级。")]),t._v(" "),s("h3",{attrs:{id:"_5-2-客户端配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-客户端配置"}},[t._v("#")]),t._v(" 5.2 客户端配置")]),t._v(" "),s("p",[t._v('DefaultMQProducer、TransactionMQProducer、DefaultMQPushConsumer、DefaultMQPullConsumer都继承于ClientConfig类，ClientConfig为客户端的公共配置类。客户端的配置都是get、set形式，每个参数都可以用spring来配置，也可以在代码中配置，例如namesrvAddr这个参数可以这样配置，producer.setNamesrvAddr("192.168.0.1:9876")，其他参数同理。')]),t._v(" "),s("h4",{attrs:{id:"_1-客户端的公共配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-客户端的公共配置"}},[t._v("#")]),t._v(" 1  客户端的公共配置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("namesrvAddr")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Name Server地址列表，多个NameServer地址用分号隔开")])]),t._v(" "),s("tr",[s("td",[t._v("clientIP")]),t._v(" "),s("td",[t._v("本机IP")]),t._v(" "),s("td",[t._v("客户端本机IP地址，某些机器会发生无法识别客户端IP地址情况，需要应用在代码中强制指定")])]),t._v(" "),s("tr",[s("td",[t._v("instanceName")]),t._v(" "),s("td",[t._v("DEFAULT")]),t._v(" "),s("td",[t._v("客户端实例名称，客户端创建的多个Producer、Consumer实际是共用一个内部实例（这个实例包含网络连接、线程资源等）")])]),t._v(" "),s("tr",[s("td",[t._v("clientCallbackExecutorThreads")]),t._v(" "),s("td",[t._v("4")]),t._v(" "),s("td",[t._v("通信层异步回调线程数")])]),t._v(" "),s("tr",[s("td",[t._v("pollNameServerInteval")]),t._v(" "),s("td",[t._v("30000")]),t._v(" "),s("td",[t._v("轮询Name Server间隔时间，单位毫秒")])]),t._v(" "),s("tr",[s("td",[t._v("heartbeatBrokerInterval")]),t._v(" "),s("td",[t._v("30000")]),t._v(" "),s("td",[t._v("向Broker发送心跳间隔时间，单位毫秒")])]),t._v(" "),s("tr",[s("td",[t._v("persistConsumerOffsetInterval")]),t._v(" "),s("td",[t._v("5000")]),t._v(" "),s("td",[t._v("持久化Consumer消费进度间隔时间，单位毫秒")])])])]),t._v(" "),s("h4",{attrs:{id:"_2-producer配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-producer配置"}},[t._v("#")]),t._v(" 2  Producer配置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("producerGroup")]),t._v(" "),s("td",[t._v("DEFAULT_PRODUCER")]),t._v(" "),s("td",[t._v("Producer组名，多个Producer如果属于一个应用，发送同样的消息，则应该将它们归为同一组")])]),t._v(" "),s("tr",[s("td",[t._v("createTopicKey")]),t._v(" "),s("td",[t._v("TBW102")]),t._v(" "),s("td",[t._v("在发送消息时，自动创建服务器不存在的topic，需要指定Key，该Key可用于配置发送消息所在topic的默认路由。")])]),t._v(" "),s("tr",[s("td",[t._v("defaultTopicQueueNums")]),t._v(" "),s("td",[t._v("4")]),t._v(" "),s("td",[t._v("在发送消息，自动创建服务器不存在的topic时，默认创建的队列数")])]),t._v(" "),s("tr",[s("td",[t._v("sendMsgTimeout")]),t._v(" "),s("td",[t._v("10000")]),t._v(" "),s("td",[t._v("发送消息超时时间，单位毫秒")])]),t._v(" "),s("tr",[s("td",[t._v("compressMsgBodyOverHowmuch")]),t._v(" "),s("td",[t._v("4096")]),t._v(" "),s("td",[t._v("消息Body超过多大开始压缩（Consumer收到消息会自动解压缩），单位字节")])]),t._v(" "),s("tr",[s("td",[t._v("retryAnotherBrokerWhenNotStoreOK")]),t._v(" "),s("td",[t._v("FALSE")]),t._v(" "),s("td",[t._v("如果发送消息返回sendResult，但是sendStatus!=SEND_OK，是否重试发送")])]),t._v(" "),s("tr",[s("td",[t._v("retryTimesWhenSendFailed")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("如果消息发送失败，最大重试次数，该参数只对同步发送模式起作用")])]),t._v(" "),s("tr",[s("td",[t._v("maxMessageSize")]),t._v(" "),s("td",[t._v("4MB")]),t._v(" "),s("td",[t._v("客户端限制的消息大小，超过报错，同时服务端也会限制，所以需要跟服务端配合使用。")])]),t._v(" "),s("tr",[s("td",[t._v("transactionCheckListener")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("事务消息回查监听器，如果发送事务消息，必须设置")])]),t._v(" "),s("tr",[s("td",[t._v("checkThreadPoolMinSize")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("Broker回查Producer事务状态时，线程池最小线程数")])]),t._v(" "),s("tr",[s("td",[t._v("checkThreadPoolMaxSize")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("Broker回查Producer事务状态时，线程池最大线程数")])]),t._v(" "),s("tr",[s("td",[t._v("checkRequestHoldMax")]),t._v(" "),s("td",[t._v("2000")]),t._v(" "),s("td",[t._v("Broker回查Producer事务状态时，Producer本地缓冲请求队列大小")])]),t._v(" "),s("tr",[s("td",[t._v("RPCHook")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("该参数是在Producer创建时传入的，包含消息发送前的预处理和消息响应后的处理两个接口，用户可以在第一个接口中做一些安全控制或者其他操作。")])])])]),t._v(" "),s("h4",{attrs:{id:"_3-pushconsumer配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-pushconsumer配置"}},[t._v("#")]),t._v(" 3  PushConsumer配置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("consumerGroup")]),t._v(" "),s("td",[t._v("DEFAULT_CONSUMER")]),t._v(" "),s("td",[t._v("Consumer组名，多个Consumer如果属于一个应用，订阅同样的消息，且消费逻辑一致，则应该将它们归为同一组")])]),t._v(" "),s("tr",[s("td",[t._v("messageModel")]),t._v(" "),s("td",[t._v("CLUSTERING")]),t._v(" "),s("td",[t._v("消费模型支持集群消费和广播消费两种")])]),t._v(" "),s("tr",[s("td",[t._v("consumeFromWhere")]),t._v(" "),s("td",[t._v("CONSUME_FROM_LAST_OFFSET")]),t._v(" "),s("td",[t._v("Consumer启动后，默认从上次消费的位置开始消费，这包含两种情况：一种是上次消费的位置未过期，则消费从上次中止的位置进行；一种是上次消费位置已经过期，则从当前队列第一条消息开始消费")])]),t._v(" "),s("tr",[s("td",[t._v("consumeTimestamp")]),t._v(" "),s("td",[t._v("半个小时前")]),t._v(" "),s("td",[t._v("只有当consumeFromWhere值为CONSUME_FROM_TIMESTAMP时才起作用。")])]),t._v(" "),s("tr",[s("td",[t._v("allocateMessageQueueStrategy")]),t._v(" "),s("td",[t._v("AllocateMessageQueueAveragely")]),t._v(" "),s("td",[t._v("Rebalance算法实现策略")])]),t._v(" "),s("tr",[s("td",[t._v("subscription")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("订阅关系")])]),t._v(" "),s("tr",[s("td",[t._v("messageListener")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("消息监听器")])]),t._v(" "),s("tr",[s("td",[t._v("offsetStore")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("消费进度存储")])]),t._v(" "),s("tr",[s("td",[t._v("consumeThreadMin")]),t._v(" "),s("td",[t._v("10")]),t._v(" "),s("td",[t._v("消费线程池最小线程数")])]),t._v(" "),s("tr",[s("td",[t._v("consumeThreadMax")]),t._v(" "),s("td",[t._v("20")]),t._v(" "),s("td",[t._v("消费线程池最大线程数")])]),t._v(" "),s("tr",[s("td",[t._v("consumeConcurrentlyMaxSpan")]),t._v(" "),s("td",[t._v("2000")]),t._v(" "),s("td",[t._v("单队列并行消费允许的最大跨度")])]),t._v(" "),s("tr",[s("td",[t._v("pullThresholdForQueue")]),t._v(" "),s("td",[t._v("1000")]),t._v(" "),s("td",[t._v("拉消息本地队列缓存消息最大数")])]),t._v(" "),s("tr",[s("td",[t._v("pullInterval")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("拉消息间隔，由于是长轮询，所以为0，但是如果应用为了流控，也可以设置大于0的值，单位毫秒")])]),t._v(" "),s("tr",[s("td",[t._v("consumeMessageBatchMaxSize")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("批量消费，一次消费多少条消息")])]),t._v(" "),s("tr",[s("td",[t._v("pullBatchSize")]),t._v(" "),s("td",[t._v("32")]),t._v(" "),s("td",[t._v("批量拉消息，一次最多拉多少条")])])])]),t._v(" "),s("h4",{attrs:{id:"_4-pullconsumer配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-pullconsumer配置"}},[t._v("#")]),t._v(" 4  PullConsumer配置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("consumerGroup")]),t._v(" "),s("td",[t._v("DEFAULT_CONSUMER")]),t._v(" "),s("td",[t._v("Consumer组名，多个Consumer如果属于一个应用，订阅同样的消息，且消费逻辑一致，则应该将它们归为同一组")])]),t._v(" "),s("tr",[s("td",[t._v("brokerSuspendMaxTimeMillis")]),t._v(" "),s("td",[t._v("20000")]),t._v(" "),s("td",[t._v("长轮询，Consumer拉消息请求在Broker挂起最长时间，单位毫秒")])]),t._v(" "),s("tr",[s("td",[t._v("consumerTimeoutMillisWhenSuspend")]),t._v(" "),s("td",[t._v("30000")]),t._v(" "),s("td",[t._v("长轮询，Consumer拉消息请求在Broker挂起超过指定时间，客户端认为超时，单位毫秒")])]),t._v(" "),s("tr",[s("td",[t._v("consumerPullTimeoutMillis")]),t._v(" "),s("td",[t._v("10000")]),t._v(" "),s("td",[t._v("非长轮询，拉消息超时时间，单位毫秒")])]),t._v(" "),s("tr",[s("td",[t._v("messageModel")]),t._v(" "),s("td",[t._v("BROADCASTING")]),t._v(" "),s("td",[t._v("消息支持两种模式：集群消费和广播消费")])]),t._v(" "),s("tr",[s("td",[t._v("messageQueueListener")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("监听队列变化")])]),t._v(" "),s("tr",[s("td",[t._v("offsetStore")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("消费进度存储")])]),t._v(" "),s("tr",[s("td",[t._v("registerTopics")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("注册的topic集合")])]),t._v(" "),s("tr",[s("td",[t._v("allocateMessageQueueStrategy")]),t._v(" "),s("td",[t._v("AllocateMessageQueueAveragely")]),t._v(" "),s("td",[t._v("Rebalance算法实现策略")])])])]),t._v(" "),s("h4",{attrs:{id:"_5-message数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-message数据结构"}},[t._v("#")]),t._v(" 5  Message数据结构")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Topic")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("必填，消息所属topic的名称")])]),t._v(" "),s("tr",[s("td",[t._v("Body")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("必填，消息体")])]),t._v(" "),s("tr",[s("td",[t._v("Tags")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("选填，消息标签，方便服务器过滤使用。目前只支持每个消息设置一个tag")])]),t._v(" "),s("tr",[s("td",[t._v("Keys")]),t._v(" "),s("td",[t._v("null")]),t._v(" "),s("td",[t._v("选填，代表这条消息的业务关键词，服务器会根据keys创建哈希索引，设置后，可以在Console系统根据Topic、Keys来查询消息，由于是哈希索引，请尽可能保证key唯一，例如订单号，商品Id等。")])]),t._v(" "),s("tr",[s("td",[t._v("Flag")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("选填，完全由应用来设置，RocketMQ不做干预")])]),t._v(" "),s("tr",[s("td",[t._v("DelayTimeLevel")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("选填，消息延时级别，0表示不延时，大于0会延时特定的时间才会被消费")])]),t._v(" "),s("tr",[s("td",[t._v("WaitStoreMsgOK")]),t._v(" "),s("td",[t._v("TRUE")]),t._v(" "),s("td",[t._v("选填，表示消息是否在服务器落盘后才返回应答。")])])])]),t._v(" "),s("h2",{attrs:{id:"_6-系统配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-系统配置"}},[t._v("#")]),t._v(" 6  系统配置")]),t._v(" "),s("p",[t._v("本小节主要介绍系统（JVM/OS）相关的配置。")]),t._v(" "),s("h3",{attrs:{id:"_6-1-jvm选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-jvm选项"}},[t._v("#")]),t._v(" 6.1 JVM选项")]),t._v(" "),s("p",[t._v("​ 推荐使用最新发布的JDK 1.8版本。通过设置相同的Xms和Xmx值来防止JVM调整堆大小以获得更好的性能。简单的JVM配置如下所示：\n​"),s("br"),t._v("\n​"),s("code",[t._v("​ ​-server -Xms8g -Xmx8g -Xmn4g ​")]),t._v("\n​\n​"),s("br"),t._v("\n如果您不关心RocketMQ Broker的启动时间，还有一种更好的选择，就是通过“预触摸”Java堆以确保在JVM初始化期间每个页面都将被分配。那些不关心启动时间的人可以启用它：\n​ -XX:+AlwaysPreTouch"),s("br"),t._v("\n禁用偏置锁定可能会减少JVM暂停，\n​ -XX:-UseBiasedLocking"),s("br"),t._v("\n至于垃圾回收，建议使用带JDK 1.8的G1收集器。")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-XX:+UseG1GC -XX:G1HeapRegionSize=16m   \n-XX:G1ReservePercent=25 \n-XX:InitiatingHeapOccupancyPercent=30\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("​ 这些GC选项看起来有点激进，但事实证明它在我们的生产环境中具有良好的性能。另外不要把-XX:MaxGCPauseMillis的值设置太小，否则JVM将使用一个小的年轻代来实现这个目标，这将导致非常频繁的minor GC，所以建议使用rolling GC日志文件：")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-XX:+UseGCLogFileRotation   \n-XX:NumberOfGCLogFiles=5 \n-XX:GCLogFileSize=30m\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("如果写入GC文件会增加代理的延迟，可以考虑将GC日志文件重定向到内存文件系统：")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-Xloggc:/dev/shm/mq_gc_%p.log123   \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"_6-2-linux内核参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-linux内核参数"}},[t._v("#")]),t._v(" 6.2 Linux内核参数")]),t._v(" "),s("p",[t._v("​ os.sh脚本在bin文件夹中列出了许多内核参数，可以进行微小的更改然后用于生产用途。下面的参数需要注意，更多细节请参考/proc/sys/vm/*的"),s("a",{attrs:{href:"https://www.kernel.org/doc/Documentation/sysctl/vm.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("vm.extra_free_kbytes")]),t._v("，告诉VM在后台回收（kswapd）启动的阈值与直接回收（通过分配进程）的阈值之间保留额外的可用内存。RocketMQ使用此参数来避免内存分配中的长延迟。（与具体内核版本相关）")]),t._v(" "),s("li",[s("strong",[t._v("vm.min_free_kbytes")]),t._v("，如果将其设置为低于1024KB，将会巧妙的将系统破坏，并且系统在高负载下容易出现死锁。")]),t._v(" "),s("li",[s("strong",[t._v("vm.max_map_count")]),t._v("，限制一个进程可能具有的最大内存映射区域数。RocketMQ将使用mmap加载CommitLog和ConsumeQueue，因此建议将为此参数设置较大的值。（agressiveness --\x3e aggressiveness）")]),t._v(" "),s("li",[s("strong",[t._v("vm.swappiness")]),t._v("，定义内核交换内存页面的积极程度。较高的值会增加攻击性，较低的值会减少交换量。建议将值设置为10来避免交换延迟。")]),t._v(" "),s("li",[s("strong",[t._v("File descriptor limits")]),t._v("，RocketMQ需要为文件（CommitLog和ConsumeQueue）和网络连接打开文件描述符。我们建议设置文件描述符的值为655350。")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Performance_Tuning_Guide/ch06s04s02.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Disk scheduler"),s("OutboundLink")],1),t._v("，RocketMQ建议使用I/O截止时间调度器，它试图为请求提供有保证的延迟。\n"),s("a",{attrs:{href:"%5B%5D()"}})])])])}),[],!1,null,null,null);s.default=r.exports}}]);