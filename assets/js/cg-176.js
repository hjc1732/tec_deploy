(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1458:function(e,a,t){"use strict";t.r(a);var r=t(7),v=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"线程池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池"}},[e._v("#")]),e._v(" 线程池")]),e._v(" "),a("h2",{attrs:{id:"创建多线程的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建多线程的方式"}},[e._v("#")]),e._v(" 创建多线程的方式 ：")]),e._v(" "),a("p",[e._v("Thread 类")]),e._v(" "),a("p",[e._v("Runable接口")]),e._v(" "),a("p",[e._v("Callable Future接口")]),e._v(" "),a("p",[e._v("线程池")]),e._v(" "),a("h2",{attrs:{id:"为什么需要线程池-了解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要线程池-了解"}},[e._v("#")]),e._v(" 为什么需要线程池（了解）")]),e._v(" "),a("p",[e._v("避免线程创建和销毁的消耗，提升响应速度，统一管理")]),e._v(" "),a("h3",{attrs:{id:"线程池种类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池种类"}},[e._v("#")]),e._v(" 线程池种类")]),e._v(" "),a("p",[e._v("第一类： 缓存共享\nnewCachedThreadPool")]),e._v(" "),a("p",[e._v("第二类:池子")]),e._v(" "),a("p",[e._v("newFixedThreadPool 固定大小的池子\nnewScheduledThreadPool  延后多少时间，周期执行的池子")]),e._v(" "),a("p",[e._v("第三类：")]),e._v(" "),a("p",[e._v("newSingleThreadExecutor  单线程\nnewSingleThreadScheduledExecutor  加延后多少时间，周期执行的池子")]),e._v(" "),a("h3",{attrs:{id:"执行原理或流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行原理或流程"}},[e._v("#")]),e._v(" 执行原理或流程：")]),e._v(" "),a("p",[e._v("1 新任务达到，判断是否达到核心线程线程数，如未达到，新开线程执行任务，如已达到，尝试放到阻塞队列")]),e._v(" "),a("p",[e._v("2 如阻塞队列未满，放到队列中等待执行，如阻塞队列已满，判断最大是否达到最大线程数")]),e._v(" "),a("p",[e._v("3 如未达到，新开线程执行任务，如已达到，安装阻塞策略执行")]),e._v(" "),a("h3",{attrs:{id:"常用的阻塞策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用的阻塞策略"}},[e._v("#")]),e._v(" 常用的阻塞策略：")]),e._v(" "),a("p",[e._v("丢弃当前任务并抛异常\n直接丢弃当前任务,丢弃最老的任务,不丢弃不抛异常 ,让调用者执行")]),e._v(" "),a("h3",{attrs:{id:"核心参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心参数"}},[e._v("#")]),e._v(" 核心参数")]),e._v(" "),a("p",[e._v("corePoolSize：核心线程池的大小      10      1\n方法执行完，先进先出\nmaximumPoolSize：线程池能创建线程的最大个数\nkeepAliveTime：空闲线程存活时间\nunit：时间单位，为keepAliveTime指定时间单位\nworkQueue：阻塞队列，用于保存任务的阻塞队列"),a("br"),e._v("\nthreadFactory：创建线程的工程类\nhandler：阻塞策略\n关闭： ShutDown"),a("br"),e._v("\n关闭未执行的任务，不关闭正在执行的任务\nShutDownNow  关闭所有正在执行和未执行的任务")]),e._v(" "),a("h2",{attrs:{id:"为什么需要线程池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要线程池"}},[e._v("#")]),e._v(" 为什么需要线程池")]),e._v(" "),a("p",[e._v("在实际使用中，线程是很占用系统资源的，如果对线程管理不完善的话很容易导致系统问题。\n因此，在大多数并发框架中都会使用线程池来管理线程，使用线程池管理线程主要有如下好处：")]),e._v(" "),a("p",[e._v("1、使用线程池可以重复利用已有的线程继续执行任务，避免线程在创建销毁时造成的消耗\n2、由于没有线程创建和销毁时的消耗，可以提高系统响应速度\n3、通过线程可以对线程进行合理的管理，根据系统的承受能力调整可运行线程数量的大小等")]),e._v(" "),a("h2",{attrs:{id:"线程池的分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池的分类"}},[e._v("#")]),e._v(" 线程池的分类")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-3ccc59d453a35dccd5c269129243eaca_1440w.webp",alt:"img"}})]),e._v(" "),a("p",[e._v("2 newFixedThreadPool：创建一个可重用固定线程数的线程池，以共享的无界队列方式来运行这些线程，线程池中的线程处于一定的量，可以很好的控制线程的并发量")]),e._v(" "),a("p",[e._v("3 newSingleThreadExecutor：创建一个使用单个 worker 线程的Executor ，以无界队列方式来运行该线程。线程池中最多执行一个线程，之后提交的线程将会排在队列中以此执行")]),e._v(" "),a("p",[e._v("4 newSingleThreadScheduledExecutor：创建一个单线程执行程序，它可安排在给定延迟后运行命令或者定期执行")]),e._v(" "),a("p",[e._v("5 newScheduledThreadPool：创建一个线程池，它可安排在给定延迟后运行命令或者定期的执行")]),e._v(" "),a("p",[e._v("6 newWorkStealingPool：创建一个带并行级别的线程池，并行级别决定了同一时刻最多有多少个线程在执行，如不传并行级别参数，将默认为当前系统的CPU个数")]),e._v(" "),a("h2",{attrs:{id:"核心参数-高薪常问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心参数-高薪常问"}},[e._v("#")]),e._v(" 核心参数（高薪常问）")]),e._v(" "),a("p",[e._v("corePoolSize：核心线程池的大小   10      1 方法执行完，先进先出\nmaximumPoolSize：线程池能创建线程的最大个数\nkeepAliveTime：空闲线程存活时间\nunit：时间单位，为keepAliveTime指定时间单位\nworkQueue：阻塞队列，用于保存任务的阻塞队列"),a("br"),e._v("\nthreadFactory：创建线程的工程类\nhandler：饱和策略（拒绝策略）")]),e._v(" "),a("h2",{attrs:{id:"线程池的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池的原理"}},[e._v("#")]),e._v(" 线程池的原理")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-aed14071196207d06d5b2434bae0b140_1440w.webp",alt:"img"}})]),e._v(" "),a("p",[e._v("线程池的工作过程如下：\n当一个任务提交至线程池之后，")]),e._v(" "),a("p",[e._v("1 线程池首先判断核心线程池里的线程是否已经满了。如果不是，则创建一个新的工作线程来执行任务。否则进入2. 判断工作队列是否已经满了，倘若还没有满，将线程放入工作队列。否则进入3.\n3 判断线程池里的线程是否都在执行任务。如果不是，则创建一个新的工作线程来执行。如果线程池满了，则交给饱和策略来处理任务。")]),e._v(" "),a("h2",{attrs:{id:"拒绝策略-了解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拒绝策略-了解"}},[e._v("#")]),e._v(" 拒绝策略（了解）")]),e._v(" "),a("p",[e._v("ThreadPoolExecutor.AbortPolicy（系统默认）： 丢弃任务并抛出RejectedExecutionException异常，让你感知到任务被拒绝了，我们可以根据业务逻辑选择重试或者放弃提交等策略\nThreadPoolExecutor.DiscardPolicy： 也是丢弃任务，但是不抛出异常，相对而言存在一定的风险，因为我们提交的时候根本不知道这个任务会被丢弃，可能造成数据丢失。")]),e._v(" "),a("p",[e._v("ThreadPoolExecutor.DiscardOldestPolicy： 丢弃队列最前面的任务，然后重新尝试执行任务（重复此过程），通常是存活时间最长的任务，它也存在一定的数据丢失风险")]),e._v(" "),a("p",[e._v("ThreadPoolExecutor.CallerRunsPolicy：既不抛弃任务也不抛出异常，而是将某些任务回退到调用者，让调用者去执行它。")]),e._v(" "),a("h2",{attrs:{id:"线程池的关闭-了解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池的关闭-了解"}},[e._v("#")]),e._v(" 线程池的关闭（了解）")]),e._v(" "),a("p",[e._v("关闭线程池，可以通过shutdown和shutdownNow两个方法\n原理：遍历线程池中的所有线程，然后依次中断")]),e._v(" "),a("p",[e._v("1、shutdownNow首先将线程池的状态设置为STOP,然后尝试停止所有的正在执行和未执行任务的线程，并返回等待执行任务的列表；\n2、shutdown只是将线程池的状态设置为SHUTDOWN状态，然后中断所有没有正在执行任务的线程")])])}),[],!1,null,null,null);a.default=v.exports}}]);