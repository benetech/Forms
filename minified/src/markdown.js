define(["markdown-it","underscore"],function(d,b){var e=d("zero").enable(["link","emphasis","strikethrough","heading","list"]),a=e.renderer.rules.link_open||function(j,f,h,i,g){return g.renderToken(j,f,h)};e.renderer.rules.link_open=function(k,f,i,j,h){var g=k[f].attrIndex("target");if(g<0){k[f].attrPush(["target","_blank"])}else{k[f].attrs[g][1]="_blank"}return a(k,f,i,j,h)};function c(f){if(b.isString(f)){f=f.replace(/\\\\n/g,"\n");return e.render(f)}return""}return c});