import{_ as a,p,q as t,t as c,s as n,R as e,Y as o,n as l}from"./framework-faa23c95.js";const i={},u=n("h3",{id:"标题特效",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#标题特效","aria-hidden":"true"},"#"),e(" 标题特效")],-1),k=o(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>CSS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>IS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>AWESOME<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">*,
:root</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0%<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0%<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>

  <span class="token comment">/* variables */</span>
  <span class="token property">--white</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--red</span><span class="token punctuation">:</span> #ea4335<span class="token punctuation">;</span>
  <span class="token property">--green</span><span class="token punctuation">:</span> #34a853<span class="token punctuation">;</span>
  <span class="token property">--yellow</span><span class="token punctuation">:</span> #fbbc05<span class="token punctuation">;</span>
  <span class="token property">--speed</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--white<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 4rem<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.2<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Gill Sans&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Gill Sans MT&quot;</span><span class="token punctuation">,</span> Calibri<span class="token punctuation">,</span> <span class="token string">&quot;Trebuchet MS&quot;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">span</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--red<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">animation-name</span><span class="token punctuation">:</span> css<span class="token punctuation">;</span>
  <span class="token property">animation-duration</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--speed<span class="token punctuation">)</span> / 4<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> 0s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#b</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">animation-name</span><span class="token punctuation">:</span> css<span class="token punctuation">;</span>
  <span class="token property">animation-duration</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--speed<span class="token punctuation">)</span> / 2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#c</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--green<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">animation-name</span><span class="token punctuation">:</span> css<span class="token punctuation">;</span>
  <span class="token property">animation-duration</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--speed<span class="token punctuation">)</span> / 1.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">i</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 4rem<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 9rem<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> -100<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>10rem<span class="token punctuation">,</span> 0rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> cursor <span class="token function">var</span><span class="token punctuation">(</span>--speed<span class="token punctuation">)</span> ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1vmin<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> cursor</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--red<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>10rem<span class="token punctuation">,</span> 0rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">20%</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--red<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0rem<span class="token punctuation">,</span> 0rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">25%</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--red<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-9rem<span class="token punctuation">,</span> 0rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">30%</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-9rem<span class="token punctuation">,</span> 5rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 10rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">40%</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0rem<span class="token punctuation">,</span> 5rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 20rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">50%</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0rem<span class="token punctuation">,</span> 5rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 25rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">60%</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--green<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0rem<span class="token punctuation">,</span> 9.5rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 27rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">80%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-10rem<span class="token punctuation">,</span> 9.5rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--green<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">89%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-20rem<span class="token punctuation">,</span> 9.5rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--green<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">91%</span> <span class="token punctuation">{</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -100<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> -100<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> css</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">95%</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function r(d,v){const s=l("TitleEffect");return p(),t("div",null,[u,c(s),k])}const b=a(i,[["render",r],["__file","Title-effect.html.vue"]]);export{b as default};
