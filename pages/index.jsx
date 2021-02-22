import Layout from "../components/layout/index.jsx";

export default function Home({ allPostsData }) {
  console.log(allPostsData);
  return (
    <Layout>
      <div>
        <section>
          {`<h1 id="moment、dayjs、date-fns-时间
日期库比较">moment、dayjs、date-fns 时间日期库比较
</h1>\n' +
      '<p><a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fgithub.com%2Fmoment%2Fmoment%2F">moment</a>、<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fgithub.com%2Fiamkun%2Fdayjs">dayjs</a>、<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fgithub.com%2Fdate-fns%2Fdate-fns">date-fns</a> 是三个 
较为广泛使用的时间库。</p>\n' +
      '<h2 id="安装">安装</h2>\n' +
      '<p>三个库的安装分别如下：</p>\n' +
      '<pre><code class="language-powershell">npm 
<span class="hljs-keyword">install</span> moment\n' +
      'npm <span class="hljs-keyword">install</span> dayjs\n' +
      'npm <span class="hljs-keyword">install</span> date-fns\n' +
      '</code></pre>\n' +
      '<p>在页面引入：</p>\n' +
      '<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;/node_modules/moment/min/moment.min.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n' +
      '<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;/node_modules/dayjs/dayjs.min.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n' +
      '<span class="hljs-comment">&lt;!-- date-fns 不支持全局引入 --&gt;</span>\n' +
      '</code></pre>\n' +
      '<h2 id="转换">转换</h2>\n' +
      '<p>moment:</p>\n' +
      '<pre><code class="language-javascript">moment(); <span class="hljs-regexp">//</span> 当前时间
\n' +
      'moment(new Date()); <span class="hljs-regexp">//</span> 根据Date对象创建\n' +
      'moment(<span class="hljs-string">&quot;2018-07-04 15:16:45.869&quot;</span>); <span class="hljs-regexp">//</span> 根据字符串创建\n' +
      'moment(<span class="hljs-string">&quot;2018-07-04 15:16:45.869&quot;</span>, <span class="hljs-string">&quot;YYYY-MM-DD HH:mm:ss.SSS&quot;</span>); <span class="hljs-regexp">//</span> 根据字符 
串创建(推荐)\n' +
      'moment(<span class="hljs-string">&quot;2018-07-04T07:16:45.869Z&quot;</span>); <span class="hljs-regexp">//</span> 根据JSON格式创建\n' +       
      'moment(<span class="hljs-number">1530688605869</span>); <span class="hljs-regexp">//</span>  
根据毫秒创建\n' +
      '</code></pre>\n' +
      '<p>dayjs:</p>\n' +
      '<pre><code class="language-javascript">dayjs(); <span class="hljs-regexp">//</span> 当前时间\n' +
      'dayjs(new Date()); <span class="hljs-regexp">//</span> 根据Date对象创建\n' +
      'dayjs(<span class="hljs-string">&quot;2018-07-04 15:16:45.869&quot;</span>); <span class="hljs-regexp">//</span> 根据字符串创建\n' +
      'dayjs(<span class="hljs-string">&quot;2018-07-04T07:16:45.869Z&quot;</span>); <span class="hljs-regexp">//</span> 根据JSON格式创建\n' +        
      'dayjs(<span class="hljs-number">1530688605869</span>); <span class="hljs-regexp">//</span> 根
据毫秒创建\n' +
      '</code></pre>\n' +
      '<p>date-fns:</p>\n' +
      '<pre><code class="language-javascript">import { <span class="hljs-built_in">parse</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;date-fns&quot;</span>;\n' +    
      '\n' +
      '<span class="hljs-built_in">parse</span>(new Date()); <span class="hljs-comment">// 根据Date 
对象创建</span>\n' +
      '<span class="hljs-built_in">parse</span>(<span class="hljs-string">&quot;2018-07-04 15:16:45.869&quot;</span>); <span class="hljs-comment">//  
根据字符串创建</span>\n' +
      '<span class="hljs-built_in">parse</span>(<span class="hljs-string">&quot;2018-07-04T07:16:45.869Z&quot;</span>); <span class="hljs-comment">// 
根据JSON格式创建</span>\n' +
      '<span class="hljs-built_in">parse</span>(<span class="hljs-number">1530688605869</span>); <span class="hljs-comment">// 根据毫秒创建</span>\n' 
+
      '</code></pre>\n' +
      '<h2 id="基本操作">基本操作</h2>\n' +       
      '<p>moment:</p>\n' +
      '<pre><code class="language-javascript"><span class="hljs-selector-tag">moment</span>()<span class="hljs-selector-class">.add</span>(<span class="hljs-number">7</span>, <span class="hljs-string">&quot;day&quot;</span>); <span class="hljs-comment">// 增大7天</span>\n' +
      '<span class="hljs-selector-tag">moment</span>()<span class="hljs-selector-class">.subtract</span>(<span class="hljs-number">7</span>, <span class="hljs-string">&quot;year&quot;</span>); <span class="hljs-comment">// 减小7年</span>\n' +        
      '<span class="hljs-selector-tag">moment</span>()<span class="hljs-selector-class">.startOf</span>(<span class="hljs-string">&quot;week&quot;</span>); <span class="hljs-comment">// 当前的星期一</span>\n' +
      '<span class="hljs-selector-tag">moment</span>()<span class="hljs-selector-class">.endOf</span>(<span class="hljs-string">&quot;month&quot;</span>); <span class="hljs-comment">// 当前的月末</span>\n' +
      '</code></pre>\n' +
      '<p>dayjs:</p>\n' +
      '<pre><code class="language-javascript"><span class="hljs-selector-tag">dayjs</span>()<span class="hljs-selector-class">.add</span>(<span class="hljs-number">7</span>, <span class="hljs-string">&quot;day&quot;</span>); <span class="hljs-comment">// 增大7天</span>\n' +
      '<span class="hljs-selector-tag">dayjs</span>()<span class="hljs-selector-class">.subtract</span>(<span class="hljs-number">7</span>, <span class="hljs-string">&quot;year&quot;</span>); <span class="hljs-comment">// 减小7年</span>\n' +
      '<span class="hljs-selector-tag">dayjs</span>()<span class="hljs-selector-class">.startOf</span>(<span class="hljs-string">&quot;week&quot;</span>); <span class="hljs-comment">// 当前的星期一</span>\n' +
      '<span class="hljs-selector-tag">dayjs</span>()<span class="hljs-selector-class">.endOf</span>(<span class="hljs-string">&quot;month&quot;</span>); <span class="hljs-comment">// 当前的月末</span>\n' +
      '</code></pre>\n' +
      '<p>date-fns:</p>\n' +
      '<pre><code class="language-javascript">import { parse, addDays, subYears, startOfWeek, endOfMonth } from <span class="hljs-string">&quot;date-fns&quot;</span>;\n' +
      '\n' +
      'const date = <span class="hljs-keyword">new</span> <span class="hljs-constructor">Date()</span>;\n' +
      'add<span class="hljs-constructor">Days(<span class="hljs-params">date</span>, 7)</span>; <span class="hljs-comment">// 增大7天</span>\n' +     
      'sub<span class="hljs-constructor">Years(<span class="hljs-params">date</span>, 7)</span>; <span class="hljs-comment">// 减小7年</span>\n' +    
      'start<span class="hljs-constructor">OfWeek(<span class="hljs-params">date</span>)</span>; <span class="hljs-comment">// 当前的星期一</span>\n' 
+
      '<span class="hljs-keyword">end</span><span 
class="hljs-constructor">OfMonth(<span class="hljs-params">date</span>)</span>; <span class="hljs-comment">// 当前的月末</span>\n' +
      '</code></pre>\n' +
      '<h2 id="格式化">格式化</h2>\n' +
      '<p>moment:</p>\n' +
      '<pre><code class="language-javascript"><span class="hljs-selector-tag">moment</span>()<span class="hljs-selector-class">.format</span>(<span class="hljs-string">&quot;YYYY-MM-DD HH:mm:ss&quot;</span>);\n' +
      '</code></pre>\n' +
      '<p>dayjs:</p>\n' +
      '<pre><code class="language-javascript">dayjs<span class="hljs-comment">()</span>.format<span 
class="hljs-comment">()</span>;\n' +
      '</code></pre>\n' +
      '<p>date-fns:</p>\n' +
      '<pre><code class="language-javascript">format(<span class="hljs-built_in">new</span> <span class="hljs-type">Date</span>(), &quot;yyyy-MM-dd HH:mm:ss&quot;);\n' +
      '</code></pre>\n' +
      '<h2 id="总结">总结</h2>\n' +
      '<p>moment、dayjs、date-fns 三个库都能满足常
见的需求，但是存在如下特点：</p>\n' +
      '<ul>\n' +
      '<li>moment 的功能强大但是体积也最大，moment.min.js 的体积为 51K，dayjs.min.js 体积为 7K，date-fns 由于是模块化加载，体积可以最小化；</li>\n' + 
      '<li>dayjs 和 moment 的接口几乎完全一致，相 
互切换的学习成本极低，date-fns 接口风格差异较大；</li>\n' +
      '</ul>\n' +
      '<p>从功能上看，dayjs、date-fns 基本上可以替
代 moment，同时可以大幅减小 app 的体积。如果考虑的
兼容性，可以优先考虑 dayjs，喜欢模块化的朋友可以考
虑 date-fns。</p>`}
        </section>
      </div>
    </Layout>
  );
}

import { getSortedPostsData } from "../lib/api/articles/index";

export async function getServerSideProps(context) {
  const allPostsData = await getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}
