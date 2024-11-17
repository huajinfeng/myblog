import{_ as a,p,q as t,t as e,s as n,R as o,Y as c,n as l}from"./framework-faa23c95.js";const u={},i=n("h3",{id:"复选框特效",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#复选框特效","aria-hidden":"true"},"#"),o(" 复选框特效")],-1),k=c(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox-wrapper-12<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cbx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cbx-12<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cbx-12<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>15<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>14<span class="token punctuation">&quot;</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0 0 15 14<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>none<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>M2 8.36364L6.23077 12L13 2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2000/svg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>goo-12<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feGaussianBlur</span> <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SourceGraphic<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stdDeviation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">result</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blur<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>feGaussianBlur</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feColorMatrix</span> <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blur<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>matrix<span class="token punctuation">&quot;</span></span> <span class="token attr-name">values</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7<span class="token punctuation">&quot;</span></span> <span class="token attr-name">result</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>goo-12<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>feColorMatrix</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feBlend</span> <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SourceGraphic<span class="token punctuation">&quot;</span></span> <span class="token attr-name">in2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>goo-12<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>feBlend</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.checkbox-wrapper-12</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.checkbox-wrapper-12 &gt; svg</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> -130%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -170%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 110px<span class="token punctuation">;</span>
  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.checkbox-wrapper-12 *</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.checkbox-wrapper-12 input[type=&quot;checkbox&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">-moz-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.checkbox-wrapper-12 input[type=&quot;checkbox&quot;]:focus</span> <span class="token punctuation">{</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.checkbox-wrapper-12 .cbx</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100px - 12px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100px - 12px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.checkbox-wrapper-12 .cbx input</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #bfbfc0<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.checkbox-wrapper-12 .cbx label</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">trasnlate3d</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.checkbox-wrapper-12 .cbx svg</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.checkbox-wrapper-12 .cbx svg path</span> <span class="token punctuation">{</span>
  <span class="token property">stroke</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">stroke-width</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
  <span class="token property">stroke-linecap</span><span class="token punctuation">:</span> round<span class="token punctuation">;</span>
  <span class="token property">stroke-linejoin</span><span class="token punctuation">:</span> round<span class="token punctuation">;</span>
  <span class="token property">stroke-dasharray</span><span class="token punctuation">:</span> 19<span class="token punctuation">;</span>
  <span class="token property">stroke-dashoffset</span><span class="token punctuation">:</span> 19<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> stroke-dashoffset 0.3s ease<span class="token punctuation">;</span>
  <span class="token property">transition-delay</span><span class="token punctuation">:</span> 0.2s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.checkbox-wrapper-12 .cbx input:checked + label</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> splash-12 0.6s ease forwards<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.checkbox-wrapper-12 .cbx input:checked + label + svg path</span> <span class="token punctuation">{</span>
  <span class="token property">stroke-dashoffset</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@-moz-keyframes</span> splash-12</span> <span class="token punctuation">{</span>
  <span class="token selector">40%</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #866efb<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 -18px 0 -8px #866efb<span class="token punctuation">,</span> 16px -8px 0 -8px #866efb<span class="token punctuation">,</span> 16px 8px 0 -8px #866efb<span class="token punctuation">,</span> 0 18px 0 -8px #866efb<span class="token punctuation">,</span> -16px 8px 0 -8px #866efb<span class="token punctuation">,</span> -16px -8px 0 -8px #866efb<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #866efb<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 -36px 0 -10px transparent<span class="token punctuation">,</span> 32px -16px 0 -10px transparent<span class="token punctuation">,</span> 32px 16px 0 -10px transparent<span class="token punctuation">,</span> 0 36px 0 -10px transparent<span class="token punctuation">,</span> -32px 16px 0 -10px transparent<span class="token punctuation">,</span> -32px -16px 0 -10px transparent<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> splash-12</span> <span class="token punctuation">{</span>
  <span class="token selector">40%</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #866efb<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 -18px 0 -8px #866efb<span class="token punctuation">,</span> 16px -8px 0 -8px #866efb<span class="token punctuation">,</span> 16px 8px 0 -8px #866efb<span class="token punctuation">,</span> 0 18px 0 -8px #866efb<span class="token punctuation">,</span> -16px 8px 0 -8px #866efb<span class="token punctuation">,</span> -16px -8px 0 -8px #866efb<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #866efb<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 -36px 0 -10px transparent<span class="token punctuation">,</span> 32px -16px 0 -10px transparent<span class="token punctuation">,</span> 32px 16px 0 -10px transparent<span class="token punctuation">,</span> 0 36px 0 -10px transparent<span class="token punctuation">,</span> -32px 16px 0 -10px transparent<span class="token punctuation">,</span> -32px -16px 0 -10px transparent<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@-o-keyframes</span> splash-12</span> <span class="token punctuation">{</span>
  <span class="token selector">40%</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #866efb<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 -18px 0 -8px #866efb<span class="token punctuation">,</span> 16px -8px 0 -8px #866efb<span class="token punctuation">,</span> 16px 8px 0 -8px #866efb<span class="token punctuation">,</span> 0 18px 0 -8px #866efb<span class="token punctuation">,</span> -16px 8px 0 -8px #866efb<span class="token punctuation">,</span> -16px -8px 0 -8px #866efb<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #866efb<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 -36px 0 -10px transparent<span class="token punctuation">,</span> 32px -16px 0 -10px transparent<span class="token punctuation">,</span> 32px 16px 0 -10px transparent<span class="token punctuation">,</span> 0 36px 0 -10px transparent<span class="token punctuation">,</span> -32px 16px 0 -10px transparent<span class="token punctuation">,</span> -32px -16px 0 -10px transparent<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> splash-12</span> <span class="token punctuation">{</span>
  <span class="token selector">40%</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #866efb<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 -18px 0 -8px #866efb<span class="token punctuation">,</span> 16px -8px 0 -8px #866efb<span class="token punctuation">,</span> 16px 8px 0 -8px #866efb<span class="token punctuation">,</span> 0 18px 0 -8px #866efb<span class="token punctuation">,</span> -16px 8px 0 -8px #866efb<span class="token punctuation">,</span> -16px -8px 0 -8px #866efb<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #866efb<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 -36px 0 -10px transparent<span class="token punctuation">,</span> 32px -16px 0 -10px transparent<span class="token punctuation">,</span> 32px 16px 0 -10px transparent<span class="token punctuation">,</span> 0 36px 0 -10px transparent<span class="token punctuation">,</span> -32px 16px 0 -10px transparent<span class="token punctuation">,</span> -32px -16px 0 -10px transparent<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function r(d,v){const s=l("CheckBox");return p(),t("div",null,[i,e(s),k])}const m=a(u,[["render",r],["__file","Check-Box.html.vue"]]);export{m as default};
