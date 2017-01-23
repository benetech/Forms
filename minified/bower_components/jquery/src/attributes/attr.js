define(["../core","../var/rnotwhite","../var/strundefined","../core/access","./support","./val","../selector"],function(k,j,d,b,i){var e,a,f=k.expr.attrHandle,c=/^(?:checked|selected)$/i,h=i.getSetAttribute,g=i.input;k.fn.extend({attr:function(l,m){return b(this,k.attr,l,m,arguments.length>1)},removeAttr:function(l){return this.each(function(){k.removeAttr(this,l)})}});k.extend({attr:function(p,o,q){var l,n,m=p.nodeType;if(!p||m===3||m===8||m===2){return}if(typeof p.getAttribute===d){return k.prop(p,o,q)}if(m!==1||!k.isXMLDoc(p)){o=o.toLowerCase();l=k.attrHooks[o]||(k.expr.match.bool.test(o)?a:e)}if(q!==undefined){if(q===null){k.removeAttr(p,o)}else{if(l&&"set" in l&&(n=l.set(p,q,o))!==undefined){return n}else{p.setAttribute(o,q+"");return q}}}else{if(l&&"get" in l&&(n=l.get(p,o))!==null){return n}else{n=k.find.attr(p,o);return n==null?undefined:n}}},removeAttr:function(n,p){var l,o,m=0,q=p&&p.match(j);if(q&&n.nodeType===1){while((l=q[m++])){o=k.propFix[l]||l;if(k.expr.match.bool.test(l)){if(g&&h||!c.test(l)){n[o]=false}else{n[k.camelCase("default-"+l)]=n[o]=false}}else{k.attr(n,l,"")}n.removeAttribute(h?l:o)}}},attrHooks:{type:{set:function(l,m){if(!i.radioValue&&m==="radio"&&k.nodeName(l,"input")){var n=l.value;l.setAttribute("type",m);if(n){l.value=n}return m}}}}});a={set:function(m,n,l){if(n===false){k.removeAttr(m,l)}else{if(g&&h||!c.test(l)){m.setAttribute(!h&&k.propFix[l]||l,l)}else{m[k.camelCase("default-"+l)]=m[l]=true}}return l}};k.each(k.expr.match.bool.source.match(/\w+/g),function(n,m){var l=f[m]||k.find.attr;f[m]=g&&h||!c.test(m)?function(q,p,s){var o,r;if(!s){r=f[p];f[p]=o;o=l(q,p,s)!=null?p.toLowerCase():null;f[p]=r}return o}:function(p,o,q){if(!q){return p[k.camelCase("default-"+o)]?o.toLowerCase():null}}});if(!g||!h){k.attrHooks.value={set:function(m,n,l){if(k.nodeName(m,"input")){m.defaultValue=n}else{return e&&e.set(m,n,l)}}}}if(!h){e={set:function(n,o,m){var l=n.getAttributeNode(m);if(!l){n.setAttributeNode((l=n.ownerDocument.createAttribute(m)))}l.value=o+="";if(m==="value"||o===n.getAttribute(m)){return o}}};f.id=f.name=f.coords=function(n,m,o){var l;if(!o){return(l=n.getAttributeNode(m))&&l.value!==""?l.value:null}};k.valHooks.button={get:function(n,m){var l=n.getAttributeNode(m);if(l&&l.specified){return l.value}},set:e.set};k.attrHooks.contenteditable={set:function(m,n,l){e.set(m,n===""?false:n,l)}};k.each(["width","height"],function(m,l){k.attrHooks[l]={set:function(n,o){if(o===""){n.setAttribute(l,"auto");return o}}}})}if(!i.style){k.attrHooks.style={get:function(l){return l.style.cssText||undefined},set:function(l,m){return(l.style.cssText=m+"")}}}});