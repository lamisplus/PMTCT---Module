/*! For license information please see 4.ca119e73.chunk.js.LICENSE.txt */
(this.webpackJsonpLamisPlus=this.webpackJsonpLamisPlus||[]).push([[4],{808:function(e,t,n){e.exports=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,o,a){return r=n()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a},r.apply(null,arguments)}function o(e){return a(e)||i(e)||l(e)||s()}function a(e){if(Array.isArray(e))return c(e)}function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function l(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u=Object.hasOwnProperty,m=Object.setPrototypeOf,f=Object.isFrozen,p=Object.getPrototypeOf,d=Object.getOwnPropertyDescriptor,h=Object.freeze,g=Object.seal,y=Object.create,b="undefined"!==typeof Reflect&&Reflect,v=b.apply,T=b.construct;v||(v=function(e,t,n){return e.apply(t,n)}),h||(h=function(e){return e}),g||(g=function(e){return e}),T||(T=function(e,t){return r(e,o(t))});var N=R(Array.prototype.forEach),A=R(Array.prototype.pop),E=R(Array.prototype.push),w=R(String.prototype.toLowerCase),S=R(String.prototype.toString),x=R(String.prototype.match),k=R(String.prototype.replace),_=R(String.prototype.indexOf),L=R(String.prototype.trim),O=R(RegExp.prototype.test),D=C(TypeError);function R(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return v(e,t,r)}}function C(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return T(e,n)}}function M(e,t,n){n=n||w,m&&m(e,null);for(var r=t.length;r--;){var o=t[r];if("string"===typeof o){var a=n(o);a!==o&&(f(t)||(t[r]=a),o=a)}e[o]=!0}return e}function I(e){var t,n=y(null);for(t in e)!0===v(u,e,[t])&&(n[t]=e[t]);return n}function F(e,t){for(;null!==e;){var n=d(e,t);if(n){if(n.get)return R(n.get);if("function"===typeof n.value)return R(n.value)}e=p(e)}function r(e){return console.warn("fallback value for",e),null}return r}var U=h(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),H=h(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),z=h(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),P=h(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),B=h(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),j=h(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),G=h(["#text"]),W=h(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),q=h(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Y=h(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),$=h(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),K=g(/\{\{[\w\W]*|[\w\W]*\}\}/gm),V=g(/<%[\w\W]*|[\w\W]*%>/gm),J=g(/\${[\w\W]*}/gm),X=g(/^data-[\-\w.\u00B7-\uFFFF]/),Z=g(/^aria-[\-\w]+$/),Q=g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ee=g(/^(?:\w+script|data):/i),te=g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ne=g(/^html$/i),re=function(){return"undefined"===typeof window?null:window},oe=function(t,n){if("object"!==e(t)||"function"!==typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(i){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};function ae(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re(),n=function(e){return ae(e)};if(n.version="2.4.3",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,a=t.document,i=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,s=t.Element,u=t.NodeFilter,m=t.NamedNodeMap,f=void 0===m?t.NamedNodeMap||t.MozNamedAttrMap:m,p=t.HTMLFormElement,d=t.DOMParser,g=t.trustedTypes,y=s.prototype,b=F(y,"cloneNode"),v=F(y,"nextSibling"),T=F(y,"childNodes"),R=F(y,"parentNode");if("function"===typeof l){var C=a.createElement("template");C.content&&C.content.ownerDocument&&(a=C.content.ownerDocument)}var ie=oe(g,r),le=ie?ie.createHTML(""):"",ce=a,se=ce.implementation,ue=ce.createNodeIterator,me=ce.createDocumentFragment,fe=ce.getElementsByTagName,pe=r.importNode,de={};try{de=I(a).documentMode?a.documentMode:{}}catch(Rt){}var he={};n.isSupported="function"===typeof R&&se&&"undefined"!==typeof se.createHTMLDocument&&9!==de;var ge,ye,be=K,ve=V,Te=J,Ne=X,Ae=Z,Ee=ee,we=te,Se=Q,xe=null,ke=M({},[].concat(o(U),o(H),o(z),o(B),o(G))),_e=null,Le=M({},[].concat(o(W),o(q),o(Y),o($))),Oe=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),De=null,Re=null,Ce=!0,Me=!0,Ie=!1,Fe=!1,Ue=!1,He=!1,ze=!1,Pe=!1,Be=!1,je=!1,Ge=!0,We=!1,qe="user-content-",Ye=!0,$e=!1,Ke={},Ve=null,Je=M({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Xe=null,Ze=M({},["audio","video","img","source","image","track"]),Qe=null,et=M({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),tt="http://www.w3.org/1998/Math/MathML",nt="http://www.w3.org/2000/svg",rt="http://www.w3.org/1999/xhtml",ot=rt,at=!1,it=null,lt=M({},[tt,nt,rt],S),ct=["application/xhtml+xml","text/html"],st="text/html",ut=null,mt=a.createElement("form"),ft=function(e){return e instanceof RegExp||e instanceof Function},pt=function(t){ut&&ut===t||(t&&"object"===e(t)||(t={}),t=I(t),ge=ge=-1===ct.indexOf(t.PARSER_MEDIA_TYPE)?st:t.PARSER_MEDIA_TYPE,ye="application/xhtml+xml"===ge?S:w,xe="ALLOWED_TAGS"in t?M({},t.ALLOWED_TAGS,ye):ke,_e="ALLOWED_ATTR"in t?M({},t.ALLOWED_ATTR,ye):Le,it="ALLOWED_NAMESPACES"in t?M({},t.ALLOWED_NAMESPACES,S):lt,Qe="ADD_URI_SAFE_ATTR"in t?M(I(et),t.ADD_URI_SAFE_ATTR,ye):et,Xe="ADD_DATA_URI_TAGS"in t?M(I(Ze),t.ADD_DATA_URI_TAGS,ye):Ze,Ve="FORBID_CONTENTS"in t?M({},t.FORBID_CONTENTS,ye):Je,De="FORBID_TAGS"in t?M({},t.FORBID_TAGS,ye):{},Re="FORBID_ATTR"in t?M({},t.FORBID_ATTR,ye):{},Ke="USE_PROFILES"in t&&t.USE_PROFILES,Ce=!1!==t.ALLOW_ARIA_ATTR,Me=!1!==t.ALLOW_DATA_ATTR,Ie=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Fe=t.SAFE_FOR_TEMPLATES||!1,Ue=t.WHOLE_DOCUMENT||!1,Pe=t.RETURN_DOM||!1,Be=t.RETURN_DOM_FRAGMENT||!1,je=t.RETURN_TRUSTED_TYPE||!1,ze=t.FORCE_BODY||!1,Ge=!1!==t.SANITIZE_DOM,We=t.SANITIZE_NAMED_PROPS||!1,Ye=!1!==t.KEEP_CONTENT,$e=t.IN_PLACE||!1,Se=t.ALLOWED_URI_REGEXP||Se,ot=t.NAMESPACE||rt,t.CUSTOM_ELEMENT_HANDLING&&ft(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Oe.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&ft(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Oe.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"===typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Oe.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Fe&&(Me=!1),Be&&(Pe=!0),Ke&&(xe=M({},o(G)),_e=[],!0===Ke.html&&(M(xe,U),M(_e,W)),!0===Ke.svg&&(M(xe,H),M(_e,q),M(_e,$)),!0===Ke.svgFilters&&(M(xe,z),M(_e,q),M(_e,$)),!0===Ke.mathMl&&(M(xe,B),M(_e,Y),M(_e,$))),t.ADD_TAGS&&(xe===ke&&(xe=I(xe)),M(xe,t.ADD_TAGS,ye)),t.ADD_ATTR&&(_e===Le&&(_e=I(_e)),M(_e,t.ADD_ATTR,ye)),t.ADD_URI_SAFE_ATTR&&M(Qe,t.ADD_URI_SAFE_ATTR,ye),t.FORBID_CONTENTS&&(Ve===Je&&(Ve=I(Ve)),M(Ve,t.FORBID_CONTENTS,ye)),Ye&&(xe["#text"]=!0),Ue&&M(xe,["html","head","body"]),xe.table&&(M(xe,["tbody"]),delete De.tbody),h&&h(t),ut=t)},dt=M({},["mi","mo","mn","ms","mtext"]),ht=M({},["foreignobject","desc","title","annotation-xml"]),gt=M({},["title","style","font","a","script"]),yt=M({},H);M(yt,z),M(yt,P);var bt=M({},B);M(bt,j);var vt=function(e){var t=R(e);t&&t.tagName||(t={namespaceURI:ot,tagName:"template"});var n=w(e.tagName),r=w(t.tagName);return!!it[e.namespaceURI]&&(e.namespaceURI===nt?t.namespaceURI===rt?"svg"===n:t.namespaceURI===tt?"svg"===n&&("annotation-xml"===r||dt[r]):Boolean(yt[n]):e.namespaceURI===tt?t.namespaceURI===rt?"math"===n:t.namespaceURI===nt?"math"===n&&ht[r]:Boolean(bt[n]):e.namespaceURI===rt?!(t.namespaceURI===nt&&!ht[r])&&!(t.namespaceURI===tt&&!dt[r])&&!bt[n]&&(gt[n]||!yt[n]):!("application/xhtml+xml"!==ge||!it[e.namespaceURI]))},Tt=function(e){E(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(Rt){try{e.outerHTML=le}catch(Rt){e.remove()}}},Nt=function(e,t){try{E(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(Rt){E(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!_e[e])if(Pe||Be)try{Tt(t)}catch(Rt){}else try{t.setAttribute(e,"")}catch(Rt){}},At=function(e){var t,n;if(ze)e="<remove></remove>"+e;else{var r=x(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===ge&&ot===rt&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=ie?ie.createHTML(e):e;if(ot===rt)try{t=(new d).parseFromString(o,ge)}catch(Rt){}if(!t||!t.documentElement){t=se.createDocument(ot,"template",null);try{t.documentElement.innerHTML=at?le:o}catch(Rt){}}var i=t.body||t.documentElement;return e&&n&&i.insertBefore(a.createTextNode(n),i.childNodes[0]||null),ot===rt?fe.call(t,Ue?"html":"body")[0]:Ue?t.documentElement:i},Et=function(e){return ue.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},wt=function(e){return e instanceof p&&("string"!==typeof e.nodeName||"string"!==typeof e.textContent||"function"!==typeof e.removeChild||!(e.attributes instanceof f)||"function"!==typeof e.removeAttribute||"function"!==typeof e.setAttribute||"string"!==typeof e.namespaceURI||"function"!==typeof e.insertBefore||"function"!==typeof e.hasChildNodes)},St=function(t){return"object"===e(c)?t instanceof c:t&&"object"===e(t)&&"number"===typeof t.nodeType&&"string"===typeof t.nodeName},xt=function(e,t,r){he[e]&&N(he[e],(function(e){e.call(n,t,r,ut)}))},kt=function(e){var t;if(xt("beforeSanitizeElements",e,null),wt(e))return Tt(e),!0;if(O(/[\u0080-\uFFFF]/,e.nodeName))return Tt(e),!0;var r=ye(e.nodeName);if(xt("uponSanitizeElement",e,{tagName:r,allowedTags:xe}),e.hasChildNodes()&&!St(e.firstElementChild)&&(!St(e.content)||!St(e.content.firstElementChild))&&O(/<[/\w]/g,e.innerHTML)&&O(/<[/\w]/g,e.textContent))return Tt(e),!0;if("select"===r&&O(/<template/i,e.innerHTML))return Tt(e),!0;if(!xe[r]||De[r]){if(!De[r]&&Lt(r)){if(Oe.tagNameCheck instanceof RegExp&&O(Oe.tagNameCheck,r))return!1;if(Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(r))return!1}if(Ye&&!Ve[r]){var o=R(e)||e.parentNode,a=T(e)||e.childNodes;if(a&&o)for(var i=a.length-1;i>=0;--i)o.insertBefore(b(a[i],!0),v(e))}return Tt(e),!0}return e instanceof s&&!vt(e)?(Tt(e),!0):"noscript"!==r&&"noembed"!==r||!O(/<\/no(script|embed)/i,e.innerHTML)?(Fe&&3===e.nodeType&&(t=e.textContent,t=k(t,be," "),t=k(t,ve," "),t=k(t,Te," "),e.textContent!==t&&(E(n.removed,{element:e.cloneNode()}),e.textContent=t)),xt("afterSanitizeElements",e,null),!1):(Tt(e),!0)},_t=function(e,t,n){if(Ge&&("id"===t||"name"===t)&&(n in a||n in mt))return!1;if(Me&&!Re[t]&&O(Ne,t));else if(Ce&&O(Ae,t));else if(!_e[t]||Re[t]){if(!(Lt(e)&&(Oe.tagNameCheck instanceof RegExp&&O(Oe.tagNameCheck,e)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(e))&&(Oe.attributeNameCheck instanceof RegExp&&O(Oe.attributeNameCheck,t)||Oe.attributeNameCheck instanceof Function&&Oe.attributeNameCheck(t))||"is"===t&&Oe.allowCustomizedBuiltInElements&&(Oe.tagNameCheck instanceof RegExp&&O(Oe.tagNameCheck,n)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(n))))return!1}else if(Qe[t]);else if(O(Se,k(n,we,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==_(n,"data:")||!Xe[e])if(Ie&&!O(Ee,k(n,we,"")));else if(n)return!1;return!0},Lt=function(e){return e.indexOf("-")>0},Ot=function(t){var r,o,a,i;xt("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:_e};for(i=l.length;i--;){var s=r=l[i],u=s.name,m=s.namespaceURI;if(o="value"===u?r.value:L(r.value),a=ye(u),c.attrName=a,c.attrValue=o,c.keepAttr=!0,c.forceKeepAttr=void 0,xt("uponSanitizeAttribute",t,c),o=c.attrValue,!c.forceKeepAttr&&(Nt(u,t),c.keepAttr))if(O(/\/>/i,o))Nt(u,t);else{Fe&&(o=k(o,be," "),o=k(o,ve," "),o=k(o,Te," "));var f=ye(t.nodeName);if(_t(f,a,o)){if(!We||"id"!==a&&"name"!==a||(Nt(u,t),o=qe+o),ie&&"object"===e(g)&&"function"===typeof g.getAttributeType)if(m);else switch(g.getAttributeType(f,a)){case"TrustedHTML":o=ie.createHTML(o);break;case"TrustedScriptURL":o=ie.createScriptURL(o)}try{m?t.setAttributeNS(m,u,o):t.setAttribute(u,o),A(n.removed)}catch(Rt){}}}}xt("afterSanitizeAttributes",t,null)}},Dt=function e(t){var n,r=Et(t);for(xt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)xt("uponSanitizeShadowNode",n,null),kt(n)||(n.content instanceof i&&e(n.content),Ot(n));xt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(o){var a,l,s,u,m,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((at=!o)&&(o="\x3c!--\x3e"),"string"!==typeof o&&!St(o)){if("function"!==typeof o.toString)throw D("toString is not a function");if("string"!==typeof(o=o.toString()))throw D("dirty is not a string, aborting")}if(!n.isSupported){if("object"===e(t.toStaticHTML)||"function"===typeof t.toStaticHTML){if("string"===typeof o)return t.toStaticHTML(o);if(St(o))return t.toStaticHTML(o.outerHTML)}return o}if(He||pt(f),n.removed=[],"string"===typeof o&&($e=!1),$e){if(o.nodeName){var p=ye(o.nodeName);if(!xe[p]||De[p])throw D("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof c)1===(l=(a=At("\x3c!----\x3e")).ownerDocument.importNode(o,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?a=l:a.appendChild(l);else{if(!Pe&&!Fe&&!Ue&&-1===o.indexOf("<"))return ie&&je?ie.createHTML(o):o;if(!(a=At(o)))return Pe?null:je?le:""}a&&ze&&Tt(a.firstChild);for(var d=Et($e?o:a);s=d.nextNode();)3===s.nodeType&&s===u||kt(s)||(s.content instanceof i&&Dt(s.content),Ot(s),u=s);if(u=null,$e)return o;if(Pe){if(Be)for(m=me.call(a.ownerDocument);a.firstChild;)m.appendChild(a.firstChild);else m=a;return _e.shadowroot&&(m=pe.call(r,m,!0)),m}var h=Ue?a.outerHTML:a.innerHTML;return Ue&&xe["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&O(ne,a.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+a.ownerDocument.doctype.name+">\n"+h),Fe&&(h=k(h,be," "),h=k(h,ve," "),h=k(h,Te," ")),ie&&je?ie.createHTML(h):h},n.setConfig=function(e){pt(e),He=!0},n.clearConfig=function(){ut=null,He=!1},n.isValidAttribute=function(e,t,n){ut||pt({});var r=ye(e),o=ye(t);return _t(r,o,n)},n.addHook=function(e,t){"function"===typeof t&&(he[e]=he[e]||[],E(he[e],t))},n.removeHook=function(e){if(he[e])return A(he[e])},n.removeHooks=function(e){he[e]&&(he[e]=[])},n.removeAllHooks=function(){he={}},n}return ae()}()}}]);
//# sourceMappingURL=4.ca119e73.chunk.js.map