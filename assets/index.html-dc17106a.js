import{_ as a,p as i,q as l,w as n,s,R as d,Y as e}from"./framework-faa23c95.js";const c={},r=s("h2",{id:"文档结构",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#文档结构","aria-hidden":"true"},"#"),d(" 文档结构")],-1),t=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>------.vuepress
      --.cache
      --.temp
      <span class="token parameter variable">--public</span> //图片
      --vue-press //放组件，自动注册
      <span class="token parameter variable">--config.ts</span> //默认组件配置
------blogs //放博客相关
------docs  //放文档相关
------node_modules
------.gitigonre
------package-lock.json
------package.json
------README.md //首页显示
------yarn.lock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><p><strong>npx</strong></p>`,3),o=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
npx @vuepress-reco/theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>npm</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
<span class="token function">npm</span> <span class="token function">install</span> @vuepress-reco/theme-cli@1.0.7 <span class="token parameter variable">-g</span>
theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yarn</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
<span class="token function">yarn</span> global <span class="token function">add</span> @vuepress-reco/theme-cli@1.0.7
theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>部署</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># /.vuepress/config.ts</span>
<span class="token builtin class-name">export</span> default defineUserConfig<span class="token punctuation">(</span><span class="token punctuation">{</span>
  title: <span class="token string">&quot;H&amp;H&#39;s Home&quot;</span>,//导航栏标题
  dest: <span class="token string">&#39;./dist&#39;</span>,//生成的dist文件放在根目录  
  base: <span class="token string">&#39;/hs-private-room/&#39;</span>,// 设置站点根路径
<span class="token punctuation">}</span><span class="token punctuation">)</span>
gitee
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function v(p,u){return i(),l("div",null,[r,n(" 代码块组件 "),t,n(" 代码块组件 "),o])}const b=a(c,[["render",v],["__file","index.html.vue"]]);export{b as default};
