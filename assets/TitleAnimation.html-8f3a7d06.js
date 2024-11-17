import{_ as s,p as a,q as t,t as p,s as e,Y as c,n as l}from"./framework-faa23c95.js";const i={},o=e("p",null,"标题聚光灯效果",-1),u=c(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>helloworld<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 初始化 取消页面元素内外边距 */</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #222<span class="token punctuation">;</span>
  <span class="token comment">/* 弹性布局 水平、垂直居中 */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token comment">/* 100%窗口高度 */</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 30vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token comment">/* 转大写 */</span>
  <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>
  <span class="token comment">/* 相对定位 */</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">span::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;helloworld&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">/* 颜色为透明 */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>
    to right<span class="token punctuation">,</span>
    #ff69b3<span class="token punctuation">,</span>
    #fe0000<span class="token punctuation">,</span>
    #ffa401<span class="token punctuation">,</span>
    #ffff01<span class="token punctuation">,</span>
    #008102<span class="token punctuation">,</span>
    #40e1d2<span class="token punctuation">,</span>
    #410098<span class="token punctuation">,</span>
    #9400d4
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/* 以文字的范围来裁剪背景图片 */</span>
  <span class="token property">background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
  <span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
  <span class="token comment">/* 将元素裁剪为一个圆形（100px表示圆的直径，0% 50%表示圆心的位置） */</span>
  <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">circle</span><span class="token punctuation">(</span>100px at 0% 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/* 执行动画（动画 时长 infinite表示无限次播放） */</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> light 5s infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 定义动画 改变圆心的位置 */</span>
<span class="token atrule"><span class="token rule">@keyframes</span> light</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">circle</span><span class="token punctuation">(</span>100px at 0% 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">50%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">circle</span><span class="token punctuation">(</span>100px at 100% 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">circle</span><span class="token punctuation">(</span>100px at 0% 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function k(r,d){const n=l("TitleAnimation");return a(),t("div",null,[o,p(n),u])}const m=s(i,[["render",k],["__file","TitleAnimation.html.vue"]]);export{m as default};
