> 翻译自：[system-design](https://roadmap.sh/design-system)，有关设计大型系统所需了解的一切。

## 介绍

### 什么是系统设计？

系统设计是定义系统元素及其相互作用和关系的过程，以满足一组指定的需求。
它包括提出问题陈述，将其分解为更小的组件，并设计每个组件以有效地协同工作以实现系统的总体目标。
此过程通常包括分析当前系统（如果有）并确定任何缺陷，为新系统创建详细计划，以及测试设计以确保其满足要求。
这是一个迭代过程，可能涉及多轮设计、测试和改进。
在软件工程中，系统设计是软件开发过程中的一个阶段，重点关注软件系统的高层设计，包括架构和组件。
这也是软件工程师面试过程中的重要方面之一。大多数公司都有专门的系统设计面试轮，要求应聘者针对给定的问题陈述设计一个系统。
候选人需要提出系统的详细设计，包括架构、组件及其交互。他们还将讨论其设计中涉及的权衡以及他们考虑的替代方案。

### 如何进行系统设计？

有几个步骤可以在进行系统设计时采取：

1. **理解问题**：收集关于您要解决的问题以及系统要求的信息。确定用户及其需求，以及系统的任何限制或局限性。
2. **确定系统范围**：定义系统的边界，包括系统的功能和非功能性需求。
3. **研究和分析现有系统**：查看过去构建的类似系统，并确定其中的优势和不足。利用这些信息来指导您的设计决策。
4. **创建高层设计**：概述系统的主要组件及其相互作用方式。可以包括系统架构的简要图示，或者是描述系统流程的流程图。
5. **完善设计**：在设计的细节上进行迭代和改进，直至获得满足所有要求的完整详细设计。
6. **文档化设计**：为将来的参考和维护创建详细的设计文档。
7. **持续监控和改进系统**：系统设计不是一次性过程，需要不断监控和改进以满足不断变化的需求。

以下链接可了解更多信息：

- [How to approach System Design?](https://github.com/donnemartin/system-design-primer#how-to-approach-a-system-design-interview-question)
- [What are system design questions?](https://www.hiredintech.com/system-design)
- [Intro to Architecture and Systems Design Interviews](https://www.youtube.com/watch?v=ZgdS0EUmn70)
- [My System Design Template](https://leetcode.com/discuss/career/229177/My-System-Design-Template)

## 性能与可伸缩性

一个服务在资源增加的情况下能够呈现出与之成比例的增加性能时，就被称为具有可伸缩性。通常，提高性能意味着能够处理更多的工作单元，但它也可以用于处理更大的工作单元，比如当数据集增长时。

**性能与可伸缩性的另一种观点：**

- 如果您面临性能问题，那么您的系统对单个用户而言会变得很慢。
- 如果您面临可伸缩性问题，那么您的系统对单个用户而言可能很快，但在高负载下会变得很慢。

以下链接可了解更多信息：

- [Scalability, Availability & Stability Patterns](https://www.slideshare.net/jboner/scalability-availability-stability-patterns/)
- [A Word on Scalability](https://www.allthingsdistributed.com/2006/03/a_word_on_scalability.html)
- [Performance vs Scalability](https://blog.professorbeekums.com/performance-vs-scalability/)

## 延迟与吞吐量

**延迟**和**吞吐量**是衡量系统性能的两个重要指标。延迟是指系统响应请求所需的时间。吞吐量是指系统能够同时处理的请求数量。

通常情况下，您应该追求在可接受的延迟范围内实现最大吞吐量。

以下链接可了解更多信息：

- [System Design: Latency vs Throughput](https://cs.fyi/guide/latency-vs-throughput/)
- [Understanding Latency versus Throughput](https://community.cadence.com/cadence_blogs_8/b/fv/posts/understanding-latency-vs-throughput)
- [Latency and Throughput - MIT](https://www.youtube.com/watch?v=3HIV4MnLGCw)

## 可用性和一致性

**可用性**指的是系统在出现故障的情况下仍能向客户提供服务的能力。通常以系统正常运行时间的百分比来衡量，也称为系统的正常运行时间（uptime）。

**一致性**则是指所有客户端在同一时间能够看到相同的数据。这对于维护系统中存储的数据完整性非常重要。

在**分布式系统**中，通常需要在可用性和一致性之间进行权衡。优先追求高可用性的系统可能会牺牲一致性，而优先追求一致性的系统可能会牺牲可用性。不同的分布式系统采用不同的方法来平衡可用性和一致性之间的权衡，例如使用复制或共识算法。

更多相关资源，请参考以下内容：

- [CAP Theorem](https://www.youtube.com/watch?v=_RbsFXWRZ10&t=1s)
- [CAP Theorem Revisited](https://robertgreiner.com/cap-theorem-revisited/)
- [A plain english introduction to CAP Theorem](http://ksat.me/a-plain-english-introduction-to-cap-theorem)
- [CAP FAQ](https://github.com/henryr/cap-faq)

### CAP 定理

根据 CAP 定理，在一个分布式系统中，你只能支持以下三种保证中的两种：

**一致性（Consistency）** - 每次读取操作都会获得最近的写入结果或者出现错误。

**可用性（Availability）** -
每次请求都会收到响应，但无法保证响应包含最新版本的信息。

**分区容忍性（Partition Tolerance）** -
系统可以在发生任意网络分区的情况下继续运行。

网络并不是完全可靠的，因此你需要支持分区容忍性。你需要在软件方面在一致性和可用性之间进行权衡。

**CP（Consistency and Partition Tolerance）** -
等待来自分区节点的响应可能会导致超时错误。CP
是一个好的选择，如果你的业务需求需要原子性的读写操作。

**AP（Availability and Partition Tolerance）** -
响应会返回任意节点上最及时可用的数据版本，这可能不是最新的。当分区问题解决时，写入可能需要一些时间来传播。

如果业务需求需要允许最终一致性，或者系统需要在出现外部错误时继续工作，AP
是一个不错的选择。

了解更多信息，请查阅以下资源：

- [CAP theorem revisited](http://robertgreiner.com/2014/08/cap-theorem-revisited/)
- [A plain english introduction to CAP theorem](http://ksat.me/a-plain-english-introduction-to-cap-theorem)
- [CAP FAQ](https://github.com/henryr/cap-faq)
- [The CAP theorem](https://www.youtube.com/watch?v=k-Yaq8AHlFA)

## 可用性模式

**可用性（Availability）**
是以系统正常运行时间的百分比来衡量的，它定义了系统功能和运行的时间比例。可用性受到系统错误、基础设施问题、恶意攻击和系统负载的影响。云应用通常向用户提供服务级别协议（SLA），这意味着应用程序必须被设计和实现以最大化可用性。

了解更多信息，请查阅以下资源：

- [Availability Patterns](https://learn.microsoft.com/en-us/azure/architecture/framework/resiliency/reliability-patterns#availability)

### 可用性数字化表示

可用性通常通过系统的正常运行时间（或宕机时间）来量化，表示为一个百分比。通常使用“9的数量”来衡量可用性，一个有99.99%可用性的服务被称为具有四个9。

**99.9% 可用性 - 三个9：**

| 持续时间     | 允许的宕机时间    |
| ------------ | ----------------- |
| 每年宕机时长 | 8小时 41分钟 38秒 |
| 每月宕机时长 | 43分钟 28秒       |
| 每周宕机时长 | 10分钟 4.8秒      |
| 每日宕机时长 | 1分钟 26秒        |

**99.99% 可用性 - 四个9：**

| 持续时间     | 允许的宕机时间 |
| ------------ | -------------- |
| 每年宕机时长 | 52分钟 9.8秒   |
| 每月宕机时长 | 4分钟 21秒     |
| 每周宕机时长 | 1分钟 0.5秒    |
| 每日宕机时长 | 8.6秒          |

并行与串行的可用性
如果一个服务由多个可能发生故障的组件组成，服务的整体可用性取决于这些组件是串行连接还是并行连接。

**串行连接** 当两个可用性小于 100% 的组件串行连接时，整体可用性会降低：

总体可用性 = 组件 Foo 的可用性 * 组件 Bar 的可用性 如果 Foo 和 Bar
两个组件的可用性都是 99.9%，它们串行连接的总体可用性将为 99.8%。

**并行连接** 当两个可用性小于 100% 的组件并行连接时，整体可用性会增加：

总体可用性 = 1 - (1 - 组件 Foo 的可用性) * (1 - 组件 Bar 的可用性) 如果 Foo 和
Bar 两个组件的可用性都是 99.9%，它们并行连接的总体可用性将为 99.9999%。

了解更多信息，请访问以下链接：

- [Availability in System Design](https://www.enjoyalgorithms.com/blog/availability-system-design-concept/)
- [Uptime calculator: How much downtime corresponds to 99.9 % uptime](https://uptime.is/)

### 故障转移（Failover）

故障转移是一种可用性模式，用于确保系统在发生故障时仍能继续运行。它涉及使用备份组件或系统，在发生故障时接管主要功能。

在故障转移系统中，有一个主要组件负责处理请求，并有一个备用（或备份）组件处于待命状态。对主要组件进行故障监控，如果它发生故障，则激活备用组件接管其职责。这使得系统可以继续运行，减少中断。

故障转移可以通过不同的方式来实现，例如主动-被动（active-passive）、主动-主动（active-active）和热备（hot-standby）等。

**主动-被动（Active-Passive）**
在主动-被动故障转移中，主服务器和备份服务器之间会发送心跳信号。如果心跳信号中断，备份服务器将接管主服务器的
IP
地址并继续提供服务。被动服务器可能处于已启动的“热”待命状态，也可能需要从“冷”待命状态启动。只有主服务器处理流量。

主动-被动故障转移也可以称为主-从（master-slave）故障转移。

**主动-主动（Active-Active）**
在主动-主动故障转移中，两台服务器都在处理流量，平均分担负载。

如果服务器是面向公共网络的，DNS 需要知道两台服务器的公共 IP
地址。如果服务器面向内部网络，应用程序逻辑需要知道两台服务器。

主动-主动故障转移也可以称为主-主（master-master）故障转移。

**故障转移的缺点** 故障转移会增加更多的硬件和额外的复杂性。
如果在任何新写入数据被复制到备用服务器之前，主动系统发生故障，可能会导致数据丢失。

了解更多信息，请访问以下链接：

- [Fail Over Pattern - High Availability](https://www.filecloud.com/blog/2015/12/architectural-patterns-for-high-availability/)

### 复制（Replication）

复制是一种可用性模式，它涉及在不同位置存储相同数据的多个副本。在发生故障时，可以从其他位置检索数据。主要有两种类型的复制：主-主（Master-Master）复制和主-从（Master-Slave）复制。

**主-主（Master-Master）复制**：在这种类型的复制中，多个服务器被配置为“主服务器”，每个主服务器都可以接受读写操作。这允许实现高可用性，如果其中一个服务器发生故障，其他服务器可以接管。然而，这种类型的复制可能导致冲突，如果多个服务器同时更新相同的数据，需要一些冲突解决机制来处理这种情况。

**主-从（Master-Slave）复制**：在这种类型的复制中，一个服务器被指定为“主服务器”，负责处理所有的写操作，而多个“从服务器”负责处理读操作。如果主服务器发生故障，可以将其中一个从服务器提升为主服务器。与主-主复制相比，这种类型的复制设置和维护更简单。

了解更多信息，请访问以下链接：

- [Replication: Availability Pattern](https://github.com/donnemartin/system-design-primer#replication)

## 一致性模式

一致性模式是指在分布式系统中存储和管理数据以及将数据提供给用户和应用程序的方式。主要有以下三种类型的一致性模式：

- **强一致性（Strong Consistency）**
- **弱一致性（Weak Consistency）**
- **最终一致性（Eventual Consistency）**

每种一致性模式都有其优缺点，选择使用哪种模式取决于应用程序或系统的具体要求。

了解更多信息，请查阅以下资源：

- [Consistency Patterns in Distributed Systems](https://cs.fyi/guide/consistency-patterns-week-strong-eventual/)

### 弱一致性（Weak Consistency）

在更新数据后，并不能保证后续的读取操作会立即反映出所做的更改。读取操作可能会看到最近的写入结果，也可能看不到。

弱一致性的特点是在分布式系统中允许一段时间的数据副本之间的不一致。这种模式允许数据的复制和更新存在一定的延迟，因此读取操作可能会返回旧的数据，直到最终达到一致状态。在弱一致性模式下，读取的数据可能是过时的，而不是最新的。

弱一致性通常用于需要更高的可用性和性能的场景，而不是实时数据的要求。读写操作不需要等待所有副本同步完成，从而减少了延迟和系统负载。

### 最终一致性（Eventual Consistency）

最终一致性是一种弱一致性的形式。在更新数据后，最终所有后续的读取操作将会看到这些更改。数据以异步的方式复制，确保所有副本最终都会得到更新。

最终一致性的特点是在分布式系统中允许一段时间的数据副本之间的不一致，但随着时间的推移，所有的副本最终会达到一致的状态。这种方式在保障可用性的同时，尽量追求数据的一致性。

### 强一致性（Strong Consistency）

在更新数据后，所有后续的读取操作将立即看到这些更改。数据以同步的方式复制，确保所有副本同时被更新。

强一致性的特点是系统保证所有读取操作都会返回最近的写入结果，即所有节点在同一时间看到的数据是相同的。这种模式确保了数据的实时一致性，但可能会对系统的可用性产生一定影响。

强一致性通常需要在分布式系统中采取额外的复杂性来实现数据的同步，因为需要保证所有副本都在同一时间更新数据。

## 后台任务（Background Jobs）

系统设计中的后台任务指的是独立于系统主要执行流程的在后台执行的任务。这些任务通常由系统自身发起，而不是由用户或其他外部代理发起。

后台任务可以用于各种目的，例如：

- 执行维护任务：如清理旧数据、生成报告或备份数据库。
- 处理大量数据：如数据导入、数据导出或数据转换。
- 发送通知或消息：如向用户发送电子邮件通知或推送通知。
- 执行长时间运算：如机器学习或数据分析。

了解更多信息，请访问以下链接：

- [Background Jobs - Best Practices](https://learn.microsoft.com/en-us/azure/architecture/best-practices/background-jobs)

### 事件驱动（Event Driven）

事件驱动调用使用触发器来启动后台任务。使用事件驱动触发器的示例包括：

1. 用户界面（UI）或另一个任务将消息放入队列中。该消息包含有关已发生的操作的数据，例如用户下订单。后台任务监听此队列并检测到新消息的到达。它读取消息并将其中的数据用作后台任务的输入。这种模式被称为异步基于消息的通信。

2. 用户界面（UI）或另一个任务保存或更新存储中的值。后台任务监视存储并检测更改。它读取数据并将其用作后台任务的输入。

3. 用户界面（UI）或另一个任务向端点发出请求，例如一个 HTTPS URI 或作为 Web
   服务公开的 API。它将用于完成后台任务所需的数据作为请求的一部分传递。端点或
   Web 服务调用后台任务，并使用数据作为其输入。

了解更多信息，请访问以下链接：

- [Background Jobs - Event Driven Triggers](https://learn.microsoft.com/en-us/azure/architecture/best-practices/background-jobs#event-driven-triggers)

### 计划驱动（Schedule Driven）

计划驱动调用使用定时器来启动后台任务。使用计划驱动触发器的示例包括：

1. 在应用程序内部或作为应用程序操作系统的一部分运行的定时器定期地调用后台任务。

2. 在不同应用程序中运行的定时器（例如 Azure Logic Apps），定期向 API 或 Web
   服务发送请求。API 或 Web 服务调用后台任务。

3. 单独的进程或应用程序启动定时器，使后台任务在指定的时间延迟后执行一次，或者在特定时间执行。

适合计划驱动调用的典型任务包括批处理例程（例如根据用户最近行为更新相关产品列表）、常规数据处理任务（例如更新索引或生成累积结果）、每日报告的数据分析、数据保留清理和数据一致性检查等。

了解更多信息，请访问以下链接：

- [Schedule Driven - Background Jobs](https://learn.microsoft.com/en-us/azure/architecture/best-practices/background-jobs#schedule-driven-triggers)

### 返回结果

后台任务在与用户界面（UI）或调用后台任务的进程分离的单独进程中异步执行，甚至可能在不同的位置执行。理想情况下，后台任务是“发起并忘记”操作，它们的执行进度不会影响用户界面或调用它们的进程。这意味着调用进程不等待任务完成。因此，它无法自动检测任务何时结束。

在后台任务执行完成后，需要一种机制来返回结果或通知调用进程任务的完成情况。常见的方式有：

1. **轮询（Polling）**：调用进程定期查询后台任务的状态，以检查它是否已完成。这种方法会产生额外的网络开销，因为调用进程需要不断发送查询请求。

2. **回调（Callback）**：调用进程在启动后台任务时，提供一个回调函数，后台任务在执行完成后会调用这个回调函数，将结果传递给调用进程。

3. **消息队列（Message
   Queue）**：后台任务在执行完成后，将结果写入消息队列中，调用进程订阅该队列并接收结果。

4. **长轮询（Long
   Polling）**：调用进程发送一个请求给后台任务，后台任务在执行完成前会一直保持连接打开，一旦任务完成，它会返回结果给调用进程。

根据具体的场景和需求，选择适合的返回结果机制能够更好地实现后台任务的执行和结果传递。

了解更多信息，请访问以下链接：

- [Returning Results - Background Jobs](https://learn.microsoft.com/en-us/azure/architecture/best-practices/background-jobs#returning-results)

## 域名系统（Domain Name System）

域名系统（Domain Name System，DNS）将域名（例如 www.example.com ）翻译成IP
地址。

DNS
是分层的，顶层有几个权威服务器。您的路由器或互联网服务提供商（ISP）会提供有关进行查找时要联系的
DNS 服务器的信息。较低级别的 DNS 服务器缓存映射，但由于 DNS
传播延迟，可能会过期。DNS
结果还可以由您的浏览器或操作系统缓存一段时间，这由时间到期（TTL）决定。

**NS 记录（Name Server 记录）**：指定您的域名/子域名的 DNS 服务器。

**MX 记录（Mail Exchange 记录）**：指定接受消息的邮件服务器。

**A 记录（Address 记录）**：将名称指向 IP 地址。

**CNAME（Canonical 名称）**：将名称指向另一个名称或 CNAME（例如 example.com 指向
www.example.com ）或 A 记录。

服务如 CloudFlare 和 Route53 提供托管的 DNS 服务。某些 DNS
服务可以通过各种方法路由流量：

- 加权轮询
  - 防止流量发送到维护中的服务器
  - 在不同集群大小之间平衡
  - A/B 测试
- 基于延迟
- 基于地理位置

了解更多信息，请访问以下链接：

- [Getting started with Domain Name System](https://github.com/donnemartin/system-design-primer#domain-name-system)
  [What is DNS?](https://www.cloudflare.com/learning/dns/what-is-dns/)

## 内容分发网络（Content Delivery Networks）

内容分发网络（CDN）是一个全球分布式的代理服务器网络，从更靠近用户的位置提供内容。通常，静态文件（如
HTML/CSS/JS、图片和视频）会从 CDN 服务器上提供，尽管一些 CDN（如 Amazon 的
CloudFront）也支持动态内容。网站的 DNS 解析将告诉客户端要联系哪个服务器。

通过 CDN 提供内容可以显著改善性能，具体有两个方面的优势：

1. 用户从靠近他们的数据中心接收内容。
2. 您的服务器不必处理 CDN 能够满足的请求。

通过以下链接了解更多关于 CDN 的内容：

- [Introduction to CDNs](https://github.com/donnemartin/system-design-primer#content-delivery-network)
- [The Differences Between Push And Pull CDNs](http://www.travelblogadvice.com/technical/the-differences-between-push-and-pull-cdns/)
- [Brief about Content delivery network](https://en.wikipedia.org/wiki/Content_delivery_network)

### 推送型 CDN

推送型 CDN
在您的服务器上发生更改时接收新内容。您需要完全负责提供内容，直接上传到 CDN
并重写 URL 以指向
CDN。您可以配置内容的过期时间和更新时间。内容只有在新内容或更改内容时才会上传，从而最大程度地减少流量，但增加存储空间。

适合在推送型 CDN
上工作的网站包括流量较小或内容不经常更新的网站。内容只需在第一次放置在 CDN
上，而不需要定期重新拉取。

通过以下链接了解更多关于推送型 CDN 的内容：

- [Introduction to CDNs](https://github.com/donnemartin/system-design-primer#content-delivery-network)

### 拉取型 CDN

拉取型 CDN
在第一个用户请求内容时从您的服务器获取新内容。您将内容保留在您的服务器上，并重写
URL 以指向 CDN。这会导致较慢的请求，直到内容被缓存在 CDN 上。

缓存的时间由生存时间（TTL）决定。拉取型 CDN 最大程度地减少 CDN
上的存储空间，但如果文件在实际更改之前过期并被拉取，可能会产生冗余的流量。流量较大的网站适合使用拉取型
CDN，因为只有最近请求的内容会保留在 CDN 上，流量能够更加均衡地分布。

通过以下链接了解更多关于拉取型 CDN 的内容：

- [Introduction to CDNs](https://github.com/donnemartin/system-design-primer#content-delivery-network)
- [The Differences Between Push And Pull CDNs](http://www.travelblogadvice.com/technical/the-differences-between-push-and-pull-cdns/)

## 负载均衡器

负载均衡器将传入的客户端请求分配给应用服务器和数据库等计算资源。在每种情况下，负载均衡器将计算资源返回的响应传送回适当的客户端。负载均衡器的有效功能包括：

- 防止请求发送到不健康的服务器
- 防止资源过载
- 帮助消除单点故障

负载均衡器可以使用硬件（昂贵）或软件（如HAProxy）实现。其他优势包括：

- SSL终止：解密传入请求并对服务器响应进行加密，使得后端服务器不必执行这些可能昂贵的操作
- 消除在每个服务器上安装X.509证书的需求
- 会话持久性：发放Cookie并将特定客户端的请求路由到同一实例，如果Web应用程序不跟踪会话，则有助于保持会话

**负载均衡器的缺点：**

- 如果负载均衡器资源不足或配置不当，它可能成为性能瓶颈。
- 引入负载均衡器以消除单点故障会增加复杂性。
- 单个负载均衡器本身可能成为单点故障，配置多个负载均衡器会进一步增加复杂性。

要了解更多信息，请访问以下链接：

- [NGINX Architecture](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/)
- [HAProxy Architecture Guide](http://www.haproxy.org/download/1.2/doc/architecture.txt)
- [Scalability](http://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones)

### 反向代理

部署负载均衡器在拥有多个服务器时非常有用。通常，负载均衡器将流量路由到一组提供相同功能的服务器。

反向代理即使只有一个Web服务器或应用服务器也是有用的，它可以带来前面一节中描述的好处。

类似NGINX和HAProxy这样的解决方案可以同时支持第七层（应用层）的反向代理和负载均衡。

**反向代理的缺点：**

- 引入反向代理会增加复杂性。
- 单个反向代理本身可能成为单点故障，配置多个反向代理（即故障转移）会进一步增加复杂性。

要了解更多信息，请访问以下链接：

- [Reverse Proxy vs Load Balancer](https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/)
- [NGINX Architecture](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/)
- [HAProxy Architecture Guide](http://www.haproxy.org/download/1.2/doc/architecture.txt)
- [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy)

### 负载均衡算法

负载均衡器是一种软件或硬件设备，用于防止任何一个服务器过载。负载均衡算法是负载均衡器用于在服务器之间分配网络流量的逻辑（算法是一组预定义规则）。

负载均衡有两种主要方法。动态负载均衡使用考虑到每个服务器的当前状态的算法，并相应地分配流量。静态负载均衡则在不进行这些调整的情况下分配流量。某些静态算法将等量的流量发送到服务器组中的每个服务器，可以按照指定的顺序或随机方式进行。

要了解更多信息，请访问以下链接：

- [Types of Load Balancing Algorithms](https://www.cloudflare.com/learning/performance/types-of-load-balancing-algorithms/)

### 七层负载均衡

七层负载均衡器在应用层面查看请求内容，以决定如何分配请求。这可以涉及头部、消息和Cookie的内容。七层负载均衡器终止网络流量，读取消息，做出负载均衡决策，然后打开到选定服务器的连接。例如，七层负载均衡器可以将视频流量定向到托管视频的服务器，同时将更敏感的用户计费流量定向到经过安全硬化的服务器。

四层负载均衡相对灵活性而言，需要比七层更少的时间和计算资源，尽管在现代通用硬件上性能影响可能是最小的。

### 四层负载均衡

四层负载均衡器在传输层面查看信息，以决定如何分配请求。通常，这涉及头部中的源IP地址、目标IP地址和端口，但不涉及数据包的内容。四层负载均衡器将网络数据包转发到上游服务器，并执行网络地址转换（NAT）的功能。

### 水平扩展

负载均衡器还可以帮助进行水平扩展，提高性能和可用性。使用普通机器进行横向扩展比在更昂贵的硬件上对单个服务器进行纵向扩展更具成本效益，并且会获得更高的可用性，这称为纵向扩展。同时，在普通硬件上进行招聘和雇佣人才比针对专门的企业系统更容易。

**水平扩展的缺点：**

- 水平扩展引入复杂性并涉及克隆服务器。
  - 服务器应该是无状态的：它们不应包含任何与用户相关的数据，比如会话或个人资料图片。
  - 会话可以存储在集中的数据存储中，例如数据库（SQL，NoSQL）或持久性缓存（Redis，Memcached）中。
- 随着上游服务器的水平扩展，下游服务器（例如缓存和数据库）需要处理更多的同时连接。

## 应用层

将Web层与应用层（也称为平台层）分离允许您独立地对两层进行扩展和配置。添加新的API将导致添加应用服务器，而不一定需要添加额外的Web服务器。单一责任原则倡导小而自治的服务相互协作。小团队拥有小型服务，可以更积极地规划快速增长。

**缺点**

- 添加具有松散耦合服务的应用层，从架构、运维和流程视角上需要与单块系统不同的方法。
- 微服务可能在部署和运维方面增加复杂性。

要获取更多资源，请访问以下链接：

- [Intro to architecting systems for scale](http://lethain.com/introduction-to-architecting-systems-for-scale/#platform_layer)

### 微服务

与“应用层”讨论相关的是微服务，可以将其描述为一套独立部署、小型、模块化的服务。每个服务运行一个独特的进程，并通过明确定义的轻量级机制进行通信，以实现业务目标。例如，Pinterest可能会有以下微服务：用户配置文件、关注者、动态流、搜索、照片上传等。

要了解更多信息，请访问以下链接：

- [Introduction to Microservices](https://aws.amazon.com/microservices/)
- [Microservices - Wikipedia](https://en.wikipedia.org/wiki/Microservices)
- [Microservices](https://martinfowler.com/articles/microservices.html)

### 服务发现

像Consul、Etcd和Zookeeper等系统可以通过跟踪注册的名称、地址和端口来帮助服务相互发现。健康检查可以通过使用HTTP端点来验证服务的完整性。Consul和Etcd都有内置的键值存储，可用于存储配置值和其他共享数据。

要了解更多信息，请访问以下链接：

- [What is Service-oriented architecture?](https://en.wikipedia.org/wiki/Service-oriented_architecture)
- [Intro to Service Discovery](https://github.com/donnemartin/system-design-primer#Service%20Discovery)

## 数据库（Databases）

为系统选择合适的数据库是一个重要的决策，因为它会对系统的性能、可扩展性和整体成功产生显著影响。一些选择正确数据库的关键原因包括：

- **性能**：不同的数据库具有不同的性能特性，选择错误的数据库可能导致性能不佳和响应时间缓慢。

- **可扩展性**：随着系统的增长和数据量的增加，数据库需要能够相应地扩展。某些数据库比其他数据库更适合处理大量数据。

- **数据建模**：不同的数据库具有不同的数据建模能力，选择合适的数据库有助于保持数据一致和有序。

- **数据完整性**：不同的数据库具有不同的数据完整性维护能力，例如强制执行约束，以及不同级别的数据安全性。

- **支持和维护**：某些数据库拥有更活跃的社区和更好的文档，这样可以更容易地找到帮助和资源。

总体而言，通过选择合适的数据库，您可以确保您的系统性能良好，根据需要进行扩展，并且在长期内易于维护。

了解更多信息，请访问以下链接：

- [Scaling up to your first 10 million users](https://www.youtube.com/watch?v=kKjm4ehYiMs)

### SQL vs NoSQL

SQL数据库，如MySQL和PostgreSQL，最适合处理结构化的关系型数据，并使用固定的模式（Schema）。它们提供强大的ACID（原子性、一致性、隔离性、持久性）事务支持，并支持复杂的查询和连接操作。

NoSQL数据库，如MongoDB和Cassandra，最适合处理非结构化的非关系型数据，并使用灵活的模式。它们能够为大量数据提供高度的可扩展性和性能，并经常在大数据和实时Web应用中使用。

选择SQL还是NoSQL取决于项目的具体用例和需求。如果您需要存储和查询具有复杂关系的结构化数据，则SQL数据库可能是更好的选择。如果您需要存储和查询大量的非结构化数据，并需要高度的可扩展性和性能，则NoSQL数据库可能是更好的选择。

通过以下链接了解更多关于SQL和NoSQL的内容：

- [SQL vs NoSQL: The Differences](https://www.sitepoint.com/sql-vs-nosql-differences/)
- [SQL vs NoSQL - When to Use Each](https://www.ibm.com/cloud/blog/sql-vs-nosql)

### NoSQL

NoSQL是一个集合数据项的表示，它可以使用键值存储、文档存储、宽列存储或图数据库。数据是非规范化的，通常在应用程序代码中执行连接操作。大多数NoSQL存储不具备真正的ACID事务支持，而是偏向于最终一致性。

BASE常用于描述NoSQL数据库的特性。与CAP定理相比，BASE选择了可用性（Availability）而不是一致性（Consistency）。

- **Basically Available**：系统保证可用性。
- **Soft State**：系统状态可能随着时间的推移而发生变化，即使没有输入。
- **Eventual
  Consistency**：系统将在一段时间内变得一致，前提是在此期间系统没有接收到输入。

通过以下链接了解更多关于NoSQL的内容：

- [Brief of NOSQL Patterns](http://horicky.blogspot.com/2009/11/nosql-patterns.html)
- [Introduction to NoSQL](https://www.youtube.com/watch?v=qI_g07C_Q5I)

#### 键值存储（Key-Value Store）

键值存储通常允许O(1)复杂度的读写操作，并且通常由内存或SSD支持。数据存储可以维护键的词典顺序，从而实现有效地检索键范围。键值存储允许将元数据与值一起存储。

键值存储提供高性能，通常用于简单的数据模型或快速变化的数据，例如内存缓存层。由于它们只提供有限的操作集，如果需要额外的操作，复杂性将转移到应用程序层。

通过以下链接了解更多关于键值存储的内容：

- [Key–value database](https://en.wikipedia.org/wiki/Key%E2%80%93value_database)
- [What are the disadvantages of using a key/value table?](https://stackoverflow.com/questions/4056093/what-are-the-disadvantages-of-using-a-key-value-table-over-nullable-columns-or)

#### 文档存储（Document Store）

文档存储是以文档（XML、JSON、二进制等）为中心的，其中一个文档存储了给定对象的所有信息。文档存储提供API或查询语言，以便根据文档本身的内部结构进行查询。需要注意的是，许多键值存储包含用于处理值的元数据的功能，使这两种存储类型之间的界限变得模糊。

基于底层实现，文档可以通过集合、标签、元数据或目录来组织。尽管文档可以组织或归类在一起，但文档可能具有完全不同的字段。

通过以下链接了解更多关于文档存储的内容：

- [Document-oriented database](https://en.wikipedia.org/wiki/Document-oriented_database)

#### 宽列存储（Wide Column Store）

宽列存储的基本数据单元是列（名称/值对）。列可以在列族中进行分组（类似于SQL表）。超级列族可以进一步组合列族。您可以通过行键独立访问每个列，并且具有相同行键的列形成一行。每个值包含用于版本控制和冲突解决的时间戳。

Google首次引入了Bigtable作为第一个宽列存储，它影响了Hadoop生态系统中经常使用的开源HBase，以及来自Facebook的Cassandra。像BigTable、HBase和Cassandra这样的存储将键维护在词典顺序中，从而实现有效地检索选择性键范围。

通过以下链接了解更多关于宽列存储的内容：

- [Bigtable architecture](https://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf)

#### 图数据库（Graph Databases）

在图数据库中，每个节点是一条记录，每个弧是两个节点之间的关系。图数据库被优化用于表示具有许多外键或多对多关系的复杂关系。

图数据库为具有复杂关系的数据模型（例如社交网络）提供高性能。它们相对较新，并且尚未广泛使用；因此可能更难找到开发工具和资源。许多图数据库只能通过REST
API访问。

通过以下链接了解更多关于图数据库的内容：

- [Graph database](https://en.wikipedia.org/wiki/Graph_database)
- [Introduction to NoSQL](https://www.youtube.com/watch?v=qI_g07C_Q5I)

### 关系型数据库管理系统（RDBMS）

像SQL这样的关系型数据库是一个以表格形式组织的数据项的集合。ACID是关系型数据库事务的一组属性。

- **原子性（Atomicity）**：每个事务要么全部执行成功，要么完全不执行。
- **一致性（Consistency）**：任何事务都将数据库从一个有效状态转换为另一个有效状态。
- **隔离性（Isolation）**：并发执行事务产生的结果与串行执行事务产生的结果相同。
- **持久性（Durability）**：一旦事务被提交，它将保持提交的状态。

有许多技术可以扩展关系型数据库：主从复制（master-slave
replication）、主主复制（master-master
replication）、联合（federation）、分片（sharding）、非规范化（denormalization）和SQL优化。

通过以下链接了解更多关于关系型数据库管理系统的内容：

- [Is there a good reason I see VARCHAR(255) used so often?](https://stackoverflow.com/questions/1217466/is-there-a-good-reason-i-see-varchar255-used-so-often-as-opposed-to-another-l)
- [How we optimized PostgreSQL queries 100x](https://towardsdatascience.com/how-we-optimized-postgresql-queries-100x-ff52555eabe?gi=13caf5bcf32e)
- [How do NULL values affect performance in a database search?](https://stackoverflow.com/questions/1017239/how-do-null-values-affect-performance-in-a-database-search)
- [Slow Query Log](https://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html)

#### 数据复制（Replication）

数据复制是将数据从一个数据库复制到另一个数据库的过程。复制用于增加数据库的可用性和可扩展性。有两种类型的复制：主从复制和主主复制。

**主从复制（Master-Slave Replication）：**

在主从复制中，主服务器用于读写操作，并将写操作复制到一个或多个从服务器，从服务器只用于读操作。从服务器还可以以类似树形的方式复制到其他从服务器。如果主服务器离线，系统可以继续以只读模式运行，直到将一个从服务器升级为主服务器或配置一个新的主服务器。

**主主复制（Master-Master Replication）：**

在主主复制中，两个主服务器都用于读写操作，并相互协调写操作。如果其中一个主服务器出现故障，系统可以继续进行读写操作。

#### 数据分片（Sharding）

数据分片是将数据分布在不同的数据库中，以便每个数据库只能管理数据的一个子集。以用户数据库为例，随着用户数量的增加，集群中添加更多的分片。

与联合（federation）的优点类似，数据分片可以减少读写流量、减少复制，并增加缓存命中率。索引大小也会减小，通常可以通过更快的查询来提高性能。如果一个分片出现故障，其他分片仍然可以继续工作，尽管您可能需要添加某种形式的复制以避免数据丢失。与联合类似，没有单个中央主服务器对写操作进行串行化，可以并行写入以提高吞吐量。

通过以下链接了解更多关于数据分片的内容：

- [The coming of the Shard](http://highscalability.com/blog/2009/8/6/an-unorthodox-approach-to-database-design-the-coming-of-the.html)
- [Shard (database architecture)](https://en.wikipedia.org/wiki/Shard_(database_architecture))

#### 联合（Federation）

联合（或功能分区）通过功能来拆分数据库。例如，不使用单个大型数据库，而是使用三个数据库：forums（论坛）、users（用户）和products（产品），从而减少每个数据库的读写流量，因此减少了复制延迟。较小的数据库意味着可以将更多的数据放入内存中，从而由于改进的缓存本地性而导致更多的缓存命中。由于没有单个中央主服务器对写操作进行串行化，您可以并行写入，从而增加了吞吐量。

#### 反规范化（Denormalization）

反规范化试图通过牺牲一些写入性能来改进读取性能。将数据的冗余副本写入多个表中，以避免昂贵的连接操作。一些关系型数据库管理系统（RDBMS）如PostgreSQL和Oracle支持物化视图（Materialized
Views），它们处理存储冗余信息的工作并保持冗余副本的一致性。

一旦数据通过联合（federation）和数据分片等技术变得分布式，管理跨数据中心的连接操作进一步增加了复杂性。反规范化可以绕过对这些复杂连接的需求。

通过以下链接了解更多关于反规范化的内容：

- [Denormalization](https://en.wikipedia.org/wiki/Denormalization)

#### SQL优化（SQL Tuning）

SQL优化是一个广泛的主题，已有许多书籍作为参考。对于模拟和发现瓶颈，进行基准测试和性能分析非常重要。

**基准测试（Benchmark）：**

使用诸如ab等工具模拟高负载情况。

**性能分析（Profile）：**

启用慢查询日志等工具来帮助跟踪性能问题。

基准测试和性能分析可能会指向以下优化方法：

- 索引优化
- 查询重写和优化
- 数据库配置调整
- 硬件升级
- 数据库缓存优化

通过以下链接了解更多关于SQL优化的内容：

- [Optimizing MySQL Queries](https://aiddroid.com/10-tips-optimizing-mysql-queries-dont-suck/)
- [How we optimized PostgreSQL queries 100x](https://towardsdatascience.com/how-we-optimized-postgresql-queries-100x-ff52555eabe?gi=13caf5bcf32e)

## 缓存（Caching）

缓存是将频繁访问的数据存储在临时存储位置（称为缓存）中，以便在不需要查询原始数据源的情况下快速检索数据。这可以通过减少对数据源的访问次数来提高应用程序的性能。

缓存策略有几种：

1. 提前刷新（Refresh
   Ahead）：在数据过期之前预先刷新缓存中的数据，以确保数据始终保持最新。
2. 写入后处理（Write-Behind）：先更新缓存，然后异步地将更新写回原始数据源，以提高写入性能。
3. 透写（Write-through）：更新数据时同时更新缓存和原始数据源，保持缓存和数据源的一致性。
4. 缓存旁路（Cache
   Aside）：读取时先查找缓存，如果缓存中没有，则从数据源获取数据并将其存储在缓存中，同时返回给客户端。

此外，可以在多个地方使用缓存，例如：

- 客户端缓存
- CDN缓存
- Web服务器缓存
- 数据库缓存
- 应用程序缓存

### 缓存更新策略（Caching Strategies）

由于缓存只能存储有限数量的数据，您需要确定哪种缓存更新策略最适合您的用例。

#### 提前刷新（Refresh-ahead）

在缓存中，您可以配置自动刷新任何在过期之前最近被访问过的缓存条目。

与读透写（read-through）相比，提前刷新可以减少延迟，前提是缓存能够准确预测未来可能需要的项目。

提前刷新的缺点：
如果不能准确预测未来可能需要的项目，则可能导致性能降低，不如没有使用提前刷新时的性能。

通过以下链接了解更多关于提前刷新的内容：

- [From cache to in-memory data grid](http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast)

#### 写入后处理（Write-behind）

在写入后处理中，应用程序执行以下操作：

- 在缓存中添加/更新条目。
- 异步地将条目写入数据存储，以提高写入性能。

写入后处理的缺点：

- 如果缓存在其内容写入数据存储之前发生故障，可能会导致数据丢失。
- 相对于缓存旁路（cache-aside）或透写（write-through），实现写入后处理更为复杂。

通过以下链接了解更多关于写入后处理的内容：

- [Scalability, availability, stability, patterns](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)

#### 透写（Write-through）

在透写中，应用程序将缓存用作主要数据存储，读取和写入数据，而缓存负责读取和写入数据库：

应用程序将条目添加/更新到缓存。 缓存同步地将条目写入数据存储。 返回结果。

应用程序代码：

```python
set_user(12345, {"foo":"bar"})
```

缓存代码：

```python
def set_user(user_id, values):
  user = db.query("UPDATE Users WHERE id = {0}", user_id, values)
  cache.set(user_id, user)
```

透写是一个总体较慢的操作，因为涉及到写入操作，但后续对刚刚写入的数据的读取速度很快。相对于读取数据而言，用户通常对更新数据的延迟更容忍。缓存中的数据不会过时。

缺点：

- 当由于故障或扩展而创建新节点时，新节点将不会缓存条目，直到条目在数据库中更新。缓存旁路（cache-aside）结合透写可以缓解这个问题。
- 大多数写入的数据可能永远不会被读取，可以通过设置存储时间（TTL）来最小化这种情况。

通过以下资源了解更多关于透写的内容：

- [Scalability, availability, stability, patterns](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)

#### 缓存旁路（Cache-aside）

在缓存旁路中，应用程序负责从存储中读取和写入数据，缓存不直接与存储交互。应用程序执行以下操作：

1. 查找缓存中的条目，可能导致缓存未命中。
2. 从数据库加载条目。
3. 将条目添加到缓存。
4. 返回条目。

```python
def get_user(self, user_id):
  user = cache.get("user.{0}", user_id)
  if user is None:
    user = db.query("SELECT * FROM users WHERE user_id = {0}", user_id)
      if user is not None:
        key = "user.{0}".format(user_id)
        cache.set(key, json.dumps(user))
  return user
```

通常在这种方式中使用
[Memcached](https://memcached.org/)。对于之后读取的数据，由于已添加到缓存中，速度很快。缓存旁路也被称为惰性加载。只缓存被请求的数据，避免了将未被请求的数据填充到缓存中。

通过以下链接了解更多关于缓存旁路的内容：

- [From cache to in-memory data grid](https://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast)

### 客户端缓存（Client Caching）

客户端缓存是一种将频繁访问的数据存储在客户端设备上而不是服务器上的做法。这种类型的缓存可以通过减少客户端向服务器请求数据的次数来提高应用程序的性能。

一个常见的客户端缓存示例是Web浏览器缓存频繁访问的网页和资源。当用户访问一个网页时，浏览器会将页面及其资源（例如图像、样式表和脚本）存储在浏览器的缓存中。如果用户再次访问相同的页面，浏览器可以从缓存中检索页面和其资源的副本，而不是从服务器请求它们，这可以减少页面的加载时间。

另一个客户端缓存的例子是应用程序级别的缓存。一些应用程序，比如移动应用程序，可以在客户端设备上缓存数据，以提高性能并减少需要通过网络传输的数据量。

客户端缓存有一些优点，比如减少服务器负载、更快的页面加载时间和减少网络流量。然而，它也有一些缺点，比如如果客户端缓存没有得到正确管理，可能会导致数据过期；另外，客户端设备的内存或磁盘空间可能会被消耗。

### CDN 缓存（CDN Caching）

内容交付网络（CDN）是一个分布式服务器网络， strategically placed
部署在世界各地的不同位置。CDN
的主要目的是通过将频繁访问的内容缓存在距离终端用户更近的服务器上，以提供具有高可用性和高性能的内容交付服务。

当用户请求使用 CDN 的网站上的内容时，CDN
首先会检查所请求的内容是否在附近的服务器缓存中。如果内容在缓存中找到，CDN
将从附近的服务器向用户提供该内容。如果内容不在缓存中，CDN
将从源服务器（内容的原始来源）请求内容，然后将其缓存到附近的服务器，以便未来的请求可以快速响应。

CDN
缓存可以通过减少数据传输距离、降低源服务器的负载以及实现内容更快地交付给终端用户，显著提高网站的性能和可用性。

### Web 服务器缓存（Web Server Caching）

反向代理和缓存，例如 Varnish，可以直接提供静态和动态内容。Web
服务器也可以缓存请求，无需与应用服务器联系即可返回响应。

### 数据库缓存（Database Caching）

数据库通常在默认配置中包含一定程度的缓存，这些缓存针对一般的使用情况进行了优化。对于特定的使用模式，调整这些设置可以进一步提高性能。

### 应用程序缓存（Application Caching）

在内存中的缓存，如Memcached和Redis，是应用程序和数据存储之间的键值存储。由于数据存储在RAM中，它比通常存储在磁盘上的数据库快得多。RAM的容量比磁盘有限，因此缓存失效算法（如最近最少使用LRU）可以帮助使“冷”条目失效并保持“热”数据在RAM中。

Redis具有以下附加功能：

- 持久性选项
- 内置数据结构，如有序集合和列表

通常，应尽量避免基于文件的缓存，因为它会使克隆和自动扩展变得更加困难。

访问以下链接以了解更多信息：

- [Intro to Application Caching](https://github.com/donnemartin/system-design-primer#application-caching)

## 异步处理（Asynchronism）

异步工作流可以帮助减少昂贵操作的请求时间，否则这些操作将在线性执行中完成。它们还可以通过提前进行耗时工作来提供帮助，例如定期聚合数据。

通过以下链接了解更多关于异步处理的内容：

- [Asynchronous Thinking for Microservice System Design](https://www.datamachines.io/blog/asynchronous-thinking-for-microservice-system-design)
- [Patterns for microservices - Sync vs Async](https://medium.com/inspiredbrilliance/patterns-for-microservices-e57a2d71ff9e)
- [It’s all a numbers game](https://www.youtube.com/watch?v=1KRYH75wgy4)
- [Applying back pressure when overloaded](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html)
- [Little’s law](https://en.wikipedia.org/wiki/Little%27s_law)
- [What is the difference between a message queue and a task queue?](https://www.quora.com/What-is-the-difference-between-a-message-queue-and-a-task-queue-Why-would-a-task-queue-require-a-message-broker-like-RabbitMQ-Redis-Celery-or-IronMQ-to-function)

### 背压（Back Pressure）

当队列开始显著增长时，队列的大小可能会超过内存限制，导致缓存未命中、磁盘读取，甚至性能进一步下降。背压（[Back pressure](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html)）可以通过限制队列大小来帮助维持高吞吐率和对已经在队列中的作业提供良好的响应时间。一旦队列填满，客户端会收到"服务器繁忙"或HTTP
503状态码，并被建议稍后再试。客户端可以选择在稍后的时间重新尝试请求，也许采用[指数退避](https://en.wikipedia.org/wiki/Exponential_backoff)的方式。

### 任务队列（Task Queues）

任务队列接收任务及其相关数据，执行这些任务，然后将结果交付。它们支持任务调度，并可用于在后台运行计算密集型作业。

[Celery](https://docs.celeryproject.org/en/stable/)
是一个支持任务调度的任务队列，主要支持 Python。

要了解更多信息，请访问以下链接：

- [Celery - Distributed Task Queue](https://docs.celeryq.dev/en/stable/)

### 消息队列（Message Queues）

消息队列接收、保存并传递消息。如果某个操作在实时执行过程中过慢，可以使用消息队列，并按照以下工作流程进行操作：

1. 应用程序将作业发布到队列，并通知用户作业的状态。
2. 工作进程从队列中获取作业，处理它，并发送作业完成的信号。
3. 用户不会被阻塞，作业在后台进行处理。在此期间，客户端可以选择进行少量处理，以使任务看似已经完成。例如，如果发布一条推文，推文可能会立即显示在您的时间线上，但是在推文实际传递给所有关注者之前可能需要一些时间。

以下是一些常见的消息队列实现：

- [Redis](https://redis.io/) 是一个简单的消息代理，但可能会丢失消息。
- [RabbitMQ](https://www.rabbitmq.com/) 是一个流行的消息队列，但需要适应 'AMQP'
  协议并管理自己的节点。
- [AWS SQS](https://aws.amazon.com/sqs/) 是托管的消息队列，但可能具有较高的延迟并且可能会导致消息被重复传递。
- [Apache Kafka](https://kafka.apache.org/) 是一个分布式事件存储和流处理平台。

要了解更多信息，请访问以下链接：

- [What is Redis?](https://redis.io/)
- [RabbitMQ in Message Queues](https://www.rabbitmq.com/)
- [Overview of Amazon SQS](https://aws.amazon.com/sqs/)
- [Apache Kafka](https://kafka.apache.org/)
- [RabbitMQ for beginners](https://www.cloudamqp.com/blog/part1-rabbitmq-for-beginners-what-is-rabbitmq.html)

## 幂等操作（Idempotent Operations）

幂等操作是指可以多次应用而不会改变结果的操作。换句话说，如果一个操作是幂等的，那么无论执行一次还是多次，其效果都是相同的。

理解幂等操作的好处也很重要，特别是在使用消息队列或任务队列时，这些队列不能保证仅处理一次。许多队列系统保证至少一次消息传递或处理。这些系统在某些方面并不完全同步，例如跨地理区域，这简化了其实现或设计的某些方面。将任务队列执行的操作设计为幂等操作允许我们使用接受了这种设计折衷的队列系统。

要了解更多信息，请访问以下链接：

- [What is an idempotent operation?](https://stackoverflow.com/questions/1077412/what-is-an-idempotent-operation)
- [Overview of Idempotent Operation](https://www.baeldung.com/cs/idempotent-operations)

## 通信（Communication）

网络协议是当今系统的关键组成部分，因为没有一个系统可以孤立存在 -
它们都需要彼此通信。您应该了解网络协议，如HTTP、TCP、UDP等。此外，还应该学习关于RPC、REST、GraphQL和gRPC等架构风格。

### HTTP（超文本传输协议）

HTTP是一种在客户端和服务器之间对数据进行编码和传输的方法。它是一种请求/响应协议：客户端发出请求，服务器则发出包含有关请求的相关内容和完成状态信息的响应。HTTP是自包含的，允许请求和响应通过许多中间路由器和服务器流动，这些中间设备可能执行负载平衡、缓存、加密和压缩等操作。

一个基本的HTTP请求由一个动词（方法）和一个资源（端点）组成。下面是常见的HTTP动词：

| 动词   | 描述               | 幂等性 | 安全 | 可缓存                   |
| ------ | ------------------ | ------ | ---- | ------------------------ |
| GET    | 读取资源           | 是     | 是   | 是                       |
| POST   | 创建资源或触发操作 | 否     | 否   | 是，如果响应包含新鲜信息 |
| PUT    | 创建或替换资源     | 是     | 否   | 否                       |
| PATCH  | 部分更新资源       | 否     | 否   | 是，如果响应包含新鲜信息 |
| DELETE | 删除资源           | 是     | 否   | 否                       |

HTTP是一个应用层协议，依赖于诸如TCP和UDP等更底层的协议进行通信。

要了解更多信息，请访问以下链接：

- [Everything you need to know about HTTP](https://cs.fyi/guide/http-in-depth)
- [What Is HTTP?](https://www.nginx.com/resources/glossary/http/)
- [What is the difference between HTTP protocol and TCP protocol?](https://www.quora.com/What-is-the-difference-between-HTTP-protocol-and-TCP-protocol)

### TCP（传输控制协议）

TCP是一种在IP网络上建立连接的面向连接的协议。连接的建立和终止使用握手进行。通过以下方式，所有发送的数据包都保证以原始顺序、无损坏地到达目的地：

1. 每个数据包都有序列号和校验和字段。
2. 使用确认数据包和自动重传机制。

如果发送方没有收到正确的响应，将重新发送数据包。如果多次超时，连接将被关闭。TCP还实现了流控制和拥塞控制。

这些保证导致了延迟，并且通常导致比UDP更低效的传输。

为了确保高吞吐量，Web服务器可以保持大量的TCP连接打开，这会导致内存使用量增加。在Web服务器线程和memcached服务器之间有大量打开的连接可能会显得昂贵。连接池可以帮助解决这个问题，并且在适用的情况下可以切换到UDP。

TCP适用于需要高可靠性但时间要求不那么严格的应用程序。一些例子包括Web服务器、数据库信息、SMTP、FTP和SSH。

在以下情况下使用TCP而不是UDP：

1. 您需要确保所有数据完整到达。
2. 您希望自动地最佳利用网络吞吐量。

要了解更多信息，请访问以下链接：

- [What Is TCP?](https://github.com/donnemartin/system-design-primer#TCP)
- [What is the difference between HTTP protocol and TCP protocol?](https://www.quora.com/What-is-the-difference-between-HTTP-protocol-and-TCP-protocol)
- [Networking for game programming](http://gafferongames.com/networking-for-game-programmers/udp-vs-tcp/)
- [Key differences between TCP and UDP protocols](http://www.cyberciti.biz/faq/key-differences-between-tcp-and-udp-protocols/)
- [Difference between TCP and UDP](http://stackoverflow.com/questions/5970383/difference-between-tcp-and-udp)
- [Transmission control protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
- [User datagram protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol)
- [Scaling memcache at Facebook](http://www.cs.bu.edu/~jappavoo/jappavoo.github.com/451/papers/memcache-fb.pdf)

### UDP（用户数据报协议）

UDP是一种无连接的协议。数据报（类似于数据包）只在数据报级别上得到保证。数据报可能以无序或不完整的方式到达目的地。UDP不支持拥塞控制。由于没有TCP所提供的保证，UDP通常更高效。

UDP可以进行广播，将数据报发送到子网上的所有设备。这在DHCP中很有用，因为客户端尚未接收到IP地址，因此无法使用TCP在没有IP地址的情况下进行流式传输。

UDP的可靠性较低，但在实时应用中效果良好，例如VoIP、视频聊天、流媒体和实时多人游戏。

在以下情况下使用UDP而不是TCP：

1. 您需要最低的延迟。
2. 晚到的数据比丢失数据更糟糕。
3. 您希望实现自己的错误纠正。

要了解更多信息，请访问以下链接：

- [Networking for game programming](http://gafferongames.com/networking-for-game-programmers/udp-vs-tcp/)
- [Key differences between TCP and UDP protocols](http://www.cyberciti.biz/faq/key-differences-between-tcp-and-udp-protocols/)
- [Difference between TCP and UDP](http://stackoverflow.com/questions/5970383/difference-between-tcp-and-udp)
- [Transmission control protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
- [User datagram protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol)
- [Scaling memcache at Facebook](http://www.cs.bu.edu/~jappavoo/jappavoo.github.com/451/papers/memcache-fb.pdf)

### RPC（远程过程调用）

在RPC中，客户端会导致一个过程在不同的地址空间中执行，通常是在远程服务器上。该过程被编码成类似于本地过程调用的方式，将与服务器通信的细节从客户端程序中抽象出来。远程调用通常比本地调用更慢且不太可靠，因此将RPC调用与本地调用区分开来会有所帮助。流行的RPC框架包括Protobuf、Thrift和Avro。

RPC是一种请求-响应协议：

1. 客户端程序 - 调用客户端存根过程。参数会像本地过程调用一样被推送到堆栈上。
2. 客户端存根过程 - 将过程ID和参数封装（打包）成一个请求消息。
3. 客户端通信模块 - 操作系统将消息从客户端发送到服务器。
4. 服务器通信模块 - 操作系统将传入的数据包传递给服务器存根过程。
5. 服务器存根过程 - 解包结果，调用与过程ID匹配的服务器过程，并传递给定的参数。
6. 服务器响应按照相反的顺序重复上述步骤。

示例RPC调用：

```http
GET /someoperation?data=anId

POST /anotheroperation
{
  "data":"anId";
  "anotherdata": "another value"
}
```

RPC专注于暴露行为。由于RPC通常用于内部通信的性能原因，因此可以手动创建本地调用以更好地适应您的用例。

RPC的缺点：

1. RPC客户端与服务实现紧密耦合。
2. 每个新操作或用例都必须定义新的API。
3. 可能难以调试RPC。
4. 可能无法直接利用现有技术。例如，可能需要额外的工作来确保RPC调用在缓存服务器（如Squid）上得到适当的缓存。

要了解更多信息，请访问以下链接：

- [What Is RPC?](https://github.com/donnemartin/system-design-primer#RPC)

### REST（Representational State Transfer）

REST是一种强制实施客户端/服务器模型的架构风格，其中客户端操作由服务器管理的一组资源。服务器提供资源的表示和操作，可以操作资源或获取新的资源表示。所有通信必须是无状态的且可缓存的。

RESTful接口具有以下四个特性：

1. 确定资源（在HTTP中使用URI）- 无论执行任何操作，使用相同的URI。
2. 使用表示更改（在HTTP中使用动词）- 使用动词、头部和主体。
3. 自描述错误消息（在HTTP中使用状态响应）- 使用状态码，不要重新发明轮子。
4. HATEOAS（在HTTP中使用HTML界面）- 您的Web服务应该在浏览器中完全可访问。

REST专注于暴露数据。它最小化了客户端/服务器之间的耦合，通常用于公共的HTTP
API。REST使用更通用、统一的方法来通过URI公开资源，通过头部来表示资源，通过GET、POST、PUT、DELETE和PATCH等动词来表示操作。由于无状态性质，REST非常适合水平扩展和分区。

要了解更多信息，请访问以下链接：

- [What Is REST?](https://github.com/donnemartin/system-design-primer#REST)
- [What are the drawbacks of using RESTful APIs?](https://www.quora.com/What-are-the-drawbacks-of-using-RESTful-APIs)

### gRPC

gRPC是一个高性能的开源框架，用于构建远程过程调用（RPC）API。它基于Protocol
Buffers数据序列化格式，并支持多种编程语言，包括C＃、Java和Python等。

要了解更多信息，请访问以下链接：

- [What Is gRPC?](https://www.wallarm.com/what/the-concept-of-grpc)

### GraphQL

GraphQL是一种用于构建API的查询语言和运行时。它允许客户端定义他们需要的数据结构，而服务器将恰好返回这些数据。这与传统的REST
API形成对比，传统REST
API会暴露一组固定的端点，而客户端必须按照返回的数据进行处理。

要了解更多信息，请访问以下链接：

- [GraphQL Server](https://www.howtographql.com/basics/3-big-picture/)
- [What is GraphQL?](https://www.redhat.com/en/topics/api/what-is-graphql)

## 性能反模式

系统设计中的性能反模式是指常见的错误或次优实践，可能导致系统性能下降。这些模式可能出现在系统的不同层次，并可能由多种因素引起，比如设计不佳、缺乏优化或对工作负载的理解不足。

以下是一些性能反模式的例子：

1. N+1
   查询：当系统需要检索相关数据时，进行多次数据库查询，而不是使用单个查询检索所有必要的数据。
2. 聊天式接口：当系统向外部服务或API发出过多的小型频繁请求时，而不是进行较少但更大的请求。
3. 无限数据：当系统检索或处理比任务所需更多的数据时，会导致资源使用增加和性能降低。
4. 低效算法：当系统使用不适合当前任务的算法时，会导致资源使用增加和性能降低。

您可以从以下链接中了解更多信息：

- [Performance anti-patterns for cloud applications](https://learn.microsoft.com/en-us/azure/architecture/antipatterns/)

### 数据库繁忙

在系统设计中，繁忙数据库指的是处理大量请求或事务的数据库。这可能发生在系统面临高流量时，或者当数据库未能针对其处理的工作负载进行适当优化时。这会导致性能下降、资源利用增加、死锁和争用，以及数据不一致性。为了解决繁忙数据库问题，可以采取一些方法，例如横向扩展、优化模式、缓存和索引。

要了解更多信息，请访问以下链接：

- [Busy Database anti-pattern](https://learn.microsoft.com/en-us/azure/architecture/antipatterns/busy-database/)

### 前端繁忙

在大量后台线程上执行异步工作可能会使其他并发前台任务无法获取足够的资源，从而导致响应时间下降到不可接受的水平。

资源密集型任务可能会增加用户请求的响应时间，并导致高延迟。改善响应时间的一种方法是将资源密集型任务卸载到单独的线程中。这种方法可以让应用程序保持响应性，同时在后台进行处理。然而，在后台线程上运行的任务仍然会消耗资源。如果任务太多，它们可能会使正在处理请求的线程无法获取资源。

这个问题通常发生在将应用程序开发为单块代码的情况下，所有业务逻辑都合并到与表示层共享的单个层中。

要了解更多关于这个问题以及如何解决这个模式的信息，请访问以下链接：

- [Busy Front End anti-pattern](https://learn.microsoft.com/en-us/azure/architecture/antipatterns/busy-front-end/)

### 大量 I/O

大量I/O请求的累积效应可能对性能和响应能力产生显著影响。

与计算任务相比，网络调用和其他I/O操作本质上较慢。每个I/O请求通常都具有显着的开销，大量I/O操作的累积效应可能会使系统变慢。以下是一些导致I/O过于频繁的常见原因：

1. 将数据库中的单个记录作为独立请求进行读写。
2. 将单个逻辑操作实现为一系列HTTP请求。
3. 对磁盘上的文件进行读写。

要了解更多信息，请访问以下链接：

- [Chatty I/O anti-pattern](https://learn.microsoft.com/en-us/azure/architecture/antipatterns/chatty-io/)

### 冗余获取

在系统设计中，冗余获取（Extraneous
Fetching）指的是检索比特定任务或操作所需更多的数据。这可能发生在系统未针对特定工作负载进行优化或系统未能正确设计以处理数据需求时。

冗余获取可能导致以下问题：

1. 性能下降
2. 增加资源使用
3. 增加网络流量
4. 用户体验差

请访问以下链接以了解更多信息：

- [Extraneous Fetching anti-pattern](https://learn.microsoft.com/en-us/azure/architecture/antipatterns/extraneous-fetching/)

### 不当实例化

在系统设计中，不当实例化（Improper
Instantiation）指的是创建不必要的对象、类或服务实例，这可能导致性能和可扩展性问题。这可能发生在系统未经适当设计、代码编写不高效或代码未针对特定用例进行优化时。

请从以下链接中了解更多信息：

- [Improper Instantiation anti-pattern](https://learn.microsoft.com/en-us/azure/architecture/antipatterns/improper-instantiation/)

### 单块持久化

单块持久化（Monolithic
Persistence）是指使用单一的、庞大的数据库来存储应用程序或系统的所有数据。这种方法适用于简单的小规模系统，但随着系统的增长和演进，它可能成为一个瓶颈，导致可扩展性差、灵活性有限和复杂性增加。为了解决这些限制，可以采取一些方法，如微服务、分片和NoSQL数据库。

要了解更多信息，请访问以下链接：

- [Monolithic Persistence anti-pattern](https://learn.microsoft.com/en-us/azure/architecture/antipatterns/monolithic-persistence/)

### 无缓存

"无缓存"反模式发生在处理许多并发请求的云应用程序中，它反复获取相同的数据。这可能降低性能和可扩展性。

当数据没有被缓存时，可能会导致一些不良行为，包括：

1. 反复从访问开销较大的资源获取相同的信息，如I/O开销或延迟。
2. 反复为多个请求构建相同的对象或数据结构。
3. 过度调用远程服务，该服务有服务配额并在客户端超过某个限制时进行限流。

这些问题可能导致响应时间变慢、数据存储中的争用增加以及可扩展性降低。

要了解更多信息，请访问以下链接：

- [No Caching anti-pattern](https://learn.microsoft.com/en-us/azure/architecture/antipatterns/no-caching/)

### 近邻干扰

"近邻干扰"指的是系统中的一个或多个组件使用不成比例的共享资源，导致其他组件出现资源争用和性能降低的情况。这可能发生在系统未经适当设计或配置以处理工作负载时，或者当某个组件的行为出现异常时。

近邻干扰的示例情况包括：

1. 共享服务器上的一个用户占用大量CPU或内存，导致同一服务器上其他用户性能降低。
2. 共享服务器上的一个进程使用大量I/O，导致其他进程经历缓慢的I/O和增加的延迟。
3. 一个应用程序消耗大量网络带宽，导致其他应用程序吞吐量减少。

了解更多信息，请参考以下链接：

- [Noisy Neighbor anti-pattern](https://learn.microsoft.com/en-us/azure/architecture/antipatterns/noisy-neighbor/noisy-neighbor)

### 重试风暴

"重试风暴"是指在短时间内触发大量重试，导致流量和资源使用显著增加的情况。这可能发生在系统未经适当设计以处理故障时，或者某个组件的行为出现异常。这可能导致性能下降、资源利用增加、网络流量增加和用户体验差。

为了解决重试风暴问题，可以采取以下方法：

1. 指数退避（Exponential
   backoff）：在重试时采用指数退避策略，逐渐增加重试间隔，避免在短时间内频繁重试。
2. 断路器模式（Circuit
   breaking）：当某个组件出现故障时，及时断开对其的请求，避免持续尝试访问导致重试风暴。
3. 监控和报警（Monitoring and
   alerting）：实时监控系统中的重试情况，及时发现重试风暴的发生，并采取相应措施。

要了解更多信息，请访问以下链接：

- [Retry Storm anti-pattern](https://learn.microsoft.com/en-us/azure/architecture/antipatterns/retry-storm/s)
- [How To Avoid Retry Storms In Distributed Systems](https://faun.pub/how-to-avoid-retry-storms-in-distributed-systems-91bf34f43c7f)

### 同步I/O

同步I/O（Synchronous
I/O）是指在I/O操作完成时阻塞调用线程，这可能降低性能并影响垂直可扩展性。

同步I/O操作会在I/O完成时阻塞调用线程。在此期间，调用线程进入等待状态，无法执行有用的工作，从而浪费了处理资源。

常见的I/O示例包括：

- 从数据库或任何类型的持久性存储中检索或持久化数据。
- 向Web服务发送请求。
- 向队列中发布消息或从队列中检索消息。
- 向本地文件写入或从本地文件读取数据。

这种反模式通常发生的原因包括：

- 它似乎是执行操作最直观的方法。
- 应用程序需要对请求的响应。
- 应用程序使用的库仅提供了同步I/O的方法。
- 外部库在内部执行同步I/O操作。单个同步I/O调用可能会阻塞整个调用链。

了解更多信息，请参考以下链接：

- [What is Synchronous I/O anti-pattern?](https://learn.microsoft.com/en-us/azure/architecture/antipatterns/synchronous-io/)

## 监控

在云中运行的分布式应用程序和服务本质上是复杂的软件，包含许多组成部分。在生产环境中，能够追踪用户使用系统的方式、跟踪资源利用情况以及全面监控系统的健康和性能非常重要。您可以利用这些信息作为诊断辅助工具来检测和纠正问题，同时也可以帮助发现潜在问题并防止其发生。

要了解更多信息，请访问以下链接：

- [Monitoring and Diagnostics Guidance](https://learn.microsoft.com/en-us/azure/architecture/best-practices/monitoring)

### 健康监控

健康监控的目的是生成系统当前状态的快照，以便您可以验证系统的所有组件是否按预期运行。一个系统在运行并能够处理请求时被认为是健康的。

要了解更多信息，请访问以下链接：

- [Health Monitoring of a System](https://learn.microsoft.com/en-us/azure/architecture/best-practices/monitoring#health-monitoring)

### 可用性监控

一个真正健康的系统要求组成系统的组件和子系统是可用的。可用性监控与健康监控密切相关。然而，健康监控提供了系统当前健康状况的即时视图，而可用性监控则关注跟踪系统及其组件的可用性，以生成有关系统正常运行时间的统计信息。

要了解更多信息，请访问以下链接：

- [Availability Monitoring](https://learn.microsoft.com/en-us/azure/architecture/best-practices/monitoring#availability-monitoring)

### 压力监控

随着系统承受越来越大的压力（通过增加用户数量），用户访问的数据集大小增长，一个或多个组件发生故障的可能性也变得更大。组件故障通常会伴随着性能下降。如果您能够检测到这种性能下降，您可以采取积极的措施来解决问题。

要了解更多信息，请访问以下链接：

- [Performance Monitoring](https://learn.microsoft.com/en-us/azure/architecture/best-practices/monitoring#performance-monitoring)

### 安全监控

包含敏感数据的所有商业系统必须实施安全结构。安全机制的复杂性通常取决于数据的敏感性。在需要用户进行身份验证的系统中，您应该记录：

- 所有登录尝试，无论成功与否。
- 经过身份验证的用户执行的所有操作，以及访问的所有资源的详细信息。
- 用户结束会话和注销的时间。

监控可能有助于检测系统遭受的攻击。例如，大量失败的登录尝试可能表明正在进行暴力攻击。请求的意外激增可能是分布式拒绝服务（DDoS）攻击的结果。您必须准备好监控所有对所有资源的请求，无论这些请求的来源是什么。如果系统存在登录漏洞，则可能会无意中将资源暴露给外部世界，而不需要用户实际登录。

要了解更多信息，请访问以下链接：

- [Security Monitoring](https://learn.microsoft.com/en-us/azure/architecture/best-practices/monitoring#security-monitoring)

### 使用监控

使用监控跟踪应用程序的特性和组件的使用情况。运营人员可以利用收集到的数据来：

1. 确定哪些功能被广泛使用，并确定系统中可能存在的热点。高流量的元素可能会受益于功能分区，甚至复制以更均匀地分散负载。运营人员还可以利用此信息确定哪些功能很少被使用，可能在系统的未来版本中作为淘汰或替换的候选项。
2. 获取系统在正常使用下的运行事件信息。例如，在电子商务网站中，您可以记录有关交易数量和负责这些交易的客户数量的统计信息。随着客户数量的增长，这些信息可用于容量规划。
3. 探测（可能间接地）用户对系统性能或功能的满意程度。例如，如果电子商务系统中有大量客户经常放弃购物车，这可能是结账功能存在问题的原因。
4. 生成计费信息。商业应用程序或多租户服务可能会根据用户使用的资源向客户收费。
5. 执行配额限制。在多租户系统中，如果用户在指定的时间段内超过了他们支付的处理时间或资源使用配额，他们的访问可能会受到限制或处理速度可能会被限制。

要了解更多信息，请访问以下链接：

- [Usage Monitoring](https://learn.microsoft.com/en-us/azure/architecture/best-practices/monitoring#usage-monitoring)

### 仪器化

仪器化（Instrumentation）是监控过程的关键部分。只有在首先捕获了能够支持您做出这些决策的数据后，您才能对系统的性能和健康做出有意义的决策。通过使用仪器化收集的信息应足以让您评估性能、诊断问题并做出决策，而无需登录到远程生产服务器手动执行跟踪（和调试）操作。仪器化数据通常包括写入跟踪日志的指标和信息。

要了解更多信息，请访问以下链接：

- [Instrumenting an application](https://learn.microsoft.com/en-us/azure/architecture/best-practices/monitoring#instrumenting-an-application)

### 可视化数据和引发警报

任何监控系统的一个重要方面是能够以一种使运营人员能够快速发现任何趋势或问题的方式呈现数据。同时，快速通知运营人员发生了可能需要关注的重要事件也是非常重要的。

要了解更多信息，请访问以下链接：
[可视化数据和引发警报](https://learn.microsoft.com/zh-cn/azure/architecture/best-practices/monitoring#visualizing-data-and-raising-alerts)

## 云设计模式

云设计模式是构建在云平台上运行的系统时遇到的常见问题的解决方案。这些模式提供了一种设计和实施系统的方法，可以充分利用云的独特特性，如可扩展性、弹性和按使用量计费等。一些常见的云设计模式包括可扩展性、弹性、容错性、微服务、无服务器架构、数据管理、前端和后端分离以及混合云。

> 本节中介绍的设计模式各有不同的重要性。 您不需要掌握其中所有的模式。
> 只需简单了解每个模式，这将让您对设计可扩展系统有一些见解。

要了解更多信息，请访问以下链接：

- [云设计模式](https://learn.microsoft.com/zh-cn/azure/architecture/patterns/)

### 消息传送模式

消息传递是一种模式，允许不同组件或系统之间通过使用消息队列、消息代理和事件总线等消息传递技术进行通信和协调。该模式允许发送者和接收者解耦，并可用于构建可扩展和灵活的系统。

要了解更多信息，请访问以下链接：
[消息传送模式](https://learn.microsoft.com/zh-cn/azure/architecture/patterns/category/messaging)

### 数据管理模式

数据管理是云应用的关键要素，它影响大部分质量属性。数据通常由于性能、可扩展性或可用性等原因，托管在不同的位置和多个服务器上，这可能带来一系列挑战。例如，必须保持数据一致性，并且数据通常需要在不同位置进行同步。

要了解更多信息，请访问以下链接：
[数据管理模式](https://learn.microsoft.com/zh-cn/azure/architecture/patterns/category/data-management)

### 设计和实现模式

良好的设计包括组件设计和部署的一致性和协调性，可维护性以简化管理和开发，以及可重用性，使组件和子系统能够在其他应用程序和场景中使用。在设计和实施阶段做出的决策对云托管应用程序和服务的质量和总拥有成本有着巨大的影响。

要了解更多信息，请访问以下链接：

- [设计和实现模式](https://learn.microsoft.com/zh-cn/azure/architecture/patterns/category/design-implementation)

### 可靠性模式

这些模式提供了一种设计和实现系统的方式，可以抵御故障、保持高性能水平，并能快速从干扰中恢复。一些常见的可靠性模式包括故障切换（Failover）、断路器（Circuit
Breaker）、重试（Retry）、船体隔离（Bulkhead）、背压（Back
pressure）、旁路缓存（Cache-Aside）、幂等操作（Idempotent
Operations）和健康端点监视（Health Endpoint Monitoring）。

要了解更多信息，请访问以下链接：

- [可靠性模式](https://learn.microsoft.com/zh-cn/azure/architecture/framework/resiliency/reliability-patterns)
