import{_ as a,p as t,q as p,t as e,s as n,R as c,Y as o,n as l}from"./framework-faa23c95.js";const i={},u=n("h3",{id:"输入框特效",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#输入框特效","aria-hidden":"true"},"#"),c(" 输入框特效")],-1),r=o(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input-data<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">required</span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>underline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>您的姓名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token comment">/* 这个属性是告诉浏览器：你想要设置的边框和内边距的值是包含在总宽高内的 */</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 弹性布局 水平垂直居中 */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token comment">/* 设置body最小高度为100%窗口高度 */</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token comment">/* 渐变背景 */</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>200deg<span class="token punctuation">,</span> #0c3483<span class="token punctuation">,</span> #a2b6df<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 450px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token comment">/* 内边距（上下左右） */</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token comment">/* 盒子阴影 */</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 0px 10px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/* 圆角 */</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper .input-data</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 相对定位 */</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper .input-data input</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 17px<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 2px solid #c0c0c0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 输入框获得焦点时 */</span>
.wrapper .input-data <span class="token property">input</span><span class="token punctuation">:</span>focus ~ label<span class="token punctuation">,</span>
<span class="token comment">/* 输入框的值为合法时 */</span>
<span class="token selector">.wrapper .input-data input:valid ~ label</span> <span class="token punctuation">{</span>
  <span class="token comment">/* label上移，同时改变字号、字体颜色 */</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-25px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #2c6fdb<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper .input-data label</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 绝对定位 */</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #808080<span class="token punctuation">;</span>
  <span class="token comment">/* 这个属性可以使点击label穿透到输入框 */</span>
  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token comment">/* 现在动画有点生硬，在这里需要给动画加个过渡 */</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper .input-data .underline</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #2c6fdb<span class="token punctuation">;</span>
  <span class="token comment">/* 沿X轴缩小 */</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/* 这里同样给动画加个过渡 */</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper .input-data input:focus ~ .underline,
.wrapper .input-data input:valid ~ .underline</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 沿X轴放大 */</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function k(d,v){const s=l("InputAnimation");return t(),p("div",null,[u,e(s),r])}const b=a(i,[["render",k],["__file","InputAnimation.html.vue"]]);export{b as default};
