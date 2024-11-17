import{_ as s,p as n,q as a,Y as t}from"./framework-faa23c95.js";const p={},e=t(`<h2 id="v-for循环" tabindex="-1"><a class="header-anchor" href="#v-for循环" aria-hidden="true">#</a> v-for循环</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(news, index) in newsData&quot;</span>
<span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;index&quot;</span>
循环图片：
<span class="token operator">&lt;</span>img <span class="token operator">:</span>src<span class="token operator">=</span><span class="token string">&quot;news.src&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;article&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;img-fluid&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
循环文字：
<span class="token punctuation">{</span><span class="token punctuation">{</span> news<span class="token punctuation">.</span>darktext <span class="token punctuation">}</span><span class="token punctuation">}</span>
data中：
<span class="token literal-property property">newsData</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;https://bimhui2-0.oss-cn-shanghai.aliyuncs.com/BimWork/%E4%B8%BB%E7%AB%99%E5%9B%BE%E7%89%87/%E6%96%B0%E9%97%BB%E4%B8%AD%E5%BF%83/%E5%9F%8E%E5%B8%82%E9%AB%98%E6%9E%B6%E7%AB%8B%E4%BA%A4%E9%A1%B9%E7%9B%AE-1.png&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">darktext</span><span class="token operator">:</span> <span class="token string">&quot;BIM设计&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;城市高架立交项目&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;根据设计图纸使用Revit和Dynamo协同制作立交模型，使用Lumion渲染漫游，制作最终成果。&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

循环router<span class="token operator">-</span>link：
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">&quot;{ path: timeline.path }&quot;</span><span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>a
                      <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;btn-default btn-large round&quot;</span>
                      data<span class="token operator">-</span>aos<span class="token operator">=</span><span class="token string">&quot;fade-up&quot;</span>
                      data<span class="token operator">-</span>aos<span class="token operator">-</span>delay<span class="token operator">=</span><span class="token string">&quot;170&quot;</span>
                    <span class="token operator">&gt;</span>
                      <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> timeline<span class="token punctuation">.</span>buttontext <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
data中：
<span class="token literal-property property">timelineData</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token punctuation">{</span>
<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/Editor&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">buttontext</span><span class="token operator">:</span> <span class="token string">&quot;了解更多&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token punctuation">]</span>


<span class="token number">2</span><span class="token punctuation">.</span>v<span class="token operator">-</span><span class="token keyword">for</span>循环中使用 style background<span class="token operator">-</span>image的写法


<span class="token operator">&lt;</span>div
          v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(slider, index) in sliderData&quot;</span>
          <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;index&quot;</span>
          <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;single-slide&quot;</span>
        <span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>div
            <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;height-950 bg-overlay bg_image&quot;</span>
            <span class="token operator">:</span>style<span class="token operator">=</span>&quot;<span class="token punctuation">{</span>
              <span class="token string-property property">&#39;background-image&#39;</span><span class="token operator">:</span> <span class="token string">&#39;url(&#39;</span> <span class="token operator">+</span> slider<span class="token punctuation">.</span>image <span class="token operator">+</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">,</span><span class="token comment">/*+ slider.image +要用&#39;&#39;括起来*/</span>
            <span class="token punctuation">}</span>&quot;
          <span class="token operator">&gt;</span>


<span class="token literal-property property">sliderData</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">image</span><span class="token operator">:</span>
            <span class="token string">&quot;https://bimhuicorebasic.oss-cn-shanghai.aliyuncs.com/banner%E5%AD%98%E5%82%A8/%E5%9B%BE%E6%A8%A1%E5%B8%82%E5%9C%BAbanner1.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">模型积分兑换 &lt;br/&gt; 高效便捷.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">使用工作台高效处理模型，尽情展现.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">image</span><span class="token operator">:</span>
            <span class="token string">&quot;https://bimhuicorebasic.oss-cn-shanghai.aliyuncs.com/banner%E5%AD%98%E5%82%A8/%E5%9B%BE%E6%A8%A1%E5%B8%82%E5%9C%BAbanner2.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">急速变化 &lt;br/&gt; 高品质效果.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">模型处理？特效差？编辑器高效解决.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    
    
    
点击事件的v<span class="token operator">-</span><span class="token keyword">for</span>循环：
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span>同一个<span class="token keyword">for</span>循环列表<span class="token punctuation">,</span>绑定不同的点击事件<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;list&quot;</span> v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(item,index) in items&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;index&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token punctuation">}</span>：<span class="token punctuation">{</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>styl<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&quot;button&quot;</span> @click<span class="token operator">=</span><span class="token string">&quot;update(item.num)&quot;</span><span class="token operator">&gt;</span>更新<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">items</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">&#39;001&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;更新1&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">styl</span><span class="token operator">:</span><span class="token string">&#39;更新一内容&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token string">&#39;updateone&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">&#39;002&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;更新2&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">styl</span><span class="token operator">:</span><span class="token string">&#39;更新二内容&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">num</span><span class="token operator">:</span><span class="token string">&#39;updatetwo&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">//更新的点击事件,传的参item.num = methodsNums</span>
    <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">methodsNums</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">//触发这个参数的方法</span>
      <span class="token keyword">this</span><span class="token punctuation">[</span>methodsNums<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">updateone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;更新1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">updatetwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;更新2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>


<span class="token literal-property property">通过</span> <span class="token operator">:</span>style <span class="token operator">=</span> <span class="token string">&quot;函数()&quot;</span> <span class="token literal-property property">或者</span> <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;函数&quot;</span> <span class="token literal-property property">可以通过函数加传参来控制不同列的样式</span><span class="token operator">:</span>
<span class="token operator">&lt;</span>swiper<span class="token operator">-</span>item  v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(items,indexs) in levelList&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;indexs&quot;</span><span class="token operator">&gt;</span>
				<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;topBg&quot;</span><span class="token operator">&gt;</span>
					<span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;progress b-card&quot;</span> <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span>&quot;<span class="token punctuation">{</span><span class="token string-property property">&#39;b-level-1&#39;</span><span class="token operator">:</span> items<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">,</span>
					<span class="token string-property property">&#39;b-level-2&#39;</span><span class="token operator">:</span> items<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token string-property property">&#39;b-level-3&#39;</span><span class="token operator">:</span> items<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">,</span><span class="token string-property property">&#39;b-level-4&#39;</span><span class="token operator">:</span> items<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">}</span>&quot;<span class="token operator">&gt;</span>



<span class="token literal-property property">levelList</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
					<span class="token literal-property property">viplevel</span><span class="token operator">:</span><span class="token string">&#39;普通用户&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">level</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
					<span class="token literal-property property">ratio</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
					<span class="token literal-property property">viplevel</span><span class="token operator">:</span><span class="token string">&#39;尊贵会员&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">level</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
					<span class="token literal-property property">ratio</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>    
<span class="token punctuation">.</span>b<span class="token operator">-</span>level<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>b<span class="token operator">-</span>level<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function l(r,c){return n(),a("div",null,o)}const u=s(p,[["render",l],["__file","v-for.html.vue"]]);export{u as default};
