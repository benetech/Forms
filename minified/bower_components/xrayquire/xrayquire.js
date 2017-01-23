var xrayquire;(function(){var f={},r=typeof xrayquire==="undefined"?{}:xrayquire,k=requirejs.s,l=k.newContext,m=/\{(\w+)\}/g,a={require:true,exports:true,module:true},b;function d(w,x){if(w){var s;for(s=0;s<w.length;s+=1){if(w[s]&&x(w[s],s,w)){break}}}}function g(w,s){var x;for(x in w){if(w.hasOwnProperty(x)){if(s(w[x],x)){break}}}}function u(s,w){return s.hasOwnProperty(w)}function o(y,x,w,s){if(x){g(x,function(z,A){if(w||!u(y,A)){if(s&&typeof z!=="string"){if(!y[A]){y[A]={}}o(y[A],z,w,s)}else{y[A]=z}}})}return y}function i(s){return s.indexOf("_@r")!==-1}function q(s){return i(s)?"require()":s}function c(s){return !s||i(s)?"":s}function p(s){if(!s.xray){s.xray={traced:{},traceOrder:[],mixedCases:{}}}return s.xray}function n(x){var B=x.load,C=x.Module.prototype,s=C.enable,w=p(x),y=w.traced,z=w.mixedCases;function A(D){var F=D.map.id,E;if(D.map.prefix&&F.indexOf("_unnormalized")!==-1){return}if(!y[F]||!y[F].deps||!y[F].deps.length){d(D.depMaps,function(H){var G=H.id,I=G.toLowerCase();if(z[I]&&G!==z[I].id){console.error("Mixed case modules may conflict: "+q(z[I].refId)+' asked for: "'+z[I].id+'" and '+q(F)+' asked for: "'+G+'"')}else{z[I]={refId:F,id:G}}});E={map:D.map,deps:D.depMaps};if(!y[F]){w.traceOrder.push(F)}y[F]=E}}C.enable=function(){var D=s.apply(this,arguments);A(this);return D};g(x.registry,function(D){if(D.enabled){A(D)}});return x}g(requirejs.s.contexts,function(s){n(s)});k.newContext=function(s){return n(l)};requirejs.onResourceLoad=function(s,w,x){var y=w.id;if(typeof s.defined[y]==="undefined"){}};function e(s){s.sort(function(x,w){return x.toLowerCase()>w.toLowerCase()?1:-1})}function j(s){return(s||"").replace("<","&lt;").replace(">","&gt;").replace("&","&amp;").replace('"',"&quot;")}function t(s,w){return s.replace(m,function(y,z){var x=w[z];if(x===null||x===undefined){x=""}return x})}function h(y,z,w,x){var B=y.map.id,s=y.deps,A;if(i(B)||w[B]||a[B]){return}if(x[B]){return{mod:y,visited:x}}x[B]=true;d(s,function(C){var D=C.id,E=z[D];if(!E){return}return(A=h(E,z,w,o({},x)))});return A}function v(s,x){if(x){var w=document.createElement("iframe");document.body.appendChild(w);w.style.position="absolute";w.style.zIndex=99999;w.style.background="#888";w.style.width="100%";w.style.height="100%";w.style.top="0px";w.style.left="0px";var y=w.contentWindow.document;y.body.innerHTML=s}else{console.log(s);s=encodeURIComponent(s);window.open("data:text/html;charset=utf-8,"+s,"_blank")}}xrayquire={treeHtml:'<!DOCTYPE html>\n<html>\n<head>\n<title>Module Dependencies</title>\n<style>\nbody {\n    font-family: "Inconsolata",Andale Mono,Monaco,Monospace;\n    color: green;\n}\n\na {\n    color: #2E87DD;\n    text-decoration: none;\n}\n\na:hover {\n    text-decoration: underline;\n}\n\n.mod {\n    background-color: #FAFAFA;\n    border: 1px solid #E6E6E6;\n    border-radius: 5px 5px 5px 5px;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);\n    font-size: 13px;\n    line-height: 18px;\n    margin: 7px 0 21px;\n    overflow: auto;\n    padding: 5px 10px;\n}\n\n.url {\n    font-size: smaller;\n    color: grey;\n}\n\nli.standard {\n    color: grey;\n}\n\n</style>\n</head>\n<body>\n{content}\n</body>\n</html>\n',treeDepItemHtml:'<li><a href="#mod-{htmlId}">{id}</a></li>',treeDepItemNoLinkHtml:'<li class="standard">{id}</li>',treeItemHtml:'<div class="mod" id="mod-{htmlId}">\n    <span class="id">{id}</span>\n    <span class="url">{url}</span>\n    <ul class="deps">\n        {depItems}\n    </ul>\n</div>\n',makeHtmlId:function(s){return encodeURIComponent(s)},makeTemplateData:function(s){return{htmlId:xrayquire.makeHtmlId(s.id),id:j(q(s.id)),url:j(c(s.url))}},showTree:function(A,z){var x=requirejs.s.contexts[A||"_"],w=p(x),y=w.traced,s="";e(w.traceOrder);d(w.traceOrder,function(D){var B=y[D],C=xrayquire.makeTemplateData(B.map);if(i(B.map.id)&&(!B.deps||!B.deps.length)){return}C.depItems="";d(B.deps,function(F){var E=a[F.id]?xrayquire.treeDepItemNoLinkHtml:xrayquire.treeDepItemHtml;C.depItems+=t(E,xrayquire.makeTemplateData(F))});s+=t(xrayquire.treeItemHtml,C)});s=t(xrayquire.treeHtml,{content:s});v(s,z)},getCycles:function(B){var y=requirejs.s.contexts[B||"_"],A={},x=p(y),z=x.traced,w={},s=false;e(x.traceOrder);d(x.traceOrder,function(E){var D=z[E],C=h(D,z,w,{});if(C){s=true;D=C.mod;o(w,C.visited);A[D.map.id]={visited:C.visited}}});return s?A:null},cycleHtml:'<!DOCTYPE html>\n<html>\n<head>\n<title>Module Cycles</title>\n<style>\nbody {\n    font-family: "Inconsolata",Andale Mono,Monaco,Monospace;\n    color: green;\n}\n\na {\n    color: #2E87DD;\n    text-decoration: none;\n}\n\na:hover {\n    text-decoration: underline;\n}\n\n.mod {\n    background-color: #FAFAFA;\n    border: 1px solid #E6E6E6;\n    border-radius: 5px 5px 5px 5px;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);\n    font-size: 13px;\n    line-height: 18px;\n    margin: 7px 0 21px;\n    overflow: auto;\n    padding: 5px 10px;\n}\n\n</style>\n</head>\n<body>\n{content}\n</body>\n</html>\n',cycleEntryHtml:'<div class="mod">\n    <span class="id">{id}</span>\n    <ul class="chain">\n        {chain}\n    </ul>\n</div>\n',cycleChainEntryHtml:"<li>{id}</li>",showCycles:function(y,w){var x=xrayquire.getCycles(y),s="";if(x){g(x,function(z,B){var A="";g(z.visited,function(D,C){if(C!==B){A+=t(xrayquire.cycleChainEntryHtml,{id:C})}});s+=t(xrayquire.cycleEntryHtml,{id:B,chain:A})})}else{s="No cycles found"}s=t(xrayquire.cycleHtml,{content:s});v(s,w)}}}());