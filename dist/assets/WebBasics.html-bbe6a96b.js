import{_ as i,p as a,q as r,s as n,R as t,t as s,a2 as o,Y as l,n as c}from"./framework-faa23c95.js";const h={},d=l('<h2 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环" aria-hidden="true">#</a> 事件循环</h2><h3 id="浏览器的进程模型" tabindex="-1"><a class="header-anchor" href="#浏览器的进程模型" aria-hidden="true">#</a> 浏览器的进程模型</h3><h4 id="进程" tabindex="-1"><a class="header-anchor" href="#进程" aria-hidden="true">#</a> 进程</h4><p>程序运行需要有它专属的内存空间，可以把这块内存空间简单的理解为进程</p>',4),p=n("h4",{id:"线程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#线程","aria-hidden":"true"},"#"),t(" 线程")],-1),u=n("p",null,"有了进程后，就可以运行程序的代码",-1),_=n("p",null,'运行代码的"人"称之为线程',-1),w=n("p",null,"一个进程至少有一个线程，所以在进程开启后自动创建一个线程来运行代码，该线程称之为主线程。",-1),x=n("p",null,"如果程序需要执行多块代码，主线程就会启动更多的线程来执行代码，所以一个进程中可以包含多个线程。",-1),k=n("h4",{id:"浏览器有哪些进程和线程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#浏览器有哪些进程和线程","aria-hidden":"true"},"#"),t(" 浏览器有哪些进程和线程")],-1),m=n("p",null,"浏览器内部工作极其复杂，为了避免影响，为了减少连环崩溃的几率，当启动浏览器后，它会自动启动多个进程。",-1),v=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"可以在浏览器的任务管理器中查看当前的所有进程")],-1),f=n("p",null,"其中，最主要的进程有：",-1),g=n("li",null,[n("p",null,"浏览器进程"),n("p",null,"主要负责界面显示、用户交互、子进程管理等。浏览器进程内部会启动多个线程处理不同的任务")],-1),b=n("li",null,[n("p",null,"网络进程"),n("p",null,"负责加载网络资源。网络进程内部会启动多个线程来处理不同的网络任务")],-1),S=n("p",null,"渲染进程",-1),C=n("p",null,"默认情况下，浏览器会为每一个标签页开启一个新的渲染进程，以保证不用的标签页之间不相互影响。",-1),M=l('<h3 id="渲染主线程是如何工作的" tabindex="-1"><a class="header-anchor" href="#渲染主线程是如何工作的" aria-hidden="true">#</a> 渲染主线程是如何工作的</h3><p>需要它处理的任务包括但不限于：</p><p>解析HTML、解析CSS、计算样式、布局、处理图层、每秒把页面画60次、执行全局JS代码、执行事件处理函数、</p><p>执行计时器的回调函数······</p><h4 id="如何调度任务" tabindex="-1"><a class="header-anchor" href="#如何调度任务" aria-hidden="true">#</a> 如何调度任务：</h4><ol><li>在最开始的时候，渲染主线程会进入一个无限循环</li><li>每一次循环会检查消息队列中是否有任务存在。如果有，就取出第一个任务执行，执行完一个后进入下一次循环；如果没有，则进入休眠状态。</li><li>其他所有线程（包括其他进程的线程）可以随时向消息队列添加任务。新任务会加到消息队列的末尾，在添加新任务时，如果主线程时休眠状态，则会将其唤醒以继续循环拿去任务。</li></ol>',6),F=l('<h3 id="若干解释" tabindex="-1"><a class="header-anchor" href="#若干解释" aria-hidden="true">#</a> 若干解释</h3><h4 id="异步" tabindex="-1"><a class="header-anchor" href="#异步" aria-hidden="true">#</a> 异步</h4><p>代码在执行的过程中，会遇到一些无法立即处理的任务，比如：</p><p>计时完成后需要执行的任务：setTimeout、setInterval</p><p>网络通信完成后需要执行的任务：XHR、Fetch</p><p>用户操作后需要执行的任务：addEventListener</p><p>如果让渲染主线程等待这些任务的时机达到，就会导致主线程长期处于“堵塞”的状态，从而导致浏览器“卡死”</p><p>因此，浏览器选择异步来解决这个问题：</p><ol><li>通知计时线程计时，当前任务结束</li><li>获取下一个任务执行</li><li>计时任务结束后，将回调函数放入到消息队列末尾</li></ol>',9),J={class:"custom-container tip"},j=n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])],-1),B=n("p",{class:"custom-container-title"},"TIP",-1),T=n("p",null,"面试题：如何理解 JS 的异步？",-1),y=n("p",null,"参考答案：",-1),W=n("p",null,"所以浏览器采用异步的方式来避免。具体做法是当某些任务发生时，比如计时器、网络、事件监听，主线程将任务交给其他线程去处理，自身立即结束任务的执行，转而执行后续代码。当其他线程完成时，将事先传递的回调函数包装成任务，加入到消息队列的未尾排队，等待主线程调度执行。",-1),N=n("p",null,"在这种异步模式下，浏览器永不堵塞，从而最大限度的保证了单线程的流畅运行。",-1),P=l('<h4 id="js为何会阻碍渲染" tabindex="-1"><a class="header-anchor" href="#js为何会阻碍渲染" aria-hidden="true">#</a> JS为何会阻碍渲染</h4><p>JS和渲染都在浏览器的渲染主线程上，执行JS时，渲染需要等待调度。</p><h4 id="任务的优先级" tabindex="-1"><a class="header-anchor" href="#任务的优先级" aria-hidden="true">#</a> 任务的优先级</h4><p>任务没有优先级，在消息队列中先进先出</p><p>但消息队列是有优先级的</p><p>W3C：</p><ul><li>每个任务都有一个任务类型，同一类型的任务必须在一个队列，不同类型的任务可以在同一队列或分属于不同队列。在一次事件循环中，浏览器可以根据实际情况从不同的队列中取出任务执行</li><li>浏览器必须准备好一个微队列，微队列中的任务优先所有其他任务执行。</li></ul>',7),V=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,"添加任务到微队列的主要方式主要是使用Promise、MutationObserver"),n("p",null,"例如："),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"//立即把一个函数添加到微队列"),t(`
Promise`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),t("函数"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])])],-1),H=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"面试题:"),n("p",null,"阐述一下 JS 的事件循环"),n("p",null,"参考答案:"),n("p",null,"事件循环又叫做消息循环，是浏览器渲染主线程的工作方式。在 Chrome 的源码中，它开启一个不会结束的 for 循环，每次循环从消息队列中取出第一个任务执行，而其他线程只需要在合适的时候将任务加入到队列末尾即可。过去把消息队列简单分为宏队列和微队列，这种说法目前已无法满足复杂的浏览器环境，取而代之的是一种更加灵活多变的处理方式。 根据 W3C官方的解释，每个任务有不同的类型，同类型的任务必须在同一个队列，不同的任务可以属于相同的队列。不同任务队列有不同的优先级，在一次事件循环中，由浏览器自行决定取哪一个队列的任务。但浏览器必须有一个微队列，微队列的任务一定具有最高的优先级，必须优先调度执行。")],-1),I=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"面试题:"),n("p",null,"JS中的计时器能做到精确计时吗? 为什么?"),n("p",null,"参考答案:"),n("p",null,"不行，因为: 1.计算机硬件没有原子钟，无法做到精确计时 2.操作系统的计时函数本身就有少量偏差，由于 JS 的计时器最终调用的是操作系统的函数，也就携带了这些偏差。 3.按照 W3C的标准，浏览器实现计时器时，如果嵌套层级超过 5 层，则会带有 4 毫秒的最少时间，这样在计时时间少于 4 毫秒时又带来了偏差 4.受事件循环的影响，计时器的回调函数只能在主线程空闲时运行，因此又带来了偏差")],-1);function L(E,R){const e=c("font");return a(),r("div",null,[d,n("p",null,[t("每个应用"),s(e,{color:"#FF0000"},{default:o(()=>[t("至少有一个进程")]),_:1}),t("，进程之间相互独立，即使要通信，也需要双方同意。")]),p,u,_,w,x,k,s(e,{color:"#FF0000"},{default:o(()=>[t("浏览器是一个多进程多线程的应用程序")]),_:1}),m,v,f,n("ol",null,[g,b,n("li",null,[S,n("p",null,[t("渲染进程启动后，会开启一个"),s(e,{color:"#FF0000"},{default:o(()=>[t("渲染主进程")]),_:1}),t("，主线程负责执行HTML、CSS、JS代码。")]),C])]),M,s(e,{color:"#FF0000"},{default:o(()=>[t("整个过程，被称之为事件循环（消息循环）")]),_:1}),F,n("div",J,[j,B,T,y,s(e,{color:"#FF0000"},{default:o(()=>[t("Js是一门单线程的语言")]),_:1}),t("，这是因为它运行在浏览器的渲染主线程中，而渲染主线程只有一个。而渲染主线程承担着诸多的工作，渲染页面、执行 JS 都在其中运行。如果使用同步的方式，就极有可能导致主线程产生阻塞，从而导致消息队列中的很多其他任务无法得到执行。这样一来，一方面会导致繁忙的主线程白白的消耗时间，另一方面导致页面无法及时更新，给用户造成卡死现象。"),W,N]),P,V,H,I])}const O=i(h,[["render",L],["__file","WebBasics.html.vue"]]);export{O as default};
