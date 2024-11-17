import{_ as a,p as t,q as p,t as e,s as n,R as o,Y as c,n as l}from"./framework-faa23c95.js";const i={},u=n("h3",{id:"代码雨背景",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#代码雨背景","aria-hidden":"true"},"#"),o(" 代码雨背景")],-1),k=c(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 要操作的画布</span>
    <span class="token keyword">const</span> cvs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;canvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 画布上下文</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> cvs<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 初始化画布宽高</span>
    <span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cvs<span class="token punctuation">.</span>width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">*</span> devicePixelRatio<span class="token punctuation">;</span>
      cvs<span class="token punctuation">.</span>height <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight <span class="token operator">*</span> devicePixelRatio<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 根据DPR计算字体的大小（devicePixelRatio 设备像素比）</span>
    <span class="token keyword">const</span> fontSize <span class="token operator">=</span> <span class="token number">20</span> <span class="token operator">*</span> devicePixelRatio<span class="token punctuation">;</span>
    <span class="token comment">// 设置字体、字体大小（和CSS设置字体一样）</span>
    ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fontSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px &quot;Consolas&quot;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token comment">// 计算总列数（fontSize相当于每列的宽度）</span>
    <span class="token keyword">const</span> columnCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>cvs<span class="token punctuation">.</span>width <span class="token operator">/</span> fontSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 根据列数创建数组并填充为0</span>
    <span class="token keyword">const</span> charIndex <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>columnCount<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 绘制代码雨</span>
    <span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 加个渐隐效果</span>
      ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&quot;rgba(0,0,0,0.1)&quot;</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> cvs<span class="token punctuation">.</span>width<span class="token punctuation">,</span> cvs<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 设置字体颜色</span>
      ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&quot;#6be445&quot;</span><span class="token punctuation">;</span>
      <span class="token comment">// 设置文本基线为顶部</span>
      ctx<span class="token punctuation">.</span>textBaseline <span class="token operator">=</span> <span class="token string">&quot;top&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> columnCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取随机字符</span>
        <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token function">getRandomChar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 计算文字的x、y坐标</span>
        <span class="token keyword">const</span> x <span class="token operator">=</span> i <span class="token operator">*</span> fontSize<span class="token punctuation">;</span>
        <span class="token keyword">const</span> y <span class="token operator">=</span> charIndex<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> fontSize<span class="token punctuation">;</span>
        <span class="token comment">// 绘制文本</span>
        ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 超出画布归零</span>
        <span class="token comment">// 这里需要再加个判断，使之错开归零的时间点（Math.random()&gt;0.99）</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>y <span class="token operator">&gt;</span> cvs<span class="token punctuation">.</span>height <span class="token operator">&amp;&amp;</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0.99</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          charIndex<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          charIndex<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 开始绘制</span>
    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 每个50毫秒绘制一次</span>
    <span class="token function">setInterval</span><span class="token punctuation">(</span>draw<span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 获取随机字符</span>
    <span class="token keyword">function</span> <span class="token function">getRandomChar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&quot;0123456789abcdefghijklmnopqrstuvwxyz&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> str<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">canvas</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function r(d,v){const s=l("CodeBackground");return t(),p("div",null,[u,e(s),k])}const b=a(i,[["render",r],["__file","CodeBackground.html.vue"]]);export{b as default};
