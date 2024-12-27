import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as e}from"./app-D0LWHeqy.js";const l={};function t(h,s){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="阅读须知" tabindex="-1"><a class="header-anchor" href="#阅读须知"><span>阅读须知</span></a></h1><p>  本套教程侧重点在于使用 C++ 并发支持库进行多线程编程。我们假设读者最低水平为：C++11 + STL + template，可能没有接触过 C++ 标准并发库，假设略微了解操作系统基本知识。</p><p>  我们强调了模板，因为并发支持库的很多设施其实现是较为简单的，概念与使用，再结合源码讲解会更加简单直观，然而要想阅读学习源码，模板的知识必不可少。不需要模板的水平有多高，也不需要会什么元编程，但是基本的需求得能做到，得会，这里推荐一下：<a href="https://github.com/Mq-b/Modern-Cpp-templates-tutorial" target="_blank" rel="noopener noreferrer"><strong>《现代C++模板教程》</strong></a>。</p><p>  本教程不保证你学习之后的成果，不过依然可以自信地说：<strong>本教程在中文社区的同类型教程中是绝对的第一</strong>。事实上只需要一句话就可以表达了——<strong>伟大无需多言</strong>。</p><h2 id="学习注意事项" tabindex="-1"><a class="header-anchor" href="#学习注意事项"><span>学习注意事项</span></a></h2><p>  我们的教程中常包含许多外部链接，这并非当前描述不足或者不够严谨，而是为了考虑读者的水平和可能的扩展学习需求。同时，也希望能让读者避免获取二手知识与理解，我们提供的链接基本都是较为专业的文档或官方网站。</p><p>  虽然教程名为《现代 C++ 并发编程教程》，但我们也扩展涉及了许多其他知识，包括但不限于：Win32、POSIX API；MSVC STL、libstdc++、libc++ 对标准库的实现；GCC 与 MSVC 的编译器扩展，以及 Clang 对它们的兼容；使用 CMake + Qt 构建带 UI 的程序，展示多线程异步的必要性；不同架构的内存模型（例如 x86 架构内存模型：Total Store Order (TSO)，较为严格的内存模型）。</p><p>  既然强调了“<strong>现代</strong>”，那自然是全方面的，具体的读者会在学习中感受到的。</p><p>  另外我们的代码都会测试三大编译器 <code>Clang</code>、<code>GCC</code>、<code>MSVC</code>。通常都会是最新的，<code>Clang18</code>、<code>GCC14</code>。我们的教程中常常会提供 <a href="https://godbolt.org/" target="_blank" rel="noopener noreferrer">Complier Explorer</a> 的运行测试链接以确保正确性，以及方便读者的测试与学习。如果你对此网站的使用不熟悉，可以阅读<a href="https://mq-b.github.io/Loser-HomeWork/src/%E5%8D%A2%E7%91%9F%E6%97%A5%E7%BB%8F/godbolt%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3" target="_blank" rel="noopener noreferrer">使用文档</a>。</p><h2 id="代码风格" tabindex="-1"><a class="header-anchor" href="#代码风格"><span>代码风格</span></a></h2><p>  我们的代码风格较为简洁明了，命名全部使用下划线连接，而不是驼峰命名法。花括号通常只占一行，简短的代码可以不额外占行。一般初始化时使用 <code>{}</code>，而非 <code>()</code> 或者 <code>=</code> 。这样简单直观，避免歧义和许多问题。<code>#include</code> 引入头文件时需要在尖括号或引号前后加空格。</p><div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" data-title="cpp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &lt;iostream&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> move_only</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    move_only</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">puts</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;默认构造&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">); }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    move_only</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">move_only</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">noexcept</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">puts</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;移动构造&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">); }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">    move_only</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> operator</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">move_only</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">noexcept</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF;">        std</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">puts</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;移动赋值&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    move_only</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> move_only</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> delete</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    move_only m{};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    char</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> buffer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1024</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]{}</span><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> // 全部初始化为 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是标量类型，可能考虑使用复制初始化，而非 <code>{}</code>，如：<code>int n = 0;</code>。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>  本教程长期维护，接受 pr 与 issue。</p><p>  好了，稍微了解了一下，我们可以开始进入正式的学习内容了。</p>`,16)]))}const r=i(l,[["render",t],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/md/","title":"阅读须知","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"学习注意事项","slug":"学习注意事项","link":"#学习注意事项","children":[]},{"level":2,"title":"代码风格","slug":"代码风格","link":"#代码风格","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1709094546000,"updatedTime":1725764028000,"contributors":[{"name":"mq白","email":"3326284481@qq.com","commits":6},{"name":"归故里","email":"3326284481@qq.com","commits":2}]},"readingTime":{"minutes":2.88,"words":863},"filePathRelative":"md/README.md","localizedDate":"2024年2月28日","excerpt":"\\n<p>  本套教程侧重点在于使用 C++ 并发支持库进行多线程编程。我们假设读者最低水平为：C++11 + STL + template，可能没有接触过 C++ 标准并发库，假设略微了解操作系统基本知识。</p>\\n<p>  我们强调了模板，因为并发支持库的很多设施其实现是较为简单的，概念与使用，再结合源码讲解会更加简单直观，然而要想阅读学习源码，模板的知识必不可少。不需要模板的水平有多高，也不需要会什么元编程，但是基本的需求得能做到，得会，这里推荐一下：<a href=\\"https://github.com/Mq-b/Modern-Cpp-templates-tutorial\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><strong>《现代C++模板教程》</strong></a>。</p>"}');export{r as comp,d as data};
