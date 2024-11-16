import{s as ne,a as fe,u as he,g as pe,b as me,c as ee,o as de,x as te,n as P,r as ge,y as ie}from"../chunks/scheduler.Df_9wCsF.js";import{S as le,i as ae,e as b,s as T,t as U,c as x,a as C,d,f as q,b as W,k as u,g as I,h as g,l as se,m as j,n as z,o as oe,j as ue,p as F,r as Y,u as G,B as ce,v as A}from"../chunks/index.CiKJv4EK.js";import{s as R,i as re,B as ve}from"../chunks/store.BfjfVAg0.js";function $e(l){let t,s,e,n,p,o,a,h,f;const v=l[4].default,r=fe(v,l,l[3],null);return{c(){t=b("button"),r&&r.c(),e=T(),n=b("div"),p=U("Click for info"),this.h()},l(c){t=x(c,"BUTTON",{class:!0,id:!0});var m=C(t);r&&r.l(m),m.forEach(d),e=q(c),n=x(c,"DIV",{class:!0,id:!0});var k=C(n);p=W(k,"Click for info"),k.forEach(d),this.h()},h(){u(t,"class","flex flex-col items-center cursor-pointer z-10 justify-center w-full h-full relative"),u(t,"id",s=`hover-element${l[0]}`),u(n,"class","hidden absolute z-10 w-28 text-button tracking-tight font-medium text-center"),u(n,"id",o=`tooltip${l[0]}`)},m(c,m){I(c,t,m),r&&r.m(t,null),I(c,e,m),I(c,n,m),g(n,p),a=!0,h||(f=se(t,"click",l[5]),h=!0)},p(c,[m]){r&&r.p&&(!a||m&8)&&he(r,v,c,c[3],a?me(v,c[3],m,null):pe(c[3]),null),(!a||m&1&&s!==(s=`hover-element${c[0]}`))&&u(t,"id",s),(!a||m&1&&o!==(o=`tooltip${c[0]}`))&&u(n,"id",o)},i(c){a||(j(r,c),a=!0)},o(c){z(r,c),a=!1},d(c){c&&(d(t),d(e),d(n)),r&&r.d(c),h=!1,f()}}}function _e(l,t,s){let e,n;ee(l,R,f=>s(1,e=f)),ee(l,re,f=>s(2,n=f));let{$$slots:p={},$$scope:o}=t,{uniqueId:a}=t;de(()=>{const f=document.getElementById(`hover-element${a}`),v=document.getElementById(`tooltip${a}`);f&&v&&(f.addEventListener("mousemove",r=>{v.classList.remove("hidden"),v.style.left=`${r.pageX+10}px`,v.style.top=`${r.pageY+10}px`}),f.addEventListener("mouseleave",()=>{v.classList.add("hidden")}))});const h=()=>{te(R,e=!e,e),te(re,n=+a,n)};return l.$$set=f=>{"uniqueId"in f&&s(0,a=f.uniqueId),"$$scope"in f&&s(3,o=f.$$scope)},[a,e,n,o,p,h]}class Z extends le{constructor(t){super(),ae(this,t,_e,$e,ne,{uniqueId:0})}}const S=[{heading:"Introduction",text:"This is the introduction section. It provides an overview of the content, setting the stage for what is to follow. We will explore various concepts and features that are central to the topic at hand. The introduction aims to give you a clear idea of what you can expect from the subsequent sections, ensuring you are well-prepared to dive deeper into the details."},{heading:"Features",text:"In this section, we delve into the key features of our product or service. These features are designed to provide value, solve specific problems, and enhance the overall user experience. From performance optimizations to unique functionalities, we cover all aspects that set this product apart from the competition. Each feature has been carefully crafted based on user feedback and industry standards to meet your needs."},{heading:"Pricing",text:"Pricing is an important aspect when considering a product or service. In this section, we break down the different pricing plans available, catering to a wide range of budgets and use cases. Whether you're a small business owner looking for an affordable option or a large enterprise in need of advanced features, our pricing structure is designed to be flexible and scalable. We also offer detailed comparisons between plans to help you make an informed decision."},{heading:"Contact Us",text:"If you have any questions or need further assistance, this section provides various ways to get in touch with us. Whether through email, phone, or live chat, our customer support team is here to help you. We value your feedback and are committed to providing prompt and effective solutions to any issues you may encounter. Don't hesitate to reach out to us – we're here to ensure you have the best experience possible."}];function be(l){let t,s,e,n=S[l[1]].heading+"",p,o,a,h=S[l[1]].text+"",f,v,r,c="X",m,k,y,D,B,J="Click to close",L,E;return{c(){t=b("div"),s=b("div"),e=b("h1"),p=U(n),o=T(),a=b("p"),f=U(h),v=T(),r=b("button"),r.textContent=c,m=T(),k=b("button"),D=T(),B=b("div"),B.textContent=J,this.h()},l(w){t=x(w,"DIV",{class:!0});var $=C(t);s=x($,"DIV",{class:!0});var V=C(s);e=x(V,"H1",{class:!0});var K=C(e);p=W(K,n),K.forEach(d),o=q(V),a=x(V,"P",{class:!0});var Q=C(a);f=W(Q,h),Q.forEach(d),v=q(V),r=x(V,"BUTTON",{class:!0,"data-svelte-h":!0}),oe(r)!=="svelte-1dlmiyv"&&(r.textContent=c),V.forEach(d),m=q($),k=x($,"BUTTON",{class:!0,id:!0}),C(k).forEach(d),$.forEach(d),D=q(w),B=x(w,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),oe(B)!=="svelte-1domt3u"&&(B.textContent=J),this.h()},h(){u(e,"class","tracking-tight w-full text-5xl"),u(a,"class","text-lg tracking-tight leading-tight"),u(r,"class","medievalsharp-regular text-5xl mt-7 hover:scale-110 duration-300"),u(s,"class","w-[45vw] pl-24 pr-8 flex flex-col items-center justify-center gap-5 bg-text text-buttonText border-r-2 border-buttonText slide-content svelte-yr06fq"),u(k,"class","w-[55vw]"),u(k,"id","close-element"),u(t,"class",y="fixed w-full h-full z-40 flex flex-row bg-black/50 backdrop-blur slide-container "+(l[0]?"visible":"")+" svelte-yr06fq"),u(B,"class","hidden absolute z-50 w-32 text-buttonText tracking-tight font-medium text-center"),u(B,"id","closetip")},m(w,$){I(w,t,$),g(t,s),g(s,e),g(e,p),g(s,o),g(s,a),g(a,f),g(s,v),g(s,r),g(t,m),g(t,k),I(w,D,$),I(w,B,$),L||(E=[se(r,"click",l[2]),se(k,"click",l[3])],L=!0)},p(w,[$]){$&2&&n!==(n=S[w[1]].heading+"")&&ue(p,n),$&2&&h!==(h=S[w[1]].text+"")&&ue(f,h),$&1&&y!==(y="fixed w-full h-full z-40 flex flex-row bg-black/50 backdrop-blur slide-container "+(w[0]?"visible":"")+" svelte-yr06fq")&&u(t,"class",y)},i:P,o:P,d(w){w&&(d(t),d(D),d(B)),L=!1,ge(E)}}}function xe(l,t,s){let e,n;return ee(l,R,a=>s(0,e=a)),ee(l,re,a=>s(1,n=a)),de(()=>{const a=document.getElementById("close-element"),h=document.getElementById("closetip");a&&h&&(a.addEventListener("mousemove",f=>{h.classList.remove("hidden"),h.style.left=`${f.pageX+10}px`,h.style.top=`${f.pageY+10}px`}),a.addEventListener("mouseleave",()=>{h.classList.add("hidden")}))}),[e,n,()=>{te(R,e=!e,e)},()=>{te(R,e=!e,e)}]}class we extends le{constructor(t){super(),ae(this,t,xe,be,ne,{})}}function Ie(l){let t,s;return{c(){t=b("img"),this.h()},l(e){t=x(e,"IMG",{alt:!0,class:!0,src:!0}),this.h()},h(){u(t,"alt",""),u(t,"class","w-40"),ie(t.src,s=l[0])||u(t,"src",s)},m(e,n){I(e,t,n)},p(e,[n]){n&1&&!ie(t.src,s=e[0])&&u(t,"src",s)},i:P,o:P,d(e){e&&d(t)}}}function ke(l,t,s){let{src:e="./cat.gif"}=t;return l.$$set=n=>{"src"in n&&s(0,e=n.src)},[e]}class ye extends le{constructor(t){super(),ae(this,t,ke,Ie,ne,{src:0})}}function Ee(l){let t=S[0].heading+"",s,e,n,p;return n=new ye({props:{src:"./cat.gif"}}),{c(){s=U(t),e=T(),F(n.$$.fragment)},l(o){s=W(o,t),e=q(o),Y(n.$$.fragment,o)},m(o,a){I(o,s,a),I(o,e,a),G(n,o,a),p=!0},p:P,i(o){p||(j(n.$$.fragment,o),p=!0)},o(o){z(n.$$.fragment,o),p=!1},d(o){o&&(d(s),d(e)),A(n,o)}}}function Te(l){let t=S[1].heading+"",s;return{c(){s=U(t)},l(e){s=W(e,t)},m(e,n){I(e,s,n)},p:P,d(e){e&&d(s)}}}function qe(l){let t=S[2].heading+"",s;return{c(){s=U(t)},l(e){s=W(e,t)},m(e,n){I(e,s,n)},p:P,d(e){e&&d(s)}}}function Ce(l){let t=S[3].heading+"",s;return{c(){s=U(t)},l(e){s=W(e,t)},m(e,n){I(e,s,n)},p:P,d(e){e&&d(s)}}}function De(l){let t;return{c(){t=U("Search")},l(s){t=W(s,"Search")},m(s,e){I(s,t,e)},d(s){s&&d(t)}}}function Be(l){let t,s,e,n,p,o,a,h,f,v,r,c,m,k,y,D,B=`Search for test
            answers, <br/> homeworks and other!`,J,L,E,w,$,V,K,Q;return t=new we({}),o=new Z({props:{uniqueId:"0",$$slots:{default:[Ee]},$$scope:{ctx:l}}}),h=new Z({props:{uniqueId:"1",$$slots:{default:[Te]},$$scope:{ctx:l}}}),r=new Z({props:{uniqueId:"2",$$slots:{default:[qe]},$$scope:{ctx:l}}}),m=new Z({props:{uniqueId:"3",$$slots:{default:[Ce]},$$scope:{ctx:l}}}),$=new ve({props:{url:"/search",$$slots:{default:[De]},$$scope:{ctx:l}}}),{c(){F(t.$$.fragment),s=T(),e=b("div"),n=b("div"),p=b("div"),F(o.$$.fragment),a=T(),F(h.$$.fragment),f=T(),v=b("div"),F(r.$$.fragment),c=T(),F(m.$$.fragment),k=T(),y=b("div"),D=b("div"),D.innerHTML=B,J=T(),L=b("div"),E=b("input"),w=T(),F($.$$.fragment),this.h()},l(i){Y(t.$$.fragment,i),s=q(i),e=x(i,"DIV",{class:!0});var _=C(e);n=x(_,"DIV",{class:!0});var M=C(n);p=x(M,"DIV",{class:!0});var N=C(p);Y(o.$$.fragment,N),a=q(N),Y(h.$$.fragment,N),N.forEach(d),f=q(M),v=x(M,"DIV",{class:!0});var H=C(v);Y(r.$$.fragment,H),c=q(H),Y(m.$$.fragment,H),H.forEach(d),M.forEach(d),k=q(_),y=x(_,"DIV",{class:!0});var O=C(y);D=x(O,"DIV",{class:!0,"data-svelte-h":!0}),oe(D)!=="svelte-1crotk4"&&(D.innerHTML=B),J=q(O),L=x(O,"DIV",{class:!0});var X=C(L);E=x(X,"INPUT",{class:!0,placeholder:!0,type:!0}),w=q(X),Y($.$$.fragment,X),X.forEach(d),O.forEach(d),_.forEach(d),this.h()},h(){u(p,"class","flex flex-row items-center justify-center w-full h-full p-32 gap-32"),u(v,"class","flex flex-row items-center justify-center w-full h-full p-32 gap-32"),u(n,"class","flex flex-col items-center justify-center w-full h-full"),u(D,"class","text-text text-6xl font-bold tracking-tight underline"),u(E,"class","border-[2.5px] border-button w-[25vw] bg-buttonText text-subText text-xl px-4 py-2 rounded-xl font-medium focus:border-subText duration-300 focus:ring-0 focus:shadow-none focus:outline-none"),u(E,"placeholder","Smrt krásných srnců ..."),u(E,"type","text"),u(L,"class","flex flex-row items-center gap-2"),u(y,"class","absolute inset-0 flex z-0 flex-col text-center items-center justify-center gap-12"),u(e,"class","bg-background h-[98vh] relative cursor-default hide-scrollbar")},m(i,_){G(t,i,_),I(i,s,_),I(i,e,_),g(e,n),g(n,p),G(o,p,null),g(p,a),G(h,p,null),g(n,f),g(n,v),G(r,v,null),g(v,c),G(m,v,null),g(e,k),g(e,y),g(y,D),g(y,J),g(y,L),g(L,E),ce(E,l[0]),g(L,w),G($,L,null),V=!0,K||(Q=se(E,"input",l[1]),K=!0)},p(i,[_]){const M={};_&4&&(M.$$scope={dirty:_,ctx:i}),o.$set(M);const N={};_&4&&(N.$$scope={dirty:_,ctx:i}),h.$set(N);const H={};_&4&&(H.$$scope={dirty:_,ctx:i}),r.$set(H);const O={};_&4&&(O.$$scope={dirty:_,ctx:i}),m.$set(O),_&1&&E.value!==i[0]&&ce(E,i[0]);const X={};_&4&&(X.$$scope={dirty:_,ctx:i}),$.$set(X)},i(i){V||(j(t.$$.fragment,i),j(o.$$.fragment,i),j(h.$$.fragment,i),j(r.$$.fragment,i),j(m.$$.fragment,i),j($.$$.fragment,i),V=!0)},o(i){z(t.$$.fragment,i),z(o.$$.fragment,i),z(h.$$.fragment,i),z(r.$$.fragment,i),z(m.$$.fragment,i),z($.$$.fragment,i),V=!1},d(i){i&&(d(s),d(e)),A(t,i),A(o),A(h),A(r),A(m),A($),K=!1,Q()}}}function Le(l,t,s){let e="";function n(){e=this.value,s(0,e)}return[e,n]}class Se extends le{constructor(t){super(),ae(this,t,Le,Be,ne,{})}}export{Se as component};