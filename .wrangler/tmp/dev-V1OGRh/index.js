var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn3, res) => function __init() {
  return fn3 && (res = (0, fn3[__getOwnPropNames(fn3)[0]])(fn3 = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
  }
});

// node_modules/.pnpm/wrangler@4.94.0_@cloudflare+workers-types@4.20260523.1/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/.pnpm/wrangler@4.94.0_@cloudflare+workers-types@4.20260523.1/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// .output/server/chunks/_/shared.esm-bundler.mjs
function makeMap(e4) {
  const t6 = /* @__PURE__ */ Object.create(null);
  for (const a4 of e4.split(",")) t6[a4] = 1;
  return (e5) => e5 in t6;
}
function generateCodeFrame(e4, t6 = 0, a4 = e4.length) {
  if ((t6 = Math.max(0, Math.min(t6, e4.length))) > (a4 = Math.max(0, Math.min(a4, e4.length)))) return "";
  let n3 = e4.split(/(\r?\n)/);
  const r4 = n3.filter((e5, t7) => t7 % 2 == 1);
  n3 = n3.filter((e5, t7) => t7 % 2 == 0);
  let i5 = 0;
  const o5 = [];
  for (let e5 = 0; e5 < n3.length; e5++) if (i5 += n3[e5].length + (r4[e5] && r4[e5].length || 0), i5 >= t6) {
    for (let s4 = e5 - 2; s4 <= e5 + 2 || a4 > i5; s4++) {
      if (s4 < 0 || s4 >= n3.length) continue;
      const l3 = s4 + 1;
      o5.push(`${l3}${" ".repeat(Math.max(3 - String(l3).length, 0))}|  ${n3[s4]}`);
      const c4 = n3[s4].length, p4 = r4[s4] && r4[s4].length || 0;
      if (s4 === e5) {
        const e6 = t6 - (i5 - (c4 + p4)), n4 = Math.max(1, a4 > i5 ? c4 - e6 : a4 - t6);
        o5.push("   |  " + " ".repeat(e6) + "^".repeat(n4));
      } else if (s4 > e5) {
        if (a4 > i5) {
          const e6 = Math.max(Math.min(a4 - i5, c4), 1);
          o5.push("   |  " + "^".repeat(e6));
        }
        i5 += c4 + p4;
      }
    }
    break;
  }
  return o5.join("\n");
}
function normalizeStyle(e4) {
  if (i(e4)) {
    const t6 = {};
    for (let a4 = 0; a4 < e4.length; a4++) {
      const n3 = e4[a4], r4 = isString(n3) ? parseStringStyle(n3) : normalizeStyle(n3);
      if (r4) for (const e5 in r4) t6[e5] = r4[e5];
    }
    return t6;
  }
  if (isString(e4) || isObject(e4)) return e4;
}
function parseStringStyle(e4) {
  const t6 = {};
  return e4.replace(N, "").split(A).forEach((e5) => {
    if (e5) {
      const a4 = e5.split(T);
      a4.length > 1 && (t6[a4[0].trim()] = a4[1].trim());
    }
  }), t6;
}
function stringifyStyle(e4) {
  if (!e4) return "";
  if (isString(e4)) return e4;
  let t6 = "";
  for (const a4 in e4) {
    const n3 = e4[a4];
    if (isString(n3) || "number" == typeof n3) {
      t6 += `${a4.startsWith("--") ? a4 : d(a4)}:${n3};`;
    }
  }
  return t6;
}
function normalizeClass(e4) {
  let t6 = "";
  if (isString(e4)) t6 = e4;
  else if (i(e4)) for (let a4 = 0; a4 < e4.length; a4++) {
    const n3 = normalizeClass(e4[a4]);
    n3 && (t6 += n3 + " ");
  }
  else if (isObject(e4)) for (const a4 in e4) e4[a4] && (t6 += a4 + " ");
  return t6.trim();
}
function normalizeProps(e4) {
  if (!e4) return null;
  let { class: t6, style: a4 } = e4;
  return t6 && !isString(t6) && (e4.class = normalizeClass(t6)), a4 && (e4.style = normalizeStyle(a4)), e4;
}
function includeBooleanAttr(e4) {
  return !!e4 || "" === e4;
}
function isSSRSafeAttrName(e4) {
  if (L.hasOwnProperty(e4)) return L[e4];
  const t6 = _.test(e4);
  return t6 && console.error(`unsafe attribute name: ${e4}`), L[e4] = !t6;
}
function isRenderableAttrValue(e4) {
  if (null == e4) return false;
  const t6 = typeof e4;
  return "string" === t6 || "number" === t6 || "boolean" === t6;
}
function escapeHtml(e4) {
  const t6 = "" + e4, a4 = z.exec(t6);
  if (!a4) return t6;
  let n3, r4, i5 = "", o5 = 0;
  for (r4 = a4.index; r4 < t6.length; r4++) {
    switch (t6.charCodeAt(r4)) {
      case 34:
        n3 = "&quot;";
        break;
      case 38:
        n3 = "&amp;";
        break;
      case 39:
        n3 = "&#39;";
        break;
      case 60:
        n3 = "&lt;";
        break;
      case 62:
        n3 = "&gt;";
        break;
      default:
        continue;
    }
    o5 !== r4 && (i5 += t6.slice(o5, r4)), o5 = r4 + 1, i5 += n3;
  }
  return o5 !== r4 ? i5 + t6.slice(o5, r4) : i5;
}
function escapeHtmlComment(e4) {
  return e4.replace(I, "");
}
function looseEqual(e4, t6) {
  if (e4 === t6) return true;
  let a4 = isDate(e4), n3 = isDate(t6);
  if (a4 || n3) return !(!a4 || !n3) && e4.getTime() === t6.getTime();
  if (a4 = isSymbol(e4), n3 = isSymbol(t6), a4 || n3) return e4 === t6;
  if (a4 = i(e4), n3 = i(t6), a4 || n3) return !(!a4 || !n3) && (function(e5, t7) {
    if (e5.length !== t7.length) return false;
    let a5 = true;
    for (let n4 = 0; a5 && n4 < e5.length; n4++) a5 = looseEqual(e5[n4], t7[n4]);
    return a5;
  })(e4, t6);
  if (a4 = isObject(e4), n3 = isObject(t6), a4 || n3) {
    if (!a4 || !n3) return false;
    if (Object.keys(e4).length !== Object.keys(t6).length) return false;
    for (const a5 in e4) {
      const n4 = e4.hasOwnProperty(a5), r4 = t6.hasOwnProperty(a5);
      if (n4 && !r4 || !n4 && r4 || !looseEqual(e4[a5], t6[a5])) return false;
    }
  }
  return String(e4) === String(t6);
}
function looseIndexOf(e4, t6) {
  return e4.findIndex((e5) => looseEqual(e5, t6));
}
function normalizeCssVarValue(e4) {
  return null == e4 ? "initial" : "string" == typeof e4 ? "" === e4 ? " " : e4 : String(e4);
}
var t, a, NOOP, NO, isOn, isModelListener, n, remove, r, hasOwn, i, isMap, isSet, isDate, isRegExp, isFunction, isString, isSymbol, isObject, isPromise, o, toTypeString, toRawType, isPlainObject, isIntegerKey, s, l, cacheStringFunction, c, p, m, d, f, u, hasChanged, invokeArrayFns, def, looseToNumber, toNumber, g, getGlobalThis, h, y, b, E, S, A, T, N, k, O, M, C, x, v, R, _, L, P, w, D, F, z, I, U, isRef, toDisplayString, replacer, stringifySymbol, j;
var init_shared_esm_bundler = __esm({
  ".output/server/chunks/_/shared.esm-bundler.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_nitro();
    __name(makeMap, "makeMap");
    t = {};
    a = [];
    NOOP = /* @__PURE__ */ __name(() => {
    }, "NOOP");
    NO = /* @__PURE__ */ __name(() => false, "NO");
    isOn = /* @__PURE__ */ __name((e4) => 111 === e4.charCodeAt(0) && 110 === e4.charCodeAt(1) && (e4.charCodeAt(2) > 122 || e4.charCodeAt(2) < 97), "isOn");
    isModelListener = /* @__PURE__ */ __name((e4) => e4.startsWith("onUpdate:"), "isModelListener");
    n = Object.assign;
    remove = /* @__PURE__ */ __name((e4, t6) => {
      const a4 = e4.indexOf(t6);
      a4 > -1 && e4.splice(a4, 1);
    }, "remove");
    r = Object.prototype.hasOwnProperty;
    hasOwn = /* @__PURE__ */ __name((e4, t6) => r.call(e4, t6), "hasOwn");
    i = Array.isArray;
    isMap = /* @__PURE__ */ __name((e4) => "[object Map]" === toTypeString(e4), "isMap");
    isSet = /* @__PURE__ */ __name((e4) => "[object Set]" === toTypeString(e4), "isSet");
    isDate = /* @__PURE__ */ __name((e4) => "[object Date]" === toTypeString(e4), "isDate");
    isRegExp = /* @__PURE__ */ __name((e4) => "[object RegExp]" === toTypeString(e4), "isRegExp");
    isFunction = /* @__PURE__ */ __name((e4) => "function" == typeof e4, "isFunction");
    isString = /* @__PURE__ */ __name((e4) => "string" == typeof e4, "isString");
    isSymbol = /* @__PURE__ */ __name((e4) => "symbol" == typeof e4, "isSymbol");
    isObject = /* @__PURE__ */ __name((e4) => null !== e4 && "object" == typeof e4, "isObject");
    isPromise = /* @__PURE__ */ __name((e4) => (isObject(e4) || isFunction(e4)) && isFunction(e4.then) && isFunction(e4.catch), "isPromise");
    o = Object.prototype.toString;
    toTypeString = /* @__PURE__ */ __name((e4) => o.call(e4), "toTypeString");
    toRawType = /* @__PURE__ */ __name((e4) => toTypeString(e4).slice(8, -1), "toRawType");
    isPlainObject = /* @__PURE__ */ __name((e4) => "[object Object]" === toTypeString(e4), "isPlainObject");
    isIntegerKey = /* @__PURE__ */ __name((e4) => isString(e4) && "NaN" !== e4 && "-" !== e4[0] && "" + parseInt(e4, 10) === e4, "isIntegerKey");
    s = makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
    l = makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
    cacheStringFunction = /* @__PURE__ */ __name((e4) => {
      const t6 = /* @__PURE__ */ Object.create(null);
      return (a4) => t6[a4] || (t6[a4] = e4(a4));
    }, "cacheStringFunction");
    c = /-\w/g;
    p = cacheStringFunction((e4) => e4.replace(c, (e5) => e5.slice(1).toUpperCase()));
    m = /\B([A-Z])/g;
    d = cacheStringFunction((e4) => e4.replace(m, "-$1").toLowerCase());
    f = cacheStringFunction((e4) => e4.charAt(0).toUpperCase() + e4.slice(1));
    u = cacheStringFunction((e4) => e4 ? `on${f(e4)}` : "");
    hasChanged = /* @__PURE__ */ __name((e4, t6) => !Object.is(e4, t6), "hasChanged");
    invokeArrayFns = /* @__PURE__ */ __name((e4, ...t6) => {
      for (let a4 = 0; a4 < e4.length; a4++) e4[a4](...t6);
    }, "invokeArrayFns");
    def = /* @__PURE__ */ __name((e4, t6, a4, n3 = false) => {
      Object.defineProperty(e4, t6, { configurable: true, enumerable: false, writable: n3, value: a4 });
    }, "def");
    looseToNumber = /* @__PURE__ */ __name((e4) => {
      const t6 = parseFloat(e4);
      return isNaN(t6) ? e4 : t6;
    }, "looseToNumber");
    toNumber = /* @__PURE__ */ __name((e4) => {
      const t6 = isString(e4) ? Number(e4) : NaN;
      return isNaN(t6) ? e4 : t6;
    }, "toNumber");
    getGlobalThis = /* @__PURE__ */ __name(() => g || (g = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0 !== qr ? qr : {}), "getGlobalThis");
    h = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
    y = { 1: "TEXT", 2: "CLASS", 4: "STYLE", 8: "PROPS", 16: "FULL_PROPS", 32: "NEED_HYDRATION", 64: "STABLE_FRAGMENT", 128: "KEYED_FRAGMENT", 256: "UNKEYED_FRAGMENT", 512: "NEED_PATCH", 1024: "DYNAMIC_SLOTS", 2048: "DEV_ROOT_FRAGMENT", [-1]: "CACHED", [-2]: "BAIL" };
    b = { 1: "STABLE", 2: "DYNAMIC", 3: "FORWARDED" };
    E = makeMap("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
    S = E;
    __name(generateCodeFrame, "generateCodeFrame");
    __name(normalizeStyle, "normalizeStyle");
    A = /;(?![^(]*\))/g;
    T = /:([^]+)/;
    N = /\/\*[^]*?\*\//g;
    __name(parseStringStyle, "parseStringStyle");
    __name(stringifyStyle, "stringifyStyle");
    __name(normalizeClass, "normalizeClass");
    __name(normalizeProps, "normalizeProps");
    k = makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot");
    O = makeMap("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view");
    M = makeMap("annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics");
    C = makeMap("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr");
    x = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
    v = makeMap(x);
    R = makeMap(x + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
    __name(includeBooleanAttr, "includeBooleanAttr");
    _ = /[>/="'\u0009\u000a\u000c\u0020]/;
    L = {};
    __name(isSSRSafeAttrName, "isSSRSafeAttrName");
    P = { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv" };
    w = makeMap("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap");
    D = makeMap("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");
    F = makeMap("accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns");
    __name(isRenderableAttrValue, "isRenderableAttrValue");
    z = /["'&<>]/;
    __name(escapeHtml, "escapeHtml");
    I = /^-?>|<!--|-->|--!>|<!-$/g;
    __name(escapeHtmlComment, "escapeHtmlComment");
    U = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
    __name(looseEqual, "looseEqual");
    __name(looseIndexOf, "looseIndexOf");
    isRef = /* @__PURE__ */ __name((e4) => !(!e4 || true !== e4.__v_isRef), "isRef");
    toDisplayString = /* @__PURE__ */ __name((e4) => isString(e4) ? e4 : null == e4 ? "" : i(e4) || isObject(e4) && (e4.toString === o || !isFunction(e4.toString)) ? isRef(e4) ? toDisplayString(e4.value) : JSON.stringify(e4, replacer, 2) : String(e4), "toDisplayString");
    replacer = /* @__PURE__ */ __name((e4, t6) => isRef(t6) ? replacer(e4, t6.value) : isMap(t6) ? { [`Map(${t6.size})`]: [...t6.entries()].reduce((e5, [t7, a4], n3) => (e5[stringifySymbol(t7, n3) + " =>"] = a4, e5), {}) } : isSet(t6) ? { [`Set(${t6.size})`]: [...t6.values()].map((e5) => stringifySymbol(e5)) } : isSymbol(t6) ? stringifySymbol(t6) : !isObject(t6) || i(t6) || isPlainObject(t6) ? t6 : String(t6), "replacer");
    stringifySymbol = /* @__PURE__ */ __name((e4, t6 = "") => {
      var a4;
      return isSymbol(e4) ? `Symbol(${null != (a4 = e4.description) ? a4 : t6})` : e4;
    }, "stringifySymbol");
    __name(normalizeCssVarValue, "normalizeCssVarValue");
    j = Object.freeze(Object.defineProperty({ __proto__: null, EMPTY_ARR: a, EMPTY_OBJ: t, NO, NOOP, PatchFlagNames: y, PatchFlags: { TEXT: 1, 1: "TEXT", CLASS: 2, 2: "CLASS", STYLE: 4, 4: "STYLE", PROPS: 8, 8: "PROPS", FULL_PROPS: 16, 16: "FULL_PROPS", NEED_HYDRATION: 32, 32: "NEED_HYDRATION", STABLE_FRAGMENT: 64, 64: "STABLE_FRAGMENT", KEYED_FRAGMENT: 128, 128: "KEYED_FRAGMENT", UNKEYED_FRAGMENT: 256, 256: "UNKEYED_FRAGMENT", NEED_PATCH: 512, 512: "NEED_PATCH", DYNAMIC_SLOTS: 1024, 1024: "DYNAMIC_SLOTS", DEV_ROOT_FRAGMENT: 2048, 2048: "DEV_ROOT_FRAGMENT", CACHED: -1, "-1": "CACHED", BAIL: -2, "-2": "BAIL" }, ShapeFlags: { ELEMENT: 1, 1: "ELEMENT", FUNCTIONAL_COMPONENT: 2, 2: "FUNCTIONAL_COMPONENT", STATEFUL_COMPONENT: 4, 4: "STATEFUL_COMPONENT", TEXT_CHILDREN: 8, 8: "TEXT_CHILDREN", ARRAY_CHILDREN: 16, 16: "ARRAY_CHILDREN", SLOTS_CHILDREN: 32, 32: "SLOTS_CHILDREN", TELEPORT: 64, 64: "TELEPORT", SUSPENSE: 128, 128: "SUSPENSE", COMPONENT_SHOULD_KEEP_ALIVE: 256, 256: "COMPONENT_SHOULD_KEEP_ALIVE", COMPONENT_KEPT_ALIVE: 512, 512: "COMPONENT_KEPT_ALIVE", COMPONENT: 6, 6: "COMPONENT" }, SlotFlags: { STABLE: 1, 1: "STABLE", DYNAMIC: 2, 2: "DYNAMIC", FORWARDED: 3, 3: "FORWARDED" }, camelize: p, capitalize: f, cssVarNameEscapeSymbolsRE: U, def, escapeHtml, escapeHtmlComment, extend: n, genCacheKey: /* @__PURE__ */ __name(function(e4, t6) {
      return e4 + JSON.stringify(t6, (e5, t7) => "function" == typeof t7 ? t7.toString() : t7);
    }, "genCacheKey"), genPropsAccessExp: /* @__PURE__ */ __name(function(e4) {
      return h.test(e4) ? `__props.${e4}` : `__props[${JSON.stringify(e4)}]`;
    }, "genPropsAccessExp"), generateCodeFrame, getEscapedCssVarName: /* @__PURE__ */ __name(function(e4, t6) {
      return e4.replace(U, (e5) => t6 ? '"' === e5 ? '\\\\\\"' : `\\\\${e5}` : `\\${e5}`);
    }, "getEscapedCssVarName"), getGlobalThis, hasChanged, hasOwn, hyphenate: d, includeBooleanAttr, invokeArrayFns, isArray: i, isBooleanAttr: R, isBuiltInDirective: l, isDate, isFunction, isGloballyAllowed: E, isGloballyWhitelisted: S, isHTMLTag: k, isIntegerKey, isKnownHtmlAttr: w, isKnownMathMLAttr: F, isKnownSvgAttr: D, isMap, isMathMLTag: M, isModelListener, isObject, isOn, isPlainObject, isPromise, isRegExp, isRenderableAttrValue, isReservedProp: s, isSSRSafeAttrName, isSVGTag: O, isSet, isSpecialBooleanAttr: v, isString, isSymbol, isVoidTag: C, looseEqual, looseIndexOf, looseToNumber, makeMap, normalizeClass, normalizeCssVarValue, normalizeProps, normalizeStyle, objectToString: o, parseStringStyle, propsToAttrMap: P, remove, slotFlagsText: b, stringifyStyle, toDisplayString, toHandlerKey: u, toNumber, toRawType, toTypeString }, Symbol.toStringTag, { value: "Module" }));
  }
});

// .output/server/chunks/_/error-500.mjs
var error_500_exports = {};
__export(error_500_exports, {
  template: () => template
});
var t2, template;
var init_error_500 = __esm({
  ".output/server/chunks/_/error-500.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_shared_esm_bundler();
    init_nitro();
    t2 = { appName: "Nuxt", status: 500, statusText: "Internal server error", description: "This page is temporarily unavailable.", refresh: "Refresh this page" };
    template = /* @__PURE__ */ __name((n3) => (n3 = { ...t2, ...n3 }, '<!DOCTYPE html><html lang="en"><head><title>' + escapeHtml(n3.status) + " - " + escapeHtml(n3.statusText) + " | " + escapeHtml(n3.appName) + `</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport"><script>!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();<\/script><style>*,:after,:before{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color,#e5e7eb)}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[80px\\]{font-size:80px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[\\#020420\\]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:text-\\[110px\\]{font-size:110px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class="antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide"><div class="max-w-520px text-center"><h1 class="font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]">` + escapeHtml(n3.status) + '</h1><h2 class="font-semibold mb-2 sm:text-3xl text-2xl">' + escapeHtml(n3.statusText) + '</h2><p class="mb-4 px-2 text-[#64748B] text-md">' + escapeHtml(n3.description) + "</p></div></body></html>"), "template");
  }
});

// .output/server/chunks/build/client.precomputed.mjs
var client_precomputed_exports = {};
__export(client_precomputed_exports, {
  default: () => e
});
var e, s2, p2;
var init_client_precomputed = __esm({
  ".output/server/chunks/build/client.precomputed.mjs"() {
    "use strict";
    init_modules_watch_stub();
    e = { dependencies: { "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/entry.js": { scripts: { "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/entry.js": s2 = { resourceType: "script", module: true, prefetch: true, preload: true, file: "CLwpLgr9.js", name: "entry", src: "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/entry.js", isEntry: true, dynamicImports: ["../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/components/error-404.vue", "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/components/error-500.vue"] } }, styles: {}, preload: { "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/entry.js": s2 }, prefetch: {} }, "_DzqrVQwH.js": { scripts: {}, styles: {}, preload: { "_DzqrVQwH.js": p2 = { resourceType: "script", module: true, prefetch: true, preload: true, file: "DzqrVQwH.js", name: "composables", imports: ["../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/entry.js"] }, "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/entry.js": s2 }, prefetch: {} }, "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/components/error-404.vue": { scripts: {}, styles: {}, preload: { "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/components/error-404.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "D9gujOu8.js", name: "error-404", src: "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/components/error-404.vue", isDynamicEntry: true, imports: ["../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/entry.js", "_DzqrVQwH.js"], css: [] }, "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/entry.js": s2, "_DzqrVQwH.js": p2 }, prefetch: {} }, "error-404.Biqbe-zG.css": { scripts: {}, styles: {}, preload: { "error-404.Biqbe-zG.css": { file: "error-404.Biqbe-zG.css", resourceType: "style", prefetch: true, preload: true } }, prefetch: {} }, "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/components/error-500.vue": { scripts: {}, styles: {}, preload: { "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/components/error-500.vue": { resourceType: "script", module: true, prefetch: true, preload: true, file: "ByAmIp9N.js", name: "error-500", src: "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/components/error-500.vue", isDynamicEntry: true, imports: ["../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/entry.js", "_DzqrVQwH.js"], css: [] }, "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/entry.js": s2, "_DzqrVQwH.js": p2 }, prefetch: {} }, "error-500.C-osHKvJ.css": { scripts: {}, styles: {}, preload: { "error-500.C-osHKvJ.css": { file: "error-500.C-osHKvJ.css", resourceType: "style", prefetch: true, preload: true } }, prefetch: {} } }, entrypoints: ["../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/entry.js"], modules: { "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/components/error-404.vue": { file: "D9gujOu8.js", resourceType: "script", mimeType: void 0, module: true }, "error-404.Biqbe-zG.css": { file: "error-404.Biqbe-zG.css", resourceType: "style", mimeType: void 0, module: void 0 }, "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/components/error-500.vue": { file: "ByAmIp9N.js", resourceType: "script", mimeType: void 0, module: true }, "error-500.C-osHKvJ.css": { file: "error-500.C-osHKvJ.css", resourceType: "style", mimeType: void 0, module: void 0 }, "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/entry.js": { file: "CLwpLgr9.js", resourceType: "script", mimeType: void 0, module: true }, "_DzqrVQwH.js": { file: "DzqrVQwH.js", resourceType: "script", mimeType: void 0, module: true } } };
  }
});

// .output/server/chunks/build/composables-D_iuWgiO.mjs
function useHead2(s4, o5 = {}) {
  const u3 = o5.head || (function(t6) {
    var s5;
    const o6 = t6 || useNuxtApp();
    return (null == (s5 = o6.ssrContext) ? void 0 : s5.head) || o6.runWithContext(() => {
      if ($t.hasInjectionContext()) {
        const n3 = $t.inject(kr);
        if (!n3) throw new Error("[nuxt] [unhead] Missing Unhead instance.");
        return n3;
      }
    });
  })(o5.nuxt);
  return useHead(s4, { head: u3, ...o5 });
}
var init_composables_D_iuWgiO = __esm({
  ".output/server/chunks/build/composables-D_iuWgiO.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_server();
    init_renderer();
    __name(useHead2, "useHead");
  }
});

// .output/server/chunks/build/error-404-KIwpzQYM.mjs
var error_404_KIwpzQYM_exports = {};
__export(error_404_KIwpzQYM_exports, {
  default: () => k2
});
function defineNuxtLink(n3) {
  const a4 = n3.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(e4) {
    return "string" == typeof e4 && e4.startsWith("#");
  }
  __name(isHashLinkWithoutHashMode, "isHashLinkWithoutHashMode");
  function useNuxtLink(e4) {
    var a5, o5, s4;
    const c4 = useRouter(), p4 = useRuntimeConfig(), v3 = $t.computed(() => !!$t.unref(e4.target) && "_self" !== $t.unref(e4.target)), h4 = $t.computed(() => {
      const r4 = $t.unref(e4.to) || $t.unref(e4.href) || "";
      return "string" == typeof r4 && hasProtocol(r4, { acceptRelative: true });
    }), m3 = $t.resolveComponent("RouterLink"), g3 = m3 && "string" != typeof m3 ? m3.useLink : void 0, b4 = $t.computed(() => {
      if ($t.unref(e4.external)) return true;
      const t6 = $t.unref(e4.to) || $t.unref(e4.href) || "";
      return "object" != typeof t6 && ("" === t6 || h4.value);
    }), y4 = $t.computed(() => {
      const t6 = $t.unref(e4.to) || $t.unref(e4.href) || "";
      return b4.value ? t6 : (function(e5, t7, r4) {
        const a6 = null != r4 ? r4 : n3.trailingSlash;
        if (!e5 || "append" !== a6 && "remove" !== a6) return e5;
        if ("string" == typeof e5) return applyTrailingSlashBehavior(e5, a6);
        const o6 = "path" in e5 && void 0 !== e5.path ? e5.path : t7(e5).path;
        return { ...e5, name: void 0, path: applyTrailingSlashBehavior(o6, a6) };
      })(t6, c4.resolve, $t.unref(e4.trailingSlash));
    }), x4 = b4.value || null == g3 ? void 0 : g3({ ...e4, to: y4, viewTransition: $t.unref(e4.viewTransition) }), k4 = $t.computed(() => {
      var t6, a6, o6;
      const u3 = null != (t6 = $t.unref(e4.trailingSlash)) ? t6 : n3.trailingSlash;
      if (!y4.value || h4.value || isHashLinkWithoutHashMode(y4.value)) return y4.value;
      if (b4.value) {
        const e5 = "object" == typeof y4.value && "path" in y4.value ? resolveRouteObject(y4.value) : y4.value;
        return applyTrailingSlashBehavior("object" == typeof e5 ? c4.resolve(e5).href : e5, u3);
      }
      return "object" == typeof y4.value ? null != (o6 = null == (a6 = c4.resolve(y4.value)) ? void 0 : a6.href) ? o6 : null : applyTrailingSlashBehavior(joinURL(p4.app.baseURL, y4.value), u3);
    });
    return { to: y4, hasTarget: v3, isAbsoluteUrl: h4, isExternal: b4, href: k4, isActive: null != (a5 = null == x4 ? void 0 : x4.isActive) ? a5 : $t.computed(() => y4.value === c4.currentRoute.value.path), isExactActive: null != (o5 = null == x4 ? void 0 : x4.isExactActive) ? o5 : $t.computed(() => y4.value === c4.currentRoute.value.path), route: null != (s4 = null == x4 ? void 0 : x4.route) ? s4 : $t.computed(() => c4.resolve(y4.value)), async navigate(t6) {
      await navigateTo(k4.value, { replace: $t.unref(e4.replace), external: b4.value || v3.value });
    } };
  }
  __name(useNuxtLink, "useNuxtLink");
  return $t.defineComponent({ name: a4, props: { to: { type: [String, Object], default: void 0, required: false }, href: { type: [String, Object], default: void 0, required: false }, target: { type: String, default: void 0, required: false }, rel: { type: String, default: void 0, required: false }, noRel: { type: Boolean, default: void 0, required: false }, prefetch: { type: Boolean, default: void 0, required: false }, prefetchOn: { type: [String, Object], default: void 0, required: false }, noPrefetch: { type: Boolean, default: void 0, required: false }, activeClass: { type: String, default: void 0, required: false }, exactActiveClass: { type: String, default: void 0, required: false }, prefetchedClass: { type: String, default: void 0, required: false }, replace: { type: Boolean, default: void 0, required: false }, ariaCurrentValue: { type: String, default: void 0, required: false }, external: { type: Boolean, default: void 0, required: false }, custom: { type: Boolean, default: void 0, required: false }, trailingSlash: { type: String, default: void 0, required: false } }, useLink: useNuxtLink, setup(t6, { slots: r4 }) {
    const a5 = useRouter(), { to: o5, href: l3, navigate: d3, isExternal: f3, hasTarget: p4, isAbsoluteUrl: v3 } = useNuxtLink(t6);
    $t.shallowRef(false);
    async function prefetch(e4 = useNuxtApp()) {
    }
    __name(prefetch, "prefetch");
    return () => {
      var u3;
      if (!f3.value && !p4.value && !isHashLinkWithoutHashMode(o5.value)) {
        const e4 = { ref: void 0, to: o5.value, activeClass: t6.activeClass || n3.activeClass, exactActiveClass: t6.exactActiveClass || n3.exactActiveClass, replace: t6.replace, ariaCurrentValue: t6.ariaCurrentValue, custom: t6.custom };
        return t6.custom || (e4.rel = t6.rel || void 0), $t.h($t.resolveComponent("RouterLink"), e4, r4.default);
      }
      const c4 = t6.target || null, h4 = ((...e4) => e4.find((e5) => void 0 !== e5))(t6.noRel ? "" : t6.rel, n3.externalRelAttribute, v3.value || p4.value ? "noopener noreferrer" : "") || null;
      return t6.custom ? r4.default ? r4.default({ href: l3.value, navigate: d3, prefetch, get route() {
        if (!l3.value) return;
        const t7 = new URL(l3.value, "http://localhost");
        return { path: t7.pathname, fullPath: t7.pathname, get query() {
          return parseQuery(t7.search);
        }, hash: t7.hash, params: {}, name: void 0, matched: [], redirectedFrom: void 0, meta: {}, href: l3.value };
      }, rel: h4, target: c4, isExternal: f3.value || p4.value, isActive: false, isExactActive: false }) : null : $t.h("a", { ref: void 0, href: l3.value || null, rel: h4, target: c4, onClick: /* @__PURE__ */ __name(async (e4) => {
        if (!f3.value && !p4.value) {
          e4.preventDefault();
          try {
            const e5 = encodeRoutePath(l3.value);
            return await (t6.replace ? a5.replace(e5) : a5.push(e5));
          } finally {
          }
        }
      }, "onClick") }, null == (u3 = r4.default) ? void 0 : u3.call(r4));
    };
  } });
}
function applyTrailingSlashBehavior(e4, r4) {
  const o5 = "append" === r4 ? withTrailingSlash : withoutTrailingSlash;
  return hasProtocol(e4) && !e4.startsWith("http") ? e4 : o5(e4, true);
}
var b2, y2, x2, k2;
var init_error_404_KIwpzQYM = __esm({
  ".output/server/chunks/build/error-404-KIwpzQYM.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_nitro();
    init_server();
    init_composables_D_iuWgiO();
    init_renderer();
    init_shared_esm_bundler();
    __name(defineNuxtLink, "defineNuxtLink");
    b2 = defineNuxtLink(Wt);
    __name(applyTrailingSlashBehavior, "applyTrailingSlashBehavior");
    y2 = { __name: "error-404", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, status: { type: Number, default: 404 }, statusText: { type: String, default: "Page not found" }, description: { type: String, default: "Sorry, the page you are looking for could not be found." }, backHome: { type: String, default: "Go back home" } }, setup(e4) {
      const t6 = e4;
      return useHead2({ title: `${t6.status} - ${t6.statusText} | ${t6.appName}`, script: [{ innerHTML: `!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();` }], style: [{ innerHTML: '*,:after,:before{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color,#e5e7eb)}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1,h2{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (t7, r4, n3, a4) => {
        const o5 = b2;
        r4(`<div${ssrRenderAttrs($t.mergeProps({ class: "antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide" }, a4))} data-v-356f46f8><div class="max-w-520px text-center" data-v-356f46f8><h1 class="font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]" data-v-356f46f8>${ssrInterpolate(e4.status)}</h1><h2 class="font-semibold mb-2 sm:text-3xl text-2xl" data-v-356f46f8>${ssrInterpolate(e4.statusText)}</h2><p class="mb-4 px-2 text-[#64748B] text-md" data-v-356f46f8>${ssrInterpolate(e4.description)}</p><div class="flex items-center justify-center w-full" data-v-356f46f8>`), r4(ssrRenderComponent(o5, { to: "/", class: "font-medium hover:text-[#00DC82] text-sm underline underline-offset-3" }, { default: $t.withCtx((t8, r5, n4, a5) => {
          if (!r5) return [$t.createTextVNode($t.toDisplayString(e4.backHome), 1)];
          r5(`${ssrInterpolate(e4.backHome)}`);
        }), _: 1 }, n3)), r4("</div></div></div>");
      };
    } };
    x2 = y2.setup;
    y2.setup = (e4, t6) => {
      const r4 = $t.useSSRContext();
      return (r4.modules || (r4.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/components/error-404.vue"), x2 ? x2(e4, t6) : void 0;
    };
    k2 = _export_sfc(y2, [["__scopeId", "data-v-356f46f8"]]);
  }
});

// .output/server/chunks/build/error-500-BFI-d6Ga.mjs
var error_500_BFI_d6Ga_exports = {};
__export(error_500_BFI_d6Ga_exports, {
  default: () => i2
});
var o2, a2, i2;
var init_error_500_BFI_d6Ga = __esm({
  ".output/server/chunks/build/error-500-BFI-d6Ga.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_server();
    init_composables_D_iuWgiO();
    init_renderer();
    init_nitro();
    init_shared_esm_bundler();
    o2 = { __name: "error-500", __ssrInlineRender: true, props: { appName: { type: String, default: "Nuxt" }, status: { type: Number, default: 500 }, statusText: { type: String, default: "Internal server error" }, description: { type: String, default: "This page is temporarily unavailable." }, refresh: { type: String, default: "Refresh this page" } }, setup(e4) {
      const o5 = e4;
      return useHead2({ title: `${o5.status} - ${o5.statusText} | ${o5.appName}`, script: [{ innerHTML: `!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();` }], style: [{ innerHTML: '*,:after,:before{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color,#e5e7eb)}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }' }] }), (r4, o6, a4, i5) => {
        o6(`<div${ssrRenderAttrs($t.mergeProps({ class: "antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide" }, i5))} data-v-f7199970><div class="max-w-520px text-center" data-v-f7199970><h1 class="font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]" data-v-f7199970>${ssrInterpolate(e4.status)}</h1><h2 class="font-semibold mb-2 sm:text-3xl text-2xl" data-v-f7199970>${ssrInterpolate(e4.statusText)}</h2><p class="mb-4 px-2 text-[#64748B] text-md" data-v-f7199970>${ssrInterpolate(e4.description)}</p></div></div>`);
      };
    } };
    a2 = o2.setup;
    o2.setup = (e4, r4) => {
      const n3 = $t.useSSRContext();
      return (n3.modules || (n3.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/components/error-500.vue"), a2 ? a2(e4, r4) : void 0;
    };
    i2 = _export_sfc(o2, [["__scopeId", "data-v-f7199970"]]);
  }
});

// .output/server/chunks/build/server.mjs
var server_exports = {};
__export(server_exports, {
  _: () => _export_sfc,
  a: () => Wt,
  b: () => useRouter,
  c: () => useRuntimeConfig,
  e: () => encodeRoutePath,
  n: () => navigateTo,
  r: () => resolveRouteObject,
  s: () => dn,
  u: () => useNuxtApp,
  v: () => $t
});
function registerRuntimeHelpers(e4) {
  Object.getOwnPropertySymbols(e4).forEach((t6) => {
    Le[t6] = e4[t6];
  });
}
function createRoot(e4, t6 = "") {
  return { type: 0, source: t6, children: e4, helpers: /* @__PURE__ */ new Set(), components: [], directives: [], hoists: [], imports: [], cached: [], temps: 0, codegenNode: void 0, loc: Me };
}
function createVNodeCall(e4, t6, n3, r4, s4, o5, i5, a4 = false, c4 = false, l3 = false, p4 = Me) {
  return e4 && (a4 ? (e4.helper(Q), e4.helper(getVNodeBlockHelper(e4.inSSR, l3))) : e4.helper(getVNodeHelper(e4.inSSR, l3)), i5 && e4.helper(pe)), { type: 13, tag: t6, props: n3, children: r4, patchFlag: s4, dynamicProps: o5, directives: i5, isBlock: a4, disableTracking: c4, isComponent: l3, loc: p4 };
}
function createArrayExpression(e4, t6 = Me) {
  return { type: 17, loc: t6, elements: e4 };
}
function createObjectExpression(e4, t6 = Me) {
  return { type: 15, loc: t6, properties: e4 };
}
function createObjectProperty(e4, t6) {
  return { type: 16, loc: Me, key: isString(e4) ? createSimpleExpression(e4, true) : e4, value: t6 };
}
function createSimpleExpression(e4, t6 = false, n3 = Me, r4 = 0) {
  return { type: 4, loc: n3, content: e4, isStatic: t6, constType: t6 ? 3 : r4 };
}
function createCompoundExpression(e4, t6 = Me) {
  return { type: 8, loc: t6, children: e4 };
}
function createCallExpression(e4, t6 = [], n3 = Me) {
  return { type: 14, loc: n3, callee: e4, arguments: t6 };
}
function createFunctionExpression(e4, t6 = void 0, n3 = false, r4 = false, s4 = Me) {
  return { type: 18, params: e4, returns: t6, newline: n3, isSlot: r4, loc: s4 };
}
function createConditionalExpression(e4, t6, n3, r4 = true) {
  return { type: 19, test: e4, consequent: t6, alternate: n3, newline: r4, loc: Me };
}
function createCacheExpression(e4, t6, n3 = false, r4 = false) {
  return { type: 20, index: e4, value: t6, needPauseTracking: n3, inVOnce: r4, needArraySpread: false, loc: Me };
}
function createBlockStatement(e4) {
  return { type: 21, body: e4, loc: Me };
}
function getVNodeHelper(e4, t6) {
  return e4 || t6 ? te : ne;
}
function getVNodeBlockHelper(e4, t6) {
  return e4 || t6 ? Z : ee;
}
function convertToBlock(e4, { helper: t6, removeHelper: n3, inSSR: r4 }) {
  e4.isBlock || (e4.isBlock = true, n3(getVNodeHelper(r4, e4.isComponent)), t6(Q), t6(getVNodeBlockHelper(r4, e4.isComponent)));
}
function isTagStartChar(e4) {
  return e4 >= 97 && e4 <= 122 || e4 >= 65 && e4 <= 90;
}
function isWhitespace(e4) {
  return 32 === e4 || 10 === e4 || 9 === e4 || 12 === e4 || 13 === e4;
}
function isEndOfTagSection(e4) {
  return 47 === e4 || 62 === e4 || isWhitespace(e4);
}
function toCharCodes(e4) {
  const t6 = new Uint8Array(e4.length);
  for (let n3 = 0; n3 < e4.length; n3++) t6[n3] = e4.charCodeAt(n3);
  return t6;
}
function getCompatValue(e4, { compatConfig: t6 }) {
  const n3 = t6 && t6[e4];
  return "MODE" === e4 ? n3 || 3 : n3;
}
function isCompatEnabled(e4, t6) {
  const n3 = getCompatValue("MODE", t6), r4 = getCompatValue(e4, t6);
  return 3 === n3 ? true === r4 : false !== r4;
}
function checkCompatEnabled(e4, t6, n3, ...r4) {
  return isCompatEnabled(e4, t6);
}
function defaultOnError(e4) {
  throw e4;
}
function defaultOnWarn(e4) {
}
function createCompilerError(e4, t6, n3, r4) {
  const s4 = new SyntaxError(String(`https://vuejs.org/error-reference/#compiler-${e4}`));
  return s4.code = e4, s4.loc = t6, s4;
}
function walkBlockDeclarations(e4, t6) {
  const n3 = "SwitchCase" === e4.type ? e4.consequent : e4.body;
  for (const e5 of n3) if ("VariableDeclaration" === e5.type) {
    if (e5.declare) continue;
    for (const n4 of e5.declarations) for (const e6 of extractIdentifiers(n4.id)) t6(e6);
  } else if ("FunctionDeclaration" === e5.type || "ClassDeclaration" === e5.type) {
    if (e5.declare || !e5.id) continue;
    t6(e5.id);
  } else isForStatement(e5) ? walkForStatement(e5, true, t6) : "SwitchStatement" === e5.type && walkSwitchStatement(e5, true, t6);
}
function isForStatement(e4) {
  return "ForOfStatement" === e4.type || "ForInStatement" === e4.type || "ForStatement" === e4.type;
}
function walkForStatement(e4, t6, n3) {
  const r4 = "ForStatement" === e4.type ? e4.init : e4.left;
  if (r4 && "VariableDeclaration" === r4.type && ("var" === r4.kind ? t6 : !t6)) for (const e5 of r4.declarations) for (const t7 of extractIdentifiers(e5.id)) n3(t7);
}
function walkSwitchStatement(e4, t6, n3) {
  for (const r4 of e4.cases) {
    for (const e5 of r4.consequent) if ("VariableDeclaration" === e5.type && ("var" === e5.kind ? t6 : !t6)) for (const t7 of e5.declarations) for (const e6 of extractIdentifiers(t7.id)) n3(e6);
    walkBlockDeclarations(r4, n3);
  }
}
function extractIdentifiers(e4, t6 = []) {
  switch (e4.type) {
    case "Identifier":
      t6.push(e4);
      break;
    case "MemberExpression":
      let n3 = e4;
      for (; "MemberExpression" === n3.type; ) n3 = n3.object;
      t6.push(n3);
      break;
    case "ObjectPattern":
      for (const n4 of e4.properties) "RestElement" === n4.type ? extractIdentifiers(n4.argument, t6) : extractIdentifiers(n4.value, t6);
      break;
    case "ArrayPattern":
      e4.elements.forEach((e5) => {
        e5 && extractIdentifiers(e5, t6);
      });
      break;
    case "RestElement":
      extractIdentifiers(e4.argument, t6);
      break;
    case "AssignmentPattern":
      extractIdentifiers(e4.left, t6);
  }
  return t6;
}
function isCoreComponent(e4) {
  switch (e4) {
    case "Teleport":
    case "teleport":
      return J;
    case "Suspense":
    case "suspense":
      return K;
    case "KeepAlive":
    case "keep-alive":
      return Y;
    case "BaseTransition":
    case "base-transition":
      return z2;
  }
}
function advancePositionWithMutation(e4, t6, n3 = t6.length) {
  let r4 = 0, s4 = -1;
  for (let e5 = 0; e5 < n3; e5++) 10 === t6.charCodeAt(e5) && (r4++, s4 = e5);
  return e4.offset += n3, e4.line += r4, e4.column = -1 === s4 ? e4.column + n3 : n3 - s4, e4;
}
function findDir(e4, t6, n3 = false) {
  for (let r4 = 0; r4 < e4.props.length; r4++) {
    const s4 = e4.props[r4];
    if (7 === s4.type && (n3 || s4.exp) && (isString(t6) ? s4.name === t6 : t6.test(s4.name))) return s4;
  }
}
function findProp(e4, t6, n3 = false, r4 = false) {
  for (let s4 = 0; s4 < e4.props.length; s4++) {
    const o5 = e4.props[s4];
    if (6 === o5.type) {
      if (n3) continue;
      if (o5.name === t6 && (o5.value || r4)) return o5;
    } else if ("bind" === o5.name && (o5.exp || r4) && isStaticArgOf(o5.arg, t6)) return o5;
  }
}
function isStaticArgOf(e4, t6) {
  return !(!e4 || !isStaticExp(e4) || e4.content !== t6);
}
function hasDynamicKeyVBind(e4) {
  return e4.props.some((e5) => !(7 !== e5.type || "bind" !== e5.name || e5.arg && 4 === e5.arg.type && e5.arg.isStatic));
}
function isText$1(e4) {
  return 5 === e4.type || 2 === e4.type;
}
function isVPre(e4) {
  return 7 === e4.type && "pre" === e4.name;
}
function isVSlot(e4) {
  return 7 === e4.type && "slot" === e4.name;
}
function isTemplateNode(e4) {
  return 1 === e4.type && 3 === e4.tagType;
}
function isSlotOutlet(e4) {
  return 1 === e4.type && 2 === e4.tagType;
}
function getUnnormalizedProps(e4, t6 = []) {
  if (e4 && !isString(e4) && 14 === e4.type) {
    const n3 = e4.callee;
    if (!isString(n3) && Ke.has(n3)) return getUnnormalizedProps(e4.arguments[0], t6.concat(e4));
  }
  return [e4, t6];
}
function injectProp(e4, t6, n3) {
  let r4, s4, o5 = 13 === e4.type ? e4.props : e4.arguments[2], i5 = [];
  if (o5 && !isString(o5) && 14 === o5.type) {
    const e5 = getUnnormalizedProps(o5);
    o5 = e5[0], i5 = e5[1], s4 = i5[i5.length - 1];
  }
  if (null == o5 || isString(o5)) r4 = createObjectExpression([t6]);
  else if (14 === o5.type) {
    const e5 = o5.arguments[0];
    isString(e5) || 15 !== e5.type ? o5.callee === Te ? r4 = createCallExpression(n3.helper(me), [createObjectExpression([t6]), o5]) : o5.arguments.unshift(createObjectExpression([t6])) : hasProp(t6, e5) || e5.properties.unshift(t6), !r4 && (r4 = o5);
  } else 15 === o5.type ? (hasProp(t6, o5) || o5.properties.unshift(t6), r4 = o5) : (r4 = createCallExpression(n3.helper(me), [createObjectExpression([t6]), o5]), s4 && s4.callee === Se && (s4 = i5[i5.length - 2]));
  13 === e4.type ? s4 ? s4.arguments[0] = r4 : e4.props = r4 : s4 ? s4.arguments[0] = r4 : e4.arguments[2] = r4;
}
function hasProp(e4, t6) {
  let n3 = false;
  if (4 === e4.key.type) {
    const r4 = e4.key.content;
    n3 = t6.properties.some((e5) => 4 === e5.key.type && e5.key.content === r4);
  }
  return n3;
}
function toValidAssetId(e4, t6) {
  return `_${t6}_${e4.replace(/[^\w]/g, (t7, n3) => "-" === t7 ? "_" : e4.charCodeAt(n3).toString())}`;
}
function getMemoedVNodeCall(e4) {
  return 14 === e4.type && e4.callee === Re ? e4.arguments[1].returns : e4;
}
function isAllWhitespace(e4) {
  for (let t6 = 0; t6 < e4.length; t6++) if (!isWhitespace(e4.charCodeAt(t6))) return false;
  return true;
}
function isWhitespaceText(e4) {
  return 2 === e4.type && isAllWhitespace(e4.content) || 12 === e4.type && isWhitespaceText(e4.content);
}
function isCommentOrWhitespace(e4) {
  return 3 === e4.type || isWhitespaceText(e4);
}
function getSlice(e4, t6) {
  return et.slice(e4, t6);
}
function endOpenTag(e4) {
  pt.inSFCRoot && (tt.innerLoc = getLoc(e4 + 1, e4 + 1)), addNode(tt);
  const { tag: t6, ns: n3 } = tt;
  0 === n3 && Qe.isPreTag(t6) && it++, Qe.isVoidTag(t6) ? onCloseTag(tt, e4) : (lt.unshift(tt), 1 !== n3 && 2 !== n3 || (pt.inXML = true)), tt = null;
}
function onText(e4, t6, n3) {
  {
    const t7 = lt[0] && lt[0].tag;
    "script" !== t7 && "style" !== t7 && e4.includes("&") && (e4 = Qe.decodeEntities(e4, false));
  }
  const r4 = lt[0] || Ze, s4 = r4.children[r4.children.length - 1];
  s4 && 2 === s4.type ? (s4.content += e4, setLocEnd(s4.loc, n3)) : r4.children.push({ type: 2, content: e4, loc: getLoc(t6, n3) });
}
function onCloseTag(e4, t6, n3 = false) {
  setLocEnd(e4.loc, n3 ? backTrack(t6, 60) : (function(e5, t7) {
    let n4 = e5;
    for (; et.charCodeAt(n4) !== t7 && n4 < et.length - 1; ) n4++;
    return n4;
  })(t6, 62) + 1), pt.inSFCRoot && (e4.children.length ? e4.innerLoc.end = n({}, e4.children[e4.children.length - 1].loc.end) : e4.innerLoc.end = n({}, e4.innerLoc.start), e4.innerLoc.source = getSlice(e4.innerLoc.start.offset, e4.innerLoc.end.offset));
  const { tag: r4, ns: s4, children: o5 } = e4;
  if (at || ("slot" === r4 ? e4.tagType = 2 : isFragmentTemplate(e4) ? e4.tagType = 3 : (function({ tag: e5, props: t7 }) {
    if (Qe.isCustomElement(e5)) return false;
    if ("component" === e5 || (n4 = e5.charCodeAt(0), n4 > 64 && n4 < 91) || isCoreComponent(e5) || Qe.isBuiltInComponent && Qe.isBuiltInComponent(e5) || Qe.isNativeTag && !Qe.isNativeTag(e5)) return true;
    var n4;
    for (let e6 = 0; e6 < t7.length; e6++) {
      const n5 = t7[e6];
      if (6 === n5.type) {
        if ("is" === n5.name && n5.value) {
          if (n5.value.content.startsWith("vue:")) return true;
          if (checkCompatEnabled("COMPILER_IS_ON_ELEMENT", Qe, n5.loc)) return true;
        }
      } else if ("bind" === n5.name && isStaticArgOf(n5.arg, "is") && checkCompatEnabled("COMPILER_IS_ON_ELEMENT", Qe, n5.loc)) return true;
    }
    return false;
  })(e4) && (e4.tagType = 1)), pt.inRCDATA || (e4.children = condenseWhitespace(o5)), 0 === s4 && Qe.isIgnoreNewlineTag(r4)) {
    const e5 = o5[0];
    e5 && 2 === e5.type && (e5.content = e5.content.replace(/^\r?\n/, ""));
  }
  0 === s4 && Qe.isPreTag(r4) && it--, ct === e4 && (at = pt.inVPre = false, ct = null), pt.inXML && 0 === (lt[0] ? lt[0].ns : Qe.ns) && (pt.inXML = false);
  {
    const t7 = e4.props;
    if (!pt.inSFCRoot && isCompatEnabled("COMPILER_NATIVE_TEMPLATE", Qe) && "template" === e4.tag && !isFragmentTemplate(e4)) {
      const t8 = lt[0] || Ze, n5 = t8.children.indexOf(e4);
      t8.children.splice(n5, 1, ...e4.children);
    }
    const n4 = t7.find((e5) => 6 === e5.type && "inline-template" === e5.name);
    n4 && checkCompatEnabled("COMPILER_INLINE_TEMPLATE", Qe, n4.loc) && e4.children.length && (n4.value = { type: 2, content: getSlice(e4.children[0].loc.start.offset, e4.children[e4.children.length - 1].loc.end.offset), loc: n4.loc });
  }
}
function backTrack(e4, t6) {
  let n3 = e4;
  for (; et.charCodeAt(n3) !== t6 && n3 >= 0; ) n3--;
  return n3;
}
function isFragmentTemplate({ tag: e4, props: t6 }) {
  if ("template" === e4) {
    for (let e5 = 0; e5 < t6.length; e5++) if (7 === t6[e5].type && ht.has(t6[e5].name)) return true;
  }
  return false;
}
function condenseWhitespace(e4) {
  const t6 = "preserve" !== Qe.whitespace;
  let n3 = false;
  for (let r4 = 0; r4 < e4.length; r4++) {
    const s4 = e4[r4];
    if (2 === s4.type) if (it) s4.content = s4.content.replace(ft, "\n");
    else if (isAllWhitespace(s4.content)) {
      const o5 = e4[r4 - 1] && e4[r4 - 1].type, i5 = e4[r4 + 1] && e4[r4 + 1].type;
      !o5 || !i5 || t6 && (3 === o5 && (3 === i5 || 1 === i5) || 1 === o5 && (3 === i5 || 1 === i5 && hasNewlineChar(s4.content))) ? (n3 = true, e4[r4] = null) : s4.content = " ";
    } else t6 && (s4.content = condense(s4.content));
  }
  return n3 ? e4.filter(Boolean) : e4;
}
function hasNewlineChar(e4) {
  for (let t6 = 0; t6 < e4.length; t6++) {
    const n3 = e4.charCodeAt(t6);
    if (10 === n3 || 13 === n3) return true;
  }
  return false;
}
function condense(e4) {
  let t6 = "", n3 = false;
  for (let r4 = 0; r4 < e4.length; r4++) isWhitespace(e4.charCodeAt(r4)) ? n3 || (t6 += " ", n3 = true) : (t6 += e4[r4], n3 = false);
  return t6;
}
function addNode(e4) {
  (lt[0] || Ze).children.push(e4);
}
function getLoc(e4, t6) {
  return { start: pt.getPos(e4), end: null == t6 ? t6 : pt.getPos(t6), source: null == t6 ? t6 : getSlice(e4, t6) };
}
function setLocEnd(e4, t6) {
  e4.end = pt.getPos(t6), e4.source = getSlice(e4.start.offset, t6);
}
function dirToAttr(e4) {
  const t6 = { type: 6, name: e4.rawName, nameLoc: getLoc(e4.loc.start.offset, e4.loc.start.offset + e4.rawName.length), value: void 0, loc: e4.loc };
  if (e4.exp) {
    const n3 = e4.exp.loc;
    n3.end.offset < e4.loc.end.offset && (n3.start.offset--, n3.start.column--, n3.end.offset++, n3.end.column++), t6.value = { type: 2, content: e4.exp.content, loc: n3 };
  }
  return t6;
}
function createExp(e4, t6 = false, n3, r4 = 0, s4 = 0) {
  return createSimpleExpression(e4, t6, n3, r4);
}
function emitError(e4, t6, n3) {
  Qe.onError(createCompilerError(e4, getLoc(t6, t6)));
}
function baseParse(e4, t6) {
  if (pt.reset(), tt = null, nt = null, rt = "", st = -1, ot = -1, lt.length = 0, et = e4, Qe = n({}, ze), t6) {
    let e5;
    for (e5 in t6) null != t6[e5] && (Qe[e5] = t6[e5]);
  }
  pt.mode = "html" === Qe.parseMode ? 1 : "sfc" === Qe.parseMode ? 2 : 0, pt.inXML = 1 === Qe.ns || 2 === Qe.ns;
  const n3 = t6 && t6.delimiters;
  n3 && (pt.delimiterOpen = toCharCodes(n3[0]), pt.delimiterClose = toCharCodes(n3[1]));
  const r4 = Ze = createRoot([], e4);
  return pt.parse(et), r4.loc = getLoc(0, e4.length), r4.children = condenseWhitespace(r4.children), Ze = null, r4;
}
function cacheStatic(e4, t6) {
  walk(e4, void 0, t6, !!getSingleElementRoot(e4));
}
function getSingleElementRoot(e4) {
  const t6 = e4.children.filter((e5) => 3 !== e5.type);
  return 1 !== t6.length || 1 !== t6[0].type || isSlotOutlet(t6[0]) ? null : t6[0];
}
function walk(e4, t6, n3, r4 = false, s4 = false) {
  const { children: o5 } = e4, i5 = [];
  for (let t7 = 0; t7 < o5.length; t7++) {
    const a5 = o5[t7];
    if (1 === a5.type && 0 === a5.tagType) {
      const e5 = r4 ? 0 : getConstantType(a5, n3);
      if (e5 > 0) {
        if (e5 >= 2) {
          a5.codegenNode.patchFlag = -1, i5.push(a5);
          continue;
        }
      } else {
        const e6 = a5.codegenNode;
        if (13 === e6.type) {
          const t8 = e6.patchFlag;
          if ((void 0 === t8 || 512 === t8 || 1 === t8) && getGeneratedPropsConstantType(a5, n3) >= 2) {
            const t9 = getNodeProps(a5);
            t9 && (e6.props = n3.hoist(t9));
          }
          e6.dynamicProps && (e6.dynamicProps = n3.hoist(e6.dynamicProps));
        }
      }
    } else if (12 === a5.type) {
      if ((r4 ? 0 : getConstantType(a5, n3)) >= 2) {
        14 === a5.codegenNode.type && a5.codegenNode.arguments.length > 0 && a5.codegenNode.arguments.push("-1"), i5.push(a5);
        continue;
      }
    }
    if (1 === a5.type) {
      const t8 = 1 === a5.tagType;
      t8 && n3.scopes.vSlot++, walk(a5, e4, n3, false, s4), t8 && n3.scopes.vSlot--;
    } else if (11 === a5.type) walk(a5, e4, n3, 1 === a5.children.length, true);
    else if (9 === a5.type) for (let t8 = 0; t8 < a5.branches.length; t8++) walk(a5.branches[t8], e4, n3, 1 === a5.branches[t8].children.length, s4);
  }
  let a4 = false;
  if (i5.length === o5.length && 1 === e4.type) {
    if (0 === e4.tagType && e4.codegenNode && 13 === e4.codegenNode.type && i(e4.codegenNode.children)) e4.codegenNode.children = getCacheExpression(createArrayExpression(e4.codegenNode.children)), a4 = true;
    else if (1 === e4.tagType && e4.codegenNode && 13 === e4.codegenNode.type && e4.codegenNode.children && !i(e4.codegenNode.children) && 15 === e4.codegenNode.children.type) {
      const t7 = getSlotNode(e4.codegenNode, "default");
      t7 && (t7.returns = getCacheExpression(createArrayExpression(t7.returns)), a4 = true);
    } else if (3 === e4.tagType && t6 && 1 === t6.type && 1 === t6.tagType && t6.codegenNode && 13 === t6.codegenNode.type && t6.codegenNode.children && !i(t6.codegenNode.children) && 15 === t6.codegenNode.children.type) {
      const n4 = findDir(e4, "slot", true), r5 = n4 && n4.arg && getSlotNode(t6.codegenNode, n4.arg);
      r5 && (r5.returns = getCacheExpression(createArrayExpression(r5.returns)), a4 = true);
    }
  }
  if (!a4) for (const e5 of i5) e5.codegenNode = n3.cache(e5.codegenNode);
  function getCacheExpression(e5) {
    const t7 = n3.cache(e5);
    return t7.needArraySpread = true, t7;
  }
  __name(getCacheExpression, "getCacheExpression");
  function getSlotNode(e5, t7) {
    if (e5.children && !i(e5.children) && 15 === e5.children.type) {
      const n4 = e5.children.properties.find((e6) => e6.key === t7 || e6.key.content === t7);
      return n4 && n4.value;
    }
  }
  __name(getSlotNode, "getSlotNode");
  i5.length && n3.transformHoist && n3.transformHoist(o5, n3, e4);
}
function getConstantType(e4, t6) {
  const { constantCache: n3 } = t6;
  switch (e4.type) {
    case 1:
      if (0 !== e4.tagType) return 0;
      const r4 = n3.get(e4);
      if (void 0 !== r4) return r4;
      const s4 = e4.codegenNode;
      if (13 !== s4.type) return 0;
      if (s4.isBlock && "svg" !== e4.tag && "foreignObject" !== e4.tag && "math" !== e4.tag) return 0;
      if (void 0 === s4.patchFlag) {
        let r5 = 3;
        const o6 = getGeneratedPropsConstantType(e4, t6);
        if (0 === o6) return n3.set(e4, 0), 0;
        o6 < r5 && (r5 = o6);
        for (let s5 = 0; s5 < e4.children.length; s5++) {
          const o7 = getConstantType(e4.children[s5], t6);
          if (0 === o7) return n3.set(e4, 0), 0;
          o7 < r5 && (r5 = o7);
        }
        if (r5 > 1) for (let s5 = 0; s5 < e4.props.length; s5++) {
          const o7 = e4.props[s5];
          if (7 === o7.type && "bind" === o7.name && o7.exp) {
            const s6 = getConstantType(o7.exp, t6);
            if (0 === s6) return n3.set(e4, 0), 0;
            s6 < r5 && (r5 = s6);
          }
        }
        if (s4.isBlock) {
          for (let t7 = 0; t7 < e4.props.length; t7++) {
            if (7 === e4.props[t7].type) return n3.set(e4, 0), 0;
          }
          t6.removeHelper(Q), t6.removeHelper(getVNodeBlockHelper(t6.inSSR, s4.isComponent)), s4.isBlock = false, t6.helper(getVNodeHelper(t6.inSSR, s4.isComponent));
        }
        return n3.set(e4, r5), r5;
      }
      return n3.set(e4, 0), 0;
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
    default:
      return 0;
    case 5:
    case 12:
      return getConstantType(e4.content, t6);
    case 4:
      return e4.constType;
    case 8:
      let o5 = 3;
      for (let n4 = 0; n4 < e4.children.length; n4++) {
        const r5 = e4.children[n4];
        if (isString(r5) || isSymbol(r5)) continue;
        const s5 = getConstantType(r5, t6);
        if (0 === s5) return 0;
        s5 < o5 && (o5 = s5);
      }
      return o5;
    case 20:
      return 2;
  }
}
function getConstantTypeOfHelperCall(e4, t6) {
  if (14 === e4.type && !isString(e4.callee) && mt.has(e4.callee)) {
    const n3 = e4.arguments[0];
    if (4 === n3.type) return getConstantType(n3, t6);
    if (14 === n3.type) return getConstantTypeOfHelperCall(n3, t6);
  }
  return 0;
}
function getGeneratedPropsConstantType(e4, t6) {
  let n3 = 3;
  const r4 = getNodeProps(e4);
  if (r4 && 15 === r4.type) {
    const { properties: e5 } = r4;
    for (let r5 = 0; r5 < e5.length; r5++) {
      const { key: s4, value: o5 } = e5[r5], i5 = getConstantType(s4, t6);
      if (0 === i5) return i5;
      let a4;
      if (i5 < n3 && (n3 = i5), a4 = 4 === o5.type ? getConstantType(o5, t6) : 14 === o5.type ? getConstantTypeOfHelperCall(o5, t6) : 0, 0 === a4) return a4;
      a4 < n3 && (n3 = a4);
    }
  }
  return n3;
}
function getNodeProps(e4) {
  const t6 = e4.codegenNode;
  if (13 === t6.type) return t6.props;
}
function createTransformContext(e4, { filename: t6 = "", prefixIdentifiers: n3 = false, hoistStatic: r4 = false, hmr: s4 = false, cacheHandlers: o5 = false, nodeTransforms: i5 = [], directiveTransforms: a4 = {}, transformHoist: c4 = null, isBuiltInComponent: l3 = NOOP, isCustomElement: p4 = NOOP, expressionPlugins: d3 = [], scopeId: u3 = null, slotted: h4 = true, ssr: f3 = false, inSSR: m3 = false, ssrCssVars: E3 = "", bindingMetadata: g3 = t, inline: _3 = false, isTS: S3 = false, onError: T3 = defaultOnError, onWarn: N3 = defaultOnWarn, compatConfig: C3 }) {
  const x4 = t6.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), O3 = { filename: t6, selfName: x4 && f(p(x4[1])), prefixIdentifiers: n3, hoistStatic: r4, hmr: s4, cacheHandlers: o5, nodeTransforms: i5, directiveTransforms: a4, transformHoist: c4, isBuiltInComponent: l3, isCustomElement: p4, expressionPlugins: d3, scopeId: u3, slotted: h4, ssr: f3, inSSR: m3, ssrCssVars: E3, bindingMetadata: g3, inline: _3, isTS: S3, onError: T3, onWarn: N3, compatConfig: C3, root: e4, helpers: /* @__PURE__ */ new Map(), components: /* @__PURE__ */ new Set(), directives: /* @__PURE__ */ new Set(), hoists: [], imports: [], cached: [], constantCache: /* @__PURE__ */ new WeakMap(), temps: 0, identifiers: /* @__PURE__ */ Object.create(null), scopes: { vFor: 0, vSlot: 0, vPre: 0, vOnce: 0 }, parent: null, grandParent: null, currentNode: e4, childIndex: 0, inVOnce: false, helper(e5) {
    const t7 = O3.helpers.get(e5) || 0;
    return O3.helpers.set(e5, t7 + 1), e5;
  }, removeHelper(e5) {
    const t7 = O3.helpers.get(e5);
    if (t7) {
      const n4 = t7 - 1;
      n4 ? O3.helpers.set(e5, n4) : O3.helpers.delete(e5);
    }
  }, helperString: /* @__PURE__ */ __name((e5) => `_${Le[O3.helper(e5)]}`, "helperString"), replaceNode(e5) {
    O3.parent.children[O3.childIndex] = O3.currentNode = e5;
  }, removeNode(e5) {
    const t7 = O3.parent.children, n4 = e5 ? t7.indexOf(e5) : O3.currentNode ? O3.childIndex : -1;
    e5 && e5 !== O3.currentNode ? O3.childIndex > n4 && (O3.childIndex--, O3.onNodeRemoved()) : (O3.currentNode = null, O3.onNodeRemoved()), O3.parent.children.splice(n4, 1);
  }, onNodeRemoved: NOOP, addIdentifiers(e5) {
  }, removeIdentifiers(e5) {
  }, hoist(e5) {
    isString(e5) && (e5 = createSimpleExpression(e5)), O3.hoists.push(e5);
    const t7 = createSimpleExpression(`_hoisted_${O3.hoists.length}`, false, e5.loc, 2);
    return t7.hoisted = e5, t7;
  }, cache(e5, t7 = false, n4 = false) {
    const r5 = createCacheExpression(O3.cached.length, e5, t7, n4);
    return O3.cached.push(r5), r5;
  } };
  return O3.filters = /* @__PURE__ */ new Set(), O3;
}
function transform(e4, t6) {
  const n3 = createTransformContext(e4, t6);
  traverseNode(e4, n3), t6.hoistStatic && cacheStatic(e4, n3), t6.ssr || (function(e5, t7) {
    const { helper: n4 } = t7, { children: r4 } = e5;
    if (1 === r4.length) {
      const n5 = getSingleElementRoot(e5);
      if (n5 && n5.codegenNode) {
        const r5 = n5.codegenNode;
        13 === r5.type && convertToBlock(r5, t7), e5.codegenNode = r5;
      } else e5.codegenNode = r4[0];
    } else if (r4.length > 1) {
      let r5 = 64;
      e5.codegenNode = createVNodeCall(t7, n4(q), void 0, e5.children, r5, void 0, void 0, true, void 0, false);
    }
  })(e4, n3), e4.helpers = /* @__PURE__ */ new Set([...n3.helpers.keys()]), e4.components = [...n3.components], e4.directives = [...n3.directives], e4.imports = n3.imports, e4.hoists = n3.hoists, e4.temps = n3.temps, e4.cached = n3.cached, e4.transformed = true, e4.filters = [...n3.filters];
}
function traverseNode(e4, t6) {
  t6.currentNode = e4;
  const { nodeTransforms: n3 } = t6, r4 = [];
  for (let s5 = 0; s5 < n3.length; s5++) {
    const o5 = n3[s5](e4, t6);
    if (o5 && (i(o5) ? r4.push(...o5) : r4.push(o5)), !t6.currentNode) return;
    e4 = t6.currentNode;
  }
  switch (e4.type) {
    case 3:
      t6.ssr || t6.helper(re);
      break;
    case 5:
      t6.ssr || t6.helper(fe);
      break;
    case 9:
      for (let n4 = 0; n4 < e4.branches.length; n4++) traverseNode(e4.branches[n4], t6);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      !(function(e5, t7) {
        let n4 = 0;
        const nodeRemoved = /* @__PURE__ */ __name(() => {
          n4--;
        }, "nodeRemoved");
        for (; n4 < e5.children.length; n4++) {
          const r5 = e5.children[n4];
          isString(r5) || (t7.grandParent = t7.parent, t7.parent = e5, t7.childIndex = n4, t7.onNodeRemoved = nodeRemoved, traverseNode(r5, t7));
        }
      })(e4, t6);
  }
  t6.currentNode = e4;
  let s4 = r4.length;
  for (; s4--; ) r4[s4]();
}
function createStructuralDirectiveTransform(e4, t6) {
  const n3 = isString(e4) ? (t7) => t7 === e4 : (t7) => e4.test(t7);
  return (e5, r4) => {
    if (1 === e5.type) {
      const { props: s4 } = e5;
      if (3 === e5.tagType && s4.some(isVSlot)) return;
      const o5 = [];
      for (let i5 = 0; i5 < s4.length; i5++) {
        const a4 = s4[i5];
        if (7 === a4.type && n3(a4.name)) {
          s4.splice(i5, 1), i5--;
          const n4 = t6(e5, a4, r4);
          n4 && o5.push(n4);
        }
      }
      return o5;
    }
  };
}
function generate(e4, t6 = {}) {
  const n3 = (function(e5, { mode: t7 = "function", prefixIdentifiers: n4 = "module" === t7, sourceMap: r5 = false, filename: s5 = "template.vue.html", scopeId: o6 = null, optimizeImports: i6 = false, runtimeGlobalName: a5 = "Vue", runtimeModuleName: c5 = "vue", ssrRuntimeModuleName: l4 = "vue/server-renderer", ssr: p5 = false, isTS: d4 = false, inSSR: u4 = false }) {
    const h5 = { mode: t7, prefixIdentifiers: n4, sourceMap: r5, filename: s5, scopeId: o6, optimizeImports: i6, runtimeGlobalName: a5, runtimeModuleName: c5, ssrRuntimeModuleName: l4, ssr: p5, isTS: d4, inSSR: u4, source: e5.source, code: "", column: 1, line: 1, offset: 0, indentLevel: 0, pure: false, map: void 0, helper: /* @__PURE__ */ __name((e6) => `_${Le[e6]}`, "helper"), push(e6, t8 = -2, n5) {
      h5.code += e6;
    }, indent() {
      newline(++h5.indentLevel);
    }, deindent(e6 = false) {
      e6 ? --h5.indentLevel : newline(--h5.indentLevel);
    }, newline() {
      newline(h5.indentLevel);
    } };
    function newline(e6) {
      h5.push("\n" + "  ".repeat(e6), 0);
    }
    __name(newline, "newline");
    return h5;
  })(e4, t6);
  t6.onContextCreated && t6.onContextCreated(n3);
  const { mode: r4, push: s4, prefixIdentifiers: o5, indent: i5, deindent: a4, newline: c4, scopeId: l3, ssr: p4 } = n3, d3 = Array.from(e4.helpers), u3 = d3.length > 0, h4 = !o5 && "module" !== r4;
  !(function(e5, t7) {
    const { ssr: n4, prefixIdentifiers: r5, push: s5, newline: o6, runtimeModuleName: i6, runtimeGlobalName: a5, ssrRuntimeModuleName: c5 } = t7, l4 = a5, p5 = Array.from(e5.helpers);
    if (p5.length > 0 && (s5(`const _Vue = ${l4}
`, -1), e5.hoists.length)) {
      s5(`const { ${[te, ne, re, se, oe].filter((e6) => p5.includes(e6)).map(aliasHelper).join(", ")} } = _Vue
`, -1);
    }
    (function(e6, t8) {
      if (!e6.length) return;
      t8.pure = true;
      const { push: n5, newline: r6 } = t8;
      r6();
      for (let s6 = 0; s6 < e6.length; s6++) {
        const o7 = e6[s6];
        o7 && (n5(`const _hoisted_${s6 + 1} = `), genNode(o7, t8), r6());
      }
      t8.pure = false;
    })(e5.hoists, t7), o6(), s5("return ");
  })(e4, n3);
  if (s4(`function ${p4 ? "ssrRender" : "render"}(${(p4 ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ")}) {`), i5(), h4 && (s4("with (_ctx) {"), i5(), u3 && (s4(`const { ${d3.map(aliasHelper).join(", ")} } = _Vue
`, -1), c4())), e4.components.length && (genAssets(e4.components, "component", n3), (e4.directives.length || e4.temps > 0) && c4()), e4.directives.length && (genAssets(e4.directives, "directive", n3), e4.temps > 0 && c4()), e4.filters && e4.filters.length && (c4(), genAssets(e4.filters, "filter", n3), c4()), e4.temps > 0) {
    s4("let ");
    for (let t7 = 0; t7 < e4.temps; t7++) s4(`${t7 > 0 ? ", " : ""}_temp${t7}`);
  }
  return (e4.components.length || e4.directives.length || e4.temps) && (s4("\n", 0), c4()), p4 || s4("return "), e4.codegenNode ? genNode(e4.codegenNode, n3) : s4("null"), h4 && (a4(), s4("}")), a4(), s4("}"), { ast: e4, code: n3.code, preamble: "", map: n3.map ? n3.map.toJSON() : void 0 };
}
function genAssets(e4, t6, { helper: n3, push: r4, newline: s4, isTS: o5 }) {
  const i5 = n3("filter" === t6 ? le : "component" === t6 ? ie : ce);
  for (let n4 = 0; n4 < e4.length; n4++) {
    let a4 = e4[n4];
    const c4 = a4.endsWith("__self");
    c4 && (a4 = a4.slice(0, -6)), r4(`const ${toValidAssetId(a4, t6)} = ${i5}(${JSON.stringify(a4)}${c4 ? ", true" : ""})${o5 ? "!" : ""}`), n4 < e4.length - 1 && s4();
  }
}
function genNodeListAsArray(e4, t6) {
  const n3 = e4.length > 3 || false;
  t6.push("["), n3 && t6.indent(), genNodeList(e4, t6, n3), n3 && t6.deindent(), t6.push("]");
}
function genNodeList(e4, t6, n3 = false, r4 = true) {
  const { push: s4, newline: o5 } = t6;
  for (let i5 = 0; i5 < e4.length; i5++) {
    const a4 = e4[i5];
    isString(a4) ? s4(a4, -3) : i(a4) ? genNodeListAsArray(a4, t6) : genNode(a4, t6), i5 < e4.length - 1 && (n3 ? (r4 && s4(","), o5()) : r4 && s4(", "));
  }
}
function genNode(e4, t6) {
  if (isString(e4)) t6.push(e4, -3);
  else if (isSymbol(e4)) t6.push(t6.helper(e4));
  else switch (e4.type) {
    case 1:
    case 9:
    case 11:
    case 12:
      genNode(e4.codegenNode, t6);
      break;
    case 2:
      !(function(e5, t7) {
        t7.push(JSON.stringify(e5.content), -3, e5);
      })(e4, t6);
      break;
    case 4:
      genExpression(e4, t6);
      break;
    case 5:
      !(function(e5, t7) {
        const { push: n3, helper: r4, pure: s4 } = t7;
        s4 && n3(Et);
        n3(`${r4(fe)}(`), genNode(e5.content, t7), n3(")");
      })(e4, t6);
      break;
    case 8:
      genCompoundExpression(e4, t6);
      break;
    case 3:
      !(function(e5, t7) {
        const { push: n3, helper: r4, pure: s4 } = t7;
        s4 && n3(Et);
        n3(`${r4(re)}(${JSON.stringify(e5.content)})`, -3, e5);
      })(e4, t6);
      break;
    case 13:
      !(function(e5, t7) {
        const { push: n3, helper: r4, pure: s4 } = t7, { tag: o5, props: i5, children: a4, patchFlag: c4, dynamicProps: l3, directives: p4, isBlock: d3, disableTracking: u3, isComponent: h4 } = e5;
        let f3;
        c4 && (f3 = String(c4));
        p4 && n3(r4(pe) + "(");
        d3 && n3(`(${r4(Q)}(${u3 ? "true" : ""}), `);
        s4 && n3(Et);
        const m3 = d3 ? getVNodeBlockHelper(t7.inSSR, h4) : getVNodeHelper(t7.inSSR, h4);
        n3(r4(m3) + "(", -2, e5), genNodeList((function(e6) {
          let t8 = e6.length;
          for (; t8-- && null == e6[t8]; ) ;
          return e6.slice(0, t8 + 1).map((e7) => e7 || "null");
        })([o5, i5, a4, f3, l3]), t7), n3(")"), d3 && n3(")");
        p4 && (n3(", "), genNode(p4, t7), n3(")"));
      })(e4, t6);
      break;
    case 14:
      !(function(e5, t7) {
        const { push: n3, helper: r4, pure: s4 } = t7, o5 = isString(e5.callee) ? e5.callee : r4(e5.callee);
        s4 && n3(Et);
        n3(o5 + "(", -2, e5), genNodeList(e5.arguments, t7), n3(")");
      })(e4, t6);
      break;
    case 15:
      !(function(e5, t7) {
        const { push: n3, indent: r4, deindent: s4, newline: o5 } = t7, { properties: i5 } = e5;
        if (!i5.length) return void n3("{}", -2, e5);
        const a4 = i5.length > 1 || false;
        n3(a4 ? "{" : "{ "), a4 && r4();
        for (let e6 = 0; e6 < i5.length; e6++) {
          const { key: r5, value: s5 } = i5[e6];
          genExpressionAsPropertyKey(r5, t7), n3(": "), genNode(s5, t7), e6 < i5.length - 1 && (n3(","), o5());
        }
        a4 && s4(), n3(a4 ? "}" : " }");
      })(e4, t6);
      break;
    case 17:
      !(function(e5, t7) {
        genNodeListAsArray(e5.elements, t7);
      })(e4, t6);
      break;
    case 18:
      !(function(e5, t7) {
        const { push: n3, indent: r4, deindent: s4 } = t7, { params: o5, returns: i5, body: a4, newline: c4, isSlot: l3 } = e5;
        l3 && n3(`_${Le[be]}(`);
        n3("(", -2, e5), i(o5) ? genNodeList(o5, t7) : o5 && genNode(o5, t7);
        n3(") => "), (c4 || a4) && (n3("{"), r4());
        i5 ? (c4 && n3("return "), i(i5) ? genNodeListAsArray(i5, t7) : genNode(i5, t7)) : a4 && genNode(a4, t7);
        (c4 || a4) && (s4(), n3("}"));
        l3 && (e5.isNonScopedSlot && n3(", undefined, true"), n3(")"));
      })(e4, t6);
      break;
    case 19:
      !(function(e5, t7) {
        const { test: n3, consequent: r4, alternate: s4, newline: o5 } = e5, { push: i5, indent: a4, deindent: c4, newline: l3 } = t7;
        if (4 === n3.type) {
          const e6 = !isSimpleIdentifier(n3.content);
          e6 && i5("("), genExpression(n3, t7), e6 && i5(")");
        } else i5("("), genNode(n3, t7), i5(")");
        o5 && a4(), t7.indentLevel++, o5 || i5(" "), i5("? "), genNode(r4, t7), t7.indentLevel--, o5 && l3(), o5 || i5(" "), i5(": ");
        const p4 = 19 === s4.type;
        p4 || t7.indentLevel++;
        genNode(s4, t7), p4 || t7.indentLevel--;
        o5 && c4(true);
      })(e4, t6);
      break;
    case 20:
      !(function(e5, t7) {
        const { push: n3, helper: r4, indent: s4, deindent: o5, newline: i5 } = t7, { needPauseTracking: a4, needArraySpread: c4 } = e5;
        c4 && n3("[...(");
        n3(`_cache[${e5.index}] || (`), a4 && (s4(), n3(`${r4(xe)}(-1`), e5.inVOnce && n3(", true"), n3("),"), i5(), n3("("));
        n3(`_cache[${e5.index}] = `), genNode(e5.value, t7), a4 && (n3(`).cacheIndex = ${e5.index},`), i5(), n3(`${r4(xe)}(1),`), i5(), n3(`_cache[${e5.index}]`), o5());
        n3(")"), c4 && n3(")]");
      })(e4, t6);
      break;
    case 21:
      genNodeList(e4.body, t6, true, false);
  }
}
function genExpression(e4, t6) {
  const { content: n3, isStatic: r4 } = e4;
  t6.push(r4 ? JSON.stringify(n3) : n3, -3, e4);
}
function genCompoundExpression(e4, t6) {
  for (let n3 = 0; n3 < e4.children.length; n3++) {
    const r4 = e4.children[n3];
    isString(r4) ? t6.push(r4, -3) : genNode(r4, t6);
  }
}
function genExpressionAsPropertyKey(e4, t6) {
  const { push: n3 } = t6;
  if (8 === e4.type) n3("["), genCompoundExpression(e4, t6), n3("]");
  else if (e4.isStatic) {
    n3(isSimpleIdentifier(e4.content) ? e4.content : JSON.stringify(e4.content), -2, e4);
  } else n3(`[${e4.content}]`, -3, e4);
}
function processExpression(e4, t6, n3 = false, r4 = false, s4 = Object.create(t6.identifiers)) {
  return e4;
}
function processIf(e4, t6, n3, r4) {
  if (!("else" === t6.name || t6.exp && t6.exp.content.trim())) {
    const r5 = t6.exp ? t6.exp.loc : e4.loc;
    n3.onError(createCompilerError(28, t6.loc)), t6.exp = createSimpleExpression("true", false, r5);
  }
  if ("if" === t6.name) {
    const o5 = createIfBranch(e4, t6), i5 = { type: 9, loc: (s4 = e4.loc, getLoc(s4.start.offset, s4.end.offset)), branches: [o5] };
    if (n3.replaceNode(i5), r4) return r4(i5, o5, true);
  } else {
    const s5 = n3.parent.children;
    let o5 = s5.indexOf(e4);
    for (; o5-- >= -1; ) {
      const i5 = s5[o5];
      if (!i5 || !isCommentOrWhitespace(i5)) {
        if (i5 && 9 === i5.type) {
          "else-if" !== t6.name && "else" !== t6.name || void 0 !== i5.branches[i5.branches.length - 1].condition || n3.onError(createCompilerError(30, e4.loc)), n3.removeNode();
          const s6 = createIfBranch(e4, t6);
          i5.branches.push(s6);
          const o6 = r4 && r4(i5, s6, false);
          traverseNode(s6, n3), o6 && o6(), n3.currentNode = null;
        } else n3.onError(createCompilerError(30, e4.loc));
        break;
      }
      n3.removeNode(i5);
    }
  }
  var s4;
}
function createIfBranch(e4, t6) {
  const n3 = 3 === e4.tagType;
  return { type: 10, loc: e4.loc, condition: "else" === t6.name ? void 0 : t6.exp, children: n3 && !findDir(e4, "for") ? e4.children : [e4], userKey: findProp(e4, "key"), isTemplateIf: n3 };
}
function createCodegenNodeForBranch(e4, t6, n3) {
  return e4.condition ? createConditionalExpression(e4.condition, createChildrenCodegenNode(e4, t6, n3), createCallExpression(n3.helper(re), ['""', "true"])) : createChildrenCodegenNode(e4, t6, n3);
}
function createChildrenCodegenNode(e4, t6, n3) {
  const { helper: r4 } = n3, s4 = createObjectProperty("key", createSimpleExpression(`${t6}`, false, Me, 2)), { children: o5 } = e4, i5 = o5[0];
  if (1 !== o5.length || 1 !== i5.type) {
    if (1 === o5.length && 11 === i5.type) {
      const e5 = i5.codegenNode;
      return injectProp(e5, s4, n3), e5;
    }
    {
      let t7 = 64;
      return createVNodeCall(n3, r4(q), createObjectExpression([s4]), o5, t7, void 0, void 0, true, false, false, e4.loc);
    }
  }
  {
    const e5 = i5.codegenNode, t7 = getMemoedVNodeCall(e5);
    return 13 === t7.type && convertToBlock(t7, n3), injectProp(t7, s4, n3), e5;
  }
}
function processFor(e4, t6, n3, r4) {
  if (!t6.exp) return void n3.onError(createCompilerError(31, t6.loc));
  const s4 = t6.forParseResult;
  if (!s4) return void n3.onError(createCompilerError(32, t6.loc));
  finalizeForParseResult(s4);
  const { addIdentifiers: o5, removeIdentifiers: i5, scopes: a4 } = n3, { source: c4, value: l3, key: p4, index: d3 } = s4, u3 = { type: 11, loc: t6.loc, source: c4, valueAlias: l3, keyAlias: p4, objectIndexAlias: d3, parseResult: s4, children: isTemplateNode(e4) ? e4.children : [e4] };
  n3.replaceNode(u3), a4.vFor++;
  const h4 = r4 && r4(u3);
  return () => {
    a4.vFor--, h4 && h4();
  };
}
function finalizeForParseResult(e4, t6) {
  e4.finalized || (e4.finalized = true);
}
function createForLoopParams({ value: e4, key: t6, index: n3 }, r4 = []) {
  return (function(e5) {
    let t7 = e5.length;
    for (; t7-- && !e5[t7]; ) ;
    return e5.slice(0, t7 + 1).map((e6, t8) => e6 || createSimpleExpression("_".repeat(t8 + 1), false));
  })([e4, t6, n3, ...r4]);
}
function buildSlots(e4, t6, n3 = buildClientSlotFn) {
  t6.helper(be);
  const { children: r4, loc: s4 } = e4, o5 = [], i5 = [];
  let a4 = t6.scopes.vSlot > 0 || t6.scopes.vFor > 0;
  const c4 = findDir(e4, "slot", true);
  if (c4) {
    const { arg: e5, exp: t7 } = c4;
    e5 && !isStaticExp(e5) && (a4 = true), o5.push(createObjectProperty(e5 || createSimpleExpression("default", true), n3(t7, void 0, r4, s4)));
  }
  let l3 = false, p4 = false;
  const d3 = [], u3 = /* @__PURE__ */ new Set();
  let h4 = 0;
  for (let e5 = 0; e5 < r4.length; e5++) {
    const s5 = r4[e5];
    let f4;
    if (!isTemplateNode(s5) || !(f4 = findDir(s5, "slot", true))) {
      3 !== s5.type && d3.push(s5);
      continue;
    }
    if (c4) {
      t6.onError(createCompilerError(37, f4.loc));
      break;
    }
    l3 = true;
    const { children: m4, loc: E3 } = s5, { arg: g3 = createSimpleExpression("default", true), exp: _3, loc: S3 } = f4;
    let T3;
    isStaticExp(g3) ? T3 = g3 ? g3.content : "default" : a4 = true;
    const N3 = findDir(s5, "for"), C3 = n3(_3, N3, m4, E3);
    let y4, x4;
    if (y4 = findDir(s5, "if")) a4 = true, i5.push(createConditionalExpression(y4.exp, buildDynamicSlot(g3, C3, h4++), St));
    else if (x4 = findDir(s5, /^else(?:-if)?$/, true)) {
      let n4, s6 = e5;
      for (; s6-- && (n4 = r4[s6], isCommentOrWhitespace(n4)); ) ;
      if (n4 && isTemplateNode(n4) && findDir(n4, /^(?:else-)?if$/)) {
        let e6 = i5[i5.length - 1];
        for (; 19 === e6.alternate.type; ) e6 = e6.alternate;
        e6.alternate = x4.exp ? createConditionalExpression(x4.exp, buildDynamicSlot(g3, C3, h4++), St) : buildDynamicSlot(g3, C3, h4++);
      } else t6.onError(createCompilerError(30, x4.loc));
    } else if (N3) {
      a4 = true;
      const e6 = N3.forParseResult;
      e6 ? (finalizeForParseResult(e6), i5.push(createCallExpression(t6.helper(de), [e6.source, createFunctionExpression(createForLoopParams(e6), buildDynamicSlot(g3, C3), true)]))) : t6.onError(createCompilerError(32, N3.loc));
    } else {
      if (T3) {
        if (u3.has(T3)) {
          t6.onError(createCompilerError(38, S3));
          continue;
        }
        u3.add(T3), "default" === T3 && (p4 = true);
      }
      o5.push(createObjectProperty(g3, C3));
    }
  }
  if (!c4) {
    const buildDefaultSlotProperty = /* @__PURE__ */ __name((e5, r5) => {
      const o6 = n3(e5, void 0, r5, s4);
      return t6.compatConfig && (o6.isNonScopedSlot = true), createObjectProperty("default", o6);
    }, "buildDefaultSlotProperty");
    l3 ? d3.length && !d3.every(isWhitespaceText) && (p4 ? t6.onError(createCompilerError(39, d3[0].loc)) : o5.push(buildDefaultSlotProperty(void 0, d3))) : o5.push(buildDefaultSlotProperty(void 0, r4));
  }
  const f3 = a4 ? 2 : hasForwardedSlots(e4.children) ? 3 : 1;
  let m3 = createObjectExpression(o5.concat(createObjectProperty("_", createSimpleExpression(f3 + "", false))), s4);
  return i5.length && (m3 = createCallExpression(t6.helper(he), [m3, createArrayExpression(i5)])), { slots: m3, hasDynamicSlots: a4 };
}
function buildDynamicSlot(e4, t6, n3) {
  const r4 = [createObjectProperty("name", e4), createObjectProperty("fn", t6)];
  return null != n3 && r4.push(createObjectProperty("key", createSimpleExpression(String(n3), true))), createObjectExpression(r4);
}
function hasForwardedSlots(e4) {
  for (let t6 = 0; t6 < e4.length; t6++) {
    const n3 = e4[t6];
    switch (n3.type) {
      case 1:
        if (2 === n3.tagType || hasForwardedSlots(n3.children)) return true;
        break;
      case 9:
        if (hasForwardedSlots(n3.branches)) return true;
        break;
      case 10:
      case 11:
        if (hasForwardedSlots(n3.children)) return true;
    }
  }
  return false;
}
function resolveComponentType(e4, t6, n3 = false) {
  let { tag: r4 } = e4;
  const s4 = isComponentTag(r4), o5 = findProp(e4, "is", false, true);
  if (o5) if (s4 || isCompatEnabled("COMPILER_IS_ON_ELEMENT", t6)) {
    let e5;
    if (6 === o5.type ? e5 = o5.value && createSimpleExpression(o5.value.content, true) : (e5 = o5.exp, e5 || (e5 = createSimpleExpression("is", false, o5.arg.loc))), e5) return createCallExpression(t6.helper(ae), [e5]);
  } else 6 === o5.type && o5.value.content.startsWith("vue:") && (r4 = o5.value.content.slice(4));
  const i5 = isCoreComponent(r4) || t6.isBuiltInComponent(r4);
  return i5 ? (n3 || t6.helper(i5), i5) : (t6.helper(ie), t6.components.add(r4), toValidAssetId(r4, "component"));
}
function buildProps(e4, t6, n3 = e4.props, r4, s4, o5 = false) {
  const { tag: i5, loc: a4, children: c4 } = e4;
  let l3 = [];
  const p4 = [], d3 = [], u3 = c4.length > 0;
  let h4 = false, f3 = 0, m3 = false, E3 = false, g3 = false, _3 = false, S3 = false, T3 = false;
  const N3 = [], pushMergeArg = /* @__PURE__ */ __name((e5) => {
    l3.length && (p4.push(createObjectExpression(dedupeProperties(l3), a4)), l3 = []), e5 && p4.push(e5);
  }, "pushMergeArg"), pushRefVForMarker = /* @__PURE__ */ __name(() => {
    t6.scopes.vFor > 0 && l3.push(createObjectProperty(createSimpleExpression("ref_for", true), createSimpleExpression("true")));
  }, "pushRefVForMarker"), analyzePatchFlag = /* @__PURE__ */ __name(({ key: e5, value: n4 }) => {
    if (isStaticExp(e5)) {
      const o6 = e5.content, i6 = isOn(o6);
      if (!i6 || r4 && !s4 || "onclick" === o6.toLowerCase() || "onUpdate:modelValue" === o6 || s(o6) || (_3 = true), i6 && s(o6) && (T3 = true), i6 && 14 === n4.type && (n4 = n4.arguments[0]), 20 === n4.type || (4 === n4.type || 8 === n4.type) && getConstantType(n4, t6) > 0) return;
      "ref" === o6 ? m3 = true : "class" === o6 ? E3 = true : "style" === o6 ? g3 = true : "key" === o6 || N3.includes(o6) || N3.push(o6), !r4 || "class" !== o6 && "style" !== o6 || N3.includes(o6) || N3.push(o6);
    } else S3 = true;
  }, "analyzePatchFlag");
  for (let s5 = 0; s5 < n3.length; s5++) {
    const c5 = n3[s5];
    if (6 === c5.type) {
      const { loc: e5, name: n4, nameLoc: r5, value: s6 } = c5;
      let o6 = true;
      if ("ref" === n4 && (m3 = true, pushRefVForMarker()), "is" === n4 && (isComponentTag(i5) || s6 && s6.content.startsWith("vue:") || isCompatEnabled("COMPILER_IS_ON_ELEMENT", t6))) continue;
      l3.push(createObjectProperty(createSimpleExpression(n4, true, r5), createSimpleExpression(s6 ? s6.content : "", o6, s6 ? s6.loc : e5)));
    } else {
      const { name: n4, arg: s6, exp: m4, loc: E4, modifiers: g4 } = c5, _4 = "bind" === n4, T4 = "on" === n4;
      if ("slot" === n4) {
        r4 || t6.onError(createCompilerError(40, E4));
        continue;
      }
      if ("once" === n4 || "memo" === n4) continue;
      if ("is" === n4 || _4 && isStaticArgOf(s6, "is") && (isComponentTag(i5) || isCompatEnabled("COMPILER_IS_ON_ELEMENT", t6))) continue;
      if (T4 && o5) continue;
      if ((_4 && isStaticArgOf(s6, "key") || T4 && u3 && isStaticArgOf(s6, "vue:before-update")) && (h4 = true), _4 && isStaticArgOf(s6, "ref") && pushRefVForMarker(), !s6 && (_4 || T4)) {
        if (S3 = true, m4) if (_4) {
          if (pushMergeArg(), isCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER", t6)) {
            p4.unshift(m4);
            continue;
          }
          pushRefVForMarker(), pushMergeArg(), p4.push(m4);
        } else pushMergeArg({ type: 14, loc: E4, callee: t6.helper(Te), arguments: r4 ? [m4] : [m4, "true"] });
        else t6.onError(createCompilerError(_4 ? 34 : 35, E4));
        continue;
      }
      _4 && g4.some((e5) => "prop" === e5.content) && (f3 |= 32);
      const N4 = t6.directiveTransforms[n4];
      if (N4) {
        const { props: n5, needRuntime: r5 } = N4(c5, e4, t6);
        !o5 && n5.forEach(analyzePatchFlag), T4 && s6 && !isStaticExp(s6) ? pushMergeArg(createObjectExpression(n5, a4)) : l3.push(...n5), r5 && (d3.push(c5), isSymbol(r5) && Tt.set(c5, r5));
      } else l(n4) || (d3.push(c5), u3 && (h4 = true));
    }
  }
  let C3;
  if (p4.length ? (pushMergeArg(), C3 = p4.length > 1 ? createCallExpression(t6.helper(me), p4, a4) : p4[0]) : l3.length && (C3 = createObjectExpression(dedupeProperties(l3), a4)), S3 ? f3 |= 16 : (E3 && !r4 && (f3 |= 2), g3 && !r4 && (f3 |= 4), N3.length && (f3 |= 8), _3 && (f3 |= 32)), h4 || 0 !== f3 && 32 !== f3 || !(m3 || T3 || d3.length > 0) || (f3 |= 512), !t6.inSSR && C3) switch (C3.type) {
    case 15:
      let e5 = -1, n4 = -1, r5 = false;
      for (let t7 = 0; t7 < C3.properties.length; t7++) {
        const s6 = C3.properties[t7].key;
        isStaticExp(s6) ? "class" === s6.content ? e5 = t7 : "style" === s6.content && (n4 = t7) : s6.isHandlerKey || (r5 = true);
      }
      const s5 = C3.properties[e5], o6 = C3.properties[n4];
      r5 ? C3 = createCallExpression(t6.helper(_e), [C3]) : (s5 && !isStaticExp(s5.value) && (s5.value = createCallExpression(t6.helper(Ee), [s5.value])), o6 && (g3 || 4 === o6.value.type && "[" === o6.value.content.trim()[0] || 17 === o6.value.type) && (o6.value = createCallExpression(t6.helper(ge), [o6.value])));
      break;
    case 14:
      break;
    default:
      C3 = createCallExpression(t6.helper(_e), [createCallExpression(t6.helper(Se), [C3])]);
  }
  return { props: C3, directives: d3, patchFlag: f3, dynamicPropNames: N3, shouldUseBlock: h4 };
}
function dedupeProperties(e4) {
  const t6 = /* @__PURE__ */ new Map(), n3 = [];
  for (let r4 = 0; r4 < e4.length; r4++) {
    const s4 = e4[r4];
    if (8 === s4.key.type || !s4.key.isStatic) {
      n3.push(s4);
      continue;
    }
    const o5 = s4.key.content, i5 = t6.get(o5);
    i5 ? ("style" === o5 || "class" === o5 || isOn(o5)) && mergeAsArray(i5, s4) : (t6.set(o5, s4), n3.push(s4));
  }
  return n3;
}
function mergeAsArray(e4, t6) {
  17 === e4.value.type ? e4.value.elements.push(t6.value) : e4.value = createArrayExpression([e4.value, t6.value], e4.loc);
}
function buildDirectiveArgs(e4, t6) {
  const n3 = [], r4 = Tt.get(e4);
  r4 ? n3.push(t6.helperString(r4)) : (t6.helper(ce), t6.directives.add(e4.name), n3.push(toValidAssetId(e4.name, "directive")));
  const { loc: s4 } = e4;
  if (e4.exp && n3.push(e4.exp), e4.arg && (e4.exp || n3.push("void 0"), n3.push(e4.arg)), Object.keys(e4.modifiers).length) {
    e4.arg || (e4.exp || n3.push("void 0"), n3.push("void 0"));
    const t7 = createSimpleExpression("true", false, s4);
    n3.push(createObjectExpression(e4.modifiers.map((e5) => createObjectProperty(e5, t7)), s4));
  }
  return createArrayExpression(n3, e4.loc);
}
function isComponentTag(e4) {
  return "component" === e4 || "Component" === e4;
}
function processSlotOutlet(e4, t6) {
  let n3, r4 = '"default"';
  const s4 = [];
  for (let t7 = 0; t7 < e4.props.length; t7++) {
    const n4 = e4.props[t7];
    if (6 === n4.type) n4.value && ("name" === n4.name ? r4 = JSON.stringify(n4.value.content) : (n4.name = p(n4.name), s4.push(n4)));
    else if ("bind" === n4.name && isStaticArgOf(n4.arg, "name")) {
      if (n4.exp) r4 = n4.exp;
      else if (n4.arg && 4 === n4.arg.type) {
        const e5 = p(n4.arg.content);
        r4 = n4.exp = createSimpleExpression(e5, false, n4.arg.loc);
      }
    } else "bind" === n4.name && n4.arg && isStaticExp(n4.arg) && (n4.arg.content = p(n4.arg.content)), s4.push(n4);
  }
  if (s4.length > 0) {
    const { props: r5, directives: o5 } = buildProps(e4, t6, s4, false, false);
    n3 = r5, o5.length && t6.onError(createCompilerError(36, o5[0].loc));
  }
  return { slotName: r4, slotProps: n3 };
}
function createTransformProps(e4 = []) {
  return { props: e4 };
}
function rewriteFilter(e4, t6) {
  if (4 === e4.type) parseFilter(e4, t6);
  else for (let n3 = 0; n3 < e4.children.length; n3++) {
    const r4 = e4.children[n3];
    "object" == typeof r4 && (4 === r4.type ? parseFilter(r4, t6) : 8 === r4.type ? rewriteFilter(e4, t6) : 5 === r4.type && rewriteFilter(r4.content, t6));
  }
}
function parseFilter(e4, t6) {
  const n3 = e4.content;
  let r4, s4, o5, i5, a4 = false, c4 = false, l3 = false, p4 = false, d3 = 0, u3 = 0, h4 = 0, f3 = 0, m3 = [];
  for (o5 = 0; o5 < n3.length; o5++) if (s4 = r4, r4 = n3.charCodeAt(o5), a4) 39 === r4 && 92 !== s4 && (a4 = false);
  else if (c4) 34 === r4 && 92 !== s4 && (c4 = false);
  else if (l3) 96 === r4 && 92 !== s4 && (l3 = false);
  else if (p4) 47 === r4 && 92 !== s4 && (p4 = false);
  else if (124 !== r4 || 124 === n3.charCodeAt(o5 + 1) || 124 === n3.charCodeAt(o5 - 1) || d3 || u3 || h4) {
    switch (r4) {
      case 34:
        c4 = true;
        break;
      case 39:
        a4 = true;
        break;
      case 96:
        l3 = true;
        break;
      case 40:
        h4++;
        break;
      case 41:
        h4--;
        break;
      case 91:
        u3++;
        break;
      case 93:
        u3--;
        break;
      case 123:
        d3++;
        break;
      case 125:
        d3--;
    }
    if (47 === r4) {
      let e5, t7 = o5 - 1;
      for (; t7 >= 0 && (e5 = n3.charAt(t7), " " === e5); t7--) ;
      e5 && Ct.test(e5) || (p4 = true);
    }
  } else void 0 === i5 ? (f3 = o5 + 1, i5 = n3.slice(0, o5).trim()) : pushFilter();
  function pushFilter() {
    m3.push(n3.slice(f3, o5).trim()), f3 = o5 + 1;
  }
  __name(pushFilter, "pushFilter");
  if (void 0 === i5 ? i5 = n3.slice(0, o5).trim() : 0 !== f3 && pushFilter(), m3.length) {
    for (o5 = 0; o5 < m3.length; o5++) i5 = wrapFilter(i5, m3[o5], t6);
    e4.content = i5, e4.ast = void 0;
  }
}
function wrapFilter(e4, t6, n3) {
  n3.helper(le);
  const r4 = t6.indexOf("(");
  if (r4 < 0) return n3.filters.add(t6), `${toValidAssetId(t6, "filter")}(${e4})`;
  {
    const s4 = t6.slice(0, r4), o5 = t6.slice(r4 + 1);
    return n3.filters.add(s4), `${toValidAssetId(s4, "filter")}(${e4}${")" !== o5 ? "," + o5 : o5}`;
  }
}
function getBaseTransformPreset(e4) {
  return [[transformVBindShorthand, transformOnce, gt, transformMemo, _t, transformFilter, transformSlotOutlet, transformElement, trackSlotScopes, transformText], { on: transformOn$1, bind: transformBind, model: transformModel$1 }];
}
function baseCompile(e4, t6 = {}) {
  const n3 = t6.onError || defaultOnError, r4 = "module" === t6.mode;
  true === t6.prefixIdentifiers ? n3(createCompilerError(48)) : r4 && n3(createCompilerError(49));
  t6.cacheHandlers && n3(createCompilerError(50)), t6.scopeId && !r4 && n3(createCompilerError(51));
  const s4 = n({}, t6, { prefixIdentifiers: false }), o5 = isString(e4) ? baseParse(e4, s4) : e4, [i5, a4] = getBaseTransformPreset();
  return transform(o5, n({}, s4, { nodeTransforms: [...i5, ...t6.nodeTransforms || []], directiveTransforms: n({}, a4, t6.directiveTransforms || {}) })), generate(o5, s4);
}
function createDOMCompilerError(e4, t6) {
  return createCompilerError(e4, t6);
}
function getNuxtAppCtx(e4 = Gt) {
  return getContext(e4, { asyncContext: false });
}
function registerPluginHooks(e4, t6) {
  t6.hooks && e4.hooks.addHooks(t6.hooks);
}
function defineNuxtPlugin(e4) {
  if ("function" == typeof e4) return e4;
  const t6 = e4._name || e4.name;
  return delete e4.name, Object.assign(e4.setup || (() => {
  }), e4, { [qt]: true, _name: t6 });
}
function callWithNuxt(e4, t6, n3) {
  const fn3 = /* @__PURE__ */ __name(() => t6(), "fn"), r4 = getNuxtAppCtx(e4._id);
  return e4.vueApp.runWithContext(() => r4.callAsync(e4, fn3));
}
function useNuxtApp(e4) {
  const t6 = (function(e5) {
    let t7;
    return $t.hasInjectionContext() && (t7 = $t.getCurrentInstance()?.appContext.app.$nuxt), t7 ||= getNuxtAppCtx(e5).tryUse(), t7 || null;
  })(e4);
  if (!t6) throw new Error("[nuxt] instance unavailable");
  return t6;
}
function useRuntimeConfig(e4) {
  return useNuxtApp().$config;
}
function defineGetter(e4, t6, n3) {
  Object.defineProperty(e4, t6, { get: /* @__PURE__ */ __name(() => n3, "get") });
}
function defineNuxtRouteMiddleware(e4) {
  return e4;
}
function resolveRouteObject(e4) {
  return withQuery(e4.path || "", e4.query || {}) + (e4.hash || "");
}
function encodeRoutePath(r4) {
  const s4 = parseURL(r4);
  return encodePath(decodePath(s4.pathname)) + s4.search + s4.hash;
}
function getRouteFromPath(e4) {
  const t6 = e4 && "object" == typeof e4 ? e4 : {};
  "object" == typeof e4 && (e4 = stringifyParsedURL({ pathname: e4.path || "", search: stringifyQuery(e4.query || {}), hash: e4.hash || "" }));
  const n3 = new URL(e4.toString(), "http://localhost");
  return { path: n3.pathname, fullPath: e4, query: parseQuery(n3.search), hash: n3.hash, params: t6.params || {}, name: void 0, matched: t6.matched || [], redirectedFrom: void 0, meta: t6.meta || {}, href: e4 };
}
function definePayloadReducer(e4, t6) {
  useNuxtApp().ssrContext["~payloadReducers"][e4] = t6;
}
var W, G, q, J, K, Y, z2, Q, Z, ee, te, ne, re, se, oe, ie, ae, ce, le, pe, de, ue, he, fe, me, Ee, ge, _e, Se, Te, Ne, Ce, ye, xe, Ie, Oe, be, ve, Ae, Re, Pe, Le, Me, De, ke, we, Ve, Fe, isStaticProperty, Xe, isStaticExp, Ue, isSimpleIdentifier, Be, He, je, getExpSource, isMemberExpressionBrowser, $e, We, Ge, isFnExpressionBrowser, qe, Je, Ke, Ye, ze, Qe, Ze, et, tt, nt, rt, st, ot, it, at, ct, lt, pt, dt, ut, ht, ft, mt, Et, aliasHelper, gt, _t, St, trackSlotScopes, buildClientSlotFn, Tt, transformElement, transformSlotOutlet, transformOn$1, transformBind, injectPrefix, transformText, Nt, transformOnce, transformModel$1, Ct, transformFilter, yt, transformMemo, transformVBindShorthand, noopDirectiveTransform, xt, It, Ot, bt, vt, At, Rt, Pt, Lt, Mt, Dt, kt, transformStyle, parseInlineCSS, wt, Vt, Ft, Xt, Ut, transformClick, ignoreSideEffectTags, Bt, Ht, jt, $t, Wt, Gt, qt, Jt, useRouter, Kt, Yt, navigateTo, zt, useError, showError, createError2, Qt, routeRulesMatcher, Zt, en, tn, _export_sfc, nn, rn, sn, on, an, cn, ln, pn, dn;
var init_server = __esm({
  ".output/server/chunks/build/server.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_nitro();
    init_renderer();
    init_shared_esm_bundler();
    globalThis._importMeta_ = globalThis._importMeta_ || { url: "file:///_entry.js", env: {} };
    W = { exports: {} };
    G = {};
    q = /* @__PURE__ */ Symbol("");
    J = /* @__PURE__ */ Symbol("");
    K = /* @__PURE__ */ Symbol("");
    Y = /* @__PURE__ */ Symbol("");
    z2 = /* @__PURE__ */ Symbol("");
    Q = /* @__PURE__ */ Symbol("");
    Z = /* @__PURE__ */ Symbol("");
    ee = /* @__PURE__ */ Symbol("");
    te = /* @__PURE__ */ Symbol("");
    ne = /* @__PURE__ */ Symbol("");
    re = /* @__PURE__ */ Symbol("");
    se = /* @__PURE__ */ Symbol("");
    oe = /* @__PURE__ */ Symbol("");
    ie = /* @__PURE__ */ Symbol("");
    ae = /* @__PURE__ */ Symbol("");
    ce = /* @__PURE__ */ Symbol("");
    le = /* @__PURE__ */ Symbol("");
    pe = /* @__PURE__ */ Symbol("");
    de = /* @__PURE__ */ Symbol("");
    ue = /* @__PURE__ */ Symbol("");
    he = /* @__PURE__ */ Symbol("");
    fe = /* @__PURE__ */ Symbol("");
    me = /* @__PURE__ */ Symbol("");
    Ee = /* @__PURE__ */ Symbol("");
    ge = /* @__PURE__ */ Symbol("");
    _e = /* @__PURE__ */ Symbol("");
    Se = /* @__PURE__ */ Symbol("");
    Te = /* @__PURE__ */ Symbol("");
    Ne = /* @__PURE__ */ Symbol("");
    Ce = /* @__PURE__ */ Symbol("");
    ye = /* @__PURE__ */ Symbol("");
    xe = /* @__PURE__ */ Symbol("");
    Ie = /* @__PURE__ */ Symbol("");
    Oe = /* @__PURE__ */ Symbol("");
    be = /* @__PURE__ */ Symbol("");
    ve = /* @__PURE__ */ Symbol("");
    Ae = /* @__PURE__ */ Symbol("");
    Re = /* @__PURE__ */ Symbol("");
    Pe = /* @__PURE__ */ Symbol("");
    Le = { [q]: "Fragment", [J]: "Teleport", [K]: "Suspense", [Y]: "KeepAlive", [z2]: "BaseTransition", [Q]: "openBlock", [Z]: "createBlock", [ee]: "createElementBlock", [te]: "createVNode", [ne]: "createElementVNode", [re]: "createCommentVNode", [se]: "createTextVNode", [oe]: "createStaticVNode", [ie]: "resolveComponent", [ae]: "resolveDynamicComponent", [ce]: "resolveDirective", [le]: "resolveFilter", [pe]: "withDirectives", [de]: "renderList", [ue]: "renderSlot", [he]: "createSlots", [fe]: "toDisplayString", [me]: "mergeProps", [Ee]: "normalizeClass", [ge]: "normalizeStyle", [_e]: "normalizeProps", [Se]: "guardReactiveProps", [Te]: "toHandlers", [Ne]: "camelize", [Ce]: "capitalize", [ye]: "toHandlerKey", [xe]: "setBlockTracking", [Ie]: "pushScopeId", [Oe]: "popScopeId", [be]: "withCtx", [ve]: "unref", [Ae]: "isRef", [Re]: "withMemo", [Pe]: "isMemoSame" };
    __name(registerRuntimeHelpers, "registerRuntimeHelpers");
    Me = { start: { line: 1, column: 1, offset: 0 }, end: { line: 1, column: 1, offset: 0 }, source: "" };
    __name(createRoot, "createRoot");
    __name(createVNodeCall, "createVNodeCall");
    __name(createArrayExpression, "createArrayExpression");
    __name(createObjectExpression, "createObjectExpression");
    __name(createObjectProperty, "createObjectProperty");
    __name(createSimpleExpression, "createSimpleExpression");
    __name(createCompoundExpression, "createCompoundExpression");
    __name(createCallExpression, "createCallExpression");
    __name(createFunctionExpression, "createFunctionExpression");
    __name(createConditionalExpression, "createConditionalExpression");
    __name(createCacheExpression, "createCacheExpression");
    __name(createBlockStatement, "createBlockStatement");
    __name(getVNodeHelper, "getVNodeHelper");
    __name(getVNodeBlockHelper, "getVNodeBlockHelper");
    __name(convertToBlock, "convertToBlock");
    De = new Uint8Array([123, 123]);
    ke = new Uint8Array([125, 125]);
    __name(isTagStartChar, "isTagStartChar");
    __name(isWhitespace, "isWhitespace");
    __name(isEndOfTagSection, "isEndOfTagSection");
    __name(toCharCodes, "toCharCodes");
    we = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) };
    Ve = { COMPILER_IS_ON_ELEMENT: { message: 'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".', link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html" }, COMPILER_V_BIND_SYNC: { message: /* @__PURE__ */ __name((e4) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${e4}.sync\` should be changed to \`v-model:${e4}\`.`, "message"), link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html" }, COMPILER_V_BIND_OBJECT_ORDER: { message: 'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.', link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html" }, COMPILER_V_ON_NATIVE: { message: ".native modifier for v-on has been removed as is no longer necessary.", link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html" }, COMPILER_V_IF_V_FOR_PRECEDENCE: { message: "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.", link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html" }, COMPILER_NATIVE_TEMPLATE: { message: "<template> with no special directives will render as a native template element instead of its inner content in Vue 3." }, COMPILER_INLINE_TEMPLATE: { message: '"inline-template" has been removed in Vue 3.', link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html" }, COMPILER_FILTERS: { message: 'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.', link: "https://v3-migration.vuejs.org/breaking-changes/filters.html" } };
    __name(getCompatValue, "getCompatValue");
    __name(isCompatEnabled, "isCompatEnabled");
    __name(checkCompatEnabled, "checkCompatEnabled");
    __name(defaultOnError, "defaultOnError");
    __name(defaultOnWarn, "defaultOnWarn");
    __name(createCompilerError, "createCompilerError");
    Fe = { 0: "Illegal comment.", 1: "CDATA section is allowed only in XML context.", 2: "Duplicate attribute.", 3: "End tag cannot have attributes.", 4: "Illegal '/' in tags.", 5: "Unexpected EOF in tag.", 6: "Unexpected EOF in CDATA section.", 7: "Unexpected EOF in comment.", 8: "Unexpected EOF in script.", 9: "Unexpected EOF in tag.", 10: "Incorrectly closed comment.", 11: "Incorrectly opened comment.", 12: "Illegal tag name. Use '&lt;' to print '<'.", 13: "Attribute value was expected.", 14: "End tag name was expected.", 15: "Whitespace was expected.", 16: "Unexpected '<!--' in comment.", 17: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`, 18: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).", 19: "Attribute name cannot start with '='.", 21: "'<?' is allowed only in XML context.", 20: "Unexpected null character.", 22: "Illegal '/' in tags.", 23: "Invalid end tag.", 24: "Element is missing end tag.", 25: "Interpolation end sign was not found.", 27: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.", 26: "Legal directive name was expected.", 28: "v-if/v-else-if is missing expression.", 29: "v-if/else branches must use unique keys.", 30: "v-else/v-else-if has no adjacent v-if or v-else-if.", 31: "v-for is missing expression.", 32: "v-for has invalid expression.", 33: "<template v-for> key should be placed on the <template> tag.", 34: "v-bind is missing expression.", 53: "v-bind with same-name shorthand only allows static argument.", 35: "v-on is missing expression.", 36: "Unexpected custom directive on <slot> outlet.", 37: "Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.", 38: "Duplicate slot names found. ", 39: "Extraneous children found when component already has explicitly named default slot. These children will be ignored.", 40: "v-slot can only be used on components or <template> tags.", 41: "v-model is missing expression.", 42: "v-model value must be a valid JavaScript member expression.", 43: "v-model cannot be used on v-for or v-slot scope variables because they are not writable.", 44: "v-model cannot be used on a prop, because local prop bindings are not writable.\nUse a v-bind binding combined with a v-on listener that emits update:x event instead.", 45: "v-model cannot be used on a const binding because it is not writable.", 46: "Error parsing JavaScript expression: ", 47: "<KeepAlive> expects exactly one child component.", 52: "@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.", 48: '"prefixIdentifiers" option is not supported in this build of compiler.', 49: "ES module mode is not supported in this build of compiler.", 50: '"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.', 51: '"scopeId" option is only supported in module mode.', 54: "" };
    __name(walkBlockDeclarations, "walkBlockDeclarations");
    __name(isForStatement, "isForStatement");
    __name(walkForStatement, "walkForStatement");
    __name(walkSwitchStatement, "walkSwitchStatement");
    __name(extractIdentifiers, "extractIdentifiers");
    isStaticProperty = /* @__PURE__ */ __name((e4) => e4 && ("ObjectProperty" === e4.type || "ObjectMethod" === e4.type) && !e4.computed, "isStaticProperty");
    Xe = ["TSAsExpression", "TSTypeAssertion", "TSNonNullExpression", "TSInstantiationExpression", "TSSatisfiesExpression"];
    isStaticExp = /* @__PURE__ */ __name((e4) => 4 === e4.type && e4.isStatic, "isStaticExp");
    __name(isCoreComponent, "isCoreComponent");
    Ue = /^$|^\d|[^\$\w\xA0-\uFFFF]/;
    isSimpleIdentifier = /* @__PURE__ */ __name((e4) => !Ue.test(e4), "isSimpleIdentifier");
    Be = /[A-Za-z_$\xA0-\uFFFF]/;
    He = /[\.\?\w$\xA0-\uFFFF]/;
    je = /\s+[.[]\s*|\s*[.[]\s+/g;
    getExpSource = /* @__PURE__ */ __name((e4) => 4 === e4.type ? e4.content : e4.loc.source, "getExpSource");
    isMemberExpressionBrowser = /* @__PURE__ */ __name((e4) => {
      const t6 = getExpSource(e4).trim().replace(je, (e5) => e5.trim());
      let n3 = 0, r4 = [], s4 = 0, o5 = 0, i5 = null;
      for (let e5 = 0; e5 < t6.length; e5++) {
        const a4 = t6.charAt(e5);
        switch (n3) {
          case 0:
            if ("[" === a4) r4.push(n3), n3 = 1, s4++;
            else if ("(" === a4) r4.push(n3), n3 = 2, o5++;
            else if (!(0 === e5 ? Be : He).test(a4)) return false;
            break;
          case 1:
            "'" === a4 || '"' === a4 || "`" === a4 ? (r4.push(n3), n3 = 3, i5 = a4) : "[" === a4 ? s4++ : "]" === a4 && (--s4 || (n3 = r4.pop()));
            break;
          case 2:
            if ("'" === a4 || '"' === a4 || "`" === a4) r4.push(n3), n3 = 3, i5 = a4;
            else if ("(" === a4) o5++;
            else if (")" === a4) {
              if (e5 === t6.length - 1) return false;
              --o5 || (n3 = r4.pop());
            }
            break;
          case 3:
            a4 === i5 && (n3 = r4.pop(), i5 = null);
        }
      }
      return !s4 && !o5;
    }, "isMemberExpressionBrowser");
    $e = NOOP;
    We = isMemberExpressionBrowser;
    Ge = /^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/;
    isFnExpressionBrowser = /* @__PURE__ */ __name((e4) => Ge.test(getExpSource(e4)), "isFnExpressionBrowser");
    qe = NOOP;
    Je = isFnExpressionBrowser;
    __name(advancePositionWithMutation, "advancePositionWithMutation");
    __name(findDir, "findDir");
    __name(findProp, "findProp");
    __name(isStaticArgOf, "isStaticArgOf");
    __name(hasDynamicKeyVBind, "hasDynamicKeyVBind");
    __name(isText$1, "isText$1");
    __name(isVPre, "isVPre");
    __name(isVSlot, "isVSlot");
    __name(isTemplateNode, "isTemplateNode");
    __name(isSlotOutlet, "isSlotOutlet");
    Ke = /* @__PURE__ */ new Set([_e, Se]);
    __name(getUnnormalizedProps, "getUnnormalizedProps");
    __name(injectProp, "injectProp");
    __name(hasProp, "hasProp");
    __name(toValidAssetId, "toValidAssetId");
    __name(getMemoedVNodeCall, "getMemoedVNodeCall");
    Ye = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;
    __name(isAllWhitespace, "isAllWhitespace");
    __name(isWhitespaceText, "isWhitespaceText");
    __name(isCommentOrWhitespace, "isCommentOrWhitespace");
    ze = { parseMode: "base", ns: 0, delimiters: ["{{", "}}"], getNamespace: /* @__PURE__ */ __name(() => 0, "getNamespace"), isVoidTag: NO, isPreTag: NO, isIgnoreNewlineTag: NO, isCustomElement: NO, onError: defaultOnError, onWarn: defaultOnWarn, comments: false, prefixIdentifiers: false };
    Qe = ze;
    Ze = null;
    et = "";
    tt = null;
    nt = null;
    rt = "";
    st = -1;
    ot = -1;
    it = 0;
    at = false;
    ct = null;
    lt = [];
    pt = new class {
      constructor(e4, t6) {
        this.stack = e4, this.cbs = t6, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = false, this.inXML = false, this.inVPre = false, this.newlines = [], this.mode = 0, this.delimiterOpen = De, this.delimiterClose = ke, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
      }
      get inSFCRoot() {
        return 2 === this.mode && 0 === this.stack.length;
      }
      reset() {
        this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = false, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = De, this.delimiterClose = ke;
      }
      getPos(e4) {
        let t6 = 1, n3 = e4 + 1;
        const r4 = this.newlines.length;
        let s4 = -1;
        if (r4 > 100) {
          let t7 = -1, n4 = r4;
          for (; t7 + 1 < n4; ) {
            const r5 = t7 + n4 >>> 1;
            this.newlines[r5] < e4 ? t7 = r5 : n4 = r5;
          }
          s4 = t7;
        } else for (let t7 = r4 - 1; t7 >= 0; t7--) if (e4 > this.newlines[t7]) {
          s4 = t7;
          break;
        }
        return s4 >= 0 && (t6 = s4 + 2, n3 = e4 - this.newlines[s4]), { column: n3, line: t6, offset: e4 };
      }
      peek() {
        return this.buffer.charCodeAt(this.index + 1);
      }
      stateText(e4) {
        60 === e4 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : this.inVPre || e4 !== this.delimiterOpen[0] || (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(e4));
      }
      stateInterpolationOpen(e4) {
        if (e4 === this.delimiterOpen[this.delimiterIndex]) if (this.delimiterIndex === this.delimiterOpen.length - 1) {
          const e5 = this.index + 1 - this.delimiterOpen.length;
          e5 > this.sectionStart && this.cbs.ontext(this.sectionStart, e5), this.state = 3, this.sectionStart = e5;
        } else this.delimiterIndex++;
        else this.inRCDATA ? (this.state = 32, this.stateInRCDATA(e4)) : (this.state = 1, this.stateText(e4));
      }
      stateInterpolation(e4) {
        e4 === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(e4));
      }
      stateInterpolationClose(e4) {
        e4 === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(e4));
      }
      stateSpecialStartSequence(e4) {
        const t6 = this.sequenceIndex === this.currentSequence.length;
        if (t6 ? isEndOfTagSection(e4) : (32 | e4) === this.currentSequence[this.sequenceIndex]) {
          if (!t6) return void this.sequenceIndex++;
        } else this.inRCDATA = false;
        this.sequenceIndex = 0, this.state = 6, this.stateInTagName(e4);
      }
      stateInRCDATA(e4) {
        if (this.sequenceIndex === this.currentSequence.length) {
          if (62 === e4 || isWhitespace(e4)) {
            const t6 = this.index - this.currentSequence.length;
            if (this.sectionStart < t6) {
              const e5 = this.index;
              this.index = t6, this.cbs.ontext(this.sectionStart, t6), this.index = e5;
            }
            return this.sectionStart = t6 + 2, this.stateInClosingTagName(e4), void (this.inRCDATA = false);
          }
          this.sequenceIndex = 0;
        }
        (32 | e4) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : 0 === this.sequenceIndex ? this.currentSequence === we.TitleEnd || this.currentSequence === we.TextareaEnd && !this.inSFCRoot ? this.inVPre || e4 !== this.delimiterOpen[0] || (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(e4)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = Number(60 === e4);
      }
      stateCDATASequence(e4) {
        e4 === we.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === we.Cdata.length && (this.state = 28, this.currentSequence = we.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(e4));
      }
      fastForwardTo(e4) {
        for (; ++this.index < this.buffer.length; ) {
          const t6 = this.buffer.charCodeAt(this.index);
          if (10 === t6 && this.newlines.push(this.index), t6 === e4) return true;
        }
        return this.index = this.buffer.length - 1, false;
      }
      stateInCommentLike(e4) {
        e4 === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === we.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : 0 === this.sequenceIndex ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e4 !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
      }
      startSpecial(e4, t6) {
        this.enterRCDATA(e4, t6), this.state = 31;
      }
      enterRCDATA(e4, t6) {
        this.inRCDATA = true, this.currentSequence = e4, this.sequenceIndex = t6;
      }
      stateBeforeTagName(e4) {
        33 === e4 ? (this.state = 22, this.sectionStart = this.index + 1) : 63 === e4 ? (this.state = 24, this.sectionStart = this.index + 1) : isTagStartChar(e4) ? (this.sectionStart = this.index, 0 === this.mode ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : this.state = 116 === e4 ? 30 : 115 === e4 ? 29 : 6) : 47 === e4 ? this.state = 8 : (this.state = 1, this.stateText(e4));
      }
      stateInTagName(e4) {
        isEndOfTagSection(e4) && this.handleTagName(e4);
      }
      stateInSFCRootTagName(e4) {
        if (isEndOfTagSection(e4)) {
          const t6 = this.buffer.slice(this.sectionStart, this.index);
          "template" !== t6 && this.enterRCDATA(toCharCodes("</" + t6), 0), this.handleTagName(e4);
        }
      }
      handleTagName(e4) {
        this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e4);
      }
      stateBeforeClosingTagName(e4) {
        isWhitespace(e4) || (62 === e4 ? (this.state = 1, this.sectionStart = this.index + 1) : (this.state = isTagStartChar(e4) ? 9 : 27, this.sectionStart = this.index));
      }
      stateInClosingTagName(e4) {
        (62 === e4 || isWhitespace(e4)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(e4));
      }
      stateAfterClosingTagName(e4) {
        62 === e4 && (this.state = 1, this.sectionStart = this.index + 1);
      }
      stateBeforeAttrName(e4) {
        62 === e4 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : 47 === e4 ? this.state = 7 : 60 === e4 && 47 === this.peek() ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : isWhitespace(e4) || this.handleAttrStart(e4);
      }
      handleAttrStart(e4) {
        118 === e4 && 45 === this.peek() ? (this.state = 13, this.sectionStart = this.index) : 46 === e4 || 58 === e4 || 64 === e4 || 35 === e4 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
      }
      stateInSelfClosingTag(e4) {
        62 === e4 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = false) : isWhitespace(e4) || (this.state = 11, this.stateBeforeAttrName(e4));
      }
      stateInAttrName(e4) {
        (61 === e4 || isEndOfTagSection(e4)) && (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(e4));
      }
      stateInDirName(e4) {
        61 === e4 || isEndOfTagSection(e4) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(e4)) : 58 === e4 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : 46 === e4 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
      }
      stateInDirArg(e4) {
        61 === e4 || isEndOfTagSection(e4) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(e4)) : 91 === e4 ? this.state = 15 : 46 === e4 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
      }
      stateInDynamicDirArg(e4) {
        93 === e4 ? this.state = 14 : (61 === e4 || isEndOfTagSection(e4)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(e4));
      }
      stateInDirModifier(e4) {
        61 === e4 || isEndOfTagSection(e4) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(e4)) : 46 === e4 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
      }
      handleAttrNameEnd(e4) {
        this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(e4);
      }
      stateAfterAttrName(e4) {
        61 === e4 ? this.state = 18 : 47 === e4 || 62 === e4 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e4)) : isWhitespace(e4) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(e4));
      }
      stateBeforeAttrValue(e4) {
        34 === e4 ? (this.state = 19, this.sectionStart = this.index + 1) : 39 === e4 ? (this.state = 20, this.sectionStart = this.index + 1) : isWhitespace(e4) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(e4));
      }
      handleInAttrValue(e4, t6) {
        (e4 === t6 || this.fastForwardTo(t6)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(34 === t6 ? 3 : 2, this.index + 1), this.state = 11);
      }
      stateInAttrValueDoubleQuotes(e4) {
        this.handleInAttrValue(e4, 34);
      }
      stateInAttrValueSingleQuotes(e4) {
        this.handleInAttrValue(e4, 39);
      }
      stateInAttrValueNoQuotes(e4) {
        isWhitespace(e4) || 62 === e4 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(e4)) : 39 !== e4 && 60 !== e4 && 61 !== e4 && 96 !== e4 || this.cbs.onerr(18, this.index);
      }
      stateBeforeDeclaration(e4) {
        91 === e4 ? (this.state = 26, this.sequenceIndex = 0) : this.state = 45 === e4 ? 25 : 23;
      }
      stateInDeclaration(e4) {
        (62 === e4 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
      }
      stateInProcessingInstruction(e4) {
        (62 === e4 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
      }
      stateBeforeComment(e4) {
        45 === e4 ? (this.state = 28, this.currentSequence = we.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
      }
      stateInSpecialComment(e4) {
        (62 === e4 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
      }
      stateBeforeSpecialS(e4) {
        e4 === we.ScriptEnd[3] ? this.startSpecial(we.ScriptEnd, 4) : e4 === we.StyleEnd[3] ? this.startSpecial(we.StyleEnd, 4) : (this.state = 6, this.stateInTagName(e4));
      }
      stateBeforeSpecialT(e4) {
        e4 === we.TitleEnd[3] ? this.startSpecial(we.TitleEnd, 4) : e4 === we.TextareaEnd[3] ? this.startSpecial(we.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(e4));
      }
      startEntity() {
      }
      stateInEntity() {
      }
      parse(e4) {
        for (this.buffer = e4; this.index < this.buffer.length; ) {
          const e5 = this.buffer.charCodeAt(this.index);
          switch (10 === e5 && 33 !== this.state && this.newlines.push(this.index), this.state) {
            case 1:
              this.stateText(e5);
              break;
            case 2:
              this.stateInterpolationOpen(e5);
              break;
            case 3:
              this.stateInterpolation(e5);
              break;
            case 4:
              this.stateInterpolationClose(e5);
              break;
            case 31:
              this.stateSpecialStartSequence(e5);
              break;
            case 32:
              this.stateInRCDATA(e5);
              break;
            case 26:
              this.stateCDATASequence(e5);
              break;
            case 19:
              this.stateInAttrValueDoubleQuotes(e5);
              break;
            case 12:
              this.stateInAttrName(e5);
              break;
            case 13:
              this.stateInDirName(e5);
              break;
            case 14:
              this.stateInDirArg(e5);
              break;
            case 15:
              this.stateInDynamicDirArg(e5);
              break;
            case 16:
              this.stateInDirModifier(e5);
              break;
            case 28:
              this.stateInCommentLike(e5);
              break;
            case 27:
              this.stateInSpecialComment(e5);
              break;
            case 11:
              this.stateBeforeAttrName(e5);
              break;
            case 6:
              this.stateInTagName(e5);
              break;
            case 34:
              this.stateInSFCRootTagName(e5);
              break;
            case 9:
              this.stateInClosingTagName(e5);
              break;
            case 5:
              this.stateBeforeTagName(e5);
              break;
            case 17:
              this.stateAfterAttrName(e5);
              break;
            case 20:
              this.stateInAttrValueSingleQuotes(e5);
              break;
            case 18:
              this.stateBeforeAttrValue(e5);
              break;
            case 8:
              this.stateBeforeClosingTagName(e5);
              break;
            case 10:
              this.stateAfterClosingTagName(e5);
              break;
            case 29:
              this.stateBeforeSpecialS(e5);
              break;
            case 30:
              this.stateBeforeSpecialT(e5);
              break;
            case 21:
              this.stateInAttrValueNoQuotes(e5);
              break;
            case 7:
              this.stateInSelfClosingTag(e5);
              break;
            case 23:
              this.stateInDeclaration(e5);
              break;
            case 22:
              this.stateBeforeDeclaration(e5);
              break;
            case 25:
              this.stateBeforeComment(e5);
              break;
            case 24:
              this.stateInProcessingInstruction(e5);
              break;
            case 33:
              this.stateInEntity();
          }
          this.index++;
        }
        this.cleanup(), this.finish();
      }
      cleanup() {
        this.sectionStart !== this.index && (1 === this.state || 32 === this.state && 0 === this.sequenceIndex ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : 19 !== this.state && 20 !== this.state && 21 !== this.state || (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
      }
      finish() {
        this.handleTrailingData(), this.cbs.onend();
      }
      handleTrailingData() {
        const e4 = this.buffer.length;
        this.sectionStart >= e4 || (28 === this.state ? this.currentSequence === we.CdataEnd ? this.cbs.oncdata(this.sectionStart, e4) : this.cbs.oncomment(this.sectionStart, e4) : 6 === this.state || 11 === this.state || 18 === this.state || 17 === this.state || 12 === this.state || 13 === this.state || 14 === this.state || 15 === this.state || 16 === this.state || 20 === this.state || 19 === this.state || 21 === this.state || 9 === this.state || this.cbs.ontext(this.sectionStart, e4));
      }
      emitCodePoint(e4, t6) {
      }
    }(lt, { onerr: emitError, ontext(e4, t6) {
      onText(getSlice(e4, t6), e4, t6);
    }, ontextentity(e4, t6, n3) {
      onText(e4, t6, n3);
    }, oninterpolation(e4, t6) {
      if (at) return onText(getSlice(e4, t6), e4, t6);
      let n3 = e4 + pt.delimiterOpen.length, r4 = t6 - pt.delimiterClose.length;
      for (; isWhitespace(et.charCodeAt(n3)); ) n3++;
      for (; isWhitespace(et.charCodeAt(r4 - 1)); ) r4--;
      let s4 = getSlice(n3, r4);
      s4.includes("&") && (s4 = Qe.decodeEntities(s4, false)), addNode({ type: 5, content: createExp(s4, false, getLoc(n3, r4)), loc: getLoc(e4, t6) });
    }, onopentagname(e4, t6) {
      const n3 = getSlice(e4, t6);
      tt = { type: 1, tag: n3, ns: Qe.getNamespace(n3, lt[0], Qe.ns), tagType: 0, props: [], children: [], loc: getLoc(e4 - 1, t6), codegenNode: void 0 };
    }, onopentagend(e4) {
      endOpenTag(e4);
    }, onclosetag(e4, t6) {
      const n3 = getSlice(e4, t6);
      if (!Qe.isVoidTag(n3)) {
        let r4 = false;
        for (let e5 = 0; e5 < lt.length; e5++) {
          if (lt[e5].tag.toLowerCase() === n3.toLowerCase()) {
            r4 = true, e5 > 0 && emitError(24, lt[0].loc.start.offset);
            for (let n4 = 0; n4 <= e5; n4++) {
              onCloseTag(lt.shift(), t6, n4 < e5);
            }
            break;
          }
        }
        r4 || emitError(23, backTrack(e4, 60));
      }
    }, onselfclosingtag(e4) {
      const t6 = tt.tag;
      tt.isSelfClosing = true, endOpenTag(e4), lt[0] && lt[0].tag === t6 && onCloseTag(lt.shift(), e4);
    }, onattribname(e4, t6) {
      nt = { type: 6, name: getSlice(e4, t6), nameLoc: getLoc(e4, t6), value: void 0, loc: getLoc(e4) };
    }, ondirname(e4, t6) {
      const n3 = getSlice(e4, t6), r4 = "." === n3 || ":" === n3 ? "bind" : "@" === n3 ? "on" : "#" === n3 ? "slot" : n3.slice(2);
      if (at || "" !== r4 || emitError(26, e4), at || "" === r4) nt = { type: 6, name: n3, nameLoc: getLoc(e4, t6), value: void 0, loc: getLoc(e4) };
      else if (nt = { type: 7, name: r4, rawName: n3, exp: void 0, arg: void 0, modifiers: "." === n3 ? [createSimpleExpression("prop")] : [], loc: getLoc(e4) }, "pre" === r4) {
        at = pt.inVPre = true, ct = tt;
        const e5 = tt.props;
        for (let t7 = 0; t7 < e5.length; t7++) 7 === e5[t7].type && (e5[t7] = dirToAttr(e5[t7]));
      }
    }, ondirarg(e4, t6) {
      if (e4 === t6) return;
      const n3 = getSlice(e4, t6);
      if (at && !isVPre(nt)) nt.name += n3, setLocEnd(nt.nameLoc, t6);
      else {
        const r4 = "[" !== n3[0];
        nt.arg = createExp(r4 ? n3 : n3.slice(1, -1), r4, getLoc(e4, t6), r4 ? 3 : 0);
      }
    }, ondirmodifier(e4, t6) {
      const n3 = getSlice(e4, t6);
      if (at && !isVPre(nt)) nt.name += "." + n3, setLocEnd(nt.nameLoc, t6);
      else if ("slot" === nt.name) {
        const e5 = nt.arg;
        e5 && (e5.content += "." + n3, setLocEnd(e5.loc, t6));
      } else {
        const r4 = createSimpleExpression(n3, true, getLoc(e4, t6));
        nt.modifiers.push(r4);
      }
    }, onattribdata(e4, t6) {
      rt += getSlice(e4, t6), st < 0 && (st = e4), ot = t6;
    }, onattribentity(e4, t6, n3) {
      rt += e4, st < 0 && (st = t6), ot = n3;
    }, onattribnameend(e4) {
      const t6 = nt.loc.start.offset, n3 = getSlice(t6, e4);
      7 === nt.type && (nt.rawName = n3), tt.props.some((e5) => (7 === e5.type ? e5.rawName : e5.name) === n3) && emitError(2, t6);
    }, onattribend(e4, t6) {
      if (tt && nt) {
        if (setLocEnd(nt.loc, t6), 0 !== e4) if (rt.includes("&") && (rt = Qe.decodeEntities(rt, true)), 6 === nt.type) "class" === nt.name && (rt = condense(rt).trim()), 1 !== e4 || rt || emitError(13, t6), nt.value = { type: 2, content: rt, loc: 1 === e4 ? getLoc(st, ot) : getLoc(st - 1, ot + 1) }, pt.inSFCRoot && "template" === tt.tag && "lang" === nt.name && rt && "html" !== rt && pt.enterRCDATA(toCharCodes("</template"), 0);
        else {
          let e5 = 0;
          nt.exp = createExp(rt, false, getLoc(st, ot), 0, e5), "for" === nt.name && (nt.forParseResult = (function(e6) {
            const t8 = e6.loc, n3 = e6.content, r4 = n3.match(Ye);
            if (!r4) return;
            const [, s4, o5] = r4, createAliasExpression = /* @__PURE__ */ __name((e7, n4, r5 = false) => {
              const s5 = t8.start.offset + n4;
              return createExp(e7, false, getLoc(s5, s5 + e7.length), 0, r5 ? 1 : 0);
            }, "createAliasExpression"), i5 = { source: createAliasExpression(o5.trim(), n3.indexOf(o5, s4.length)), value: void 0, key: void 0, index: void 0, finalized: false };
            let a4 = s4.trim().replace(ut, "").trim();
            const c4 = s4.indexOf(a4), l3 = a4.match(dt);
            if (l3) {
              a4 = a4.replace(dt, "").trim();
              const e7 = l3[1].trim();
              let t9;
              if (e7 && (t9 = n3.indexOf(e7, c4 + a4.length), i5.key = createAliasExpression(e7, t9, true)), l3[2]) {
                const r5 = l3[2].trim();
                r5 && (i5.index = createAliasExpression(r5, n3.indexOf(r5, i5.key ? t9 + e7.length : c4 + a4.length), true));
              }
            }
            a4 && (i5.value = createAliasExpression(a4, c4, true));
            return i5;
          })(nt.exp));
          let t7 = -1;
          "bind" === nt.name && (t7 = nt.modifiers.findIndex((e6) => "sync" === e6.content)) > -1 && checkCompatEnabled("COMPILER_V_BIND_SYNC", Qe, nt.loc, nt.arg.loc.source) && (nt.name = "model", nt.modifiers.splice(t7, 1));
        }
        7 === nt.type && "pre" === nt.name || tt.props.push(nt);
      }
      rt = "", st = ot = -1;
    }, oncomment(e4, t6) {
      Qe.comments && addNode({ type: 3, content: getSlice(e4, t6), loc: getLoc(e4 - 4, t6 + 3) });
    }, onend() {
      const e4 = et.length;
      for (let t6 = 0; t6 < lt.length; t6++) onCloseTag(lt[t6], e4 - 1), emitError(24, lt[t6].loc.start.offset);
    }, oncdata(e4, t6) {
      0 !== lt[0].ns ? onText(getSlice(e4, t6), e4, t6) : emitError(1, e4 - 9);
    }, onprocessinginstruction(e4) {
      0 === (lt[0] ? lt[0].ns : Qe.ns) && emitError(21, e4 - 1);
    } });
    dt = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    ut = /^\(|\)$/g;
    __name(getSlice, "getSlice");
    __name(endOpenTag, "endOpenTag");
    __name(onText, "onText");
    __name(onCloseTag, "onCloseTag");
    __name(backTrack, "backTrack");
    ht = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
    __name(isFragmentTemplate, "isFragmentTemplate");
    ft = /\r\n/g;
    __name(condenseWhitespace, "condenseWhitespace");
    __name(hasNewlineChar, "hasNewlineChar");
    __name(condense, "condense");
    __name(addNode, "addNode");
    __name(getLoc, "getLoc");
    __name(setLocEnd, "setLocEnd");
    __name(dirToAttr, "dirToAttr");
    __name(createExp, "createExp");
    __name(emitError, "emitError");
    __name(baseParse, "baseParse");
    __name(cacheStatic, "cacheStatic");
    __name(getSingleElementRoot, "getSingleElementRoot");
    __name(walk, "walk");
    __name(getConstantType, "getConstantType");
    mt = /* @__PURE__ */ new Set([Ee, ge, _e, Se]);
    __name(getConstantTypeOfHelperCall, "getConstantTypeOfHelperCall");
    __name(getGeneratedPropsConstantType, "getGeneratedPropsConstantType");
    __name(getNodeProps, "getNodeProps");
    __name(createTransformContext, "createTransformContext");
    __name(transform, "transform");
    __name(traverseNode, "traverseNode");
    __name(createStructuralDirectiveTransform, "createStructuralDirectiveTransform");
    Et = "/*@__PURE__*/";
    aliasHelper = /* @__PURE__ */ __name((e4) => `${Le[e4]}: _${Le[e4]}`, "aliasHelper");
    __name(generate, "generate");
    __name(genAssets, "genAssets");
    __name(genNodeListAsArray, "genNodeListAsArray");
    __name(genNodeList, "genNodeList");
    __name(genNode, "genNode");
    __name(genExpression, "genExpression");
    __name(genCompoundExpression, "genCompoundExpression");
    __name(genExpressionAsPropertyKey, "genExpressionAsPropertyKey");
    new RegExp("\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b");
    __name(processExpression, "processExpression");
    gt = createStructuralDirectiveTransform(/^(?:if|else|else-if)$/, (e4, t6, n3) => processIf(e4, t6, n3, (e5, t7, r4) => {
      const s4 = n3.parent.children;
      let o5 = s4.indexOf(e5), i5 = 0;
      for (; o5-- >= 0; ) {
        const e6 = s4[o5];
        e6 && 9 === e6.type && (i5 += e6.branches.length);
      }
      return () => {
        if (r4) e5.codegenNode = createCodegenNodeForBranch(t7, i5, n3);
        else {
          const r5 = (function(e6) {
            for (; ; ) if (19 === e6.type) {
              if (19 !== e6.alternate.type) return e6;
              e6 = e6.alternate;
            } else 20 === e6.type && (e6 = e6.value);
          })(e5.codegenNode);
          r5.alternate = createCodegenNodeForBranch(t7, i5 + e5.branches.length - 1, n3);
        }
      };
    }));
    __name(processIf, "processIf");
    __name(createIfBranch, "createIfBranch");
    __name(createCodegenNodeForBranch, "createCodegenNodeForBranch");
    __name(createChildrenCodegenNode, "createChildrenCodegenNode");
    _t = createStructuralDirectiveTransform("for", (e4, t6, n3) => {
      const { helper: r4, removeHelper: s4 } = n3;
      return processFor(e4, t6, n3, (t7) => {
        const o5 = createCallExpression(r4(de), [t7.source]), i5 = isTemplateNode(e4), a4 = findDir(e4, "memo"), c4 = findProp(e4, "key", false, true);
        c4 && c4.type;
        let l3 = c4 && (6 === c4.type ? c4.value ? createSimpleExpression(c4.value.content, true) : void 0 : c4.exp);
        const p4 = c4 && l3 ? createObjectProperty("key", l3) : null, d3 = 4 === t7.source.type && t7.source.constType > 0, u3 = d3 ? 64 : c4 ? 128 : 256;
        return t7.codegenNode = createVNodeCall(n3, r4(q), void 0, o5, u3, void 0, void 0, true, !d3, false, e4.loc), () => {
          let c5;
          const { children: u4 } = t7, h4 = 1 !== u4.length || 1 !== u4[0].type, f3 = isSlotOutlet(e4) ? e4 : i5 && 1 === e4.children.length && isSlotOutlet(e4.children[0]) ? e4.children[0] : null;
          if (f3 ? (c5 = f3.codegenNode, i5 && p4 && injectProp(c5, p4, n3)) : h4 ? c5 = createVNodeCall(n3, r4(q), p4 ? createObjectExpression([p4]) : void 0, e4.children, 64, void 0, void 0, true, void 0, false) : (c5 = u4[0].codegenNode, i5 && p4 && injectProp(c5, p4, n3), c5.isBlock !== !d3 && (c5.isBlock ? (s4(Q), s4(getVNodeBlockHelper(n3.inSSR, c5.isComponent))) : s4(getVNodeHelper(n3.inSSR, c5.isComponent))), c5.isBlock = !d3, c5.isBlock ? (r4(Q), r4(getVNodeBlockHelper(n3.inSSR, c5.isComponent))) : r4(getVNodeHelper(n3.inSSR, c5.isComponent))), a4) {
            const e5 = createFunctionExpression(createForLoopParams(t7.parseResult, [createSimpleExpression("_cached")]));
            e5.body = createBlockStatement([createCompoundExpression(["const _memo = (", a4.exp, ")"]), createCompoundExpression(["if (_cached && _cached.el", ...l3 ? [" && _cached.key === ", l3] : [], ` && ${n3.helperString(Pe)}(_cached, _memo)) return _cached`]), createCompoundExpression(["const _item = ", c5]), createSimpleExpression("_item.memo = _memo"), createSimpleExpression("return _item")]), o5.arguments.push(e5, createSimpleExpression("_cache"), createSimpleExpression(String(n3.cached.length))), n3.cached.push(null);
          } else o5.arguments.push(createFunctionExpression(createForLoopParams(t7.parseResult), c5, true));
        };
      });
    });
    __name(processFor, "processFor");
    __name(finalizeForParseResult, "finalizeForParseResult");
    __name(createForLoopParams, "createForLoopParams");
    St = createSimpleExpression("undefined", false);
    trackSlotScopes = /* @__PURE__ */ __name((e4, t6) => {
      if (1 === e4.type && (1 === e4.tagType || 3 === e4.tagType)) {
        const n3 = findDir(e4, "slot");
        if (n3) return n3.exp, t6.scopes.vSlot++, () => {
          t6.scopes.vSlot--;
        };
      }
    }, "trackSlotScopes");
    buildClientSlotFn = /* @__PURE__ */ __name((e4, t6, n3, r4) => createFunctionExpression(e4, n3, false, true, n3.length ? n3[0].loc : r4), "buildClientSlotFn");
    __name(buildSlots, "buildSlots");
    __name(buildDynamicSlot, "buildDynamicSlot");
    __name(hasForwardedSlots, "hasForwardedSlots");
    Tt = /* @__PURE__ */ new WeakMap();
    transformElement = /* @__PURE__ */ __name((e4, t6) => function() {
      if (1 !== (e4 = t6.currentNode).type || 0 !== e4.tagType && 1 !== e4.tagType) return;
      const { tag: n3, props: r4 } = e4, s4 = 1 === e4.tagType;
      let o5 = s4 ? resolveComponentType(e4, t6) : `"${n3}"`;
      const i5 = isObject(o5) && o5.callee === ae;
      let a4, c4, l3, p4, d3, u3 = 0, h4 = i5 || o5 === J || o5 === K || !s4 && ("svg" === n3 || "foreignObject" === n3 || "math" === n3);
      if (r4.length > 0) {
        const n4 = buildProps(e4, t6, void 0, s4, i5);
        a4 = n4.props, u3 = n4.patchFlag, p4 = n4.dynamicPropNames;
        const r5 = n4.directives;
        d3 = r5 && r5.length ? createArrayExpression(r5.map((e5) => buildDirectiveArgs(e5, t6))) : void 0, n4.shouldUseBlock && (h4 = true);
      }
      if (e4.children.length > 0) {
        o5 === Y && (h4 = true, u3 |= 1024);
        if (s4 && o5 !== J && o5 !== Y) {
          const { slots: n4, hasDynamicSlots: r5 } = buildSlots(e4, t6);
          c4 = n4, r5 && (u3 |= 1024);
        } else if (1 === e4.children.length && o5 !== J) {
          const n4 = e4.children[0], r5 = n4.type, s5 = 5 === r5 || 8 === r5;
          s5 && 0 === getConstantType(n4, t6) && (u3 |= 1), c4 = s5 || 2 === r5 ? n4 : e4.children;
        } else c4 = e4.children;
      }
      p4 && p4.length && (l3 = (function(e5) {
        let t7 = "[";
        for (let n4 = 0, r5 = e5.length; n4 < r5; n4++) t7 += JSON.stringify(e5[n4]), n4 < r5 - 1 && (t7 += ", ");
        return t7 + "]";
      })(p4)), e4.codegenNode = createVNodeCall(t6, o5, a4, c4, 0 === u3 ? void 0 : u3, l3, d3, !!h4, false, s4, e4.loc);
    }, "transformElement");
    __name(resolveComponentType, "resolveComponentType");
    __name(buildProps, "buildProps");
    __name(dedupeProperties, "dedupeProperties");
    __name(mergeAsArray, "mergeAsArray");
    __name(buildDirectiveArgs, "buildDirectiveArgs");
    __name(isComponentTag, "isComponentTag");
    transformSlotOutlet = /* @__PURE__ */ __name((e4, t6) => {
      if (isSlotOutlet(e4)) {
        const { children: n3, loc: r4 } = e4, { slotName: s4, slotProps: o5 } = processSlotOutlet(e4, t6), i5 = [t6.prefixIdentifiers ? "_ctx.$slots" : "$slots", s4, "{}", "undefined", "true"];
        let a4 = 2;
        o5 && (i5[2] = o5, a4 = 3), n3.length && (i5[3] = createFunctionExpression([], n3, false, false, r4), a4 = 4), t6.scopeId && !t6.slotted && (a4 = 5), i5.splice(a4), e4.codegenNode = createCallExpression(t6.helper(ue), i5, r4);
      }
    }, "transformSlotOutlet");
    __name(processSlotOutlet, "processSlotOutlet");
    transformOn$1 = /* @__PURE__ */ __name((e4, t6, n3, r4) => {
      const { loc: s4, modifiers: o5, arg: i5 } = e4;
      let a4;
      if (e4.exp || o5.length || n3.onError(createCompilerError(35, s4)), 4 === i5.type) if (i5.isStatic) {
        let e5 = i5.content;
        e5.startsWith("vue:") && (e5 = `vnode-${e5.slice(4)}`);
        a4 = createSimpleExpression(0 !== t6.tagType || e5.startsWith("vnode") || !/[A-Z]/.test(e5) ? u(p(e5)) : `on:${e5}`, true, i5.loc);
      } else a4 = createCompoundExpression([`${n3.helperString(ye)}(`, i5, ")"]);
      else a4 = i5, a4.children.unshift(`${n3.helperString(ye)}(`), a4.children.push(")");
      let c4 = e4.exp;
      c4 && !c4.content.trim() && (c4 = void 0);
      let l3 = n3.cacheHandlers && !c4 && !n3.inVOnce;
      if (c4) {
        const e5 = We(c4), t7 = !(e5 || Je(c4)), n4 = c4.content.includes(";");
        (t7 || l3 && e5) && (c4 = createCompoundExpression([`${t7 ? "$event" : "(...args)"} => ${n4 ? "{" : "("}`, c4, n4 ? "}" : ")"]));
      }
      let p4 = { props: [createObjectProperty(a4, c4 || createSimpleExpression("() => {}", false, s4))] };
      return r4 && (p4 = r4(p4)), l3 && (p4.props[0].value = n3.cache(p4.props[0].value)), p4.props.forEach((e5) => e5.key.isHandlerKey = true), p4;
    }, "transformOn$1");
    transformBind = /* @__PURE__ */ __name((e4, t6, n3) => {
      const { modifiers: r4, loc: s4 } = e4, o5 = e4.arg;
      let { exp: i5 } = e4;
      return i5 && 4 === i5.type && !i5.content.trim() && (i5 = void 0), 4 !== o5.type ? (o5.children.unshift("("), o5.children.push(') || ""')) : o5.isStatic || (o5.content = o5.content ? `${o5.content} || ""` : '""'), r4.some((e5) => "camel" === e5.content) && (4 === o5.type ? o5.isStatic ? o5.content = p(o5.content) : o5.content = `${n3.helperString(Ne)}(${o5.content})` : (o5.children.unshift(`${n3.helperString(Ne)}(`), o5.children.push(")"))), n3.inSSR || (r4.some((e5) => "prop" === e5.content) && injectPrefix(o5, "."), r4.some((e5) => "attr" === e5.content) && injectPrefix(o5, "^")), { props: [createObjectProperty(o5, i5)] };
    }, "transformBind");
    injectPrefix = /* @__PURE__ */ __name((e4, t6) => {
      4 === e4.type ? e4.isStatic ? e4.content = t6 + e4.content : e4.content = `\`${t6}\${${e4.content}}\`` : (e4.children.unshift(`'${t6}' + (`), e4.children.push(")"));
    }, "injectPrefix");
    transformText = /* @__PURE__ */ __name((e4, t6) => {
      if (0 === e4.type || 1 === e4.type || 11 === e4.type || 10 === e4.type) return () => {
        const n3 = e4.children;
        let r4, s4 = false;
        for (let e5 = 0; e5 < n3.length; e5++) {
          const t7 = n3[e5];
          if (isText$1(t7)) {
            s4 = true;
            for (let s5 = e5 + 1; s5 < n3.length; s5++) {
              const o5 = n3[s5];
              if (!isText$1(o5)) {
                r4 = void 0;
                break;
              }
              r4 || (r4 = n3[e5] = createCompoundExpression([t7], t7.loc)), r4.children.push(" + ", o5), n3.splice(s5, 1), s5--;
            }
          }
        }
        if (s4 && (1 !== n3.length || 0 !== e4.type && (1 !== e4.type || 0 !== e4.tagType || e4.props.find((e5) => 7 === e5.type && !t6.directiveTransforms[e5.name]) || "template" === e4.tag))) for (let e5 = 0; e5 < n3.length; e5++) {
          const r5 = n3[e5];
          if (isText$1(r5) || 8 === r5.type) {
            const s5 = [];
            2 === r5.type && " " === r5.content || s5.push(r5), t6.ssr || 0 !== getConstantType(r5, t6) || s5.push("1"), n3[e5] = { type: 12, content: r5, loc: r5.loc, codegenNode: createCallExpression(t6.helper(se), s5) };
          }
        }
      };
    }, "transformText");
    Nt = /* @__PURE__ */ new WeakSet();
    transformOnce = /* @__PURE__ */ __name((e4, t6) => {
      if (1 === e4.type && findDir(e4, "once", true)) {
        if (Nt.has(e4) || t6.inVOnce || t6.inSSR) return;
        return Nt.add(e4), t6.inVOnce = true, t6.helper(xe), () => {
          t6.inVOnce = false;
          const e5 = t6.currentNode;
          e5.codegenNode && (e5.codegenNode = t6.cache(e5.codegenNode, true, true));
        };
      }
    }, "transformOnce");
    transformModel$1 = /* @__PURE__ */ __name((e4, t6, n3) => {
      const { exp: r4, arg: s4 } = e4;
      if (!r4) return n3.onError(createCompilerError(41, e4.loc)), createTransformProps();
      const o5 = r4.loc.source.trim(), i5 = 4 === r4.type ? r4.content : o5, a4 = n3.bindingMetadata[o5];
      if ("props" === a4 || "props-aliased" === a4) return n3.onError(createCompilerError(44, r4.loc)), createTransformProps();
      if ("literal-const" === a4 || "setup-const" === a4) return n3.onError(createCompilerError(45, r4.loc)), createTransformProps();
      if (!i5.trim() || !We(r4)) return n3.onError(createCompilerError(42, r4.loc)), createTransformProps();
      const c4 = s4 || createSimpleExpression("modelValue", true), l3 = s4 ? isStaticExp(s4) ? `onUpdate:${p(s4.content)}` : createCompoundExpression(['"onUpdate:" + ', s4]) : "onUpdate:modelValue";
      let p4;
      p4 = createCompoundExpression([`${n3.isTS ? "($event: any)" : "$event"} => ((`, r4, ") = $event)"]);
      const d3 = [createObjectProperty(c4, e4.exp), createObjectProperty(l3, p4)];
      if (e4.modifiers.length && 1 === t6.tagType) {
        const t7 = e4.modifiers.map((e5) => e5.content).map((e5) => (isSimpleIdentifier(e5) ? e5 : JSON.stringify(e5)) + ": true").join(", "), n4 = s4 ? isStaticExp(s4) ? `${s4.content}Modifiers` : createCompoundExpression([s4, ' + "Modifiers"']) : "modelModifiers";
        d3.push(createObjectProperty(n4, createSimpleExpression(`{ ${t7} }`, false, e4.loc, 2)));
      }
      return createTransformProps(d3);
    }, "transformModel$1");
    __name(createTransformProps, "createTransformProps");
    Ct = /[\w).+\-_$\]]/;
    transformFilter = /* @__PURE__ */ __name((e4, t6) => {
      isCompatEnabled("COMPILER_FILTERS", t6) && (5 === e4.type ? rewriteFilter(e4.content, t6) : 1 === e4.type && e4.props.forEach((e5) => {
        7 === e5.type && "for" !== e5.name && e5.exp && rewriteFilter(e5.exp, t6);
      }));
    }, "transformFilter");
    __name(rewriteFilter, "rewriteFilter");
    __name(parseFilter, "parseFilter");
    __name(wrapFilter, "wrapFilter");
    yt = /* @__PURE__ */ new WeakSet();
    transformMemo = /* @__PURE__ */ __name((e4, t6) => {
      if (1 === e4.type) {
        const n3 = findDir(e4, "memo");
        if (!n3 || yt.has(e4) || t6.inSSR) return;
        return yt.add(e4), () => {
          const r4 = e4.codegenNode || t6.currentNode.codegenNode;
          r4 && 13 === r4.type && (1 !== e4.tagType && convertToBlock(r4, t6), e4.codegenNode = createCallExpression(t6.helper(Re), [n3.exp, createFunctionExpression(void 0, r4), "_cache", String(t6.cached.length)]), t6.cached.push(null));
        };
      }
    }, "transformMemo");
    transformVBindShorthand = /* @__PURE__ */ __name((e4, t6) => {
      if (1 === e4.type) {
        for (const n3 of e4.props) if (7 === n3.type && "bind" === n3.name && (!n3.exp || 4 === n3.exp.type && !n3.exp.content.trim()) && n3.arg) {
          const e5 = n3.arg;
          if (4 === e5.type && e5.isStatic) {
            const t7 = p(e5.content);
            (Be.test(t7[0]) || "-" === t7[0]) && (n3.exp = createSimpleExpression(t7, false, e5.loc));
          } else t6.onError(createCompilerError(53, e5.loc)), n3.exp = createSimpleExpression("", true, e5.loc);
        }
      }
    }, "transformVBindShorthand");
    __name(getBaseTransformPreset, "getBaseTransformPreset");
    __name(baseCompile, "baseCompile");
    noopDirectiveTransform = /* @__PURE__ */ __name(() => ({ props: [] }), "noopDirectiveTransform");
    xt = /* @__PURE__ */ Symbol("");
    It = /* @__PURE__ */ Symbol("");
    Ot = /* @__PURE__ */ Symbol("");
    bt = /* @__PURE__ */ Symbol("");
    vt = /* @__PURE__ */ Symbol("");
    At = /* @__PURE__ */ Symbol("");
    Rt = /* @__PURE__ */ Symbol("");
    Pt = /* @__PURE__ */ Symbol("");
    Lt = /* @__PURE__ */ Symbol("");
    Mt = /* @__PURE__ */ Symbol("");
    registerRuntimeHelpers({ [xt]: "vModelRadio", [It]: "vModelCheckbox", [Ot]: "vModelText", [bt]: "vModelSelect", [vt]: "vModelDynamic", [At]: "withModifiers", [Rt]: "withKeys", [Pt]: "vShow", [Lt]: "Transition", [Mt]: "TransitionGroup" });
    kt = { parseMode: "html", isVoidTag: C, isNativeTag: /* @__PURE__ */ __name((e4) => k(e4) || O(e4) || M(e4), "isNativeTag"), isPreTag: /* @__PURE__ */ __name((e4) => "pre" === e4, "isPreTag"), isIgnoreNewlineTag: /* @__PURE__ */ __name((e4) => "pre" === e4 || "textarea" === e4, "isIgnoreNewlineTag"), decodeEntities: /* @__PURE__ */ __name(function(e4, t6 = false) {
      return Dt || (Dt = document.createElement("div")), t6 ? (Dt.innerHTML = `<div foo="${e4.replace(/"/g, "&quot;")}">`, Dt.children[0].getAttribute("foo")) : (Dt.innerHTML = e4, Dt.textContent);
    }, "decodeEntities"), isBuiltInComponent: /* @__PURE__ */ __name((e4) => "Transition" === e4 || "transition" === e4 ? Lt : "TransitionGroup" === e4 || "transition-group" === e4 ? Mt : void 0, "isBuiltInComponent"), getNamespace(e4, t6, n3) {
      let r4 = t6 ? t6.ns : n3;
      if (t6 && 2 === r4) if ("annotation-xml" === t6.tag) {
        if ("svg" === e4) return 1;
        t6.props.some((e5) => 6 === e5.type && "encoding" === e5.name && null != e5.value && ("text/html" === e5.value.content || "application/xhtml+xml" === e5.value.content)) && (r4 = 0);
      } else /^m(?:[ions]|text)$/.test(t6.tag) && "mglyph" !== e4 && "malignmark" !== e4 && (r4 = 0);
      else t6 && 1 === r4 && ("foreignObject" !== t6.tag && "desc" !== t6.tag && "title" !== t6.tag || (r4 = 0));
      if (0 === r4) {
        if ("svg" === e4) return 1;
        if ("math" === e4) return 2;
      }
      return r4;
    } };
    transformStyle = /* @__PURE__ */ __name((e4) => {
      1 === e4.type && e4.props.forEach((t6, n3) => {
        6 === t6.type && "style" === t6.name && t6.value && (e4.props[n3] = { type: 7, name: "bind", arg: createSimpleExpression("style", true, t6.loc), exp: parseInlineCSS(t6.value.content, t6.loc), modifiers: [], loc: t6.loc });
      });
    }, "transformStyle");
    parseInlineCSS = /* @__PURE__ */ __name((e4, t6) => {
      const n3 = parseStringStyle(e4);
      return createSimpleExpression(JSON.stringify(n3), false, t6, 3);
    }, "parseInlineCSS");
    __name(createDOMCompilerError, "createDOMCompilerError");
    wt = { 54: "v-html is missing expression.", 55: "v-html will override element children.", 56: "v-text is missing expression.", 57: "v-text will override element children.", 58: "v-model can only be used on <input>, <textarea> and <select> elements.", 59: "v-model argument is not supported on plain elements.", 60: "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.", 61: "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.", 62: "v-show is missing expression.", 63: "<Transition> expects exactly one child element or component.", 64: "Tags with side effect (<script> and <style>) are ignored in client component templates." };
    Vt = makeMap("passive,once,capture");
    Ft = makeMap("stop,prevent,self,ctrl,shift,alt,meta,exact,middle");
    Xt = makeMap("left,right");
    Ut = makeMap("onkeyup,onkeydown,onkeypress");
    transformClick = /* @__PURE__ */ __name((e4, t6) => isStaticExp(e4) && "onclick" === e4.content.toLowerCase() ? createSimpleExpression(t6, true) : 4 !== e4.type ? createCompoundExpression(["(", e4, `) === "onClick" ? "${t6}" : (`, e4, ")"]) : e4, "transformClick");
    ignoreSideEffectTags = /* @__PURE__ */ __name((e4, t6) => {
      1 !== e4.type || 0 !== e4.tagType || "script" !== e4.tag && "style" !== e4.tag || t6.removeNode();
    }, "ignoreSideEffectTags");
    Bt = [transformStyle];
    Ht = { cloak: noopDirectiveTransform, html: /* @__PURE__ */ __name((e4, t6, n3) => {
      const { exp: r4, loc: s4 } = e4;
      return r4 || n3.onError(createDOMCompilerError(54, s4)), t6.children.length && (n3.onError(createDOMCompilerError(55, s4)), t6.children.length = 0), { props: [createObjectProperty(createSimpleExpression("innerHTML", true, s4), r4 || createSimpleExpression("", true))] };
    }, "html"), text: /* @__PURE__ */ __name((e4, t6, n3) => {
      const { exp: r4, loc: s4 } = e4;
      return r4 || n3.onError(createDOMCompilerError(56, s4)), t6.children.length && (n3.onError(createDOMCompilerError(57, s4)), t6.children.length = 0), { props: [createObjectProperty(createSimpleExpression("textContent", true), r4 ? getConstantType(r4, n3) > 0 ? r4 : createCallExpression(n3.helperString(fe), [r4], s4) : createSimpleExpression("", true))] };
    }, "text"), model: /* @__PURE__ */ __name((e4, t6, n3) => {
      const r4 = transformModel$1(e4, t6, n3);
      if (!r4.props.length || 1 === t6.tagType) return r4;
      e4.arg && n3.onError(createDOMCompilerError(59, e4.arg.loc));
      const { tag: s4 } = t6, o5 = n3.isCustomElement(s4);
      if ("input" === s4 || "textarea" === s4 || "select" === s4 || o5) {
        let i5 = Ot, a4 = false;
        if ("input" === s4 || o5) {
          const r5 = findProp(t6, "type");
          if (r5) {
            if (7 === r5.type) i5 = vt;
            else if (r5.value) switch (r5.value.content) {
              case "radio":
                i5 = xt;
                break;
              case "checkbox":
                i5 = It;
                break;
              case "file":
                a4 = true, n3.onError(createDOMCompilerError(60, e4.loc));
            }
          } else hasDynamicKeyVBind(t6) && (i5 = vt);
        } else "select" === s4 && (i5 = bt);
        a4 || (r4.needRuntime = n3.helper(i5));
      } else n3.onError(createDOMCompilerError(58, e4.loc));
      return r4.props = r4.props.filter((e5) => !(4 === e5.key.type && "modelValue" === e5.key.content)), r4;
    }, "model"), on: /* @__PURE__ */ __name((e4, t6, n3) => transformOn$1(e4, t6, n3, (t7) => {
      const { modifiers: r4 } = e4;
      if (!r4.length) return t7;
      let { key: s4, value: o5 } = t7.props[0];
      const { keyModifiers: i5, nonKeyModifiers: a4, eventOptionModifiers: c4 } = ((e5, t8, n4) => {
        const r5 = [], s5 = [], o6 = [];
        for (let i6 = 0; i6 < t8.length; i6++) {
          const a5 = t8[i6].content;
          "native" === a5 && checkCompatEnabled("COMPILER_V_ON_NATIVE", n4) || Vt(a5) ? o6.push(a5) : Xt(a5) ? isStaticExp(e5) ? Ut(e5.content.toLowerCase()) ? r5.push(a5) : s5.push(a5) : (r5.push(a5), s5.push(a5)) : Ft(a5) ? s5.push(a5) : r5.push(a5);
        }
        return { keyModifiers: r5, nonKeyModifiers: s5, eventOptionModifiers: o6 };
      })(s4, r4, n3, e4.loc);
      if (a4.includes("right") && (s4 = transformClick(s4, "onContextmenu")), a4.includes("middle") && (s4 = transformClick(s4, "onMouseup")), a4.length && (o5 = createCallExpression(n3.helper(At), [o5, JSON.stringify(a4)])), !i5.length || isStaticExp(s4) && !Ut(s4.content.toLowerCase()) || (o5 = createCallExpression(n3.helper(Rt), [o5, JSON.stringify(i5)])), c4.length) {
        const e5 = c4.map(f).join("");
        s4 = isStaticExp(s4) ? createSimpleExpression(`${s4.content}${e5}`, true) : createCompoundExpression(["(", s4, `) + "${e5}"`]);
      }
      return { props: [createObjectProperty(s4, o5)] };
    }), "on"), show: /* @__PURE__ */ __name((e4, t6, n3) => {
      const { exp: r4, loc: s4 } = e4;
      return r4 || n3.onError(createDOMCompilerError(62, s4)), { props: [], needRuntime: n3.helper(Pt) };
    }, "show") };
    jt = Object.freeze(Object.defineProperty({ __proto__: null, BASE_TRANSITION: z2, BindingTypes: { DATA: "data", PROPS: "props", PROPS_ALIASED: "props-aliased", SETUP_LET: "setup-let", SETUP_CONST: "setup-const", SETUP_REACTIVE_CONST: "setup-reactive-const", SETUP_MAYBE_REF: "setup-maybe-ref", SETUP_REF: "setup-ref", OPTIONS: "options", LITERAL_CONST: "literal-const" }, CAMELIZE: Ne, CAPITALIZE: Ce, CREATE_BLOCK: Z, CREATE_COMMENT: re, CREATE_ELEMENT_BLOCK: ee, CREATE_ELEMENT_VNODE: ne, CREATE_SLOTS: he, CREATE_STATIC: oe, CREATE_TEXT: se, CREATE_VNODE: te, CompilerDeprecationTypes: { COMPILER_IS_ON_ELEMENT: "COMPILER_IS_ON_ELEMENT", COMPILER_V_BIND_SYNC: "COMPILER_V_BIND_SYNC", COMPILER_V_BIND_OBJECT_ORDER: "COMPILER_V_BIND_OBJECT_ORDER", COMPILER_V_ON_NATIVE: "COMPILER_V_ON_NATIVE", COMPILER_V_IF_V_FOR_PRECEDENCE: "COMPILER_V_IF_V_FOR_PRECEDENCE", COMPILER_NATIVE_TEMPLATE: "COMPILER_NATIVE_TEMPLATE", COMPILER_INLINE_TEMPLATE: "COMPILER_INLINE_TEMPLATE", COMPILER_FILTERS: "COMPILER_FILTERS" }, ConstantTypes: { NOT_CONSTANT: 0, 0: "NOT_CONSTANT", CAN_SKIP_PATCH: 1, 1: "CAN_SKIP_PATCH", CAN_CACHE: 2, 2: "CAN_CACHE", CAN_STRINGIFY: 3, 3: "CAN_STRINGIFY" }, DOMDirectiveTransforms: Ht, DOMErrorCodes: { X_V_HTML_NO_EXPRESSION: 54, 54: "X_V_HTML_NO_EXPRESSION", X_V_HTML_WITH_CHILDREN: 55, 55: "X_V_HTML_WITH_CHILDREN", X_V_TEXT_NO_EXPRESSION: 56, 56: "X_V_TEXT_NO_EXPRESSION", X_V_TEXT_WITH_CHILDREN: 57, 57: "X_V_TEXT_WITH_CHILDREN", X_V_MODEL_ON_INVALID_ELEMENT: 58, 58: "X_V_MODEL_ON_INVALID_ELEMENT", X_V_MODEL_ARG_ON_ELEMENT: 59, 59: "X_V_MODEL_ARG_ON_ELEMENT", X_V_MODEL_ON_FILE_INPUT_ELEMENT: 60, 60: "X_V_MODEL_ON_FILE_INPUT_ELEMENT", X_V_MODEL_UNNECESSARY_VALUE: 61, 61: "X_V_MODEL_UNNECESSARY_VALUE", X_V_SHOW_NO_EXPRESSION: 62, 62: "X_V_SHOW_NO_EXPRESSION", X_TRANSITION_INVALID_CHILDREN: 63, 63: "X_TRANSITION_INVALID_CHILDREN", X_IGNORED_SIDE_EFFECT_TAG: 64, 64: "X_IGNORED_SIDE_EFFECT_TAG", __EXTEND_POINT__: 65, 65: "__EXTEND_POINT__" }, DOMErrorMessages: wt, DOMNodeTransforms: Bt, ElementTypes: { ELEMENT: 0, 0: "ELEMENT", COMPONENT: 1, 1: "COMPONENT", SLOT: 2, 2: "SLOT", TEMPLATE: 3, 3: "TEMPLATE" }, ErrorCodes: { ABRUPT_CLOSING_OF_EMPTY_COMMENT: 0, 0: "ABRUPT_CLOSING_OF_EMPTY_COMMENT", CDATA_IN_HTML_CONTENT: 1, 1: "CDATA_IN_HTML_CONTENT", DUPLICATE_ATTRIBUTE: 2, 2: "DUPLICATE_ATTRIBUTE", END_TAG_WITH_ATTRIBUTES: 3, 3: "END_TAG_WITH_ATTRIBUTES", END_TAG_WITH_TRAILING_SOLIDUS: 4, 4: "END_TAG_WITH_TRAILING_SOLIDUS", EOF_BEFORE_TAG_NAME: 5, 5: "EOF_BEFORE_TAG_NAME", EOF_IN_CDATA: 6, 6: "EOF_IN_CDATA", EOF_IN_COMMENT: 7, 7: "EOF_IN_COMMENT", EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT: 8, 8: "EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT", EOF_IN_TAG: 9, 9: "EOF_IN_TAG", INCORRECTLY_CLOSED_COMMENT: 10, 10: "INCORRECTLY_CLOSED_COMMENT", INCORRECTLY_OPENED_COMMENT: 11, 11: "INCORRECTLY_OPENED_COMMENT", INVALID_FIRST_CHARACTER_OF_TAG_NAME: 12, 12: "INVALID_FIRST_CHARACTER_OF_TAG_NAME", MISSING_ATTRIBUTE_VALUE: 13, 13: "MISSING_ATTRIBUTE_VALUE", MISSING_END_TAG_NAME: 14, 14: "MISSING_END_TAG_NAME", MISSING_WHITESPACE_BETWEEN_ATTRIBUTES: 15, 15: "MISSING_WHITESPACE_BETWEEN_ATTRIBUTES", NESTED_COMMENT: 16, 16: "NESTED_COMMENT", UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME: 17, 17: "UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME", UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE: 18, 18: "UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE", UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME: 19, 19: "UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME", UNEXPECTED_NULL_CHARACTER: 20, 20: "UNEXPECTED_NULL_CHARACTER", UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME: 21, 21: "UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME", UNEXPECTED_SOLIDUS_IN_TAG: 22, 22: "UNEXPECTED_SOLIDUS_IN_TAG", X_INVALID_END_TAG: 23, 23: "X_INVALID_END_TAG", X_MISSING_END_TAG: 24, 24: "X_MISSING_END_TAG", X_MISSING_INTERPOLATION_END: 25, 25: "X_MISSING_INTERPOLATION_END", X_MISSING_DIRECTIVE_NAME: 26, 26: "X_MISSING_DIRECTIVE_NAME", X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END: 27, 27: "X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END", X_V_IF_NO_EXPRESSION: 28, 28: "X_V_IF_NO_EXPRESSION", X_V_IF_SAME_KEY: 29, 29: "X_V_IF_SAME_KEY", X_V_ELSE_NO_ADJACENT_IF: 30, 30: "X_V_ELSE_NO_ADJACENT_IF", X_V_FOR_NO_EXPRESSION: 31, 31: "X_V_FOR_NO_EXPRESSION", X_V_FOR_MALFORMED_EXPRESSION: 32, 32: "X_V_FOR_MALFORMED_EXPRESSION", X_V_FOR_TEMPLATE_KEY_PLACEMENT: 33, 33: "X_V_FOR_TEMPLATE_KEY_PLACEMENT", X_V_BIND_NO_EXPRESSION: 34, 34: "X_V_BIND_NO_EXPRESSION", X_V_ON_NO_EXPRESSION: 35, 35: "X_V_ON_NO_EXPRESSION", X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET: 36, 36: "X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET", X_V_SLOT_MIXED_SLOT_USAGE: 37, 37: "X_V_SLOT_MIXED_SLOT_USAGE", X_V_SLOT_DUPLICATE_SLOT_NAMES: 38, 38: "X_V_SLOT_DUPLICATE_SLOT_NAMES", X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN: 39, 39: "X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN", X_V_SLOT_MISPLACED: 40, 40: "X_V_SLOT_MISPLACED", X_V_MODEL_NO_EXPRESSION: 41, 41: "X_V_MODEL_NO_EXPRESSION", X_V_MODEL_MALFORMED_EXPRESSION: 42, 42: "X_V_MODEL_MALFORMED_EXPRESSION", X_V_MODEL_ON_SCOPE_VARIABLE: 43, 43: "X_V_MODEL_ON_SCOPE_VARIABLE", X_V_MODEL_ON_PROPS: 44, 44: "X_V_MODEL_ON_PROPS", X_V_MODEL_ON_CONST: 45, 45: "X_V_MODEL_ON_CONST", X_INVALID_EXPRESSION: 46, 46: "X_INVALID_EXPRESSION", X_KEEP_ALIVE_INVALID_CHILDREN: 47, 47: "X_KEEP_ALIVE_INVALID_CHILDREN", X_PREFIX_ID_NOT_SUPPORTED: 48, 48: "X_PREFIX_ID_NOT_SUPPORTED", X_MODULE_MODE_NOT_SUPPORTED: 49, 49: "X_MODULE_MODE_NOT_SUPPORTED", X_CACHE_HANDLER_NOT_SUPPORTED: 50, 50: "X_CACHE_HANDLER_NOT_SUPPORTED", X_SCOPE_ID_NOT_SUPPORTED: 51, 51: "X_SCOPE_ID_NOT_SUPPORTED", X_VNODE_HOOKS: 52, 52: "X_VNODE_HOOKS", X_V_BIND_INVALID_SAME_NAME_ARGUMENT: 53, 53: "X_V_BIND_INVALID_SAME_NAME_ARGUMENT", __EXTEND_POINT__: 54, 54: "__EXTEND_POINT__" }, FRAGMENT: q, GUARD_REACTIVE_PROPS: Se, IS_MEMO_SAME: Pe, IS_REF: Ae, KEEP_ALIVE: Y, MERGE_PROPS: me, NORMALIZE_CLASS: Ee, NORMALIZE_PROPS: _e, NORMALIZE_STYLE: ge, Namespaces: { HTML: 0, 0: "HTML", SVG: 1, 1: "SVG", MATH_ML: 2, 2: "MATH_ML" }, NodeTypes: { ROOT: 0, 0: "ROOT", ELEMENT: 1, 1: "ELEMENT", TEXT: 2, 2: "TEXT", COMMENT: 3, 3: "COMMENT", SIMPLE_EXPRESSION: 4, 4: "SIMPLE_EXPRESSION", INTERPOLATION: 5, 5: "INTERPOLATION", ATTRIBUTE: 6, 6: "ATTRIBUTE", DIRECTIVE: 7, 7: "DIRECTIVE", COMPOUND_EXPRESSION: 8, 8: "COMPOUND_EXPRESSION", IF: 9, 9: "IF", IF_BRANCH: 10, 10: "IF_BRANCH", FOR: 11, 11: "FOR", TEXT_CALL: 12, 12: "TEXT_CALL", VNODE_CALL: 13, 13: "VNODE_CALL", JS_CALL_EXPRESSION: 14, 14: "JS_CALL_EXPRESSION", JS_OBJECT_EXPRESSION: 15, 15: "JS_OBJECT_EXPRESSION", JS_PROPERTY: 16, 16: "JS_PROPERTY", JS_ARRAY_EXPRESSION: 17, 17: "JS_ARRAY_EXPRESSION", JS_FUNCTION_EXPRESSION: 18, 18: "JS_FUNCTION_EXPRESSION", JS_CONDITIONAL_EXPRESSION: 19, 19: "JS_CONDITIONAL_EXPRESSION", JS_CACHE_EXPRESSION: 20, 20: "JS_CACHE_EXPRESSION", JS_BLOCK_STATEMENT: 21, 21: "JS_BLOCK_STATEMENT", JS_TEMPLATE_LITERAL: 22, 22: "JS_TEMPLATE_LITERAL", JS_IF_STATEMENT: 23, 23: "JS_IF_STATEMENT", JS_ASSIGNMENT_EXPRESSION: 24, 24: "JS_ASSIGNMENT_EXPRESSION", JS_SEQUENCE_EXPRESSION: 25, 25: "JS_SEQUENCE_EXPRESSION", JS_RETURN_STATEMENT: 26, 26: "JS_RETURN_STATEMENT" }, OPEN_BLOCK: Q, POP_SCOPE_ID: Oe, PUSH_SCOPE_ID: Ie, RENDER_LIST: de, RENDER_SLOT: ue, RESOLVE_COMPONENT: ie, RESOLVE_DIRECTIVE: ce, RESOLVE_DYNAMIC_COMPONENT: ae, RESOLVE_FILTER: le, SET_BLOCK_TRACKING: xe, SUSPENSE: K, TELEPORT: J, TO_DISPLAY_STRING: fe, TO_HANDLERS: Te, TO_HANDLER_KEY: ye, TRANSITION: Lt, TRANSITION_GROUP: Mt, TS_NODE_TYPES: Xe, UNREF: ve, V_MODEL_CHECKBOX: It, V_MODEL_DYNAMIC: vt, V_MODEL_RADIO: xt, V_MODEL_SELECT: bt, V_MODEL_TEXT: Ot, V_ON_WITH_KEYS: Rt, V_ON_WITH_MODIFIERS: At, V_SHOW: Pt, WITH_CTX: be, WITH_DIRECTIVES: pe, WITH_MEMO: Re, advancePositionWithClone: /* @__PURE__ */ __name(function(e4, t6, n3 = t6.length) {
      return advancePositionWithMutation({ offset: e4.offset, line: e4.line, column: e4.column }, t6, n3);
    }, "advancePositionWithClone"), advancePositionWithMutation, assert: /* @__PURE__ */ __name(function(e4, t6) {
      if (!e4) throw new Error(t6 || "unexpected compiler condition");
    }, "assert"), baseCompile, baseParse, buildDirectiveArgs, buildProps, buildSlots, checkCompatEnabled, compile: /* @__PURE__ */ __name(function(e4, t6 = {}) {
      return baseCompile(e4, n({}, kt, t6, { nodeTransforms: [ignoreSideEffectTags, ...Bt, ...t6.nodeTransforms || []], directiveTransforms: n({}, Ht, t6.directiveTransforms || {}), transformHoist: null }));
    }, "compile"), convertToBlock, createArrayExpression, createAssignmentExpression: /* @__PURE__ */ __name(function(e4, t6) {
      return { type: 24, left: e4, right: t6, loc: Me };
    }, "createAssignmentExpression"), createBlockStatement, createCacheExpression, createCallExpression, createCompilerError, createCompoundExpression, createConditionalExpression, createDOMCompilerError, createForLoopParams, createFunctionExpression, createIfStatement: /* @__PURE__ */ __name(function(e4, t6, n3) {
      return { type: 23, test: e4, consequent: t6, alternate: n3, loc: Me };
    }, "createIfStatement"), createInterpolation: /* @__PURE__ */ __name(function(e4, t6) {
      return { type: 5, loc: t6, content: isString(e4) ? createSimpleExpression(e4, false, t6) : e4 };
    }, "createInterpolation"), createObjectExpression, createObjectProperty, createReturnStatement: /* @__PURE__ */ __name(function(e4) {
      return { type: 26, returns: e4, loc: Me };
    }, "createReturnStatement"), createRoot, createSequenceExpression: /* @__PURE__ */ __name(function(e4) {
      return { type: 25, expressions: e4, loc: Me };
    }, "createSequenceExpression"), createSimpleExpression, createStructuralDirectiveTransform, createTemplateLiteral: /* @__PURE__ */ __name(function(e4) {
      return { type: 22, elements: e4, loc: Me };
    }, "createTemplateLiteral"), createTransformContext, createVNodeCall, errorMessages: Fe, extractIdentifiers, findDir, findProp, forAliasRE: Ye, generate, generateCodeFrame, getBaseTransformPreset, getConstantType, getMemoedVNodeCall, getVNodeBlockHelper, getVNodeHelper, hasDynamicKeyVBind, hasScopeRef: /* @__PURE__ */ __name(function hasScopeRef(e4, t6) {
      if (!e4 || 0 === Object.keys(t6).length) return false;
      switch (e4.type) {
        case 1:
          for (let n3 = 0; n3 < e4.props.length; n3++) {
            const r4 = e4.props[n3];
            if (7 === r4.type && (hasScopeRef(r4.arg, t6) || hasScopeRef(r4.exp, t6))) return true;
          }
          return e4.children.some((e5) => hasScopeRef(e5, t6));
        case 11:
          return !!hasScopeRef(e4.source, t6) || e4.children.some((e5) => hasScopeRef(e5, t6));
        case 9:
          return e4.branches.some((e5) => hasScopeRef(e5, t6));
        case 10:
          return !!hasScopeRef(e4.condition, t6) || e4.children.some((e5) => hasScopeRef(e5, t6));
        case 4:
          return !e4.isStatic && isSimpleIdentifier(e4.content) && !!t6[e4.content];
        case 8:
          return e4.children.some((e5) => isObject(e5) && hasScopeRef(e5, t6));
        case 5:
        case 12:
          return hasScopeRef(e4.content, t6);
        default:
          return false;
      }
    }, "hasScopeRef"), helperNameMap: Le, injectProp, isAllWhitespace, isCommentOrWhitespace, isCoreComponent, isFnExpression: Je, isFnExpressionBrowser, isFnExpressionNode: qe, isFunctionType: /* @__PURE__ */ __name((e4) => /Function(?:Expression|Declaration)$|Method$/.test(e4.type), "isFunctionType"), isInDestructureAssignment: /* @__PURE__ */ __name(function(e4, t6) {
      if (e4 && ("ObjectProperty" === e4.type || "ArrayPattern" === e4.type)) {
        let e5 = t6.length;
        for (; e5--; ) {
          const n3 = t6[e5];
          if ("AssignmentExpression" === n3.type) return true;
          if ("ObjectProperty" !== n3.type && !n3.type.endsWith("Pattern")) break;
        }
      }
      return false;
    }, "isInDestructureAssignment"), isInNewExpression: /* @__PURE__ */ __name(function(e4) {
      let t6 = e4.length;
      for (; t6--; ) {
        const n3 = e4[t6];
        if ("NewExpression" === n3.type) return true;
        if ("MemberExpression" !== n3.type) break;
      }
      return false;
    }, "isInNewExpression"), isMemberExpression: We, isMemberExpressionBrowser, isMemberExpressionNode: $e, isReferencedIdentifier: /* @__PURE__ */ __name(function(e4, t6, n3) {
      return false;
    }, "isReferencedIdentifier"), isSimpleIdentifier, isSlotOutlet, isStaticArgOf, isStaticExp, isStaticProperty, isStaticPropertyKey: /* @__PURE__ */ __name((e4, t6) => isStaticProperty(t6) && t6.key === e4, "isStaticPropertyKey"), isTemplateNode, isText: isText$1, isVPre, isVSlot, isWhitespaceText, locStub: Me, noopDirectiveTransform, parse: /* @__PURE__ */ __name(function(e4, t6 = {}) {
      return baseParse(e4, n({}, kt, t6));
    }, "parse"), parserOptions: kt, processExpression, processFor, processIf, processSlotOutlet, registerRuntimeHelpers, resolveComponentType, stringifyExpression: /* @__PURE__ */ __name(function stringifyExpression(e4) {
      return isString(e4) ? e4 : 4 === e4.type ? e4.content : e4.children.map(stringifyExpression).join("");
    }, "stringifyExpression"), toValidAssetId, trackSlotScopes, trackVForSlotScopes: /* @__PURE__ */ __name((e4, t6) => {
      let n3;
      if (isTemplateNode(e4) && e4.props.some(isVSlot) && (n3 = findDir(e4, "for"))) {
        const e5 = n3.forParseResult;
        if (e5) {
          finalizeForParseResult(e5);
          const { value: n4, key: r4, index: s4 } = e5, { addIdentifiers: o5, removeIdentifiers: i5 } = t6;
          return n4 && o5(n4), r4 && o5(r4), s4 && o5(s4), () => {
            n4 && i5(n4), r4 && i5(r4), s4 && i5(s4);
          };
        }
      }
    }, "trackVForSlotScopes"), transform, transformBind, transformElement, transformExpression: /* @__PURE__ */ __name((e4, t6) => {
      if (5 === e4.type) e4.content = processExpression(e4.content, t6);
      else if (1 === e4.type) {
        const n3 = findDir(e4, "memo");
        for (let r4 = 0; r4 < e4.props.length; r4++) {
          const s4 = e4.props[r4];
          if (7 === s4.type && "for" !== s4.name) {
            const e5 = s4.exp, r5 = s4.arg;
            !e5 || 4 !== e5.type || "on" === s4.name && r5 || n3 && r5 && 4 === r5.type && "key" === r5.content || (s4.exp = processExpression(e5, t6, "slot" === s4.name)), r5 && 4 === r5.type && !r5.isStatic && (s4.arg = processExpression(r5, t6));
          }
        }
      }
    }, "transformExpression"), transformModel: transformModel$1, transformOn: transformOn$1, transformStyle, transformVBindShorthand, traverseNode, unwrapTSNode: /* @__PURE__ */ __name(function unwrapTSNode(e4) {
      return Xe.includes(e4.type) ? unwrapTSNode(e4.expression) : e4;
    }, "unwrapTSNode"), validFirstIdentCharRE: Be, walkBlockDeclarations, walkFunctionParams: /* @__PURE__ */ __name(function(e4, t6) {
      for (const n3 of e4.params) for (const e5 of extractIdentifiers(n3)) t6(e5);
    }, "walkFunctionParams"), walkIdentifiers: /* @__PURE__ */ __name(function(e4, t6, n3 = false, r4 = [], s4 = /* @__PURE__ */ Object.create(null)) {
    }, "walkIdentifiers"), warnDeprecation: /* @__PURE__ */ __name(function(e4, t6, n3, ...r4) {
      if ("suppress-warning" === getCompatValue(e4, t6)) return;
      const { message: s4, link: o5 } = Ve[e4], i5 = `(deprecation ${e4}) ${"function" == typeof s4 ? s4(...r4) : s4}${o5 ? `
  Details: ${o5}` : ""}`, a4 = new SyntaxError(i5);
      a4.code = e4, n3 && (a4.loc = n3), t6.onWarn(a4);
    }, "warnDeprecation") }, Symbol.toStringTag, { value: "Module" }));
    !(function(e4) {
      Object.defineProperty(e4, "__esModule", { value: true });
      var t6 = jt, n3 = br, r4 = j;
      function _interopNamespaceDefault(e5) {
        var t7 = /* @__PURE__ */ Object.create(null);
        if (e5) for (var n4 in e5) t7[n4] = e5[n4];
        return t7.default = e5, Object.freeze(t7);
      }
      __name(_interopNamespaceDefault, "_interopNamespaceDefault");
      var s4 = _interopNamespaceDefault(n3);
      const o5 = /* @__PURE__ */ Object.create(null);
      function compileToFunction(e5, n4) {
        if (!r4.isString(e5)) {
          if (!e5.nodeType) return r4.NOOP;
          e5 = e5.innerHTML;
        }
        const i5 = r4.genCacheKey(e5, n4), a4 = o5[i5];
        if (a4) return a4;
        if ("#" === e5[0]) {
          const t7 = document.querySelector(e5);
          e5 = t7 ? t7.innerHTML : "";
        }
        const c4 = r4.extend({ hoistStatic: true, onError: void 0, onWarn: r4.NOOP }, n4);
        c4.isCustomElement || "undefined" == typeof customElements || (c4.isCustomElement = (e6) => !!customElements.get(e6));
        const { code: l3 } = t6.compile(e5, c4), p4 = new Function("Vue", l3)(s4);
        return p4._rc = true, o5[i5] = p4;
      }
      __name(compileToFunction, "compileToFunction");
      n3.registerRuntimeCompiler(compileToFunction), e4.compile = compileToFunction, Object.keys(n3).forEach(function(t7) {
        "default" === t7 || Object.prototype.hasOwnProperty.call(e4, t7) || (e4[t7] = n3[t7]);
      });
    })(G), W.exports = G;
    $t = W.exports;
    globalThis.$fetch || (globalThis.$fetch = Xr.create({ baseURL: baseURL() })), "global" in globalThis || (globalThis.global = globalThis);
    Wt = { componentName: "NuxtLink" };
    Gt = "nuxt-app";
    __name(getNuxtAppCtx, "getNuxtAppCtx");
    qt = "__nuxt_plugin";
    __name(registerPluginHooks, "registerPluginHooks");
    __name(defineNuxtPlugin, "defineNuxtPlugin");
    __name(callWithNuxt, "callWithNuxt");
    __name(useNuxtApp, "useNuxtApp");
    __name(useRuntimeConfig, "useRuntimeConfig");
    __name(defineGetter, "defineGetter");
    Jt = /* @__PURE__ */ Symbol("route");
    globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
    useRouter = /* @__PURE__ */ __name(() => useNuxtApp()?.$router, "useRouter");
    __name(defineNuxtRouteMiddleware, "defineNuxtRouteMiddleware");
    Kt = /[&"'<>]/g;
    Yt = { "&": "%26", '"': "%22", "'": "%27", "<": "%3C", ">": "%3E" };
    navigateTo = /* @__PURE__ */ __name((e4, t6) => {
      e4 ||= "/";
      const n3 = "string" == typeof e4 ? e4 : "path" in e4 ? resolveRouteObject(e4) : useRouter().resolve(e4).href, i5 = hasProtocol(n3, { acceptRelative: true }), c4 = t6?.external || i5;
      if (c4) {
        if (!t6?.external) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
        const { protocol: e5 } = new URL(n3, "http://localhost");
        if (e5 && isScriptProtocol(e5)) throw new Error(`Cannot navigate to a URL with '${e5}' protocol.`);
      }
      const l3 = (() => {
        try {
          if (useNuxtApp()._processingMiddleware) return true;
        } catch {
          return false;
        }
        return false;
      })(), p4 = useRouter(), d3 = useNuxtApp();
      if (d3.ssrContext) {
        const r4 = "string" == typeof e4 || c4 ? n3 : p4.resolve(e4).fullPath || "/", s4 = c4 ? n3 : joinURL(useRuntimeConfig().app.baseURL, r4), redirect = /* @__PURE__ */ __name(async function(e5) {
          await d3.callHook("app:redirected");
          const n4 = s4.replace(Kt, (e6) => Yt[e6]);
          const r5 = (function(e6, t7 = false) {
            const n5 = new URL(e6, "http://localhost");
            if (!t7) return n5.pathname + n5.search + n5.hash;
            if (e6.startsWith("//")) return n5.toString().replace(n5.protocol, "");
            return n5.toString();
          })(s4, i5);
          return d3.ssrContext["~renderResponse"] = { statusCode: sanitizeStatusCode(t6?.redirectCode || 302, 302), body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${n4}"></head></html>`, headers: { location: r5 } }, e5;
        }, "redirect");
        return !c4 && l3 ? (p4.afterEach((e5) => e5.fullPath === r4 ? redirect(false) : void 0), e4) : redirect(!l3 && void 0);
      }
      if (c4) return d3._scope.stop(), t6?.replace ? (void 0).replace(n3) : (void 0).href = n3, l3 ? !!d3.isHydrating && new Promise(() => {
      }) : Promise.resolve();
      const u3 = "string" == typeof e4 ? encodeRoutePath(e4) : e4;
      return t6?.replace ? p4.replace(u3) : p4.push(u3);
    }, "navigateTo");
    __name(resolveRouteObject, "resolveRouteObject");
    __name(encodeRoutePath, "encodeRoutePath");
    zt = "__nuxt_error";
    useError = /* @__PURE__ */ __name(() => $t.toRef(useNuxtApp().payload, "error"), "useError");
    showError = /* @__PURE__ */ __name((e4) => {
      const t6 = createError2(e4);
      try {
        const e5 = useError();
        0, e5.value ||= t6;
      } catch {
        throw t6;
      }
      return t6;
    }, "showError");
    createError2 = /* @__PURE__ */ __name((e4) => {
      "string" != typeof e4 && e4.statusText && (e4.message ??= e4.statusText);
      const t6 = createError(e4);
      return Object.defineProperty(t6, zt, { value: true, configurable: false, writable: false }), Object.defineProperty(t6, "status", { get: /* @__PURE__ */ __name(() => t6.statusCode, "get"), configurable: true }), Object.defineProperty(t6, "statusText", { get: /* @__PURE__ */ __name(() => t6.statusMessage, "get"), configurable: true }), t6;
    }, "createError");
    Qt = defineNuxtPlugin({ name: "nuxt:head", enforce: "pre", setup(e4) {
      const t6 = e4.ssrContext.head;
      if (e4.ssrContext.islandContext) {
        const n3 = (function(e5) {
          const t7 = e5.push;
          return e5.push = () => ({ dispose: /* @__PURE__ */ __name(() => {
          }, "dispose"), patch: /* @__PURE__ */ __name(() => {
          }, "patch"), _poll: /* @__PURE__ */ __name(() => {
          }, "_poll") }), () => {
            e5.push = t7;
          };
        })(t6);
        e4.hooks.hookOnce("app:created", n3);
      }
      e4.vueApp.use(t6);
    } });
    routeRulesMatcher = /* @__PURE__ */ __name((e4) => Rr({}, ...[].map((e5) => e5.data).reverse()), "routeRulesMatcher");
    Zt = [defineNuxtRouteMiddleware((e4) => {
    })];
    __name(getRouteFromPath, "getRouteFromPath");
    __name(definePayloadReducer, "definePayloadReducer");
    en = [["NuxtError", (e4) => {
      return !!(t6 = e4) && "object" == typeof t6 && zt in t6 && e4.toJSON();
      var t6;
    }], ["EmptyShallowRef", (e4) => $t.isRef(e4) && $t.isShallow(e4) && !e4.value && ("bigint" == typeof e4.value ? "0n" : JSON.stringify(e4.value) || "_")], ["EmptyRef", (e4) => $t.isRef(e4) && !e4.value && ("bigint" == typeof e4.value ? "0n" : JSON.stringify(e4.value) || "_")], ["ShallowRef", (e4) => $t.isRef(e4) && $t.isShallow(e4) && e4.value], ["ShallowReactive", (e4) => $t.isReactive(e4) && $t.isShallow(e4) && $t.toRaw(e4)], ["Ref", (e4) => $t.isRef(e4) && e4.value], ["Reactive", (e4) => $t.isReactive(e4) && $t.toRaw(e4)]];
    tn = [Qt, defineNuxtPlugin({ name: "nuxt:router", enforce: "pre", setup(e4) {
      const t6 = e4.ssrContext.url, n3 = [], r4 = { "navigate:before": [], "resolve:before": [], "navigate:after": [], error: [] }, registerHook = /* @__PURE__ */ __name((e5, t7) => (r4[e5].push(t7), () => r4[e5].splice(r4[e5].indexOf(t7), 1)), "registerHook");
      useRuntimeConfig().app.baseURL;
      const s4 = $t.reactive(getRouteFromPath(t6));
      async function handleNavigation(e5, t7) {
        try {
          const t8 = getRouteFromPath(e5);
          for (const e6 of r4["navigate:before"]) {
            const n4 = await e6(t8, s4);
            if (false === n4 || n4 instanceof Error) return;
            if ("string" == typeof n4 && n4.length) return await handleNavigation(n4, true);
          }
          for (const e6 of r4["resolve:before"]) await e6(t8, s4);
          Object.assign(s4, t8);
          for (const e6 of r4["navigate:after"]) await e6(t8, s4);
        } catch (e6) {
          for (const t8 of r4.error) await t8(e6);
        }
      }
      __name(handleNavigation, "handleNavigation");
      const o5 = { currentRoute: $t.computed(() => s4), isReady: /* @__PURE__ */ __name(() => Promise.resolve(), "isReady"), options: {}, install: /* @__PURE__ */ __name(() => Promise.resolve(), "install"), push: /* @__PURE__ */ __name((e5) => handleNavigation(e5), "push"), replace: /* @__PURE__ */ __name((e5) => handleNavigation(e5), "replace"), back: /* @__PURE__ */ __name(() => (void 0).history.go(-1), "back"), go: /* @__PURE__ */ __name((e5) => (void 0).history.go(e5), "go"), forward: /* @__PURE__ */ __name(() => (void 0).history.go(1), "forward"), beforeResolve: /* @__PURE__ */ __name((e5) => registerHook("resolve:before", e5), "beforeResolve"), beforeEach: /* @__PURE__ */ __name((e5) => registerHook("navigate:before", e5), "beforeEach"), afterEach: /* @__PURE__ */ __name((e5) => registerHook("navigate:after", e5), "afterEach"), onError: /* @__PURE__ */ __name((e5) => registerHook("error", e5), "onError"), resolve: getRouteFromPath, addRoute: /* @__PURE__ */ __name((e5, t7) => {
        n3.push(t7);
      }, "addRoute"), getRoutes: /* @__PURE__ */ __name(() => n3, "getRoutes"), hasRoute: /* @__PURE__ */ __name((e5) => n3.some((t7) => t7.name === e5), "hasRoute"), removeRoute: /* @__PURE__ */ __name((e5) => {
        const t7 = n3.findIndex((t8) => t8.name === e5);
        -1 !== t7 && n3.splice(t7, 1);
      }, "removeRoute") };
      e4.vueApp.component("RouterLink", $t.defineComponent({ functional: true, props: { to: { type: String, required: true }, custom: Boolean, replace: Boolean, activeClass: String, exactActiveClass: String, ariaCurrentValue: String }, setup: /* @__PURE__ */ __name((e5, { slots: t7 }) => {
        const navigate = /* @__PURE__ */ __name(() => handleNavigation(e5.to, e5.replace), "navigate");
        return () => {
          const n4 = o5.resolve(e5.to);
          return e5.custom ? t7.default?.({ href: e5.to, navigate, route: n4 }) : $t.h("a", { href: e5.to, onClick: /* @__PURE__ */ __name((e6) => (e6.preventDefault(), navigate()), "onClick") }, t7);
        };
      }, "setup") })), e4._route = s4, e4._middleware ||= { global: [], named: {} };
      const i5 = e4.payload.state._layout, a4 = e4.payload.state._layoutProps;
      return e4.hooks.hookOnce("app:created", async () => {
        o5.beforeEach(async (n4, r5) => {
          if (n4.meta = $t.reactive(n4.meta || {}), e4.isHydrating && i5 && !$t.isReadonly(n4.meta.layout) && (n4.meta.layout = i5, n4.meta.layoutProps = a4), e4._processingMiddleware = true, !e4.ssrContext?.islandContext) {
            const s5 = /* @__PURE__ */ new Set([...Zt, ...e4._middleware.global]), o6 = (function(e5) {
              const t7 = "string" == typeof e5 ? e5 : e5.path;
              try {
                return routeRulesMatcher(t7);
              } catch (e6) {
                return console.error("[nuxt] Error matching route rules.", e6), {};
              }
            })({ path: n4.path });
            if (o6.appMiddleware) for (const t7 in o6.appMiddleware) {
              const n5 = e4._middleware.named[t7];
              n5 && (o6.appMiddleware[t7] ? s5.add(n5) : s5.delete(n5));
            }
            for (const o7 of s5) {
              const s6 = await e4.runWithContext(() => o7(n4, r5));
              if (false === s6 || s6 instanceof Error) {
                const n5 = s6 || createError({ status: 404, statusText: `Page Not Found: ${t6}`, data: { path: t6 } });
                return delete e4._processingMiddleware, e4.runWithContext(() => showError(n5));
              }
              if (true !== s6 && (s6 || false === s6)) return s6;
            }
          }
        }), o5.afterEach(() => {
          delete e4._processingMiddleware;
        }), await o5.replace(t6), isEqual(s4.fullPath, t6) || await e4.runWithContext(() => navigateTo(s4.fullPath));
      }), { provide: { route: s4, router: o5 } };
    } }), defineNuxtPlugin({ name: "nuxt:revive-payload:server", setup() {
      for (const [e4, t6] of en) definePayloadReducer(e4, t6);
    } }), defineNuxtPlugin({ name: "nuxt:global-components" })];
    _export_sfc = /* @__PURE__ */ __name((e4, t6) => {
      const n3 = e4.__vccOpts || e4;
      for (const [e5, r4] of t6) n3[e5] = r4;
      return n3;
    }, "_export_sfc");
    nn = {};
    rn = nn.setup;
    nn.setup = (e4, t6) => {
      const n3 = $t.useSSRContext();
      return (n3.modules || (n3.modules = /* @__PURE__ */ new Set())).add("app.vue"), rn ? rn(e4, t6) : void 0;
    };
    sn = _export_sfc(nn, [["ssrRender", function(e4, t6, n3, r4) {
      t6(`<div${ssrRenderAttrs(r4)}> Nuxt module playground! </div>`);
    }]]);
    on = { __name: "nuxt-error-page", __ssrInlineRender: true, props: { error: Object }, setup(e4) {
      const t6 = e4.error, n3 = Number(t6.statusCode || 500), r4 = 404 === n3, s4 = t6.statusMessage ?? (r4 ? "Page Not Found" : "Internal Server Error"), o5 = t6.message || t6.toString(), i5 = $t.defineAsyncComponent(() => Promise.resolve().then(() => (init_error_404_KIwpzQYM(), error_404_KIwpzQYM_exports))), a4 = $t.defineAsyncComponent(() => Promise.resolve().then(() => (init_error_500_BFI_d6Ga(), error_500_BFI_d6Ga_exports))), c4 = r4 ? i5 : a4;
      return (e5, t7, r5, i6) => {
        t7(ssrRenderComponent($t.unref(c4), $t.mergeProps({ status: $t.unref(n3), statusText: $t.unref(s4), statusCode: $t.unref(n3), statusMessage: $t.unref(s4), description: $t.unref(o5), stack: $t.unref(void 0) }, i6), null, r5));
      };
    } };
    an = on.setup;
    on.setup = (e4, t6) => {
      const n3 = $t.useSSRContext();
      return (n3.modules || (n3.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"), an ? an(e4, t6) : void 0;
    };
    cn = { __name: "nuxt-root", __ssrInlineRender: true, setup(e4) {
      const IslandRenderer = /* @__PURE__ */ __name(() => null, "IslandRenderer"), t6 = useNuxtApp();
      t6.deferHydration(), t6.ssrContext.url;
      const n3 = false;
      $t.provide(Jt, $t.hasInjectionContext() ? $t.inject(Jt, useNuxtApp()._route) : useNuxtApp()._route), t6.hooks.callHookWith((e5) => e5.map((e6) => e6()), "vue:setup", []);
      const r4 = useError(), s4 = r4.value && !t6.ssrContext.error;
      $t.onErrorCaptured((e5, n4, r5) => {
        t6.hooks.callHook("vue:error", e5, n4, r5)?.catch((e6) => console.error("[nuxt] Error in `vue:error` hook", e6));
        {
          const s5 = t6.runWithContext(() => showError(e5));
          return $t.onServerPrefetch(() => s5), (function(e6, n5, r6) {
            const s6 = t6.vueApp.config.errorHandler;
            if (s6 && !s6.__nuxt_default) try {
              s6(e6, n5, r6);
            } catch (e7) {
              console.error("[nuxt] Error in `app.config.errorHandler`", e7);
            }
          })(e5, n4, r5), false;
        }
      });
      const o5 = t6.ssrContext.islandContext;
      return (e5, t7, i5, a4) => {
        ssrRenderSuspense(t7, { default: /* @__PURE__ */ __name(() => {
          $t.unref(s4) ? t7("<div></div>") : $t.unref(r4) ? t7(ssrRenderComponent($t.unref(on), { error: $t.unref(r4) }, null, i5)) : $t.unref(o5) ? t7(ssrRenderComponent($t.unref(IslandRenderer), { context: $t.unref(o5) }, null, i5)) : $t.unref(n3) ? renderVNode(t7, $t.createVNode($t.resolveDynamicComponent($t.unref(n3)), null, null), i5) : t7(ssrRenderComponent($t.unref(sn), null, null, i5));
        }, "default") });
      };
    } };
    ln = cn.setup;
    cn.setup = (e4, t6) => {
      const n3 = $t.useSSRContext();
      return (n3.modules || (n3.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/components/nuxt-root.vue"), ln ? ln(e4, t6) : void 0;
    }, pn = /* @__PURE__ */ __name(async function(e4) {
      const t6 = $t.createApp(cn), n3 = (function(e5) {
        let t7 = 0;
        const n4 = { _id: e5.id || Gt || "nuxt-app", _scope: $t.effectScope(), provide: void 0, versions: { get nuxt() {
          return "4.4.6";
        }, get vue() {
          return n4.vueApp.version;
        } }, payload: $t.shallowReactive({ ...e5.ssrContext?.payload || {}, data: $t.shallowReactive({}), state: $t.reactive({}), once: /* @__PURE__ */ new Set(), _errors: $t.shallowReactive({}) }), static: { data: {} }, runWithContext: /* @__PURE__ */ __name((e6) => n4._scope.active && !$t.getCurrentScope() ? n4._scope.run(() => callWithNuxt(n4, e6)) : callWithNuxt(n4, e6), "runWithContext"), isHydrating: false, deferHydration() {
          if (!n4.isHydrating) return () => {
          };
          t7++;
          let e6 = false;
          return () => {
            if (!e6) return e6 = true, t7--, 0 === t7 ? (n4.isHydrating = false, n4.callHook("app:suspense:resolve")) : void 0;
          };
        }, _asyncDataPromises: {}, _asyncData: $t.shallowReactive({}), _state: $t.shallowReactive({}), _payloadRevivers: {}, ...e5 };
        n4.payload.serverRendered = true, n4.ssrContext && (n4.payload.path = n4.ssrContext.url, n4.ssrContext.nuxt = n4, n4.ssrContext.payload = n4.payload, n4.ssrContext.config = { public: n4.ssrContext.runtimeConfig.public, app: n4.ssrContext.runtimeConfig.app }), n4.hooks = createHooks(), n4.hook = n4.hooks.hook;
        {
          const contextCaller = /* @__PURE__ */ __name(async function(e6, t8) {
            for (const r5 of e6) await n4.runWithContext(() => r5(...t8));
          }, "contextCaller");
          n4.hooks.callHook = (e6, ...t8) => n4.hooks.callHookWith(contextCaller, e6, t8);
        }
        n4.callHook = n4.hooks.callHook, n4.provide = (e6, t8) => {
          const r5 = "$" + e6;
          defineGetter(n4, r5, t8), defineGetter(n4.vueApp.config.globalProperties, r5, t8);
        }, defineGetter(n4.vueApp, "$nuxt", n4), defineGetter(n4.vueApp.config.globalProperties, "$nuxt", n4);
        const r4 = e5.ssrContext.runtimeConfig;
        return n4.provide("config", r4), n4;
      })({ vueApp: t6, ssrContext: e4 });
      try {
        await (async function(e5, t7) {
          const n4 = /* @__PURE__ */ new Set(), r4 = [], s4 = [];
          let o5, i5 = 0;
          async function executePlugin(a4) {
            const c4 = a4.dependsOn?.filter((e6) => t7.some((t8) => t8._name === e6) && !n4.has(e6)) ?? [];
            if (c4.length > 0) r4.push([new Set(c4), a4]);
            else {
              const t8 = (async function(e6, t9) {
                if ("function" == typeof t9) {
                  const { provide: n5 } = await e6.runWithContext(() => t9(e6)) || {};
                  if (n5 && "object" == typeof n5) for (const t10 in n5) e6.provide(t10, n5[t10]);
                }
              })(e5, a4).then(async () => {
                a4._name && (n4.add(a4._name), await Promise.all(r4.map(async ([e6, t9]) => {
                  e6.has(a4._name) && (e6.delete(a4._name), 0 === e6.size && (i5++, await executePlugin(t9)));
                })));
              }).catch((t9) => {
                if (!a4.parallel && !e5.payload.error) throw t9;
                o5 ||= t9;
              });
              a4.parallel ? s4.push(t8) : await t8;
            }
          }
          __name(executePlugin, "executePlugin");
          for (const n5 of t7) e5.ssrContext?.islandContext && false === n5.env?.islands || registerPluginHooks(e5, n5);
          for (const n5 of t7) e5.ssrContext?.islandContext && false === n5.env?.islands || await executePlugin(n5);
          if (await Promise.all(s4), i5) for (let e6 = 0; e6 < i5; e6++) await Promise.all(s4);
          if (o5) throw e5.payload.error || o5;
        })(n3, tn), await n3.hooks.callHook("app:created", t6);
      } catch (e5) {
        await n3.hooks.callHook("app:error", e5), n3.payload.error ||= createError2(e5);
      }
      if (e4 && (e4["~renderResponse"] || e4._renderResponse)) throw new Error("skipping render");
      return t6;
    }, "pn");
    dn = Object.freeze(Object.defineProperty({ __proto__: null, _: _export_sfc, a: Wt, b: useRouter, c: useRuntimeConfig, default: /* @__PURE__ */ __name((e4) => pn(e4), "default"), e: encodeRoutePath, n: navigateTo, r: resolveRouteObject, u: useNuxtApp }, Symbol.toStringTag, { value: "Module" }));
  }
});

// .output/server/chunks/virtual/_virtual_spa-template.mjs
var virtual_spa_template_exports = {};
__export(virtual_spa_template_exports, {
  template: () => o3
});
var o3;
var init_virtual_spa_template = __esm({
  ".output/server/chunks/virtual/_virtual_spa-template.mjs"() {
    "use strict";
    init_modules_watch_stub();
    o3 = "";
  }
});

// .output/server/chunks/build/error-500-styles.CJhCx6hX.mjs
var error_500_styles_CJhCx6hX_exports = {};
__export(error_500_styles_CJhCx6hX_exports, {
  default: () => t3
});
var t3;
var init_error_500_styles_CJhCx6hX = __esm({
  ".output/server/chunks/build/error-500-styles.CJhCx6hX.mjs"() {
    "use strict";
    init_modules_watch_stub();
    t3 = [".grid[data-v-f7199970]{display:grid}.mb-2[data-v-f7199970]{margin-bottom:.5rem}.mb-4[data-v-f7199970]{margin-bottom:1rem}.max-w-520px[data-v-f7199970]{max-width:520px}.min-h-screen[data-v-f7199970]{min-height:100vh}.place-content-center[data-v-f7199970]{place-content:center}.overflow-hidden[data-v-f7199970]{overflow:hidden}.bg-white[data-v-f7199970]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2[data-v-f7199970]{padding-left:.5rem;padding-right:.5rem}.text-center[data-v-f7199970]{text-align:center}.text-\\[80px\\][data-v-f7199970]{font-size:80px}.text-2xl[data-v-f7199970]{font-size:1.5rem;line-height:2rem}.text-\\[\\#020420\\][data-v-f7199970]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\][data-v-f7199970]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.font-semibold[data-v-f7199970]{font-weight:600}.leading-none[data-v-f7199970]{line-height:1}.tracking-wide[data-v-f7199970]{letter-spacing:.025em}.font-sans[data-v-f7199970]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums[data-v-f7199970]{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased[data-v-f7199970]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\][data-v-f7199970]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white[data-v-f7199970]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:text-\\[110px\\][data-v-f7199970]{font-size:110px}.sm\\:text-3xl[data-v-f7199970]{font-size:1.875rem;line-height:2.25rem}}"];
  }
});

// .output/server/chunks/build/error-404-styles.qC22uayO.mjs
var error_404_styles_qC22uayO_exports = {};
__export(error_404_styles_qC22uayO_exports, {
  default: () => t4
});
var t4;
var init_error_404_styles_qC22uayO = __esm({
  ".output/server/chunks/build/error-404-styles.qC22uayO.mjs"() {
    "use strict";
    init_modules_watch_stub();
    t4 = [".grid[data-v-356f46f8]{display:grid}.mb-2[data-v-356f46f8]{margin-bottom:.5rem}.mb-4[data-v-356f46f8]{margin-bottom:1rem}.max-w-520px[data-v-356f46f8]{max-width:520px}.min-h-screen[data-v-356f46f8]{min-height:100vh}.w-full[data-v-356f46f8]{width:100%}.flex[data-v-356f46f8]{display:flex}.place-content-center[data-v-356f46f8]{place-content:center}.items-center[data-v-356f46f8]{align-items:center}.justify-center[data-v-356f46f8]{justify-content:center}.overflow-hidden[data-v-356f46f8]{overflow:hidden}.bg-white[data-v-356f46f8]{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2[data-v-356f46f8]{padding-left:.5rem;padding-right:.5rem}.text-center[data-v-356f46f8]{text-align:center}.text-\\[80px\\][data-v-356f46f8]{font-size:80px}.text-2xl[data-v-356f46f8]{font-size:1.5rem;line-height:2rem}.text-sm[data-v-356f46f8]{font-size:.875rem;line-height:1.25rem}.text-\\[\\#020420\\][data-v-356f46f8]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\][data-v-356f46f8]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.hover\\:text-\\[\\#00DC82\\][data-v-356f46f8]:hover{--un-text-opacity:1;color:rgb(0 220 130/var(--un-text-opacity))}.font-medium[data-v-356f46f8]{font-weight:500}.font-semibold[data-v-356f46f8]{font-weight:600}.leading-none[data-v-356f46f8]{line-height:1}.tracking-wide[data-v-356f46f8]{letter-spacing:.025em}.font-sans[data-v-356f46f8]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums[data-v-356f46f8]{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.underline[data-v-356f46f8]{text-decoration-line:underline}.underline-offset-3[data-v-356f46f8]{text-underline-offset:3px}.antialiased[data-v-356f46f8]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\][data-v-356f46f8]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white[data-v-356f46f8]{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:text-\\[110px\\][data-v-356f46f8]{font-size:110px}.sm\\:text-3xl[data-v-356f46f8]{font-size:1.875rem;line-height:2.25rem}}"];
  }
});

// .output/server/chunks/build/styles.mjs
var styles_exports = {};
__export(styles_exports, {
  default: () => e2
});
var interopDefault, e2;
var init_styles = __esm({
  ".output/server/chunks/build/styles.mjs"() {
    "use strict";
    init_modules_watch_stub();
    interopDefault = /* @__PURE__ */ __name((e4) => e4.default || e4 || [], "interopDefault");
    e2 = { "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/components/error-500.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_error_500_styles_CJhCx6hX(), error_500_styles_CJhCx6hX_exports)).then(interopDefault), "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/components/error-500.vue"), "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/components/error-404.vue": /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_error_404_styles_qC22uayO(), error_404_styles_qC22uayO_exports)).then(interopDefault), "../node_modules/.pnpm/nuxt@4.4.6_@babel+plugin-sy_bbf6bcbbe59c0991c0ca20d8ab529965/node_modules/nuxt/dist/app/components/error-404.vue") };
  }
});

// .output/server/chunks/routes/renderer.mjs
var renderer_exports = {};
__export(renderer_exports, {
  a: () => ao,
  b: () => baseURL,
  c: () => createHooks,
  d: () => br,
  e: () => ssrRenderAttrs,
  f: () => ssrRenderComponent,
  g: () => ssrRenderSuspense,
  h: () => kr,
  r: () => renderVNode,
  s: () => ssrInterpolate,
  u: () => useHead
});
function getModuleDependencies(e4, t6) {
  if (t6._dependencies[e4]) return t6._dependencies[e4];
  const n3 = t6._dependencies[e4] = { scripts: {}, styles: {}, preload: {}, prefetch: {} };
  if (!t6.manifest) return n3;
  const r4 = t6.manifest[e4];
  if (!r4) return n3;
  r4.file && (n3.preload[e4] = r4, (r4.isEntry || r4.sideEffects) && (n3.scripts[e4] = r4));
  for (const e5 of r4.css || []) n3.styles[e5] = n3.preload[e5] = n3.prefetch[e5] = t6.manifest[e5];
  for (const e5 of r4.assets || []) n3.preload[e5] = n3.prefetch[e5] = t6.manifest[e5];
  for (const e5 of r4.imports || []) {
    const r5 = getModuleDependencies(e5, t6);
    for (const e6 in r5.styles) n3.styles[e6] = r5.styles[e6];
    for (const e6 in r5.preload) n3.preload[e6] = r5.preload[e6];
    for (const e6 in r5.prefetch) n3.prefetch[e6] = r5.prefetch[e6];
  }
  const o5 = {};
  for (const e5 in n3.preload) {
    const t7 = n3.preload[e5];
    t7.preload && (o5[e5] = t7);
  }
  return n3.preload = o5, n3;
}
function getRequestDependencies(e4, t6) {
  if (e4._requestDependencies) return e4._requestDependencies;
  const n3 = (function(e5, t7) {
    let n4 = "";
    const r4 = [...e5].sort();
    for (let e6 = 0; e6 < r4.length; e6++) e6 > 0 && (n4 += ","), n4 += r4[e6];
    if (t7._dependencySets[n4]) return t7._dependencySets[n4];
    const o5 = { scripts: {}, styles: {}, preload: {}, prefetch: {} };
    for (const n5 of e5) {
      const e6 = getModuleDependencies(n5, t7);
      for (const t8 in e6.scripts) o5.scripts[t8] = e6.scripts[t8];
      for (const t8 in e6.styles) o5.styles[t8] = e6.styles[t8];
      for (const t8 in e6.preload) o5.preload[t8] = e6.preload[t8];
      for (const t8 in e6.prefetch) o5.prefetch[t8] = e6.prefetch[t8];
      for (const e7 of t7.manifest?.[n5]?.dynamicImports || []) {
        const n6 = getModuleDependencies(e7, t7);
        for (const e8 in n6.scripts) o5.prefetch[e8] = n6.scripts[e8];
        for (const e8 in n6.styles) o5.prefetch[e8] = n6.styles[e8];
        for (const e8 in n6.preload) o5.prefetch[e8] = n6.preload[e8];
      }
    }
    const s4 = {};
    for (const e6 in o5.prefetch) {
      const t8 = o5.prefetch[e6];
      t8.prefetch && (s4[e6] = t8);
    }
    o5.prefetch = s4;
    for (const e6 in o5.preload) delete o5.prefetch[e6];
    for (const e6 in o5.styles) delete o5.preload[e6], delete o5.prefetch[e6];
    return t7._dependencySets[n4] = o5, o5;
  })(new Set(Array.from([...t6._entrypoints, ...e4.modules || e4._registeredComponents || []])), t6);
  return e4._requestDependencies = n3, n3;
}
function renderStyles(e4, t6) {
  const { styles: n3 } = getRequestDependencies(e4, t6);
  let r4 = "";
  for (const e5 in n3) {
    const o5 = n3[e5];
    r4 += `<link rel="stylesheet" href="${t6.buildAssetsURL(o5.file)}" crossorigin>`;
  }
  return r4;
}
function renderResourceHints(e4, t6) {
  const { preload: n3, prefetch: r4 } = getRequestDependencies(e4, t6);
  let o5 = "";
  for (const e5 in n3) {
    const r5 = n3[e5], s4 = t6.buildAssetsURL(r5.file), i5 = r5.module ? "modulepreload" : "preload", a4 = "style" === r5.resourceType || "font" === r5.resourceType || "script" === r5.resourceType || r5.module ? " crossorigin" : "";
    r5.resourceType && r5.mimeType ? o5 += `<link rel="${i5}" as="${r5.resourceType}" type="${r5.mimeType}"${a4} href="${s4}">` : r5.resourceType ? o5 += `<link rel="${i5}" as="${r5.resourceType}"${a4} href="${s4}">` : o5 += `<link rel="${i5}"${a4} href="${s4}">`;
  }
  for (const e5 in r4) {
    const n4 = r4[e5], s4 = t6.buildAssetsURL(n4.file), i5 = "style" === n4.resourceType || "font" === n4.resourceType || "script" === n4.resourceType || n4.module ? " crossorigin" : "";
    n4.resourceType && n4.mimeType ? o5 += `<link rel="prefetch" as="${n4.resourceType}" type="${n4.mimeType}"${i5} href="${s4}">` : n4.resourceType ? o5 += `<link rel="prefetch" as="${n4.resourceType}"${i5} href="${s4}">` : o5 += `<link rel="prefetch"${i5} href="${s4}">`;
  }
  return o5;
}
function renderResourceHeaders(e4, t6) {
  const { preload: n3, prefetch: r4 } = getRequestDependencies(e4, t6), o5 = [];
  for (const e5 in n3) {
    const r5 = n3[e5];
    let s4 = `<${t6.buildAssetsURL(r5.file)}>; rel="${r5.module ? "modulepreload" : "preload"}"`;
    r5.resourceType && (s4 += `; as="${r5.resourceType}"`), r5.mimeType && (s4 += `; type="${r5.mimeType}"`), ("style" === r5.resourceType || "font" === r5.resourceType || "script" === r5.resourceType || r5.module) && (s4 += "; crossorigin"), o5.push(s4);
  }
  for (const e5 in r4) {
    const n4 = r4[e5];
    let s4 = `<${t6.buildAssetsURL(n4.file)}>; rel="prefetch"`;
    n4.resourceType && (s4 += `; as="${n4.resourceType}"`), n4.mimeType && (s4 += `; type="${n4.mimeType}"`), ("style" === n4.resourceType || "font" === n4.resourceType || "script" === n4.resourceType || n4.module) && (s4 += "; crossorigin"), o5.push(s4);
  }
  return { link: o5.join(", ") };
}
function getPreloadLinks(e4, t6) {
  const { preload: n3 } = getRequestDependencies(e4, t6), r4 = [];
  for (const e5 in n3) {
    const o5 = n3[e5];
    r4.push({ rel: o5.module ? "modulepreload" : "preload", as: o5.resourceType, type: o5.mimeType ?? null, crossorigin: "style" === o5.resourceType || "font" === o5.resourceType || "script" === o5.resourceType || o5.module ? "" : null, href: t6.buildAssetsURL(o5.file) });
  }
  return r4;
}
function getPrefetchLinks(e4, t6) {
  const { prefetch: n3 } = getRequestDependencies(e4, t6), r4 = [];
  for (const e5 in n3) {
    const o5 = n3[e5];
    r4.push({ rel: "prefetch", as: o5.resourceType, type: o5.mimeType ?? null, crossorigin: "style" === o5.resourceType || "font" === o5.resourceType || "script" === o5.resourceType || o5.module ? "" : null, href: t6.buildAssetsURL(o5.file) });
  }
  return r4;
}
function renderScripts(e4, t6) {
  const { scripts: n3 } = getRequestDependencies(e4, t6);
  let r4 = "";
  for (const e5 in n3) {
    const o5 = n3[e5];
    o5.module ? r4 += `<script type="module" src="${t6.buildAssetsURL(o5.file)}" crossorigin><\/script>` : r4 += `<script src="${t6.buildAssetsURL(o5.file)}" defer crossorigin><\/script>`;
  }
  return r4;
}
function createRenderer$1(t6, n3) {
  const r4 = (function({ manifest: t7, precomputed: n4, buildAssetsURL: r5 }) {
    if (!t7 && !n4) throw new Error("Either manifest or precomputed data must be provided");
    const o5 = { buildAssetsURL: r5 || withLeadingSlash, manifest: t7, precomputed: n4, updateManifest, _dependencies: {}, _dependencySets: {}, _entrypoints: [] };
    function updateManifest(e4) {
      const t8 = Object.entries(e4);
      o5.manifest = e4, o5._dependencies = {}, o5._dependencySets = {}, o5._entrypoints = t8.filter((e5) => e5[1].isEntry).map(([e5]) => e5);
    }
    __name(updateManifest, "updateManifest");
    return n4 ? (o5._dependencies = n4.dependencies, o5._entrypoints = n4.entrypoints) : t7 && updateManifest(t7), o5;
  })(n3);
  return { rendererContext: r4, async renderToString(e4) {
    e4._registeredComponents = e4._registeredComponents || /* @__PURE__ */ new Set();
    const o5 = await Promise.resolve(t6).then((e5) => "default" in e5 ? e5.default : e5), s4 = await o5(e4), wrap = /* @__PURE__ */ __name((t7) => () => t7(e4, r4), "wrap");
    return { html: await n3.renderToString(s4, e4), renderResourceHeaders: wrap(renderResourceHeaders), renderResourceHints: wrap(renderResourceHints), renderStyles: wrap(renderStyles), renderScripts: wrap(renderScripts) };
  } };
}
function flatHooks(e4, t6 = {}, n3) {
  for (const r4 in e4) {
    const o5 = e4[r4], s4 = n3 ? `${n3}:${r4}` : r4;
    "object" == typeof o5 && null !== o5 ? flatHooks(o5, t6, s4) : "function" == typeof o5 && (t6[s4] = o5);
  }
  return t6;
}
function callHooks(e4, t6, n3, r4) {
  for (let o5 = n3; o5 < e4.length; o5 += 1) try {
    const n4 = r4 ? r4.run(() => e4[o5](...t6)) : e4[o5](...t6);
    if (n4 && "function" == typeof n4.then) return Promise.resolve(n4).then(() => callHooks(e4, t6, o5 + 1, r4));
  } catch (e5) {
    return Promise.reject(e5);
  }
}
function serialTaskCaller(e4, t6, n3) {
  if (e4.length > 0) return callHooks(e4, t6, 0, he2(n3));
}
function parallelTaskCaller(e4, t6, n3) {
  if (e4.length > 0) {
    const r4 = he2(n3);
    return Promise.all(e4.map((e5) => r4.run(() => e5(...t6))));
  }
}
function callEachWith(e4, t6) {
  for (const n3 of [...e4]) n3(t6);
}
function createHooks() {
  return new ge2();
}
function dedupeKey(e4) {
  const { props: t6, tag: n3 } = e4;
  if (ke2.has(n3)) return n3;
  if ("link" === n3 && "canonical" === t6.rel) return "canonical";
  if ("link" === n3 && "alternate" === t6.rel) {
    if (t6.hreflang) return `alternate:${t6.hreflang}`;
    if (t6.type) return `alternate:${t6.type}:${t6.href || ""}`;
  }
  if (t6.charset) return "charset";
  if ("meta" === e4.tag) {
    for (const r4 of Re2) if (void 0 !== t6[r4]) {
      const o5 = t6[r4], s4 = o5 && "string" == typeof o5 && o5.includes(":"), i5 = o5 && Te2.has(o5);
      return `${n3}:${o5}${!(s4 || i5) && e4.key ? `:key:${e4.key}` : ""}`;
    }
  }
  if (e4.key) return `${n3}:key:${e4.key}`;
  if (t6.id) return `${n3}:id:${t6.id}`;
  if ("link" === n3 && "alternate" === t6.rel) return `alternate:${t6.href || ""}`;
  if (ve2.has(n3)) {
    const t7 = e4.textContent || e4.innerHTML;
    if (t7) return `${n3}:content:${t7}`;
  }
}
function hashTag(e4) {
  const t6 = e4._h || e4._d;
  if (t6) return t6;
  const n3 = e4.textContent || e4.innerHTML;
  return n3 || `${e4.tag}:${Object.entries(e4.props).map(([e5, t7]) => `${e5}:${String(t7)}`).join(",")}`;
}
function walkResolver(e4, t6, n3) {
  "function" === typeof e4 && (n3 && ("titleTemplate" === n3 || "o" === n3[0] && "n" === n3[1]) || (e4 = e4()));
  const r4 = t6 ? t6(n3, e4) : e4;
  if (Array.isArray(r4)) return r4.map((e5) => walkResolver(e5, t6));
  if (r4?.constructor === Object) {
    const e5 = {};
    for (const n4 of Object.keys(r4)) e5[n4] = walkResolver(r4[n4], t6, n4);
    return e5;
  }
  return r4;
}
function normalizeProps2(e4, t6) {
  if (e4.props = e4.props || {}, !t6) return e4;
  if ("templateParams" === e4.tag) return e4.props = t6, e4;
  const n3 = _e2.has(e4.tag) || "htmlAttrs" === e4.tag || "bodyAttrs" === e4.tag;
  return Object.entries(t6).forEach(([r4, o5]) => {
    if ("__proto__" === r4 || "constructor" === r4 || "prototype" === r4) return;
    if (null === o5) return void (e4.props[r4] = null);
    if ("class" === r4 || "style" === r4) return void (e4.props[r4] = (function(e5, t7) {
      const n4 = "style" === e5 ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set();
      function processValue(t8) {
        if (null == t8 || void 0 === t8) return;
        const r5 = String(t8).trim();
        if (r5) if ("style" === e5) {
          const [e6, ...t9] = r5.split(":").map((e7) => e7 ? e7.trim() : "");
          e6 && t9.length && n4.set(e6, t9.join(":"));
        } else r5.split(" ").filter(Boolean).forEach((e6) => n4.add(e6));
      }
      __name(processValue, "processValue");
      return "string" == typeof t7 ? "style" === e5 ? t7.split(";").forEach(processValue) : processValue(t7) : Array.isArray(t7) ? t7.forEach((e6) => processValue(e6)) : t7 && "object" == typeof t7 && Object.entries(t7).forEach(([t8, r5]) => {
        r5 && "false" !== r5 && ("style" === e5 ? n4.set(String(t8).trim(), String(r5)) : processValue(t8));
      }), n4;
    })(r4, o5));
    if (Ce2.has(r4)) {
      if ("textContent" !== r4 && "innerHTML" !== r4 || "object" != typeof o5) e4[r4] = o5;
      else {
        let n4 = t6.type;
        if (t6.type || (n4 = "application/json"), !n4?.endsWith("json") && "speculationrules" !== n4) return;
        t6.type = n4, e4.props.type = n4, e4[r4] = JSON.stringify(o5);
      }
      return;
    }
    const s4 = r4.startsWith("data-"), i5 = n3 && !s4 ? r4.toLowerCase() : r4, a4 = String(o5), l3 = "meta" === e4.tag && "content" === i5;
    "true" === a4 || "" === a4 ? e4.props[i5] = !s4 && !l3 || a4 : !o5 && s4 && "false" === a4 ? e4.props[i5] = "false" : void 0 !== o5 && (e4.props[i5] = o5);
  }), e4;
}
function normalizeTag(e4, t6) {
  const n3 = normalizeProps2({ tag: e4, props: {} }, "object" == typeof t6 && "function" != typeof t6 ? t6 : { ["script" === e4 || "noscript" === e4 || "style" === e4 ? "innerHTML" : "textContent"]: t6 });
  return n3.key && ye2.has(n3.tag) && (n3.props["data-hid"] = n3._h = n3.key), "script" === n3.tag && "object" == typeof n3.innerHTML && (n3.innerHTML = JSON.stringify(n3.innerHTML), n3.props.type = n3.props.type || "application/json"), Array.isArray(n3.props.content) ? n3.props.content.map((e5) => ({ ...n3, props: { ...n3.props, content: e5 } })) : n3;
}
function normalizeEntryToTags(e4, t6) {
  if (!e4) return [];
  "function" == typeof e4 && (e4 = e4());
  const resolvers = /* @__PURE__ */ __name((e5, n4) => {
    for (let r4 = 0; r4 < t6.length; r4++) n4 = t6[r4](e5, n4);
    return n4;
  }, "resolvers");
  e4 = resolvers(void 0, e4);
  const n3 = [];
  return e4 = walkResolver(e4, resolvers), Object.entries(e4 || {}).forEach(([e5, t7]) => {
    if (void 0 !== t7) for (const r4 of Array.isArray(t7) ? t7 : [t7]) n3.push(normalizeTag(e5, r4));
  }), n3.flat();
}
function tagWeight(e4, t6) {
  if ("number" == typeof t6.tagPriority) return t6.tagPriority;
  let n3 = 100;
  const r4 = xe2[t6.tagPriority] || 0, o5 = e4.resolvedOptions.disableCapoSorting ? { link: {}, script: {}, style: {} } : Ee2;
  if (t6.tag in Ae2) n3 = Ae2[t6.tag];
  else if ("meta" === t6.tag) {
    const e5 = "content-security-policy" === t6.props["http-equiv"] ? "content-security-policy" : t6.props.charset ? "charset" : "viewport" === t6.props.name ? "viewport" : null;
    e5 && (n3 = Ee2.meta[e5]);
  } else if ("link" === t6.tag && t6.props.rel) n3 = o5.link[t6.props.rel];
  else if ("script" === t6.tag) {
    const e5 = String(t6.props.type);
    isTruthy(t6.props.async) ? n3 = o5.script.async : t6.props.src && !isTruthy(t6.props.defer) && !isTruthy(t6.props.async) && "module" !== e5 && !e5.endsWith("json") || t6.innerHTML && !e5.endsWith("json") ? n3 = o5.script.sync : (isTruthy(t6.props.defer) && t6.props.src && !isTruthy(t6.props.async) || "module" === e5) && (n3 = o5.script.defer);
  } else "style" === t6.tag && (n3 = t6.innerHTML && $e2.test(t6.innerHTML) ? o5.style.imported : o5.style.sync);
  return (n3 || 100) + r4;
}
function registerPlugin(e4, t6) {
  const n3 = "function" == typeof t6 ? t6(e4) : t6, r4 = n3.key || String(e4.plugins.size + 1);
  e4.plugins.get(r4) || (e4.plugins.set(r4, n3), e4.hooks.addHooks(n3.hooks || {}));
}
function createUnhead(e4 = {}) {
  const t6 = createHooks();
  t6.addHooks(e4.hooks || {});
  const n3 = !e4.document, r4 = /* @__PURE__ */ new Map(), o5 = /* @__PURE__ */ new Map(), s4 = /* @__PURE__ */ new Set(), i5 = { _entryCount: 1, plugins: o5, dirty: false, resolvedOptions: e4, hooks: t6, ssr: n3, entries: r4, headEntries: /* @__PURE__ */ __name(() => [...r4.values()], "headEntries"), use: /* @__PURE__ */ __name((e5) => registerPlugin(i5, e5), "use"), push(e5, o6) {
    const a4 = { ...o6 || {} };
    delete a4.head;
    const l3 = a4._index ?? i5._entryCount++, c4 = { _i: l3, input: e5, options: a4 }, u3 = { _poll(e6 = false) {
      i5.dirty = true, !e6 && s4.add(l3), t6.callHook("entries:updated", i5);
    }, dispose() {
      r4.delete(l3) && i5.invalidate();
    }, patch(e6) {
      (!a4.mode || "server" === a4.mode && n3 || "client" === a4.mode && !n3) && (c4.input = e6, r4.set(l3, c4), u3._poll());
    } };
    return u3.patch(e5), u3;
  }, async resolveTags() {
    const n4 = { tagMap: /* @__PURE__ */ new Map(), tags: [], entries: [...i5.entries.values()] };
    for (await t6.callHook("entries:resolve", n4); s4.size; ) {
      const n5 = s4.values().next().value;
      s4.delete(n5);
      const o7 = r4.get(n5);
      if (o7) {
        const n6 = { tags: normalizeEntryToTags(o7.input, e4.propResolvers || []).map((e5) => Object.assign(e5, o7.options)), entry: o7 };
        await t6.callHook("entries:normalize", n6), o7._tags = n6.tags.map((e5, t7) => (e5._w = tagWeight(i5, e5), e5._p = (o7._i << 10) + t7, e5._d = dedupeKey(e5), e5._d || (e5._h = hashTag(e5)), e5));
      }
    }
    let o6 = false;
    n4.entries.flatMap((e5) => (e5._tags || []).map((e6) => ({ ...e6, props: { ...e6.props } }))).sort(sortTags).reduce((e5, t7) => {
      const n5 = t7._d || t7._h;
      if (!e5.has(n5)) return e5.set(n5, t7);
      const r5 = e5.get(n5);
      if ("merge" === (t7?.tagDuplicateStrategy || (Se2.has(t7.tag) ? "merge" : null) || (t7.key && t7.key === r5.key ? "merge" : null))) {
        const o7 = { ...r5.props };
        Object.entries(t7.props).forEach(([e6, t8]) => o7[e6] = "style" === e6 ? new Map([...r5.props.style || /* @__PURE__ */ new Map(), ...t8]) : "class" === e6 ? /* @__PURE__ */ new Set([...r5.props.class || /* @__PURE__ */ new Set(), ...t8]) : t8), e5.set(n5, { ...t7, props: o7 });
      } else t7._p >> 10 == r5._p >> 10 && "meta" === t7.tag && (function(e6) {
        const t8 = e6.split(":");
        return !!t8.length && we2.has(t8[1]);
      })(n5) ? (e5.set(n5, Object.assign([...Array.isArray(r5) ? r5 : [r5], t7], t7)), o6 = true) : (t7._w === r5._w ? t7._p > r5._p : t7?._w < r5?._w) && e5.set(n5, t7);
      return e5;
    }, n4.tagMap);
    const a4 = n4.tagMap.get("title"), l3 = n4.tagMap.get("titleTemplate");
    if (i5._title = a4?.textContent, l3) {
      const e5 = l3?.textContent;
      if (i5._titleTemplate = e5, e5) {
        let t7 = "function" == typeof e5 ? e5(a4?.textContent) : e5;
        "string" != typeof t7 || i5.plugins.has("template-params") || (t7 = t7.replace("%s", a4?.textContent || "")), a4 ? null === t7 ? n4.tagMap.delete("title") : n4.tagMap.set("title", { ...a4, textContent: t7 }) : (l3.tag = "title", l3.textContent = t7);
      }
    }
    n4.tags = Array.from(n4.tagMap.values()), o6 && (n4.tags = n4.tags.flat().sort(sortTags)), await t6.callHook("tags:beforeResolve", n4), await t6.callHook("tags:resolve", n4), await t6.callHook("tags:afterResolve", n4);
    const c4 = [];
    for (const e5 of n4.tags) {
      const { innerHTML: t7, tag: n5, props: r5 } = e5;
      if (be2.has(n5) && ((0 !== Object.keys(r5).length || e5.innerHTML || e5.textContent) && ("meta" !== n5 || r5.content || r5["http-equiv"] || r5.charset))) {
        if ("script" === n5 && t7) {
          if (String(r5.type).endsWith("json")) {
            const n6 = "string" == typeof t7 ? t7 : JSON.stringify(t7);
            e5.innerHTML = n6.replace(/</g, "\\u003C");
          } else "string" == typeof t7 && (e5.innerHTML = t7.replace(new RegExp(`</${n5}`, "g"), `<\\/${n5}`));
          e5._d = dedupeKey(e5);
        }
        c4.push(e5);
      }
    }
    return c4;
  }, invalidate() {
    for (const e5 of r4.values()) s4.add(e5._i);
    i5.dirty = true, t6.callHook("entries:updated", i5);
  } };
  return (e4?.plugins || []).forEach((e5) => registerPlugin(i5, e5)), i5.hooks.callHook("init", i5), e4.init?.forEach((e5) => e5 && i5.push(e5)), i5;
}
function encodeAttribute(e4) {
  return String(e4).replace(/"/g, "&quot;");
}
function propsToString(e4) {
  let t6 = "";
  for (const n3 in e4) {
    if (!Object.hasOwn(e4, n3)) continue;
    let r4 = e4[n3];
    "class" !== n3 && "style" !== n3 || "string" == typeof r4 || (r4 = "class" === n3 ? Array.from(r4).join(" ") : Array.from(r4).map(([e5, t7]) => `${e5}:${t7}`).join(";")), false !== r4 && null !== r4 && (t6 += true === r4 ? ` ${n3}` : ` ${n3}="${encodeAttribute(r4)}"`);
  }
  return t6;
}
function tagToString(e4) {
  const t6 = propsToString(e4.props), n3 = `<${e4.tag}${t6}>`;
  if (!ve2.has(e4.tag)) return me2.has(e4.tag) ? n3 : `${n3}</${e4.tag}>`;
  let r4 = String(e4.textContent || e4.innerHTML || "");
  return r4 = "title" === e4.tag ? r4.replace(/[&<>"'/]/g, (e5) => {
    switch (e5) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#x27;";
      case "/":
        return "&#x2F;";
      default:
        return e5;
    }
  }) : r4.replace(new RegExp(`</${e4.tag}`, "gi"), `<\\/${e4.tag}`), me2.has(e4.tag) ? n3 : `${n3}${r4}</${e4.tag}>`;
}
async function renderSSRHead(e4, t6) {
  const n3 = { shouldRender: true };
  if (await e4.hooks.callHook("ssr:beforeRender", n3), !n3.shouldRender) return { headTags: "", bodyTags: "", bodyTagsOpen: "", htmlAttrs: "", bodyAttrs: "" };
  const r4 = { tags: t6?.resolvedTags || await e4.resolveTags() };
  await e4.hooks.callHook("ssr:render", r4);
  const o5 = (function(e5) {
    const t7 = { htmlAttrs: {}, bodyAttrs: {}, tags: { head: "", bodyClose: "", bodyOpen: "" } };
    for (const n4 of e5) {
      if ("htmlAttrs" === n4.tag || "bodyAttrs" === n4.tag) {
        Object.assign(t7[n4.tag], n4.props);
        continue;
      }
      const e6 = tagToString(n4), r5 = n4.tagPosition || "head";
      t7.tags[r5] += t7.tags[r5] ? `${e6}` : e6;
    }
    return { headTags: t7.tags.head, bodyTags: t7.tags.bodyClose, bodyTagsOpen: t7.tags.bodyOpen, htmlAttrs: propsToString(t7.htmlAttrs), bodyAttrs: propsToString(t7.bodyAttrs) };
  })(r4.tags), s4 = { tags: r4.tags, html: o5 };
  return await e4.hooks.callHook("ssr:rendered", s4), s4.html;
}
function getCurrentScope() {
  return Pe2;
}
function batch(e4, t6 = false) {
  if (e4.flags |= 8, t6) return e4.next = Me2, void (Me2 = e4);
  e4.next = He2, He2 = e4;
}
function startBatch() {
  Ve2++;
}
function endBatch() {
  if (--Ve2 > 0) return;
  if (Me2) {
    let e5 = Me2;
    for (Me2 = void 0; e5; ) {
      const t6 = e5.next;
      e5.next = void 0, e5.flags &= -9, e5 = t6;
    }
  }
  let e4;
  for (; He2; ) {
    let t6 = He2;
    for (He2 = void 0; t6; ) {
      const n3 = t6.next;
      if (t6.next = void 0, t6.flags &= -9, 1 & t6.flags) try {
        t6.trigger();
      } catch (t7) {
        e4 || (e4 = t7);
      }
      t6 = n3;
    }
  }
  if (e4) throw e4;
}
function prepareDeps(e4) {
  for (let t6 = e4.deps; t6; t6 = t6.nextDep) t6.version = -1, t6.prevActiveLink = t6.dep.activeLink, t6.dep.activeLink = t6;
}
function cleanupDeps(e4) {
  let t6, n3 = e4.depsTail, r4 = n3;
  for (; r4; ) {
    const e5 = r4.prevDep;
    -1 === r4.version ? (r4 === n3 && (n3 = e5), removeSub(r4), removeDep(r4)) : t6 = r4, r4.dep.activeLink = r4.prevActiveLink, r4.prevActiveLink = void 0, r4 = e5;
  }
  e4.deps = t6, e4.depsTail = n3;
}
function isDirty(e4) {
  for (let t6 = e4.deps; t6; t6 = t6.nextDep) if (t6.dep.version !== t6.version || t6.dep.computed && (refreshComputed(t6.dep.computed) || t6.dep.version !== t6.version)) return true;
  return !!e4._dirty;
}
function refreshComputed(e4) {
  if (4 & e4.flags && !(16 & e4.flags)) return;
  if (e4.flags &= -17, e4.globalVersion === Ie2) return;
  if (e4.globalVersion = Ie2, !e4.isSSR && 128 & e4.flags && (!e4.deps && !e4._dirty || !isDirty(e4))) return;
  e4.flags |= 2;
  const t6 = e4.dep, n3 = Oe2, r4 = Le2;
  Oe2 = e4, Le2 = true;
  try {
    prepareDeps(e4);
    const n4 = e4.fn(e4._value);
    (0 === t6.version || hasChanged(n4, e4._value)) && (e4.flags |= 128, e4._value = n4, t6.version++);
  } catch (e5) {
    throw t6.version++, e5;
  } finally {
    Oe2 = n3, Le2 = r4, cleanupDeps(e4), e4.flags &= -3;
  }
}
function removeSub(e4, t6 = false) {
  const { dep: n3, prevSub: r4, nextSub: o5 } = e4;
  if (r4 && (r4.nextSub = o5, e4.prevSub = void 0), o5 && (o5.prevSub = r4, e4.nextSub = void 0), n3.subs === e4 && (n3.subs = r4, !r4 && n3.computed)) {
    n3.computed.flags &= -5;
    for (let e5 = n3.computed.deps; e5; e5 = e5.nextDep) removeSub(e5, true);
  }
  t6 || --n3.sc || !n3.map || n3.map.delete(n3.key);
}
function removeDep(e4) {
  const { prevDep: t6, nextDep: n3 } = e4;
  t6 && (t6.nextDep = n3, e4.prevDep = void 0), n3 && (n3.prevDep = t6, e4.nextDep = void 0);
}
function pauseTracking() {
  De2.push(Le2), Le2 = false;
}
function resetTracking() {
  const e4 = De2.pop();
  Le2 = void 0 === e4 || e4;
}
function cleanupEffect(e4) {
  const { cleanup: t6 } = e4;
  if (e4.cleanup = void 0, t6) {
    const e5 = Oe2;
    Oe2 = void 0;
    try {
      t6();
    } finally {
      Oe2 = e5;
    }
  }
}
function addSub(e4) {
  if (e4.dep.sc++, 4 & e4.sub.flags) {
    const t6 = e4.dep.computed;
    if (t6 && !e4.dep.subs) {
      t6.flags |= 20;
      for (let e5 = t6.deps; e5; e5 = e5.nextDep) addSub(e5);
    }
    const n3 = e4.dep.subs;
    n3 !== e4 && (e4.prevSub = n3, n3 && (n3.nextSub = e4)), e4.dep.subs = e4;
  }
}
function track(e4, t6, n3) {
  if (Le2 && Oe2) {
    let t7 = je2.get(e4);
    t7 || je2.set(e4, t7 = /* @__PURE__ */ new Map());
    let r4 = t7.get(n3);
    r4 || (t7.set(n3, r4 = new Dep()), r4.map = t7, r4.key = n3), r4.track();
  }
}
function trigger(e4, t6, n3, r4, o5, s4) {
  const i5 = je2.get(e4);
  if (!i5) return void Ie2++;
  const run = /* @__PURE__ */ __name((e5) => {
    e5 && e5.trigger();
  }, "run");
  if (startBatch(), "clear" === t6) i5.forEach(run);
  else {
    const o6 = i(e4), s5 = o6 && isIntegerKey(n3);
    if (o6 && "length" === n3) {
      const e5 = Number(r4);
      i5.forEach((t7, n4) => {
        ("length" === n4 || n4 === Ue2 || !isSymbol(n4) && n4 >= e5) && run(t7);
      });
    } else switch ((void 0 !== n3 || i5.has(void 0)) && run(i5.get(n3)), s5 && run(i5.get(Ue2)), t6) {
      case "add":
        o6 ? s5 && run(i5.get("length")) : (run(i5.get(Fe2)), isMap(e4) && run(i5.get(Be2)));
        break;
      case "delete":
        o6 || (run(i5.get(Fe2)), isMap(e4) && run(i5.get(Be2)));
        break;
      case "set":
        isMap(e4) && run(i5.get(Fe2));
    }
  }
  endBatch();
}
function reactiveReadArray(e4) {
  const t6 = toRaw(e4);
  return t6 === e4 ? t6 : (track(t6, 0, Ue2), isShallow(e4) ? t6 : t6.map(toReactive));
}
function shallowReadArray(e4) {
  return track(e4 = toRaw(e4), 0, Ue2), e4;
}
function toWrapped(e4, t6) {
  return isReadonly(e4) ? isReactive(e4) ? toReadonly(toReactive(t6)) : toReadonly(t6) : toReactive(t6);
}
function iterator(e4, t6, n3) {
  const r4 = shallowReadArray(e4), o5 = r4[t6]();
  return r4 === e4 || isShallow(e4) || (o5._next = o5.next, o5.next = () => {
    const e5 = o5._next();
    return e5.done || (e5.value = n3(e5.value)), e5;
  }), o5;
}
function apply(e4, t6, n3, r4, o5, s4) {
  const i5 = shallowReadArray(e4), a4 = i5 !== e4 && !isShallow(e4), l3 = i5[t6];
  if (l3 !== ze2[t6]) {
    const t7 = l3.apply(e4, s4);
    return a4 ? toReactive(t7) : t7;
  }
  let c4 = n3;
  i5 !== e4 && (a4 ? c4 = /* @__PURE__ */ __name(function(t7, r5) {
    return n3.call(this, toWrapped(e4, t7), r5, e4);
  }, "c") : n3.length > 2 && (c4 = /* @__PURE__ */ __name(function(t7, r5) {
    return n3.call(this, t7, r5, e4);
  }, "c")));
  const u3 = l3.call(i5, c4, r4);
  return a4 && o5 ? o5(u3) : u3;
}
function reduce(e4, t6, n3, r4) {
  const o5 = shallowReadArray(e4), s4 = o5 !== e4 && !isShallow(e4);
  let i5 = n3, a4 = false;
  o5 !== e4 && (s4 ? (a4 = 0 === r4.length, i5 = /* @__PURE__ */ __name(function(t7, r5, o6) {
    return a4 && (a4 = false, t7 = toWrapped(e4, t7)), n3.call(this, t7, toWrapped(e4, r5), o6, e4);
  }, "i")) : n3.length > 3 && (i5 = /* @__PURE__ */ __name(function(t7, r5, o6) {
    return n3.call(this, t7, r5, o6, e4);
  }, "i")));
  const l3 = o5[t6](i5, ...r4);
  return a4 ? toWrapped(e4, l3) : l3;
}
function searchProxy(e4, t6, n3) {
  const r4 = toRaw(e4);
  track(r4, 0, Ue2);
  const o5 = r4[t6](...n3);
  return -1 !== o5 && false !== o5 || !isProxy(n3[0]) ? o5 : (n3[0] = toRaw(n3[0]), r4[t6](...n3));
}
function noTracking(e4, t6, n3 = []) {
  pauseTracking(), startBatch();
  const r4 = toRaw(e4)[t6].apply(e4, n3);
  return endBatch(), resetTracking(), r4;
}
function hasOwnProperty(e4) {
  isSymbol(e4) || (e4 = String(e4));
  const t6 = toRaw(this);
  return track(t6, 0, e4), t6.hasOwnProperty(e4);
}
function createReadonlyMethod(e4) {
  return function(...t6) {
    return "delete" !== e4 && ("clear" === e4 ? void 0 : this);
  };
}
function createInstrumentations(e4, t6) {
  const n3 = { get(n4) {
    const r4 = this.__v_raw, o5 = toRaw(r4), s4 = toRaw(n4);
    e4 || (hasChanged(n4, s4) && track(o5, 0, n4), track(o5, 0, s4));
    const { has: i5 } = getProto(o5), a4 = t6 ? toShallow : e4 ? toReadonly : toReactive;
    return i5.call(o5, n4) ? a4(r4.get(n4)) : i5.call(o5, s4) ? a4(r4.get(s4)) : void (r4 !== o5 && r4.get(n4));
  }, get size() {
    const t7 = this.__v_raw;
    return !e4 && track(toRaw(t7), 0, Fe2), t7.size;
  }, has(t7) {
    const n4 = this.__v_raw, r4 = toRaw(n4), o5 = toRaw(t7);
    return e4 || (hasChanged(t7, o5) && track(r4, 0, t7), track(r4, 0, o5)), t7 === o5 ? n4.has(t7) : n4.has(t7) || n4.has(o5);
  }, forEach(n4, r4) {
    const o5 = this, s4 = o5.__v_raw, i5 = toRaw(s4), a4 = t6 ? toShallow : e4 ? toReadonly : toReactive;
    return !e4 && track(i5, 0, Fe2), s4.forEach((e5, t7) => n4.call(r4, a4(e5), a4(t7), o5));
  } };
  n(n3, e4 ? { add: createReadonlyMethod("add"), set: createReadonlyMethod("set"), delete: createReadonlyMethod("delete"), clear: createReadonlyMethod("clear") } : { add(e5) {
    const n4 = toRaw(this), r4 = getProto(n4), o5 = toRaw(e5), s4 = t6 || isShallow(e5) || isReadonly(e5) ? e5 : o5;
    return r4.has.call(n4, s4) || hasChanged(e5, s4) && r4.has.call(n4, e5) || hasChanged(o5, s4) && r4.has.call(n4, o5) || (n4.add(s4), trigger(n4, "add", s4, s4)), this;
  }, set(e5, n4) {
    t6 || isShallow(n4) || isReadonly(n4) || (n4 = toRaw(n4));
    const r4 = toRaw(this), { has: o5, get: s4 } = getProto(r4);
    let i5 = o5.call(r4, e5);
    i5 || (e5 = toRaw(e5), i5 = o5.call(r4, e5));
    const a4 = s4.call(r4, e5);
    return r4.set(e5, n4), i5 ? hasChanged(n4, a4) && trigger(r4, "set", e5, n4) : trigger(r4, "add", e5, n4), this;
  }, delete(e5) {
    const t7 = toRaw(this), { has: n4, get: r4 } = getProto(t7);
    let o5 = n4.call(t7, e5);
    o5 || (e5 = toRaw(e5), o5 = n4.call(t7, e5)), r4 && r4.call(t7, e5);
    const s4 = t7.delete(e5);
    return o5 && trigger(t7, "delete", e5, void 0), s4;
  }, clear() {
    const e5 = toRaw(this), t7 = 0 !== e5.size, n4 = e5.clear();
    return t7 && trigger(e5, "clear", void 0, void 0), n4;
  } });
  return ["keys", "values", "entries", Symbol.iterator].forEach((r4) => {
    n3[r4] = /* @__PURE__ */ (function(e5, t7, n4) {
      return function(...r5) {
        const o5 = this.__v_raw, s4 = toRaw(o5), i5 = isMap(s4), a4 = "entries" === e5 || e5 === Symbol.iterator && i5, l3 = "keys" === e5 && i5, c4 = o5[e5](...r5), u3 = n4 ? toShallow : t7 ? toReadonly : toReactive;
        return !t7 && track(s4, 0, l3 ? Be2 : Fe2), n(Object.create(c4), { next() {
          const { value: e6, done: t8 } = c4.next();
          return t8 ? { value: e6, done: t8 } : { value: a4 ? [u3(e6[0]), u3(e6[1])] : u3(e6), done: t8 };
        } });
      };
    })(r4, e4, t6);
  }), n3;
}
function createInstrumentationGetter(e4, t6) {
  const n3 = createInstrumentations(e4, t6);
  return (t7, r4, o5) => "__v_isReactive" === r4 ? !e4 : "__v_isReadonly" === r4 ? e4 : "__v_raw" === r4 ? t7 : Reflect.get(hasOwn(n3, r4) && r4 in t7 ? n3 : t7, r4, o5);
}
function reactive(e4) {
  return isReadonly(e4) ? e4 : createReactiveObject(e4, false, Je2, Xe2, nt2);
}
function shallowReactive(e4) {
  return createReactiveObject(e4, false, Ze2, Qe2, rt2);
}
function readonly(e4) {
  return createReactiveObject(e4, true, Ge2, et2, ot2);
}
function shallowReadonly(e4) {
  return createReactiveObject(e4, true, Ye2, tt2, st2);
}
function createReactiveObject(e4, t6, n3, r4, o5) {
  if (!isObject(e4)) return e4;
  if (e4.__v_raw && (!t6 || !e4.__v_isReactive)) return e4;
  const s4 = (i5 = e4).__v_skip || !Object.isExtensible(i5) ? 0 : (function(e5) {
    switch (e5) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  })(toRawType(i5));
  var i5;
  if (0 === s4) return e4;
  const a4 = o5.get(e4);
  if (a4) return a4;
  const l3 = new Proxy(e4, 2 === s4 ? r4 : n3);
  return o5.set(e4, l3), l3;
}
function isReactive(e4) {
  return isReadonly(e4) ? isReactive(e4.__v_raw) : !(!e4 || !e4.__v_isReactive);
}
function isReadonly(e4) {
  return !(!e4 || !e4.__v_isReadonly);
}
function isShallow(e4) {
  return !(!e4 || !e4.__v_isShallow);
}
function isProxy(e4) {
  return !!e4 && !!e4.__v_raw;
}
function toRaw(e4) {
  const t6 = e4 && e4.__v_raw;
  return t6 ? toRaw(t6) : e4;
}
function markRaw(e4) {
  return !hasOwn(e4, "__v_skip") && Object.isExtensible(e4) && def(e4, "__v_skip", true), e4;
}
function isRef2(e4) {
  return !!e4 && true === e4.__v_isRef;
}
function ref(e4) {
  return createRef(e4, false);
}
function shallowRef(e4) {
  return createRef(e4, true);
}
function createRef(e4, t6) {
  return isRef2(e4) ? e4 : new RefImpl(e4, t6);
}
function unref(e4) {
  return isRef2(e4) ? e4.value : e4;
}
function toValue(e4) {
  return isFunction(e4) ? e4() : unref(e4);
}
function proxyRefs(e4) {
  return isReactive(e4) ? e4 : new Proxy(e4, it2);
}
function customRef(e4) {
  return new CustomRefImpl(e4);
}
function propertyToRef(e4, t6, n3) {
  return new ObjectRefImpl(e4, t6, n3);
}
function onWatcherCleanup(e4, t6 = false, n3 = ct2) {
  if (n3) {
    let t7 = lt2.get(n3);
    t7 || lt2.set(n3, t7 = []), t7.push(e4);
  }
}
function traverse(e4, t6 = 1 / 0, n3) {
  if (t6 <= 0 || !isObject(e4) || e4.__v_skip) return e4;
  if (((n3 = n3 || /* @__PURE__ */ new Map()).get(e4) || 0) >= t6) return e4;
  if (n3.set(e4, t6), t6--, isRef2(e4)) traverse(e4.value, t6, n3);
  else if (i(e4)) for (let r4 = 0; r4 < e4.length; r4++) traverse(e4[r4], t6, n3);
  else if (isSet(e4) || isMap(e4)) e4.forEach((e5) => {
    traverse(e5, t6, n3);
  });
  else if (isPlainObject(e4)) {
    for (const r4 in e4) traverse(e4[r4], t6, n3);
    for (const r4 of Object.getOwnPropertySymbols(e4)) Object.prototype.propertyIsEnumerable.call(e4, r4) && traverse(e4[r4], t6, n3);
  }
  return e4;
}
function callWithErrorHandling(e4, t6, n3, r4) {
  try {
    return r4 ? e4(...r4) : e4();
  } catch (e5) {
    handleError(e5, t6, n3);
  }
}
function callWithAsyncErrorHandling(e4, t6, n3, r4) {
  if (isFunction(e4)) {
    const o5 = callWithErrorHandling(e4, t6, n3, r4);
    return o5 && isPromise(o5) && o5.catch((e5) => {
      handleError(e5, t6, n3);
    }), o5;
  }
  if (i(e4)) {
    const o5 = [];
    for (let s4 = 0; s4 < e4.length; s4++) o5.push(callWithAsyncErrorHandling(e4[s4], t6, n3, r4));
    return o5;
  }
}
function handleError(e4, t6, n3, r4 = true) {
  t6 && t6.vnode;
  const { errorHandler: o5, throwUnhandledErrorInProduction: s4 } = t6 && t6.appContext.config || t;
  if (t6) {
    let r5 = t6.parent;
    const s5 = t6.proxy, i5 = `https://vuejs.org/error-reference/#runtime-${n3}`;
    for (; r5; ) {
      const t7 = r5.ec;
      if (t7) {
        for (let n4 = 0; n4 < t7.length; n4++) if (false === t7[n4](e4, s5, i5)) return;
      }
      r5 = r5.parent;
    }
    if (o5) return pauseTracking(), callWithErrorHandling(o5, null, 10, [e4, s5, i5]), void resetTracking();
  }
  !(function(e5, t7, n4, r5 = true, o6 = false) {
    if (o6) throw e5;
    console.error(e5);
  })(e4, 0, 0, r4, s4);
}
function nextTick(e4) {
  const t6 = vt2 || yt2;
  return e4 ? t6.then(this ? e4.bind(this) : e4) : t6;
}
function queueJob(e4) {
  if (!(1 & e4.flags)) {
    const t6 = getId(e4), n3 = dt2[dt2.length - 1];
    !n3 || !(2 & e4.flags) && t6 >= getId(n3) ? dt2.push(e4) : dt2.splice((function(e5) {
      let t7 = ft2 + 1, n4 = dt2.length;
      for (; t7 < n4; ) {
        const r4 = t7 + n4 >>> 1, o5 = dt2[r4], s4 = getId(o5);
        s4 < e5 || s4 === e5 && 2 & o5.flags ? t7 = r4 + 1 : n4 = r4;
      }
      return t7;
    })(t6), 0, e4), e4.flags |= 1, queueFlush();
  }
}
function queueFlush() {
  vt2 || (vt2 = yt2.then(flushJobs));
}
function queuePostFlushCb(e4) {
  i(e4) ? ht2.push(...e4) : gt2 && -1 === e4.id ? gt2.splice(mt2 + 1, 0, e4) : 1 & e4.flags || (ht2.push(e4), e4.flags |= 1), queueFlush();
}
function flushPreFlushCbs(e4, t6, n3 = ft2 + 1) {
  for (; n3 < dt2.length; n3++) {
    const t7 = dt2[n3];
    if (t7 && 2 & t7.flags) {
      if (e4 && t7.id !== e4.uid) continue;
      dt2.splice(n3, 1), n3--, 4 & t7.flags && (t7.flags &= -2), t7(), 4 & t7.flags || (t7.flags &= -2);
    }
  }
}
function flushPostFlushCbs(e4) {
  if (ht2.length) {
    const e5 = [...new Set(ht2)].sort((e6, t6) => getId(e6) - getId(t6));
    if (ht2.length = 0, gt2) return void gt2.push(...e5);
    for (gt2 = e5, mt2 = 0; mt2 < gt2.length; mt2++) {
      const e6 = gt2[mt2];
      4 & e6.flags && (e6.flags &= -2), 8 & e6.flags || e6(), e6.flags &= -2;
    }
    gt2 = null, mt2 = 0;
  }
}
function flushJobs(e4) {
  try {
    for (ft2 = 0; ft2 < dt2.length; ft2++) {
      const e5 = dt2[ft2];
      !e5 || 8 & e5.flags || (4 & e5.flags && (e5.flags &= -2), callWithErrorHandling(e5, e5.i, e5.i ? 15 : 14), 4 & e5.flags || (e5.flags &= -2));
    }
  } finally {
    for (; ft2 < dt2.length; ft2++) {
      const e5 = dt2[ft2];
      e5 && (e5.flags &= -2);
    }
    ft2 = -1, dt2.length = 0, flushPostFlushCbs(), vt2 = null, (dt2.length || ht2.length) && flushJobs();
  }
}
function setCurrentRenderingInstance$1(e4) {
  const t6 = kt2;
  return kt2 = e4, Ct2 = e4 && e4.type.__scopeId || null, t6;
}
function withCtx(e4, t6 = kt2, n3) {
  if (!t6) return e4;
  if (e4._n) return e4;
  const renderFnWithContext = /* @__PURE__ */ __name((...n4) => {
    renderFnWithContext._d && setBlockTracking(-1);
    const r4 = setCurrentRenderingInstance$1(t6);
    let o5;
    try {
      o5 = e4(...n4);
    } finally {
      setCurrentRenderingInstance$1(r4), renderFnWithContext._d && setBlockTracking(1);
    }
    return o5;
  }, "renderFnWithContext");
  return renderFnWithContext._n = true, renderFnWithContext._c = true, renderFnWithContext._d = true, renderFnWithContext;
}
function invokeDirectiveHook(e4, t6, n3, r4) {
  const o5 = e4.dirs, s4 = t6 && t6.dirs;
  for (let i5 = 0; i5 < o5.length; i5++) {
    const a4 = o5[i5];
    s4 && (a4.oldValue = s4[i5].value);
    let l3 = a4.dir[r4];
    l3 && (pauseTracking(), callWithAsyncErrorHandling(l3, n3, 8, [e4.el, a4, e4, t6]), resetTracking());
  }
}
function provide(e4, t6) {
  if (_n) {
    let n3 = _n.provides;
    const r4 = _n.parent && _n.parent.provides;
    r4 === n3 && (n3 = _n.provides = Object.create(r4)), n3[e4] = t6;
  }
}
function inject(e4, t6, n3 = false) {
  const r4 = getCurrentInstance();
  if (r4 || nn2) {
    let o5 = nn2 ? nn2._context.provides : r4 ? null == r4.parent || r4.ce ? r4.vnode.appContext && r4.vnode.appContext.provides : r4.parent.provides : void 0;
    if (o5 && e4 in o5) return o5[e4];
    if (arguments.length > 1) return n3 && isFunction(t6) ? t6.call(r4 && r4.proxy) : t6;
  }
}
function hasInjectionContext() {
  return !(!getCurrentInstance() && !nn2);
}
function watchEffect(e4, t6) {
  return doWatch(e4, null, t6);
}
function watchSyncEffect(e4, t6) {
  return doWatch(e4, null, { flush: "sync" });
}
function watch(e4, t6, n3) {
  return doWatch(e4, t6, n3);
}
function doWatch(e4, t6, n3 = t) {
  const { immediate: r4, deep: o5, flush: s4, once: i5 } = n3, a4 = n({}, n3), l3 = t6 && r4 || !t6 && "post" !== s4;
  let c4;
  if (wn) {
    if ("sync" === s4) {
      const e5 = useSSRContext();
      c4 = e5.__watcherHandles || (e5.__watcherHandles = []);
    } else if (!l3) {
      const watchStopHandle = /* @__PURE__ */ __name(() => {
      }, "watchStopHandle");
      return watchStopHandle.stop = NOOP, watchStopHandle.resume = NOOP, watchStopHandle.pause = NOOP, watchStopHandle;
    }
  }
  const u3 = _n;
  a4.call = (e5, t7, n4) => callWithAsyncErrorHandling(e5, u3, t7, n4);
  let p4 = false;
  "post" === s4 ? a4.scheduler = (e5) => {
    an2(e5, u3 && u3.suspense);
  } : "sync" !== s4 && (p4 = true, a4.scheduler = (e5, t7) => {
    t7 ? e5() : queueJob(e5);
  }), a4.augmentJob = (e5) => {
    t6 && (e5.flags |= 4), p4 && (e5.flags |= 2, u3 && (e5.id = u3.uid, e5.i = u3));
  };
  const d3 = (function(e5, t7, n4 = t) {
    const { immediate: r5, deep: o6, once: s5, scheduler: i6, augmentJob: a5, call: l4 } = n4, reactiveGetter = /* @__PURE__ */ __name((e6) => o6 ? e6 : isShallow(e6) || false === o6 || 0 === o6 ? traverse(e6, 1) : traverse(e6), "reactiveGetter");
    let c5, u4, p5, d4, f3 = false, g3 = false;
    if (isRef2(e5) ? (u4 = /* @__PURE__ */ __name(() => e5.value, "u"), f3 = isShallow(e5)) : isReactive(e5) ? (u4 = /* @__PURE__ */ __name(() => reactiveGetter(e5), "u"), f3 = true) : i(e5) ? (g3 = true, f3 = e5.some((e6) => isReactive(e6) || isShallow(e6)), u4 = /* @__PURE__ */ __name(() => e5.map((e6) => isRef2(e6) ? e6.value : isReactive(e6) ? reactiveGetter(e6) : isFunction(e6) ? l4 ? l4(e6, 2) : e6() : void 0), "u")) : u4 = isFunction(e5) ? t7 ? l4 ? () => l4(e5, 2) : e5 : () => {
      if (p5) {
        pauseTracking();
        try {
          p5();
        } finally {
          resetTracking();
        }
      }
      const t8 = ct2;
      ct2 = c5;
      try {
        return l4 ? l4(e5, 3, [d4]) : e5(d4);
      } finally {
        ct2 = t8;
      }
    } : NOOP, t7 && o6) {
      const e6 = u4, t8 = true === o6 ? 1 / 0 : o6;
      u4 = /* @__PURE__ */ __name(() => traverse(e6(), t8), "u");
    }
    const y4 = getCurrentScope(), watchHandle = /* @__PURE__ */ __name(() => {
      c5.stop(), y4 && y4.active && remove(y4.effects, c5);
    }, "watchHandle");
    if (s5 && t7) {
      const e6 = t7;
      t7 = /* @__PURE__ */ __name((...t8) => {
        e6(...t8), watchHandle();
      }, "t");
    }
    let v3 = g3 ? new Array(e5.length).fill(at2) : at2;
    const job = /* @__PURE__ */ __name((e6) => {
      if (1 & c5.flags && (c5.dirty || e6)) if (t7) {
        const e7 = c5.run();
        if (o6 || f3 || (g3 ? e7.some((e8, t8) => hasChanged(e8, v3[t8])) : hasChanged(e7, v3))) {
          p5 && p5();
          const n5 = ct2;
          ct2 = c5;
          try {
            const n6 = [e7, v3 === at2 ? void 0 : g3 && v3[0] === at2 ? [] : v3, d4];
            v3 = e7, l4 ? l4(t7, 3, n6) : t7(...n6);
          } finally {
            ct2 = n5;
          }
        }
      } else c5.run();
    }, "job");
    return a5 && a5(job), c5 = new ReactiveEffect(u4), c5.scheduler = i6 ? () => i6(job, false) : job, d4 = /* @__PURE__ */ __name((e6) => onWatcherCleanup(e6, false, c5), "d"), p5 = c5.onStop = () => {
      const e6 = lt2.get(c5);
      if (e6) {
        if (l4) l4(e6, 4);
        else for (const t8 of e6) t8();
        lt2.delete(c5);
      }
    }, t7 ? r5 ? job(true) : v3 = c5.run() : i6 ? i6(job.bind(null, true), true) : c5.run(), watchHandle.pause = c5.pause.bind(c5), watchHandle.resume = c5.resume.bind(c5), watchHandle.stop = watchHandle, watchHandle;
  })(e4, t6, a4);
  return wn && (c4 ? c4.push(d3) : l3 && d3()), d3;
}
function instanceWatch(e4, t6, n3) {
  const r4 = this.proxy, o5 = isString(e4) ? e4.includes(".") ? createPathGetter(r4, e4) : () => r4[e4] : e4.bind(r4, r4);
  let s4;
  isFunction(t6) ? s4 = t6 : (s4 = t6.handler, n3 = t6);
  const i5 = setCurrentInstance(this), a4 = doWatch(o5, s4.bind(r4), n3);
  return i5(), a4;
}
function createPathGetter(e4, t6) {
  const n3 = t6.split(".");
  return () => {
    let t7 = e4;
    for (let e5 = 0; e5 < n3.length && t7; e5++) t7 = t7[n3[e5]];
    return t7;
  };
}
function moveTeleport(e4, t6, n3, { o: { insert: r4 }, m: o5 }, s4 = 2) {
  0 === s4 && r4(e4.targetAnchor, t6, n3);
  const { el: i5, anchor: a4, shapeFlag: l3, children: c4, props: u3 } = e4, p4 = 2 === s4;
  if (p4 && r4(i5, t6, n3), !wt2.has(e4) && (!p4 || isTeleportDisabled(u3)) && 16 & l3) for (let e5 = 0; e5 < c4.length; e5++) o5(c4[e5], t6, n3, 2);
  p4 && r4(a4, t6, n3);
}
function updateCssVars(e4, t6) {
  const n3 = e4.ctx;
  if (n3 && n3.ut) {
    let r4, o5;
    for (t6 ? (r4 = e4.el, o5 = e4.anchor) : (r4 = e4.targetStart, o5 = e4.targetAnchor); r4 && r4 !== o5; ) 1 === r4.nodeType && r4.setAttribute("data-v-owner", n3.uid), r4 = r4.nextSibling;
    n3.ut();
  }
}
function prepareAnchor(e4, t6, n3, r4, o5 = null) {
  const s4 = t6.targetStart = n3(""), i5 = t6.targetAnchor = n3("");
  return s4[Rt2] = i5, e4 && (r4(s4, e4, o5), r4(i5, e4, o5)), i5;
}
function useTransitionState() {
  const e4 = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return jt2(() => {
    e4.isMounted = true;
  }), Ut2(() => {
    e4.isUnmounting = true;
  }), e4;
}
function findNonCommentChild(e4) {
  let t6 = e4[0];
  if (e4.length > 1) {
    for (const n3 of e4) if (n3.type !== dn2) {
      t6 = n3;
      break;
    }
  }
  return t6;
}
function getLeavingNodesForType(e4, t6) {
  const { leavingVNodes: n3 } = e4;
  let r4 = n3.get(t6.type);
  return r4 || (r4 = /* @__PURE__ */ Object.create(null), n3.set(t6.type, r4)), r4;
}
function resolveTransitionHooks(e4, t6, n3, r4, o5) {
  const { appear: s4, mode: i5, persisted: a4 = false, onBeforeEnter: l3, onEnter: c4, onAfterEnter: u3, onEnterCancelled: p4, onBeforeLeave: d3, onLeave: f3, onAfterLeave: g3, onLeaveCancelled: m3, onBeforeAppear: y4, onAppear: v3, onAfterAppear: _3, onAppearCancelled: b4 } = t6, C3 = String(e4.key), S3 = getLeavingNodesForType(n3, e4), callHook2 = /* @__PURE__ */ __name((e5, t7) => {
    e5 && callWithAsyncErrorHandling(e5, r4, 9, t7);
  }, "callHook"), callAsyncHook = /* @__PURE__ */ __name((e5, t7) => {
    const n4 = t7[1];
    callHook2(e5, t7), i(e5) ? e5.every((e6) => e6.length <= 1) && n4() : e5.length <= 1 && n4();
  }, "callAsyncHook"), w3 = { mode: i5, persisted: a4, beforeEnter(t7) {
    let r5 = l3;
    if (!n3.isMounted) {
      if (!s4) return;
      r5 = y4 || l3;
    }
    t7[At2] && t7[At2](true);
    const o6 = S3[C3];
    o6 && isSameVNodeType(e4, o6) && o6.el[At2] && o6.el[At2](), callHook2(r5, [t7]);
  }, enter(t7) {
    if (S3[C3] === e4) return;
    let r5 = c4, o6 = u3, i6 = p4;
    if (!n3.isMounted) {
      if (!s4) return;
      r5 = v3 || c4, o6 = _3 || u3, i6 = b4 || p4;
    }
    let a5 = false;
    t7[xt2] = (e5) => {
      a5 || (a5 = true, callHook2(e5 ? i6 : o6, [t7]), w3.delayedLeave && w3.delayedLeave(), t7[xt2] = void 0);
    };
    const l4 = t7[xt2].bind(null, false);
    r5 ? callAsyncHook(r5, [t7, l4]) : l4();
  }, leave(t7, r5) {
    const o6 = String(e4.key);
    if (t7[xt2] && t7[xt2](true), n3.isUnmounting) return r5();
    callHook2(d3, [t7]);
    let s5 = false;
    t7[At2] = (n4) => {
      s5 || (s5 = true, r5(), callHook2(n4 ? m3 : g3, [t7]), t7[At2] = void 0, S3[o6] === e4 && delete S3[o6]);
    };
    const i6 = t7[At2].bind(null, false);
    S3[o6] = e4, f3 ? callAsyncHook(f3, [t7, i6]) : i6();
  }, clone(e5) {
    const s5 = resolveTransitionHooks(e5, t6, n3, r4, o5);
    return o5 && o5(s5), s5;
  } };
  return w3;
}
function emptyPlaceholder(e4) {
  if (isKeepAlive(e4)) return (e4 = cloneVNode(e4)).children = null, e4;
}
function getInnerChild$1(e4) {
  if (!isKeepAlive(e4)) return isTeleport(e4.type) && e4.children ? findNonCommentChild(e4.children) : e4;
  if (e4.component) return e4.component.subTree;
  const { shapeFlag: t6, children: n3 } = e4;
  if (n3) {
    if (16 & t6) return n3[0];
    if (32 & t6 && isFunction(n3.default)) return n3.default();
  }
}
function setTransitionHooks(e4, t6) {
  6 & e4.shapeFlag && e4.component ? (e4.transition = t6, setTransitionHooks(e4.component.subTree, t6)) : 128 & e4.shapeFlag ? (e4.ssContent.transition = t6.clone(e4.ssContent), e4.ssFallback.transition = t6.clone(e4.ssFallback)) : e4.transition = t6;
}
function getTransitionRawChildren(e4, t6 = false, n3) {
  let r4 = [], o5 = 0;
  for (let s4 = 0; s4 < e4.length; s4++) {
    let i5 = e4[s4];
    const a4 = null == n3 ? i5.key : String(n3) + String(null != i5.key ? i5.key : s4);
    i5.type === un ? (128 & i5.patchFlag && o5++, r4 = r4.concat(getTransitionRawChildren(i5.children, t6, a4))) : (t6 || i5.type !== dn2) && r4.push(null != a4 ? cloneVNode(i5, { key: a4 }) : i5);
  }
  if (o5 > 1) for (let e5 = 0; e5 < r4.length; e5++) r4[e5].patchFlag = -2;
  return r4;
}
function defineComponent(e4, t6) {
  return isFunction(e4) ? (() => n({ name: e4.name }, t6, { setup: e4 }))() : e4;
}
function markAsyncBoundary(e4) {
  e4.ids = [e4.ids[0] + e4.ids[2]++ + "-", 0, 0];
}
function isTemplateRefKey(e4, t6) {
  let n3;
  return !(!(n3 = Object.getOwnPropertyDescriptor(e4, t6)) || n3.configurable);
}
function setRef(e4, t6, n3, r4, o5 = false) {
  if (i(e4)) return void e4.forEach((e5, s5) => setRef(e5, t6 && (i(t6) ? t6[s5] : t6), n3, r4, o5));
  if (isAsyncWrapper(r4) && !o5) return void (512 & r4.shapeFlag && r4.type.__asyncResolved && r4.component.subTree.component && setRef(e4, t6, n3, r4.component.subTree));
  const s4 = 4 & r4.shapeFlag ? getComponentPublicInstance(r4.component) : r4.el, i5 = o5 ? null : s4, { i: a4, r: l3 } = e4, c4 = t6 && t6.r, u3 = a4.refs === t ? a4.refs = {} : a4.refs, p4 = a4.setupState, d3 = toRaw(p4), f3 = p4 === t ? NO : (e5) => !isTemplateRefKey(u3, e5) && hasOwn(d3, e5), canSetRef = /* @__PURE__ */ __name((e5, t7) => !t7 || !isTemplateRefKey(u3, t7), "canSetRef");
  if (null != c4 && c4 !== l3) {
    if (invalidatePendingSetRef(t6), isString(c4)) u3[c4] = null, f3(c4) && (p4[c4] = null);
    else if (isRef2(c4)) {
      const e5 = t6;
      canSetRef(0, e5.k) && (c4.value = null), e5.k && (u3[e5.k] = null);
    }
  }
  if (isFunction(l3)) callWithErrorHandling(l3, a4, 12, [i5, u3]);
  else {
    const t7 = isString(l3), r5 = isRef2(l3);
    if (t7 || r5) {
      const doSet = /* @__PURE__ */ __name(() => {
        if (e4.f) {
          const n4 = t7 ? f3(l3) ? p4[l3] : u3[l3] : canSetRef() || !e4.k ? l3.value : u3[e4.k];
          if (o5) i(n4) && remove(n4, s4);
          else if (i(n4)) n4.includes(s4) || n4.push(s4);
          else if (t7) u3[l3] = [s4], f3(l3) && (p4[l3] = u3[l3]);
          else {
            const t8 = [s4];
            canSetRef(0, e4.k) && (l3.value = t8), e4.k && (u3[e4.k] = t8);
          }
        } else t7 ? (u3[l3] = i5, f3(l3) && (p4[l3] = i5)) : r5 && (canSetRef(0, e4.k) && (l3.value = i5), e4.k && (u3[e4.k] = i5));
      }, "doSet");
      if (i5) {
        const job = /* @__PURE__ */ __name(() => {
          doSet(), Ot2.delete(e4);
        }, "job");
        job.id = -1, Ot2.set(e4, job), an2(job, n3);
      } else invalidatePendingSetRef(e4), doSet();
    }
  }
}
function invalidatePendingSetRef(e4) {
  const t6 = Ot2.get(e4);
  t6 && (t6.flags |= 8, Ot2.delete(e4));
}
function createHydrationFunctions(e4) {
  const { mt: t6, p: n3, o: { patchProp: r4, createText: o5, nextSibling: s4, parentNode: i5, remove: a4, insert: l3, createComment: c4 } } = e4, hydrateNode = /* @__PURE__ */ __name((n4, r5, a5, c5, u3, p4 = false) => {
    p4 = p4 || !!r5.dynamicChildren;
    const d3 = isComment(n4) && "[" === n4.data, onMismatch = /* @__PURE__ */ __name(() => handleMismatch(n4, r5, a5, c5, u3, d3), "onMismatch"), { type: f3, ref: g3, shapeFlag: m3, patchFlag: y4 } = r5;
    let v3 = n4.nodeType;
    r5.el = n4, -2 === y4 && (p4 = false, r5.dynamicChildren = null);
    let _3 = null;
    switch (f3) {
      case pn2:
        3 !== v3 ? "" === r5.children ? (l3(r5.el = o5(""), i5(n4), n4), _3 = n4) : _3 = onMismatch() : (n4.data !== r5.children && (logMismatchError(), n4.data = r5.children), _3 = s4(n4));
        break;
      case dn2:
        isTemplateNode2(n4) ? (_3 = s4(n4), replaceNode(r5.el = n4.content.firstChild, n4, a5)) : _3 = 8 !== v3 || d3 ? onMismatch() : s4(n4);
        break;
      case fn:
        if (d3 && (v3 = (n4 = s4(n4)).nodeType), 1 === v3 || 3 === v3) {
          _3 = n4;
          const e5 = !r5.children.length;
          for (let t7 = 0; t7 < r5.staticCount; t7++) e5 && (r5.children += 1 === _3.nodeType ? _3.outerHTML : _3.data), t7 === r5.staticCount - 1 && (r5.anchor = _3), _3 = s4(_3);
          return d3 ? s4(_3) : _3;
        }
        onMismatch();
        break;
      case un:
        _3 = d3 ? hydrateFragment(n4, r5, a5, c5, u3, p4) : onMismatch();
        break;
      default:
        if (1 & m3) _3 = 1 === v3 && r5.type.toLowerCase() === n4.tagName.toLowerCase() || isTemplateNode2(n4) ? hydrateElement(n4, r5, a5, c5, u3, p4) : onMismatch();
        else if (6 & m3) {
          r5.slotScopeIds = u3;
          const e5 = i5(n4);
          if (_3 = d3 ? locateClosingAnchor(n4) : isComment(n4) && "teleport start" === n4.data ? locateClosingAnchor(n4, n4.data, "teleport end") : s4(n4), t6(r5, e5, null, a5, c5, getContainerType(e5), p4), isAsyncWrapper(r5) && !r5.type.__asyncResolved) {
            let t7;
            d3 ? (t7 = createVNode(un), t7.anchor = _3 ? _3.previousSibling : e5.lastChild) : t7 = 3 === n4.nodeType ? createTextVNode("") : createVNode("div"), t7.el = n4, r5.component.subTree = t7;
          }
        } else 64 & m3 ? _3 = 8 !== v3 ? onMismatch() : r5.type.hydrate(n4, r5, a5, c5, u3, p4, e4, hydrateChildren) : 128 & m3 && (_3 = r5.type.hydrate(n4, r5, a5, c5, getContainerType(i5(n4)), u3, p4, e4, hydrateNode));
    }
    return null != g3 && setRef(g3, null, c5, r5), _3;
  }, "hydrateNode"), hydrateElement = /* @__PURE__ */ __name((e5, t7, n4, o6, s5, i6) => {
    i6 = i6 || !!t7.dynamicChildren;
    const { type: l4, props: c5, patchFlag: u3, shapeFlag: p4, dirs: d3, transition: f3 } = t7, g3 = "input" === l4 || "option" === l4;
    if (g3 || -1 !== u3) {
      d3 && invokeDirectiveHook(t7, null, n4, "created");
      let l5, m3 = false;
      if (isTemplateNode2(e5)) {
        m3 = needTransition(null, f3) && n4 && n4.vnode.props && n4.vnode.props.appear;
        const r5 = e5.content.firstChild;
        if (m3) {
          const e6 = r5.getAttribute("class");
          e6 && (r5.$cls = e6), f3.beforeEnter(r5);
        }
        replaceNode(r5, e5, n4), t7.el = e5 = r5;
      }
      if (16 & p4 && (!c5 || !c5.innerHTML && !c5.textContent)) {
        let r5 = hydrateChildren(e5.firstChild, t7, e5, n4, o6, s5, i6);
        for (; r5; ) {
          isMismatchAllowed(e5, 1) || logMismatchError();
          const t8 = r5;
          r5 = r5.nextSibling, a4(t8);
        }
      } else if (8 & p4) {
        let n5 = t7.children;
        "\n" !== n5[0] || "PRE" !== e5.tagName && "TEXTAREA" !== e5.tagName || (n5 = n5.slice(1));
        const { textContent: r5 } = e5;
        r5 !== n5 && r5 !== n5.replace(/\r\n|\r/g, "\n") && (isMismatchAllowed(e5, 0) || logMismatchError(), e5.textContent = t7.children);
      }
      if (c5) {
        if (g3 || !i6 || 48 & u3) {
          const t8 = e5.tagName.includes("-");
          for (const o7 in c5) (g3 && (o7.endsWith("value") || "indeterminate" === o7) || isOn(o7) && !s(o7) || "." === o7[0] || t8 && !s(o7)) && r4(e5, o7, null, c5[o7], void 0, n4);
        } else if (c5.onClick) r4(e5, "onClick", null, c5.onClick, void 0, n4);
        else if (4 & u3 && isReactive(c5.style)) for (const e6 in c5.style) c5.style[e6];
      }
      (l5 = c5 && c5.onVnodeBeforeMount) && invokeVNodeHook(l5, n4, t7), d3 && invokeDirectiveHook(t7, null, n4, "beforeMount"), ((l5 = c5 && c5.onVnodeMounted) || d3 || m3) && queueEffectWithSuspense(() => {
        l5 && invokeVNodeHook(l5, n4, t7), m3 && f3.enter(e5), d3 && invokeDirectiveHook(t7, null, n4, "mounted");
      }, o6);
    }
    return e5.nextSibling;
  }, "hydrateElement"), hydrateChildren = /* @__PURE__ */ __name((e5, t7, r5, i6, a5, c5, u3) => {
    u3 = u3 || !!t7.dynamicChildren;
    const p4 = t7.children, d3 = p4.length;
    for (let t8 = 0; t8 < d3; t8++) {
      const f3 = u3 ? p4[t8] : p4[t8] = normalizeVNode$1(p4[t8]), g3 = f3.type === pn2;
      e5 ? (g3 && !u3 && t8 + 1 < d3 && normalizeVNode$1(p4[t8 + 1]).type === pn2 && (l3(o5(e5.data.slice(f3.children.length)), r5, s4(e5)), e5.data = f3.children), e5 = hydrateNode(e5, f3, i6, a5, c5, u3)) : g3 && !f3.children ? l3(f3.el = o5(""), r5) : (isMismatchAllowed(r5, 1) || logMismatchError(), n3(null, f3, r5, null, i6, a5, getContainerType(r5), c5));
    }
    return e5;
  }, "hydrateChildren"), hydrateFragment = /* @__PURE__ */ __name((e5, t7, n4, r5, o6, a5) => {
    const { slotScopeIds: u3 } = t7;
    u3 && (o6 = o6 ? o6.concat(u3) : u3);
    const p4 = i5(e5), d3 = hydrateChildren(s4(e5), t7, p4, n4, r5, o6, a5);
    return d3 && isComment(d3) && "]" === d3.data ? s4(t7.anchor = d3) : (logMismatchError(), l3(t7.anchor = c4("]"), p4, d3), d3);
  }, "hydrateFragment"), handleMismatch = /* @__PURE__ */ __name((e5, t7, r5, o6, l4, c5) => {
    if (isMismatchAllowed(e5.parentElement, 1) || logMismatchError(), t7.el = null, c5) {
      const t8 = locateClosingAnchor(e5);
      for (; ; ) {
        const n4 = s4(e5);
        if (!n4 || n4 === t8) break;
        a4(n4);
      }
    }
    const u3 = s4(e5), p4 = i5(e5);
    return a4(e5), n3(null, t7, p4, u3, r5, o6, getContainerType(p4), l4), r5 && (r5.vnode.el = t7.el, updateHOCHostEl(r5, t7.el)), u3;
  }, "handleMismatch"), locateClosingAnchor = /* @__PURE__ */ __name((e5, t7 = "[", n4 = "]") => {
    let r5 = 0;
    for (; e5; ) if ((e5 = s4(e5)) && isComment(e5) && (e5.data === t7 && r5++, e5.data === n4)) {
      if (0 === r5) return s4(e5);
      r5--;
    }
    return e5;
  }, "locateClosingAnchor"), replaceNode = /* @__PURE__ */ __name((e5, t7, n4) => {
    const r5 = t7.parentNode;
    r5 && r5.replaceChild(e5, t7);
    let o6 = n4;
    for (; o6; ) o6.vnode.el === t7 && (o6.vnode.el = o6.subTree.el = e5), o6 = o6.parent;
  }, "replaceNode"), isTemplateNode2 = /* @__PURE__ */ __name((e5) => 1 === e5.nodeType && "TEMPLATE" === e5.tagName, "isTemplateNode");
  return [(e5, t7) => {
    if (!t7.hasChildNodes()) return n3(null, e5, t7), flushPostFlushCbs(), void (t7._vnode = e5);
    hydrateNode(t7.firstChild, e5, null, null, null), flushPostFlushCbs(), t7._vnode = e5;
  }, hydrateNode];
}
function isMismatchAllowed(e4, t6) {
  if (0 === t6 || 1 === t6) for (; e4 && !e4.hasAttribute(Ht2); ) e4 = e4.parentElement;
  const n3 = e4 && e4.getAttribute(Ht2);
  if (null == n3) return false;
  if ("" === n3) return true;
  {
    const e5 = n3.split(",");
    return !(0 !== t6 || !e5.includes("children")) || e5.includes(Mt2[t6]);
  }
}
function createInnerComp(e4, t6) {
  const { ref: n3, props: r4, children: o5, ce: s4 } = t6.vnode, i5 = createVNode(e4, r4, o5);
  return i5.ref = n3, i5.ce = s4, delete t6.vnode.ce, i5;
}
function matches(e4, t6) {
  return i(e4) ? e4.some((e5) => matches(e5, t6)) : isString(e4) ? e4.split(",").includes(t6) : !!isRegExp(e4) && (e4.lastIndex = 0, e4.test(t6));
}
function onActivated(e4, t6) {
  registerKeepAliveHook(e4, "a", t6);
}
function onDeactivated(e4, t6) {
  registerKeepAliveHook(e4, "da", t6);
}
function registerKeepAliveHook(e4, t6, n3 = _n) {
  const r4 = e4.__wdc || (e4.__wdc = () => {
    let t7 = n3;
    for (; t7; ) {
      if (t7.isDeactivated) return;
      t7 = t7.parent;
    }
    return e4();
  });
  if (injectHook(t6, r4, n3), n3) {
    let e5 = n3.parent;
    for (; e5 && e5.parent; ) isKeepAlive(e5.parent.vnode) && injectToKeepAliveRoot(r4, t6, n3, e5), e5 = e5.parent;
  }
}
function injectToKeepAliveRoot(e4, t6, n3, r4) {
  const o5 = injectHook(t6, e4, r4, true);
  Wt2(() => {
    remove(r4[t6], o5);
  }, n3);
}
function resetShapeFlag(e4) {
  e4.shapeFlag &= -257, e4.shapeFlag &= -513;
}
function getInnerChild(e4) {
  return 128 & e4.shapeFlag ? e4.ssContent : e4;
}
function injectHook(e4, t6, n3 = _n, r4 = false) {
  if (n3) {
    const o5 = n3[e4] || (n3[e4] = []), s4 = t6.__weh || (t6.__weh = (...r5) => {
      pauseTracking();
      const o6 = setCurrentInstance(n3), s5 = callWithAsyncErrorHandling(t6, n3, e4, r5);
      return o6(), resetTracking(), s5;
    });
    return r4 ? o5.unshift(s4) : o5.push(s4), s4;
  }
}
function onErrorCaptured(e4, t6 = _n) {
  injectHook("ec", e4, t6);
}
function resolveAsset(e4, t6, n3 = true, r4 = false) {
  const o5 = kt2 || _n;
  if (o5) {
    const n4 = o5.type;
    if (e4 === Jt2) {
      const e5 = getComponentName(n4, false);
      if (e5 && (e5 === t6 || e5 === p(t6) || e5 === f(p(t6)))) return n4;
    }
    const s4 = resolve(o5[e4] || n4[e4], t6) || resolve(o5.appContext[e4], t6);
    return !s4 && r4 ? n4 : s4;
  }
}
function resolve(e4, t6) {
  return e4 && (e4[t6] || e4[p(t6)] || e4[f(p(t6))]);
}
function ensureValidVNode$1(e4) {
  return e4.some((e5) => !isVNode$2(e5) || e5.type !== dn2 && !(e5.type === un && !ensureValidVNode$1(e5.children))) ? e4 : null;
}
function getContext2(e4) {
  const t6 = getCurrentInstance();
  return t6.setupContext || (t6.setupContext = createSetupContext(t6));
}
function normalizePropsOrEmits(e4) {
  return i(e4) ? e4.reduce((e5, t6) => (e5[t6] = null, e5), {}) : e4;
}
function applyOptions(e4) {
  const t6 = resolveMergedOptions(e4), n3 = e4.proxy, r4 = e4.ctx;
  Qt2 = false, t6.beforeCreate && callHook$1(t6.beforeCreate, e4, "bc");
  const { data: o5, computed: s4, methods: i5, watch: a4, provide: l3, inject: c4, created: u3, beforeMount: p4, mounted: d3, beforeUpdate: f3, updated: g3, activated: y4, deactivated: v3, beforeDestroy: _3, beforeUnmount: b4, destroyed: S3, unmounted: w3, render: R3, renderTracked: T3, renderTriggered: A3, errorCaptured: x4, serverPrefetch: E3, expose: P3, inheritAttrs: O3, components: N3, directives: H2, filters: M3 } = t6;
  if (c4 && (function(e5, t7) {
    i(e5) && (e5 = normalizeInject(e5));
    for (const n4 in e5) {
      const r5 = e5[n4];
      let o6;
      o6 = isObject(r5) ? "default" in r5 ? inject(r5.from || n4, r5.default, true) : inject(r5.from || n4) : inject(r5), isRef2(o6) ? Object.defineProperty(t7, n4, { enumerable: true, configurable: true, get: /* @__PURE__ */ __name(() => o6.value, "get"), set: /* @__PURE__ */ __name((e6) => o6.value = e6, "set") }) : t7[n4] = o6;
    }
  })(c4, r4, null), i5) for (const e5 in i5) {
    const t7 = i5[e5];
    isFunction(t7) && (r4[e5] = t7.bind(n3));
  }
  if (o5) {
    const t7 = o5.call(n3, n3);
    isObject(t7) && (e4.data = reactive(t7));
  }
  if (Qt2 = true, s4) for (const e5 in s4) {
    const t7 = s4[e5], o6 = isFunction(t7) ? t7.bind(n3, n3) : isFunction(t7.get) ? t7.get.bind(n3, n3) : NOOP, i6 = !isFunction(t7) && isFunction(t7.set) ? t7.set.bind(n3) : NOOP, a5 = computed({ get: o6, set: i6 });
    Object.defineProperty(r4, e5, { enumerable: true, configurable: true, get: /* @__PURE__ */ __name(() => a5.value, "get"), set: /* @__PURE__ */ __name((e6) => a5.value = e6, "set") });
  }
  if (a4) for (const e5 in a4) createWatcher(a4[e5], r4, n3, e5);
  if (l3) {
    const e5 = isFunction(l3) ? l3.call(n3) : l3;
    Reflect.ownKeys(e5).forEach((t7) => {
      provide(t7, e5[t7]);
    });
  }
  function registerLifecycleHook(e5, t7) {
    i(t7) ? t7.forEach((t8) => e5(t8.bind(n3))) : t7 && e5(t7.bind(n3));
  }
  __name(registerLifecycleHook, "registerLifecycleHook");
  if (u3 && callHook$1(u3, e4, "c"), registerLifecycleHook(It2, p4), registerLifecycleHook(jt2, d3), registerLifecycleHook(Ft2, f3), registerLifecycleHook(Bt2, g3), registerLifecycleHook(onActivated, y4), registerLifecycleHook(onDeactivated, v3), registerLifecycleHook(onErrorCaptured, x4), registerLifecycleHook(Kt2, T3), registerLifecycleHook(qt2, A3), registerLifecycleHook(Ut2, b4), registerLifecycleHook(Wt2, w3), registerLifecycleHook(zt2, E3), i(P3)) if (P3.length) {
    const t7 = e4.exposed || (e4.exposed = {});
    P3.forEach((e5) => {
      Object.defineProperty(t7, e5, { get: /* @__PURE__ */ __name(() => n3[e5], "get"), set: /* @__PURE__ */ __name((t8) => n3[e5] = t8, "set"), enumerable: true });
    });
  } else e4.exposed || (e4.exposed = {});
  R3 && e4.render === NOOP && (e4.render = R3), null != O3 && (e4.inheritAttrs = O3), N3 && (e4.components = N3), H2 && (e4.directives = H2), E3 && markAsyncBoundary(e4);
}
function callHook$1(e4, t6, n3) {
  callWithAsyncErrorHandling(i(e4) ? e4.map((e5) => e5.bind(t6.proxy)) : e4.bind(t6.proxy), t6, n3);
}
function createWatcher(e4, t6, n3, r4) {
  let o5 = r4.includes(".") ? createPathGetter(n3, r4) : () => n3[r4];
  if (isString(e4)) {
    const n4 = t6[e4];
    isFunction(n4) && watch(o5, n4);
  } else if (isFunction(e4)) watch(o5, e4.bind(n3));
  else if (isObject(e4)) if (i(e4)) e4.forEach((e5) => createWatcher(e5, t6, n3, r4));
  else {
    const r5 = isFunction(e4.handler) ? e4.handler.bind(n3) : t6[e4.handler];
    isFunction(r5) && watch(o5, r5, e4);
  }
}
function resolveMergedOptions(e4) {
  const t6 = e4.type, { mixins: n3, extends: r4 } = t6, { mixins: o5, optionsCache: s4, config: { optionMergeStrategies: i5 } } = e4.appContext, a4 = s4.get(t6);
  let l3;
  return a4 ? l3 = a4 : o5.length || n3 || r4 ? (l3 = {}, o5.length && o5.forEach((e5) => mergeOptions(l3, e5, i5, true)), mergeOptions(l3, t6, i5)) : l3 = t6, isObject(t6) && s4.set(t6, l3), l3;
}
function mergeOptions(e4, t6, n3, r4 = false) {
  const { mixins: o5, extends: s4 } = t6;
  s4 && mergeOptions(e4, s4, n3, true), o5 && o5.forEach((t7) => mergeOptions(e4, t7, n3, true));
  for (const o6 in t6) if (r4 && "expose" === o6) ;
  else {
    const r5 = en2[o6] || n3 && n3[o6];
    e4[o6] = r5 ? r5(e4[o6], t6[o6]) : t6[o6];
  }
  return e4;
}
function mergeDataFn(e4, t6) {
  return t6 ? e4 ? function() {
    return n(isFunction(e4) ? e4.call(this, this) : e4, isFunction(t6) ? t6.call(this, this) : t6);
  } : t6 : e4;
}
function normalizeInject(e4) {
  if (i(e4)) {
    const t6 = {};
    for (let n3 = 0; n3 < e4.length; n3++) t6[e4[n3]] = e4[n3];
    return t6;
  }
  return e4;
}
function mergeAsArray2(e4, t6) {
  return e4 ? [...new Set([].concat(e4, t6))] : t6;
}
function mergeObjectOptions(e4, t6) {
  return e4 ? n(/* @__PURE__ */ Object.create(null), e4, t6) : t6;
}
function mergeEmitsOrPropsOptions(e4, t6) {
  return e4 ? i(e4) && i(t6) ? [.../* @__PURE__ */ new Set([...e4, ...t6])] : n(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(e4), normalizePropsOrEmits(null != t6 ? t6 : {})) : t6;
}
function createAppContext() {
  return { app: null, config: { isNativeTag: NO, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
function createAppAPI(e4, t6) {
  return function(n3, r4 = null) {
    isFunction(n3) || (n3 = n({}, n3)), null == r4 || isObject(r4) || (r4 = null);
    const o5 = createAppContext(), s4 = /* @__PURE__ */ new WeakSet(), i5 = [];
    let a4 = false;
    const l3 = o5.app = { _uid: tn2++, _component: n3, _props: r4, _container: null, _context: o5, _instance: null, version: Tn, get config() {
      return o5.config;
    }, set config(e5) {
    }, use: /* @__PURE__ */ __name((e5, ...t7) => (s4.has(e5) || (e5 && isFunction(e5.install) ? (s4.add(e5), e5.install(l3, ...t7)) : isFunction(e5) && (s4.add(e5), e5(l3, ...t7))), l3), "use"), mixin: /* @__PURE__ */ __name((e5) => (o5.mixins.includes(e5) || o5.mixins.push(e5), l3), "mixin"), component: /* @__PURE__ */ __name((e5, t7) => t7 ? (o5.components[e5] = t7, l3) : o5.components[e5], "component"), directive: /* @__PURE__ */ __name((e5, t7) => t7 ? (o5.directives[e5] = t7, l3) : o5.directives[e5], "directive"), mount(s5, i6, c4) {
      if (!a4) {
        const u3 = l3._ceVNode || createVNode(n3, r4);
        return u3.appContext = o5, true === c4 ? c4 = "svg" : false === c4 && (c4 = void 0), i6 && t6 ? t6(u3, s5) : e4(u3, s5, c4), a4 = true, l3._container = s5, s5.__vue_app__ = l3, getComponentPublicInstance(u3.component);
      }
    }, onUnmount(e5) {
      i5.push(e5);
    }, unmount() {
      a4 && (callWithAsyncErrorHandling(i5, l3._instance, 16), e4(null, l3._container), delete l3._container.__vue_app__);
    }, provide: /* @__PURE__ */ __name((e5, t7) => (o5.provides[e5] = t7, l3), "provide"), runWithContext(e5) {
      const t7 = nn2;
      nn2 = l3;
      try {
        return e5();
      } finally {
        nn2 = t7;
      }
    } };
    return l3;
  };
}
function emit(e4, t6, ...n3) {
  if (e4.isUnmounted) return;
  const r4 = e4.vnode.props || t;
  let o5 = n3;
  const s4 = t6.startsWith("update:"), i5 = s4 && getModelModifiers(r4, t6.slice(7));
  let a4;
  i5 && (i5.trim && (o5 = n3.map((e5) => isString(e5) ? e5.trim() : e5)), i5.number && (o5 = n3.map(looseToNumber)));
  let l3 = r4[a4 = u(t6)] || r4[a4 = u(p(t6))];
  !l3 && s4 && (l3 = r4[a4 = u(d(t6))]), l3 && callWithAsyncErrorHandling(l3, e4, 6, o5);
  const c4 = r4[a4 + "Once"];
  if (c4) {
    if (e4.emitted) {
      if (e4.emitted[a4]) return;
    } else e4.emitted = {};
    e4.emitted[a4] = true, callWithAsyncErrorHandling(c4, e4, 6, o5);
  }
}
function normalizeEmitsOptions(e4, t6, n3 = false) {
  const r4 = n3 ? rn2 : t6.emitsCache, o5 = r4.get(e4);
  if (void 0 !== o5) return o5;
  const s4 = e4.emits;
  let i5 = {}, a4 = false;
  if (!isFunction(e4)) {
    const extendEmits = /* @__PURE__ */ __name((e5) => {
      const n4 = normalizeEmitsOptions(e5, t6, true);
      n4 && (a4 = true, n(i5, n4));
    }, "extendEmits");
    !n3 && t6.mixins.length && t6.mixins.forEach(extendEmits), e4.extends && extendEmits(e4.extends), e4.mixins && e4.mixins.forEach(extendEmits);
  }
  return s4 || a4 ? (i(s4) ? s4.forEach((e5) => i5[e5] = null) : n(i5, s4), isObject(e4) && r4.set(e4, i5), i5) : (isObject(e4) && r4.set(e4, null), null);
}
function isEmitListener(e4, t6) {
  return !(!e4 || !isOn(t6)) && (t6 = t6.slice(2).replace(/Once$/, ""), hasOwn(e4, t6[0].toLowerCase() + t6.slice(1)) || hasOwn(e4, d(t6)) || hasOwn(e4, t6));
}
function renderComponentRoot$1(e4) {
  const { type: t6, vnode: n3, proxy: r4, withProxy: o5, propsOptions: [s4], slots: i5, attrs: a4, emit: l3, render: c4, renderCache: u3, props: p4, data: d3, setupState: f3, ctx: g3, inheritAttrs: m3 } = e4, y4 = setCurrentRenderingInstance$1(e4);
  let v3, _3;
  try {
    if (4 & n3.shapeFlag) {
      const e5 = o5 || r4, t7 = e5;
      v3 = normalizeVNode$1(c4.call(t7, e5, u3, p4, f3, d3, g3)), _3 = a4;
    } else {
      const e5 = t6;
      0, v3 = normalizeVNode$1(e5.length > 1 ? e5(p4, { attrs: a4, slots: i5, emit: l3 }) : e5(p4, null)), _3 = t6.props ? a4 : getFunctionalFallthrough(a4);
    }
  } catch (t7) {
    hn.length = 0, handleError(t7, e4, 1), v3 = createVNode(dn2);
  }
  let b4 = v3;
  if (_3 && false !== m3) {
    const e5 = Object.keys(_3), { shapeFlag: t7 } = b4;
    e5.length && 7 & t7 && (s4 && e5.some(isModelListener) && (_3 = filterModelListeners(_3, s4)), b4 = cloneVNode(b4, _3, false, true));
  }
  return n3.dirs && (b4 = cloneVNode(b4, null, false, true), b4.dirs = b4.dirs ? b4.dirs.concat(n3.dirs) : n3.dirs), n3.transition && setTransitionHooks(b4, n3.transition), v3 = b4, setCurrentRenderingInstance$1(y4), v3;
}
function hasPropsChanged(e4, t6, n3) {
  const r4 = Object.keys(t6);
  if (r4.length !== Object.keys(e4).length) return true;
  for (let o5 = 0; o5 < r4.length; o5++) {
    const s4 = r4[o5];
    if (hasPropValueChanged(t6, e4, s4) && !isEmitListener(n3, s4)) return true;
  }
  return false;
}
function hasPropValueChanged(e4, t6, n3) {
  const r4 = e4[n3], o5 = t6[n3];
  return "style" === n3 && isObject(r4) && isObject(o5) ? !looseEqual(r4, o5) : r4 !== o5;
}
function updateHOCHostEl({ vnode: e4, parent: t6, suspense: n3 }, r4) {
  for (; t6; ) {
    const n4 = t6.subTree;
    if (n4.suspense && n4.suspense.activeBranch === e4 && (n4.suspense.vnode.el = n4.el = r4, e4 = n4), n4 !== e4) break;
    (e4 = t6.vnode).el = r4, t6 = t6.parent;
  }
  n3 && n3.activeBranch === e4 && (n3.vnode.el = r4);
}
function setFullProps(e4, t6, n3, r4) {
  const [o5, s4] = e4.propsOptions;
  let i5, a4 = false;
  if (t6) for (let l3 in t6) {
    if (s(l3)) continue;
    const c4 = t6[l3];
    let u3;
    o5 && hasOwn(o5, u3 = p(l3)) ? s4 && s4.includes(u3) ? (i5 || (i5 = {}))[u3] = c4 : n3[u3] = c4 : isEmitListener(e4.emitsOptions, l3) || l3 in r4 && c4 === r4[l3] || (r4[l3] = c4, a4 = true);
  }
  if (s4) {
    const t7 = toRaw(n3), r5 = i5 || t;
    for (let i6 = 0; i6 < s4.length; i6++) {
      const a5 = s4[i6];
      n3[a5] = resolvePropValue(o5, t7, a5, r5[a5], e4, !hasOwn(r5, a5));
    }
  }
  return a4;
}
function resolvePropValue(e4, t6, n3, r4, o5, s4) {
  const i5 = e4[n3];
  if (null != i5) {
    const e5 = hasOwn(i5, "default");
    if (e5 && void 0 === r4) {
      const e6 = i5.default;
      if (i5.type !== Function && !i5.skipFactory && isFunction(e6)) {
        const { propsDefaults: s5 } = o5;
        if (n3 in s5) r4 = s5[n3];
        else {
          const i6 = setCurrentInstance(o5);
          r4 = s5[n3] = e6.call(null, t6), i6();
        }
      } else r4 = e6;
      o5.ce && o5.ce._setProp(n3, r4);
    }
    i5[0] && (s4 && !e5 ? r4 = false : !i5[1] || "" !== r4 && r4 !== d(n3) || (r4 = true));
  }
  return r4;
}
function normalizePropsOptions(e4, t6, n3 = false) {
  const r4 = n3 ? sn2 : t6.propsCache, o5 = r4.get(e4);
  if (o5) return o5;
  const s4 = e4.props, i5 = {}, a4 = [];
  let l3 = false;
  if (!isFunction(e4)) {
    const extendProps = /* @__PURE__ */ __name((e5) => {
      l3 = true;
      const [n4, r5] = normalizePropsOptions(e5, t6, true);
      n(i5, n4), r5 && a4.push(...r5);
    }, "extendProps");
    !n3 && t6.mixins.length && t6.mixins.forEach(extendProps), e4.extends && extendProps(e4.extends), e4.mixins && e4.mixins.forEach(extendProps);
  }
  if (!s4 && !l3) return isObject(e4) && r4.set(e4, a), a;
  if (i(s4)) for (let e5 = 0; e5 < s4.length; e5++) {
    const t7 = p(s4[e5]);
    validatePropName(t7) && (i5[t7] = t);
  }
  else if (s4) for (const e5 in s4) {
    const t7 = p(e5);
    if (validatePropName(t7)) {
      const n4 = s4[e5], r5 = i5[t7] = i(n4) || isFunction(n4) ? { type: n4 } : n({}, n4), o6 = r5.type;
      let l4 = false, c5 = true;
      if (i(o6)) for (let e6 = 0; e6 < o6.length; ++e6) {
        const t8 = o6[e6], n5 = isFunction(t8) && t8.name;
        if ("Boolean" === n5) {
          l4 = true;
          break;
        }
        "String" === n5 && (c5 = false);
      }
      else l4 = isFunction(o6) && "Boolean" === o6.name;
      r5[0] = l4, r5[1] = c5, (l4 || hasOwn(r5, "default")) && a4.push(t7);
    }
  }
  const c4 = [i5, a4];
  return isObject(e4) && r4.set(e4, c4), c4;
}
function validatePropName(e4) {
  return "$" !== e4[0] && !s(e4);
}
function createRenderer(e4) {
  return baseCreateRenderer(e4);
}
function createHydrationRenderer(e4) {
  return baseCreateRenderer(e4, createHydrationFunctions);
}
function baseCreateRenderer(e4, t6) {
  getGlobalThis().__VUE__ = true;
  const { insert: n3, remove: r4, patchProp: o5, createElement: s4, createText: i5, createComment: a4, setText: l3, setElementText: c4, parentNode: u3, nextSibling: p4, setScopeId: d3 = NOOP, insertStaticContent: f3 } = e4, patch = /* @__PURE__ */ __name((e5, t7, n4, r5 = null, o6 = null, s5 = null, i6 = void 0, a5 = null, l4 = !!t7.dynamicChildren) => {
    if (e5 === t7) return;
    e5 && !isSameVNodeType(e5, t7) && (r5 = getNextHostNode(e5), unmount(e5, o6, s5, true), e5 = null), -2 === t7.patchFlag && (l4 = false, t7.dynamicChildren = null);
    const { type: c5, ref: u4, shapeFlag: p5 } = t7;
    switch (c5) {
      case pn2:
        processText(e5, t7, n4, r5);
        break;
      case dn2:
        processCommentNode(e5, t7, n4, r5);
        break;
      case fn:
        null == e5 && mountStaticNode(t7, n4, r5, i6);
        break;
      case un:
        processFragment(e5, t7, n4, r5, o6, s5, i6, a5, l4);
        break;
      default:
        1 & p5 ? processElement(e5, t7, n4, r5, o6, s5, i6, a5, l4) : 6 & p5 ? processComponent(e5, t7, n4, r5, o6, s5, i6, a5, l4) : (64 & p5 || 128 & p5) && c5.process(e5, t7, n4, r5, o6, s5, i6, a5, l4, m3);
    }
    null != u4 && o6 ? setRef(u4, e5 && e5.ref, s5, t7 || e5, !t7) : null == u4 && e5 && null != e5.ref && setRef(e5.ref, null, s5, e5, true);
  }, "patch"), processText = /* @__PURE__ */ __name((e5, t7, r5, o6) => {
    if (null == e5) n3(t7.el = i5(t7.children), r5, o6);
    else {
      const n4 = t7.el = e5.el;
      t7.children !== e5.children && l3(n4, t7.children);
    }
  }, "processText"), processCommentNode = /* @__PURE__ */ __name((e5, t7, r5, o6) => {
    null == e5 ? n3(t7.el = a4(t7.children || ""), r5, o6) : t7.el = e5.el;
  }, "processCommentNode"), mountStaticNode = /* @__PURE__ */ __name((e5, t7, n4, r5) => {
    [e5.el, e5.anchor] = f3(e5.children, t7, n4, r5, e5.el, e5.anchor);
  }, "mountStaticNode"), processElement = /* @__PURE__ */ __name((e5, t7, n4, r5, o6, s5, i6, a5, l4) => {
    if ("svg" === t7.type ? i6 = "svg" : "math" === t7.type && (i6 = "mathml"), null == e5) mountElement(t7, n4, r5, o6, s5, i6, a5, l4);
    else {
      const n5 = e5.el && e5.el._isVueCE ? e5.el : null;
      try {
        n5 && n5._beginPatch(), patchElement(e5, t7, o6, s5, i6, a5, l4);
      } finally {
        n5 && n5._endPatch();
      }
    }
  }, "processElement"), mountElement = /* @__PURE__ */ __name((e5, t7, r5, i6, a5, l4, u4, p5) => {
    let d4, f4;
    const { props: g4, shapeFlag: m4, transition: y5, dirs: v3 } = e5;
    if (d4 = e5.el = s4(e5.type, l4, g4 && g4.is, g4), 8 & m4 ? c4(d4, e5.children) : 16 & m4 && mountChildren(e5.children, d4, null, i6, a5, resolveChildrenNamespace(e5, l4), u4, p5), v3 && invokeDirectiveHook(e5, null, i6, "created"), setScopeId(d4, e5, e5.scopeId, u4, i6), g4) {
      for (const e6 in g4) "value" === e6 || s(e6) || o5(d4, e6, null, g4[e6], l4, i6);
      "value" in g4 && o5(d4, "value", null, g4.value, l4), (f4 = g4.onVnodeBeforeMount) && invokeVNodeHook(f4, i6, e5);
    }
    v3 && invokeDirectiveHook(e5, null, i6, "beforeMount");
    const _4 = needTransition(a5, y5);
    _4 && y5.beforeEnter(d4), n3(d4, t7, r5), ((f4 = g4 && g4.onVnodeMounted) || _4 || v3) && an2(() => {
      try {
        f4 && invokeVNodeHook(f4, i6, e5), _4 && y5.enter(d4), v3 && invokeDirectiveHook(e5, null, i6, "mounted");
      } finally {
      }
    }, a5);
  }, "mountElement"), setScopeId = /* @__PURE__ */ __name((e5, t7, n4, r5, o6) => {
    if (n4 && d3(e5, n4), r5) for (let t8 = 0; t8 < r5.length; t8++) d3(e5, r5[t8]);
    if (o6) {
      let n5 = o6.subTree;
      if (t7 === n5 || isSuspense(n5.type) && (n5.ssContent === t7 || n5.ssFallback === t7)) {
        const t8 = o6.vnode;
        setScopeId(e5, t8, t8.scopeId, t8.slotScopeIds, o6.parent);
      }
    }
  }, "setScopeId"), mountChildren = /* @__PURE__ */ __name((e5, t7, n4, r5, o6, s5, i6, a5, l4 = 0) => {
    for (let c5 = l4; c5 < e5.length; c5++) {
      const l5 = e5[c5] = a5 ? cloneIfMounted(e5[c5]) : normalizeVNode$1(e5[c5]);
      patch(null, l5, t7, n4, r5, o6, s5, i6, a5);
    }
  }, "mountChildren"), patchElement = /* @__PURE__ */ __name((e5, t7, n4, r5, s5, i6, a5) => {
    const l4 = t7.el = e5.el;
    let { patchFlag: u4, dynamicChildren: p5, dirs: d4 } = t7;
    u4 |= 16 & e5.patchFlag;
    const f4 = e5.props || t, g4 = t7.props || t;
    let m4;
    if (n4 && toggleRecurse(n4, false), (m4 = g4.onVnodeBeforeUpdate) && invokeVNodeHook(m4, n4, t7, e5), d4 && invokeDirectiveHook(t7, e5, n4, "beforeUpdate"), n4 && toggleRecurse(n4, true), (f4.innerHTML && null == g4.innerHTML || f4.textContent && null == g4.textContent) && c4(l4, ""), p5 ? patchBlockChildren(e5.dynamicChildren, p5, l4, n4, r5, resolveChildrenNamespace(t7, s5), i6) : a5 || patchChildren(e5, t7, l4, null, n4, r5, resolveChildrenNamespace(t7, s5), i6, false), u4 > 0) {
      if (16 & u4) patchProps(l4, f4, g4, n4, s5);
      else if (2 & u4 && f4.class !== g4.class && o5(l4, "class", null, g4.class, s5), 4 & u4 && o5(l4, "style", f4.style, g4.style, s5), 8 & u4) {
        const e6 = t7.dynamicProps;
        for (let t8 = 0; t8 < e6.length; t8++) {
          const r6 = e6[t8], i7 = f4[r6], a6 = g4[r6];
          a6 === i7 && "value" !== r6 || o5(l4, r6, i7, a6, s5, n4);
        }
      }
      1 & u4 && e5.children !== t7.children && c4(l4, t7.children);
    } else a5 || null != p5 || patchProps(l4, f4, g4, n4, s5);
    ((m4 = g4.onVnodeUpdated) || d4) && an2(() => {
      m4 && invokeVNodeHook(m4, n4, t7, e5), d4 && invokeDirectiveHook(t7, e5, n4, "updated");
    }, r5);
  }, "patchElement"), patchBlockChildren = /* @__PURE__ */ __name((e5, t7, n4, r5, o6, s5, i6) => {
    for (let a5 = 0; a5 < t7.length; a5++) {
      const l4 = e5[a5], c5 = t7[a5], p5 = l4.el && (l4.type === un || !isSameVNodeType(l4, c5) || 198 & l4.shapeFlag) ? u3(l4.el) : n4;
      patch(l4, c5, p5, null, r5, o6, s5, i6, true);
    }
  }, "patchBlockChildren"), patchProps = /* @__PURE__ */ __name((e5, t7, n4, r5, s5) => {
    if (t7 !== n4) {
      if (t7 !== t) for (const i6 in t7) s(i6) || i6 in n4 || o5(e5, i6, t7[i6], null, s5, r5);
      for (const i6 in n4) {
        if (s(i6)) continue;
        const a5 = n4[i6], l4 = t7[i6];
        a5 !== l4 && "value" !== i6 && o5(e5, i6, l4, a5, s5, r5);
      }
      "value" in n4 && o5(e5, "value", t7.value, n4.value, s5);
    }
  }, "patchProps"), processFragment = /* @__PURE__ */ __name((e5, t7, r5, o6, s5, a5, l4, c5, u4) => {
    const p5 = t7.el = e5 ? e5.el : i5(""), d4 = t7.anchor = e5 ? e5.anchor : i5("");
    let { patchFlag: f4, dynamicChildren: g4, slotScopeIds: m4 } = t7;
    m4 && (c5 = c5 ? c5.concat(m4) : m4), null == e5 ? (n3(p5, r5, o6), n3(d4, r5, o6), mountChildren(t7.children || [], r5, d4, s5, a5, l4, c5, u4)) : f4 > 0 && 64 & f4 && g4 && e5.dynamicChildren && e5.dynamicChildren.length === g4.length ? (patchBlockChildren(e5.dynamicChildren, g4, r5, s5, a5, l4, c5), (null != t7.key || s5 && t7 === s5.subTree) && traverseStaticChildren(e5, t7, true)) : patchChildren(e5, t7, r5, d4, s5, a5, l4, c5, u4);
  }, "processFragment"), processComponent = /* @__PURE__ */ __name((e5, t7, n4, r5, o6, s5, i6, a5, l4) => {
    t7.slotScopeIds = a5, null == e5 ? 512 & t7.shapeFlag ? o6.ctx.activate(t7, n4, r5, i6, l4) : mountComponent(t7, n4, r5, o6, s5, i6, l4) : updateComponent(e5, t7, l4);
  }, "processComponent"), mountComponent = /* @__PURE__ */ __name((e5, t7, n4, r5, o6, s5, i6) => {
    const a5 = e5.component = createComponentInstance$1(e5, r5, o6);
    if (isKeepAlive(e5) && (a5.ctx.renderer = m3), setupComponent$1(a5, false, i6), a5.asyncDep) {
      if (o6 && o6.registerDep(a5, setupRenderEffect, i6), !e5.el) {
        const r6 = a5.subTree = createVNode(dn2);
        processCommentNode(null, r6, t7, n4), e5.placeholder = r6.el;
      }
    } else setupRenderEffect(a5, e5, t7, n4, o6, s5, i6);
  }, "mountComponent"), updateComponent = /* @__PURE__ */ __name((e5, t7, n4) => {
    const r5 = t7.component = e5.component;
    if ((function(e6, t8, n5) {
      const { props: r6, children: o6, component: s5 } = e6, { props: i6, children: a5, patchFlag: l4 } = t8, c5 = s5.emitsOptions;
      if (t8.dirs || t8.transition) return true;
      if (!(n5 && l4 >= 0)) return !(!o6 && !a5 || a5 && a5.$stable) || r6 !== i6 && (r6 ? !i6 || hasPropsChanged(r6, i6, c5) : !!i6);
      if (1024 & l4) return true;
      if (16 & l4) return r6 ? hasPropsChanged(r6, i6, c5) : !!i6;
      if (8 & l4) {
        const e7 = t8.dynamicProps;
        for (let t9 = 0; t9 < e7.length; t9++) {
          const n6 = e7[t9];
          if (hasPropValueChanged(i6, r6, n6) && !isEmitListener(c5, n6)) return true;
        }
      }
      return false;
    })(e5, t7, n4)) {
      if (r5.asyncDep && !r5.asyncResolved) return void updateComponentPreRender(r5, t7, n4);
      r5.next = t7, r5.update();
    } else t7.el = e5.el, r5.vnode = t7;
  }, "updateComponent"), setupRenderEffect = /* @__PURE__ */ __name((e5, t7, n4, r5, o6, s5, i6) => {
    e5.scope.on();
    const a5 = e5.effect = new ReactiveEffect(() => {
      if (e5.isMounted) {
        let { next: t8, bu: n5, u: r6, parent: a6, vnode: c6 } = e5;
        {
          const n6 = locateNonHydratedAsyncRoot(e5);
          if (n6) return t8 && (t8.el = c6.el, updateComponentPreRender(e5, t8, i6)), void n6.asyncDep.then(() => {
            an2(() => {
              e5.isUnmounted || l4();
            }, o6);
          });
        }
        let p5, d4 = t8;
        toggleRecurse(e5, false), t8 ? (t8.el = c6.el, updateComponentPreRender(e5, t8, i6)) : t8 = c6, n5 && invokeArrayFns(n5), (p5 = t8.props && t8.props.onVnodeBeforeUpdate) && invokeVNodeHook(p5, a6, t8, c6), toggleRecurse(e5, true);
        const f4 = renderComponentRoot$1(e5), g4 = e5.subTree;
        e5.subTree = f4, patch(g4, f4, u3(g4.el), getNextHostNode(g4), e5, o6, s5), t8.el = f4.el, null === d4 && updateHOCHostEl(e5, f4.el), r6 && an2(r6, o6), (p5 = t8.props && t8.props.onVnodeUpdated) && an2(() => invokeVNodeHook(p5, a6, t8, c6), o6);
      } else {
        let i7;
        const { el: a6, props: l5 } = t7, { bm: c6, m: u4, parent: p5, root: d4, type: f4 } = e5, g4 = isAsyncWrapper(t7);
        if (toggleRecurse(e5, false), c6 && invokeArrayFns(c6), !g4 && (i7 = l5 && l5.onVnodeBeforeMount) && invokeVNodeHook(i7, p5, t7), toggleRecurse(e5, true), a6 && _3) {
          const hydrateSubTree = /* @__PURE__ */ __name(() => {
            e5.subTree = renderComponentRoot$1(e5), _3(a6, e5.subTree, e5, o6, null);
          }, "hydrateSubTree");
          g4 && f4.__asyncHydrate ? f4.__asyncHydrate(a6, e5, hydrateSubTree) : hydrateSubTree();
        } else {
          d4.ce && d4.ce._hasShadowRoot() && d4.ce._injectChildStyle(f4, e5.parent ? e5.parent.type : void 0);
          const i8 = e5.subTree = renderComponentRoot$1(e5);
          patch(null, i8, n4, r5, e5, o6, s5), t7.el = i8.el;
        }
        if (u4 && an2(u4, o6), !g4 && (i7 = l5 && l5.onVnodeMounted)) {
          const e6 = t7;
          an2(() => invokeVNodeHook(i7, p5, e6), o6);
        }
        (256 & t7.shapeFlag || p5 && isAsyncWrapper(p5.vnode) && 256 & p5.vnode.shapeFlag) && e5.a && an2(e5.a, o6), e5.isMounted = true, t7 = n4 = r5 = null;
      }
    });
    e5.scope.off();
    const l4 = e5.update = a5.run.bind(a5), c5 = e5.job = a5.runIfDirty.bind(a5);
    c5.i = e5, c5.id = e5.uid, a5.scheduler = () => queueJob(c5), toggleRecurse(e5, true), l4();
  }, "setupRenderEffect"), updateComponentPreRender = /* @__PURE__ */ __name((e5, t7, n4) => {
    t7.component = e5;
    const r5 = e5.vnode.props;
    e5.vnode = t7, e5.next = null, (function(e6, t8, n5, r6) {
      const { props: o6, attrs: s5, vnode: { patchFlag: i6 } } = e6, a5 = toRaw(o6), [l4] = e6.propsOptions;
      let c5 = false;
      if (!(r6 || i6 > 0) || 16 & i6) {
        let r7;
        setFullProps(e6, t8, o6, s5) && (c5 = true);
        for (const s6 in a5) t8 && (hasOwn(t8, s6) || (r7 = d(s6)) !== s6 && hasOwn(t8, r7)) || (l4 ? !n5 || void 0 === n5[s6] && void 0 === n5[r7] || (o6[s6] = resolvePropValue(l4, a5, s6, void 0, e6, true)) : delete o6[s6]);
        if (s5 !== a5) for (const e7 in s5) t8 && hasOwn(t8, e7) || (delete s5[e7], c5 = true);
      } else if (8 & i6) {
        const n6 = e6.vnode.dynamicProps;
        for (let r7 = 0; r7 < n6.length; r7++) {
          let i7 = n6[r7];
          if (isEmitListener(e6.emitsOptions, i7)) continue;
          const u4 = t8[i7];
          if (l4) if (hasOwn(s5, i7)) u4 !== s5[i7] && (s5[i7] = u4, c5 = true);
          else {
            const t9 = p(i7);
            o6[t9] = resolvePropValue(l4, a5, t9, u4, e6, false);
          }
          else u4 !== s5[i7] && (s5[i7] = u4, c5 = true);
        }
      }
      c5 && trigger(e6.attrs, "set", "");
    })(e5, t7.props, r5, n4), ((e6, t8, n5) => {
      const { vnode: r6, slots: o6 } = e6;
      let s5 = true, i6 = t;
      if (32 & r6.shapeFlag) {
        const e7 = t8._;
        e7 ? n5 && 1 === e7 ? s5 = false : assignSlots(o6, t8, n5) : (s5 = !t8.$stable, normalizeObjectSlots(t8, o6)), i6 = t8;
      } else t8 && (normalizeVNodeSlots(e6, t8), i6 = { default: 1 });
      if (s5) for (const e7 in o6) isInternalKey(e7) || null != i6[e7] || delete o6[e7];
    })(e5, t7.children, n4), pauseTracking(), flushPreFlushCbs(e5), resetTracking();
  }, "updateComponentPreRender"), patchChildren = /* @__PURE__ */ __name((e5, t7, n4, r5, o6, s5, i6, a5, l4 = false) => {
    const u4 = e5 && e5.children, p5 = e5 ? e5.shapeFlag : 0, d4 = t7.children, { patchFlag: f4, shapeFlag: g4 } = t7;
    if (f4 > 0) {
      if (128 & f4) return void patchKeyedChildren(u4, d4, n4, r5, o6, s5, i6, a5, l4);
      if (256 & f4) return void patchUnkeyedChildren(u4, d4, n4, r5, o6, s5, i6, a5, l4);
    }
    8 & g4 ? (16 & p5 && unmountChildren(u4, o6, s5), d4 !== u4 && c4(n4, d4)) : 16 & p5 ? 16 & g4 ? patchKeyedChildren(u4, d4, n4, r5, o6, s5, i6, a5, l4) : unmountChildren(u4, o6, s5, true) : (8 & p5 && c4(n4, ""), 16 & g4 && mountChildren(d4, n4, r5, o6, s5, i6, a5, l4));
  }, "patchChildren"), patchUnkeyedChildren = /* @__PURE__ */ __name((e5, t7, n4, r5, o6, s5, i6, a5, l4) => {
    t7 = t7 || a;
    const c5 = (e5 = e5 || a).length, u4 = t7.length, p5 = Math.min(c5, u4);
    let d4;
    for (d4 = 0; d4 < p5; d4++) {
      const r6 = t7[d4] = l4 ? cloneIfMounted(t7[d4]) : normalizeVNode$1(t7[d4]);
      patch(e5[d4], r6, n4, null, o6, s5, i6, a5, l4);
    }
    c5 > u4 ? unmountChildren(e5, o6, s5, true, false, p5) : mountChildren(t7, n4, r5, o6, s5, i6, a5, l4, p5);
  }, "patchUnkeyedChildren"), patchKeyedChildren = /* @__PURE__ */ __name((e5, t7, n4, r5, o6, s5, i6, a5, l4) => {
    let c5 = 0;
    const u4 = t7.length;
    let p5 = e5.length - 1, d4 = u4 - 1;
    for (; c5 <= p5 && c5 <= d4; ) {
      const r6 = e5[c5], u5 = t7[c5] = l4 ? cloneIfMounted(t7[c5]) : normalizeVNode$1(t7[c5]);
      if (!isSameVNodeType(r6, u5)) break;
      patch(r6, u5, n4, null, o6, s5, i6, a5, l4), c5++;
    }
    for (; c5 <= p5 && c5 <= d4; ) {
      const r6 = e5[p5], c6 = t7[d4] = l4 ? cloneIfMounted(t7[d4]) : normalizeVNode$1(t7[d4]);
      if (!isSameVNodeType(r6, c6)) break;
      patch(r6, c6, n4, null, o6, s5, i6, a5, l4), p5--, d4--;
    }
    if (c5 > p5) {
      if (c5 <= d4) {
        const e6 = d4 + 1, p6 = e6 < u4 ? t7[e6].el : r5;
        for (; c5 <= d4; ) patch(null, t7[c5] = l4 ? cloneIfMounted(t7[c5]) : normalizeVNode$1(t7[c5]), n4, p6, o6, s5, i6, a5, l4), c5++;
      }
    } else if (c5 > d4) for (; c5 <= p5; ) unmount(e5[c5], o6, s5, true), c5++;
    else {
      const f4 = c5, g4 = c5, m4 = /* @__PURE__ */ new Map();
      for (c5 = g4; c5 <= d4; c5++) {
        const e6 = t7[c5] = l4 ? cloneIfMounted(t7[c5]) : normalizeVNode$1(t7[c5]);
        null != e6.key && m4.set(e6.key, c5);
      }
      let y5, v3 = 0;
      const _4 = d4 - g4 + 1;
      let b4 = false, k4 = 0;
      const C3 = new Array(_4);
      for (c5 = 0; c5 < _4; c5++) C3[c5] = 0;
      for (c5 = f4; c5 <= p5; c5++) {
        const r6 = e5[c5];
        if (v3 >= _4) {
          unmount(r6, o6, s5, true);
          continue;
        }
        let u5;
        if (null != r6.key) u5 = m4.get(r6.key);
        else for (y5 = g4; y5 <= d4; y5++) if (0 === C3[y5 - g4] && isSameVNodeType(r6, t7[y5])) {
          u5 = y5;
          break;
        }
        void 0 === u5 ? unmount(r6, o6, s5, true) : (C3[u5 - g4] = c5 + 1, u5 >= k4 ? k4 = u5 : b4 = true, patch(r6, t7[u5], n4, null, o6, s5, i6, a5, l4), v3++);
      }
      const S3 = b4 ? (function(e6) {
        const t8 = e6.slice(), n5 = [0];
        let r6, o7, s6, i7, a6;
        const l5 = e6.length;
        for (r6 = 0; r6 < l5; r6++) {
          const l6 = e6[r6];
          if (0 !== l6) {
            if (o7 = n5[n5.length - 1], e6[o7] < l6) {
              t8[r6] = o7, n5.push(r6);
              continue;
            }
            for (s6 = 0, i7 = n5.length - 1; s6 < i7; ) a6 = s6 + i7 >> 1, e6[n5[a6]] < l6 ? s6 = a6 + 1 : i7 = a6;
            l6 < e6[n5[s6]] && (s6 > 0 && (t8[r6] = n5[s6 - 1]), n5[s6] = r6);
          }
        }
        s6 = n5.length, i7 = n5[s6 - 1];
        for (; s6-- > 0; ) n5[s6] = i7, i7 = t8[i7];
        return n5;
      })(C3) : a;
      for (y5 = S3.length - 1, c5 = _4 - 1; c5 >= 0; c5--) {
        const e6 = g4 + c5, p6 = t7[e6], d5 = t7[e6 + 1], f5 = e6 + 1 < u4 ? d5.el || resolveAsyncComponentPlaceholder(d5) : r5;
        0 === C3[c5] ? patch(null, p6, n4, f5, o6, s5, i6, a5, l4) : b4 && (y5 < 0 || c5 !== S3[y5] ? move(p6, n4, f5, 2) : y5--);
      }
    }
  }, "patchKeyedChildren"), move = /* @__PURE__ */ __name((e5, t7, o6, s5, i6 = null) => {
    const { el: a5, type: l4, transition: c5, children: u4, shapeFlag: d4 } = e5;
    if (6 & d4) return void move(e5.component.subTree, t7, o6, s5);
    if (128 & d4) return void e5.suspense.move(t7, o6, s5);
    if (64 & d4) return void l4.move(e5, t7, o6, m3);
    if (l4 === un) {
      n3(a5, t7, o6);
      for (let e6 = 0; e6 < u4.length; e6++) move(u4[e6], t7, o6, s5);
      return void n3(e5.anchor, t7, o6);
    }
    if (l4 === fn) return void (({ el: e6, anchor: t8 }, r5, o7) => {
      let s6;
      for (; e6 && e6 !== t8; ) s6 = p4(e6), n3(e6, r5, o7), e6 = s6;
      n3(t8, r5, o7);
    })(e5, t7, o6);
    if (2 !== s5 && 1 & d4 && c5) if (0 === s5) c5.beforeEnter(a5), n3(a5, t7, o6), an2(() => c5.enter(a5), i6);
    else {
      const { leave: s6, delayLeave: i7, afterLeave: l5 } = c5, remove22 = /* @__PURE__ */ __name(() => {
        e5.ctx.isUnmounted ? r4(a5) : n3(a5, t7, o6);
      }, "remove2"), performLeave = /* @__PURE__ */ __name(() => {
        a5._isLeaving && a5[At2](true), s6(a5, () => {
          remove22(), l5 && l5();
        });
      }, "performLeave");
      i7 ? i7(a5, remove22, performLeave) : performLeave();
    }
    else n3(a5, t7, o6);
  }, "move"), unmount = /* @__PURE__ */ __name((e5, t7, n4, r5 = false, o6 = false) => {
    const { type: s5, props: i6, ref: a5, children: l4, dynamicChildren: c5, shapeFlag: u4, patchFlag: p5, dirs: d4, cacheIndex: f4, memo: g4 } = e5;
    if (-2 === p5 && (o6 = false), null != a5 && (pauseTracking(), setRef(a5, null, n4, e5, true), resetTracking()), null != f4 && (t7.renderCache[f4] = void 0), 256 & u4) return void t7.ctx.deactivate(e5);
    const y5 = 1 & u4 && d4, v3 = !isAsyncWrapper(e5);
    let _4;
    if (v3 && (_4 = i6 && i6.onVnodeBeforeUnmount) && invokeVNodeHook(_4, t7, e5), 6 & u4) unmountComponent(e5.component, n4, r5);
    else {
      if (128 & u4) return void e5.suspense.unmount(n4, r5);
      y5 && invokeDirectiveHook(e5, null, t7, "beforeUnmount"), 64 & u4 ? e5.type.remove(e5, t7, n4, m3, r5) : c5 && !c5.hasOnce && (s5 !== un || p5 > 0 && 64 & p5) ? unmountChildren(c5, t7, n4, false, true) : (s5 === un && 384 & p5 || !o6 && 16 & u4) && unmountChildren(l4, t7, n4), r5 && remove2(e5);
    }
    const b4 = null != g4 && null == f4;
    (v3 && (_4 = i6 && i6.onVnodeUnmounted) || y5 || b4) && an2(() => {
      _4 && invokeVNodeHook(_4, t7, e5), y5 && invokeDirectiveHook(e5, null, t7, "unmounted"), b4 && (e5.el = null);
    }, n4);
  }, "unmount"), remove2 = /* @__PURE__ */ __name((e5) => {
    const { type: t7, el: n4, anchor: o6, transition: s5 } = e5;
    if (t7 === un) return void removeFragment(n4, o6);
    if (t7 === fn) return void (({ el: e6, anchor: t8 }) => {
      let n5;
      for (; e6 && e6 !== t8; ) n5 = p4(e6), r4(e6), e6 = n5;
      r4(t8);
    })(e5);
    const performRemove = /* @__PURE__ */ __name(() => {
      r4(n4), s5 && !s5.persisted && s5.afterLeave && s5.afterLeave();
    }, "performRemove");
    if (1 & e5.shapeFlag && s5 && !s5.persisted) {
      const { leave: t8, delayLeave: r5 } = s5, performLeave = /* @__PURE__ */ __name(() => t8(n4, performRemove), "performLeave");
      r5 ? r5(e5.el, performRemove, performLeave) : performLeave();
    } else performRemove();
  }, "remove"), removeFragment = /* @__PURE__ */ __name((e5, t7) => {
    let n4;
    for (; e5 !== t7; ) n4 = p4(e5), r4(e5), e5 = n4;
    r4(t7);
  }, "removeFragment"), unmountComponent = /* @__PURE__ */ __name((e5, t7, n4) => {
    const { bum: r5, scope: o6, job: s5, subTree: i6, um: a5, m: l4, a: c5 } = e5;
    invalidateMount(l4), invalidateMount(c5), r5 && invokeArrayFns(r5), o6.stop(), s5 && (s5.flags |= 8, unmount(i6, e5, t7, n4)), a5 && an2(a5, t7), an2(() => {
      e5.isUnmounted = true;
    }, t7);
  }, "unmountComponent"), unmountChildren = /* @__PURE__ */ __name((e5, t7, n4, r5 = false, o6 = false, s5 = 0) => {
    for (let i6 = s5; i6 < e5.length; i6++) unmount(e5[i6], t7, n4, r5, o6);
  }, "unmountChildren"), getNextHostNode = /* @__PURE__ */ __name((e5) => {
    if (6 & e5.shapeFlag) return getNextHostNode(e5.component.subTree);
    if (128 & e5.shapeFlag) return e5.suspense.next();
    const t7 = p4(e5.anchor || e5.el), n4 = t7 && t7[Rt2];
    return n4 ? p4(n4) : t7;
  }, "getNextHostNode");
  let g3 = false;
  const render2 = /* @__PURE__ */ __name((e5, t7, n4) => {
    let r5;
    null == e5 ? t7._vnode && (unmount(t7._vnode, null, null, true), r5 = t7._vnode.component) : patch(t7._vnode || null, e5, t7, null, null, null, n4), t7._vnode = e5, g3 || (g3 = true, flushPreFlushCbs(r5), flushPostFlushCbs(), g3 = false);
  }, "render"), m3 = { p: patch, um: unmount, m: move, r: remove2, mt: mountComponent, mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, n: getNextHostNode, o: e4 };
  let y4, _3;
  return t6 && ([y4, _3] = t6(m3)), { render: render2, hydrate: y4, createApp: createAppAPI(render2, y4) };
}
function resolveChildrenNamespace({ type: e4, props: t6 }, n3) {
  return "svg" === n3 && "foreignObject" === e4 || "mathml" === n3 && "annotation-xml" === e4 && t6 && t6.encoding && t6.encoding.includes("html") ? void 0 : n3;
}
function toggleRecurse({ effect: e4, job: t6 }, n3) {
  n3 ? (e4.flags |= 32, t6.flags |= 4) : (e4.flags &= -33, t6.flags &= -5);
}
function needTransition(e4, t6) {
  return (!e4 || e4 && !e4.pendingBranch) && t6 && !t6.persisted;
}
function traverseStaticChildren(e4, t6, n3 = false) {
  const r4 = e4.children, o5 = t6.children;
  if (i(r4) && i(o5)) for (let e5 = 0; e5 < r4.length; e5++) {
    const t7 = r4[e5];
    let s4 = o5[e5];
    1 & s4.shapeFlag && !s4.dynamicChildren && ((s4.patchFlag <= 0 || 32 === s4.patchFlag) && (s4 = o5[e5] = cloneIfMounted(o5[e5]), s4.el = t7.el), n3 || -2 === s4.patchFlag || traverseStaticChildren(t7, s4)), s4.type === pn2 && (-1 === s4.patchFlag && (s4 = o5[e5] = cloneIfMounted(s4)), s4.el = t7.el), s4.type !== dn2 || s4.el || (s4.el = t7.el);
  }
}
function locateNonHydratedAsyncRoot(e4) {
  const t6 = e4.subTree.component;
  if (t6) return t6.asyncDep && !t6.asyncResolved ? t6 : locateNonHydratedAsyncRoot(t6);
}
function invalidateMount(e4) {
  if (e4) for (let t6 = 0; t6 < e4.length; t6++) e4[t6].flags |= 8;
}
function resolveAsyncComponentPlaceholder(e4) {
  if (e4.placeholder) return e4.placeholder;
  const t6 = e4.component;
  return t6 ? resolveAsyncComponentPlaceholder(t6.subTree) : null;
}
function triggerEvent(e4, t6) {
  const n3 = e4.props && e4.props[t6];
  isFunction(n3) && n3();
}
function createSuspenseBoundary(e4, t6, n3, r4, o5, s4, i5, a4, l3, c4, u3 = false) {
  const { p: p4, m: d3, um: f3, n: g3, o: { parentNode: m3, remove: y4 } } = c4;
  let v3;
  const _3 = (function(e5) {
    const t7 = e5.props && e5.props.suspensible;
    return null != t7 && false !== t7;
  })(e4);
  _3 && t6 && t6.pendingBranch && (v3 = t6.pendingId, t6.deps++);
  const b4 = e4.props ? toNumber(e4.props.timeout) : void 0, k4 = s4, C3 = { vnode: e4, parent: t6, parentComponent: n3, namespace: i5, container: r4, hiddenContainer: o5, deps: 0, pendingId: ln2++, timeout: "number" == typeof b4 ? b4 : -1, activeBranch: null, isFallbackMountPending: false, pendingBranch: null, isInFallback: !u3, isHydrating: u3, isUnmounted: false, effects: [], resolve(e5 = false, n4 = false) {
    const { vnode: r5, activeBranch: o6, pendingBranch: i6, pendingId: a5, effects: l4, parentComponent: c5, container: u4, isInFallback: p5 } = C3;
    let y5 = false;
    if (C3.isHydrating) C3.isHydrating = false;
    else if (!e5) {
      y5 = o6 && i6.transition && "out-in" === i6.transition.mode;
      let e6 = false;
      y5 && (o6.transition.afterLeave = () => {
        a5 === C3.pendingId && (d3(i6, u4, s4 !== k4 || e6 ? s4 : g3(o6), 0), queuePostFlushCb(l4), p5 && r5.ssFallback && (r5.ssFallback.el = null));
      }), o6 && !C3.isFallbackMountPending && (m3(o6.el) === u4 && (s4 = g3(o6), e6 = true), f3(o6, c5, C3, true), !y5 && p5 && r5.ssFallback && an2(() => r5.ssFallback.el = null, C3)), y5 || d3(i6, u4, s4, 0);
    }
    C3.isFallbackMountPending = false, setActiveBranch(C3, i6), C3.pendingBranch = null, C3.isInFallback = false;
    let b5 = C3.parent, S3 = false;
    for (; b5; ) {
      if (b5.pendingBranch) {
        b5.effects.push(...l4), S3 = true;
        break;
      }
      b5 = b5.parent;
    }
    S3 || y5 || queuePostFlushCb(l4), C3.effects = [], _3 && t6 && t6.pendingBranch && v3 === t6.pendingId && (t6.deps--, 0 !== t6.deps || n4 || t6.resolve()), triggerEvent(r5, "onResolve");
  }, fallback(e5) {
    if (!C3.pendingBranch) return;
    const { vnode: t7, activeBranch: n4, parentComponent: r5, container: o6, namespace: s5 } = C3;
    triggerEvent(t7, "onFallback");
    const i6 = g3(n4), mountFallback = /* @__PURE__ */ __name(() => {
      C3.isFallbackMountPending = false, C3.isInFallback && (p4(null, e5, o6, i6, r5, null, s5, a4, l3), setActiveBranch(C3, e5));
    }, "mountFallback"), c5 = e5.transition && "out-in" === e5.transition.mode;
    c5 && (C3.isFallbackMountPending = true, n4.transition.afterLeave = mountFallback), C3.isInFallback = true, f3(n4, r5, null, true), c5 || mountFallback();
  }, move(e5, t7, n4) {
    C3.activeBranch && d3(C3.activeBranch, e5, t7, n4), C3.container = e5;
  }, next: /* @__PURE__ */ __name(() => C3.activeBranch && g3(C3.activeBranch), "next"), registerDep(e5, t7, n4) {
    const r5 = !!C3.pendingBranch;
    r5 && C3.deps++;
    const o6 = e5.vnode.el;
    e5.asyncDep.catch((t8) => {
      handleError(t8, e5, 0);
    }).then((s5) => {
      if (e5.isUnmounted || C3.isUnmounted || C3.pendingId !== e5.suspenseId) return;
      unsetCurrentInstance(), e5.asyncResolved = true;
      const { vnode: a5 } = e5;
      handleSetupResult(e5, s5, false), o6 && (a5.el = o6);
      const l4 = !o6 && e5.subTree.el;
      t7(e5, a5, m3(o6 || e5.subTree.el), o6 ? null : g3(e5.subTree), C3, i5, n4), l4 && (a5.placeholder = null, y4(l4)), updateHOCHostEl(e5, a5.el), r5 && 0 === --C3.deps && C3.resolve();
    });
  }, unmount(e5, t7) {
    C3.isUnmounted = true, C3.activeBranch && f3(C3.activeBranch, n3, e5, t7), C3.pendingBranch && f3(C3.pendingBranch, n3, e5, t7);
  } };
  return C3;
}
function normalizeSuspenseSlot(e4) {
  let t6;
  if (isFunction(e4)) {
    const n3 = mn && e4._c;
    n3 && (e4._d = false, openBlock()), e4 = e4(), n3 && (e4._d = true, t6 = gn, closeBlock());
  }
  if (i(e4)) {
    const t7 = (function(e5) {
      let t8;
      for (let n3 = 0; n3 < e5.length; n3++) {
        const r4 = e5[n3];
        if (!isVNode$2(r4)) return;
        if (r4.type !== dn2 || "v-if" === r4.children) {
          if (t8) return;
          t8 = r4;
        }
      }
      return t8;
    })(e4);
    e4 = t7;
  }
  return e4 = normalizeVNode$1(e4), t6 && !e4.dynamicChildren && (e4.dynamicChildren = t6.filter((t7) => t7 !== e4)), e4;
}
function queueEffectWithSuspense(e4, t6) {
  t6 && t6.pendingBranch ? i(e4) ? t6.effects.push(...e4) : t6.effects.push(e4) : queuePostFlushCb(e4);
}
function setActiveBranch(e4, t6) {
  e4.activeBranch = t6;
  const { vnode: n3, parentComponent: r4 } = e4;
  let o5 = t6.el;
  for (; !o5 && t6.component; ) o5 = (t6 = t6.component.subTree).el;
  n3.el = o5, r4 && r4.subTree === n3 && (r4.vnode.el = o5, updateHOCHostEl(r4, o5));
}
function openBlock(e4 = false) {
  hn.push(gn = e4 ? null : []);
}
function closeBlock() {
  hn.pop(), gn = hn[hn.length - 1] || null;
}
function setBlockTracking(e4, t6 = false) {
  mn += e4, e4 < 0 && gn && t6 && (gn.hasOnce = true);
}
function setupBlock(e4) {
  return e4.dynamicChildren = mn > 0 ? gn || a : null, closeBlock(), mn > 0 && gn && gn.push(e4), e4;
}
function createBlock(e4, t6, n3, r4, o5) {
  return setupBlock(createVNode(e4, t6, n3, r4, o5, true));
}
function isVNode$2(e4) {
  return !!e4 && true === e4.__v_isVNode;
}
function isSameVNodeType(e4, t6) {
  return e4.type === t6.type && e4.key === t6.key;
}
function createBaseVNode(e4, t6 = null, n3 = null, r4 = 0, o5 = null, s4 = e4 === un ? 0 : 1, i5 = false, a4 = false) {
  const l3 = { __v_isVNode: true, __v_skip: true, type: e4, props: t6, key: t6 && normalizeKey(t6), ref: t6 && normalizeRef(t6), scopeId: Ct2, slotScopeIds: null, children: n3, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: s4, patchFlag: r4, dynamicProps: o5, dynamicChildren: null, appContext: null, ctx: kt2 };
  return a4 ? (normalizeChildren(l3, n3), 128 & s4 && e4.normalize(l3)) : n3 && (l3.shapeFlag |= isString(n3) ? 8 : 16), mn > 0 && !i5 && gn && (l3.patchFlag > 0 || 6 & s4) && 32 !== l3.patchFlag && gn.push(l3), l3;
}
function guardReactiveProps(e4) {
  return e4 ? isProxy(e4) || isInternalObject(e4) ? n({}, e4) : e4 : null;
}
function cloneVNode(e4, t6, n3 = false, r4 = false) {
  const { props: o5, ref: s4, patchFlag: i5, children: a4, transition: l3 } = e4, c4 = t6 ? mergeProps(o5 || {}, t6) : o5, u3 = { __v_isVNode: true, __v_skip: true, type: e4.type, props: c4, key: c4 && normalizeKey(c4), ref: t6 && t6.ref ? n3 && s4 ? i(s4) ? s4.concat(normalizeRef(t6)) : [s4, normalizeRef(t6)] : normalizeRef(t6) : s4, scopeId: e4.scopeId, slotScopeIds: e4.slotScopeIds, children: a4, target: e4.target, targetStart: e4.targetStart, targetAnchor: e4.targetAnchor, staticCount: e4.staticCount, shapeFlag: e4.shapeFlag, patchFlag: t6 && e4.type !== un ? -1 === i5 ? 16 : 16 | i5 : i5, dynamicProps: e4.dynamicProps, dynamicChildren: e4.dynamicChildren, appContext: e4.appContext, dirs: e4.dirs, transition: l3, component: e4.component, suspense: e4.suspense, ssContent: e4.ssContent && cloneVNode(e4.ssContent), ssFallback: e4.ssFallback && cloneVNode(e4.ssFallback), placeholder: e4.placeholder, el: e4.el, anchor: e4.anchor, ctx: e4.ctx, ce: e4.ce };
  return l3 && r4 && setTransitionHooks(u3, l3.clone(u3)), u3;
}
function createTextVNode(e4 = " ", t6 = 0) {
  return createVNode(pn2, null, e4, t6);
}
function createCommentVNode(e4 = "", t6 = false) {
  return t6 ? (openBlock(), createBlock(dn2, null, e4)) : createVNode(dn2, null, e4);
}
function normalizeVNode$1(e4) {
  return null == e4 || "boolean" == typeof e4 ? createVNode(dn2) : i(e4) ? createVNode(un, null, e4.slice()) : isVNode$2(e4) ? cloneIfMounted(e4) : createVNode(pn2, null, String(e4));
}
function cloneIfMounted(e4) {
  return null === e4.el && -1 !== e4.patchFlag || e4.memo ? e4 : cloneVNode(e4);
}
function normalizeChildren(e4, t6) {
  let n3 = 0;
  const { shapeFlag: r4 } = e4;
  if (null == t6) t6 = null;
  else if (i(t6)) n3 = 16;
  else if ("object" == typeof t6) {
    if (65 & r4) {
      const n4 = t6.default;
      return void (n4 && (n4._c && (n4._d = false), normalizeChildren(e4, n4()), n4._c && (n4._d = true)));
    }
    {
      n3 = 32;
      const r5 = t6._;
      r5 || isInternalObject(t6) ? 3 === r5 && kt2 && (1 === kt2.slots._ ? t6._ = 1 : (t6._ = 2, e4.patchFlag |= 1024)) : t6._ctx = kt2;
    }
  } else isFunction(t6) ? (t6 = { default: t6, _ctx: kt2 }, n3 = 32) : (t6 = String(t6), 64 & r4 ? (n3 = 16, t6 = [createTextVNode(t6)]) : n3 = 8);
  e4.children = t6, e4.shapeFlag |= n3;
}
function mergeProps(...e4) {
  const t6 = {};
  for (let n3 = 0; n3 < e4.length; n3++) {
    const r4 = e4[n3];
    for (const e5 in r4) if ("class" === e5) t6.class !== r4.class && (t6.class = normalizeClass([t6.class, r4.class]));
    else if ("style" === e5) t6.style = normalizeStyle([t6.style, r4.style]);
    else if (isOn(e5)) {
      const n4 = t6[e5], o5 = r4[e5];
      !o5 || n4 === o5 || i(n4) && n4.includes(o5) ? null != o5 || null != n4 || isModelListener(e5) || (t6[e5] = o5) : t6[e5] = n4 ? [].concat(n4, o5) : o5;
    } else "" !== e5 && (t6[e5] = r4[e5]);
  }
  return t6;
}
function invokeVNodeHook(e4, t6, n3, r4 = null) {
  callWithAsyncErrorHandling(e4, t6, 7, [n3, r4]);
}
function createComponentInstance$1(e4, t6, n3) {
  const r4 = e4.type, o5 = (t6 ? t6.appContext : e4.appContext) || yn, s4 = { uid: vn++, vnode: e4, type: r4, parent: t6, appContext: o5, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new EffectScope(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t6 ? t6.provides : Object.create(o5.provides), ids: t6 ? t6.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: normalizePropsOptions(r4, o5), emitsOptions: normalizeEmitsOptions(r4, o5), emit: null, emitted: null, propsDefaults: t, inheritAttrs: r4.inheritAttrs, ctx: t, data: t, props: t, attrs: t, slots: t, refs: t, setupState: t, setupContext: null, suspense: n3, suspenseId: n3 ? n3.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return s4.ctx = { _: s4 }, s4.root = t6 ? t6.root : s4, s4.emit = emit.bind(null, s4), e4.ce && e4.ce(s4), s4;
}
function isStatefulComponent(e4) {
  return 4 & e4.vnode.shapeFlag;
}
function setupComponent$1(e4, t6 = false, n3 = false) {
  t6 && kn(t6);
  const { props: r4, children: o5 } = e4.vnode, s4 = isStatefulComponent(e4);
  !(function(e5, t7, n4, r5 = false) {
    const o6 = {}, s5 = createInternalObject();
    e5.propsDefaults = /* @__PURE__ */ Object.create(null), setFullProps(e5, t7, o6, s5);
    for (const t8 in e5.propsOptions[0]) t8 in o6 || (o6[t8] = void 0);
    n4 ? e5.props = r5 ? o6 : shallowReactive(o6) : e5.type.props ? e5.props = o6 : e5.props = s5, e5.attrs = s5;
  })(e4, r4, s4, t6), ((e5, t7, n4) => {
    const r5 = e5.slots = createInternalObject();
    if (32 & e5.vnode.shapeFlag) {
      const e6 = t7._;
      e6 ? (assignSlots(r5, t7, n4), n4 && def(r5, "_", e6, true)) : normalizeObjectSlots(t7, r5);
    } else t7 && normalizeVNodeSlots(e5, t7);
  })(e4, o5, n3 || t6);
  const i5 = s4 ? (function(e5, t7) {
    const n4 = e5.type;
    e5.accessCache = /* @__PURE__ */ Object.create(null), e5.proxy = new Proxy(e5.ctx, Yt2);
    const { setup: r5 } = n4;
    if (r5) {
      pauseTracking();
      const n5 = e5.setupContext = r5.length > 1 ? createSetupContext(e5) : null, o6 = setCurrentInstance(e5), s5 = callWithErrorHandling(r5, e5, 0, [e5.props, n5]), i6 = isPromise(s5);
      if (resetTracking(), o6(), !i6 && !e5.sp || isAsyncWrapper(e5) || markAsyncBoundary(e5), i6) {
        if (s5.then(unsetCurrentInstance, unsetCurrentInstance), t7) return s5.then((n6) => {
          handleSetupResult(e5, n6, t7);
        }).catch((t8) => {
          handleError(t8, e5, 0);
        });
        e5.asyncDep = s5;
      } else handleSetupResult(e5, s5, t7);
    } else finishComponentSetup(e5, t7);
  })(e4, t6) : void 0;
  return t6 && kn(false), i5;
}
function handleSetupResult(e4, t6, n3) {
  isFunction(t6) ? e4.type.__ssrInlineRender ? e4.ssrRender = t6 : e4.render = t6 : isObject(t6) && (e4.setupState = proxyRefs(t6)), finishComponentSetup(e4, n3);
}
function finishComponentSetup(e4, t6, n3) {
  const r4 = e4.type;
  if (!e4.render) {
    if (!t6 && Cn && !r4.render) {
      const t7 = r4.template || resolveMergedOptions(e4).template;
      if (t7) {
        const { isCustomElement: n4, compilerOptions: o5 } = e4.appContext.config, { delimiters: s4, compilerOptions: i5 } = r4, a4 = n(n({ isCustomElement: n4, delimiters: s4 }, o5), i5);
        r4.render = Cn(t7, a4);
      }
    }
    e4.render = r4.render || NOOP, Sn && Sn(e4);
  }
  {
    const t7 = setCurrentInstance(e4);
    pauseTracking();
    try {
      applyOptions(e4);
    } finally {
      resetTracking(), t7();
    }
  }
}
function createSetupContext(e4) {
  const expose = /* @__PURE__ */ __name((t6) => {
    e4.exposed = t6 || {};
  }, "expose");
  return { attrs: new Proxy(e4.attrs, Rn), slots: e4.slots, emit: e4.emit, expose };
}
function getComponentPublicInstance(e4) {
  return e4.exposed ? e4.exposeProxy || (e4.exposeProxy = new Proxy(proxyRefs(markRaw(e4.exposed)), { get: /* @__PURE__ */ __name((t6, n3) => n3 in t6 ? t6[n3] : n3 in Zt2 ? Zt2[n3](e4) : void 0, "get"), has: /* @__PURE__ */ __name((e5, t6) => t6 in e5 || t6 in Zt2, "has") })) : e4.proxy;
}
function getComponentName(e4, t6 = true) {
  return isFunction(e4) ? e4.displayName || e4.name : e4.name || t6 && e4.__name;
}
function h2(e4, t6, n3) {
  try {
    setBlockTracking(-1);
    const r4 = arguments.length;
    return 2 === r4 ? isObject(t6) && !i(t6) ? isVNode$2(t6) ? createVNode(e4, null, [t6]) : createVNode(e4, t6) : createVNode(e4, null, t6) : (r4 > 3 ? n3 = Array.prototype.slice.call(arguments, 2) : 3 === r4 && isVNode$2(n3) && (n3 = [n3]), createVNode(e4, t6, n3));
  } finally {
    setBlockTracking(1);
  }
}
function isMemoSame(e4, t6) {
  const n3 = e4.memo;
  if (n3.length != t6.length) return false;
  for (let e5 = 0; e5 < n3.length; e5++) if (hasChanged(n3[e5], t6[e5])) return false;
  return mn > 0 && gn && gn.push(e4), true;
}
function resolveTransitionProps(e4) {
  const t6 = {};
  for (const n4 in e4) n4 in Ln || (t6[n4] = e4[n4]);
  if (false === e4.css) return t6;
  const { name: n3 = "v", type: r4, duration: o5, enterFromClass: s4 = `${n3}-enter-from`, enterActiveClass: i5 = `${n3}-enter-active`, enterToClass: a4 = `${n3}-enter-to`, appearFromClass: l3 = s4, appearActiveClass: c4 = i5, appearToClass: u3 = a4, leaveFromClass: p4 = `${n3}-leave-from`, leaveActiveClass: d3 = `${n3}-leave-active`, leaveToClass: f3 = `${n3}-leave-to` } = e4, g3 = (function(e5) {
    if (null == e5) return null;
    if (isObject(e5)) return [NumberOf(e5.enter), NumberOf(e5.leave)];
    {
      const t7 = NumberOf(e5);
      return [t7, t7];
    }
  })(o5), m3 = g3 && g3[0], y4 = g3 && g3[1], { onBeforeEnter: v3, onEnter: _3, onEnterCancelled: b4, onLeave: k4, onLeaveCancelled: S3, onBeforeAppear: w3 = v3, onAppear: R3 = _3, onAppearCancelled: T3 = b4 } = t6, finishEnter = /* @__PURE__ */ __name((e5, t7, n4, r5) => {
    e5._enterCancelled = r5, removeTransitionClass(e5, t7 ? u3 : a4), removeTransitionClass(e5, t7 ? c4 : i5), n4 && n4();
  }, "finishEnter"), finishLeave = /* @__PURE__ */ __name((e5, t7) => {
    e5._isLeaving = false, removeTransitionClass(e5, p4), removeTransitionClass(e5, f3), removeTransitionClass(e5, d3), t7 && t7();
  }, "finishLeave"), makeEnterHook = /* @__PURE__ */ __name((e5) => (t7, n4) => {
    const o6 = e5 ? R3 : _3, resolve2 = /* @__PURE__ */ __name(() => finishEnter(t7, e5, n4), "resolve");
    callHook(o6, [t7, resolve2]), nextFrame(() => {
      removeTransitionClass(t7, e5 ? l3 : s4), addTransitionClass(t7, e5 ? u3 : a4), hasExplicitCallback(o6) || whenTransitionEnds(t7, r4, m3, resolve2);
    });
  }, "makeEnterHook");
  return n(t6, { onBeforeEnter(e5) {
    callHook(v3, [e5]), addTransitionClass(e5, s4), addTransitionClass(e5, i5);
  }, onBeforeAppear(e5) {
    callHook(w3, [e5]), addTransitionClass(e5, l3), addTransitionClass(e5, c4);
  }, onEnter: makeEnterHook(false), onAppear: makeEnterHook(true), onLeave(e5, t7) {
    e5._isLeaving = true;
    const resolve2 = /* @__PURE__ */ __name(() => finishLeave(e5, t7), "resolve");
    addTransitionClass(e5, p4), e5._enterCancelled ? (addTransitionClass(e5, d3), forceReflow(e5)) : (forceReflow(e5), addTransitionClass(e5, d3)), nextFrame(() => {
      e5._isLeaving && (removeTransitionClass(e5, p4), addTransitionClass(e5, f3), hasExplicitCallback(k4) || whenTransitionEnds(e5, r4, y4, resolve2));
    }), callHook(k4, [e5, resolve2]);
  }, onEnterCancelled(e5) {
    finishEnter(e5, false, void 0, true), callHook(b4, [e5]);
  }, onAppearCancelled(e5) {
    finishEnter(e5, true, void 0, true), callHook(T3, [e5]);
  }, onLeaveCancelled(e5) {
    finishLeave(e5), callHook(S3, [e5]);
  } });
}
function NumberOf(e4) {
  return toNumber(e4);
}
function addTransitionClass(e4, t6) {
  t6.split(/\s+/).forEach((t7) => t7 && e4.classList.add(t7)), (e4[Vn] || (e4[Vn] = /* @__PURE__ */ new Set())).add(t6);
}
function removeTransitionClass(e4, t6) {
  t6.split(/\s+/).forEach((t7) => t7 && e4.classList.remove(t7));
  const n3 = e4[Vn];
  n3 && (n3.delete(t6), n3.size || (e4[Vn] = void 0));
}
function nextFrame(e4) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e4);
  });
}
function whenTransitionEnds(e4, t6, n3, r4) {
  const o5 = e4._endId = ++jn, resolveIfNotStale = /* @__PURE__ */ __name(() => {
    o5 === e4._endId && r4();
  }, "resolveIfNotStale");
  if (null != n3) return setTimeout(resolveIfNotStale, n3);
  const { type: s4, timeout: i5, propCount: a4 } = getTransitionInfo(e4, t6);
  if (!s4) return r4();
  const l3 = s4 + "end";
  let c4 = 0;
  const end = /* @__PURE__ */ __name(() => {
    e4.removeEventListener(l3, onEnd), resolveIfNotStale();
  }, "end"), onEnd = /* @__PURE__ */ __name((t7) => {
    t7.target === e4 && ++c4 >= a4 && end();
  }, "onEnd");
  setTimeout(() => {
    c4 < a4 && end();
  }, i5 + 1), e4.addEventListener(l3, onEnd);
}
function getTransitionInfo(e4, t6) {
  const n3 = window.getComputedStyle(e4), getStyleProperties = /* @__PURE__ */ __name((e5) => (n3[e5] || "").split(", "), "getStyleProperties"), r4 = getStyleProperties(`${Hn}Delay`), o5 = getStyleProperties(`${Hn}Duration`), s4 = getTimeout(r4, o5), i5 = getStyleProperties(`${Mn}Delay`), a4 = getStyleProperties(`${Mn}Duration`), l3 = getTimeout(i5, a4);
  let c4 = null, u3 = 0, p4 = 0;
  t6 === Hn ? s4 > 0 && (c4 = Hn, u3 = s4, p4 = o5.length) : t6 === Mn ? l3 > 0 && (c4 = Mn, u3 = l3, p4 = a4.length) : (u3 = Math.max(s4, l3), c4 = u3 > 0 ? s4 > l3 ? Hn : Mn : null, p4 = c4 ? c4 === Hn ? o5.length : a4.length : 0);
  return { type: c4, timeout: u3, propCount: p4, hasTransform: c4 === Hn && /\b(?:transform|all)(?:,|$)/.test(getStyleProperties(`${Hn}Property`).toString()) };
}
function getTimeout(e4, t6) {
  for (; e4.length < t6.length; ) e4 = e4.concat(e4);
  return Math.max(...t6.map((t7, n3) => toMs(t7) + toMs(e4[n3])));
}
function toMs(e4) {
  return "auto" === e4 ? 0 : 1e3 * Number(e4.slice(0, -1).replace(",", "."));
}
function forceReflow(e4) {
  return (e4 ? e4.ownerDocument : document).body.offsetHeight;
}
function setDisplay(e4, t6) {
  e4.style.display = t6 ? e4[Fn] : "none", e4[Bn] = !t6;
}
function setVarsOnVNode(e4, t6) {
  if (128 & e4.shapeFlag) {
    const n3 = e4.suspense;
    e4 = n3.activeBranch, n3.pendingBranch && !n3.isHydrating && n3.effects.push(() => {
      setVarsOnVNode(n3.activeBranch, t6);
    });
  }
  for (; e4.component; ) e4 = e4.component.subTree;
  if (1 & e4.shapeFlag && e4.el) setVarsOnNode(e4.el, t6);
  else if (e4.type === un) e4.children.forEach((e5) => setVarsOnVNode(e5, t6));
  else if (e4.type === fn) {
    let { el: n3, anchor: r4 } = e4;
    for (; n3 && (setVarsOnNode(n3, t6), n3 !== r4); ) n3 = n3.nextSibling;
  }
}
function setVarsOnNode(e4, t6) {
  if (1 === e4.nodeType) {
    const n3 = e4.style;
    let r4 = "";
    for (const e5 in t6) {
      const o5 = normalizeCssVarValue(t6[e5]);
      n3.setProperty(`--${e5}`, o5), r4 += `--${e5}: ${o5};`;
    }
    n3[Wn] = r4;
  }
}
function setStyle(e4, t6, n3) {
  if (i(n3)) n3.forEach((n4) => setStyle(e4, t6, n4));
  else if (null == n3 && (n3 = ""), t6.startsWith("--")) e4.setProperty(t6, n3);
  else {
    const r4 = (function(e5, t7) {
      const n4 = Jn[t7];
      if (n4) return n4;
      let r5 = p(t7);
      if ("filter" !== r5 && r5 in e5) return Jn[t7] = r5;
      r5 = f(r5);
      for (let n5 = 0; n5 < Kn.length; n5++) {
        const o5 = Kn[n5] + r5;
        if (o5 in e5) return Jn[t7] = o5;
      }
      return t7;
    })(e4, t6);
    qn.test(n3) ? e4.setProperty(d(r4), n3.replace(qn, ""), "important") : e4[r4] = n3;
  }
}
function shouldPreserveTextareaResizeStyle(e4, t6, n3, r4) {
  return "TEXTAREA" === e4.tagName && ("width" === t6 || "height" === t6) && isString(r4) && n3 === r4;
}
function patchAttr(e4, t6, n3, r4, o5, s4 = v(t6)) {
  r4 && t6.startsWith("xlink:") ? null == n3 ? e4.removeAttributeNS(Gn, t6.slice(6, t6.length)) : e4.setAttributeNS(Gn, t6, n3) : null == n3 || s4 && !includeBooleanAttr(n3) ? e4.removeAttribute(t6) : e4.setAttribute(t6, s4 ? "" : isSymbol(n3) ? String(n3) : n3);
}
function patchDOMProp(e4, t6, n3, r4, o5) {
  if ("innerHTML" === t6 || "textContent" === t6) return void (null != n3 && (e4[t6] = n3));
  const s4 = e4.tagName;
  if ("value" === t6 && "PROGRESS" !== s4 && !s4.includes("-")) {
    const r5 = "OPTION" === s4 ? e4.getAttribute("value") || "" : e4.value, o6 = null == n3 ? "checkbox" === e4.type ? "on" : "" : String(n3);
    return r5 === o6 && "_value" in e4 || (e4.value = o6), null == n3 && e4.removeAttribute(t6), void (e4._value = n3);
  }
  let i5 = false;
  if ("" === n3 || null == n3) {
    const r5 = typeof e4[t6];
    "boolean" === r5 ? n3 = includeBooleanAttr(n3) : null == n3 && "string" === r5 ? (n3 = "", i5 = true) : "number" === r5 && (n3 = 0, i5 = true);
  }
  try {
    e4[t6] = n3;
  } catch (e5) {
  }
  i5 && e4.removeAttribute(o5 || t6);
}
function addEventListener(e4, t6, n3, r4) {
  e4.addEventListener(t6, n3, r4);
}
function patchEvent(e4, t6, n3, r4, o5 = null) {
  const s4 = e4[Zn] || (e4[Zn] = {}), i5 = s4[t6];
  if (r4 && i5) i5.value = r4;
  else {
    const [n4, a4] = (function(e5) {
      let t7;
      if (Yn.test(e5)) {
        let n6;
        for (t7 = {}; n6 = e5.match(Yn); ) e5 = e5.slice(0, e5.length - n6[0].length), t7[n6[0].toLowerCase()] = true;
      }
      const n5 = ":" === e5[2] ? e5.slice(3) : d(e5.slice(2));
      return [n5, t7];
    })(t6);
    if (r4) {
      const i6 = s4[t6] = (function(e5, t7) {
        const invoker = /* @__PURE__ */ __name((e6) => {
          if (e6._vts) {
            if (e6._vts <= invoker.attached) return;
          } else e6._vts = Date.now();
          callWithAsyncErrorHandling((function(e7, t8) {
            if (i(t8)) {
              const n5 = e7.stopImmediatePropagation;
              return e7.stopImmediatePropagation = () => {
                n5.call(e7), e7._stopped = true;
              }, t8.map((e8) => (t9) => !t9._stopped && e8 && e8(t9));
            }
            return t8;
          })(e6, invoker.value), t7, 5, [e6]);
        }, "invoker");
        return invoker.value = e5, invoker.attached = getNow(), invoker;
      })(r4, o5);
      addEventListener(e4, n4, i6, a4);
    } else i5 && (!(function(e5, t7, n5, r5) {
      e5.removeEventListener(t7, n5, r5);
    })(e4, n4, i5, a4), s4[t6] = void 0);
  }
}
function defineCustomElement(e4, t6, n3) {
  let r4 = defineComponent(e4, t6);
  isPlainObject(r4) && (r4 = n({}, r4, t6));
  class VueCustomElement extends VueElement {
    static {
      __name(this, "VueCustomElement");
    }
    constructor(e5) {
      super(r4, e5, n3);
    }
  }
  return VueCustomElement.def = r4, VueCustomElement;
}
function useHost(e4) {
  const t6 = getCurrentInstance(), n3 = t6 && t6.ce;
  return n3 || null;
}
function callPendingCbs(e4) {
  const t6 = e4.el;
  t6[or] && t6[or](), t6[sr] && t6[sr]();
}
function recordPosition(e4) {
  rr.set(e4, getPosition(e4.el));
}
function applyTranslation(e4) {
  const t6 = nr.get(e4), n3 = rr.get(e4), r4 = t6.left - n3.left, o5 = t6.top - n3.top;
  if (r4 || o5) {
    const t7 = e4.el, n4 = t7.style, s4 = t7.getBoundingClientRect();
    let i5 = 1, a4 = 1;
    return t7.offsetWidth && (i5 = s4.width / t7.offsetWidth), t7.offsetHeight && (a4 = s4.height / t7.offsetHeight), Number.isFinite(i5) && 0 !== i5 || (i5 = 1), Number.isFinite(a4) && 0 !== a4 || (a4 = 1), Math.abs(i5 - 1) < 0.01 && (i5 = 1), Math.abs(a4 - 1) < 0.01 && (a4 = 1), n4.transform = n4.webkitTransform = `translate(${r4 / i5}px,${o5 / a4}px)`, n4.transitionDuration = "0s", e4;
  }
}
function getPosition(e4) {
  const t6 = e4.getBoundingClientRect();
  return { left: t6.left, top: t6.top };
}
function onCompositionStart(e4) {
  e4.target.composing = true;
}
function onCompositionEnd(e4) {
  const t6 = e4.target;
  t6.composing && (t6.composing = false, t6.dispatchEvent(new Event("input")));
}
function castValue(e4, t6, n3) {
  return t6 && (e4 = e4.trim()), n3 && (e4 = looseToNumber(e4)), e4;
}
function setChecked(e4, { value: t6, oldValue: n3 }, r4) {
  let o5;
  if (e4._modelValue = t6, i(t6)) o5 = looseIndexOf(t6, r4.props.value) > -1;
  else if (isSet(t6)) o5 = t6.has(r4.props.value);
  else {
    if (t6 === n3) return;
    o5 = looseEqual(t6, getCheckboxValue(e4, true));
  }
  e4.checked !== o5 && (e4.checked = o5);
}
function setSelected(e4, t6) {
  const n3 = e4.multiple, r4 = i(t6);
  if (!n3 || r4 || isSet(t6)) {
    for (let o5 = 0, s4 = e4.options.length; o5 < s4; o5++) {
      const s5 = e4.options[o5], i5 = getValue(s5);
      if (n3) if (r4) {
        const e5 = typeof i5;
        s5.selected = "string" === e5 || "number" === e5 ? t6.some((e6) => String(e6) === String(i5)) : looseIndexOf(t6, i5) > -1;
      } else s5.selected = t6.has(i5);
      else if (looseEqual(getValue(s5), t6)) return void (e4.selectedIndex !== o5 && (e4.selectedIndex = o5));
    }
    n3 || -1 === e4.selectedIndex || (e4.selectedIndex = -1);
  }
}
function getValue(e4) {
  return "_value" in e4 ? e4._value : e4.value;
}
function getCheckboxValue(e4, t6) {
  const n3 = t6 ? "_trueValue" : "_falseValue";
  return n3 in e4 ? e4[n3] : t6;
}
function resolveDynamicModel(e4, t6) {
  switch (e4) {
    case "SELECT":
      return pr;
    case "TEXTAREA":
      return lr;
    default:
      switch (t6) {
        case "checkbox":
          return cr;
        case "radio":
          return ur;
        default:
          return lr;
      }
  }
}
function callModelHook(e4, t6, n3, r4, o5) {
  const s4 = resolveDynamicModel(e4.tagName, n3.props && n3.props.type)[o5];
  s4 && s4(e4, t6, n3, r4);
}
function ensureRenderer() {
  return yr || (yr = createRenderer(mr));
}
function ensureHydrationRenderer() {
  return yr = vr ? yr : createHydrationRenderer(mr), vr = true, yr;
}
function resolveRootNamespace(e4) {
  return e4 instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && e4 instanceof MathMLElement ? "mathml" : void 0;
}
function normalizeContainer(e4) {
  if (isString(e4)) {
    return document.querySelector(e4);
  }
  return e4;
}
function injectHead() {
  if (hasInjectionContext()) {
    const e4 = inject(kr);
    if (e4) return e4;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
function useHead(e4, t6 = {}) {
  const n3 = t6.head || injectHead();
  return n3.ssr ? n3.push(e4 || {}, t6) : (function(e5, t7, n4 = {}) {
    const r4 = ref(false);
    let o5;
    watchEffect(() => {
      const s4 = r4.value ? {} : walkResolver(t7, VueResolver);
      o5 ? o5.patch(s4) : o5 = e5.push(s4, n4);
    });
    getCurrentInstance() && (Ut2(() => {
      o5.dispose();
    }), onDeactivated(() => {
      r4.value = true;
    }), onActivated(() => {
      r4.value = false;
    }));
    return o5;
  })(n3, e4, t6);
}
function createHead(e4 = {}) {
  const t6 = (function(e5 = {}) {
    const t7 = createUnhead({ ...e5, document: false, propResolvers: [...e5.propResolvers || [], (e6, t8) => e6 && e6.startsWith("on") && "function" == typeof t8 ? `this.dataset.${e6}fired = true` : t8], init: [e5.disableDefaults ? void 0 : { htmlAttrs: { lang: "en" }, meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }] }, ...e5.init || []] });
    return t7._ssrPayload = {}, t7.use({ key: "server", hooks: { "tags:resolve": /* @__PURE__ */ __name(function(e6) {
      const n3 = e6.tagMap.get("title"), r4 = e6.tagMap.get("titleTemplate");
      let o5 = { title: "server" === n3?.mode ? t7._title : void 0, titleTemplate: "server" === r4?.mode ? t7._titleTemplate : void 0 };
      Object.keys(t7._ssrPayload || {}).length > 0 && (o5 = { ...t7._ssrPayload, ...o5 }), Object.values(o5).some(Boolean) && e6.tags.push({ tag: "script", innerHTML: JSON.stringify(o5), props: { id: "unhead:payload", type: "application/json" } });
    }, "tags:resolve") } }), t7;
  })({ ...e4, propResolvers: [VueResolver] });
  return t6.install = (function(e5) {
    return { install(t7) {
      t7.config.globalProperties.$unhead = e5, t7.config.globalProperties.$head = e5, t7.provide(kr, e5);
    } }.install;
  })(t6), t6;
}
function ssrRenderAttrs(e4, t6) {
  let n3 = "";
  for (let r4 in e4) {
    if (Cr(r4) || isOn(r4) || "textarea" === t6 && "value" === r4 || r4.startsWith(".")) continue;
    const o5 = e4[r4];
    r4.startsWith("^") && (r4 = r4.slice(1)), "class" === r4 ? n3 += ` class="${ssrRenderClass(o5)}"` : "style" === r4 ? n3 += ` style="${ssrRenderStyle(o5)}"` : "className" === r4 ? null != o5 && (n3 += ` class="${escapeHtml(String(o5))}"`) : n3 += ssrRenderDynamicAttr(r4, o5, t6);
  }
  return n3;
}
function ssrRenderDynamicAttr(e4, t6, n3) {
  if (!isRenderableAttrValue(t6)) return "";
  const r4 = n3 && (n3.indexOf("-") > 0 || O(n3)) ? e4 : P[e4] || e4.toLowerCase();
  return R(r4) ? includeBooleanAttr(t6) ? ` ${r4}` : "" : isSSRSafeAttrName(r4) ? "" === t6 ? ` ${r4}` : ` ${r4}="${escapeHtml(t6)}"` : (console.warn(`[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r4}`), "");
}
function ssrRenderClass(e4) {
  return escapeHtml(normalizeClass(e4));
}
function ssrRenderStyle(e4) {
  if (!e4) return "";
  if (isString(e4)) return escapeHtml(e4);
  const t6 = normalizeStyle((function(e5) {
    if (!i(e5) && isObject(e5)) {
      const t7 = {};
      for (const n3 in e5) n3.startsWith(":--") ? t7[n3.slice(1)] = normalizeCssVarValue(e5[n3]) : t7[n3] = e5[n3];
      return t7;
    }
    return e5;
  })(e4));
  return escapeHtml(stringifyStyle(t6));
}
function ssrRenderComponent(e4, t6 = null, n3 = null, r4 = null, o5) {
  return renderComponentVNode(createVNode(e4, t6, n3), r4, o5);
}
function ssrInterpolate(e4) {
  return escapeHtml(toDisplayString(e4));
}
async function ssrRenderSuspense(e4, { default: t6 }) {
  t6 ? t6() : e4("<!---->");
}
function createBuffer() {
  let e4 = false;
  const t6 = [];
  return { getBuffer: /* @__PURE__ */ __name(() => t6, "getBuffer"), push(n3) {
    const r4 = isString(n3);
    e4 && r4 ? t6[t6.length - 1] += n3 : (t6.push(n3), e4 = r4, (isPromise(n3) || i(n3) && n3.hasAsync) && (t6.hasAsync = true));
  } };
}
function renderComponentVNode(e4, t6 = null, n3) {
  const r4 = e4.component = wr(e4, t6, null), o5 = Tr(r4, true), s4 = isPromise(o5);
  let i5 = r4.sp;
  if (s4 || i5) {
    return Promise.resolve(o5).then(() => {
      if (s4 && (i5 = r4.sp), i5) return Promise.all(i5.map((e5) => e5.call(r4.proxy)));
    }).catch(NOOP).then(() => renderComponentSubTree(r4, n3));
  }
  return renderComponentSubTree(r4, n3);
}
function renderComponentSubTree(e4, t6) {
  const n3 = e4.type, { getBuffer: r4, push: o5 } = createBuffer();
  if (isFunction(n3)) {
    let r5 = Ar(e4);
    if (!n3.props) for (const t7 in e4.attrs) t7.startsWith("data-v-") && ((r5.props || (r5.props = {}))[t7] = "");
    renderVNode(o5, e4.subTree = r5, e4, t6);
  } else {
    e4.render && e4.render !== NOOP || e4.ssrRender || n3.ssrRender || !isString(n3.template) || (n3.ssrRender = (function() {
      throw new Error("On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions.");
    })(n3.template));
    const r5 = e4.ssrRender || n3.ssrRender;
    if (r5) {
      let n4 = false !== e4.inheritAttrs ? e4.attrs : void 0, s4 = false, i5 = e4;
      for (; ; ) {
        const e5 = i5.vnode.scopeId;
        e5 && (s4 || (n4 = { ...n4 }, s4 = true), n4[e5] = "");
        const t7 = i5.parent;
        if (!t7 || !t7.subTree || t7.subTree !== i5.vnode) break;
        i5 = t7;
      }
      if (t6) {
        s4 || (n4 = { ...n4 });
        const e5 = t6.trim().split(" ");
        for (let t7 = 0; t7 < e5.length; t7++) n4[e5[t7]] = "";
      }
      const a4 = Rr2(e4);
      try {
        r5(e4.proxy, o5, e4, n4, e4.props, e4.setupState, e4.data, e4.ctx);
      } finally {
        Rr2(a4);
      }
    } else e4.render && e4.render !== NOOP ? renderVNode(o5, e4.subTree = Ar(e4), e4, t6) : (n3.name || n3.__file, o5("<!---->"));
  }
  return r4();
}
function renderVNode(e4, t6, n3, r4) {
  const { type: o5, shapeFlag: s4, children: i5, dirs: a4, props: l3 } = t6;
  switch (a4 && (t6.props = (function(e5, t7, n4) {
    const r5 = [];
    for (let t8 = 0; t8 < n4.length; t8++) {
      const o6 = n4[t8], { dir: { getSSRProps: s5 } } = o6;
      if (s5) {
        const t9 = s5(o6, e5);
        t9 && r5.push(t9);
      }
    }
    return mergeProps(t7 || {}, ...r5);
  })(t6, l3, a4)), o5) {
    case pn2:
      e4(escapeHtml(i5));
      break;
    case dn2:
      e4(i5 ? `<!--${escapeHtmlComment(i5)}-->` : "<!---->");
      break;
    case fn:
      e4(i5);
      break;
    case un:
      t6.slotScopeIds && (r4 = (r4 ? r4 + " " : "") + t6.slotScopeIds.join(" ")), e4("<!--[-->"), renderVNodeChildren(e4, i5, n3, r4), e4("<!--]-->");
      break;
    default:
      1 & s4 ? (function(e5, t7, n4, r5) {
        const o6 = t7.type;
        let { props: s5, children: i6, shapeFlag: a5, scopeId: l4 } = t7, c4 = `<${o6}`;
        s5 && (c4 += ssrRenderAttrs(s5, o6));
        l4 && (c4 += ` ${l4}`);
        let u3 = n4, p4 = t7;
        for (; u3 && p4 === u3.subTree; ) p4 = u3.vnode, p4.scopeId && (c4 += ` ${p4.scopeId}`), u3 = u3.parent;
        r5 && (c4 += ` ${r5}`);
        if (e5(c4 + ">"), !C(o6)) {
          let t8 = false;
          s5 && (s5.innerHTML ? (t8 = true, e5(s5.innerHTML)) : s5.textContent ? (t8 = true, e5(escapeHtml(s5.textContent))) : "textarea" === o6 && s5.value && (t8 = true, e5(escapeHtml(s5.value)))), t8 || (8 & a5 ? e5(escapeHtml(i6)) : 16 & a5 && renderVNodeChildren(e5, i6, n4, r5)), e5(`</${o6}>`);
        }
      })(e4, t6, n3, r4) : 6 & s4 ? e4(renderComponentVNode(t6, n3, r4)) : 64 & s4 ? (function(e5, t7, n4, r5) {
        const o6 = t7.props && t7.props.to, s5 = t7.props && t7.props.disabled;
        if (!o6) return [];
        if (!isString(o6)) return [];
        !(function(e6, t8, n5, r6, o7) {
          e6("<!--teleport start-->");
          const s6 = o7.appContext.provides[St2], i6 = s6.__teleportBuffers || (s6.__teleportBuffers = {}), a5 = i6[n5] || (i6[n5] = []), l4 = a5.length;
          let c4;
          if (r6) t8(e6), c4 = "<!--teleport start anchor--><!--teleport anchor-->";
          else {
            const { getBuffer: e7, push: n6 } = createBuffer();
            n6("<!--teleport start anchor-->"), t8(n6), n6("<!--teleport anchor-->"), c4 = e7();
          }
          a5.splice(l4, 0, c4), e6("<!--teleport end-->");
        })(e5, (e6) => {
          renderVNodeChildren(e6, t7.children, n4, r5);
        }, o6, s5 || "" === s5, n4);
      })(e4, t6, n3, r4) : 128 & s4 && renderVNode(e4, t6.ssContent, n3, r4);
  }
}
function renderVNodeChildren(e4, t6, n3, r4) {
  for (let o5 = 0; o5 < t6.length; o5++) renderVNode(e4, xr(t6[o5]), n3, r4);
}
function nestedUnrollBuffer(e4, t6, n3) {
  if (!e4.hasAsync) return t6 + unrollBufferSync$1(e4);
  let r4 = t6;
  for (let t7 = n3; t7 < e4.length; t7 += 1) {
    const n4 = e4[t7];
    if (isString(n4)) {
      r4 += n4;
      continue;
    }
    if (isPromise(n4)) return n4.then((n5) => (e4[t7] = n5, nestedUnrollBuffer(e4, r4, t7)));
    const o5 = nestedUnrollBuffer(n4, r4, 0);
    if (isPromise(o5)) return o5.then((n5) => (e4[t7] = n5, nestedUnrollBuffer(e4, "", t7)));
    r4 = o5;
  }
  return r4;
}
function unrollBuffer$1(e4) {
  return nestedUnrollBuffer(e4, "", 0);
}
function unrollBufferSync$1(e4) {
  let t6 = "";
  for (let n3 = 0; n3 < e4.length; n3++) {
    let r4 = e4[n3];
    isString(r4) ? t6 += r4 : t6 += unrollBufferSync$1(r4);
  }
  return t6;
}
async function renderToString(e4, t6 = {}) {
  if (Pr(e4)) return renderToString(createApp({ render: /* @__PURE__ */ __name(() => e4, "render") }), t6);
  const n3 = createVNode(e4._component, e4._props);
  n3.appContext = e4._context, e4.provide(St2, t6);
  const r4 = await renderComponentVNode(n3), o5 = await unrollBuffer$1(r4);
  if (await (async function(e5) {
    if (e5.__teleportBuffers) {
      e5.teleports = e5.teleports || {};
      for (const t7 in e5.__teleportBuffers) e5.teleports[t7] = await unrollBuffer$1(await Promise.all([e5.__teleportBuffers[t7]]));
    }
  })(t6), t6.__watcherHandles) for (const e5 of t6.__watcherHandles) e5();
  return o5;
}
function baseURL() {
  return useRuntimeConfig2().app.baseURL;
}
function buildAssetsURL(...e4) {
  return joinRelativeURL(publicAssetsURL(), useRuntimeConfig2().app.buildAssetsDir, ...e4);
}
function publicAssetsURL(...e4) {
  const r4 = useRuntimeConfig2().app, o5 = r4.cdnURL || r4.baseURL;
  return e4.length ? joinRelativeURL(o5, ...e4) : o5;
}
function lazyCachedFunction(e4) {
  let t6 = null;
  return () => (null === t6 && (t6 = e4().catch((e5) => {
    throw t6 = null, e5;
  })), t6);
}
function is_primitive(e4) {
  return null === e4 || "object" != typeof e4 && "function" != typeof e4;
}
function is_plain_object(e4) {
  const t6 = Object.getPrototypeOf(e4);
  return t6 === Object.prototype || null === t6 || null === Object.getPrototypeOf(t6) || Object.getOwnPropertyNames(t6).sort().join("\0") === Wr;
}
function get_type(e4) {
  return Object.prototype.toString.call(e4).slice(8, -1);
}
function get_escaped_char(e4) {
  switch (e4) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return e4 < " " ? `\\u${e4.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(e4) {
  let t6 = "", n3 = 0;
  const r4 = e4.length;
  for (let o5 = 0; o5 < r4; o5 += 1) {
    const r5 = get_escaped_char(e4[o5]);
    r5 && (t6 += e4.slice(n3, o5) + r5, n3 = o5 + 1);
  }
  return `"${0 === n3 ? e4 : t6 + e4.slice(n3)}"`;
}
function enumerable_symbols(e4) {
  return Object.getOwnPropertySymbols(e4).filter((t6) => Object.getOwnPropertyDescriptor(e4, t6).enumerable);
}
function stringify_key(e4) {
  return zr.test(e4) ? "." + e4 : "[" + JSON.stringify(e4) + "]";
}
function is_valid_array_index_string(e4) {
  if (0 === e4.length) return false;
  if (e4.length > 1 && 48 === e4.charCodeAt(0)) return false;
  for (let t7 = 0; t7 < e4.length; t7++) {
    const n3 = e4.charCodeAt(t7);
    if (n3 < 48 || n3 > 57) return false;
  }
  return t6 = +e4, !(!Number.isInteger(t6) || t6 < 0 || t6 > 4294967294);
  var t6;
}
function valid_array_indices(e4) {
  const t6 = Object.keys(e4);
  for (var n3 = t6.length - 1; n3 >= 0 && !is_valid_array_index_string(t6[n3]); n3--) ;
  return t6.length = n3 + 1, t6;
}
function uneval(e4, t6) {
  const n3 = /* @__PURE__ */ new Map(), r4 = [], o5 = /* @__PURE__ */ new Map();
  !(/* @__PURE__ */ __name(function walk2(t7) {
    if (is_primitive(t7)) {
      if ("symbol" == typeof t7) throw new DevalueError("Cannot stringify a Symbol primitive", r4, t7, e4);
    } else {
      if (n3.has(t7)) return void n3.set(t7, n3.get(t7) + 1);
      if (n3.set(t7, 1), "function" == typeof t7) throw new DevalueError("Cannot stringify a function", r4, t7, e4);
      switch (get_type(t7)) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
        case "URL":
        case "URLSearchParams":
        case "ArrayBuffer":
        case "Temporal.Duration":
        case "Temporal.Instant":
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.PlainMonthDay":
        case "Temporal.PlainYearMonth":
        case "Temporal.ZonedDateTime":
          return;
        case "Array":
          t7.forEach((e5, t8) => {
            r4.push(`[${t8}]`), walk2(e5), r4.pop();
          });
          break;
        case "Set":
          Array.from(t7).forEach(walk2);
          break;
        case "Map":
          for (const [e5, n4] of t7) r4.push(`.get(${is_primitive(e5) ? stringify_primitive$1(e5) : "..."})`), walk2(n4), r4.pop();
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Float16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
        case "DataView":
          return void walk2(t7.buffer);
        default:
          if (!is_plain_object(t7)) throw new DevalueError("Cannot stringify arbitrary non-POJOs", r4, t7, e4);
          if (enumerable_symbols(t7).length > 0) throw new DevalueError("Cannot stringify POJOs with symbolic keys", r4, t7, e4);
          for (const n4 of Object.keys(t7)) {
            if ("__proto__" === n4) throw new DevalueError("Cannot stringify objects with __proto__ keys", r4, t7, e4);
            r4.push(stringify_key(n4)), walk2(t7[n4]), r4.pop();
          }
      }
    }
  }, "walk"))(e4);
  const s4 = /* @__PURE__ */ new Map();
  function stringify3(e5) {
    if (s4.has(e5)) return s4.get(e5);
    if (is_primitive(e5)) return stringify_primitive$1(e5);
    if (o5.has(e5)) return o5.get(e5);
    const t7 = get_type(e5);
    switch (t7) {
      case "Number":
      case "String":
      case "Boolean":
      case "BigInt":
        return `Object(${stringify3(e5.valueOf())})`;
      case "RegExp":
        const { source: n4, flags: r5 } = e5;
        return r5 ? `new RegExp(${stringify_string(n4)},"${r5}")` : `new RegExp(${stringify_string(n4)})`;
      case "Date":
        return `new Date(${e5.getTime()})`;
      case "URL":
        return `new URL(${stringify_string(e5.toString())})`;
      case "URLSearchParams":
        return `new URLSearchParams(${stringify_string(e5.toString())})`;
      case "Array": {
        let t8 = false, n5 = "[";
        for (let r6 = 0; r6 < e5.length; r6 += 1) if (r6 > 0 && (n5 += ","), Object.hasOwn(e5, r6)) n5 += stringify3(e5[r6]);
        else if (!t8) {
          const n6 = valid_array_indices(e5), o7 = n6.length, s5 = String(e5.length).length;
          if (e5.length + 2 > 25 + s5 + o7 * (s5 + 2)) {
            const t9 = n6.map((t10) => `${t10}:${stringify3(e5[t10])}`).join(",");
            return `Object.assign(Array(${e5.length}),{${t9}})`;
          }
          t8 = true, r6 -= 1;
        }
        return n5 + (0 === e5.length || e5.length - 1 in e5 ? "" : ",") + "]";
      }
      case "Set":
      case "Map":
        return `new ${t7}([${Array.from(e5).map(stringify3).join(",")}])`;
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Float16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array": {
        let n5 = `new ${t7}`;
        if (s4.has(e5.buffer)) n5 += `(${stringify3(e5.buffer)})`;
        else {
          n5 += `([${new e5.constructor(e5.buffer)}])`;
        }
        if (e5.byteLength !== e5.buffer.byteLength) {
          const t8 = e5.byteOffset / e5.BYTES_PER_ELEMENT;
          n5 += `.subarray(${t8},${t8 + e5.length})`;
        }
        return n5;
      }
      case "DataView": {
        let t8 = "new DataView";
        return s4.has(e5.buffer) ? t8 += `(${stringify3(e5.buffer)}` : t8 += `(new Uint8Array([${new Uint8Array(e5.buffer)}]).buffer`, e5.byteLength !== e5.buffer.byteLength && (t8 += `,${e5.startOffset},${e5.byteLength}`), t8 + ")";
      }
      case "ArrayBuffer":
        return `new Uint8Array([${new Uint8Array(e5).toString()}]).buffer`;
      case "Temporal.Duration":
      case "Temporal.Instant":
      case "Temporal.PlainDate":
      case "Temporal.PlainTime":
      case "Temporal.PlainDateTime":
      case "Temporal.PlainMonthDay":
      case "Temporal.PlainYearMonth":
      case "Temporal.ZonedDateTime":
        return `${t7}.from(${stringify_string(e5.toString())})`;
      default:
        const o6 = Object.keys(e5), i6 = o6.map((t8) => `${(function(e6) {
          return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e6) ? e6 : escape_unsafe_chars(JSON.stringify(e6));
        })(t8)}:${stringify3(e5[t8])}`).join(",");
        return null === Object.getPrototypeOf(e5) ? o6.length > 0 ? `{${i6},__proto__:null}` : "{__proto__:null}" : `{${i6}}`;
    }
  }
  __name(stringify3, "stringify");
  Array.from(n3).filter((e5) => e5[1] > 1).sort((e5, t7) => t7[1] - e5[1]).forEach((e5, t7) => {
    s4.set(e5[0], (function(e6) {
      let t8 = "";
      do {
        t8 = qr2[e6 % 54] + t8, e6 = ~~(e6 / 54) - 1;
      } while (e6 >= 0);
      return Jr.test(t8) ? `${t8}0` : t8;
    })(t7));
  });
  const i5 = stringify3(e4);
  if (s4.size) {
    const e5 = [], t7 = [], n4 = [];
    return s4.forEach((r5, i6) => {
      if (e5.push(r5), o5.has(i6)) return void n4.push(o5.get(i6));
      if (is_primitive(i6)) return void n4.push(stringify_primitive$1(i6));
      const a4 = get_type(i6);
      switch (a4) {
        case "Number":
        case "String":
        case "Boolean":
        case "BigInt":
          n4.push(`Object(${stringify3(i6.valueOf())})`);
          break;
        case "RegExp":
          const { source: e6, flags: o6 } = i6, l3 = o6 ? `new RegExp(${stringify_string(e6)},"${o6}")` : `new RegExp(${stringify_string(e6)})`;
          n4.push(l3);
          break;
        case "Date":
          n4.push(`new Date(${i6.getTime()})`);
          break;
        case "URL":
          n4.push(`new URL(${stringify_string(i6.toString())})`);
          break;
        case "URLSearchParams":
          n4.push(`new URLSearchParams(${stringify_string(i6.toString())})`);
          break;
        case "Array":
          n4.push(`Array(${i6.length})`), i6.forEach((e7, n5) => {
            t7.push(`${r5}[${n5}]=${stringify3(e7)}`);
          });
          break;
        case "Set":
          n4.push("new Set"), t7.push(`${r5}.${Array.from(i6).map((e7) => `add(${stringify3(e7)})`).join(".")}`);
          break;
        case "Map":
          n4.push("new Map"), t7.push(`${r5}.${Array.from(i6).map(([e7, t8]) => `set(${stringify3(e7)}, ${stringify3(t8)})`).join(".")}`);
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Float16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          let e7 = `new ${a4}`;
          if (s4.has(i6.buffer)) e7 += `(${stringify3(i6.buffer)})`;
          else {
            e7 += `([${new i6.constructor(i6.buffer)}])`;
          }
          if (i6.byteLength !== i6.buffer.byteLength) {
            const t8 = i6.byteOffset / i6.BYTES_PER_ELEMENT;
            e7 += `.subarray(${t8},${t8 + i6.length})`;
          }
          n4.push("{}"), t7.push(`${r5}=${e7}`);
          break;
        }
        case "DataView": {
          let e7 = "new DataView";
          s4.has(i6.buffer) ? e7 += `(${stringify3(i6.buffer)}` : e7 += `(new Uint8Array([${new Uint8Array(i6.buffer)}]).buffer`, i6.byteLength !== i6.buffer.byteLength && (e7 += `,${i6.byteOffset},${i6.byteLength}`), e7 += ")", n4.push("{}"), t7.push(`${r5}=${e7}`);
          break;
        }
        case "ArrayBuffer":
          n4.push(`new Uint8Array([${new Uint8Array(i6)}]).buffer`);
          break;
        default:
          n4.push(null === Object.getPrototypeOf(i6) ? "Object.create(null)" : "{}"), Object.keys(i6).forEach((e7) => {
            t7.push(`${r5}${(function(e8) {
              return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(e8) ? `.${e8}` : `[${escape_unsafe_chars(JSON.stringify(e8))}]`;
            })(e7)}=${stringify3(i6[e7])}`);
          });
      }
    }), t7.push(`return ${i5}`), `(function(${e5.join(",")}){${t7.join(";")}}(${n4.join(",")}))`;
  }
  return i5;
}
function escape_unsafe_char(e4) {
  return Ur[e4] || e4;
}
function escape_unsafe_chars(e4) {
  return e4.replace(Kr, escape_unsafe_char);
}
function stringify_primitive$1(e4) {
  const t6 = typeof e4;
  if ("string" === t6) return stringify_string(e4);
  if (void 0 === e4) return "void 0";
  if (0 === e4 && 1 / e4 < 0) return "-0";
  const n3 = String(e4);
  return "number" === t6 ? n3.replace(/^(-)?0\./, "$1.") : "bigint" === t6 ? e4 + "n" : n3;
}
function stringify(e4, t6) {
  const n3 = (function(e5, t7, n4) {
    const r4 = [], o5 = /* @__PURE__ */ new Map(), s4 = [];
    if (n4) for (const e6 of Object.getOwnPropertyNames(n4)) s4.push({ key: e6, fn: n4[e6] });
    const i5 = [];
    let a4 = 0;
    function flatten(e6, n5) {
      if (void 0 === e6) return -1;
      if (Number.isNaN(e6)) return -3;
      if (e6 === 1 / 0) return -4;
      if (e6 === -1 / 0) return -5;
      if (0 === e6 && 1 / e6 < 0) return -6;
      if (o5.has(e6)) return o5.get(e6);
      n5 ??= a4++, o5.set(e6, n5);
      for (const { key: t8, fn: o6 } of s4) {
        const s5 = o6(e6);
        if (s5) return r4[n5] = `["${t8}",${flatten(s5)}]`, n5;
      }
      if ("function" == typeof e6) throw new DevalueError("Cannot stringify a function", i5, e6, t7);
      if ("symbol" == typeof e6) throw new DevalueError("Cannot stringify a Symbol primitive", i5, e6, t7);
      let l4 = "";
      if (is_primitive(e6)) l4 = stringify_primitive(e6);
      else {
        if ("function" == typeof e6.then) throw new DevalueError("Cannot stringify a Promise or thenable \u2014 use stringifyAsync instead", i5, e6, t7);
        {
          const n6 = get_type(e6);
          switch (n6) {
            case "Number":
            case "String":
            case "Boolean":
            case "BigInt":
              l4 = `["Object",${flatten(e6.valueOf())}]`;
              break;
            case "Date":
              l4 = `["Date","${!isNaN(e6.getDate()) ? e6.toISOString() : ""}"]`;
              break;
            case "URL":
              l4 = `["URL",${stringify_string(e6.toString())}]`;
              break;
            case "URLSearchParams":
              l4 = `["URLSearchParams",${stringify_string(e6.toString())}]`;
              break;
            case "RegExp":
              const { source: r5, flags: o6 } = e6;
              l4 = o6 ? `["RegExp",${stringify_string(r5)},"${o6}"]` : `["RegExp",${stringify_string(r5)}]`;
              break;
            case "Array": {
              let t8 = false;
              l4 = "[";
              for (let n7 = 0; n7 < e6.length; n7 += 1) if (n7 > 0 && (l4 += ","), Object.hasOwn(e6, n7)) i5.push(`[${n7}]`), l4 += flatten(e6[n7]), i5.pop();
              else if (t8) l4 += -2;
              else {
                const n8 = valid_array_indices(e6), r6 = n8.length, o7 = String(e6.length).length;
                if (3 * (e6.length - r6) > 4 + o7 + r6 * (o7 + 1)) {
                  l4 = "[-7," + e6.length;
                  for (let t9 = 0; t9 < n8.length; t9++) {
                    const r7 = n8[t9];
                    i5.push(`[${r7}]`), l4 += "," + r7 + "," + flatten(e6[r7]), i5.pop();
                  }
                  break;
                }
                t8 = true, l4 += -2;
              }
              l4 += "]";
              break;
            }
            case "Set":
              l4 = '["Set"';
              for (const t8 of e6) l4 += `,${flatten(t8)}`;
              l4 += "]";
              break;
            case "Map":
              l4 = '["Map"';
              for (const [t8, n7] of e6) i5.push(`.get(${is_primitive(t8) ? stringify_primitive(t8) : "..."})`), l4 += `,${flatten(t8)},${flatten(n7)}`, i5.pop();
              l4 += "]";
              break;
            case "Int8Array":
            case "Uint8Array":
            case "Uint8ClampedArray":
            case "Int16Array":
            case "Uint16Array":
            case "Float16Array":
            case "Int32Array":
            case "Uint32Array":
            case "Float32Array":
            case "Float64Array":
            case "BigInt64Array":
            case "BigUint64Array":
            case "DataView": {
              const t8 = e6;
              l4 = '["' + n6 + '",' + flatten(t8.buffer), t8.byteLength !== t8.buffer.byteLength && (l4 += `,${t8.byteOffset},${t8.length}`), l4 += "]";
              break;
            }
            case "ArrayBuffer":
              l4 = `["ArrayBuffer","${Yr(e6)}"]`;
              break;
            case "Temporal.Duration":
            case "Temporal.Instant":
            case "Temporal.PlainDate":
            case "Temporal.PlainTime":
            case "Temporal.PlainDateTime":
            case "Temporal.PlainMonthDay":
            case "Temporal.PlainYearMonth":
            case "Temporal.ZonedDateTime":
              l4 = `["${n6}",${stringify_string(e6.toString())}]`;
              break;
            default:
              if (!is_plain_object(e6)) throw new DevalueError("Cannot stringify arbitrary non-POJOs", i5, e6, t7);
              if (enumerable_symbols(e6).length > 0) throw new DevalueError("Cannot stringify POJOs with symbolic keys", i5, e6, t7);
              if (null === Object.getPrototypeOf(e6)) {
                l4 = '["null"';
                for (const n7 of Object.keys(e6)) {
                  if ("__proto__" === n7) throw new DevalueError("Cannot stringify objects with __proto__ keys", i5, e6, t7);
                  i5.push(stringify_key(n7)), l4 += `,${stringify_string(n7)},${flatten(e6[n7])}`, i5.pop();
                }
                l4 += "]";
              } else {
                l4 = "{";
                let n7 = false;
                for (const r6 of Object.keys(e6)) {
                  if ("__proto__" === r6) throw new DevalueError("Cannot stringify objects with __proto__ keys", i5, e6, t7);
                  n7 && (l4 += ","), n7 = true, i5.push(stringify_key(r6)), l4 += `${stringify_string(r6)}:${flatten(e6[r6])}`, i5.pop();
                }
                l4 += "}";
              }
          }
        }
      }
      return r4[n5] = l4, n5;
    }
    __name(flatten, "flatten");
    const l3 = flatten(t7);
    return l3 < 0 ? `${l3}` : r4;
  })(0, e4, t6);
  return "string" == typeof n3 ? n3 : `[${n3.join(",")}]`;
}
function stringify_primitive(e4) {
  const t6 = typeof e4;
  return "string" === t6 ? stringify_string(e4) : void 0 === e4 ? (-1).toString() : 0 === e4 && 1 / e4 < 0 ? (-6).toString() : "bigint" === t6 ? `["BigInt","${e4}"]` : String(e4);
}
function renderPayloadJsonScript(e4) {
  const t6 = { type: "application/json", innerHTML: e4.data ? encodeForwardSlashes(stringify(e4.data, e4.ssrContext["~payloadReducers"])) : "", "data-nuxt-data": "nuxt-app", "data-ssr": !e4.ssrContext.noSSR, id: "__NUXT_DATA__" };
  e4.src && (t6["data-src"] = e4.src);
  return [t6, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(e4.ssrContext.config)}` }];
}
function encodeForwardSlashes(e4) {
  return e4.replaceAll("/", "\\u002F");
}
function splitPayload(e4) {
  const { data: t6, prerenderedAt: n3, ...r4 } = e4.payload;
  return { initial: { ...r4, prerenderedAt: n3 }, payload: { data: t6, prerenderedAt: n3 } };
}
function createSSRContext(e4) {
  return { url: (function(e5) {
    const t6 = e5.indexOf("?");
    return -1 === t6 ? encodePath(e5) : encodePath(e5.slice(0, t6)) + e5.slice(t6);
  })(e4.path), event: e4, runtimeConfig: useRuntimeConfig2(e4), noSSR: e4.context.nuxt?.noSSR || false, head: createHead(Xr2), error: false, nuxt: void 0, payload: {}, "~payloadReducers": /* @__PURE__ */ Object.create(null), modules: /* @__PURE__ */ new Set() };
}
function normalizeChunks(e4) {
  const t6 = [];
  for (const n3 of e4) {
    const e5 = n3?.trim();
    e5 && t6.push(e5);
  }
  return t6;
}
function joinTags(e4) {
  return e4.join("");
}
function joinAttrs(e4) {
  return 0 === e4.length ? "" : " " + e4.join(" ");
}
function renderHTMLDocument(e4) {
  return `<!DOCTYPE html><html${joinAttrs(e4.htmlAttrs)}><head>${joinTags(e4.head)}</head><body${joinAttrs(e4.bodyAttrs)}>${joinTags(e4.bodyPrepend)}${joinTags(e4.body)}${joinTags(e4.bodyAppend)}</body></html>`;
}
var he2, ge2, me2, ye2, ve2, _e2, be2, ke2, Ce2, Se2, we2, Re2, Te2, sortTags, Ae2, xe2, Ee2, $e2, isTruthy, Pe2, Oe2, EffectScope, Ne2, ReactiveEffect, He2, Me2, Ve2, Le2, De2, Ie2, Link, Dep, je2, Fe2, Be2, Ue2, We2, ze2, qe2, Ke2, BaseReactiveHandler, MutableReactiveHandler, ReadonlyReactiveHandler, Je2, Ge2, Ze2, Ye2, toShallow, getProto, Xe2, Qe2, et2, tt2, nt2, rt2, ot2, st2, toReactive, toReadonly, RefImpl, it2, CustomRefImpl, ObjectRefImpl, GetterRefImpl, ComputedRefImpl, at2, lt2, ct2, ut2, pt2, dt2, ft2, ht2, gt2, mt2, yt2, vt2, getId, _t2, bt2, kt2, Ct2, St2, useSSRContext, wt2, Rt2, isTeleport, isTeleportDisabled, isTargetSVG, isTargetMathML, resolveTarget, Tt2, At2, xt2, Et2, $t2, recursiveGetSubtree, Pt2, Ot2, Nt2, logMismatchError, getContainerType, isComment, Ht2, Mt2, Vt3, Lt2, isAsyncWrapper, isKeepAlive, Dt2, createHook, It2, jt2, Ft2, Bt2, Ut2, Wt2, zt2, qt2, Kt2, Jt2, Gt2, getPublicInstance, Zt2, hasSetupBinding, Yt2, Xt2, Qt2, en2, tn2, nn2, getModelModifiers, rn2, getFunctionalFallthrough, filterModelListeners, on2, createInternalObject, isInternalObject, sn2, isInternalKey, normalizeSlotValue, normalizeSlot, normalizeObjectSlots, normalizeVNodeSlots, assignSlots, an2, isSuspense, ln2, cn2, un, pn2, dn2, fn, hn, gn, mn, normalizeKey, normalizeRef, createVNode, yn, vn, _n, getCurrentInstance, bn, kn, setCurrentInstance, unsetCurrentInstance, Cn, Sn, wn, Rn, computed, Tn, An, xn, En, setDevtoolsHook, $n, Pn, On, Nn, Hn, Mn, Vn, Ln, Dn, In, callHook, hasExplicitCallback, jn, Fn, Bn, Un, Wn, zn, qn, Kn, Jn, Gn, Zn, Yn, Xn, Qn, getNow, isNativeOn, patchProp, er, tr, VueElement, nr, rr, or, sr, ir, getModelAssigner, ar, lr, cr, ur, pr, dr, fr, hr, gr, mr, yr, vr, render, createApp, createSSRApp, _r, initDirectivesForSSR, br, VueResolver, kr, Cr, Sr, wr, Rr2, Tr, Ar, xr, Er, $r, Pr, Or, Nr, Hr, Mr, Vr, Lr, Dr, Ir, getPrecomputedDependencies, jr, Fr, Br, Ur, DevalueError, Wr, zr, qr2, Kr, Jr, Gr, Zr, Yr, Xr2, Qr, eo, to, no, ro, oo, so, io, ao;
var init_renderer = __esm({
  ".output/server/chunks/routes/renderer.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_nitro();
    init_shared_esm_bundler();
    __name(getModuleDependencies, "getModuleDependencies");
    __name(getRequestDependencies, "getRequestDependencies");
    __name(renderStyles, "renderStyles");
    __name(renderResourceHints, "renderResourceHints");
    __name(renderResourceHeaders, "renderResourceHeaders");
    __name(getPreloadLinks, "getPreloadLinks");
    __name(getPrefetchLinks, "getPrefetchLinks");
    __name(renderScripts, "renderScripts");
    __name(createRenderer$1, "createRenderer$1");
    __name(flatHooks, "flatHooks");
    he2 = (() => {
      if (console.createTask) return console.createTask;
      const e4 = { run: /* @__PURE__ */ __name((e5) => e5(), "run") };
      return () => e4;
    })();
    __name(callHooks, "callHooks");
    __name(serialTaskCaller, "serialTaskCaller");
    __name(parallelTaskCaller, "parallelTaskCaller");
    __name(callEachWith, "callEachWith");
    ge2 = class {
      static {
        __name(this, "ge");
      }
      _hooks;
      _before;
      _after;
      _deprecatedHooks;
      _deprecatedMessages;
      constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
      }
      hook(e4, t6, n3 = {}) {
        if (!e4 || "function" != typeof t6) return () => {
        };
        const r4 = e4;
        let o5;
        for (; this._deprecatedHooks[e4]; ) o5 = this._deprecatedHooks[e4], e4 = o5.to;
        if (o5 && !n3.allowDeprecated) {
          let e5 = o5.message;
          e5 || (e5 = `${r4} hook has been deprecated` + (o5.to ? `, please use ${o5.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e5) || (console.warn(e5), this._deprecatedMessages.add(e5));
        }
        if (!t6.name) try {
          Object.defineProperty(t6, "name", { get: /* @__PURE__ */ __name(() => "_" + e4.replace(/\W+/g, "_") + "_hook_cb", "get"), configurable: true });
        } catch {
        }
        return this._hooks[e4] = this._hooks[e4] || [], this._hooks[e4].push(t6), () => {
          t6 && (this.removeHook(e4, t6), t6 = void 0);
        };
      }
      hookOnce(e4, t6) {
        let n3, _function = /* @__PURE__ */ __name((...e5) => ("function" == typeof n3 && n3(), n3 = void 0, _function = void 0, t6(...e5)), "_function");
        return n3 = this.hook(e4, _function), n3;
      }
      removeHook(e4, t6) {
        const n3 = this._hooks[e4];
        if (n3) {
          const r4 = n3.indexOf(t6);
          -1 !== r4 && n3.splice(r4, 1), 0 === n3.length && (this._hooks[e4] = void 0);
        }
      }
      clearHook(e4) {
        this._hooks[e4] = void 0;
      }
      deprecateHook(e4, t6) {
        this._deprecatedHooks[e4] = "string" == typeof t6 ? { to: t6 } : t6;
        const n3 = this._hooks[e4] || [];
        this._hooks[e4] = void 0;
        for (const t7 of n3) this.hook(e4, t7);
      }
      deprecateHooks(e4) {
        for (const t6 in e4) this.deprecateHook(t6, e4[t6]);
      }
      addHooks(e4) {
        const t6 = flatHooks(e4), n3 = Object.keys(t6).map((e5) => this.hook(e5, t6[e5]));
        return () => {
          for (const e5 of n3) e5();
          n3.length = 0;
        };
      }
      removeHooks(e4) {
        const t6 = flatHooks(e4);
        for (const e5 in t6) this.removeHook(e5, t6[e5]);
      }
      removeAllHooks() {
        this._hooks = {};
      }
      callHook(e4, ...t6) {
        return this.callHookWith(serialTaskCaller, e4, t6);
      }
      callHookParallel(e4, ...t6) {
        return this.callHookWith(parallelTaskCaller, e4, t6);
      }
      callHookWith(e4, t6, n3) {
        const r4 = this._before || this._after ? { name: t6, args: n3, context: {} } : void 0;
        this._before && callEachWith(this._before, r4);
        const o5 = e4(this._hooks[t6] ? [...this._hooks[t6]] : [], n3, t6);
        return o5 instanceof Promise ? o5.finally(() => {
          this._after && r4 && callEachWith(this._after, r4);
        }) : (this._after && r4 && callEachWith(this._after, r4), o5);
      }
      beforeEach(e4) {
        return this._before = this._before || [], this._before.push(e4), () => {
          if (void 0 !== this._before) {
            const t6 = this._before.indexOf(e4);
            -1 !== t6 && this._before.splice(t6, 1);
          }
        };
      }
      afterEach(e4) {
        return this._after = this._after || [], this._after.push(e4), () => {
          if (void 0 !== this._after) {
            const t6 = this._after.indexOf(e4);
            -1 !== t6 && this._after.splice(t6, 1);
          }
        };
      }
    };
    __name(createHooks, "createHooks");
    me2 = /* @__PURE__ */ new Set(["meta", "link", "base"]);
    ye2 = /* @__PURE__ */ new Set(["link", "style", "script", "noscript"]);
    ve2 = /* @__PURE__ */ new Set(["title", "titleTemplate", "script", "style", "noscript"]);
    _e2 = /* @__PURE__ */ new Set(["base", "meta", "link", "style", "script", "noscript"]);
    be2 = /* @__PURE__ */ new Set(["title", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]);
    ke2 = /* @__PURE__ */ new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]);
    Ce2 = /* @__PURE__ */ new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"]);
    Se2 = /* @__PURE__ */ new Set(["templateParams", "htmlAttrs", "bodyAttrs"]);
    we2 = /* @__PURE__ */ new Set(["theme-color", "google-site-verification", "og", "article", "book", "profile", "twitter", "author"]);
    Re2 = ["name", "property", "http-equiv"];
    Te2 = /* @__PURE__ */ new Set(["viewport", "description", "keywords", "robots"]);
    __name(dedupeKey, "dedupeKey");
    __name(hashTag, "hashTag");
    __name(walkResolver, "walkResolver");
    __name(normalizeProps2, "normalizeProps");
    __name(normalizeTag, "normalizeTag");
    __name(normalizeEntryToTags, "normalizeEntryToTags");
    sortTags = /* @__PURE__ */ __name((e4, t6) => e4._w === t6._w ? e4._p - t6._p : e4._w - t6._w, "sortTags");
    Ae2 = { base: -10, title: 10 };
    xe2 = { critical: -8, high: -1, low: 2 };
    Ee2 = { meta: { "content-security-policy": -30, charset: -20, viewport: -15 }, link: { preconnect: 20, stylesheet: 60, preload: 70, modulepreload: 70, prefetch: 90, "dns-prefetch": 90, prerender: 90 }, script: { async: 30, defer: 80, sync: 50 }, style: { imported: 40, sync: 60 } };
    $e2 = /@import/;
    isTruthy = /* @__PURE__ */ __name((e4) => "" === e4 || true === e4, "isTruthy");
    __name(tagWeight, "tagWeight");
    __name(registerPlugin, "registerPlugin");
    __name(createUnhead, "createUnhead");
    __name(encodeAttribute, "encodeAttribute");
    __name(propsToString, "propsToString");
    __name(tagToString, "tagToString");
    __name(renderSSRHead, "renderSSRHead");
    EffectScope = class {
      static {
        __name(this, "EffectScope");
      }
      constructor(e4 = false) {
        this.detached = e4, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this._warnOnRun = true, this.__v_skip = true, !e4 && Pe2 && (Pe2.active ? (this.parent = Pe2, this.index = (Pe2.scopes || (Pe2.scopes = [])).push(this) - 1) : (this._active = false, this._warnOnRun = false));
      }
      get active() {
        return this._active;
      }
      pause() {
        if (this._active) {
          let e4, t6;
          if (this._isPaused = true, this.scopes) for (e4 = 0, t6 = this.scopes.length; e4 < t6; e4++) this.scopes[e4].pause();
          for (e4 = 0, t6 = this.effects.length; e4 < t6; e4++) this.effects[e4].pause();
        }
      }
      resume() {
        if (this._active && this._isPaused) {
          let e4, t6;
          if (this._isPaused = false, this.scopes) for (e4 = 0, t6 = this.scopes.length; e4 < t6; e4++) this.scopes[e4].resume();
          for (e4 = 0, t6 = this.effects.length; e4 < t6; e4++) this.effects[e4].resume();
        }
      }
      run(e4) {
        if (this._active) {
          const t6 = Pe2;
          try {
            return Pe2 = this, e4();
          } finally {
            Pe2 = t6;
          }
        }
      }
      on() {
        1 === ++this._on && (this.prevScope = Pe2, Pe2 = this);
      }
      off() {
        if (this._on > 0 && 0 === --this._on) {
          if (Pe2 === this) Pe2 = this.prevScope;
          else {
            let e4 = Pe2;
            for (; e4; ) {
              if (e4.prevScope === this) {
                e4.prevScope = this.prevScope;
                break;
              }
              e4 = e4.prevScope;
            }
          }
          this.prevScope = void 0;
        }
      }
      stop(e4) {
        if (this._active) {
          let t6, n3;
          for (this._active = false, t6 = 0, n3 = this.effects.length; t6 < n3; t6++) this.effects[t6].stop();
          for (this.effects.length = 0, t6 = 0, n3 = this.cleanups.length; t6 < n3; t6++) this.cleanups[t6]();
          if (this.cleanups.length = 0, this.scopes) {
            for (t6 = 0, n3 = this.scopes.length; t6 < n3; t6++) this.scopes[t6].stop(true);
            this.scopes.length = 0;
          }
          if (!this.detached && this.parent && !e4) {
            const e5 = this.parent.scopes.pop();
            e5 && e5 !== this && (this.parent.scopes[this.index] = e5, e5.index = this.index);
          }
          this.parent = void 0;
        }
      }
    };
    __name(getCurrentScope, "getCurrentScope");
    Ne2 = /* @__PURE__ */ new WeakSet();
    ReactiveEffect = class {
      static {
        __name(this, "ReactiveEffect");
      }
      constructor(e4) {
        this.fn = e4, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Pe2 && (Pe2.active ? Pe2.effects.push(this) : this.flags &= -2);
      }
      pause() {
        this.flags |= 64;
      }
      resume() {
        64 & this.flags && (this.flags &= -65, Ne2.has(this) && (Ne2.delete(this), this.trigger()));
      }
      notify() {
        2 & this.flags && !(32 & this.flags) || 8 & this.flags || batch(this);
      }
      run() {
        if (!(1 & this.flags)) return this.fn();
        this.flags |= 2, cleanupEffect(this), prepareDeps(this);
        const e4 = Oe2, t6 = Le2;
        Oe2 = this, Le2 = true;
        try {
          return this.fn();
        } finally {
          cleanupDeps(this), Oe2 = e4, Le2 = t6, this.flags &= -3;
        }
      }
      stop() {
        if (1 & this.flags) {
          for (let e4 = this.deps; e4; e4 = e4.nextDep) removeSub(e4);
          this.deps = this.depsTail = void 0, cleanupEffect(this), this.onStop && this.onStop(), this.flags &= -2;
        }
      }
      trigger() {
        64 & this.flags ? Ne2.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
      }
      runIfDirty() {
        isDirty(this) && this.run();
      }
      get dirty() {
        return isDirty(this);
      }
    };
    Ve2 = 0;
    __name(batch, "batch");
    __name(startBatch, "startBatch");
    __name(endBatch, "endBatch");
    __name(prepareDeps, "prepareDeps");
    __name(cleanupDeps, "cleanupDeps");
    __name(isDirty, "isDirty");
    __name(refreshComputed, "refreshComputed");
    __name(removeSub, "removeSub");
    __name(removeDep, "removeDep");
    Le2 = true;
    De2 = [];
    __name(pauseTracking, "pauseTracking");
    __name(resetTracking, "resetTracking");
    __name(cleanupEffect, "cleanupEffect");
    Ie2 = 0;
    Link = class {
      static {
        __name(this, "Link");
      }
      constructor(e4, t6) {
        this.sub = e4, this.dep = t6, this.version = t6.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
      }
    };
    Dep = class {
      static {
        __name(this, "Dep");
      }
      constructor(e4) {
        this.computed = e4, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
      }
      track(e4) {
        if (!Oe2 || !Le2 || Oe2 === this.computed) return;
        let t6 = this.activeLink;
        if (void 0 === t6 || t6.sub !== Oe2) t6 = this.activeLink = new Link(Oe2, this), Oe2.deps ? (t6.prevDep = Oe2.depsTail, Oe2.depsTail.nextDep = t6, Oe2.depsTail = t6) : Oe2.deps = Oe2.depsTail = t6, addSub(t6);
        else if (-1 === t6.version && (t6.version = this.version, t6.nextDep)) {
          const e5 = t6.nextDep;
          e5.prevDep = t6.prevDep, t6.prevDep && (t6.prevDep.nextDep = e5), t6.prevDep = Oe2.depsTail, t6.nextDep = void 0, Oe2.depsTail.nextDep = t6, Oe2.depsTail = t6, Oe2.deps === t6 && (Oe2.deps = e5);
        }
        return t6;
      }
      trigger(e4) {
        this.version++, Ie2++, this.notify(e4);
      }
      notify(e4) {
        startBatch();
        try {
          0;
          for (let e5 = this.subs; e5; e5 = e5.prevSub) e5.sub.notify() && e5.sub.dep.notify();
        } finally {
          endBatch();
        }
      }
    };
    __name(addSub, "addSub");
    je2 = /* @__PURE__ */ new WeakMap();
    Fe2 = /* @__PURE__ */ Symbol("");
    Be2 = /* @__PURE__ */ Symbol("");
    Ue2 = /* @__PURE__ */ Symbol("");
    __name(track, "track");
    __name(trigger, "trigger");
    __name(reactiveReadArray, "reactiveReadArray");
    __name(shallowReadArray, "shallowReadArray");
    __name(toWrapped, "toWrapped");
    We2 = { __proto__: null, [Symbol.iterator]() {
      return iterator(this, Symbol.iterator, (e4) => toWrapped(this, e4));
    }, concat(...e4) {
      return reactiveReadArray(this).concat(...e4.map((e5) => i(e5) ? reactiveReadArray(e5) : e5));
    }, entries() {
      return iterator(this, "entries", (e4) => (e4[1] = toWrapped(this, e4[1]), e4));
    }, every(e4, t6) {
      return apply(this, "every", e4, t6, void 0, arguments);
    }, filter(e4, t6) {
      return apply(this, "filter", e4, t6, (e5) => e5.map((e6) => toWrapped(this, e6)), arguments);
    }, find(e4, t6) {
      return apply(this, "find", e4, t6, (e5) => toWrapped(this, e5), arguments);
    }, findIndex(e4, t6) {
      return apply(this, "findIndex", e4, t6, void 0, arguments);
    }, findLast(e4, t6) {
      return apply(this, "findLast", e4, t6, (e5) => toWrapped(this, e5), arguments);
    }, findLastIndex(e4, t6) {
      return apply(this, "findLastIndex", e4, t6, void 0, arguments);
    }, forEach(e4, t6) {
      return apply(this, "forEach", e4, t6, void 0, arguments);
    }, includes(...e4) {
      return searchProxy(this, "includes", e4);
    }, indexOf(...e4) {
      return searchProxy(this, "indexOf", e4);
    }, join(e4) {
      return reactiveReadArray(this).join(e4);
    }, lastIndexOf(...e4) {
      return searchProxy(this, "lastIndexOf", e4);
    }, map(e4, t6) {
      return apply(this, "map", e4, t6, void 0, arguments);
    }, pop() {
      return noTracking(this, "pop");
    }, push(...e4) {
      return noTracking(this, "push", e4);
    }, reduce(e4, ...t6) {
      return reduce(this, "reduce", e4, t6);
    }, reduceRight(e4, ...t6) {
      return reduce(this, "reduceRight", e4, t6);
    }, shift() {
      return noTracking(this, "shift");
    }, some(e4, t6) {
      return apply(this, "some", e4, t6, void 0, arguments);
    }, splice(...e4) {
      return noTracking(this, "splice", e4);
    }, toReversed() {
      return reactiveReadArray(this).toReversed();
    }, toSorted(e4) {
      return reactiveReadArray(this).toSorted(e4);
    }, toSpliced(...e4) {
      return reactiveReadArray(this).toSpliced(...e4);
    }, unshift(...e4) {
      return noTracking(this, "unshift", e4);
    }, values() {
      return iterator(this, "values", (e4) => toWrapped(this, e4));
    } };
    __name(iterator, "iterator");
    ze2 = Array.prototype;
    __name(apply, "apply");
    __name(reduce, "reduce");
    __name(searchProxy, "searchProxy");
    __name(noTracking, "noTracking");
    qe2 = makeMap("__proto__,__v_isRef,__isVue");
    Ke2 = new Set(Object.getOwnPropertyNames(Symbol).filter((e4) => "arguments" !== e4 && "caller" !== e4).map((e4) => Symbol[e4]).filter(isSymbol));
    __name(hasOwnProperty, "hasOwnProperty");
    BaseReactiveHandler = class {
      static {
        __name(this, "BaseReactiveHandler");
      }
      constructor(e4 = false, t6 = false) {
        this._isReadonly = e4, this._isShallow = t6;
      }
      get(e4, t6, n3) {
        if ("__v_skip" === t6) return e4.__v_skip;
        const r4 = this._isReadonly, o5 = this._isShallow;
        if ("__v_isReactive" === t6) return !r4;
        if ("__v_isReadonly" === t6) return r4;
        if ("__v_isShallow" === t6) return o5;
        if ("__v_raw" === t6) return n3 === (r4 ? o5 ? st2 : ot2 : o5 ? rt2 : nt2).get(e4) || Object.getPrototypeOf(e4) === Object.getPrototypeOf(n3) ? e4 : void 0;
        const s4 = i(e4);
        if (!r4) {
          let e5;
          if (s4 && (e5 = We2[t6])) return e5;
          if ("hasOwnProperty" === t6) return hasOwnProperty;
        }
        const i5 = Reflect.get(e4, t6, isRef2(e4) ? e4 : n3);
        if (isSymbol(t6) ? Ke2.has(t6) : qe2(t6)) return i5;
        if (r4 || track(e4, 0, t6), o5) return i5;
        if (isRef2(i5)) {
          const e5 = s4 && isIntegerKey(t6) ? i5 : i5.value;
          return r4 && isObject(e5) ? readonly(e5) : e5;
        }
        return isObject(i5) ? r4 ? readonly(i5) : reactive(i5) : i5;
      }
    };
    MutableReactiveHandler = class extends BaseReactiveHandler {
      static {
        __name(this, "MutableReactiveHandler");
      }
      constructor(e4 = false) {
        super(false, e4);
      }
      set(e4, t6, n3, r4) {
        let o5 = e4[t6];
        const s4 = i(e4) && isIntegerKey(t6);
        if (!this._isShallow) {
          const e5 = isReadonly(o5);
          if (isShallow(n3) || isReadonly(n3) || (o5 = toRaw(o5), n3 = toRaw(n3)), !s4 && isRef2(o5) && !isRef2(n3)) return e5 || (o5.value = n3), true;
        }
        const i5 = s4 ? Number(t6) < e4.length : hasOwn(e4, t6), a4 = Reflect.set(e4, t6, n3, isRef2(e4) ? e4 : r4);
        return e4 === toRaw(r4) && (i5 ? hasChanged(n3, o5) && trigger(e4, "set", t6, n3) : trigger(e4, "add", t6, n3)), a4;
      }
      deleteProperty(e4, t6) {
        const n3 = hasOwn(e4, t6);
        e4[t6];
        const r4 = Reflect.deleteProperty(e4, t6);
        return r4 && n3 && trigger(e4, "delete", t6, void 0), r4;
      }
      has(e4, t6) {
        const n3 = Reflect.has(e4, t6);
        return isSymbol(t6) && Ke2.has(t6) || track(e4, 0, t6), n3;
      }
      ownKeys(e4) {
        return track(e4, 0, i(e4) ? "length" : Fe2), Reflect.ownKeys(e4);
      }
    };
    ReadonlyReactiveHandler = class extends BaseReactiveHandler {
      static {
        __name(this, "ReadonlyReactiveHandler");
      }
      constructor(e4 = false) {
        super(true, e4);
      }
      set(e4, t6) {
        return true;
      }
      deleteProperty(e4, t6) {
        return true;
      }
    };
    Je2 = new MutableReactiveHandler();
    Ge2 = new ReadonlyReactiveHandler();
    Ze2 = new MutableReactiveHandler(true);
    Ye2 = new ReadonlyReactiveHandler(true);
    toShallow = /* @__PURE__ */ __name((e4) => e4, "toShallow");
    getProto = /* @__PURE__ */ __name((e4) => Reflect.getPrototypeOf(e4), "getProto");
    __name(createReadonlyMethod, "createReadonlyMethod");
    __name(createInstrumentations, "createInstrumentations");
    __name(createInstrumentationGetter, "createInstrumentationGetter");
    Xe2 = { get: createInstrumentationGetter(false, false) };
    Qe2 = { get: createInstrumentationGetter(false, true) };
    et2 = { get: createInstrumentationGetter(true, false) };
    tt2 = { get: createInstrumentationGetter(true, true) };
    nt2 = /* @__PURE__ */ new WeakMap();
    rt2 = /* @__PURE__ */ new WeakMap();
    ot2 = /* @__PURE__ */ new WeakMap();
    st2 = /* @__PURE__ */ new WeakMap();
    __name(reactive, "reactive");
    __name(shallowReactive, "shallowReactive");
    __name(readonly, "readonly");
    __name(shallowReadonly, "shallowReadonly");
    __name(createReactiveObject, "createReactiveObject");
    __name(isReactive, "isReactive");
    __name(isReadonly, "isReadonly");
    __name(isShallow, "isShallow");
    __name(isProxy, "isProxy");
    __name(toRaw, "toRaw");
    __name(markRaw, "markRaw");
    toReactive = /* @__PURE__ */ __name((e4) => isObject(e4) ? reactive(e4) : e4, "toReactive");
    toReadonly = /* @__PURE__ */ __name((e4) => isObject(e4) ? readonly(e4) : e4, "toReadonly");
    __name(isRef2, "isRef");
    __name(ref, "ref");
    __name(shallowRef, "shallowRef");
    __name(createRef, "createRef");
    RefImpl = class {
      static {
        __name(this, "RefImpl");
      }
      constructor(e4, t6) {
        this.dep = new Dep(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = t6 ? e4 : toRaw(e4), this._value = t6 ? e4 : toReactive(e4), this.__v_isShallow = t6;
      }
      get value() {
        return this.dep.track(), this._value;
      }
      set value(e4) {
        const t6 = this._rawValue, n3 = this.__v_isShallow || isShallow(e4) || isReadonly(e4);
        e4 = n3 ? e4 : toRaw(e4), hasChanged(e4, t6) && (this._rawValue = e4, this._value = n3 ? e4 : toReactive(e4), this.dep.trigger());
      }
    };
    __name(unref, "unref");
    __name(toValue, "toValue");
    it2 = { get: /* @__PURE__ */ __name((e4, t6, n3) => "__v_raw" === t6 ? e4 : unref(Reflect.get(e4, t6, n3)), "get"), set: /* @__PURE__ */ __name((e4, t6, n3, r4) => {
      const o5 = e4[t6];
      return isRef2(o5) && !isRef2(n3) ? (o5.value = n3, true) : Reflect.set(e4, t6, n3, r4);
    }, "set") };
    __name(proxyRefs, "proxyRefs");
    CustomRefImpl = class {
      static {
        __name(this, "CustomRefImpl");
      }
      constructor(e4) {
        this.__v_isRef = true, this._value = void 0;
        const t6 = this.dep = new Dep(), { get: n3, set: r4 } = e4(t6.track.bind(t6), t6.trigger.bind(t6));
        this._get = n3, this._set = r4;
      }
      get value() {
        return this._value = this._get();
      }
      set value(e4) {
        this._set(e4);
      }
    };
    __name(customRef, "customRef");
    ObjectRefImpl = class {
      static {
        __name(this, "ObjectRefImpl");
      }
      constructor(e4, t6, n3) {
        this._object = e4, this._defaultValue = n3, this.__v_isRef = true, this._value = void 0, this._key = isSymbol(t6) ? t6 : String(t6), this._raw = toRaw(e4);
        let r4 = true, o5 = e4;
        if (!i(e4) || isSymbol(this._key) || !isIntegerKey(this._key)) do {
          r4 = !isProxy(o5) || isShallow(o5);
        } while (r4 && (o5 = o5.__v_raw));
        this._shallow = r4;
      }
      get value() {
        let e4 = this._object[this._key];
        return this._shallow && (e4 = unref(e4)), this._value = void 0 === e4 ? this._defaultValue : e4;
      }
      set value(e4) {
        if (this._shallow && isRef2(this._raw[this._key])) {
          const t6 = this._object[this._key];
          if (isRef2(t6)) return void (t6.value = e4);
        }
        this._object[this._key] = e4;
      }
      get dep() {
        return (function(e4, t6) {
          const n3 = je2.get(e4);
          return n3 && n3.get(t6);
        })(this._raw, this._key);
      }
    };
    GetterRefImpl = class {
      static {
        __name(this, "GetterRefImpl");
      }
      constructor(e4) {
        this._getter = e4, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
      }
      get value() {
        return this._value = this._getter();
      }
    };
    __name(propertyToRef, "propertyToRef");
    ComputedRefImpl = class {
      static {
        __name(this, "ComputedRefImpl");
      }
      constructor(e4, t6, n3) {
        this.fn = e4, this.setter = t6, this._value = void 0, this.dep = new Dep(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ie2 - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t6, this.isSSR = n3;
      }
      notify() {
        if (this.flags |= 16, !(8 & this.flags) && Oe2 !== this) return batch(this, true), true;
      }
      get value() {
        const e4 = this.dep.track();
        return refreshComputed(this), e4 && (e4.version = this.dep.version), this._value;
      }
      set value(e4) {
        this.setter && this.setter(e4);
      }
    };
    at2 = {};
    lt2 = /* @__PURE__ */ new WeakMap();
    __name(onWatcherCleanup, "onWatcherCleanup");
    __name(traverse, "traverse");
    ut2 = [];
    pt2 = { sp: "serverPrefetch hook", bc: "beforeCreate hook", c: "created hook", bm: "beforeMount hook", m: "mounted hook", bu: "beforeUpdate hook", u: "updated", bum: "beforeUnmount hook", um: "unmounted hook", a: "activated hook", da: "deactivated hook", ec: "errorCaptured hook", rtc: "renderTracked hook", rtg: "renderTriggered hook", 0: "setup function", 1: "render function", 2: "watcher getter", 3: "watcher callback", 4: "watcher cleanup function", 5: "native event handler", 6: "component event handler", 7: "vnode hook", 8: "directive hook", 9: "transition hook", 10: "app errorHandler", 11: "app warnHandler", 12: "ref function", 13: "async component loader", 14: "scheduler flush", 15: "component update", 16: "app unmount cleanup function" };
    __name(callWithErrorHandling, "callWithErrorHandling");
    __name(callWithAsyncErrorHandling, "callWithAsyncErrorHandling");
    __name(handleError, "handleError");
    dt2 = [];
    ft2 = -1;
    ht2 = [];
    gt2 = null;
    mt2 = 0;
    yt2 = Promise.resolve();
    vt2 = null;
    __name(nextTick, "nextTick");
    __name(queueJob, "queueJob");
    __name(queueFlush, "queueFlush");
    __name(queuePostFlushCb, "queuePostFlushCb");
    __name(flushPreFlushCbs, "flushPreFlushCbs");
    __name(flushPostFlushCbs, "flushPostFlushCbs");
    getId = /* @__PURE__ */ __name((e4) => null == e4.id ? 2 & e4.flags ? -1 : 1 / 0 : e4.id, "getId");
    __name(flushJobs, "flushJobs");
    bt2 = [];
    kt2 = null;
    Ct2 = null;
    __name(setCurrentRenderingInstance$1, "setCurrentRenderingInstance$1");
    __name(withCtx, "withCtx");
    __name(invokeDirectiveHook, "invokeDirectiveHook");
    __name(provide, "provide");
    __name(inject, "inject");
    __name(hasInjectionContext, "hasInjectionContext");
    St2 = /* @__PURE__ */ Symbol.for("v-scx");
    useSSRContext = /* @__PURE__ */ __name(() => inject(St2), "useSSRContext");
    __name(watchEffect, "watchEffect");
    __name(watchSyncEffect, "watchSyncEffect");
    __name(watch, "watch");
    __name(doWatch, "doWatch");
    __name(instanceWatch, "instanceWatch");
    __name(createPathGetter, "createPathGetter");
    wt2 = /* @__PURE__ */ new WeakMap();
    Rt2 = /* @__PURE__ */ Symbol("_vte");
    isTeleport = /* @__PURE__ */ __name((e4) => e4.__isTeleport, "isTeleport");
    isTeleportDisabled = /* @__PURE__ */ __name((e4) => e4 && (e4.disabled || "" === e4.disabled), "isTeleportDisabled");
    isTargetSVG = /* @__PURE__ */ __name((e4) => "undefined" != typeof SVGElement && e4 instanceof SVGElement, "isTargetSVG");
    isTargetMathML = /* @__PURE__ */ __name((e4) => "function" == typeof MathMLElement && e4 instanceof MathMLElement, "isTargetMathML");
    resolveTarget = /* @__PURE__ */ __name((e4, t6) => {
      const n3 = e4 && e4.to;
      if (isString(n3)) {
        if (t6) {
          return t6(n3);
        }
        return null;
      }
      return n3;
    }, "resolveTarget");
    __name(moveTeleport, "moveTeleport");
    Tt2 = { name: "Teleport", __isTeleport: true, process(e4, t6, n3, r4, o5, s4, i5, a4, l3, c4) {
      const { mc: u3, pc: p4, pbc: d3, o: { insert: f3, querySelector: g3, createText: m3, createComment: y4, parentNode: v3 } } = c4, _3 = isTeleportDisabled(t6.props);
      let { dynamicChildren: b4 } = t6;
      const mount = /* @__PURE__ */ __name((e5, t7, n4) => {
        16 & e5.shapeFlag && u3(e5.children, t7, n4, o5, s4, i5, a4, l3);
      }, "mount"), mountToTarget = /* @__PURE__ */ __name((e5 = t6) => {
        const n4 = isTeleportDisabled(e5.props), r5 = e5.target = resolveTarget(e5.props, g3), s5 = prepareAnchor(r5, e5, m3, f3);
        r5 && ("svg" !== i5 && isTargetSVG(r5) ? i5 = "svg" : "mathml" !== i5 && isTargetMathML(r5) && (i5 = "mathml"), o5 && o5.isCE && (o5.ce._teleportTargets || (o5.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r5), n4 || (mount(e5, r5, s5), updateCssVars(e5, false)));
      }, "mountToTarget"), queuePendingMount = /* @__PURE__ */ __name((e5) => {
        const mountJob = /* @__PURE__ */ __name(() => {
          if (wt2.get(e5) === mountJob) {
            if (wt2.delete(e5), isTeleportDisabled(e5.props)) {
              const t7 = v3(e5.el) || n3;
              mount(e5, t7, e5.anchor), updateCssVars(e5, true);
            }
            mountToTarget(e5);
          }
        }, "mountJob");
        wt2.set(e5, mountJob), an2(mountJob, s4);
      }, "queuePendingMount");
      if (null == e4) {
        const e5 = t6.el = m3(""), o6 = t6.anchor = m3("");
        if (f3(e5, n3, r4), f3(o6, n3, r4), (k4 = t6.props) && (k4.defer || "" === k4.defer) || s4 && s4.pendingBranch) return void queuePendingMount(t6);
        _3 && (mount(t6, n3, o6), updateCssVars(t6, true)), mountToTarget();
      } else {
        t6.el = e4.el;
        const r5 = t6.anchor = e4.anchor, u4 = wt2.get(e4);
        if (u4) return u4.flags |= 8, wt2.delete(e4), void queuePendingMount(t6);
        t6.targetStart = e4.targetStart;
        const f4 = t6.target = e4.target, m4 = t6.targetAnchor = e4.targetAnchor, y5 = isTeleportDisabled(e4.props), v4 = y5 ? n3 : f4, k5 = y5 ? r5 : m4;
        if ("svg" === i5 || isTargetSVG(f4) ? i5 = "svg" : ("mathml" === i5 || isTargetMathML(f4)) && (i5 = "mathml"), b4 ? (d3(e4.dynamicChildren, b4, v4, o5, s4, i5, a4), traverseStaticChildren(e4, t6, true)) : l3 || p4(e4, t6, v4, k5, o5, s4, i5, a4, false), _3) y5 ? t6.props && e4.props && t6.props.to !== e4.props.to && (t6.props.to = e4.props.to) : moveTeleport(t6, n3, r5, c4, 1);
        else if ((t6.props && t6.props.to) !== (e4.props && e4.props.to)) {
          const e5 = t6.target = resolveTarget(t6.props, g3);
          e5 && moveTeleport(t6, e5, null, c4, 0);
        } else y5 && moveTeleport(t6, f4, m4, c4, 1);
        updateCssVars(t6, _3);
      }
      var k4;
    }, remove(e4, t6, n3, { um: r4, o: { remove: o5 } }, s4) {
      const { shapeFlag: i5, children: a4, anchor: l3, targetStart: c4, targetAnchor: u3, target: p4, props: d3 } = e4;
      let f3 = s4 || !isTeleportDisabled(d3);
      const g3 = wt2.get(e4);
      if (g3 && (g3.flags |= 8, wt2.delete(e4), f3 = false), p4 && (o5(c4), o5(u3)), s4 && o5(l3), 16 & i5) for (let e5 = 0; e5 < a4.length; e5++) {
        const o6 = a4[e5];
        r4(o6, t6, n3, f3, !!o6.dynamicChildren);
      }
    }, move: moveTeleport, hydrate: /* @__PURE__ */ __name(function(e4, t6, n3, r4, o5, s4, { o: { nextSibling: i5, parentNode: a4, querySelector: l3, insert: c4, createText: u3 } }, p4) {
      function hydrateAnchor(e5, n4) {
        let r5 = n4;
        for (; r5; ) {
          if (r5 && 8 === r5.nodeType) {
            if ("teleport start anchor" === r5.data) t6.targetStart = r5;
            else if ("teleport anchor" === r5.data) {
              t6.targetAnchor = r5, e5._lpa = t6.targetAnchor && i5(t6.targetAnchor);
              break;
            }
          }
          r5 = i5(r5);
        }
      }
      __name(hydrateAnchor, "hydrateAnchor");
      function hydrateDisabledTeleport(e5, t7) {
        t7.anchor = p4(i5(e5), t7, a4(e5), n3, r4, o5, s4);
      }
      __name(hydrateDisabledTeleport, "hydrateDisabledTeleport");
      const d3 = t6.target = resolveTarget(t6.props, l3), f3 = isTeleportDisabled(t6.props);
      if (d3) {
        const l4 = d3._lpa || d3.firstChild;
        16 & t6.shapeFlag && (f3 ? (hydrateDisabledTeleport(e4, t6), hydrateAnchor(d3, l4), t6.targetAnchor || prepareAnchor(d3, t6, u3, c4, a4(e4) === d3 ? e4 : null)) : (t6.anchor = i5(e4), hydrateAnchor(d3, l4), t6.targetAnchor || prepareAnchor(d3, t6, u3, c4), p4(l4 && i5(l4), t6, d3, n3, r4, o5, s4))), updateCssVars(t6, f3);
      } else f3 && 16 & t6.shapeFlag && (hydrateDisabledTeleport(e4, t6), t6.targetStart = e4, t6.targetAnchor = i5(e4));
      return t6.anchor && i5(t6.anchor);
    }, "hydrate") };
    __name(updateCssVars, "updateCssVars");
    __name(prepareAnchor, "prepareAnchor");
    At2 = /* @__PURE__ */ Symbol("_leaveCb");
    xt2 = /* @__PURE__ */ Symbol("_enterCb");
    __name(useTransitionState, "useTransitionState");
    Et2 = [Function, Array];
    $t2 = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: Et2, onEnter: Et2, onAfterEnter: Et2, onEnterCancelled: Et2, onBeforeLeave: Et2, onLeave: Et2, onAfterLeave: Et2, onLeaveCancelled: Et2, onBeforeAppear: Et2, onAppear: Et2, onAfterAppear: Et2, onAppearCancelled: Et2 };
    recursiveGetSubtree = /* @__PURE__ */ __name((e4) => {
      const t6 = e4.subTree;
      return t6.component ? recursiveGetSubtree(t6.component) : t6;
    }, "recursiveGetSubtree");
    __name(findNonCommentChild, "findNonCommentChild");
    Pt2 = { name: "BaseTransition", props: $t2, setup(e4, { slots: t6 }) {
      const n3 = getCurrentInstance(), r4 = useTransitionState();
      return () => {
        const o5 = t6.default && getTransitionRawChildren(t6.default(), true), s4 = o5 && o5.length ? findNonCommentChild(o5) : n3.subTree ? createCommentVNode() : void 0;
        if (!s4) return;
        const i5 = toRaw(e4), { mode: a4 } = i5;
        if (r4.isLeaving) return emptyPlaceholder(s4);
        const l3 = getInnerChild$1(s4);
        if (!l3) return emptyPlaceholder(s4);
        let c4 = resolveTransitionHooks(l3, i5, r4, n3, (e5) => c4 = e5);
        l3.type !== dn2 && setTransitionHooks(l3, c4);
        let u3 = n3.subTree && getInnerChild$1(n3.subTree);
        if (u3 && u3.type !== dn2 && !isSameVNodeType(u3, l3) && recursiveGetSubtree(n3).type !== dn2) {
          let e5 = resolveTransitionHooks(u3, i5, r4, n3);
          if (setTransitionHooks(u3, e5), "out-in" === a4 && l3.type !== dn2) return r4.isLeaving = true, e5.afterLeave = () => {
            r4.isLeaving = false, 8 & n3.job.flags || n3.update(), delete e5.afterLeave, u3 = void 0;
          }, emptyPlaceholder(s4);
          "in-out" === a4 && l3.type !== dn2 ? e5.delayLeave = (e6, t7, n4) => {
            getLeavingNodesForType(r4, u3)[String(u3.key)] = u3, e6[At2] = () => {
              t7(), e6[At2] = void 0, delete c4.delayedLeave, u3 = void 0;
            }, c4.delayedLeave = () => {
              n4(), delete c4.delayedLeave, u3 = void 0;
            };
          } : u3 = void 0;
        } else u3 && (u3 = void 0);
        return s4;
      };
    } };
    __name(getLeavingNodesForType, "getLeavingNodesForType");
    __name(resolveTransitionHooks, "resolveTransitionHooks");
    __name(emptyPlaceholder, "emptyPlaceholder");
    __name(getInnerChild$1, "getInnerChild$1");
    __name(setTransitionHooks, "setTransitionHooks");
    __name(getTransitionRawChildren, "getTransitionRawChildren");
    __name(defineComponent, "defineComponent");
    __name(markAsyncBoundary, "markAsyncBoundary");
    __name(isTemplateRefKey, "isTemplateRefKey");
    Ot2 = /* @__PURE__ */ new WeakMap();
    __name(setRef, "setRef");
    __name(invalidatePendingSetRef, "invalidatePendingSetRef");
    Nt2 = false;
    logMismatchError = /* @__PURE__ */ __name(() => {
      Nt2 || (console.error("Hydration completed but contains mismatches."), Nt2 = true);
    }, "logMismatchError");
    getContainerType = /* @__PURE__ */ __name((e4) => {
      if (1 === e4.nodeType) return ((e5) => e5.namespaceURI.includes("svg") && "foreignObject" !== e5.tagName)(e4) ? "svg" : ((e5) => e5.namespaceURI.includes("MathML"))(e4) ? "mathml" : void 0;
    }, "getContainerType");
    isComment = /* @__PURE__ */ __name((e4) => 8 === e4.nodeType, "isComment");
    __name(createHydrationFunctions, "createHydrationFunctions");
    Ht2 = "data-allow-mismatch";
    Mt2 = { 0: "text", 1: "children", 2: "class", 3: "style", 4: "attribute" };
    __name(isMismatchAllowed, "isMismatchAllowed");
    Vt3 = getGlobalThis().requestIdleCallback || ((e4) => setTimeout(e4, 1));
    Lt2 = getGlobalThis().cancelIdleCallback || ((e4) => clearTimeout(e4));
    isAsyncWrapper = /* @__PURE__ */ __name((e4) => !!e4.type.__asyncLoader, "isAsyncWrapper");
    __name(createInnerComp, "createInnerComp");
    isKeepAlive = /* @__PURE__ */ __name((e4) => e4.type.__isKeepAlive, "isKeepAlive");
    Dt2 = { name: "KeepAlive", __isKeepAlive: true, props: { include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number] }, setup(e4, { slots: t6 }) {
      const n3 = getCurrentInstance(), r4 = n3.ctx;
      if (!r4.renderer) return () => {
        const e5 = t6.default && t6.default();
        return e5 && 1 === e5.length ? e5[0] : e5;
      };
      const o5 = /* @__PURE__ */ new Map(), s4 = /* @__PURE__ */ new Set();
      let i5 = null;
      const a4 = n3.suspense, { renderer: { p: l3, m: c4, um: u3, o: { createElement: p4 } } } = r4, d3 = p4("div");
      function unmount(e5) {
        resetShapeFlag(e5), u3(e5, n3, a4, true);
      }
      __name(unmount, "unmount");
      function pruneCache(e5) {
        o5.forEach((t7, n4) => {
          const r5 = getComponentName(isAsyncWrapper(t7) ? t7.type.__asyncResolved || {} : t7.type);
          r5 && !e5(r5) && pruneCacheEntry(n4);
        });
      }
      __name(pruneCache, "pruneCache");
      function pruneCacheEntry(e5) {
        const t7 = o5.get(e5);
        !t7 || i5 && isSameVNodeType(t7, i5) ? i5 && resetShapeFlag(i5) : unmount(t7), o5.delete(e5), s4.delete(e5);
      }
      __name(pruneCacheEntry, "pruneCacheEntry");
      r4.activate = (e5, t7, n4, r5, o6) => {
        const s5 = e5.component;
        c4(e5, t7, n4, 0, a4), l3(s5.vnode, e5, t7, n4, s5, a4, r5, e5.slotScopeIds, o6), an2(() => {
          s5.isDeactivated = false, s5.a && invokeArrayFns(s5.a);
          const t8 = e5.props && e5.props.onVnodeMounted;
          t8 && invokeVNodeHook(t8, s5.parent, e5);
        }, a4);
      }, r4.deactivate = (e5) => {
        const t7 = e5.component;
        invalidateMount(t7.m), invalidateMount(t7.a), c4(e5, d3, null, 1, a4), an2(() => {
          t7.da && invokeArrayFns(t7.da);
          const n4 = e5.props && e5.props.onVnodeUnmounted;
          n4 && invokeVNodeHook(n4, t7.parent, e5), t7.isDeactivated = true;
        }, a4);
      }, watch(() => [e4.include, e4.exclude], ([e5, t7]) => {
        e5 && pruneCache((t8) => matches(e5, t8)), t7 && pruneCache((e6) => !matches(t7, e6));
      }, { flush: "post", deep: true });
      let f3 = null;
      const cacheSubtree = /* @__PURE__ */ __name(() => {
        null != f3 && (isSuspense(n3.subTree.type) ? an2(() => {
          o5.set(f3, getInnerChild(n3.subTree));
        }, n3.subTree.suspense) : o5.set(f3, getInnerChild(n3.subTree)));
      }, "cacheSubtree");
      return jt2(cacheSubtree), Bt2(cacheSubtree), Ut2(() => {
        o5.forEach((e5) => {
          const { subTree: t7, suspense: r5 } = n3, o6 = getInnerChild(t7);
          if (e5.type === o6.type && e5.key === o6.key) {
            resetShapeFlag(o6);
            const e6 = o6.component.da;
            return void (e6 && an2(e6, r5));
          }
          unmount(e5);
        });
      }), () => {
        if (f3 = null, !t6.default) return i5 = null;
        const n4 = t6.default(), r5 = n4[0];
        if (n4.length > 1) return i5 = null, n4;
        if (!(isVNode$2(r5) && (4 & r5.shapeFlag || 128 & r5.shapeFlag))) return i5 = null, r5;
        let a5 = getInnerChild(r5);
        if (a5.type === dn2) return i5 = null, a5;
        const l4 = a5.type, c5 = getComponentName(isAsyncWrapper(a5) ? a5.type.__asyncResolved || {} : l4), { include: u4, exclude: p5, max: d4 } = e4;
        if (u4 && (!c5 || !matches(u4, c5)) || p5 && c5 && matches(p5, c5)) return a5.shapeFlag &= -257, i5 = a5, r5;
        const g3 = null == a5.key ? l4 : a5.key, m3 = o5.get(g3);
        return a5.el && (a5 = cloneVNode(a5), 128 & r5.shapeFlag && (r5.ssContent = a5)), f3 = g3, m3 ? (a5.el = m3.el, a5.component = m3.component, a5.transition && setTransitionHooks(a5, a5.transition), a5.shapeFlag |= 512, s4.delete(g3), s4.add(g3)) : (s4.add(g3), d4 && s4.size > parseInt(d4, 10) && pruneCacheEntry(s4.values().next().value)), a5.shapeFlag |= 256, i5 = a5, isSuspense(r5.type) ? r5 : a5;
      };
    } };
    __name(matches, "matches");
    __name(onActivated, "onActivated");
    __name(onDeactivated, "onDeactivated");
    __name(registerKeepAliveHook, "registerKeepAliveHook");
    __name(injectToKeepAliveRoot, "injectToKeepAliveRoot");
    __name(resetShapeFlag, "resetShapeFlag");
    __name(getInnerChild, "getInnerChild");
    __name(injectHook, "injectHook");
    createHook = /* @__PURE__ */ __name((e4) => (t6, n3 = _n) => {
      wn && "sp" !== e4 || injectHook(e4, (...e5) => t6(...e5), n3);
    }, "createHook");
    It2 = createHook("bm");
    jt2 = createHook("m");
    Ft2 = createHook("bu");
    Bt2 = createHook("u");
    Ut2 = createHook("bum");
    Wt2 = createHook("um");
    zt2 = createHook("sp");
    qt2 = createHook("rtg");
    Kt2 = createHook("rtc");
    __name(onErrorCaptured, "onErrorCaptured");
    Jt2 = "components";
    Gt2 = /* @__PURE__ */ Symbol.for("v-ndc");
    __name(resolveAsset, "resolveAsset");
    __name(resolve, "resolve");
    __name(ensureValidVNode$1, "ensureValidVNode$1");
    getPublicInstance = /* @__PURE__ */ __name((e4) => e4 ? isStatefulComponent(e4) ? getComponentPublicInstance(e4) : getPublicInstance(e4.parent) : null, "getPublicInstance");
    Zt2 = n(/* @__PURE__ */ Object.create(null), { $: /* @__PURE__ */ __name((e4) => e4, "$"), $el: /* @__PURE__ */ __name((e4) => e4.vnode.el, "$el"), $data: /* @__PURE__ */ __name((e4) => e4.data, "$data"), $props: /* @__PURE__ */ __name((e4) => e4.props, "$props"), $attrs: /* @__PURE__ */ __name((e4) => e4.attrs, "$attrs"), $slots: /* @__PURE__ */ __name((e4) => e4.slots, "$slots"), $refs: /* @__PURE__ */ __name((e4) => e4.refs, "$refs"), $parent: /* @__PURE__ */ __name((e4) => getPublicInstance(e4.parent), "$parent"), $root: /* @__PURE__ */ __name((e4) => getPublicInstance(e4.root), "$root"), $host: /* @__PURE__ */ __name((e4) => e4.ce, "$host"), $emit: /* @__PURE__ */ __name((e4) => e4.emit, "$emit"), $options: /* @__PURE__ */ __name((e4) => resolveMergedOptions(e4), "$options"), $forceUpdate: /* @__PURE__ */ __name((e4) => e4.f || (e4.f = () => {
      queueJob(e4.update);
    }), "$forceUpdate"), $nextTick: /* @__PURE__ */ __name((e4) => e4.n || (e4.n = nextTick.bind(e4.proxy)), "$nextTick"), $watch: /* @__PURE__ */ __name((e4) => instanceWatch.bind(e4), "$watch") });
    hasSetupBinding = /* @__PURE__ */ __name((e4, t6) => e4 !== t && !e4.__isScriptSetup && hasOwn(e4, t6), "hasSetupBinding");
    Yt2 = { get({ _: e4 }, t6) {
      if ("__v_skip" === t6) return true;
      const { ctx: n3, setupState: r4, data: o5, props: s4, accessCache: i5, type: a4, appContext: l3 } = e4;
      if ("$" !== t6[0]) {
        const e5 = i5[t6];
        if (void 0 !== e5) switch (e5) {
          case 1:
            return r4[t6];
          case 2:
            return o5[t6];
          case 4:
            return n3[t6];
          case 3:
            return s4[t6];
        }
        else {
          if (hasSetupBinding(r4, t6)) return i5[t6] = 1, r4[t6];
          if (o5 !== t && hasOwn(o5, t6)) return i5[t6] = 2, o5[t6];
          if (hasOwn(s4, t6)) return i5[t6] = 3, s4[t6];
          if (n3 !== t && hasOwn(n3, t6)) return i5[t6] = 4, n3[t6];
          Qt2 && (i5[t6] = 0);
        }
      }
      const c4 = Zt2[t6];
      let u3, p4;
      return c4 ? ("$attrs" === t6 && track(e4.attrs, 0, ""), c4(e4)) : (u3 = a4.__cssModules) && (u3 = u3[t6]) ? u3 : n3 !== t && hasOwn(n3, t6) ? (i5[t6] = 4, n3[t6]) : (p4 = l3.config.globalProperties, hasOwn(p4, t6) ? p4[t6] : void 0);
    }, set({ _: e4 }, t6, n3) {
      const { data: r4, setupState: o5, ctx: s4 } = e4;
      return hasSetupBinding(o5, t6) ? (o5[t6] = n3, true) : r4 !== t && hasOwn(r4, t6) ? (r4[t6] = n3, true) : !hasOwn(e4.props, t6) && (("$" !== t6[0] || !(t6.slice(1) in e4)) && (s4[t6] = n3, true));
    }, has({ _: { data: e4, setupState: t6, accessCache: n3, ctx: r4, appContext: o5, props: s4, type: i5 } }, a4) {
      let l3;
      return !!(n3[a4] || e4 !== t && "$" !== a4[0] && hasOwn(e4, a4) || hasSetupBinding(t6, a4) || hasOwn(s4, a4) || hasOwn(r4, a4) || hasOwn(Zt2, a4) || hasOwn(o5.config.globalProperties, a4) || (l3 = i5.__cssModules) && l3[a4]);
    }, defineProperty(e4, t6, n3) {
      return null != n3.get ? e4._.accessCache[t6] = 0 : hasOwn(n3, "value") && this.set(e4, t6, n3.value, null), Reflect.defineProperty(e4, t6, n3);
    } };
    Xt2 = n({}, Yt2, { get(e4, t6) {
      if (t6 !== Symbol.unscopables) return Yt2.get(e4, t6, e4);
    }, has: /* @__PURE__ */ __name((e4, t6) => "_" !== t6[0] && !E(t6), "has") });
    __name(getContext2, "getContext");
    __name(normalizePropsOrEmits, "normalizePropsOrEmits");
    Qt2 = true;
    __name(applyOptions, "applyOptions");
    __name(callHook$1, "callHook$1");
    __name(createWatcher, "createWatcher");
    __name(resolveMergedOptions, "resolveMergedOptions");
    __name(mergeOptions, "mergeOptions");
    en2 = { data: mergeDataFn, props: mergeEmitsOrPropsOptions, emits: mergeEmitsOrPropsOptions, methods: mergeObjectOptions, computed: mergeObjectOptions, beforeCreate: mergeAsArray2, created: mergeAsArray2, beforeMount: mergeAsArray2, mounted: mergeAsArray2, beforeUpdate: mergeAsArray2, updated: mergeAsArray2, beforeDestroy: mergeAsArray2, beforeUnmount: mergeAsArray2, destroyed: mergeAsArray2, unmounted: mergeAsArray2, activated: mergeAsArray2, deactivated: mergeAsArray2, errorCaptured: mergeAsArray2, serverPrefetch: mergeAsArray2, components: mergeObjectOptions, directives: mergeObjectOptions, watch: /* @__PURE__ */ __name(function(e4, t6) {
      if (!e4) return t6;
      if (!t6) return e4;
      const n3 = n(/* @__PURE__ */ Object.create(null), e4);
      for (const r4 in t6) n3[r4] = mergeAsArray2(e4[r4], t6[r4]);
      return n3;
    }, "watch"), provide: mergeDataFn, inject: /* @__PURE__ */ __name(function(e4, t6) {
      return mergeObjectOptions(normalizeInject(e4), normalizeInject(t6));
    }, "inject") };
    __name(mergeDataFn, "mergeDataFn");
    __name(normalizeInject, "normalizeInject");
    __name(mergeAsArray2, "mergeAsArray");
    __name(mergeObjectOptions, "mergeObjectOptions");
    __name(mergeEmitsOrPropsOptions, "mergeEmitsOrPropsOptions");
    __name(createAppContext, "createAppContext");
    tn2 = 0;
    __name(createAppAPI, "createAppAPI");
    nn2 = null;
    getModelModifiers = /* @__PURE__ */ __name((e4, t6) => "modelValue" === t6 || "model-value" === t6 ? e4.modelModifiers : e4[`${t6}Modifiers`] || e4[`${p(t6)}Modifiers`] || e4[`${d(t6)}Modifiers`], "getModelModifiers");
    __name(emit, "emit");
    rn2 = /* @__PURE__ */ new WeakMap();
    __name(normalizeEmitsOptions, "normalizeEmitsOptions");
    __name(isEmitListener, "isEmitListener");
    __name(renderComponentRoot$1, "renderComponentRoot$1");
    getFunctionalFallthrough = /* @__PURE__ */ __name((e4) => {
      let t6;
      for (const n3 in e4) ("class" === n3 || "style" === n3 || isOn(n3)) && ((t6 || (t6 = {}))[n3] = e4[n3]);
      return t6;
    }, "getFunctionalFallthrough");
    filterModelListeners = /* @__PURE__ */ __name((e4, t6) => {
      const n3 = {};
      for (const r4 in e4) isModelListener(r4) && r4.slice(9) in t6 || (n3[r4] = e4[r4]);
      return n3;
    }, "filterModelListeners");
    __name(hasPropsChanged, "hasPropsChanged");
    __name(hasPropValueChanged, "hasPropValueChanged");
    __name(updateHOCHostEl, "updateHOCHostEl");
    on2 = {};
    createInternalObject = /* @__PURE__ */ __name(() => Object.create(on2), "createInternalObject");
    isInternalObject = /* @__PURE__ */ __name((e4) => Object.getPrototypeOf(e4) === on2, "isInternalObject");
    __name(setFullProps, "setFullProps");
    __name(resolvePropValue, "resolvePropValue");
    sn2 = /* @__PURE__ */ new WeakMap();
    __name(normalizePropsOptions, "normalizePropsOptions");
    __name(validatePropName, "validatePropName");
    isInternalKey = /* @__PURE__ */ __name((e4) => "_" === e4 || "_ctx" === e4 || "$stable" === e4, "isInternalKey");
    normalizeSlotValue = /* @__PURE__ */ __name((e4) => i(e4) ? e4.map(normalizeVNode$1) : [normalizeVNode$1(e4)], "normalizeSlotValue");
    normalizeSlot = /* @__PURE__ */ __name((e4, t6, n3) => {
      if (t6._n) return t6;
      const r4 = withCtx((...e5) => normalizeSlotValue(t6(...e5)), n3);
      return r4._c = false, r4;
    }, "normalizeSlot");
    normalizeObjectSlots = /* @__PURE__ */ __name((e4, t6, n3) => {
      const r4 = e4._ctx;
      for (const n4 in e4) {
        if (isInternalKey(n4)) continue;
        const o5 = e4[n4];
        if (isFunction(o5)) t6[n4] = normalizeSlot(0, o5, r4);
        else if (null != o5) {
          const e5 = normalizeSlotValue(o5);
          t6[n4] = () => e5;
        }
      }
    }, "normalizeObjectSlots");
    normalizeVNodeSlots = /* @__PURE__ */ __name((e4, t6) => {
      const n3 = normalizeSlotValue(t6);
      e4.slots.default = () => n3;
    }, "normalizeVNodeSlots");
    assignSlots = /* @__PURE__ */ __name((e4, t6, n3) => {
      for (const r4 in t6) !n3 && isInternalKey(r4) || (e4[r4] = t6[r4]);
    }, "assignSlots");
    an2 = queueEffectWithSuspense;
    __name(createRenderer, "createRenderer");
    __name(createHydrationRenderer, "createHydrationRenderer");
    __name(baseCreateRenderer, "baseCreateRenderer");
    __name(resolveChildrenNamespace, "resolveChildrenNamespace");
    __name(toggleRecurse, "toggleRecurse");
    __name(needTransition, "needTransition");
    __name(traverseStaticChildren, "traverseStaticChildren");
    __name(locateNonHydratedAsyncRoot, "locateNonHydratedAsyncRoot");
    __name(invalidateMount, "invalidateMount");
    __name(resolveAsyncComponentPlaceholder, "resolveAsyncComponentPlaceholder");
    isSuspense = /* @__PURE__ */ __name((e4) => e4.__isSuspense, "isSuspense");
    ln2 = 0;
    cn2 = { name: "Suspense", __isSuspense: true, process(e4, t6, n3, r4, o5, s4, i5, a4, l3, c4) {
      if (null == e4) !(function(e5, t7, n4, r5, o6, s5, i6, a5, l4) {
        const { p: c5, o: { createElement: u3 } } = l4, p4 = u3("div"), d3 = e5.suspense = createSuspenseBoundary(e5, o6, r5, t7, p4, n4, s5, i6, a5, l4);
        c5(null, d3.pendingBranch = e5.ssContent, p4, null, r5, d3, s5, i6), d3.deps > 0 ? (triggerEvent(e5, "onPending"), triggerEvent(e5, "onFallback"), c5(null, e5.ssFallback, t7, n4, r5, null, s5, i6), setActiveBranch(d3, e5.ssFallback)) : d3.resolve(false, true);
      })(t6, n3, r4, o5, s4, i5, a4, l3, c4);
      else {
        if (s4 && s4.deps > 0 && !e4.suspense.isInFallback) return t6.suspense = e4.suspense, t6.suspense.vnode = t6, void (t6.el = e4.el);
        !(function(e5, t7, n4, r5, o6, s5, i6, a5, { p: l4, um: c5, o: { createElement: u3 } }) {
          const p4 = t7.suspense = e5.suspense;
          p4.vnode = t7, t7.el = e5.el;
          const d3 = t7.ssContent, f3 = t7.ssFallback, { activeBranch: g3, pendingBranch: m3, isInFallback: y4, isHydrating: v3 } = p4;
          if (m3) p4.pendingBranch = d3, isSameVNodeType(m3, d3) ? (l4(m3, d3, p4.hiddenContainer, null, o6, p4, s5, i6, a5), p4.deps <= 0 ? p4.resolve() : y4 && (v3 || (l4(g3, f3, n4, r5, o6, null, s5, i6, a5), setActiveBranch(p4, f3)))) : (p4.pendingId = ln2++, v3 ? (p4.isHydrating = false, p4.activeBranch = m3) : c5(m3, o6, p4), p4.deps = 0, p4.effects.length = 0, p4.hiddenContainer = u3("div"), y4 ? (l4(null, d3, p4.hiddenContainer, null, o6, p4, s5, i6, a5), p4.deps <= 0 ? p4.resolve() : (l4(g3, f3, n4, r5, o6, null, s5, i6, a5), setActiveBranch(p4, f3))) : g3 && isSameVNodeType(g3, d3) ? (l4(g3, d3, n4, r5, o6, p4, s5, i6, a5), p4.resolve(true)) : (l4(null, d3, p4.hiddenContainer, null, o6, p4, s5, i6, a5), p4.deps <= 0 && p4.resolve()));
          else if (g3 && isSameVNodeType(g3, d3)) l4(g3, d3, n4, r5, o6, p4, s5, i6, a5), setActiveBranch(p4, d3);
          else if (triggerEvent(t7, "onPending"), p4.pendingBranch = d3, 512 & d3.shapeFlag ? p4.pendingId = d3.component.suspenseId : p4.pendingId = ln2++, l4(null, d3, p4.hiddenContainer, null, o6, p4, s5, i6, a5), p4.deps <= 0) p4.resolve();
          else {
            const { timeout: e6, pendingId: t8 } = p4;
            e6 > 0 ? setTimeout(() => {
              p4.pendingId === t8 && p4.fallback(f3);
            }, e6) : 0 === e6 && p4.fallback(f3);
          }
        })(e4, t6, n3, r4, o5, i5, a4, l3, c4);
      }
    }, hydrate: /* @__PURE__ */ __name(function(e4, t6, n3, r4, o5, s4, i5, a4, l3) {
      const c4 = t6.suspense = createSuspenseBoundary(t6, r4, n3, e4.parentNode, document.createElement("div"), null, o5, s4, i5, a4, true), u3 = l3(e4, c4.pendingBranch = t6.ssContent, n3, c4, s4, i5);
      0 === c4.deps && c4.resolve(false, true);
      return u3;
    }, "hydrate"), normalize: /* @__PURE__ */ __name(function(e4) {
      const { shapeFlag: t6, children: n3 } = e4, r4 = 32 & t6;
      e4.ssContent = normalizeSuspenseSlot(r4 ? n3.default : n3), e4.ssFallback = r4 ? normalizeSuspenseSlot(n3.fallback) : createVNode(dn2);
    }, "normalize") };
    __name(triggerEvent, "triggerEvent");
    __name(createSuspenseBoundary, "createSuspenseBoundary");
    __name(normalizeSuspenseSlot, "normalizeSuspenseSlot");
    __name(queueEffectWithSuspense, "queueEffectWithSuspense");
    __name(setActiveBranch, "setActiveBranch");
    un = /* @__PURE__ */ Symbol.for("v-fgt");
    pn2 = /* @__PURE__ */ Symbol.for("v-txt");
    dn2 = /* @__PURE__ */ Symbol.for("v-cmt");
    fn = /* @__PURE__ */ Symbol.for("v-stc");
    hn = [];
    gn = null;
    __name(openBlock, "openBlock");
    __name(closeBlock, "closeBlock");
    mn = 1;
    __name(setBlockTracking, "setBlockTracking");
    __name(setupBlock, "setupBlock");
    __name(createBlock, "createBlock");
    __name(isVNode$2, "isVNode$2");
    __name(isSameVNodeType, "isSameVNodeType");
    normalizeKey = /* @__PURE__ */ __name(({ key: e4 }) => null != e4 ? e4 : null, "normalizeKey");
    normalizeRef = /* @__PURE__ */ __name(({ ref: e4, ref_key: t6, ref_for: n3 }) => ("number" == typeof e4 && (e4 = "" + e4), null != e4 ? isString(e4) || isRef2(e4) || isFunction(e4) ? { i: kt2, r: e4, k: t6, f: !!n3 } : e4 : null), "normalizeRef");
    __name(createBaseVNode, "createBaseVNode");
    createVNode = /* @__PURE__ */ __name(function(e4, t6 = null, n3 = null, r4 = 0, o5 = null, s4 = false) {
      e4 && e4 !== Gt2 || (e4 = dn2);
      if (isVNode$2(e4)) {
        const r5 = cloneVNode(e4, t6, true);
        return n3 && normalizeChildren(r5, n3), mn > 0 && !s4 && gn && (6 & r5.shapeFlag ? gn[gn.indexOf(e4)] = r5 : gn.push(r5)), r5.patchFlag = -2, r5;
      }
      i5 = e4, isFunction(i5) && "__vccOpts" in i5 && (e4 = e4.__vccOpts);
      var i5;
      if (t6) {
        t6 = guardReactiveProps(t6);
        let { class: e5, style: n4 } = t6;
        e5 && !isString(e5) && (t6.class = normalizeClass(e5)), isObject(n4) && (isProxy(n4) && !i(n4) && (n4 = n({}, n4)), t6.style = normalizeStyle(n4));
      }
      const a4 = isString(e4) ? 1 : isSuspense(e4) ? 128 : isTeleport(e4) ? 64 : isObject(e4) ? 4 : isFunction(e4) ? 2 : 0;
      return createBaseVNode(e4, t6, n3, r4, o5, a4, s4, true);
    }, "createVNode");
    __name(guardReactiveProps, "guardReactiveProps");
    __name(cloneVNode, "cloneVNode");
    __name(createTextVNode, "createTextVNode");
    __name(createCommentVNode, "createCommentVNode");
    __name(normalizeVNode$1, "normalizeVNode$1");
    __name(cloneIfMounted, "cloneIfMounted");
    __name(normalizeChildren, "normalizeChildren");
    __name(mergeProps, "mergeProps");
    __name(invokeVNodeHook, "invokeVNodeHook");
    yn = createAppContext();
    vn = 0;
    __name(createComponentInstance$1, "createComponentInstance$1");
    _n = null;
    getCurrentInstance = /* @__PURE__ */ __name(() => _n || kt2, "getCurrentInstance");
    {
      const e4 = getGlobalThis(), registerGlobalSetter = /* @__PURE__ */ __name((t6, n3) => {
        let r4;
        return (r4 = e4[t6]) || (r4 = e4[t6] = []), r4.push(n3), (e5) => {
          r4.length > 1 ? r4.forEach((t7) => t7(e5)) : r4[0](e5);
        };
      }, "registerGlobalSetter");
      bn = registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e5) => _n = e5), kn = registerGlobalSetter("__VUE_SSR_SETTERS__", (e5) => wn = e5);
    }
    setCurrentInstance = /* @__PURE__ */ __name((e4) => {
      const t6 = _n;
      return bn(e4), e4.scope.on(), () => {
        e4.scope.off(), bn(t6);
      };
    }, "setCurrentInstance");
    unsetCurrentInstance = /* @__PURE__ */ __name(() => {
      _n && _n.scope.off(), bn(null);
    }, "unsetCurrentInstance");
    __name(isStatefulComponent, "isStatefulComponent");
    wn = false;
    __name(setupComponent$1, "setupComponent$1");
    __name(handleSetupResult, "handleSetupResult");
    __name(finishComponentSetup, "finishComponentSetup");
    Rn = { get: /* @__PURE__ */ __name((e4, t6) => (track(e4, 0, ""), e4[t6]), "get") };
    __name(createSetupContext, "createSetupContext");
    __name(getComponentPublicInstance, "getComponentPublicInstance");
    __name(getComponentName, "getComponentName");
    computed = /* @__PURE__ */ __name((e4, t6) => {
      const n3 = (function(e5, t7, n4 = false) {
        let r4, o5;
        return isFunction(e5) ? r4 = e5 : (r4 = e5.get, o5 = e5.set), new ComputedRefImpl(r4, o5, n4);
      })(e4, 0, wn);
      return n3;
    }, "computed");
    __name(h2, "h");
    __name(isMemoSame, "isMemoSame");
    Tn = "3.5.34";
    An = NOOP;
    xn = pt2;
    En = _t2;
    setDevtoolsHook = /* @__PURE__ */ __name(function(e4, t6) {
      _t2 = e4, _t2 ? (_t2.enabled = true, bt2.forEach(({ event: e5, args: t7 }) => _t2.emit(e5, ...t7)), bt2 = []) : bt2 = [];
    }, "setDevtoolsHook");
    $n = { createComponentInstance: createComponentInstance$1, setupComponent: setupComponent$1, renderComponentRoot: renderComponentRoot$1, setCurrentRenderingInstance: setCurrentRenderingInstance$1, isVNode: isVNode$2, normalizeVNode: normalizeVNode$1, getComponentPublicInstance, ensureValidVNode: ensureValidVNode$1, pushWarningContext: /* @__PURE__ */ __name(function(e4) {
      ut2.push(e4);
    }, "pushWarningContext"), popWarningContext: /* @__PURE__ */ __name(function() {
      ut2.pop();
    }, "popWarningContext") };
    Pn = "undefined" != typeof document ? document : null;
    On = Pn && Pn.createElement("template");
    Nn = { insert: /* @__PURE__ */ __name((e4, t6, n3) => {
      t6.insertBefore(e4, n3 || null);
    }, "insert"), remove: /* @__PURE__ */ __name((e4) => {
      const t6 = e4.parentNode;
      t6 && t6.removeChild(e4);
    }, "remove"), createElement: /* @__PURE__ */ __name((e4, t6, n3, r4) => {
      const o5 = "svg" === t6 ? Pn.createElementNS("http://www.w3.org/2000/svg", e4) : "mathml" === t6 ? Pn.createElementNS("http://www.w3.org/1998/Math/MathML", e4) : n3 ? Pn.createElement(e4, { is: n3 }) : Pn.createElement(e4);
      return "select" === e4 && r4 && null != r4.multiple && o5.setAttribute("multiple", r4.multiple), o5;
    }, "createElement"), createText: /* @__PURE__ */ __name((e4) => Pn.createTextNode(e4), "createText"), createComment: /* @__PURE__ */ __name((e4) => Pn.createComment(e4), "createComment"), setText: /* @__PURE__ */ __name((e4, t6) => {
      e4.nodeValue = t6;
    }, "setText"), setElementText: /* @__PURE__ */ __name((e4, t6) => {
      e4.textContent = t6;
    }, "setElementText"), parentNode: /* @__PURE__ */ __name((e4) => e4.parentNode, "parentNode"), nextSibling: /* @__PURE__ */ __name((e4) => e4.nextSibling, "nextSibling"), querySelector: /* @__PURE__ */ __name((e4) => Pn.querySelector(e4), "querySelector"), setScopeId(e4, t6) {
      e4.setAttribute(t6, "");
    }, insertStaticContent(e4, t6, n3, r4, o5, s4) {
      const i5 = n3 ? n3.previousSibling : t6.lastChild;
      if (o5 && (o5 === s4 || o5.nextSibling)) for (; t6.insertBefore(o5.cloneNode(true), n3), o5 !== s4 && (o5 = o5.nextSibling); ) ;
      else {
        On.innerHTML = "svg" === r4 ? `<svg>${e4}</svg>` : "mathml" === r4 ? `<math>${e4}</math>` : e4;
        const o6 = On.content;
        if ("svg" === r4 || "mathml" === r4) {
          const e5 = o6.firstChild;
          for (; e5.firstChild; ) o6.appendChild(e5.firstChild);
          o6.removeChild(e5);
        }
        t6.insertBefore(o6, n3);
      }
      return [i5 ? i5.nextSibling : t6.firstChild, n3 ? n3.previousSibling : t6.lastChild];
    } };
    Hn = "transition";
    Mn = "animation";
    Vn = /* @__PURE__ */ Symbol("_vtc");
    Ln = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String };
    Dn = n({}, $t2, Ln);
    In = ((e4) => (e4.displayName = "Transition", e4.props = Dn, e4))((e4, { slots: t6 }) => h2(Pt2, resolveTransitionProps(e4), t6));
    callHook = /* @__PURE__ */ __name((e4, t6 = []) => {
      i(e4) ? e4.forEach((e5) => e5(...t6)) : e4 && e4(...t6);
    }, "callHook");
    hasExplicitCallback = /* @__PURE__ */ __name((e4) => !!e4 && (i(e4) ? e4.some((e5) => e5.length > 1) : e4.length > 1), "hasExplicitCallback");
    __name(resolveTransitionProps, "resolveTransitionProps");
    __name(NumberOf, "NumberOf");
    __name(addTransitionClass, "addTransitionClass");
    __name(removeTransitionClass, "removeTransitionClass");
    __name(nextFrame, "nextFrame");
    jn = 0;
    __name(whenTransitionEnds, "whenTransitionEnds");
    __name(getTransitionInfo, "getTransitionInfo");
    __name(getTimeout, "getTimeout");
    __name(toMs, "toMs");
    __name(forceReflow, "forceReflow");
    Fn = /* @__PURE__ */ Symbol("_vod");
    Bn = /* @__PURE__ */ Symbol("_vsh");
    Un = { name: "show", beforeMount(e4, { value: t6 }, { transition: n3 }) {
      e4[Fn] = "none" === e4.style.display ? "" : e4.style.display, n3 && t6 ? n3.beforeEnter(e4) : setDisplay(e4, t6);
    }, mounted(e4, { value: t6 }, { transition: n3 }) {
      n3 && t6 && n3.enter(e4);
    }, updated(e4, { value: t6, oldValue: n3 }, { transition: r4 }) {
      !t6 != !n3 && (r4 ? t6 ? (r4.beforeEnter(e4), setDisplay(e4, true), r4.enter(e4)) : r4.leave(e4, () => {
        setDisplay(e4, false);
      }) : setDisplay(e4, t6));
    }, beforeUnmount(e4, { value: t6 }) {
      setDisplay(e4, t6);
    } };
    __name(setDisplay, "setDisplay");
    Wn = /* @__PURE__ */ Symbol("");
    __name(setVarsOnVNode, "setVarsOnVNode");
    __name(setVarsOnNode, "setVarsOnNode");
    zn = /(?:^|;)\s*display\s*:/;
    qn = /\s*!important$/;
    __name(setStyle, "setStyle");
    Kn = ["Webkit", "Moz", "ms"];
    Jn = {};
    __name(shouldPreserveTextareaResizeStyle, "shouldPreserveTextareaResizeStyle");
    Gn = "http://www.w3.org/1999/xlink";
    __name(patchAttr, "patchAttr");
    __name(patchDOMProp, "patchDOMProp");
    __name(addEventListener, "addEventListener");
    Zn = /* @__PURE__ */ Symbol("_vei");
    __name(patchEvent, "patchEvent");
    Yn = /(?:Once|Passive|Capture)$/;
    Xn = 0;
    Qn = Promise.resolve();
    getNow = /* @__PURE__ */ __name(() => Xn || (Qn.then(() => Xn = 0), Xn = Date.now()), "getNow");
    isNativeOn = /* @__PURE__ */ __name((e4) => 111 === e4.charCodeAt(0) && 110 === e4.charCodeAt(1) && e4.charCodeAt(2) > 96 && e4.charCodeAt(2) < 123, "isNativeOn");
    patchProp = /* @__PURE__ */ __name((e4, t6, n3, r4, o5, s4) => {
      const i5 = "svg" === o5;
      "class" === t6 ? (function(e5, t7, n4) {
        const r5 = e5[Vn];
        r5 && (t7 = (t7 ? [t7, ...r5] : [...r5]).join(" ")), null == t7 ? e5.removeAttribute("class") : n4 ? e5.setAttribute("class", t7) : e5.className = t7;
      })(e4, r4, i5) : "style" === t6 ? (function(e5, t7, n4) {
        const r5 = e5.style, o6 = isString(n4);
        let s5 = false;
        if (n4 && !o6) {
          if (t7) if (isString(t7)) for (const e6 of t7.split(";")) {
            const t8 = e6.slice(0, e6.indexOf(":")).trim();
            null == n4[t8] && setStyle(r5, t8, "");
          }
          else for (const e6 in t7) null == n4[e6] && setStyle(r5, e6, "");
          for (const o7 in n4) {
            "display" === o7 && (s5 = true);
            const i6 = n4[o7];
            null != i6 ? shouldPreserveTextareaResizeStyle(e5, o7, !isString(t7) && t7 ? t7[o7] : void 0, i6) || setStyle(r5, o7, i6) : setStyle(r5, o7, "");
          }
        } else if (o6) {
          if (t7 !== n4) {
            const e6 = r5[Wn];
            e6 && (n4 += ";" + e6), r5.cssText = n4, s5 = zn.test(n4);
          }
        } else t7 && e5.removeAttribute("style");
        Fn in e5 && (e5[Fn] = s5 ? r5.display : "", e5[Bn] && (r5.display = "none"));
      })(e4, n3, r4) : isOn(t6) ? isModelListener(t6) || patchEvent(e4, t6, 0, r4, s4) : ("." === t6[0] ? (t6 = t6.slice(1), 1) : "^" === t6[0] ? (t6 = t6.slice(1), 0) : (function(e5, t7, n4, r5) {
        if (r5) return "innerHTML" === t7 || "textContent" === t7 || !!(t7 in e5 && isNativeOn(t7) && isFunction(n4));
        if ("spellcheck" === t7 || "draggable" === t7 || "translate" === t7 || "autocorrect" === t7) return false;
        if ("sandbox" === t7 && "IFRAME" === e5.tagName) return false;
        if ("form" === t7) return false;
        if ("list" === t7 && "INPUT" === e5.tagName) return false;
        if ("type" === t7 && "TEXTAREA" === e5.tagName) return false;
        if ("width" === t7 || "height" === t7) {
          const t8 = e5.tagName;
          if ("IMG" === t8 || "VIDEO" === t8 || "CANVAS" === t8 || "SOURCE" === t8) return false;
        }
        if (isNativeOn(t7) && isString(n4)) return false;
        return t7 in e5;
      })(e4, t6, r4, i5)) ? (patchDOMProp(e4, t6, r4), e4.tagName.includes("-") || "value" !== t6 && "checked" !== t6 && "selected" !== t6 || patchAttr(e4, t6, r4, i5, 0, "value" !== t6)) : e4._isVueCE && ((function(e5, t7) {
        const n4 = e5._def.props;
        if (!n4) return false;
        const r5 = p(t7);
        return Array.isArray(n4) ? n4.some((e6) => p(e6) === r5) : Object.keys(n4).some((e6) => p(e6) === r5);
      })(e4, t6) || e4._def.__asyncLoader && (/[A-Z]/.test(t6) || !isString(r4))) ? patchDOMProp(e4, p(t6), r4, 0, t6) : ("true-value" === t6 ? e4._trueValue = r4 : "false-value" === t6 && (e4._falseValue = r4), patchAttr(e4, t6, r4, i5));
    }, "patchProp");
    er = {};
    __name(defineCustomElement, "defineCustomElement");
    tr = "undefined" != typeof HTMLElement ? HTMLElement : class {
    };
    VueElement = class _VueElement extends tr {
      static {
        __name(this, "VueElement");
      }
      constructor(e4, t6 = {}, n3 = createApp) {
        super(), this._def = e4, this._props = t6, this._createApp = n3, this._isVueCE = true, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = false, this._resolved = false, this._patching = false, this._dirty = false, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && n3 !== createApp ? this._root = this.shadowRoot : false !== e4.shadowRoot ? (this.attachShadow(n({}, e4.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot) : this._root = this;
      }
      connectedCallback() {
        if (!this.isConnected) return;
        this.shadowRoot || this._resolved || this._parseSlots(), this._connected = true;
        let e4 = this;
        for (; e4 = e4 && (e4.assignedSlot || e4.parentNode || e4.host); ) if (e4 instanceof _VueElement) {
          this._parent = e4;
          break;
        }
        this._instance || (this._resolved ? this._mount(this._def) : e4 && e4._pendingResolve ? this._pendingResolve = e4._pendingResolve.then(() => {
          this._pendingResolve = void 0, this._resolveDef();
        }) : this._resolveDef());
      }
      _setParent(e4 = this._parent) {
        e4 && (this._instance.parent = e4._instance, this._inheritParentContext(e4));
      }
      _inheritParentContext(e4 = this._parent) {
        e4 && this._app && Object.setPrototypeOf(this._app._context.provides, e4._instance.provides);
      }
      disconnectedCallback() {
        this._connected = false, nextTick(() => {
          this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
        });
      }
      _processMutations(e4) {
        for (const t6 of e4) this._setAttr(t6.attributeName);
      }
      _resolveDef() {
        if (this._pendingResolve) return;
        for (let e5 = 0; e5 < this.attributes.length; e5++) this._setAttr(this.attributes[e5].name);
        this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: true });
        const resolve2 = /* @__PURE__ */ __name((e5, t6 = false) => {
          this._resolved = true, this._pendingResolve = void 0;
          const { props: n3, styles: r4 } = e5;
          let o5;
          if (n3 && !i(n3)) for (const e6 in n3) {
            const t7 = n3[e6];
            (t7 === Number || t7 && t7.type === Number) && (e6 in this._props && (this._props[e6] = toNumber(this._props[e6])), (o5 || (o5 = /* @__PURE__ */ Object.create(null)))[p(e6)] = true);
          }
          this._numberProps = o5, this._resolveProps(e5), this.shadowRoot && this._applyStyles(r4), this._mount(e5);
        }, "resolve"), e4 = this._def.__asyncLoader;
        e4 ? this._pendingResolve = e4().then((e5) => {
          e5.configureApp = this._def.configureApp, resolve2(this._def = e5, true);
        }) : resolve2(this._def);
      }
      _mount(e4) {
        this._app = this._createApp(e4), this._inheritParentContext(), e4.configureApp && e4.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
        const t6 = this._instance && this._instance.exposed;
        if (t6) for (const e5 in t6) hasOwn(this, e5) || Object.defineProperty(this, e5, { get: /* @__PURE__ */ __name(() => unref(t6[e5]), "get") });
      }
      _resolveProps(e4) {
        const { props: t6 } = e4, n3 = i(t6) ? t6 : Object.keys(t6 || {});
        for (const e5 of Object.keys(this)) "_" !== e5[0] && n3.includes(e5) && this._setProp(e5, this[e5]);
        for (const e5 of n3.map(p)) Object.defineProperty(this, e5, { get() {
          return this._getProp(e5);
        }, set(t7) {
          this._setProp(e5, t7, true, !this._patching);
        } });
      }
      _setAttr(e4) {
        if (e4.startsWith("data-v-")) return;
        const t6 = this.hasAttribute(e4);
        let n3 = t6 ? this.getAttribute(e4) : er;
        const r4 = p(e4);
        t6 && this._numberProps && this._numberProps[r4] && (n3 = toNumber(n3)), this._setProp(r4, n3, false, true);
      }
      _getProp(e4) {
        return this._props[e4];
      }
      _setProp(e4, t6, n3 = true, r4 = false) {
        if (t6 !== this._props[e4] && (this._dirty = true, t6 === er ? delete this._props[e4] : (this._props[e4] = t6, "key" === e4 && this._app && (this._app._ceVNode.key = t6)), r4 && this._instance && this._update(), n3)) {
          const n4 = this._ob;
          n4 && (this._processMutations(n4.takeRecords()), n4.disconnect()), true === t6 ? this.setAttribute(d(e4), "") : "string" == typeof t6 || "number" == typeof t6 ? this.setAttribute(d(e4), t6 + "") : t6 || this.removeAttribute(d(e4)), n4 && n4.observe(this, { attributes: true });
        }
      }
      _update() {
        const e4 = this._createVNode();
        this._app && (e4.appContext = this._app._context), render(e4, this._root);
      }
      _createVNode() {
        const e4 = {};
        this.shadowRoot || (e4.onVnodeMounted = e4.onVnodeUpdated = this._renderSlots.bind(this));
        const t6 = createVNode(this._def, n(e4, this._props));
        return this._instance || (t6.ce = (e5) => {
          this._instance = e5, e5.ce = this, e5.isCE = true;
          const dispatch = /* @__PURE__ */ __name((e6, t7) => {
            this.dispatchEvent(new CustomEvent(e6, isPlainObject(t7[0]) ? n({ detail: t7 }, t7[0]) : { detail: t7 }));
          }, "dispatch");
          e5.emit = (e6, ...t7) => {
            dispatch(e6, t7), d(e6) !== e6 && dispatch(d(e6), t7);
          }, this._setParent();
        }), t6;
      }
      _applyStyles(e4, t6, n3) {
        if (!e4) return;
        if (t6) {
          if (t6 === this._def || this._styleChildren.has(t6)) return;
          this._styleChildren.add(t6);
        }
        const r4 = this._nonce, o5 = this.shadowRoot, s4 = n3 ? this._getStyleAnchor(n3) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(o5);
        let i5 = null;
        for (let a4 = e4.length - 1; a4 >= 0; a4--) {
          const l3 = document.createElement("style");
          r4 && l3.setAttribute("nonce", r4), l3.textContent = e4[a4], o5.insertBefore(l3, i5 || s4), i5 = l3, 0 === a4 && (n3 || this._styleAnchors.set(this._def, l3), t6 && this._styleAnchors.set(t6, l3));
        }
      }
      _getStyleAnchor(e4) {
        if (!e4) return null;
        const t6 = this._styleAnchors.get(e4);
        return t6 && t6.parentNode === this.shadowRoot ? t6 : (t6 && this._styleAnchors.delete(e4), null);
      }
      _getRootStyleInsertionAnchor(e4) {
        for (let t6 = 0; t6 < e4.childNodes.length; t6++) {
          const n3 = e4.childNodes[t6];
          if (!(n3 instanceof HTMLStyleElement)) return n3;
        }
        return null;
      }
      _parseSlots() {
        const e4 = this._slots = {};
        let t6;
        for (; t6 = this.firstChild; ) {
          const n3 = 1 === t6.nodeType && t6.getAttribute("slot") || "default";
          (e4[n3] || (e4[n3] = [])).push(t6), this.removeChild(t6);
        }
      }
      _renderSlots() {
        const e4 = this._getSlots(), t6 = this._instance.type.__scopeId;
        for (let n3 = 0; n3 < e4.length; n3++) {
          const r4 = e4[n3], o5 = r4.getAttribute("name") || "default", s4 = this._slots[o5], i5 = r4.parentNode;
          if (s4) for (const e5 of s4) {
            if (t6 && 1 === e5.nodeType) {
              const n4 = t6 + "-s", r5 = document.createTreeWalker(e5, 1);
              let o6;
              for (e5.setAttribute(n4, ""); o6 = r5.nextNode(); ) o6.setAttribute(n4, "");
            }
            i5.insertBefore(e5, r4);
          }
          else for (; r4.firstChild; ) i5.insertBefore(r4.firstChild, r4);
          i5.removeChild(r4);
        }
      }
      _getSlots() {
        const e4 = [this];
        this._teleportTargets && e4.push(...this._teleportTargets);
        const t6 = /* @__PURE__ */ new Set();
        for (const n3 of e4) {
          const e5 = n3.querySelectorAll("slot");
          for (let n4 = 0; n4 < e5.length; n4++) t6.add(e5[n4]);
        }
        return Array.from(t6);
      }
      _injectChildStyle(e4, t6) {
        this._applyStyles(e4.styles, e4, t6);
      }
      _beginPatch() {
        this._patching = true, this._dirty = false;
      }
      _endPatch() {
        this._patching = false, this._dirty && this._instance && this._update();
      }
      _hasShadowRoot() {
        return false !== this._def.shadowRoot;
      }
      _removeChildStyle(e4) {
      }
    };
    __name(useHost, "useHost");
    nr = /* @__PURE__ */ new WeakMap();
    rr = /* @__PURE__ */ new WeakMap();
    or = /* @__PURE__ */ Symbol("_moveCb");
    sr = /* @__PURE__ */ Symbol("_enterCb");
    ir = ((e4) => (delete e4.props.mode, e4))({ name: "TransitionGroup", props: n({}, Dn, { tag: String, moveClass: String }), setup(e4, { slots: t6 }) {
      const n3 = getCurrentInstance(), r4 = useTransitionState();
      let o5, s4;
      return Bt2(() => {
        if (!o5.length) return;
        const t7 = e4.moveClass || `${e4.name || "v"}-move`;
        if (!(function(e5, t8, n4) {
          const r6 = e5.cloneNode(), o6 = e5[Vn];
          o6 && o6.forEach((e6) => {
            e6.split(/\s+/).forEach((e7) => e7 && r6.classList.remove(e7));
          });
          n4.split(/\s+/).forEach((e6) => e6 && r6.classList.add(e6)), r6.style.display = "none";
          const s5 = 1 === t8.nodeType ? t8 : t8.parentNode;
          s5.appendChild(r6);
          const { hasTransform: i5 } = getTransitionInfo(r6);
          return s5.removeChild(r6), i5;
        })(o5[0].el, n3.vnode.el, t7)) return void (o5 = []);
        o5.forEach(callPendingCbs), o5.forEach(recordPosition);
        const r5 = o5.filter(applyTranslation);
        forceReflow(n3.vnode.el), r5.forEach((e5) => {
          const n4 = e5.el, r6 = n4.style;
          addTransitionClass(n4, t7), r6.transform = r6.webkitTransform = r6.transitionDuration = "";
          const o6 = n4[or] = (e6) => {
            e6 && e6.target !== n4 || e6 && !e6.propertyName.endsWith("transform") || (n4.removeEventListener("transitionend", o6), n4[or] = null, removeTransitionClass(n4, t7));
          };
          n4.addEventListener("transitionend", o6);
        }), o5 = [];
      }), () => {
        const i5 = toRaw(e4), a4 = resolveTransitionProps(i5);
        let l3 = i5.tag || un;
        if (o5 = [], s4) for (let e5 = 0; e5 < s4.length; e5++) {
          const t7 = s4[e5];
          t7.el && t7.el instanceof Element && (o5.push(t7), setTransitionHooks(t7, resolveTransitionHooks(t7, a4, r4, n3)), nr.set(t7, getPosition(t7.el)));
        }
        s4 = t6.default ? getTransitionRawChildren(t6.default()) : [];
        for (let e5 = 0; e5 < s4.length; e5++) {
          const t7 = s4[e5];
          null != t7.key && setTransitionHooks(t7, resolveTransitionHooks(t7, a4, r4, n3));
        }
        return createVNode(l3, null, s4);
      };
    } });
    __name(callPendingCbs, "callPendingCbs");
    __name(recordPosition, "recordPosition");
    __name(applyTranslation, "applyTranslation");
    __name(getPosition, "getPosition");
    getModelAssigner = /* @__PURE__ */ __name((e4) => {
      const t6 = e4.props["onUpdate:modelValue"] || false;
      return i(t6) ? (e5) => invokeArrayFns(t6, e5) : t6;
    }, "getModelAssigner");
    __name(onCompositionStart, "onCompositionStart");
    __name(onCompositionEnd, "onCompositionEnd");
    ar = /* @__PURE__ */ Symbol("_assign");
    __name(castValue, "castValue");
    lr = { created(e4, { modifiers: { lazy: t6, trim: n3, number: r4 } }, o5) {
      e4[ar] = getModelAssigner(o5);
      const s4 = r4 || o5.props && "number" === o5.props.type;
      addEventListener(e4, t6 ? "change" : "input", (t7) => {
        t7.target.composing || e4[ar](castValue(e4.value, n3, s4));
      }), (n3 || s4) && addEventListener(e4, "change", () => {
        e4.value = castValue(e4.value, n3, s4);
      }), t6 || (addEventListener(e4, "compositionstart", onCompositionStart), addEventListener(e4, "compositionend", onCompositionEnd), addEventListener(e4, "change", onCompositionEnd));
    }, mounted(e4, { value: t6 }) {
      e4.value = null == t6 ? "" : t6;
    }, beforeUpdate(e4, { value: t6, oldValue: n3, modifiers: { lazy: r4, trim: o5, number: s4 } }, i5) {
      if (e4[ar] = getModelAssigner(i5), e4.composing) return;
      const a4 = null == t6 ? "" : t6;
      if ((!s4 && "number" !== e4.type || /^0\d/.test(e4.value) ? e4.value : looseToNumber(e4.value)) === a4) return;
      const l3 = e4.getRootNode();
      if ((l3 instanceof Document || l3 instanceof ShadowRoot) && l3.activeElement === e4 && "range" !== e4.type) {
        if (r4 && t6 === n3) return;
        if (o5 && e4.value.trim() === a4) return;
      }
      e4.value = a4;
    } };
    cr = { deep: true, created(e4, t6, n3) {
      e4[ar] = getModelAssigner(n3), addEventListener(e4, "change", () => {
        const t7 = e4._modelValue, n4 = getValue(e4), r4 = e4.checked, o5 = e4[ar];
        if (i(t7)) {
          const e5 = looseIndexOf(t7, n4), s4 = -1 !== e5;
          if (r4 && !s4) o5(t7.concat(n4));
          else if (!r4 && s4) {
            const n5 = [...t7];
            n5.splice(e5, 1), o5(n5);
          }
        } else if (isSet(t7)) {
          const e5 = new Set(t7);
          r4 ? e5.add(n4) : e5.delete(n4), o5(e5);
        } else o5(getCheckboxValue(e4, r4));
      });
    }, mounted: setChecked, beforeUpdate(e4, t6, n3) {
      e4[ar] = getModelAssigner(n3), setChecked(e4, t6, n3);
    } };
    __name(setChecked, "setChecked");
    ur = { created(e4, { value: t6 }, n3) {
      e4.checked = looseEqual(t6, n3.props.value), e4[ar] = getModelAssigner(n3), addEventListener(e4, "change", () => {
        e4[ar](getValue(e4));
      });
    }, beforeUpdate(e4, { value: t6, oldValue: n3 }, r4) {
      e4[ar] = getModelAssigner(r4), t6 !== n3 && (e4.checked = looseEqual(t6, r4.props.value));
    } };
    pr = { deep: true, created(e4, { value: t6, modifiers: { number: n3 } }, r4) {
      const o5 = isSet(t6);
      addEventListener(e4, "change", () => {
        const t7 = Array.prototype.filter.call(e4.options, (e5) => e5.selected).map((e5) => n3 ? looseToNumber(getValue(e5)) : getValue(e5));
        e4[ar](e4.multiple ? o5 ? new Set(t7) : t7 : t7[0]), e4._assigning = true, nextTick(() => {
          e4._assigning = false;
        });
      }), e4[ar] = getModelAssigner(r4);
    }, mounted(e4, { value: t6 }) {
      setSelected(e4, t6);
    }, beforeUpdate(e4, t6, n3) {
      e4[ar] = getModelAssigner(n3);
    }, updated(e4, { value: t6 }) {
      e4._assigning || setSelected(e4, t6);
    } };
    __name(setSelected, "setSelected");
    __name(getValue, "getValue");
    __name(getCheckboxValue, "getCheckboxValue");
    dr = { created(e4, t6, n3) {
      callModelHook(e4, t6, n3, null, "created");
    }, mounted(e4, t6, n3) {
      callModelHook(e4, t6, n3, null, "mounted");
    }, beforeUpdate(e4, t6, n3, r4) {
      callModelHook(e4, t6, n3, r4, "beforeUpdate");
    }, updated(e4, t6, n3, r4) {
      callModelHook(e4, t6, n3, r4, "updated");
    } };
    __name(resolveDynamicModel, "resolveDynamicModel");
    __name(callModelHook, "callModelHook");
    fr = ["ctrl", "shift", "alt", "meta"];
    hr = { stop: /* @__PURE__ */ __name((e4) => e4.stopPropagation(), "stop"), prevent: /* @__PURE__ */ __name((e4) => e4.preventDefault(), "prevent"), self: /* @__PURE__ */ __name((e4) => e4.target !== e4.currentTarget, "self"), ctrl: /* @__PURE__ */ __name((e4) => !e4.ctrlKey, "ctrl"), shift: /* @__PURE__ */ __name((e4) => !e4.shiftKey, "shift"), alt: /* @__PURE__ */ __name((e4) => !e4.altKey, "alt"), meta: /* @__PURE__ */ __name((e4) => !e4.metaKey, "meta"), left: /* @__PURE__ */ __name((e4) => "button" in e4 && 0 !== e4.button, "left"), middle: /* @__PURE__ */ __name((e4) => "button" in e4 && 1 !== e4.button, "middle"), right: /* @__PURE__ */ __name((e4) => "button" in e4 && 2 !== e4.button, "right"), exact: /* @__PURE__ */ __name((e4, t6) => fr.some((n3) => e4[`${n3}Key`] && !t6.includes(n3)), "exact") };
    gr = { esc: "escape", space: " ", up: "arrow-up", left: "arrow-left", right: "arrow-right", down: "arrow-down", delete: "backspace" };
    mr = n({ patchProp }, Nn);
    vr = false;
    __name(ensureRenderer, "ensureRenderer");
    __name(ensureHydrationRenderer, "ensureHydrationRenderer");
    render = /* @__PURE__ */ __name((...e4) => {
      ensureRenderer().render(...e4);
    }, "render");
    createApp = /* @__PURE__ */ __name((...e4) => {
      const t6 = ensureRenderer().createApp(...e4), { mount: n3 } = t6;
      return t6.mount = (e5) => {
        const r4 = normalizeContainer(e5);
        if (!r4) return;
        const o5 = t6._component;
        isFunction(o5) || o5.render || o5.template || (o5.template = r4.innerHTML), 1 === r4.nodeType && (r4.textContent = "");
        const s4 = n3(r4, false, resolveRootNamespace(r4));
        return r4 instanceof Element && (r4.removeAttribute("v-cloak"), r4.setAttribute("data-v-app", "")), s4;
      }, t6;
    }, "createApp");
    createSSRApp = /* @__PURE__ */ __name((...e4) => {
      const t6 = ensureHydrationRenderer().createApp(...e4), { mount: n3 } = t6;
      return t6.mount = (e5) => {
        const t7 = normalizeContainer(e5);
        if (t7) return n3(t7, true, resolveRootNamespace(t7));
      }, t6;
    }, "createSSRApp");
    __name(resolveRootNamespace, "resolveRootNamespace");
    __name(normalizeContainer, "normalizeContainer");
    _r = false;
    initDirectivesForSSR = /* @__PURE__ */ __name(() => {
      _r || (_r = true, lr.getSSRProps = ({ value: e4 }) => ({ value: e4 }), ur.getSSRProps = ({ value: e4 }, t6) => {
        if (t6.props && looseEqual(t6.props.value, e4)) return { checked: true };
      }, cr.getSSRProps = ({ value: e4 }, t6) => {
        if (i(e4)) {
          if (t6.props && looseIndexOf(e4, t6.props.value) > -1) return { checked: true };
        } else if (isSet(e4)) {
          if (t6.props && e4.has(t6.props.value)) return { checked: true };
        } else if (e4) return { checked: true };
      }, dr.getSSRProps = (e4, t6) => {
        if ("string" != typeof t6.type) return;
        const n3 = resolveDynamicModel(t6.type.toUpperCase(), t6.props && t6.props.type);
        return n3.getSSRProps ? n3.getSSRProps(e4, t6) : void 0;
      }, Un.getSSRProps = ({ value: e4 }) => {
        if (!e4) return { style: { display: "none" } };
      });
    }, "initDirectivesForSSR");
    br = Object.freeze(Object.defineProperty({ __proto__: null, BaseTransition: Pt2, BaseTransitionPropsValidators: $t2, Comment: dn2, DeprecationTypes: null, EffectScope, ErrorCodes: { SETUP_FUNCTION: 0, 0: "SETUP_FUNCTION", RENDER_FUNCTION: 1, 1: "RENDER_FUNCTION", NATIVE_EVENT_HANDLER: 5, 5: "NATIVE_EVENT_HANDLER", COMPONENT_EVENT_HANDLER: 6, 6: "COMPONENT_EVENT_HANDLER", VNODE_HOOK: 7, 7: "VNODE_HOOK", DIRECTIVE_HOOK: 8, 8: "DIRECTIVE_HOOK", TRANSITION_HOOK: 9, 9: "TRANSITION_HOOK", APP_ERROR_HANDLER: 10, 10: "APP_ERROR_HANDLER", APP_WARN_HANDLER: 11, 11: "APP_WARN_HANDLER", FUNCTION_REF: 12, 12: "FUNCTION_REF", ASYNC_COMPONENT_LOADER: 13, 13: "ASYNC_COMPONENT_LOADER", SCHEDULER: 14, 14: "SCHEDULER", COMPONENT_UPDATE: 15, 15: "COMPONENT_UPDATE", APP_UNMOUNT_CLEANUP: 16, 16: "APP_UNMOUNT_CLEANUP" }, ErrorTypeStrings: xn, Fragment: un, KeepAlive: Dt2, ReactiveEffect, Static: fn, Suspense: cn2, Teleport: Tt2, Text: pn2, TrackOpTypes: { GET: "get", HAS: "has", ITERATE: "iterate" }, Transition: In, TransitionGroup: ir, TriggerOpTypes: { SET: "set", ADD: "add", DELETE: "delete", CLEAR: "clear" }, VueElement, assertNumber: /* @__PURE__ */ __name(function(e4, t6) {
    }, "assertNumber"), callWithAsyncErrorHandling, callWithErrorHandling, camelize: p, capitalize: f, cloneVNode, compatUtils: null, computed, createApp, createBlock, createCommentVNode, createElementBlock: /* @__PURE__ */ __name(function(e4, t6, n3, r4, o5, s4) {
      return setupBlock(createBaseVNode(e4, t6, n3, r4, o5, s4, true));
    }, "createElementBlock"), createElementVNode: createBaseVNode, createHydrationRenderer, createPropsRestProxy: /* @__PURE__ */ __name(function(e4, t6) {
      const n3 = {};
      for (const r4 in e4) t6.includes(r4) || Object.defineProperty(n3, r4, { enumerable: true, get: /* @__PURE__ */ __name(() => e4[r4], "get") });
      return n3;
    }, "createPropsRestProxy"), createRenderer, createSSRApp, createSlots: /* @__PURE__ */ __name(function(e4, t6) {
      for (let n3 = 0; n3 < t6.length; n3++) {
        const r4 = t6[n3];
        if (i(r4)) for (let t7 = 0; t7 < r4.length; t7++) e4[r4[t7].name] = r4[t7].fn;
        else r4 && (e4[r4.name] = r4.key ? (...e5) => {
          const t7 = r4.fn(...e5);
          return t7 && (t7.key = r4.key), t7;
        } : r4.fn);
      }
      return e4;
    }, "createSlots"), createStaticVNode: /* @__PURE__ */ __name(function(e4, t6) {
      const n3 = createVNode(fn, null, e4);
      return n3.staticCount = t6, n3;
    }, "createStaticVNode"), createTextVNode, createVNode, customRef, defineAsyncComponent: /* @__PURE__ */ __name(function(e4) {
      isFunction(e4) && (e4 = { loader: e4 });
      const { loader: t6, loadingComponent: n3, errorComponent: r4, delay: o5 = 200, hydrate: s4, timeout: i5, suspensible: a4 = true, onError: l3 } = e4;
      let c4, u3 = null, p4 = 0;
      const load = /* @__PURE__ */ __name(() => {
        let e5;
        return u3 || (e5 = u3 = t6().catch((e6) => {
          if (e6 = e6 instanceof Error ? e6 : new Error(String(e6)), l3) return new Promise((t7, n4) => {
            l3(e6, () => t7((p4++, u3 = null, load())), () => n4(e6), p4 + 1);
          });
          throw e6;
        }).then((t7) => e5 !== u3 && u3 ? u3 : (t7 && (t7.__esModule || "Module" === t7[Symbol.toStringTag]) && (t7 = t7.default), c4 = t7, t7)));
      }, "load");
      return defineComponent({ name: "AsyncComponentWrapper", __asyncLoader: load, __asyncHydrate(e5, t7, n4) {
        let r5 = false;
        (t7.bu || (t7.bu = [])).push(() => r5 = true);
        const performHydrate = /* @__PURE__ */ __name(() => {
          r5 || n4();
        }, "performHydrate"), o6 = s4 ? () => {
          const n5 = s4(performHydrate, (t8) => (function(e6, t9) {
            if (isComment(e6) && "[" === e6.data) {
              let n6 = 1, r6 = e6.nextSibling;
              for (; r6; ) {
                if (1 === r6.nodeType) {
                  if (false === t9(r6)) break;
                } else if (isComment(r6)) if ("]" === r6.data) {
                  if (0 === --n6) break;
                } else "[" === r6.data && n6++;
                r6 = r6.nextSibling;
              }
            } else t9(e6);
          })(e5, t8));
          n5 && (t7.bum || (t7.bum = [])).push(n5);
        } : performHydrate;
        c4 ? o6() : load().then(() => !t7.isUnmounted && o6());
      }, get __asyncResolved() {
        return c4;
      }, setup() {
        const e5 = _n;
        if (markAsyncBoundary(e5), c4) return () => createInnerComp(c4, e5);
        const onError = /* @__PURE__ */ __name((t8) => {
          u3 = null, handleError(t8, e5, 13, !r4);
        }, "onError");
        if (a4 && e5.suspense || wn) return load().then((t8) => () => createInnerComp(t8, e5)).catch((e6) => (onError(e6), () => r4 ? createVNode(r4, { error: e6 }) : null));
        const t7 = ref(false), s5 = ref(), l4 = ref(!!o5);
        return o5 && setTimeout(() => {
          l4.value = false;
        }, o5), null != i5 && setTimeout(() => {
          if (!t7.value && !s5.value) {
            const e6 = new Error(`Async component timed out after ${i5}ms.`);
            onError(e6), s5.value = e6;
          }
        }, i5), load().then(() => {
          t7.value = true, e5.parent && isKeepAlive(e5.parent.vnode) && e5.parent.update();
        }).catch((e6) => {
          onError(e6), s5.value = e6;
        }), () => t7.value && c4 ? createInnerComp(c4, e5) : s5.value && r4 ? createVNode(r4, { error: s5.value }) : n3 && !l4.value ? createInnerComp(n3, e5) : void 0;
      } });
    }, "defineAsyncComponent"), defineComponent, defineCustomElement, defineEmits: /* @__PURE__ */ __name(function() {
      return null;
    }, "defineEmits"), defineExpose: /* @__PURE__ */ __name(function(e4) {
    }, "defineExpose"), defineModel: /* @__PURE__ */ __name(function() {
    }, "defineModel"), defineOptions: /* @__PURE__ */ __name(function(e4) {
    }, "defineOptions"), defineProps: /* @__PURE__ */ __name(function() {
      return null;
    }, "defineProps"), defineSSRCustomElement: /* @__PURE__ */ __name((e4, t6) => defineCustomElement(e4, t6, createSSRApp), "defineSSRCustomElement"), defineSlots: /* @__PURE__ */ __name(function() {
      return null;
    }, "defineSlots"), devtools: En, effect: /* @__PURE__ */ __name(function(e4, t6) {
      e4.effect instanceof ReactiveEffect && (e4 = e4.effect.fn);
      const n3 = new ReactiveEffect(e4);
      t6 && n(n3, t6);
      try {
        n3.run();
      } catch (e5) {
        throw n3.stop(), e5;
      }
      const r4 = n3.run.bind(n3);
      return r4.effect = n3, r4;
    }, "effect"), effectScope: /* @__PURE__ */ __name(function(e4) {
      return new EffectScope(e4);
    }, "effectScope"), getCurrentInstance, getCurrentScope, getCurrentWatcher: /* @__PURE__ */ __name(function() {
      return ct2;
    }, "getCurrentWatcher"), getTransitionRawChildren, guardReactiveProps, h: h2, handleError, hasInjectionContext, hydrate: /* @__PURE__ */ __name((...e4) => {
      ensureHydrationRenderer().hydrate(...e4);
    }, "hydrate"), hydrateOnIdle: /* @__PURE__ */ __name((e4 = 1e4) => (t6) => {
      const n3 = Vt3(t6, { timeout: e4 });
      return () => Lt2(n3);
    }, "hydrateOnIdle"), hydrateOnInteraction: /* @__PURE__ */ __name((e4 = []) => (t6, n3) => {
      isString(e4) && (e4 = [e4]);
      let r4 = false;
      const doHydrate = /* @__PURE__ */ __name((e5) => {
        r4 || (r4 = true, teardown(), t6(), e5.target.dispatchEvent(new e5.constructor(e5.type, e5)));
      }, "doHydrate"), teardown = /* @__PURE__ */ __name(() => {
        n3((t7) => {
          for (const n4 of e4) t7.removeEventListener(n4, doHydrate);
        });
      }, "teardown");
      return n3((t7) => {
        for (const n4 of e4) t7.addEventListener(n4, doHydrate, { once: true });
      }), teardown;
    }, "hydrateOnInteraction"), hydrateOnMediaQuery: /* @__PURE__ */ __name((e4) => (t6) => {
      if (e4) {
        const n3 = matchMedia(e4);
        if (!n3.matches) return n3.addEventListener("change", t6, { once: true }), () => n3.removeEventListener("change", t6);
        t6();
      }
    }, "hydrateOnMediaQuery"), hydrateOnVisible: /* @__PURE__ */ __name((e4) => (t6, n3) => {
      const r4 = new IntersectionObserver((e5) => {
        for (const n4 of e5) if (n4.isIntersecting) {
          r4.disconnect(), t6();
          break;
        }
      }, e4);
      return n3((e5) => {
        if (e5 instanceof Element) return (function(e6) {
          const { top: t7, left: n4, bottom: r5, right: o5 } = e6.getBoundingClientRect(), { innerHeight: s4, innerWidth: i5 } = window;
          return (t7 > 0 && t7 < s4 || r5 > 0 && r5 < s4) && (n4 > 0 && n4 < i5 || o5 > 0 && o5 < i5);
        })(e5) ? (t6(), r4.disconnect(), false) : void r4.observe(e5);
      }), () => r4.disconnect();
    }, "hydrateOnVisible"), initCustomFormatter: /* @__PURE__ */ __name(function() {
    }, "initCustomFormatter"), initDirectivesForSSR, inject, isMemoSame, isProxy, isReactive, isReadonly, isRef: isRef2, isRuntimeOnly: /* @__PURE__ */ __name(() => !Cn, "isRuntimeOnly"), isShallow, isVNode: isVNode$2, markRaw, mergeDefaults: /* @__PURE__ */ __name(function(e4, t6) {
      const n3 = normalizePropsOrEmits(e4);
      for (const e5 in t6) {
        if (e5.startsWith("__skip")) continue;
        let r4 = n3[e5];
        r4 ? i(r4) || isFunction(r4) ? r4 = n3[e5] = { type: r4, default: t6[e5] } : r4.default = t6[e5] : null === r4 && (r4 = n3[e5] = { default: t6[e5] }), r4 && t6[`__skip_${e5}`] && (r4.skipFactory = true);
      }
      return n3;
    }, "mergeDefaults"), mergeModels: /* @__PURE__ */ __name(function(e4, t6) {
      return e4 && t6 ? i(e4) && i(t6) ? e4.concat(t6) : n({}, normalizePropsOrEmits(e4), normalizePropsOrEmits(t6)) : e4 || t6;
    }, "mergeModels"), mergeProps, nextTick, nodeOps: Nn, normalizeClass, normalizeProps, normalizeStyle, onActivated, onBeforeMount: It2, onBeforeUnmount: Ut2, onBeforeUpdate: Ft2, onDeactivated, onErrorCaptured, onMounted: jt2, onRenderTracked: Kt2, onRenderTriggered: qt2, onScopeDispose: /* @__PURE__ */ __name(function(e4, t6 = false) {
      Pe2 && Pe2.cleanups.push(e4);
    }, "onScopeDispose"), onServerPrefetch: zt2, onUnmounted: Wt2, onUpdated: Bt2, onWatcherCleanup, openBlock, patchProp, popScopeId: /* @__PURE__ */ __name(function() {
      Ct2 = null;
    }, "popScopeId"), provide, proxyRefs, pushScopeId: /* @__PURE__ */ __name(function(e4) {
      Ct2 = e4;
    }, "pushScopeId"), queuePostFlushCb, reactive, readonly, ref, registerRuntimeCompiler: /* @__PURE__ */ __name(function(e4) {
      Cn = e4, Sn = /* @__PURE__ */ __name((e5) => {
        e5.render._rc && (e5.withProxy = new Proxy(e5.ctx, Xt2));
      }, "Sn");
    }, "registerRuntimeCompiler"), render, renderList: /* @__PURE__ */ __name(function(e4, t6, n3, r4) {
      let o5;
      const s4 = n3 && n3[r4], i5 = i(e4);
      if (i5 || isString(e4)) {
        let n4 = false, r5 = false;
        i5 && isReactive(e4) && (n4 = !isShallow(e4), r5 = isReadonly(e4), e4 = shallowReadArray(e4)), o5 = new Array(e4.length);
        for (let i6 = 0, a4 = e4.length; i6 < a4; i6++) o5[i6] = t6(n4 ? r5 ? toReadonly(toReactive(e4[i6])) : toReactive(e4[i6]) : e4[i6], i6, void 0, s4 && s4[i6]);
      } else if ("number" == typeof e4) {
        o5 = new Array(e4);
        for (let n4 = 0; n4 < e4; n4++) o5[n4] = t6(n4 + 1, n4, void 0, s4 && s4[n4]);
      } else if (isObject(e4)) if (e4[Symbol.iterator]) o5 = Array.from(e4, (e5, n4) => t6(e5, n4, void 0, s4 && s4[n4]));
      else {
        const n4 = Object.keys(e4);
        o5 = new Array(n4.length);
        for (let r5 = 0, i6 = n4.length; r5 < i6; r5++) {
          const i7 = n4[r5];
          o5[r5] = t6(e4[i7], i7, r5, s4 && s4[r5]);
        }
      }
      else o5 = [];
      return n3 && (n3[r4] = o5), o5;
    }, "renderList"), renderSlot: /* @__PURE__ */ __name(function(e4, t6, n3 = {}, r4, o5) {
      if (kt2.ce || kt2.parent && isAsyncWrapper(kt2.parent) && kt2.parent.ce) {
        const e5 = Object.keys(n3).length > 0;
        return "default" !== t6 && (n3.name = t6), openBlock(), createBlock(un, null, [createVNode("slot", n3, r4 && r4())], e5 ? -2 : 64);
      }
      let s4 = e4[t6];
      s4 && s4._c && (s4._d = false), openBlock();
      const i5 = s4 && ensureValidVNode$1(s4(n3)), a4 = n3.key || i5 && i5.key, l3 = createBlock(un, { key: (a4 && !isSymbol(a4) ? a4 : `_${t6}`) + (!i5 && r4 ? "_fb" : "") }, i5 || (r4 ? r4() : []), i5 && 1 === e4._ ? 64 : -2);
      return !o5 && l3.scopeId && (l3.slotScopeIds = [l3.scopeId + "-s"]), s4 && s4._c && (s4._d = true), l3;
    }, "renderSlot"), resolveComponent: /* @__PURE__ */ __name(function(e4, t6) {
      return resolveAsset(Jt2, e4, true, t6) || e4;
    }, "resolveComponent"), resolveDirective: /* @__PURE__ */ __name(function(e4) {
      return resolveAsset("directives", e4);
    }, "resolveDirective"), resolveDynamicComponent: /* @__PURE__ */ __name(function(e4) {
      return isString(e4) ? resolveAsset(Jt2, e4, false) || e4 : e4 || Gt2;
    }, "resolveDynamicComponent"), resolveFilter: null, resolveTransitionHooks, setBlockTracking, setDevtoolsHook, setTransitionHooks, shallowReactive, shallowReadonly, shallowRef, ssrContextKey: St2, ssrUtils: $n, stop: /* @__PURE__ */ __name(function(e4) {
      e4.effect.stop();
    }, "stop"), toDisplayString, toHandlerKey: u, toHandlers: /* @__PURE__ */ __name(function(e4, t6) {
      const n3 = {};
      for (const r4 in e4) n3[t6 && /[A-Z]/.test(r4) ? `on:${r4}` : u(r4)] = e4[r4];
      return n3;
    }, "toHandlers"), toRaw, toRef: /* @__PURE__ */ __name(function(e4, t6, n3) {
      return isRef2(e4) ? e4 : isFunction(e4) ? new GetterRefImpl(e4) : isObject(e4) && arguments.length > 1 ? propertyToRef(e4, t6, n3) : ref(e4);
    }, "toRef"), toRefs: /* @__PURE__ */ __name(function(e4) {
      const t6 = i(e4) ? new Array(e4.length) : {};
      for (const n3 in e4) t6[n3] = propertyToRef(e4, n3);
      return t6;
    }, "toRefs"), toValue, transformVNodeArgs: /* @__PURE__ */ __name(function(e4) {
    }, "transformVNodeArgs"), triggerRef: /* @__PURE__ */ __name(function(e4) {
      e4.dep && e4.dep.trigger();
    }, "triggerRef"), unref, useAttrs: /* @__PURE__ */ __name(function() {
      return getContext2().attrs;
    }, "useAttrs"), useCssModule: /* @__PURE__ */ __name(function(e4 = "$style") {
      {
        const t6 = getCurrentInstance();
        if (!t6) return t;
        const n3 = t6.type.__cssModules;
        if (!n3) return t;
        const r4 = n3[e4];
        return r4 || t;
      }
    }, "useCssModule"), useCssVars: /* @__PURE__ */ __name(function(e4) {
      const t6 = getCurrentInstance();
      if (!t6) return;
      const n3 = t6.ut = (n4 = e4(t6.proxy)) => {
        Array.from(document.querySelectorAll(`[data-v-owner="${t6.uid}"]`)).forEach((e5) => setVarsOnNode(e5, n4));
      }, setVars = /* @__PURE__ */ __name(() => {
        const r4 = e4(t6.proxy);
        t6.ce ? setVarsOnNode(t6.ce, r4) : setVarsOnVNode(t6.subTree, r4), n3(r4);
      }, "setVars");
      Ft2(() => {
        queuePostFlushCb(setVars);
      }), jt2(() => {
        watch(setVars, NOOP, { flush: "post" });
        const e5 = new MutationObserver(setVars);
        e5.observe(t6.subTree.el.parentNode, { childList: true }), Wt2(() => e5.disconnect());
      });
    }, "useCssVars"), useHost, useId: /* @__PURE__ */ __name(function() {
      const e4 = getCurrentInstance();
      return e4 ? (e4.appContext.config.idPrefix || "v") + "-" + e4.ids[0] + e4.ids[1]++ : "";
    }, "useId"), useModel: /* @__PURE__ */ __name(function(e4, t6, n3 = t) {
      const r4 = getCurrentInstance(), o5 = p(t6), s4 = d(t6), i5 = getModelModifiers(e4, o5), a4 = customRef((i6, a5) => {
        let l3, c4, u3 = t;
        return watchSyncEffect(() => {
          const t7 = e4[o5];
          hasChanged(l3, t7) && (l3 = t7, a5());
        }), { get: /* @__PURE__ */ __name(() => (i6(), n3.get ? n3.get(l3) : l3), "get"), set(e5) {
          const i7 = n3.set ? n3.set(e5) : e5;
          if (!(hasChanged(i7, l3) || u3 !== t && hasChanged(e5, u3))) return;
          const p4 = r4.vnode.props;
          p4 && (t6 in p4 || o5 in p4 || s4 in p4) && (`onUpdate:${t6}` in p4 || `onUpdate:${o5}` in p4 || `onUpdate:${s4}` in p4) || (l3 = e5, a5()), r4.emit(`update:${t6}`, i7), hasChanged(e5, i7) && hasChanged(e5, u3) && !hasChanged(i7, c4) && a5(), u3 = e5, c4 = i7;
        } };
      });
      return a4[Symbol.iterator] = () => {
        let e5 = 0;
        return { next: /* @__PURE__ */ __name(() => e5 < 2 ? { value: e5++ ? i5 || t : a4, done: false } : { done: true }, "next") };
      }, a4;
    }, "useModel"), useSSRContext, useShadowRoot: /* @__PURE__ */ __name(function() {
      const e4 = useHost();
      return e4 && e4.shadowRoot;
    }, "useShadowRoot"), useSlots: /* @__PURE__ */ __name(function() {
      return getContext2().slots;
    }, "useSlots"), useTemplateRef: /* @__PURE__ */ __name(function(e4) {
      const t6 = getCurrentInstance(), n3 = shallowRef(null);
      if (t6) {
        const r4 = t6.refs === t ? t6.refs = {} : t6.refs;
        Object.defineProperty(r4, e4, { enumerable: true, get: /* @__PURE__ */ __name(() => n3.value, "get"), set: /* @__PURE__ */ __name((e5) => n3.value = e5, "set") });
      }
      return n3;
    }, "useTemplateRef"), useTransitionState, vModelCheckbox: cr, vModelDynamic: dr, vModelRadio: ur, vModelSelect: pr, vModelText: lr, vShow: Un, version: Tn, warn: An, watch, watchEffect, watchPostEffect: /* @__PURE__ */ __name(function(e4, t6) {
      return doWatch(e4, null, { flush: "post" });
    }, "watchPostEffect"), watchSyncEffect, withAsyncContext: /* @__PURE__ */ __name(function(e4) {
      const t6 = getCurrentInstance(), n3 = wn;
      let r4 = e4();
      unsetCurrentInstance(), n3 && kn(false);
      const restore = /* @__PURE__ */ __name(() => {
        setCurrentInstance(t6), n3 && kn(true);
      }, "restore"), cleanup = /* @__PURE__ */ __name(() => {
        getCurrentInstance() !== t6 && t6.scope.off(), unsetCurrentInstance(), n3 && kn(false);
      }, "cleanup");
      return isPromise(r4) && (r4 = r4.catch((e5) => {
        throw restore(), Promise.resolve().then(() => Promise.resolve().then(cleanup)), e5;
      })), [r4, () => {
        restore(), Promise.resolve().then(cleanup);
      }];
    }, "withAsyncContext"), withCtx, withDefaults: /* @__PURE__ */ __name(function(e4, t6) {
      return null;
    }, "withDefaults"), withDirectives: /* @__PURE__ */ __name(function(e4, t6) {
      if (null === kt2) return e4;
      const n3 = getComponentPublicInstance(kt2), r4 = e4.dirs || (e4.dirs = []);
      for (let e5 = 0; e5 < t6.length; e5++) {
        let [o5, s4, i5, a4 = t] = t6[e5];
        o5 && (isFunction(o5) && (o5 = { mounted: o5, updated: o5 }), o5.deep && traverse(s4), r4.push({ dir: o5, instance: n3, value: s4, oldValue: void 0, arg: i5, modifiers: a4 }));
      }
      return e4;
    }, "withDirectives"), withKeys: /* @__PURE__ */ __name((e4, t6) => {
      const n3 = e4._withKeys || (e4._withKeys = {}), r4 = t6.join(".");
      return n3[r4] || (n3[r4] = (n4) => {
        if (!("key" in n4)) return;
        const r5 = d(n4.key);
        return t6.some((e5) => e5 === r5 || gr[e5] === r5) ? e4(n4) : void 0;
      });
    }, "withKeys"), withMemo: /* @__PURE__ */ __name(function(e4, t6, n3, r4) {
      const o5 = n3[r4];
      if (o5 && isMemoSame(o5, e4)) return o5;
      const s4 = t6();
      return s4.memo = e4.slice(), s4.cacheIndex = r4, n3[r4] = s4;
    }, "withMemo"), withModifiers: /* @__PURE__ */ __name((e4, t6) => {
      if (!e4) return e4;
      const n3 = e4._withMods || (e4._withMods = {}), r4 = t6.join(".");
      return n3[r4] || (n3[r4] = (n4, ...r5) => {
        for (let e5 = 0; e5 < t6.length; e5++) {
          const r6 = hr[t6[e5]];
          if (r6 && r6(n4, t6)) return;
        }
        return e4(n4, ...r5);
      });
    }, "withModifiers"), withScopeId: /* @__PURE__ */ __name((e4) => withCtx, "withScopeId") }, Symbol.toStringTag, { value: "Module" }));
    VueResolver = /* @__PURE__ */ __name((e4, t6) => isRef2(t6) ? toValue(t6) : t6, "VueResolver");
    kr = "usehead";
    __name(injectHead, "injectHead");
    __name(useHead, "useHead");
    __name(createHead, "createHead");
    Cr = makeMap(",key,ref,innerHTML,textContent,ref_key,ref_for");
    __name(ssrRenderAttrs, "ssrRenderAttrs");
    __name(ssrRenderDynamicAttr, "ssrRenderDynamicAttr");
    __name(ssrRenderClass, "ssrRenderClass");
    __name(ssrRenderStyle, "ssrRenderStyle");
    __name(ssrRenderComponent, "ssrRenderComponent");
    ({ ensureValidVNode: Sr } = $n);
    __name(ssrInterpolate, "ssrInterpolate");
    {
      const e4 = getGlobalThis(), registerGlobalSetter = /* @__PURE__ */ __name((t6, n3) => {
        let r4;
        return (r4 = e4[t6]) || (r4 = e4[t6] = []), r4.push(n3), (e5) => {
          r4.length > 1 ? r4.forEach((t7) => t7(e5)) : r4[0](e5);
        };
      }, "registerGlobalSetter");
      registerGlobalSetter("__VUE_INSTANCE_SETTERS__", (e5) => e5), registerGlobalSetter("__VUE_SSR_SETTERS__", (e5) => e5);
    }
    __name(ssrRenderSuspense, "ssrRenderSuspense");
    ({ createComponentInstance: wr, setCurrentRenderingInstance: Rr2, setupComponent: Tr, renderComponentRoot: Ar, normalizeVNode: xr, pushWarningContext: Er, popWarningContext: $r } = $n);
    __name(createBuffer, "createBuffer");
    __name(renderComponentVNode, "renderComponentVNode");
    __name(renderComponentSubTree, "renderComponentSubTree");
    __name(renderVNode, "renderVNode");
    __name(renderVNodeChildren, "renderVNodeChildren");
    ({ isVNode: Pr } = $n);
    __name(nestedUnrollBuffer, "nestedUnrollBuffer");
    __name(unrollBuffer$1, "unrollBuffer$1");
    __name(unrollBufferSync$1, "unrollBufferSync$1");
    __name(renderToString, "renderToString");
    ({ isVNode: Or } = $n);
    initDirectivesForSSR();
    Nr = false;
    Hr = false;
    Mr = { meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }, { charset: "utf-8" }], link: [], style: [], script: [], noscript: [] };
    Vr = { id: "teleports" };
    Lr = { id: "__nuxt-loader" };
    __name(baseURL, "baseURL");
    __name(buildAssetsURL, "buildAssetsURL");
    __name(publicAssetsURL, "publicAssetsURL");
    globalThis.__buildAssetsURL = buildAssetsURL, globalThis.__publicAssetsURL = publicAssetsURL;
    Dr = `<div${propsToString({ id: "__nuxt" })}>`;
    Ir = "</div>";
    getPrecomputedDependencies = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_client_precomputed(), client_precomputed_exports)).then((e4) => e4.default || e4).then((e4) => "function" == typeof e4 ? e4() : e4), "getPrecomputedDependencies");
    jr = lazyCachedFunction(async () => {
      const e4 = await Promise.resolve().then(() => (init_server(), server_exports)).then(function(e5) {
        return e5.s;
      }).then((e5) => e5.default || e5);
      if (!e4) throw new Error("Server bundle is not available");
      return createRenderer$1(e4, { precomputed: await getPrecomputedDependencies(), manifest: void 0, renderToString: /* @__PURE__ */ __name(async function(e5, t6) {
        const n3 = await renderToString(e5, t6);
        return Dr + n3 + Ir;
      }, "renderToString"), buildAssetsURL });
    });
    Fr = lazyCachedFunction(async () => {
      const e4 = await getPrecomputedDependencies(), t6 = await Promise.resolve().then(() => (init_virtual_spa_template(), virtual_spa_template_exports)).then((e5) => e5.template).catch(() => "").then((e5) => {
        {
          const t7 = `<div${propsToString(Lr)}>`;
          return Dr + Ir + (e5 ? t7 + e5 + "</div>" : "");
        }
      }), r4 = createRenderer$1(() => () => {
      }, { precomputed: e4, manifest: void 0, renderToString: /* @__PURE__ */ __name(() => t6, "renderToString"), buildAssetsURL }), o5 = await r4.renderToString({});
      return { rendererContext: r4.rendererContext, renderToString: /* @__PURE__ */ __name((e5) => {
        const t7 = useRuntimeConfig2(e5.event);
        return e5.modules ||= /* @__PURE__ */ new Set(), e5.payload.serverRendered = false, e5.config = { public: t7.public, app: t7.app }, Promise.resolve(o5);
      }, "renderToString") };
    });
    __name(lazyCachedFunction, "lazyCachedFunction");
    Br = lazyCachedFunction(() => Promise.resolve().then(() => (init_styles(), styles_exports)).then((e4) => e4.default || e4));
    Ur = { "<": "\\u003C", "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\u2028": "\\u2028", "\u2029": "\\u2029" };
    DevalueError = class extends Error {
      static {
        __name(this, "DevalueError");
      }
      constructor(e4, t6, n3, r4) {
        super(e4), this.name = "DevalueError", this.path = t6.join(""), this.value = n3, this.root = r4;
      }
    };
    __name(is_primitive, "is_primitive");
    Wr = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    __name(is_plain_object, "is_plain_object");
    __name(get_type, "get_type");
    __name(get_escaped_char, "get_escaped_char");
    __name(stringify_string, "stringify_string");
    __name(enumerable_symbols, "enumerable_symbols");
    zr = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    __name(stringify_key, "stringify_key");
    __name(is_valid_array_index_string, "is_valid_array_index_string");
    __name(valid_array_indices, "valid_array_indices");
    qr2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
    Kr = /[<\b\f\n\r\t\0\u2028\u2029]/g;
    Jr = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
    __name(uneval, "uneval");
    __name(escape_unsafe_char, "escape_unsafe_char");
    __name(escape_unsafe_chars, "escape_unsafe_chars");
    __name(stringify_primitive$1, "stringify_primitive$1");
    Gr = "function" == typeof Uint8Array.fromBase64;
    Zr = "object" == typeof H && void 0 !== H.versions?.node;
    Yr = Gr ? function(e4) {
      return new Uint8Array(e4).toBase64();
    } : Zr ? function(e4) {
      return Vt2.from(e4).toString("base64");
    } : function(e4) {
      const t6 = new Uint8Array(e4);
      let n3 = "";
      for (let e5 = 0; e5 < t6.length; e5 += 32768) {
        const r4 = t6.subarray(e5, e5 + 32768);
        n3 += String.fromCharCode.apply(null, r4);
      }
      return btoa(n3);
    };
    __name(stringify, "stringify");
    __name(stringify_primitive, "stringify_primitive");
    __name(renderPayloadJsonScript, "renderPayloadJsonScript");
    __name(encodeForwardSlashes, "encodeForwardSlashes");
    __name(splitPayload, "splitPayload");
    Xr2 = { disableDefaults: true };
    __name(createSSRContext, "createSSRContext");
    Qr = {};
    eo = [];
    globalThis.__buildAssetsURL = buildAssetsURL, globalThis.__publicAssetsURL = publicAssetsURL;
    to = !!Vr.id;
    no = to ? `<div${propsToString(Vr)}>` : "";
    ro = to ? "</div>" : "";
    oo = /^[^?]*\/_payload.json(?:\?.*)?$/;
    so = "_payload.json";
    io = defineRenderHandler((e4) => {
      const t6 = e4.path.startsWith("/__nuxt_error") ? getQuery(e4) : null;
      if (t6 && !("__unenv__" in e4.node.req)) throw createError({ status: 404, statusText: "Page Not Found: /__nuxt_error", message: "Page Not Found: /__nuxt_error" });
      return (async function(e5, t7) {
        const n3 = useNitroApp(), r4 = createSSRContext(e5), o5 = { mode: "server" };
        if (r4.head.push(Mr, o5), t7) {
          const e6 = t7.status || t7.statusCode;
          if (e6 && (t7.status = t7.statusCode = Number.parseInt(e6)), "string" == typeof t7.data) try {
            t7.data = destr(t7.data);
          } catch {
          }
          !(function(e7, t8) {
            e7.error = true, e7.payload = { error: t8 }, e7.url = t8.url;
          })(r4, t7);
        }
        const a4 = getRouteRules(e5), l3 = !r4.noSSR && Hr, c4 = !l3 || Nr, u3 = !!l3 && oo.test(r4.url);
        if (u3) {
          const t8 = r4.url.substring(0, r4.url.lastIndexOf("/")) || "/";
          r4.url = t8, e5._path = e5.node.req.url = t8;
        }
        false === a4.ssr && (r4.noSSR = true);
        const m3 = l3 ? joinURL(r4.runtimeConfig.app.cdnURL || r4.runtimeConfig.app.baseURL, r4.url.replace(/\?.*$/, ""), so) + "?" + r4.runtimeConfig.app.buildId : void 0, y4 = await (function(e6) {
          return e6.noSSR ? Fr() : jr();
        })(r4);
        for (const e6 of eo) r4.modules.add(e6);
        const v3 = await y4.renderToString(r4).catch(async (e6) => {
          if ((r4["~renderResponse"] || r4._renderResponse) && "skipping render" === e6.message) return {};
          const n4 = !t7 && r4.payload?.error || e6;
          throw await r4.nuxt?.hooks.callHook("app:error", n4), n4;
        }), _3 = r4["~renderResponse"] || r4._renderResponse || u3 ? [] : await (async function(e6) {
          const t8 = await Br(), n4 = /* @__PURE__ */ new Set();
          for (const r5 of e6) if (r5 in t8 && t8[r5]) for (const e7 of await t8[r5]()) n4.add(e7);
          return Array.from(n4).map((e7) => ({ innerHTML: e7 }));
        })(r4.modules ?? []);
        if (await r4.nuxt?.hooks.callHook("app:rendered", { ssrContext: r4, renderResult: v3 }), r4["~renderResponse"] || r4._renderResponse) return r4["~renderResponse"] || r4._renderResponse;
        if (r4.payload?.error && !t7) throw r4.payload.error;
        if (u3) {
          const e6 = (function(e7) {
            return { body: encodeForwardSlashes(stringify(splitPayload(e7).payload, e7["~payloadReducers"])), statusCode: getResponseStatus(e7.event), statusMessage: getResponseStatusText(e7.event), headers: { "content-type": "application/json;charset=utf-8", "x-powered-by": "Nuxt" } };
          })(r4);
          return e6;
        }
        const b4 = a4.noScripts, { styles: k4, scripts: C3 } = getRequestDependencies(r4, y4.rendererContext);
        !l3 || c4 || b4 || r4.head.push({ link: [{ rel: "preload", as: "fetch", crossorigin: "anonymous", href: m3 }] }, o5);
        _3.length && r4.head.push({ style: _3 });
        const S3 = [];
        for (const e6 of Object.values(k4)) S3.push({ rel: "stylesheet", href: y4.rendererContext.buildAssetsURL(e6.file), crossorigin: "" });
        S3.length && r4.head.push({ link: S3 }, o5);
        if (!b4) {
          if (r4["~lazyHydratedModules"]) for (const e6 of r4["~lazyHydratedModules"]) r4.modules?.delete(e6);
          r4.head.push({ link: getPreloadLinks(r4, y4.rendererContext) }, o5), r4.head.push({ link: getPrefetchLinks(r4, y4.rendererContext) }, o5), r4.head.push({ script: renderPayloadJsonScript(c4 ? { ssrContext: r4, data: r4.payload } : { ssrContext: r4, data: splitPayload(r4).initial, src: m3 }) }, { ...o5, tagPosition: "bodyClose", tagPriority: "high" });
        }
        if (!a4.noScripts) {
          const e6 = "head";
          r4.head.push({ script: Object.values(C3).map((t8) => ({ type: t8.module ? "module" : null, src: y4.rendererContext.buildAssetsURL(t8.file), defer: !t8.module || null, tagPosition: e6, crossorigin: "" })) }, o5);
        }
        const { headTags: w3, bodyTags: R3, bodyTagsOpen: T3, htmlAttrs: A3, bodyAttrs: x4 } = await renderSSRHead(r4.head, Qr), E3 = { htmlAttrs: A3 ? [A3] : [], head: normalizeChunks([w3]), bodyAttrs: x4 ? [x4] : [], bodyPrepend: normalizeChunks([T3, r4.teleports?.body]), body: [v3.html, no + (to ? joinTags([r4.teleports?.[`#${Vr.id}`]]) : "") + ro], bodyAppend: [R3] };
        return await n3.hooks.callHook("render:html", E3, { event: e5 }), { body: renderHTMLDocument(E3), statusCode: getResponseStatus(e5), statusMessage: getResponseStatusText(e5), headers: { "content-type": "text/html;charset=utf-8", "x-powered-by": "Nuxt" } };
      })(e4, t6);
    });
    __name(normalizeChunks, "normalizeChunks");
    __name(joinTags, "joinTags");
    __name(joinAttrs, "joinAttrs");
    __name(renderHTMLDocument, "renderHTMLDocument");
    ao = Object.freeze(Object.defineProperty({ __proto__: null, default: io }, Symbol.toStringTag, { value: "Module" }));
  }
});

// .output/server/chunks/_/nitro.mjs
function isEventTarget(e4) {
  return "function" == typeof e4?.addEventListener;
}
function addCatch(e4, t6, r4, s4) {
  if (e4[g2]) try {
    const a4 = t6.then;
    "function" == typeof a4 && a4.call(t6, void 0, function(t7) {
      setTimeout(emitUnhandledRejectionOrErr, 0, e4, t7, r4, s4);
    });
  } catch (t7) {
    e4.emit("error", t7);
  }
}
function emitUnhandledRejectionOrErr(e4, t6, r4, s4) {
  if ("function" == typeof e4[d2]) e4[d2](t6, r4, ...s4);
  else {
    const r5 = e4[g2];
    try {
      e4[g2] = false, e4.emit("error", t6);
    } finally {
      e4[g2] = r5;
    }
  }
}
function _getMaxListeners(e4) {
  return void 0 === e4._maxListeners ? r2 : e4._maxListeners;
}
function enhanceStackTrace(e4, t6) {
  let r4 = "";
  try {
    const { name: e5 } = this.constructor;
    "EventEmitter" !== e5 && (r4 = ` on ${e5} instance`);
  } catch {
  }
  const s4 = `
Emitted 'error' event${r4} at:
`, a4 = (t6.stack || "").split("\n").slice(1);
  return e4.stack + s4 + a4.join("\n");
}
function _addListener(e4, t6, r4, s4) {
  let a4, c4, u3;
  if (c4 = e4._events, void 0 === c4 ? (c4 = e4._events = { __proto__: null }, e4._eventsCount = 0) : (void 0 !== c4.newListener && (e4.emit("newListener", t6, r4.listener ?? r4), c4 = e4._events), u3 = c4[t6]), void 0 === u3) c4[t6] = r4, ++e4._eventsCount;
  else if ("function" == typeof u3 ? u3 = c4[t6] = s4 ? [r4, u3] : [u3, r4] : s4 ? u3.unshift(r4) : u3.push(r4), a4 = _getMaxListeners(e4), a4 > 0 && u3.length > a4 && !u3.warned) {
    u3.warned = true;
    const r5 = new h3(`Possible EventEmitter memory leak detected. ${u3.length} ${String(t6)} listeners added to ${inspect(e4)}. MaxListeners is ${a4}. Use emitter.setMaxListeners() to increase limit`, { name: "MaxListenersExceededWarning", emitter: e4, type: t6, count: u3.length });
    console.warn(r5);
  }
  return e4;
}
function onceWrapper() {
  if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function _onceWrap(e4, t6, r4) {
  const s4 = { fired: false, wrapFn: void 0, target: e4, type: t6, listener: r4 }, a4 = onceWrapper.bind(s4);
  return a4.listener = r4, s4.wrapFn = a4, a4;
}
function _listeners(e4, t6, r4) {
  const s4 = e4._events;
  if (void 0 === s4) return [];
  const a4 = s4[t6];
  return void 0 === a4 ? [] : "function" == typeof a4 ? r4 ? [a4.listener || a4] : [a4] : r4 ? (function(e5) {
    const t7 = arrayClone(e5);
    for (let e6 = 0; e6 < t7.length; ++e6) {
      const r5 = t7[e6].listener;
      "function" == typeof r5 && (t7[e6] = r5);
    }
    return t7;
  })(a4) : arrayClone(a4);
}
function arrayClone(e4) {
  switch (e4.length) {
    case 2:
      return [e4[0], e4[1]];
    case 3:
      return [e4[0], e4[1], e4[2]];
    case 4:
      return [e4[0], e4[1], e4[2], e4[3]];
    case 5:
      return [e4[0], e4[1], e4[2], e4[3], e4[4]];
    case 6:
      return [e4[0], e4[1], e4[2], e4[3], e4[4], e4[5]];
  }
  return Array.prototype.slice.call(e4);
}
function createIterResult(e4, t6) {
  return { value: e4, done: t6 };
}
function eventTargetAgnosticRemoveListener(e4, t6, r4, s4) {
  if ("function" == typeof e4.removeListener) e4.removeListener(t6, r4);
  else {
    if ("function" != typeof e4.removeEventListener) throw new u2("emitter", "EventEmitter", e4);
    e4.removeEventListener(t6, r4, s4);
  }
}
function eventTargetAgnosticAddListener(e4, t6, r4, s4) {
  if ("function" == typeof e4.on) s4?.once ? e4.once(t6, r4) : e4.on(t6, r4);
  else {
    if ("function" != typeof e4.addEventListener) throw new u2("emitter", "EventEmitter", e4);
    e4.addEventListener(t6, r4, s4);
  }
}
function createNotImplementedError(e4) {
  return new Error(`[unenv] ${e4} is not implemented yet!`);
}
function notImplemented(e4) {
  return Object.assign(() => {
    throw createNotImplementedError(e4);
  }, { __unenv__: true });
}
function createNextTickWithTimeout() {
  let e4, t6 = [], r4 = false, s4 = -1;
  function cleanUpNextTick() {
    r4 && e4 && (r4 = false, e4.length > 0 ? t6 = [...e4, ...t6] : s4 = -1, t6.length > 0 && drainQueue());
  }
  __name(cleanUpNextTick, "cleanUpNextTick");
  function drainQueue() {
    if (r4) return;
    const a4 = setTimeout(cleanUpNextTick);
    r4 = true;
    let c4 = t6.length;
    for (; c4; ) {
      for (e4 = t6, t6 = []; ++s4 < c4; ) e4 && e4[s4]();
      s4 = -1, c4 = t6.length;
    }
    e4 = void 0, r4 = false, clearTimeout(a4);
  }
  __name(drainQueue, "drainQueue");
  return (e5, ...s5) => {
    t6.push(e5.bind(void 0, ...s5)), 1 !== t6.length || r4 || setTimeout(drainQueue);
  };
}
function toByteArray(e4) {
  let t6;
  const r4 = (function(e5) {
    const t7 = e5.length;
    if (t7 % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    let r5 = e5.indexOf("=");
    return -1 === r5 && (r5 = t7), [r5, r5 === t7 ? 0 : 4 - r5 % 4];
  })(e4), s4 = r4[0], a4 = r4[1], c4 = new Wt3((function(e5, t7, r5) {
    return 3 * (t7 + r5) / 4 - r5;
  })(0, s4, a4));
  let u3 = 0;
  const f3 = a4 > 0 ? s4 - 4 : s4;
  let h4;
  for (h4 = 0; h4 < f3; h4 += 4) t6 = jt3[e4.charCodeAt(h4)] << 18 | jt3[e4.charCodeAt(h4 + 1)] << 12 | jt3[e4.charCodeAt(h4 + 2)] << 6 | jt3[e4.charCodeAt(h4 + 3)], c4[u3++] = t6 >> 16 & 255, c4[u3++] = t6 >> 8 & 255, c4[u3++] = 255 & t6;
  return 2 === a4 && (t6 = jt3[e4.charCodeAt(h4)] << 2 | jt3[e4.charCodeAt(h4 + 1)] >> 4, c4[u3++] = 255 & t6), 1 === a4 && (t6 = jt3[e4.charCodeAt(h4)] << 10 | jt3[e4.charCodeAt(h4 + 1)] << 4 | jt3[e4.charCodeAt(h4 + 2)] >> 2, c4[u3++] = t6 >> 8 & 255, c4[u3++] = 255 & t6), c4;
}
function tripletToBase64(e4) {
  return Ht3[e4 >> 18 & 63] + Ht3[e4 >> 12 & 63] + Ht3[e4 >> 6 & 63] + Ht3[63 & e4];
}
function encodeChunk(e4, t6, r4) {
  let s4;
  const a4 = [];
  for (let c4 = t6; c4 < r4; c4 += 3) s4 = (e4[c4] << 16 & 16711680) + (e4[c4 + 1] << 8 & 65280) + (255 & e4[c4 + 2]), a4.push(tripletToBase64(s4));
  return a4.join("");
}
function fromByteArray(e4) {
  let t6;
  const r4 = e4.length, s4 = r4 % 3, a4 = [], c4 = 16383;
  for (let t7 = 0, u3 = r4 - s4; t7 < u3; t7 += c4) a4.push(encodeChunk(e4, t7, t7 + c4 > u3 ? u3 : t7 + c4));
  return 1 === s4 ? (t6 = e4[r4 - 1], a4.push(Ht3[t6 >> 2] + Ht3[t6 << 4 & 63] + "==")) : 2 === s4 && (t6 = (e4[r4 - 2] << 8) + e4[r4 - 1], a4.push(Ht3[t6 >> 10] + Ht3[t6 >> 4 & 63] + Ht3[t6 << 2 & 63] + "=")), a4.join("");
}
function read(e4, t6, r4, s4, a4) {
  let c4, u3;
  const f3 = 8 * a4 - s4 - 1, h4 = (1 << f3) - 1, d3 = h4 >> 1;
  let g3 = -7, m3 = r4 ? a4 - 1 : 0;
  const _3 = r4 ? -1 : 1;
  let E3 = e4[t6 + m3];
  for (m3 += _3, c4 = E3 & (1 << -g3) - 1, E3 >>= -g3, g3 += f3; g3 > 0; ) c4 = 256 * c4 + e4[t6 + m3], m3 += _3, g3 -= 8;
  for (u3 = c4 & (1 << -g3) - 1, c4 >>= -g3, g3 += s4; g3 > 0; ) u3 = 256 * u3 + e4[t6 + m3], m3 += _3, g3 -= 8;
  if (0 === c4) c4 = 1 - d3;
  else {
    if (c4 === h4) return u3 ? Number.NaN : (E3 ? -1 : 1) * Number.POSITIVE_INFINITY;
    u3 += Math.pow(2, s4), c4 -= d3;
  }
  return (E3 ? -1 : 1) * u3 * Math.pow(2, c4 - s4);
}
function write(e4, t6, r4, s4, a4, c4) {
  let u3, f3, h4, d3 = 8 * c4 - a4 - 1;
  const g3 = (1 << d3) - 1, m3 = g3 >> 1, _3 = 23 === a4 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  let E3 = s4 ? 0 : c4 - 1;
  const R3 = s4 ? 1 : -1, B2 = t6 < 0 || 0 === t6 && 1 / t6 < 0 ? 1 : 0;
  for (t6 = Math.abs(t6), Number.isNaN(t6) || t6 === Number.POSITIVE_INFINITY ? (f3 = Number.isNaN(t6) ? 1 : 0, u3 = g3) : (u3 = Math.floor(Math.log2(t6)), t6 * (h4 = Math.pow(2, -u3)) < 1 && (u3--, h4 *= 2), (t6 += u3 + m3 >= 1 ? _3 / h4 : _3 * Math.pow(2, 1 - m3)) * h4 >= 2 && (u3++, h4 /= 2), u3 + m3 >= g3 ? (f3 = 0, u3 = g3) : u3 + m3 >= 1 ? (f3 = (t6 * h4 - 1) * Math.pow(2, a4), u3 += m3) : (f3 = t6 * Math.pow(2, m3 - 1) * Math.pow(2, a4), u3 = 0)); a4 >= 8; ) e4[r4 + E3] = 255 & f3, E3 += R3, f3 /= 256, a4 -= 8;
  for (u3 = u3 << a4 | f3, d3 += a4; d3 > 0; ) e4[r4 + E3] = 255 & u3, E3 += R3, u3 /= 256, d3 -= 8;
  e4[r4 + E3 - R3] |= 128 * B2;
}
function createBuffer2(e4) {
  if (e4 > Dt3) throw new RangeError('The value "' + e4 + '" is invalid for option "size"');
  const t6 = new Uint8Array(e4);
  return Object.setPrototypeOf(t6, Buffer$1.prototype), t6;
}
function Buffer$1(e4, t6, r4) {
  if ("number" == typeof e4) {
    if ("string" == typeof t6) throw new TypeError('The "string" argument must be of type string. Received type number');
    return allocUnsafe(e4);
  }
  return from(e4, t6, r4);
}
function from(e4, t6, r4) {
  if ("string" == typeof e4) return (function(e5, t7) {
    "string" == typeof t7 && "" !== t7 || (t7 = "utf8");
    if (!Buffer$1.isEncoding(t7)) throw new TypeError("Unknown encoding: " + t7);
    const r5 = 0 | byteLength(e5, t7);
    let s5 = createBuffer2(r5);
    const a5 = s5.write(e5, t7);
    a5 !== r5 && (s5 = s5.slice(0, a5));
    return s5;
  })(e4, t6);
  if (ArrayBuffer.isView(e4)) return (function(e5) {
    if (isInstance(e5, Uint8Array)) {
      const t7 = new Uint8Array(e5);
      return fromArrayBuffer(t7.buffer, t7.byteOffset, t7.byteLength);
    }
    return fromArrayLike(e5);
  })(e4);
  if (null == e4) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e4);
  if (isInstance(e4, ArrayBuffer) || e4 && isInstance(e4.buffer, ArrayBuffer)) return fromArrayBuffer(e4, t6, r4);
  if ("undefined" != typeof SharedArrayBuffer && (isInstance(e4, SharedArrayBuffer) || e4 && isInstance(e4.buffer, SharedArrayBuffer))) return fromArrayBuffer(e4, t6, r4);
  if ("number" == typeof e4) throw new TypeError('The "value" argument must not be of type number. Received type number');
  const s4 = e4.valueOf && e4.valueOf();
  if (null != s4 && s4 !== e4) return Buffer$1.from(s4, t6, r4);
  const a4 = (function(e5) {
    if (Buffer$1.isBuffer(e5)) {
      const t7 = 0 | checked(e5.length), r5 = createBuffer2(t7);
      return 0 === r5.length || e5.copy(r5, 0, 0, t7), r5;
    }
    if (void 0 !== e5.length) return "number" != typeof e5.length || numberIsNaN(e5.length) ? createBuffer2(0) : fromArrayLike(e5);
    if ("Buffer" === e5.type && Array.isArray(e5.data)) return fromArrayLike(e5.data);
  })(e4);
  if (a4) return a4;
  if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e4[Symbol.toPrimitive]) return Buffer$1.from(e4[Symbol.toPrimitive]("string"), t6, r4);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e4);
}
function assertSize(e4) {
  if ("number" != typeof e4) throw new TypeError('"size" argument must be of type number');
  if (e4 < 0) throw new RangeError('The value "' + e4 + '" is invalid for option "size"');
}
function allocUnsafe(e4) {
  return assertSize(e4), createBuffer2(e4 < 0 ? 0 : 0 | checked(e4));
}
function fromArrayLike(e4) {
  const t6 = e4.length < 0 ? 0 : 0 | checked(e4.length), r4 = createBuffer2(t6);
  for (let s4 = 0; s4 < t6; s4 += 1) r4[s4] = 255 & e4[s4];
  return r4;
}
function fromArrayBuffer(e4, t6, r4) {
  if (t6 < 0 || e4.byteLength < t6) throw new RangeError('"offset" is outside of buffer bounds');
  if (e4.byteLength < t6 + (r4 || 0)) throw new RangeError('"length" is outside of buffer bounds');
  let s4;
  return s4 = void 0 === t6 && void 0 === r4 ? new Uint8Array(e4) : void 0 === r4 ? new Uint8Array(e4, t6) : new Uint8Array(e4, t6, r4), Object.setPrototypeOf(s4, Buffer$1.prototype), s4;
}
function checked(e4) {
  if (e4 >= Dt3) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Dt3.toString(16) + " bytes");
  return 0 | e4;
}
function byteLength(e4, t6) {
  if (Buffer$1.isBuffer(e4)) return e4.length;
  if (ArrayBuffer.isView(e4) || isInstance(e4, ArrayBuffer)) return e4.byteLength;
  if ("string" != typeof e4) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e4);
  const r4 = e4.length, s4 = arguments.length > 2 && true === arguments[2];
  if (!s4 && 0 === r4) return 0;
  let a4 = false;
  for (; ; ) switch (t6) {
    case "ascii":
    case "latin1":
    case "binary":
      return r4;
    case "utf8":
    case "utf-8":
      return utf8ToBytes(e4).length;
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return 2 * r4;
    case "hex":
      return r4 >>> 1;
    case "base64":
      return base64ToBytes(e4).length;
    default:
      if (a4) return s4 ? -1 : utf8ToBytes(e4).length;
      t6 = ("" + t6).toLowerCase(), a4 = true;
  }
}
function slowToString(e4, t6, r4) {
  let s4 = false;
  if ((void 0 === t6 || t6 < 0) && (t6 = 0), t6 > this.length) return "";
  if ((void 0 === r4 || r4 > this.length) && (r4 = this.length), r4 <= 0) return "";
  if ((r4 >>>= 0) <= (t6 >>>= 0)) return "";
  for (e4 || (e4 = "utf8"); ; ) switch (e4) {
    case "hex":
      return hexSlice(this, t6, r4);
    case "utf8":
    case "utf-8":
      return utf8Slice(this, t6, r4);
    case "ascii":
      return asciiSlice(this, t6, r4);
    case "latin1":
    case "binary":
      return latin1Slice(this, t6, r4);
    case "base64":
      return base64Slice(this, t6, r4);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return utf16leSlice(this, t6, r4);
    default:
      if (s4) throw new TypeError("Unknown encoding: " + e4);
      e4 = (e4 + "").toLowerCase(), s4 = true;
  }
}
function swap(e4, t6, r4) {
  const s4 = e4[t6];
  e4[t6] = e4[r4], e4[r4] = s4;
}
function bidirectionalIndexOf(e4, t6, r4, s4, a4) {
  if (0 === e4.length) return -1;
  if ("string" == typeof r4 ? (s4 = r4, r4 = 0) : r4 > 2147483647 ? r4 = 2147483647 : r4 < -2147483648 && (r4 = -2147483648), numberIsNaN(r4 = +r4) && (r4 = a4 ? 0 : e4.length - 1), r4 < 0 && (r4 = e4.length + r4), r4 >= e4.length) {
    if (a4) return -1;
    r4 = e4.length - 1;
  } else if (r4 < 0) {
    if (!a4) return -1;
    r4 = 0;
  }
  if ("string" == typeof t6 && (t6 = Buffer$1.from(t6, s4)), Buffer$1.isBuffer(t6)) return 0 === t6.length ? -1 : arrayIndexOf(e4, t6, r4, s4, a4);
  if ("number" == typeof t6) return t6 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? a4 ? Uint8Array.prototype.indexOf.call(e4, t6, r4) : Uint8Array.prototype.lastIndexOf.call(e4, t6, r4) : arrayIndexOf(e4, [t6], r4, s4, a4);
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(e4, t6, r4, s4, a4) {
  let c4, u3 = 1, f3 = e4.length, h4 = t6.length;
  if (void 0 !== s4 && ("ucs2" === (s4 = String(s4).toLowerCase()) || "ucs-2" === s4 || "utf16le" === s4 || "utf-16le" === s4)) {
    if (e4.length < 2 || t6.length < 2) return -1;
    u3 = 2, f3 /= 2, h4 /= 2, r4 /= 2;
  }
  function read2(e5, t7) {
    return 1 === u3 ? e5[t7] : e5.readUInt16BE(t7 * u3);
  }
  __name(read2, "read");
  if (a4) {
    let s5 = -1;
    for (c4 = r4; c4 < f3; c4++) if (read2(e4, c4) === read2(t6, -1 === s5 ? 0 : c4 - s5)) {
      if (-1 === s5 && (s5 = c4), c4 - s5 + 1 === h4) return s5 * u3;
    } else -1 !== s5 && (c4 -= c4 - s5), s5 = -1;
  } else for (r4 + h4 > f3 && (r4 = f3 - h4), c4 = r4; c4 >= 0; c4--) {
    let r5 = true;
    for (let s5 = 0; s5 < h4; s5++) if (read2(e4, c4 + s5) !== read2(t6, s5)) {
      r5 = false;
      break;
    }
    if (r5) return c4;
  }
  return -1;
}
function hexWrite(e4, t6, r4, s4) {
  r4 = Number(r4) || 0;
  const a4 = e4.length - r4;
  s4 ? (s4 = Number(s4)) > a4 && (s4 = a4) : s4 = a4;
  const c4 = t6.length;
  let u3;
  for (s4 > c4 / 2 && (s4 = c4 / 2), u3 = 0; u3 < s4; ++u3) {
    const s5 = Number.parseInt(t6.slice(2 * u3, 2 * u3 + 2), 16);
    if (numberIsNaN(s5)) return u3;
    e4[r4 + u3] = s5;
  }
  return u3;
}
function utf8Write(e4, t6, r4, s4) {
  return blitBuffer(utf8ToBytes(t6, e4.length - r4), e4, r4, s4);
}
function asciiWrite(e4, t6, r4, s4) {
  return blitBuffer((function(e5) {
    const t7 = [];
    for (let r5 = 0; r5 < e5.length; ++r5) t7.push(255 & e5.charCodeAt(r5));
    return t7;
  })(t6), e4, r4, s4);
}
function base64Write(e4, t6, r4, s4) {
  return blitBuffer(base64ToBytes(t6), e4, r4, s4);
}
function ucs2Write(e4, t6, r4, s4) {
  return blitBuffer((function(e5, t7) {
    let r5, s5, a4;
    const c4 = [];
    for (let u3 = 0; u3 < e5.length && !((t7 -= 2) < 0); ++u3) r5 = e5.charCodeAt(u3), s5 = r5 >> 8, a4 = r5 % 256, c4.push(a4, s5);
    return c4;
  })(t6, e4.length - r4), e4, r4, s4);
}
function base64Slice(e4, t6, r4) {
  return 0 === t6 && r4 === e4.length ? fromByteArray(e4) : fromByteArray(e4.slice(t6, r4));
}
function utf8Slice(e4, t6, r4) {
  r4 = Math.min(e4.length, r4);
  const s4 = [];
  let a4 = t6;
  for (; a4 < r4; ) {
    const t7 = e4[a4];
    let c4 = null, u3 = t7 > 239 ? 4 : t7 > 223 ? 3 : t7 > 191 ? 2 : 1;
    if (a4 + u3 <= r4) {
      let r5, s5, f3, h4;
      switch (u3) {
        case 1:
          t7 < 128 && (c4 = t7);
          break;
        case 2:
          r5 = e4[a4 + 1], 128 == (192 & r5) && (h4 = (31 & t7) << 6 | 63 & r5, h4 > 127 && (c4 = h4));
          break;
        case 3:
          r5 = e4[a4 + 1], s5 = e4[a4 + 2], 128 == (192 & r5) && 128 == (192 & s5) && (h4 = (15 & t7) << 12 | (63 & r5) << 6 | 63 & s5, h4 > 2047 && (h4 < 55296 || h4 > 57343) && (c4 = h4));
          break;
        case 4:
          r5 = e4[a4 + 1], s5 = e4[a4 + 2], f3 = e4[a4 + 3], 128 == (192 & r5) && 128 == (192 & s5) && 128 == (192 & f3) && (h4 = (15 & t7) << 18 | (63 & r5) << 12 | (63 & s5) << 6 | 63 & f3, h4 > 65535 && h4 < 1114112 && (c4 = h4));
      }
    }
    null === c4 ? (c4 = 65533, u3 = 1) : c4 > 65535 && (c4 -= 65536, s4.push(c4 >>> 10 & 1023 | 55296), c4 = 56320 | 1023 & c4), s4.push(c4), a4 += u3;
  }
  return (function(e5) {
    const t7 = e5.length;
    if (t7 <= zt3) return String.fromCharCode.apply(String, e5);
    let r5 = "", s5 = 0;
    for (; s5 < t7; ) r5 += String.fromCharCode.apply(String, e5.slice(s5, s5 += zt3));
    return r5;
  })(s4);
}
function asciiSlice(e4, t6, r4) {
  let s4 = "";
  r4 = Math.min(e4.length, r4);
  for (let a4 = t6; a4 < r4; ++a4) s4 += String.fromCharCode(127 & e4[a4]);
  return s4;
}
function latin1Slice(e4, t6, r4) {
  let s4 = "";
  r4 = Math.min(e4.length, r4);
  for (let a4 = t6; a4 < r4; ++a4) s4 += String.fromCharCode(e4[a4]);
  return s4;
}
function hexSlice(e4, t6, r4) {
  const s4 = e4.length;
  (!t6 || t6 < 0) && (t6 = 0), (!r4 || r4 < 0 || r4 > s4) && (r4 = s4);
  let a4 = "";
  for (let s5 = t6; s5 < r4; ++s5) a4 += Gt3[e4[s5]];
  return a4;
}
function utf16leSlice(e4, t6, r4) {
  const s4 = e4.slice(t6, r4);
  let a4 = "";
  for (let e5 = 0; e5 < s4.length - 1; e5 += 2) a4 += String.fromCharCode(s4[e5] + 256 * s4[e5 + 1]);
  return a4;
}
function checkOffset(e4, t6, r4) {
  if (e4 % 1 != 0 || e4 < 0) throw new RangeError("offset is not uint");
  if (e4 + t6 > r4) throw new RangeError("Trying to access beyond buffer length");
}
function checkInt(e4, t6, r4, s4, a4, c4) {
  if (!Buffer$1.isBuffer(e4)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (t6 > a4 || t6 < c4) throw new RangeError('"value" argument is out of bounds');
  if (r4 + s4 > e4.length) throw new RangeError("Index out of range");
}
function wrtBigUInt64LE(e4, t6, r4, s4, a4) {
  checkIntBI(t6, s4, a4, e4, r4, 7);
  let c4 = Number(t6 & BigInt(4294967295));
  e4[r4++] = c4, c4 >>= 8, e4[r4++] = c4, c4 >>= 8, e4[r4++] = c4, c4 >>= 8, e4[r4++] = c4;
  let u3 = Number(t6 >> BigInt(32) & BigInt(4294967295));
  return e4[r4++] = u3, u3 >>= 8, e4[r4++] = u3, u3 >>= 8, e4[r4++] = u3, u3 >>= 8, e4[r4++] = u3, r4;
}
function wrtBigUInt64BE(e4, t6, r4, s4, a4) {
  checkIntBI(t6, s4, a4, e4, r4, 7);
  let c4 = Number(t6 & BigInt(4294967295));
  e4[r4 + 7] = c4, c4 >>= 8, e4[r4 + 6] = c4, c4 >>= 8, e4[r4 + 5] = c4, c4 >>= 8, e4[r4 + 4] = c4;
  let u3 = Number(t6 >> BigInt(32) & BigInt(4294967295));
  return e4[r4 + 3] = u3, u3 >>= 8, e4[r4 + 2] = u3, u3 >>= 8, e4[r4 + 1] = u3, u3 >>= 8, e4[r4] = u3, r4 + 8;
}
function checkIEEE754(e4, t6, r4, s4, a4, c4) {
  if (r4 + s4 > e4.length) throw new RangeError("Index out of range");
  if (r4 < 0) throw new RangeError("Index out of range");
}
function writeFloat(e4, t6, r4, s4, a4) {
  return t6 = +t6, r4 >>>= 0, a4 || checkIEEE754(e4, 0, r4, 4), write(e4, t6, r4, s4, 23, 4), r4 + 4;
}
function writeDouble(e4, t6, r4, s4, a4) {
  return t6 = +t6, r4 >>>= 0, a4 || checkIEEE754(e4, 0, r4, 8), write(e4, t6, r4, s4, 52, 8), r4 + 8;
}
function E$1(e4, t6, r4) {
  Kt3[e4] = class extends r4 {
    constructor() {
      super(), Object.defineProperty(this, "message", { value: Reflect.apply(t6, this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e4}]`, this.stack, delete this.name;
    }
    get code() {
      return e4;
    }
    set code(e5) {
      Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: e5, writable: true });
    }
    toString() {
      return `${this.name} [${e4}]: ${this.message}`;
    }
  };
}
function addNumericalSeparator(e4) {
  let t6 = "", r4 = e4.length;
  const s4 = "-" === e4[0] ? 1 : 0;
  for (; r4 >= s4 + 4; r4 -= 3) t6 = `_${e4.slice(r4 - 3, r4)}${t6}`;
  return `${e4.slice(0, r4)}${t6}`;
}
function checkIntBI(e4, t6, r4, s4, a4, c4) {
  if (e4 > r4 || e4 < t6) {
    const r5 = "bigint" == typeof t6 ? "n" : "";
    let s5;
    throw s5 = 0 === t6 || t6 === BigInt(0) ? `>= 0${r5} and < 2${r5} ** ${8 * (c4 + 1)}${r5}` : `>= -(2${r5} ** ${8 * (c4 + 1) - 1}${r5}) and < 2 ** ${8 * (c4 + 1) - 1}${r5}`, new Kt3.ERR_OUT_OF_RANGE("value", s5, e4);
  }
  !(function(e5, t7, r5) {
    validateNumber(t7, "offset"), void 0 !== e5[t7] && void 0 !== e5[t7 + r5] || boundsError(t7, e5.length - (r5 + 1));
  })(s4, a4, c4);
}
function validateNumber(e4, t6) {
  if ("number" != typeof e4) throw new Kt3.ERR_INVALID_ARG_TYPE(t6, "number", e4);
}
function boundsError(e4, t6, r4) {
  if (Math.floor(e4) !== e4) throw validateNumber(e4, r4), new Kt3.ERR_OUT_OF_RANGE("offset", "an integer", e4);
  if (t6 < 0) throw new Kt3.ERR_BUFFER_OUT_OF_BOUNDS();
  throw new Kt3.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${t6}`, e4);
}
function utf8ToBytes(e4, t6) {
  let r4;
  t6 = t6 || Number.POSITIVE_INFINITY;
  const s4 = e4.length;
  let a4 = null;
  const c4 = [];
  for (let u3 = 0; u3 < s4; ++u3) {
    if (r4 = e4.charCodeAt(u3), r4 > 55295 && r4 < 57344) {
      if (!a4) {
        if (r4 > 56319) {
          (t6 -= 3) > -1 && c4.push(239, 191, 189);
          continue;
        }
        if (u3 + 1 === s4) {
          (t6 -= 3) > -1 && c4.push(239, 191, 189);
          continue;
        }
        a4 = r4;
        continue;
      }
      if (r4 < 56320) {
        (t6 -= 3) > -1 && c4.push(239, 191, 189), a4 = r4;
        continue;
      }
      r4 = 65536 + (a4 - 55296 << 10 | r4 - 56320);
    } else a4 && (t6 -= 3) > -1 && c4.push(239, 191, 189);
    if (a4 = null, r4 < 128) {
      if ((t6 -= 1) < 0) break;
      c4.push(r4);
    } else if (r4 < 2048) {
      if ((t6 -= 2) < 0) break;
      c4.push(r4 >> 6 | 192, 63 & r4 | 128);
    } else if (r4 < 65536) {
      if ((t6 -= 3) < 0) break;
      c4.push(r4 >> 12 | 224, r4 >> 6 & 63 | 128, 63 & r4 | 128);
    } else {
      if (!(r4 < 1114112)) throw new Error("Invalid code point");
      if ((t6 -= 4) < 0) break;
      c4.push(r4 >> 18 | 240, r4 >> 12 & 63 | 128, r4 >> 6 & 63 | 128, 63 & r4 | 128);
    }
  }
  return c4;
}
function base64ToBytes(e4) {
  return toByteArray((function(e5) {
    if ((e5 = (e5 = e5.split("=")[0]).trim().replace(Qt3, "")).length < 2) return "";
    for (; e5.length % 4 != 0; ) e5 += "=";
    return e5;
  })(e4));
}
function blitBuffer(e4, t6, r4, s4) {
  let a4;
  for (a4 = 0; a4 < s4 && !(a4 + r4 >= t6.length || a4 >= e4.length); ++a4) t6[a4 + r4] = e4[a4];
  return a4;
}
function isInstance(e4, t6) {
  return e4 instanceof t6 || null != e4 && null != e4.constructor && null != e4.constructor.name && e4.constructor.name === t6.name;
}
function numberIsNaN(e4) {
  return e4 != e4;
}
function defineBigIntMethod(e4) {
  return "undefined" == typeof BigInt ? BufferBigIntNotDefined : e4;
}
function BufferBigIntNotDefined() {
  throw new Error("BigInt not supported");
}
function setTimeoutFallback(e4, t6, ...r4) {
  return new Timeout(e4, r4);
}
function setImmediateFallback(e4, ...t6) {
  return new Immediate(e4, t6);
}
function setIntervalFallback(e4, t6, ...r4) {
  return new Timeout(e4, r4);
}
function jsonParseTransform(e4, t6) {
  if (!("__proto__" === e4 || "constructor" === e4 && t6 && "object" == typeof t6 && "prototype" in t6)) return t6;
  !(function(e5) {
    console.warn(`[destr] Dropping "${e5}" key to prevent prototype pollution.`);
  })(e4);
}
function destr(e4, t6 = {}) {
  if ("string" != typeof e4) return e4;
  if ('"' === e4[0] && '"' === e4[e4.length - 1] && -1 === e4.indexOf("\\")) return e4.slice(1, -1);
  const r4 = e4.trim();
  if (r4.length <= 9) switch (r4.toLowerCase()) {
    case "true":
      return true;
    case "false":
      return false;
    case "undefined":
      return;
    case "null":
      return null;
    case "nan":
      return Number.NaN;
    case "infinity":
      return Number.POSITIVE_INFINITY;
    case "-infinity":
      return Number.NEGATIVE_INFINITY;
  }
  if (!er2.test(e4)) {
    if (t6.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e4;
  }
  try {
    if (Xt3.test(e4) || Zt3.test(e4)) {
      if (t6.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e4, jsonParseTransform);
    }
    return JSON.parse(e4);
  } catch (r5) {
    if (t6.strict) throw r5;
    return e4;
  }
}
function encode(e4) {
  return encodeURI("" + e4).replace(ur2, "|");
}
function encodeQueryValue(e4) {
  return encode("string" == typeof e4 ? e4 : JSON.stringify(e4)).replace(ir2, "%2B").replace(fr2, "+").replace(tr2, "%23").replace(rr2, "%26").replace(cr2, "`").replace(ar2, "^").replace(nr2, "%2F");
}
function encodeQueryKey(e4) {
  return encodeQueryValue(e4).replace(or2, "%3D");
}
function encodePath(e4) {
  return encode(e4).replace(tr2, "%23").replace(sr2, "%3F").replace(hr2, "%2F").replace(rr2, "%26").replace(ir2, "%2B");
}
function decode(e4 = "") {
  try {
    return decodeURIComponent("" + e4);
  } catch {
    return "" + e4;
  }
}
function decodePath(e4) {
  return decode(e4.replace(lr2, "%252F"));
}
function decodeQueryKey(e4) {
  return decode(e4.replace(ir2, " "));
}
function decodeQueryValue(e4) {
  return decode(e4.replace(ir2, " "));
}
function parseQuery(e4 = "") {
  const t6 = /* @__PURE__ */ Object.create(null);
  "?" === e4[0] && (e4 = e4.slice(1));
  for (const r4 of e4.split("&")) {
    const e5 = r4.match(/([^=]+)=?(.*)/) || [];
    if (e5.length < 2) continue;
    const s4 = decodeQueryKey(e5[1]);
    if ("__proto__" === s4 || "constructor" === s4) continue;
    const a4 = decodeQueryValue(e5[2] || "");
    void 0 === t6[s4] ? t6[s4] = a4 : Array.isArray(t6[s4]) ? t6[s4].push(a4) : t6[s4] = [t6[s4], a4];
  }
  return t6;
}
function stringifyQuery(e4) {
  return Object.keys(e4).filter((t6) => void 0 !== e4[t6]).map((t6) => {
    return r4 = t6, "number" != typeof (s4 = e4[t6]) && "boolean" != typeof s4 || (s4 = String(s4)), s4 ? Array.isArray(s4) ? s4.map((e5) => `${encodeQueryKey(r4)}=${encodeQueryValue(e5)}`).join("&") : `${encodeQueryKey(r4)}=${encodeQueryValue(s4)}` : encodeQueryKey(r4);
    var r4, s4;
  }).filter(Boolean).join("&");
}
function hasProtocol(e4, t6 = {}) {
  return "boolean" == typeof t6 && (t6 = { acceptRelative: t6 }), t6.strict ? dr2.test(e4) : pr2.test(e4) || !!t6.acceptRelative && gr2.test(e4);
}
function isScriptProtocol(e4) {
  return !!e4 && yr2.test(e4);
}
function hasTrailingSlash(e4 = "", t6) {
  return t6 ? mr2.test(e4) : e4.endsWith("/");
}
function withoutTrailingSlash(e4 = "", t6) {
  if (!t6) return (hasTrailingSlash(e4) ? e4.slice(0, -1) : e4) || "/";
  if (!hasTrailingSlash(e4, true)) return e4 || "/";
  let r4 = e4, s4 = "";
  const a4 = e4.indexOf("#");
  -1 !== a4 && (r4 = e4.slice(0, a4), s4 = e4.slice(a4));
  const [c4, ...u3] = r4.split("?");
  return ((c4.endsWith("/") ? c4.slice(0, -1) : c4) || "/") + (u3.length > 0 ? `?${u3.join("?")}` : "") + s4;
}
function withTrailingSlash(e4 = "", t6) {
  if (!t6) return e4.endsWith("/") ? e4 : e4 + "/";
  if (hasTrailingSlash(e4, true)) return e4 || "/";
  let r4 = e4, s4 = "";
  const a4 = e4.indexOf("#");
  if (-1 !== a4 && (r4 = e4.slice(0, a4), s4 = e4.slice(a4), !r4)) return s4;
  const [c4, ...u3] = r4.split("?");
  return c4 + "/" + (u3.length > 0 ? `?${u3.join("?")}` : "") + s4;
}
function withLeadingSlash(e4 = "") {
  return (function(e5 = "") {
    return e5.startsWith("/");
  })(e4) ? e4 : "/" + e4;
}
function withoutBase(e4, t6) {
  if (isEmptyURL(t6)) return e4;
  const r4 = withoutTrailingSlash(t6);
  if (!e4.startsWith(r4)) return e4;
  const s4 = e4[r4.length];
  if (s4 && "/" !== s4 && "?" !== s4) return e4;
  return "/" + e4.slice(r4.length).replace(/^\/+/, "");
}
function withQuery(e4, t6) {
  const r4 = parseURL(e4), s4 = { ...parseQuery(r4.search), ...t6 };
  return r4.search = stringifyQuery(s4), stringifyParsedURL(r4);
}
function getQuery$1(e4) {
  return parseQuery(parseURL(e4).search);
}
function isEmptyURL(e4) {
  return !e4 || "/" === e4;
}
function joinURL(e4, ...t6) {
  let r4 = e4 || "";
  for (const e5 of t6.filter((e6) => /* @__PURE__ */ (function(e7) {
    return e7 && "/" !== e7;
  })(e6))) if (r4) {
    const t7 = e5.replace(wr2, "");
    r4 = withTrailingSlash(r4) + t7;
  } else r4 = e5;
  return r4;
}
function joinRelativeURL(...e4) {
  const t6 = /\/(?!\/)/, r4 = e4.filter(Boolean), s4 = [];
  let a4 = 0;
  for (const e5 of r4) if (e5 && "/" !== e5) {
    for (const [r5, c5] of e5.split(t6).entries()) if (c5 && "." !== c5) if (".." !== c5) 1 === r5 && s4[s4.length - 1]?.endsWith(":/") ? s4[s4.length - 1] += "/" + c5 : (s4.push(c5), a4++);
    else {
      if (1 === s4.length && hasProtocol(s4[0])) continue;
      s4.pop(), a4--;
    }
  }
  let c4 = s4.join("/");
  return a4 >= 0 ? r4[0]?.startsWith("/") && !c4.startsWith("/") ? c4 = "/" + c4 : r4[0]?.startsWith("./") && !c4.startsWith("./") && (c4 = "./" + c4) : c4 = "../".repeat(-1 * a4) + c4, r4[r4.length - 1]?.endsWith("/") && !c4.endsWith("/") && (c4 += "/"), c4;
}
function isEqual(e4, t6, r4 = {}) {
  return r4.trailingSlash || (e4 = withTrailingSlash(e4), t6 = withTrailingSlash(t6)), r4.leadingSlash || (e4 = withLeadingSlash(e4), t6 = withLeadingSlash(t6)), r4.encoding || (e4 = decode(e4), t6 = decode(t6)), e4 === t6;
}
function parseURL(e4 = "", t6) {
  const r4 = e4.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (r4) {
    const [, e5, t7 = ""] = r4;
    return { protocol: e5.toLowerCase(), pathname: t7, href: e5 + t7, auth: "", host: "", search: "", hash: "" };
  }
  if (!hasProtocol(e4, { acceptRelative: true })) return parsePath(e4);
  const [, s4 = "", a4, c4 = ""] = e4.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, u3 = "", f3 = ""] = c4.match(/([^#/?]*)(.*)?/) || [];
  "file:" === s4 && (f3 = f3.replace(/\/(?=[A-Za-z]:)/, ""));
  const { pathname: h4, search: d3, hash: g3 } = parsePath(f3);
  return { protocol: s4.toLowerCase(), auth: a4 ? a4.slice(0, Math.max(0, a4.length - 1)) : "", host: u3, pathname: h4, search: d3, hash: g3, [br2]: !s4 };
}
function parsePath(e4 = "") {
  const [t6 = "", r4 = "", s4 = ""] = (e4.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t6, search: r4, hash: s4 };
}
function stringifyParsedURL(e4) {
  const t6 = e4.pathname || "", r4 = e4.search ? (e4.search.startsWith("?") ? "" : "?") + e4.search : "", s4 = e4.hash || "", a4 = e4.auth ? e4.auth + "@" : "", c4 = e4.host || "";
  return (e4.protocol || e4[br2] ? (e4.protocol || "") + "//" : "") + a4 + c4 + t6 + r4 + s4;
}
function createRouter$1(e4 = {}) {
  const t6 = { options: e4, rootNode: createRadixNode(), staticRoutesMap: {} }, normalizeTrailingSlash = /* @__PURE__ */ __name((t7) => e4.strictTrailingSlash ? t7 : t7.replace(/\/$/, "") || "/", "normalizeTrailingSlash");
  if (e4.routes) for (const r4 in e4.routes) insert(t6, normalizeTrailingSlash(r4), e4.routes[r4]);
  return { ctx: t6, lookup: /* @__PURE__ */ __name((e5) => (function(e6, t7) {
    const r4 = e6.staticRoutesMap[t7];
    if (r4) return r4.data;
    const s4 = t7.split("/"), a4 = {};
    let c4 = false, u3 = null, f3 = e6.rootNode, h4 = null;
    for (let e7 = 0; e7 < s4.length; e7++) {
      const t8 = s4[e7];
      null !== f3.wildcardChildNode && (u3 = f3.wildcardChildNode, h4 = s4.slice(e7).join("/"));
      const r5 = f3.children.get(t8);
      if (void 0 === r5) {
        if (f3 && f3.placeholderChildren.length > 1) {
          const t9 = s4.length - e7;
          f3 = f3.placeholderChildren.find((e8) => e8.maxDepth === t9) || null;
        } else f3 = f3.placeholderChildren[0] || null;
        if (!f3) break;
        f3.paramName && (a4[f3.paramName] = t8), c4 = true;
      } else f3 = r5;
    }
    null !== f3 && null !== f3.data || null === u3 || (f3 = u3, a4[f3.paramName || "_"] = h4, c4 = true);
    if (!f3) return null;
    if (c4) return { ...f3.data, params: c4 ? a4 : void 0 };
    return f3.data;
  })(t6, normalizeTrailingSlash(e5)), "lookup"), insert: /* @__PURE__ */ __name((e5, r4) => insert(t6, normalizeTrailingSlash(e5), r4), "insert"), remove: /* @__PURE__ */ __name((e5) => (function(e6, t7) {
    let r4 = false;
    const s4 = t7.split("/");
    let a4 = e6.rootNode;
    for (const e7 of s4) if (a4 = a4.children.get(e7), !a4) return r4;
    if (a4.data) {
      const e7 = s4.at(-1) || "";
      a4.data = null, 0 === Object.keys(a4.children).length && a4.parent && (a4.parent.children.delete(e7), a4.parent.wildcardChildNode = null, a4.parent.placeholderChildren = []), r4 = true;
    }
    return r4;
  })(t6, normalizeTrailingSlash(e5)), "remove") };
}
function insert(e4, t6, r4) {
  let s4 = true;
  const a4 = t6.split("/");
  let c4 = e4.rootNode, u3 = 0;
  const f3 = [c4];
  for (const e5 of a4) {
    let t7;
    if (t7 = c4.children.get(e5)) c4 = t7;
    else {
      const r5 = getNodeType(e5);
      t7 = createRadixNode({ type: r5, parent: c4 }), c4.children.set(e5, t7), r5 === Er2 ? (t7.paramName = "*" === e5 ? "_" + u3++ : e5.slice(1), c4.placeholderChildren.push(t7), s4 = false) : r5 === _r2 && (c4.wildcardChildNode = t7, t7.paramName = e5.slice(3) || "_", s4 = false), f3.push(t7), c4 = t7;
    }
  }
  for (const [e5, t7] of f3.entries()) t7.maxDepth = Math.max(f3.length - e5, t7.maxDepth || 0);
  return c4.data = r4, true === s4 && (e4.staticRoutesMap[t6] = c4), c4;
}
function createRadixNode(e4 = {}) {
  return { type: e4.type || vr2, maxDepth: 0, parent: e4.parent || null, children: /* @__PURE__ */ new Map(), data: e4.data || null, paramName: e4.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function getNodeType(e4) {
  return e4.startsWith("**") ? _r2 : ":" === e4[0] || "*" === e4 ? Er2 : vr2;
}
function toRouteMatcher(e4) {
  return /* @__PURE__ */ (function(e5, t6) {
    return { ctx: { table: e5 }, matchAll: /* @__PURE__ */ __name((r4) => _matchRoutes(r4, e5, t6), "matchAll") };
  })(_routerNodeToTable("", e4.ctx.rootNode), e4.ctx.options.strictTrailingSlash);
}
function _matchRoutes(e4, t6, r4) {
  true !== r4 && e4.endsWith("/") && (e4 = e4.slice(0, -1) || "/");
  const s4 = [];
  for (const [r5, a5] of _sortRoutesMap(t6.wildcard)) (e4 === r5 || e4.startsWith(r5 + "/")) && s4.push(a5);
  for (const [r5, a5] of _sortRoutesMap(t6.dynamic)) if (e4.startsWith(r5 + "/")) {
    const t7 = "/" + e4.slice(r5.length).split("/").splice(2).join("/");
    s4.push(..._matchRoutes(t7, a5));
  }
  const a4 = t6.static.get(e4);
  return a4 && s4.push(a4), s4.filter(Boolean);
}
function _sortRoutesMap(e4) {
  return [...e4.entries()].sort((e5, t6) => e5[0].length - t6[0].length);
}
function _routerNodeToTable(e4, t6) {
  const r4 = { static: /* @__PURE__ */ new Map(), wildcard: /* @__PURE__ */ new Map(), dynamic: /* @__PURE__ */ new Map() };
  return (/* @__PURE__ */ __name(function _addNode(e5, t7) {
    if (e5) if (t7.type !== vr2 || e5.includes("*") || e5.includes(":")) {
      if (t7.type === _r2) r4.wildcard.set(e5.replace("/**", ""), t7.data);
      else if (t7.type === Er2) {
        const s4 = _routerNodeToTable("", t7);
        return t7.data && s4.static.set("/", t7.data), void r4.dynamic.set(e5.replace(/\/\*|\/:\w+/, ""), s4);
      }
    } else t7.data && r4.static.set(e5, t7.data);
    for (const [r5, s4] of t7.children.entries()) _addNode(`${e5}/${r5}`.replace("//", "/"), s4);
  }, "_addNode"))(e4, t6), r4;
}
function isPlainObject2(e4) {
  if (null === e4 || "object" != typeof e4) return false;
  const t6 = Object.getPrototypeOf(e4);
  return (null === t6 || t6 === Object.prototype || null === Object.getPrototypeOf(t6)) && (!(Symbol.iterator in e4) && (!(Symbol.toStringTag in e4) || "[object Module]" === Object.prototype.toString.call(e4)));
}
function _defu(e4, t6, r4 = ".", s4) {
  if (!isPlainObject2(t6)) return _defu(e4, {}, r4, s4);
  const a4 = { ...t6 };
  for (const t7 of Object.keys(e4)) {
    if ("__proto__" === t7 || "constructor" === t7) continue;
    const c4 = e4[t7];
    null != c4 && (s4 && s4(a4, t7, c4, r4) || (Array.isArray(c4) && Array.isArray(a4[t7]) ? a4[t7] = [...c4, ...a4[t7]] : isPlainObject2(c4) && isPlainObject2(a4[t7]) ? a4[t7] = _defu(c4, a4[t7], (r4 ? `${r4}.` : "") + t7.toString(), s4) : a4[t7] = c4));
  }
  return a4;
}
function createDefu(e4) {
  return (...t6) => t6.reduce((t7, r4) => _defu(t7, r4, "", e4), {});
}
function o4(e4) {
  throw new Error(`${e4} is not implemented yet!`);
}
function p3(e4) {
  const t6 = {};
  for (const [r4, s4] of Object.entries(e4)) r4 && (t6[r4] = (Array.isArray(s4) ? s4 : [s4]).filter(Boolean));
  return t6;
}
function v2(e4 = {}) {
  if (e4 instanceof Headers) return e4;
  const t6 = new Headers();
  for (const [r4, s4] of Object.entries(e4)) if (void 0 !== s4) {
    if (Array.isArray(s4)) {
      for (const e5 of s4) t6.append(r4, String(e5));
      continue;
    }
    t6.set(r4, String(s4));
  }
  return t6;
}
async function b3(e4, t6) {
  const r4 = new y3(), s4 = new w2(r4);
  let a4;
  if (r4.url = t6.url?.toString() || "/", !r4.url.startsWith("/")) {
    const e5 = new URL(r4.url);
    a4 = e5.host, r4.url = e5.pathname + e5.search + e5.hash;
  }
  r4.method = t6.method || "GET", r4.headers = (function(e5 = {}) {
    const t7 = new Tr2(), r5 = Array.isArray(e5) || (function(e6) {
      return "function" == typeof e6?.entries;
    })(e5) ? e5 : Object.entries(e5);
    for (const [e6, s5] of r5) if (s5) {
      if (void 0 === t7[e6]) {
        t7[e6] = s5;
        continue;
      }
      t7[e6] = [...Array.isArray(t7[e6]) ? t7[e6] : [t7[e6]], ...Array.isArray(s5) ? s5 : [s5]];
    }
    return t7;
  })(t6.headers || {}), r4.headers.host || (r4.headers.host = t6.host || a4 || "localhost"), r4.connection.encrypted = r4.connection.encrypted || "https" === t6.protocol, r4.body = t6.body || null, r4.__unenv__ = t6.context, await e4(r4, s4);
  let c4 = s4._data;
  (xr2.has(s4.statusCode) || "HEAD" === r4.method.toUpperCase()) && (c4 = null, delete s4._headers["content-length"]);
  const u3 = { status: s4.statusCode, statusText: s4.statusMessage, headers: s4._headers, body: c4 };
  return r4.destroy(), s4.destroy(), u3;
}
function hasProp2(e4, t6) {
  try {
    return t6 in e4;
  } catch {
    return false;
  }
}
function createError(e4) {
  if ("string" == typeof e4) return new H3Error(e4);
  if (isError(e4)) return e4;
  const t6 = new H3Error(e4.message ?? e4.statusMessage ?? "", { cause: e4.cause || e4 });
  if (hasProp2(e4, "stack")) try {
    Object.defineProperty(t6, "stack", { get: /* @__PURE__ */ __name(() => e4.stack, "get") });
  } catch {
    try {
      t6.stack = e4.stack;
    } catch {
    }
  }
  if (e4.data && (t6.data = e4.data), e4.statusCode ? t6.statusCode = sanitizeStatusCode(e4.statusCode, t6.statusCode) : e4.status && (t6.statusCode = sanitizeStatusCode(e4.status, t6.statusCode)), e4.statusMessage ? t6.statusMessage = e4.statusMessage : e4.statusText && (t6.statusMessage = e4.statusText), t6.statusMessage) {
    const e5 = t6.statusMessage;
    sanitizeStatusMessage(t6.statusMessage) !== e5 && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
  }
  return void 0 !== e4.fatal && (t6.fatal = e4.fatal), void 0 !== e4.unhandled && (t6.unhandled = e4.unhandled), t6;
}
function isError(e4) {
  return true === e4?.constructor?.__h3_error__;
}
function getQuery(e4) {
  return getQuery$1(e4.path || "");
}
function getRequestHeaders(e4) {
  const t6 = {};
  for (const r4 in e4.node.req.headers) {
    const s4 = e4.node.req.headers[r4];
    t6[r4] = Array.isArray(s4) ? s4.filter(Boolean).join(", ") : s4;
  }
  return t6;
}
function readRawBody(e4, t6 = "utf8") {
  !(function(e5, t7) {
    if (!(function(e6, t8) {
      if ("string" == typeof t8) {
        if (e6.method === t8) return true;
      } else if (t8.includes(e6.method)) return true;
      return false;
    })(e5, t7)) throw createError({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
  })(e4, Cr2);
  const r4 = e4._requestBody || e4.web?.request?.body || e4.node.req[kr2] || e4.node.req.rawBody || e4.node.req.body;
  if (r4) {
    const e5 = Promise.resolve(r4).then((e6) => Vt2.isBuffer(e6) ? e6 : "function" == typeof e6.pipeTo ? new Promise((t7, r5) => {
      const s5 = [];
      e6.pipeTo(new WritableStream({ write(e7) {
        s5.push(e7);
      }, close() {
        t7(Vt2.concat(s5));
      }, abort(e7) {
        r5(e7);
      } })).catch(r5);
    }) : "function" == typeof e6.pipe ? new Promise((t7, r5) => {
      const s5 = [];
      e6.on("data", (e7) => {
        s5.push(e7);
      }).on("end", () => {
        t7(Vt2.concat(s5));
      }).on("error", r5);
    }) : e6.constructor === Object ? Vt2.from(JSON.stringify(e6)) : e6 instanceof URLSearchParams ? Vt2.from(e6.toString()) : e6 instanceof FormData ? new Response(e6).bytes().then((e7) => Vt2.from(e7)) : Vt2.from(e6));
    return t6 ? e5.then((e6) => e6.toString(t6)) : e5;
  }
  if (!Number.parseInt(e4.node.req.headers["content-length"] || "") && !/\bchunked\b/i.test(String(e4.node.req.headers["transfer-encoding"] ?? ""))) return Promise.resolve(void 0);
  const s4 = e4.node.req[kr2] = new Promise((t7, r5) => {
    const s5 = [];
    e4.node.req.on("error", (e5) => {
      r5(e5);
    }).on("data", (e5) => {
      s5.push(e5);
    }).on("end", () => {
      t7(Vt2.concat(s5));
    });
  });
  return t6 ? s4.then((e5) => e5.toString(t6)) : s4;
}
function handleCacheHeaders(e4, t6) {
  const r4 = ["public", ...t6.cacheControls || []];
  let s4 = false;
  if (void 0 !== t6.maxAge && r4.push("max-age=" + +t6.maxAge, "s-maxage=" + +t6.maxAge), t6.modifiedTime) {
    const r5 = new Date(t6.modifiedTime), a4 = e4.node.req.headers["if-modified-since"];
    e4.node.res.setHeader("last-modified", r5.toUTCString()), a4 && new Date(a4) >= r5 && (s4 = true);
  }
  if (t6.etag) {
    e4.node.res.setHeader("etag", t6.etag);
    e4.node.req.headers["if-none-match"] === t6.etag && (s4 = true);
  }
  return e4.node.res.setHeader("cache-control", r4.join(", ")), !!s4 && (e4.node.res.statusCode = 304, e4.handled || e4.node.res.end(), true);
}
function sanitizeStatusMessage(e4 = "") {
  return e4.replace(Pr2, "");
}
function sanitizeStatusCode(e4, t6 = 200) {
  return e4 ? ("string" == typeof e4 && (e4 = Number.parseInt(e4, 10)), e4 < 100 || e4 > 999 ? t6 : e4) : t6;
}
function splitCookiesString(e4) {
  if (Array.isArray(e4)) return e4.flatMap((e5) => splitCookiesString(e5));
  if ("string" != typeof e4) return [];
  const t6 = [];
  let r4, s4, a4, c4, u3, f3 = 0;
  const skipWhitespace = /* @__PURE__ */ __name(() => {
    for (; f3 < e4.length && /\s/.test(e4.charAt(f3)); ) f3 += 1;
    return f3 < e4.length;
  }, "skipWhitespace"), notSpecialChar = /* @__PURE__ */ __name(() => (s4 = e4.charAt(f3), "=" !== s4 && ";" !== s4 && "," !== s4), "notSpecialChar");
  for (; f3 < e4.length; ) {
    for (r4 = f3, u3 = false; skipWhitespace(); ) if (s4 = e4.charAt(f3), "," === s4) {
      for (a4 = f3, f3 += 1, skipWhitespace(), c4 = f3; f3 < e4.length && notSpecialChar(); ) f3 += 1;
      f3 < e4.length && "=" === e4.charAt(f3) ? (u3 = true, f3 = c4, t6.push(e4.slice(r4, a4)), r4 = f3) : f3 = a4 + 1;
    } else f3 += 1;
    (!u3 || f3 >= e4.length) && t6.push(e4.slice(r4));
  }
  return t6;
}
function send(e4, t6, r4) {
  return r4 && (function(e5, t7) {
    t7 && 304 !== e5.node.res.statusCode && !e5.node.res.getHeader("content-type") && e5.node.res.setHeader("content-type", t7);
  })(e4, r4), new Promise((r5) => {
    Lr2(() => {
      e4.handled || e4.node.res.end(t6), r5();
    });
  });
}
function setResponseStatus(e4, t6, r4) {
  t6 && (e4.node.res.statusCode = sanitizeStatusCode(t6, e4.node.res.statusCode)), r4 && (e4.node.res.statusMessage = sanitizeStatusMessage(r4));
}
function getResponseStatus(e4) {
  return e4.node.res.statusCode;
}
function getResponseStatusText(e4) {
  return e4.node.res.statusMessage;
}
function setResponseHeaders(e4, t6) {
  for (const [r4, s4] of Object.entries(t6)) e4.node.res.setHeader(r4, s4);
}
function setResponseHeader(e4, t6, r4) {
  e4.node.res.setHeader(t6, r4);
}
function appendResponseHeader(e4, t6, r4) {
  let s4 = e4.node.res.getHeader(t6);
  s4 ? (Array.isArray(s4) || (s4 = [s4.toString()]), e4.node.res.setHeader(t6, [...s4, r4])) : e4.node.res.setHeader(t6, r4);
}
function sendStream(e4, t6) {
  if (!t6 || "object" != typeof t6) throw new Error("[h3] Invalid stream provided.");
  if (e4.node.res._data = t6, !e4.node.res.socket) return e4._handled = true, Promise.resolve();
  if (hasProp2(t6, "pipeTo") && "function" == typeof t6.pipeTo) return t6.pipeTo(new WritableStream({ write(t7) {
    e4.node.res.write(t7);
  } })).then(() => {
    e4.node.res.end();
  });
  if (hasProp2(t6, "pipe") && "function" == typeof t6.pipe) return new Promise((r4, s4) => {
    t6.pipe(e4.node.res), t6.on && (t6.on("end", () => {
      e4.node.res.end(), r4();
    }), t6.on("error", (e5) => {
      s4(e5);
    })), e4.node.res.on("close", () => {
      t6.abort && t6.abort();
    });
  });
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(e4, t6) {
  for (const [r4, s4] of t6.headers) "set-cookie" === r4 ? e4.node.res.appendHeader(r4, splitCookiesString(s4)) : e4.node.res.setHeader(r4, s4);
  if (t6.status && (e4.node.res.statusCode = sanitizeStatusCode(t6.status, e4.node.res.statusCode)), t6.statusText && (e4.node.res.statusMessage = sanitizeStatusMessage(t6.statusText)), t6.redirected && e4.node.res.setHeader("location", t6.url), t6.body) return sendStream(e4, t6.body);
  e4.node.res.end();
}
async function proxyRequest(e4, t6, r4 = {}) {
  let s4, a4;
  Ur2.has(e4.method) && (r4.streamRequest ? (s4 = (function(e5) {
    if (!Cr2.includes(e5.method)) return;
    const t7 = e5.web?.request?.body || e5._requestBody;
    return t7 || (kr2 in e5.node.req || "rawBody" in e5.node.req || "body" in e5.node.req || "__unenv__" in e5.node.req ? new ReadableStream({ async start(t8) {
      const r5 = await readRawBody(e5, false);
      r5 && t8.enqueue(r5), t8.close();
    } }) : new ReadableStream({ start: /* @__PURE__ */ __name((t8) => {
      e5.node.req.on("data", (e6) => {
        t8.enqueue(e6);
      }), e5.node.req.on("end", () => {
        t8.close();
      }), e5.node.req.on("error", (e6) => {
        t8.error(e6);
      });
    }, "start") }));
  })(e4), a4 = "half") : s4 = await readRawBody(e4, false).catch(() => {
  }));
  const c4 = r4.fetchOptions?.method || e4.method, u3 = (function(e5, ...t7) {
    const r5 = t7.filter(Boolean);
    if (0 === r5.length) return e5;
    const s5 = new Headers(e5);
    for (const e6 of r5) {
      const t8 = Array.isArray(e6) ? e6 : "function" == typeof e6.entries ? e6.entries() : Object.entries(e6);
      for (const [e7, r6] of t8) void 0 !== r6 && s5.set(e7, r6);
    }
    return s5;
  })(getProxyRequestHeaders(e4, { host: t6.startsWith("/") }), r4.fetchOptions?.headers, r4.headers);
  return (async function(e5, t7, r5 = {}) {
    let s5;
    try {
      s5 = await _getFetch(r5.fetch)(t7, { headers: r5.headers, ignoreResponseError: true, ...r5.fetchOptions });
    } catch (e6) {
      throw createError({ status: 502, statusMessage: "Bad Gateway", cause: e6 });
    }
    e5.node.res.statusCode = sanitizeStatusCode(s5.status, e5.node.res.statusCode), e5.node.res.statusMessage = sanitizeStatusMessage(s5.statusText);
    const a5 = [];
    for (const [t8, r6] of s5.headers.entries()) "content-encoding" !== t8 && "content-length" !== t8 && ("set-cookie" !== t8 ? e5.node.res.setHeader(t8, r6) : a5.push(...splitCookiesString(r6)));
    a5.length > 0 && e5.node.res.setHeader("set-cookie", a5.map((e6) => (r5.cookieDomainRewrite && (e6 = rewriteCookieProperty(e6, r5.cookieDomainRewrite, "domain")), r5.cookiePathRewrite && (e6 = rewriteCookieProperty(e6, r5.cookiePathRewrite, "path")), e6)));
    r5.onResponse && await r5.onResponse(e5, s5);
    if (void 0 !== s5._data) return s5._data;
    if (e5.handled) return;
    if (false === r5.sendStream) {
      const t8 = new Uint8Array(await s5.arrayBuffer());
      return e5.node.res.end(t8);
    }
    if (s5.body) for await (const t8 of s5.body) e5.node.res.write(t8);
    return e5.node.res.end();
  })(e4, t6, { ...r4, fetchOptions: { method: c4, body: s4, duplex: a4, ...r4.fetchOptions, headers: u3 } });
}
function getProxyRequestHeaders(e4, t6) {
  const r4 = /* @__PURE__ */ Object.create(null), s4 = getRequestHeaders(e4);
  for (const e5 in s4) (!Nr2.has(e5) || "host" === e5 && t6?.host) && (r4[e5] = s4[e5]);
  return r4;
}
function fetchWithEvent(e4, t6, r4, s4) {
  return _getFetch(s4?.fetch)(t6, { ...r4, context: r4?.context || e4.context, headers: { ...getProxyRequestHeaders(e4, { host: "string" == typeof t6 && t6.startsWith("/") }), ...r4?.headers } });
}
function _getFetch(e4) {
  if (e4) return e4;
  if (globalThis.fetch) return globalThis.fetch;
  throw new Error("fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js.");
}
function rewriteCookieProperty(e4, t6, r4) {
  const s4 = "string" == typeof t6 ? { "*": t6 } : t6;
  return e4.replace(new RegExp(`(;\\s*${r4}=)([^;]+)`, "gi"), (e5, t7, r5) => {
    let a4;
    if (r5 in s4) a4 = s4[r5];
    else {
      if (!("*" in s4)) return e5;
      a4 = s4["*"];
    }
    return a4 ? t7 + a4 : "";
  });
}
function isEvent(e4) {
  return hasProp2(e4, "__is_event__");
}
function createEvent(e4, t6) {
  return new H3Event(e4, t6);
}
function defineEventHandler(e4) {
  if ("function" == typeof e4) return e4.__is_handler__ = true, e4;
  const t6 = { onRequest: _normalizeArray(e4.onRequest), onBeforeResponse: _normalizeArray(e4.onBeforeResponse) }, _handler = /* @__PURE__ */ __name((r4) => (async function(e5, t7, r5) {
    if (r5.onRequest) {
      for (const t8 of r5.onRequest) if (await t8(e5), e5.handled) return;
    }
    const s4 = await t7(e5), a4 = { body: s4 };
    if (r5.onBeforeResponse) for (const t8 of r5.onBeforeResponse) await t8(e5, a4);
    return a4.body;
  })(r4, e4.handler, t6), "_handler");
  return _handler.__is_handler__ = true, _handler.__resolve__ = e4.handler.__resolve__, _handler.__websocket__ = e4.websocket, _handler;
}
function _normalizeArray(e4) {
  return e4 ? Array.isArray(e4) ? e4 : [e4] : void 0;
}
function toEventHandler(e4, t6, r4) {
  return e4;
}
function createApp2(e4 = {}) {
  const t6 = [], r4 = (function(e5, t7) {
    const r5 = t7.debug ? 2 : void 0;
    return Mr2(async (s5) => {
      s5.node.req.originalUrl = s5.node.req.originalUrl || s5.node.req.url || "/";
      const a5 = s5.node.req.url || "/", c5 = (function(e6) {
        const t8 = e6.indexOf("?"), r6 = -1 === t8 ? e6 : e6.slice(0, t8), s6 = -1 === t8 ? "" : e6.slice(t8);
        return (r6.includes("%25") ? decodePath(r6.replace(/%25/g, "%2525")) : decodePath(r6)) + s6;
      })(s5._path || a5);
      s5._path = c5;
      const u3 = c5 !== a5;
      let f3;
      t7.onRequest && await t7.onRequest(s5);
      for (const h4 of e5) {
        if (h4.route.length > 1) {
          if (!c5.startsWith(h4.route)) continue;
          f3 = c5.slice(h4.route.length) || "/";
        } else f3 = c5;
        if (h4.match && !h4.match(f3, s5)) continue;
        s5._path = f3, s5.node.req.url = u3 ? h4.route.length > 1 ? a5.slice(h4.route.length) || "/" : a5 : f3;
        const e6 = await h4.handler(s5), d3 = void 0 === e6 ? void 0 : await e6;
        if (void 0 !== d3) {
          const e7 = { body: d3 };
          return t7.onBeforeResponse && (s5._onBeforeResponseCalled = true, await t7.onBeforeResponse(s5, e7)), await handleHandlerResponse(s5, e7.body, r5), void (t7.onAfterResponse && (s5._onAfterResponseCalled = true, await t7.onAfterResponse(s5, e7)));
        }
        if (s5.handled) return void (t7.onAfterResponse && (s5._onAfterResponseCalled = true, await t7.onAfterResponse(s5, void 0)));
      }
      if (!s5.handled) throw createError({ statusCode: 404, statusMessage: `Cannot find any path matching ${s5.path || "/"}.` });
      t7.onAfterResponse && (s5._onAfterResponseCalled = true, await t7.onAfterResponse(s5, void 0));
    });
  })(t6, e4), s4 = /* @__PURE__ */ (function(e5) {
    return async (t7) => {
      let r5;
      for (const s5 of e5) {
        if ("/" === s5.route && !s5.handler.__resolve__) continue;
        if (!t7.startsWith(s5.route)) continue;
        if (r5 = t7.slice(s5.route.length) || "/", s5.match && !s5.match(r5, void 0)) continue;
        let e6 = { route: s5.route, handler: s5.handler };
        if (e6.handler.__resolve__) {
          const t8 = await e6.handler.__resolve__(r5);
          if (!t8) continue;
          e6 = { ...e6, ...t8, route: joinURL(e6.route || "/", t8.route || "/") };
        }
        return e6;
      }
    };
  })(t6);
  r4.__resolve__ = s4;
  const a4 = /* @__PURE__ */ (function(e5) {
    let t7;
    return () => (t7 || (t7 = e5()), t7);
  })(() => {
    return t7 = s4, { ...e4.websocket, async resolve(e5) {
      const r5 = e5.request?.url || e5.url || "/", { pathname: s5 } = "string" == typeof r5 ? parseURL(r5) : r5, a5 = await t7(s5);
      return a5?.handler?.__websocket__ || {};
    } };
    var t7;
  }), c4 = { use: /* @__PURE__ */ __name((e5, t7, r5) => use(c4, e5, t7, r5), "use"), resolve: s4, handler: r4, stack: t6, options: e4, get websocket() {
    return a4();
  } };
  return c4;
}
function use(e4, t6, r4, s4) {
  if (Array.isArray(t6)) for (const a4 of t6) use(e4, a4, r4, s4);
  else if (Array.isArray(r4)) for (const a4 of r4) use(e4, t6, a4, s4);
  else "string" == typeof t6 ? e4.stack.push(normalizeLayer({ ...s4, route: t6, handler: r4 })) : "function" == typeof t6 ? e4.stack.push(normalizeLayer({ ...r4, handler: t6 })) : e4.stack.push(normalizeLayer({ ...t6 }));
  return e4;
}
function normalizeLayer(e4) {
  let t6 = e4.handler;
  return t6.handler && (t6 = t6.handler), e4.lazy ? t6 = lazyEventHandler(t6) : (function(e5) {
    return hasProp2(e5, "__is_handler__");
  })(t6) || (t6 = toEventHandler(t6, 0, e4.route)), { route: withoutTrailingSlash(e4.route), match: e4.match, handler: t6 };
}
function handleHandlerResponse(e4, t6, r4) {
  if (null === t6) return (function(e5, t7) {
    if (e5.handled) return;
    t7 || 200 === e5.node.res.statusCode || (t7 = e5.node.res.statusCode);
    const r5 = sanitizeStatusCode(t7, 204);
    204 === r5 && e5.node.res.removeHeader("content-length"), e5.node.res.writeHead(r5), e5.node.res.end();
  })(e4);
  if (t6) {
    if (s4 = t6, "undefined" != typeof Response && s4 instanceof Response) return sendWebResponse(e4, t6);
    if ((function(e5) {
      if (!e5 || "object" != typeof e5) return false;
      if ("function" == typeof e5.pipe) {
        if ("function" == typeof e5._read) return true;
        if ("function" == typeof e5.abort) return true;
      }
      return "function" == typeof e5.pipeTo;
    })(t6)) return sendStream(e4, t6);
    if (t6.buffer) return send(e4, t6);
    if (t6.arrayBuffer && "function" == typeof t6.arrayBuffer) return t6.arrayBuffer().then((r5) => send(e4, Vt2.from(r5), t6.type));
    if (t6 instanceof Error) throw createError(t6);
    if ("function" == typeof t6.end) return true;
  }
  var s4;
  const a4 = typeof t6;
  if ("string" === a4) return send(e4, t6, $r2.html);
  if ("object" === a4 || "boolean" === a4 || "number" === a4) return send(e4, JSON.stringify(t6, void 0, r4), $r2.json);
  if ("bigint" === a4) return send(e4, t6.toString(), $r2.json);
  throw createError({ statusCode: 500, statusMessage: `[h3] Cannot send ${a4} as response.` });
}
function toNodeListener(e4) {
  return async function(t6, r4) {
    const s4 = createEvent(t6, r4);
    try {
      await e4.handler(s4);
    } catch (t7) {
      const r5 = createError(t7);
      if (isError(t7) || (r5.unhandled = true), setResponseStatus(s4, r5.statusCode, r5.statusMessage), e4.options.onError && await e4.options.onError(r5, s4), s4.handled) return;
      (r5.unhandled || r5.fatal) && console.error("[h3]", r5.fatal ? "[fatal]" : "[unhandled]", r5), e4.options.onBeforeResponse && !s4._onBeforeResponseCalled && await e4.options.onBeforeResponse(s4, { body: r5 }), await (function(e5, t8, r6) {
        if (e5.handled) return;
        const s5 = isError(t8) ? t8 : createError(t8), a4 = { statusCode: s5.statusCode, statusMessage: s5.statusMessage, stack: [], data: s5.data };
        if (r6 && (a4.stack = (s5.stack || "").split("\n").map((e6) => e6.trim())), e5.handled) return;
        setResponseStatus(e5, Number.parseInt(s5.statusCode), s5.statusMessage), e5.node.res.setHeader("content-type", $r2.json), e5.node.res.end(JSON.stringify(a4, void 0, 2));
      })(s4, r5, !!e4.options.debug), e4.options.onAfterResponse && !s4._onAfterResponseCalled && await e4.options.onAfterResponse(s4, { body: r5 });
    }
  };
}
function flatHooks2(e4, t6 = {}, r4) {
  for (const s4 in e4) {
    const a4 = e4[s4], c4 = r4 ? `${r4}:${s4}` : s4;
    "object" == typeof a4 && null !== a4 ? flatHooks2(a4, t6, c4) : "function" == typeof a4 && (t6[c4] = a4);
  }
  return t6;
}
function serialTaskCaller2(e4, t6) {
  const r4 = t6.shift(), s4 = Wr2(r4);
  return e4.reduce((e5, r5) => e5.then(() => s4.run(() => r5(...t6))), Promise.resolve());
}
function parallelTaskCaller2(e4, t6) {
  const r4 = t6.shift(), s4 = Wr2(r4);
  return Promise.all(e4.map((e5) => s4.run(() => e5(...t6))));
}
function callEachWith2(e4, t6) {
  for (const r4 of [...e4]) r4(t6);
}
function isPayloadMethod(e4 = "GET") {
  return Fr2.has(e4.toUpperCase());
}
function resolveFetchOptions(e4, t6, r4, s4) {
  const a4 = (function(e5, t7, r5) {
    if (!t7) return new r5(e5);
    const s5 = new r5(t7);
    if (e5) for (const [t8, a5] of Symbol.iterator in e5 || Array.isArray(e5) ? e5 : new r5(e5)) s5.set(t8, a5);
    return s5;
  })(t6?.headers ?? e4?.headers, r4?.headers, s4);
  let c4;
  return (r4?.query || r4?.params || t6?.params || t6?.query) && (c4 = { ...r4?.params, ...r4?.query, ...t6?.params, ...t6?.query }), { ...r4, ...t6, query: c4, params: c4, headers: a4 };
}
async function callHooks2(e4, t6) {
  if (t6) if (Array.isArray(t6)) for (const r4 of t6) await r4(e4);
  else await t6(e4);
}
function createFetch(e4 = {}) {
  const { fetch: t6 = globalThis.fetch, Headers: r4 = globalThis.Headers, AbortController: s4 = globalThis.AbortController } = e4;
  async function onError(e5) {
    const t7 = e5.error && "AbortError" === e5.error.name && !e5.options.timeout || false;
    if (false !== e5.options.retry && !t7) {
      let t8;
      t8 = "number" == typeof e5.options.retry ? e5.options.retry : isPayloadMethod(e5.options.method) ? 0 : 1;
      const r6 = e5.response && e5.response.status || 500;
      if (t8 > 0 && (Array.isArray(e5.options.retryStatusCodes) ? e5.options.retryStatusCodes.includes(r6) : Kr2.has(r6))) {
        const r7 = "function" == typeof e5.options.retryDelay ? e5.options.retryDelay(e5) : e5.options.retryDelay || 0;
        return r7 > 0 && await new Promise((e6) => setTimeout(e6, r7)), $fetchRaw(e5.request, { ...e5.options, retry: t8 - 1 });
      }
    }
    const r5 = (function(e6) {
      const t8 = e6.error?.message || e6.error?.toString() || "", r6 = e6.request?.method || e6.options?.method || "GET", s5 = e6.request?.url || String(e6.request) || "/", a4 = `[${r6}] ${JSON.stringify(s5)}`, c4 = e6.response ? `${e6.response.status} ${e6.response.statusText}` : "<no response>", u3 = new FetchError(`${a4}: ${c4}${t8 ? ` ${t8}` : ""}`, e6.error ? { cause: e6.error } : void 0);
      for (const t9 of ["request", "options", "response"]) Object.defineProperty(u3, t9, { get: /* @__PURE__ */ __name(() => e6[t9], "get") });
      for (const [t9, r7] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]]) Object.defineProperty(u3, t9, { get: /* @__PURE__ */ __name(() => e6.response && e6.response[r7], "get") });
      return u3;
    })(e5);
    throw Error.captureStackTrace && Error.captureStackTrace(r5, $fetchRaw), r5;
  }
  __name(onError, "onError");
  const $fetchRaw = /* @__PURE__ */ __name(async function(a4, c4 = {}) {
    const u3 = { request: a4, options: resolveFetchOptions(a4, c4, e4.defaults, r4), response: void 0, error: void 0 };
    if (u3.options.method && (u3.options.method = u3.options.method.toUpperCase()), u3.options.onRequest && (await callHooks2(u3, u3.options.onRequest), u3.options.headers instanceof r4 || (u3.options.headers = new r4(u3.options.headers || {}))), "string" == typeof u3.request && (u3.options.baseURL && (u3.request = (function(e5, t7) {
      if (isEmptyURL(t7) || hasProtocol(e5)) return e5;
      const r5 = withoutTrailingSlash(t7);
      if (e5.startsWith(r5)) {
        const t8 = e5[r5.length];
        if (!t8 || "/" === t8 || "?" === t8) return e5;
      }
      return joinURL(r5, e5);
    })(u3.request, u3.options.baseURL)), u3.options.query && (u3.request = withQuery(u3.request, u3.options.query), delete u3.options.query), "query" in u3.options && delete u3.options.query, "params" in u3.options && delete u3.options.params), u3.options.body && isPayloadMethod(u3.options.method)) if ((function(e5) {
      if (void 0 === e5) return false;
      const t7 = typeof e5;
      return "string" === t7 || "number" === t7 || "boolean" === t7 || null === t7 || "object" === t7 && (!!Array.isArray(e5) || !e5.buffer && !(e5 instanceof FormData || e5 instanceof URLSearchParams) && (e5.constructor && "Object" === e5.constructor.name || "function" == typeof e5.toJSON));
    })(u3.options.body)) {
      const e5 = u3.options.headers.get("content-type");
      "string" != typeof u3.options.body && (u3.options.body = "application/x-www-form-urlencoded" === e5 ? new URLSearchParams(u3.options.body).toString() : JSON.stringify(u3.options.body)), e5 || u3.options.headers.set("content-type", "application/json"), u3.options.headers.has("accept") || u3.options.headers.set("accept", "application/json");
    } else ("pipeTo" in u3.options.body && "function" == typeof u3.options.body.pipeTo || "function" == typeof u3.options.body.pipe) && ("duplex" in u3.options || (u3.options.duplex = "half"));
    let f3;
    if (!u3.options.signal && u3.options.timeout) {
      const e5 = new s4();
      f3 = setTimeout(() => {
        const t7 = new Error("[TimeoutError]: The operation was aborted due to timeout");
        t7.name = "TimeoutError", t7.code = 23, e5.abort(t7);
      }, u3.options.timeout), u3.options.signal = e5.signal;
    }
    try {
      u3.response = await t6(u3.request, u3.options);
    } catch (e5) {
      return u3.error = e5, u3.options.onRequestError && await callHooks2(u3, u3.options.onRequestError), await onError(u3);
    } finally {
      f3 && clearTimeout(f3);
    }
    if ((u3.response.body || u3.response._bodyInit) && !Qr2.has(u3.response.status) && "HEAD" !== u3.options.method) {
      const e5 = (u3.options.parseResponse ? "json" : u3.options.responseType) || (function(e6 = "") {
        if (!e6) return "json";
        const t7 = e6.split(";").shift() || "";
        return zr2.test(t7) ? "json" : "text/event-stream" === t7 ? "stream" : Dr2.has(t7) || t7.startsWith("text/") ? "text" : "blob";
      })(u3.response.headers.get("content-type") || "");
      switch (e5) {
        case "json": {
          const e6 = await u3.response.text(), t7 = u3.options.parseResponse || destr;
          u3.response._data = t7(e6);
          break;
        }
        case "stream":
          u3.response._data = u3.response.body || u3.response._bodyInit;
          break;
        default:
          u3.response._data = await u3.response[e5]();
      }
    }
    return u3.options.onResponse && await callHooks2(u3, u3.options.onResponse), !u3.options.ignoreResponseError && u3.response.status >= 400 && u3.response.status < 600 ? (u3.options.onResponseError && await callHooks2(u3, u3.options.onResponseError), await onError(u3)) : u3.response;
  }, "$fetchRaw"), $fetch = /* @__PURE__ */ __name(async function(e5, t7) {
    return (await $fetchRaw(e5, t7))._data;
  }, "$fetch");
  return $fetch.raw = $fetchRaw, $fetch.native = (...e5) => t6(...e5), $fetch.create = (t7 = {}, r5 = {}) => createFetch({ ...e4, ...r5, defaults: { ...e4.defaults, ...r5.defaults, ...t7 } }), $fetch;
}
function asyncCall(e4, ...t6) {
  try {
    return (r4 = e4(...t6)) && "function" == typeof r4.then ? r4 : Promise.resolve(r4);
  } catch (e5) {
    return Promise.reject(e5);
  }
  var r4;
}
function stringify2(e4) {
  if (/* @__PURE__ */ (function(e5) {
    const t6 = typeof e5;
    return null === e5 || "object" !== t6 && "function" !== t6;
  })(e4)) return String(e4);
  if ((function(e5) {
    const t6 = Object.getPrototypeOf(e5);
    return !t6 || t6.isPrototypeOf(Object);
  })(e4) || Array.isArray(e4)) return JSON.stringify(e4);
  if ("function" == typeof e4.toJSON) return stringify2(e4.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function serializeRaw(e4) {
  return "string" == typeof e4 ? e4 : Zr2 + (function(e5) {
    if (globalThis.Buffer) return Vt2.from(e5).toString("base64");
    return globalThis.btoa(String.fromCodePoint(...e5));
  })(e4);
}
function deserializeRaw(e4) {
  return "string" != typeof e4 ? e4 : e4.startsWith(Zr2) ? (function(e5) {
    if (globalThis.Buffer) return Vt2.from(e5, "base64");
    return Uint8Array.from(globalThis.atob(e5), (e6) => e6.codePointAt(0));
  })(e4.slice(7)) : e4;
}
function normalizeKey$1(e4) {
  return e4 && e4.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...e4) {
  return normalizeKey$1(e4.join(":"));
}
function normalizeBaseKey(e4) {
  return (e4 = normalizeKey$1(e4)) ? e4 + ":" : "";
}
function watch2(e4, t6, r4) {
  return e4.watch ? e4.watch((e5, s4) => t6(e5, r4 + s4)) : () => {
  };
}
async function dispose(e4) {
  "function" == typeof e4.dispose && await asyncCall(e4.dispose);
}
function useStorage(e4 = "") {
  return e4 ? (function(e5, t6) {
    if (!(t6 = normalizeBaseKey(t6))) return e5;
    const r4 = { ...e5 };
    for (const s4 of en3) r4[s4] = (r5 = "", ...a4) => e5[s4](t6 + r5, ...a4);
    return r4.getKeys = (r5 = "", ...s4) => e5.getKeys(t6 + r5, ...s4).then((e6) => e6.map((e7) => e7.slice(t6.length))), r4.keys = r4.getKeys, r4.getItems = async (r5, s4) => {
      const a4 = r5.map((e6) => "string" == typeof e6 ? t6 + e6 : { ...e6, key: t6 + e6.key });
      return (await e5.getItems(a4, s4)).map((e6) => ({ key: e6.key.slice(t6.length), value: e6.value }));
    }, r4.setItems = async (r5, s4) => {
      const a4 = r5.map((e6) => ({ key: t6 + e6.key, value: e6.value, options: e6.options }));
      return e5.setItems(a4, s4);
    }, r4;
  })(nn3, e4) : nn3;
}
function hash(e4) {
  return (function(e5) {
    return new k3().finalize(e5).toBase64();
  })("string" == typeof e4 ? e4 : (function(e5) {
    const t6 = new cn3();
    return t6.dispatch(e5), t6.buff;
  })(e4)).replace(/[-_]/g, "").slice(0, 10);
}
function defineCachedFunction(e4, t6 = {}) {
  t6 = { name: "_", base: "/cache", swr: true, maxAge: 1, ...t6 };
  const r4 = {}, s4 = t6.group || "nitro/functions", a4 = t6.name || e4.name || "_", c4 = t6.integrity || hash([e4, t6]), u3 = t6.validate || ((e5) => void 0 !== e5.value);
  return async (...f3) => {
    if (await t6.shouldBypassCache?.(...f3)) return e4(...f3);
    const h4 = await (t6.getKey || getKey)(...f3), d3 = await t6.shouldInvalidateCache?.(...f3), g3 = await (async function(e5, f4, h5, d4) {
      const g4 = [t6.base, s4, a4, e5 + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
      let m4 = await useStorage().getItem(g4).catch((e6) => {
        console.error("[cache] Cache read error.", e6), useNitroApp().captureError(e6, { event: d4, tags: ["cache"] });
      }) || {};
      if ("object" != typeof m4) {
        m4 = {};
        const e6 = new Error("Malformed data read from cache.");
        console.error("[cache]", e6), useNitroApp().captureError(e6, { event: d4, tags: ["cache"] });
      }
      const _3 = 1e3 * (t6.maxAge ?? 0);
      _3 && (m4.expires = Date.now() + _3);
      const E3 = h5 || m4.integrity !== c4 || _3 && Date.now() - (m4.mtime || 0) > _3 || false === u3(m4), R3 = E3 ? (async () => {
        const s5 = r4[e5];
        s5 || (void 0 !== m4.value && (t6.staleMaxAge || 0) >= 0 && false === t6.swr && (m4.value = void 0, m4.integrity = void 0, m4.mtime = void 0, m4.expires = void 0), r4[e5] = Promise.resolve(f4()));
        try {
          m4.value = await r4[e5];
        } catch (t7) {
          throw s5 || delete r4[e5], t7;
        }
        if (!s5 && (m4.mtime = Date.now(), m4.integrity = c4, delete r4[e5], false !== u3(m4))) {
          let e6;
          t6.maxAge && !t6.swr && (e6 = { ttl: t6.maxAge });
          const r5 = useStorage().setItem(g4, m4, e6).catch((e7) => {
            console.error("[cache] Cache write error.", e7), useNitroApp().captureError(e7, { event: d4, tags: ["cache"] });
          });
          d4?.waitUntil && d4.waitUntil(r5);
        }
      })() : Promise.resolve();
      return void 0 === m4.value ? await R3 : E3 && d4 && d4.waitUntil && d4.waitUntil(R3), t6.swr && false !== u3(m4) ? (R3.catch((e6) => {
        console.error("[cache] SWR handler error.", e6), useNitroApp().captureError(e6, { event: d4, tags: ["cache"] });
      }), m4) : R3.then(() => m4);
    })(h4, () => e4(...f3), d3, f3[0] && isEvent(f3[0]) ? f3[0] : void 0);
    let m3 = g3.value;
    return t6.transform && (m3 = await t6.transform(g3, ...f3) || m3), m3;
  };
}
function getKey(...e4) {
  return e4.length > 0 ? hash(e4) : "";
}
function escapeKey(e4) {
  return String(e4).replace(/\W/g, "");
}
function cloneWithProxy(e4, t6) {
  return new Proxy(e4, { get: /* @__PURE__ */ __name((e5, r4, s4) => r4 in t6 ? t6[r4] : Reflect.get(e5, r4, s4), "get"), set: /* @__PURE__ */ __name((e5, r4, s4, a4) => r4 in t6 ? (t6[r4] = s4, true) : Reflect.set(e5, r4, s4, a4), "set") });
}
function klona(e4) {
  if ("object" != typeof e4) return e4;
  var t6, r4, s4 = Object.prototype.toString.call(e4);
  if ("[object Object]" === s4) {
    if (e4.constructor !== Object && "function" == typeof e4.constructor) for (t6 in r4 = new e4.constructor(), e4) e4.hasOwnProperty(t6) && r4[t6] !== e4[t6] && (r4[t6] = klona(e4[t6]));
    else for (t6 in r4 = {}, e4) "__proto__" === t6 ? Object.defineProperty(r4, t6, { value: klona(e4[t6]), configurable: true, enumerable: true, writable: true }) : r4[t6] = klona(e4[t6]);
    return r4;
  }
  if ("[object Array]" === s4) {
    for (t6 = e4.length, r4 = Array(t6); t6--; ) r4[t6] = klona(e4[t6]);
    return r4;
  }
  return "[object Set]" === s4 ? (r4 = /* @__PURE__ */ new Set(), e4.forEach(function(e5) {
    r4.add(klona(e5));
  }), r4) : "[object Map]" === s4 ? (r4 = /* @__PURE__ */ new Map(), e4.forEach(function(e5, t7) {
    r4.set(klona(t7), klona(e5));
  }), r4) : "[object Date]" === s4 ? /* @__PURE__ */ new Date(+e4) : "[object RegExp]" === s4 ? ((r4 = new RegExp(e4.source, e4.flags)).lastIndex = e4.lastIndex, r4) : "[object DataView]" === s4 ? new e4.constructor(klona(e4.buffer)) : "[object ArrayBuffer]" === s4 ? e4.slice(0) : "Array]" === s4.slice(-6) ? new e4.constructor(e4) : e4;
}
function isUppercase(e4 = "") {
  if (!fn2.test(e4)) return e4 !== e4.toLowerCase();
}
function kebabCase(e4, t6) {
  return e4 ? (Array.isArray(e4) ? e4 : (function(e5) {
    const t7 = ln3, r4 = [];
    if (!e5 || "string" != typeof e5) return r4;
    let s4, a4, c4 = "";
    for (const u3 of e5) {
      const e6 = t7.includes(u3);
      if (true === e6) {
        r4.push(c4), c4 = "", s4 = void 0;
        continue;
      }
      const f3 = isUppercase(u3);
      if (false === a4) {
        if (false === s4 && true === f3) {
          r4.push(c4), c4 = u3, s4 = f3;
          continue;
        }
        if (true === s4 && false === f3 && c4.length > 1) {
          const e7 = c4.at(-1);
          r4.push(c4.slice(0, Math.max(0, c4.length - 1))), c4 = e7 + u3, s4 = f3;
          continue;
        }
      }
      c4 += u3, s4 = f3, a4 = e6;
    }
    return r4.push(c4), r4;
  })(e4)).map((e5) => e5.toLowerCase()).join(t6) : "";
}
function getEnv(e4, t6) {
  const r4 = (s4 = e4, kebabCase(s4 || "", "_")).toUpperCase();
  var s4;
  return destr(H.env[t6.prefix + r4] ?? H.env[t6.altPrefix + r4]);
}
function _isObject(e4) {
  return "object" == typeof e4 && !Array.isArray(e4);
}
function applyEnv(e4, t6, r4 = "") {
  for (const s4 in e4) {
    const a4 = r4 ? `${r4}_${s4}` : s4, c4 = getEnv(a4, t6);
    _isObject(e4[s4]) ? _isObject(c4) ? (e4[s4] = { ...e4[s4], ...c4 }, applyEnv(e4[s4], t6, a4)) : void 0 === c4 ? applyEnv(e4[s4], t6, a4) : e4[s4] = c4 ?? e4[s4] : e4[s4] = c4 ?? e4[s4], t6.envExpansion && "string" == typeof e4[s4] && (e4[s4] = _expandFromEnv(e4[s4]));
  }
  return e4;
}
function _expandFromEnv(e4) {
  return e4.replace(hn2, (e5, t6) => H.env[t6] || e5);
}
function useRuntimeConfig2(e4) {
  if (!e4) return gn2;
  if (e4.context.nitro.runtimeConfig) return e4.context.nitro.runtimeConfig;
  const t6 = klona(dn3);
  return applyEnv(t6, pn3), e4.context.nitro.runtimeConfig = t6, t6;
}
function _deepFreeze(e4) {
  const t6 = Object.getOwnPropertyNames(e4);
  for (const r4 of t6) {
    const t7 = e4[r4];
    t7 && "object" == typeof t7 && _deepFreeze(t7);
  }
  return Object.freeze(e4);
}
function isPathInScope(e4, t6) {
  let r4;
  try {
    const t7 = e4.replace(/%2f/gi, "/").replace(/%5c/gi, "\\");
    r4 = new URL(t7, "http://_").pathname;
  } catch {
    return false;
  }
  return !t6 || r4 === t6 || r4.startsWith(t6 + "/");
}
function createRouteRulesHandler(e4) {
  return Mr2((t6) => {
    const r4 = getRouteRules(t6);
    if (r4.headers && Or2(t6, r4.headers), r4.redirect) {
      let e5 = r4.redirect.to;
      if (e5.endsWith("/**")) {
        let s4 = t6.path;
        const a4 = r4.redirect._redirectStripBase;
        if (a4) {
          if (!isPathInScope(t6.path.split("?")[0], a4)) throw createError({ statusCode: 400 });
          s4 = withoutBase(s4, a4);
        } else s4.startsWith("//") && (s4 = s4.replace(/^\/+/, "/"));
        e5 = joinURL(e5.slice(0, -3), s4);
      } else if (t6.path.includes("?")) {
        e5 = withQuery(e5, getQuery$1(t6.path));
      }
      return (function(e6, t7, r5 = 302) {
        return e6.node.res.statusCode = sanitizeStatusCode(r5, e6.node.res.statusCode), e6.node.res.setHeader("location", t7), send(e6, `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t7.replace(/"/g, "%22")}"></head></html>`, $r2.html);
      })(t6, e5, r4.redirect.statusCode);
    }
    if (r4.proxy) {
      let s4 = r4.proxy.to;
      if (s4.endsWith("/**")) {
        let e5 = t6.path;
        const a4 = r4.proxy._proxyStripBase;
        if (a4) {
          if (!isPathInScope(t6.path.split("?")[0], a4)) throw createError({ statusCode: 400 });
          e5 = withoutBase(e5, a4);
        } else e5.startsWith("//") && (e5 = e5.replace(/^\/+/, "/"));
        s4 = joinURL(s4.slice(0, -3), e5);
      } else if (t6.path.includes("?")) {
        s4 = withQuery(s4, getQuery$1(t6.path));
      }
      return proxyRequest(t6, s4, { fetch: e4.localFetch, ...r4.proxy });
    }
  });
}
function getRouteRules(e4) {
  return e4.context._nitro = e4.context._nitro || {}, e4.context._nitro.routeRules || (e4.context._nitro.routeRules = getRouteRulesForPath(withoutBase(e4.path.split("?")[0], useRuntimeConfig2().app.baseURL))), e4.context._nitro.routeRules;
}
function getRouteRulesForPath(e4) {
  return Rr({}, ..._n2.matchAll(e4).reverse());
}
function requestHasBody(e4) {
  return En2.test(e4.method);
}
function joinHeaders(e4) {
  return Array.isArray(e4) ? e4.join(", ") : String(e4);
}
function normalizeCookieHeader(e4 = "") {
  return splitCookiesString(joinHeaders(e4));
}
function normalizeCookieHeaders(e4) {
  const t6 = new Headers();
  for (const [r4, s4] of e4) if ("set-cookie" === r4) for (const e5 of normalizeCookieHeader(s4)) t6.append("set-cookie", e5);
  else t6.set(r4, joinHeaders(s4));
  return t6;
}
function hasReqHeader(e4, t6, r4) {
  const s4 = (function(e5, t7) {
    return getRequestHeaders(e5)[t7.toLowerCase()];
  })(e4, t6);
  return !(!s4 || "string" != typeof s4 || !s4.toLowerCase().includes(r4));
}
function defaultHandler(e4, t6, r4) {
  const s4 = e4.unhandled || e4.fatal, a4 = e4.statusCode || 500, c4 = e4.statusMessage || "Server Error", u3 = (function(e5, t7 = {}) {
    const r5 = (function(e6, t8 = {}) {
      if (t8.xForwardedHost) {
        const t9 = e6.node.req.headers["x-forwarded-host"], r6 = (t9 || "").split(",").shift()?.trim();
        if (r6) return r6;
      }
      return e6.node.req.headers.host || "localhost";
    })(e5, t7), s5 = (function(e6, t8 = {}) {
      return false !== t8.xForwardedProto && "https" === e6.node.req.headers["x-forwarded-proto"] || e6.node.req.connection?.encrypted ? "https" : "http";
    })(e5, t7), a5 = (e5.node.req.originalUrl || e5.path).replace(/^[/\\]+/g, "/");
    return new URL(a5, `${s5}://${r5}`);
  })(t6, { xForwardedHost: true, xForwardedProto: true });
  if (404 === a4) {
    const e5 = "/";
    if (/^\/[^/]/.test(e5) && !u3.pathname.startsWith(e5)) {
      return { status: 302, statusText: "Found", headers: { location: `${e5}${u3.pathname.slice(1)}${u3.search}` }, body: "Redirecting..." };
    }
  }
  if (s4 && !r4?.silent) {
    const r5 = [e4.unhandled && "[unhandled]", e4.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${r5} [${t6.method}] ${u3}
`, e4);
  }
  const f3 = { "content-type": "application/json", "x-content-type-options": "nosniff", "x-frame-options": "DENY", "referrer-policy": "no-referrer", "content-security-policy": "script-src 'none'; frame-ancestors 'none';" };
  setResponseStatus(t6, a4, c4), 404 !== a4 && (function(e5, t7) {
    return e5.node.res.getHeader(t7);
  })(t6, "cache-control") || (f3["cache-control"] = "no-cache");
  return { status: a4, statusText: c4, headers: f3, body: { error: true, url: u3.href, statusCode: a4, statusMessage: c4, message: s4 ? "Server Error" : e4.message, data: s4 ? void 0 : e4.data } };
}
function useNitroApp() {
  return In2;
}
function defineRenderHandler(e4) {
  const t6 = useRuntimeConfig2();
  return Mr2(async (r4) => {
    const s4 = useNitroApp(), a4 = { event: r4, render: e4, response: void 0 };
    if (await s4.hooks.callHook("render:before", a4), !a4.response) {
      if (r4.path === `${t6.app.baseURL}favicon.ico`) return setResponseHeader(r4, "Content-Type", "image/x-icon"), send(r4, "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
      if (a4.response = await a4.render(r4), !a4.response) {
        const e5 = getResponseStatus(r4);
        return setResponseStatus(r4, 200 === e5 ? 500 : e5), send(r4, "No response returned from render handler: " + r4.path);
      }
    }
    return await s4.hooks.callHook("render:response", a4.response, a4), a4.response.headers && setResponseHeaders(r4, a4.response.headers), (a4.response.statusCode || a4.response.statusMessage) && setResponseStatus(r4, a4.response.statusCode, a4.response.statusMessage), a4.response.body;
  });
}
var e3, t5, r2, s3, inspect, a3, c2, u2, f2, h3, d2, g2, m2, _2, E2, R2, B, I2, S2, T2, x3, C2, _EventEmitter, EventEmitterAsyncResource, EventEmitterReferencingAsyncResource, on$1, once$1, addAbortListener, getEventListeners, getMaxListeners$1, $, FixedCircularBuffer, FixedQueue, ReadStream, WriteStream, P2, Process, L2, O2, _getEnv, U2, N2, M2, H, j2, W2, q2, F2, D2, z3, K2, Q2, G2, V, J2, Y2, X, Z2, ee2, te2, re2, ne2, oe2, se2, ie2, ae2, ce2, ue2, fe2, le2, he3, de2, pe2, ge3, ye3, me3, we3, be3, ve3, _e3, Ee3, Re3, Be3, Ae3, Ie3, Se3, Te3, xe3, ke3, Ce3, $e3, Pe3, Le3, Oe3, Ue3, Ne3, Me3, He3, je3, We3, qe3, Fe3, De3, ze3, Ke3, Qe3, Ge3, Ve3, Je3, Ye3, Xe3, Ze3, et3, tt3, rt3, nt3, ot3, st3, it3, at3, ct3, ut3, ft3, lt3, ht3, dt3, pt3, gt3, yt3, mt3, wt3, bt3, vt3, _t3, Et3, Rt3, Bt3, At3, It3, St3, Tt3, xt3, kt3, Ct3, $t3, Pt3, Lt3, Ot3, Ut3, Nt3, Mt3, Ht3, jt3, Wt3, qt3, Ft3, Dt3, zt3, Kt3, Qt3, Gt3, Vt2, Timeout, Immediate, Jt3, Yt3, Xt3, Zt3, er2, tr2, rr2, nr2, or2, sr2, ir2, ar2, cr2, ur2, fr2, lr2, hr2, dr2, pr2, gr2, yr2, mr2, wr2, br2, vr2, _r2, Er2, Rr, Br2, i3, Ar2, Ir2, Sr2, A2, y3, w2, Tr2, xr2, H3Error, kr2, Cr2, $r2, Pr2, Lr2, Or2, Ur2, Nr2, H3Event, Mr2, lazyEventHandler, Hr2, jr2, Wr2, Hookable, qr, FetchError, Fr2, Dr2, zr2, Kr2, Qr2, Gr2, Vr2, Jr2, Yr2, Xr, Zr2, en3, memory, tn3, normalizeKey2, rn3, nn3, on3, sn3, an3, k3, l2, cn3, cachedEventHandler, un2, fn2, ln3, hn2, dn3, pn3, gn2, yn2, mn2, wn2, getContext, bn2, vn2, _n2, En2, Rn2, Bn2, _lazy__U86uG, An2, In2;
var init_nitro = __esm({
  ".output/server/chunks/_/nitro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    Object.assign(/* @__PURE__ */ Object.create(null), { NONE: 0, DIRHANDLE: 1, DNSCHANNEL: 2, ELDHISTOGRAM: 3, FILEHANDLE: 4, FILEHANDLECLOSEREQ: 5, BLOBREADER: 6, FSEVENTWRAP: 7, FSREQCALLBACK: 8, FSREQPROMISE: 9, GETADDRINFOREQWRAP: 10, GETNAMEINFOREQWRAP: 11, HEAPSNAPSHOT: 12, HTTP2SESSION: 13, HTTP2STREAM: 14, HTTP2PING: 15, HTTP2SETTINGS: 16, HTTPINCOMINGMESSAGE: 17, HTTPCLIENTREQUEST: 18, JSSTREAM: 19, JSUDPWRAP: 20, MESSAGEPORT: 21, PIPECONNECTWRAP: 22, PIPESERVERWRAP: 23, PIPEWRAP: 24, PROCESSWRAP: 25, PROMISE: 26, QUERYWRAP: 27, QUIC_ENDPOINT: 28, QUIC_LOGSTREAM: 29, QUIC_PACKET: 30, QUIC_SESSION: 31, QUIC_STREAM: 32, QUIC_UDP: 33, SHUTDOWNWRAP: 34, SIGNALWRAP: 35, STATWATCHER: 36, STREAMPIPE: 37, TCPCONNECTWRAP: 38, TCPSERVERWRAP: 39, TCPWRAP: 40, TTYWRAP: 41, UDPSENDWRAP: 42, UDPWRAP: 43, SIGINTWATCHDOG: 44, WORKER: 45, WORKERHEAPSNAPSHOT: 46, WRITEWRAP: 47, ZLIB: 48, CHECKPRIMEREQUEST: 49, PBKDF2REQUEST: 50, KEYPAIRGENREQUEST: 51, KEYGENREQUEST: 52, KEYEXPORTREQUEST: 53, CIPHERREQUEST: 54, DERIVEBITSREQUEST: 55, HASHREQUEST: 56, RANDOMBYTESREQUEST: 57, RANDOMPRIMEREQUEST: 58, SCRYPTREQUEST: 59, SIGNREQUEST: 60, TLSWRAP: 61, VERIFYREQUEST: 62 });
    e3 = 100;
    t5 = globalThis.AsyncResource || class {
      __unenv__ = true;
      type;
      _asyncId;
      _triggerAsyncId;
      constructor(t6, r4 = 0) {
        this.type = t6, this._asyncId = -1 * e3++, this._triggerAsyncId = "number" == typeof r4 ? r4 : r4?.triggerAsyncId;
      }
      static bind(e4, r4, s4) {
        return new t5(r4 ?? "anonymous").bind(e4);
      }
      bind(e4, t6) {
        const binded = /* @__PURE__ */ __name((...r4) => this.runInAsyncScope(e4, t6, ...r4), "binded");
        return binded.asyncResource = this, binded;
      }
      runInAsyncScope(e4, t6, ...r4) {
        return e4.apply(t6, r4);
      }
      emitDestroy() {
        return this;
      }
      asyncId() {
        return this._asyncId;
      }
      triggerAsyncId() {
        return this._triggerAsyncId;
      }
    };
    r2 = 10;
    s3 = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
    }).prototype);
    inspect = /* @__PURE__ */ __name((e4, t6) => e4, "inspect");
    a3 = Error;
    c2 = Error;
    u2 = Error;
    f2 = Error;
    h3 = Error;
    d2 = /* @__PURE__ */ Symbol.for("nodejs.rejection");
    g2 = /* @__PURE__ */ Symbol.for("kCapture");
    m2 = /* @__PURE__ */ Symbol.for("events.errorMonitor");
    _2 = /* @__PURE__ */ Symbol.for("shapeMode");
    E2 = /* @__PURE__ */ Symbol.for("events.maxEventTargetListeners");
    R2 = /* @__PURE__ */ Symbol.for("kEnhanceStackBeforeInspector");
    B = /* @__PURE__ */ Symbol.for("nodejs.watermarkData");
    I2 = /* @__PURE__ */ Symbol.for("kEventEmitter");
    S2 = /* @__PURE__ */ Symbol.for("kAsyncResource");
    T2 = /* @__PURE__ */ Symbol.for("kFirstEventParam");
    x3 = /* @__PURE__ */ Symbol.for("kResistStopPropagation");
    C2 = /* @__PURE__ */ Symbol.for("events.maxEventTargetListenersWarned");
    _EventEmitter = class __EventEmitter {
      static {
        __name(this, "_EventEmitter");
      }
      _events = void 0;
      _eventsCount = 0;
      _maxListeners = r2;
      [g2] = false;
      [_2] = false;
      static captureRejectionSymbol = d2;
      static errorMonitor = m2;
      static kMaxEventTargetListeners = E2;
      static kMaxEventTargetListenersWarned = C2;
      static usingDomains = false;
      static get on() {
        return on$1;
      }
      static get once() {
        return once$1;
      }
      static get getEventListeners() {
        return getEventListeners;
      }
      static get getMaxListeners() {
        return getMaxListeners$1;
      }
      static get addAbortListener() {
        return addAbortListener;
      }
      static get EventEmitterAsyncResource() {
        return EventEmitterAsyncResource;
      }
      static get EventEmitter() {
        return __EventEmitter;
      }
      static setMaxListeners(e4 = r2, ...t6) {
        if (0 === t6.length) r2 = e4;
        else for (const r4 of t6) if (isEventTarget(r4)) r4[E2] = e4, r4[C2] = false;
        else {
          if ("function" != typeof r4.setMaxListeners) throw new u2("eventTargets", ["EventEmitter", "EventTarget"], r4);
          r4.setMaxListeners(e4);
        }
      }
      static listenerCount(e4, t6) {
        if ("function" == typeof e4.listenerCount) return e4.listenerCount(t6);
        __EventEmitter.prototype.listenerCount.call(e4, t6);
      }
      static init() {
        throw new Error("EventEmitter.init() is not implemented.");
      }
      static get captureRejections() {
        return this[g2];
      }
      static set captureRejections(e4) {
        this[g2] = e4;
      }
      static get defaultMaxListeners() {
        return r2;
      }
      static set defaultMaxListeners(e4) {
        r2 = e4;
      }
      constructor(e4) {
        void 0 === this._events || this._events === Object.getPrototypeOf(this)._events ? (this._events = { __proto__: null }, this._eventsCount = 0, this[_2] = false) : this[_2] = true, this._maxListeners = this._maxListeners || void 0, this[g2] = e4?.captureRejections ? Boolean(e4.captureRejections) : __EventEmitter.prototype[g2];
      }
      setMaxListeners(e4) {
        return this._maxListeners = e4, this;
      }
      getMaxListeners() {
        return _getMaxListeners(this);
      }
      emit(e4, ...t6) {
        let r4 = "error" === e4;
        const s4 = this._events;
        if (void 0 !== s4) r4 && void 0 !== s4[m2] && this.emit(m2, ...t6), r4 = r4 && void 0 === s4.error;
        else if (!r4) return false;
        if (r4) {
          let e5, r5;
          if (t6.length > 0 && (e5 = t6[0]), e5 instanceof Error) {
            try {
              const t7 = {};
              Error.captureStackTrace?.(t7, __EventEmitter.prototype.emit), Object.defineProperty(e5, R2, { __proto__: null, value: Function.prototype.bind(enhanceStackTrace, this, e5, t7), configurable: true });
            } catch {
            }
            throw e5;
          }
          try {
            r5 = inspect(e5);
          } catch {
            r5 = e5;
          }
          const s5 = new c2(r5);
          throw s5.context = e5, s5;
        }
        const a4 = s4[e4];
        if (void 0 === a4) return false;
        if ("function" == typeof a4) {
          const r5 = a4.apply(this, t6);
          null != r5 && addCatch(this, r5, e4, t6);
        } else {
          const r5 = a4.length, s5 = arrayClone(a4);
          for (let a5 = 0; a5 < r5; ++a5) {
            const r6 = s5[a5].apply(this, t6);
            null != r6 && addCatch(this, r6, e4, t6);
          }
        }
        return true;
      }
      addListener(e4, t6) {
        return _addListener(this, e4, t6, false), this;
      }
      on(e4, t6) {
        return this.addListener(e4, t6);
      }
      prependListener(e4, t6) {
        return _addListener(this, e4, t6, true), this;
      }
      once(e4, t6) {
        return this.on(e4, _onceWrap(this, e4, t6)), this;
      }
      prependOnceListener(e4, t6) {
        return this.prependListener(e4, _onceWrap(this, e4, t6)), this;
      }
      removeListener(e4, t6) {
        const r4 = this._events;
        if (void 0 === r4) return this;
        const s4 = r4[e4];
        if (void 0 === s4) return this;
        if (s4 === t6 || s4.listener === t6) this._eventsCount -= 1, this[_2] ? r4[e4] = void 0 : 0 === this._eventsCount ? this._events = { __proto__: null } : (delete r4[e4], r4.removeListener && this.emit("removeListener", e4, s4.listener || t6));
        else if ("function" != typeof s4) {
          let a4 = -1;
          for (let e5 = s4.length - 1; e5 >= 0; e5--) if (s4[e5] === t6 || s4[e5].listener === t6) {
            a4 = e5;
            break;
          }
          if (a4 < 0) return this;
          0 === a4 ? s4.shift() : (function(e5, t7) {
            for (; t7 + 1 < e5.length; t7++) e5[t7] = e5[t7 + 1];
            e5.pop();
          })(s4, a4), 1 === s4.length && (r4[e4] = s4[0]), void 0 !== r4.removeListener && this.emit("removeListener", e4, t6);
        }
        return this;
      }
      off(e4, t6) {
        return this.removeListener(e4, t6);
      }
      removeAllListeners(e4) {
        const t6 = this._events;
        if (void 0 === t6) return this;
        if (void 0 === t6.removeListener) return 0 === arguments.length ? (this._events = { __proto__: null }, this._eventsCount = 0) : void 0 !== t6[e4] && (0 === --this._eventsCount ? this._events = { __proto__: null } : delete t6[e4]), this[_2] = false, this;
        if (0 === arguments.length) {
          for (const e5 of Reflect.ownKeys(t6)) "removeListener" !== e5 && this.removeAllListeners(e5);
          return this.removeAllListeners("removeListener"), this._events = { __proto__: null }, this._eventsCount = 0, this[_2] = false, this;
        }
        const r4 = t6[e4];
        if ("function" == typeof r4) this.removeListener(e4, r4);
        else if (void 0 !== r4) for (let t7 = r4.length - 1; t7 >= 0; t7--) this.removeListener(e4, r4[t7]);
        return this;
      }
      listeners(e4) {
        return _listeners(this, e4, true);
      }
      rawListeners(e4) {
        return _listeners(this, e4, false);
      }
      eventNames() {
        return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
      }
      listenerCount(e4, t6) {
        const r4 = this._events;
        if (void 0 !== r4) {
          const s4 = r4[e4];
          if ("function" == typeof s4) return null != t6 ? t6 === s4 || t6 === s4.listener ? 1 : 0 : 1;
          if (void 0 !== s4) {
            if (null != t6) {
              let e5 = 0;
              for (let r5 = 0, a4 = s4.length; r5 < a4; r5++) s4[r5] !== t6 && s4[r5].listener !== t6 || e5++;
              return e5;
            }
            return s4.length;
          }
        }
        return 0;
      }
    };
    EventEmitterAsyncResource = class extends _EventEmitter {
      static {
        __name(this, "EventEmitterAsyncResource");
      }
      constructor(e4) {
        let t6;
        "string" == typeof e4 ? (t6 = e4, e4 = void 0) : t6 = e4?.name || new.target.name, super(e4), this[S2] = new EventEmitterReferencingAsyncResource(this, t6, e4);
      }
      emit(e4, ...t6) {
        if (void 0 === this[S2]) throw new a3("EventEmitterAsyncResource");
        const { asyncResource: r4 } = this;
        return Array.prototype.unshift(t6, super.emit, this, e4), Reflect.apply(r4.runInAsyncScope, r4, t6);
      }
      emitDestroy() {
        if (void 0 === this[S2]) throw new a3("EventEmitterAsyncResource");
        this.asyncResource.emitDestroy();
      }
      get asyncId() {
        if (void 0 === this[S2]) throw new a3("EventEmitterAsyncResource");
        return this.asyncResource.asyncId();
      }
      get triggerAsyncId() {
        if (void 0 === this[S2]) throw new a3("EventEmitterAsyncResource");
        return this.asyncResource.triggerAsyncId();
      }
      get asyncResource() {
        if (void 0 === this[S2]) throw new a3("EventEmitterAsyncResource");
        return this[S2];
      }
    };
    EventEmitterReferencingAsyncResource = class extends t5 {
      static {
        __name(this, "EventEmitterReferencingAsyncResource");
      }
      constructor(e4, t6, r4) {
        super(t6, r4), this[I2] = e4;
      }
      get eventEmitter() {
        if (void 0 === this[I2]) throw new a3("EventEmitterReferencingAsyncResource");
        return this[I2];
      }
    };
    on$1 = /* @__PURE__ */ __name(function(e4, t6, r4 = {}) {
      const a4 = r4.signal;
      if (a4?.aborted) throw new f2(void 0, { cause: a4?.reason });
      const c4 = r4.highWaterMark ?? r4.highWatermark ?? Number.MAX_SAFE_INTEGER, h4 = r4.lowWaterMark ?? r4.lowWatermark ?? 1, d3 = new FixedQueue(), g3 = new FixedQueue();
      let m3 = false, _3 = null, E3 = false, R3 = 0;
      const I3 = Object.setPrototypeOf({ next() {
        if (R3) {
          const t7 = d3.shift();
          return R3--, m3 && R3 < h4 && (e4.resume?.(), m3 = false), Promise.resolve(createIterResult(t7, false));
        }
        if (_3) {
          const e5 = Promise.reject(_3);
          return _3 = null, e5;
        }
        return E3 ? closeHandler() : new Promise(function(e5, t7) {
          g3.push({ resolve: e5, reject: t7 });
        });
      }, return: /* @__PURE__ */ __name(() => closeHandler(), "return"), throw(e5) {
        if (!(e5 && e5 instanceof Error)) throw new u2("EventEmitter.AsyncIterator", "Error", e5);
        errorHandler(e5);
      }, [Symbol.asyncIterator]() {
        return this;
      }, [B]: { get size() {
        return R3;
      }, get low() {
        return h4;
      }, get high() {
        return c4;
      }, get isPaused() {
        return m3;
      } } }, s3), { addEventListener: S3, removeAll: x4 } = /* @__PURE__ */ (function() {
        const e5 = [];
        return { addEventListener(t7, r5, s4, a5) {
          eventTargetAgnosticAddListener(t7, r5, s4, a5), Array.prototype.push(e5, [t7, r5, s4, a5]);
        }, removeAll() {
          for (; e5.length > 0; ) Reflect.apply(eventTargetAgnosticRemoveListener, void 0, e5.pop());
        } };
      })();
      S3(e4, t6, r4[T2] ? eventHandler : function(...e5) {
        return eventHandler(e5);
      }), "error" !== t6 && "function" == typeof e4.on && S3(e4, "error", errorHandler);
      const C3 = r4?.close;
      if (C3?.length) for (const t7 of C3) S3(e4, t7, closeHandler);
      const $2 = a4 ? addAbortListener(a4, function() {
        errorHandler(new f2(void 0, { cause: a4?.reason }));
      }) : null;
      return I3;
      function eventHandler(t7) {
        g3.isEmpty() ? (R3++, !m3 && R3 > c4 && (m3 = true, e4.pause?.()), d3.push(t7)) : g3.shift().resolve(createIterResult(t7, false));
      }
      __name(eventHandler, "eventHandler");
      function errorHandler(e5) {
        g3.isEmpty() ? _3 = e5 : g3.shift().reject(e5), closeHandler();
      }
      __name(errorHandler, "errorHandler");
      function closeHandler() {
        $2?.[Symbol.dispose](), x4(), E3 = true;
        const e5 = createIterResult(void 0, true);
        for (; !g3.isEmpty(); ) g3.shift().resolve(e5);
        return Promise.resolve(e5);
      }
      __name(closeHandler, "closeHandler");
    }, "on$1");
    once$1 = /* @__PURE__ */ __name(async function(e4, t6, r4 = {}) {
      const s4 = r4?.signal;
      if (s4?.aborted) throw new f2(void 0, { cause: s4?.reason });
      return new Promise((r5, a4) => {
        const errorListener = /* @__PURE__ */ __name((r6) => {
          "function" == typeof e4.removeListener && e4.removeListener(t6, resolver), null != s4 && eventTargetAgnosticRemoveListener(s4, "abort", abortListener), a4(r6);
        }, "errorListener"), resolver = /* @__PURE__ */ __name((...t7) => {
          "function" == typeof e4.removeListener && e4.removeListener("error", errorListener), null != s4 && eventTargetAgnosticRemoveListener(s4, "abort", abortListener), r5(t7);
        }, "resolver");
        function abortListener() {
          eventTargetAgnosticRemoveListener(e4, t6, resolver), eventTargetAgnosticRemoveListener(e4, "error", errorListener), a4(new f2(void 0, { cause: s4?.reason }));
        }
        __name(abortListener, "abortListener");
        eventTargetAgnosticAddListener(e4, t6, resolver, { __proto__: null, once: true, [x3]: true }), "error" !== t6 && "function" == typeof e4.once && e4.once("error", errorListener), null != s4 && eventTargetAgnosticAddListener(s4, "abort", abortListener, { __proto__: null, once: true, [x3]: true });
      });
    }, "once$1");
    addAbortListener = /* @__PURE__ */ __name(function(e4, t6) {
      if (void 0 === e4) throw new u2("signal", "AbortSignal", e4);
      let r4;
      return e4.aborted ? queueMicrotask(() => t6()) : (e4.addEventListener("abort", t6, { __proto__: null, once: true, [x3]: true }), r4 = /* @__PURE__ */ __name(() => {
        e4.removeEventListener("abort", t6);
      }, "r")), { __proto__: null, [Symbol.dispose]() {
        r4?.();
      } };
    }, "addAbortListener");
    getEventListeners = /* @__PURE__ */ __name(function(e4, t6) {
      if ("function" == typeof e4.listeners) return e4.listeners(t6);
      if (isEventTarget(e4)) {
        const r4 = e4[kEvents].get(t6), s4 = [];
        let a4 = r4?.next;
        for (; void 0 !== a4?.listener; ) {
          const e5 = a4.listener?.deref ? a4.listener.deref() : a4.listener;
          s4.push(e5), a4 = a4.next;
        }
        return s4;
      }
      throw new u2("emitter", ["EventEmitter", "EventTarget"], e4);
    }, "getEventListeners");
    getMaxListeners$1 = /* @__PURE__ */ __name(function(e4) {
      if ("function" == typeof e4?.getMaxListeners) return _getMaxListeners(e4);
      if (e4?.[E2]) return e4[E2];
      throw new u2("emitter", ["EventEmitter", "EventTarget"], e4);
    }, "getMaxListeners$1");
    $ = 2047;
    FixedCircularBuffer = class {
      static {
        __name(this, "FixedCircularBuffer");
      }
      bottom;
      top;
      list;
      next;
      constructor() {
        this.bottom = 0, this.top = 0, this.list = new Array(2048), this.next = null;
      }
      isEmpty() {
        return this.top === this.bottom;
      }
      isFull() {
        return (this.top + 1 & $) === this.bottom;
      }
      push(e4) {
        this.list[this.top] = e4, this.top = this.top + 1 & $;
      }
      shift() {
        const e4 = this.list[this.bottom];
        return void 0 === e4 ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & $, e4);
      }
    };
    FixedQueue = class {
      static {
        __name(this, "FixedQueue");
      }
      head;
      tail;
      constructor() {
        this.head = this.tail = new FixedCircularBuffer();
      }
      isEmpty() {
        return this.head.isEmpty();
      }
      push(e4) {
        this.head.isFull() && (this.head = this.head.next = new FixedCircularBuffer()), this.head.push(e4);
      }
      shift() {
        const e4 = this.tail, t6 = e4.shift();
        return e4.isEmpty() && null !== e4.next && (this.tail = e4.next, e4.next = null), t6;
      }
    };
    __name(isEventTarget, "isEventTarget");
    __name(addCatch, "addCatch");
    __name(emitUnhandledRejectionOrErr, "emitUnhandledRejectionOrErr");
    __name(_getMaxListeners, "_getMaxListeners");
    __name(enhanceStackTrace, "enhanceStackTrace");
    __name(_addListener, "_addListener");
    __name(onceWrapper, "onceWrapper");
    __name(_onceWrap, "_onceWrap");
    __name(_listeners, "_listeners");
    __name(arrayClone, "arrayClone");
    __name(createIterResult, "createIterResult");
    __name(eventTargetAgnosticRemoveListener, "eventTargetAgnosticRemoveListener");
    __name(eventTargetAgnosticAddListener, "eventTargetAgnosticAddListener");
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(e4) {
        this.fd = e4;
      }
      setRawMode(e4) {
        return this.isRaw = e4, this;
      }
    };
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(e4) {
        this.fd = e4;
      }
      clearLine(e4, t6) {
        return t6 && t6(), false;
      }
      clearScreenDown(e4) {
        return e4 && e4(), false;
      }
      cursorTo(e4, t6, r4) {
        return r4 && "function" == typeof r4 && r4(), false;
      }
      moveCursor(e4, t6, r4) {
        return r4 && r4(), false;
      }
      getColorDepth(e4) {
        return 1;
      }
      hasColors(e4, t6) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(e4, t6, r4) {
        e4 instanceof Uint8Array && (e4 = new TextDecoder().decode(e4));
        try {
          console.log(e4);
        } catch {
        }
        return r4 && "function" == typeof r4 && r4(), false;
      }
    };
    P2 = "22.14.0";
    Process = class _Process extends _EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(e4) {
        super(), this.env = e4.env, this.hrtime = e4.hrtime, this.nextTick = e4.nextTick;
        for (const e5 of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(_EventEmitter.prototype)]) {
          const t6 = this[e5];
          "function" == typeof t6 && (this[e5] = t6.bind(this));
        }
      }
      emitWarning(e4, t6, r4) {
        console.warn(`${r4 ? `[${r4}] ` : ""}${t6 ? `${t6}: ` : ""}${e4}`);
      }
      emit(...e4) {
        return super.emit(...e4);
      }
      listeners(e4) {
        return super.listeners(e4);
      }
      #e;
      #t;
      #r;
      get stdin() {
        return this.#e ??= new ReadStream(0);
      }
      get stdout() {
        return this.#t ??= new WriteStream(1);
      }
      get stderr() {
        return this.#r ??= new WriteStream(2);
      }
      #n = "/";
      chdir(e4) {
        this.#n = e4;
      }
      cwd() {
        return this.#n;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${P2}`;
      }
      get versions() {
        return { node: P2 };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      permission = { has: notImplemented("process.permission.has") };
      report = { directory: "", filename: "", signal: "SIGUSR2", compact: false, reportOnFatalError: false, reportOnSignal: false, reportOnUncaughtException: false, getReport: notImplemented("process.report.getReport"), writeReport: notImplemented("process.report.writeReport") };
      finalization = { register: notImplemented("process.finalization.register"), unregister: notImplemented("process.finalization.unregister"), registerBeforeExit: notImplemented("process.finalization.registerBeforeExit") };
      memoryUsage = Object.assign(() => ({ arrayBuffers: 0, rss: 0, external: 0, heapTotal: 0, heapUsed: 0 }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
    L2 = /* @__PURE__ */ Object.create(null);
    O2 = globalThis.process;
    _getEnv = /* @__PURE__ */ __name((e4) => globalThis.__env__ || O2?.env || (e4 ? L2 : globalThis), "_getEnv");
    U2 = new Proxy(L2, { get: /* @__PURE__ */ __name((e4, t6) => _getEnv()[t6] ?? L2[t6], "get"), has: /* @__PURE__ */ __name((e4, t6) => t6 in _getEnv() || t6 in L2, "has"), set: /* @__PURE__ */ __name((e4, t6, r4) => (_getEnv(true)[t6] = r4, true), "set"), deleteProperty: /* @__PURE__ */ __name((e4, t6) => (delete _getEnv(true)[t6], true), "deleteProperty"), ownKeys() {
      const e4 = _getEnv();
      return Object.keys(e4);
    }, getOwnPropertyDescriptor(e4, t6) {
      const r4 = _getEnv();
      if (t6 in r4) return { value: r4[t6], writable: true, enumerable: true, configurable: true };
    } });
    N2 = Object.assign(function(e4) {
      const t6 = Date.now(), r4 = Math.trunc(t6 / 1e3), s4 = t6 % 1e3 * 1e6;
      if (e4) {
        let t7 = r4 - e4[0], a4 = s4 - e4[0];
        return a4 < 0 && (t7 -= 1, a4 = 1e9 + a4), [t7, a4];
      }
      return [r4, s4];
    }, { bigint: /* @__PURE__ */ __name(function() {
      return BigInt(1e6 * Date.now());
    }, "bigint") });
    M2 = globalThis.queueMicrotask ? (e4, ...t6) => {
      globalThis.queueMicrotask(e4.bind(void 0, ...t6));
    } : createNextTickWithTimeout();
    __name(createNextTickWithTimeout, "createNextTickWithTimeout");
    H = new Process({ env: U2, hrtime: N2, nextTick: M2 });
    ({ abort: j2, addListener: W2, allowedNodeEnvironmentFlags: q2, hasUncaughtExceptionCaptureCallback: F2, setUncaughtExceptionCaptureCallback: D2, loadEnvFile: z3, sourceMapsEnabled: K2, arch: Q2, argv: G2, argv0: V, chdir: J2, config: Y2, connected: X, constrainedMemory: Z2, availableMemory: ee2, cpuUsage: te2, cwd: re2, debugPort: ne2, dlopen: oe2, disconnect: se2, emit: ie2, emitWarning: ae2, env: ce2, eventNames: ue2, execArgv: fe2, execPath: le2, exit: he3, finalization: de2, features: pe2, getBuiltinModule: ge3, getActiveResourcesInfo: ye3, getMaxListeners: me3, hrtime: we3, kill: be3, listeners: ve3, listenerCount: _e3, memoryUsage: Ee3, nextTick: Re3, on: Be3, off: Ae3, once: Ie3, pid: Se3, platform: Te3, ppid: xe3, prependListener: ke3, prependOnceListener: Ce3, rawListeners: $e3, release: Pe3, removeAllListeners: Le3, removeListener: Oe3, report: Ue3, resourceUsage: Ne3, setMaxListeners: Me3, setSourceMapsEnabled: He3, stderr: je3, stdin: We3, stdout: qe3, title: Fe3, umask: De3, uptime: ze3, version: Ke3, versions: Qe3, domain: Ge3, initgroups: Ve3, moduleLoadList: Je3, reallyExit: Ye3, openStdin: Xe3, assert: Ze3, binding: et3, send: tt3, exitCode: rt3, channel: nt3, getegid: ot3, geteuid: st3, getgid: it3, getgroups: at3, getuid: ct3, setegid: ut3, seteuid: ft3, setgid: lt3, setgroups: ht3, setuid: dt3, permission: pt3, mainModule: gt3, ref: yt3, unref: mt3, _events: wt3, _eventsCount: bt3, _exiting: vt3, _maxListeners: _t3, _debugEnd: Et3, _debugProcess: Rt3, _fatalException: Bt3, _getActiveHandles: At3, _getActiveRequests: It3, _kill: St3, _preload_modules: Tt3, _rawDebug: xt3, _startProfilerIdleNotifier: kt3, _stopProfilerIdleNotifier: Ct3, _tickCallback: $t3, _disconnect: Pt3, _handleQueue: Lt3, _pendingMessage: Ot3, _channel: Ut3, _send: Nt3, _linkedBinding: Mt3 } = H);
    Ht3 = [];
    jt3 = [];
    Wt3 = "undefined" == typeof Uint8Array ? Array : Uint8Array;
    qt3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (let e4 = 0, t6 = 64; e4 < t6; ++e4) Ht3[e4] = qt3[e4], jt3[qt3.charCodeAt(e4)] = e4;
    __name(toByteArray, "toByteArray");
    __name(tripletToBase64, "tripletToBase64");
    __name(encodeChunk, "encodeChunk");
    __name(fromByteArray, "fromByteArray");
    __name(read, "read");
    __name(write, "write");
    jt3["-".charCodeAt(0)] = 62, jt3["_".charCodeAt(0)] = 63;
    Ft3 = "function" == typeof Symbol && "function" == typeof Symbol.for ? /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom") : null;
    Dt3 = 2147483647;
    __name(createBuffer2, "createBuffer");
    __name(Buffer$1, "Buffer$1");
    __name(from, "from");
    __name(assertSize, "assertSize");
    __name(allocUnsafe, "allocUnsafe");
    __name(fromArrayLike, "fromArrayLike");
    __name(fromArrayBuffer, "fromArrayBuffer");
    __name(checked, "checked");
    __name(byteLength, "byteLength");
    __name(slowToString, "slowToString");
    __name(swap, "swap");
    __name(bidirectionalIndexOf, "bidirectionalIndexOf");
    __name(arrayIndexOf, "arrayIndexOf");
    __name(hexWrite, "hexWrite");
    __name(utf8Write, "utf8Write");
    __name(asciiWrite, "asciiWrite");
    __name(base64Write, "base64Write");
    __name(ucs2Write, "ucs2Write");
    __name(base64Slice, "base64Slice");
    __name(utf8Slice, "utf8Slice");
    Buffer$1.TYPED_ARRAY_SUPPORT = (function() {
      try {
        const e4 = new Uint8Array(1), t6 = { foo: /* @__PURE__ */ __name(function() {
          return 42;
        }, "foo") };
        return Object.setPrototypeOf(t6, Uint8Array.prototype), Object.setPrototypeOf(e4, t6), 42 === e4.foo();
      } catch {
        return false;
      }
    })(), Buffer$1.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This environment lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(Buffer$1.prototype, "parent", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      if (Buffer$1.isBuffer(this)) return this.buffer;
    }, "get") }), Object.defineProperty(Buffer$1.prototype, "offset", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      if (Buffer$1.isBuffer(this)) return this.byteOffset;
    }, "get") }), Buffer$1.poolSize = 8192, Buffer$1.from = function(e4, t6, r4) {
      return from(e4, t6, r4);
    }, Object.setPrototypeOf(Buffer$1.prototype, Uint8Array.prototype), Object.setPrototypeOf(Buffer$1, Uint8Array), Buffer$1.alloc = function(e4, t6, r4) {
      return (function(e5, t7, r5) {
        return assertSize(e5), e5 <= 0 ? createBuffer2(e5) : void 0 !== t7 ? "string" == typeof r5 ? createBuffer2(e5).fill(t7, r5) : createBuffer2(e5).fill(t7) : createBuffer2(e5);
      })(e4, t6, r4);
    }, Buffer$1.allocUnsafe = function(e4) {
      return allocUnsafe(e4);
    }, Buffer$1.allocUnsafeSlow = function(e4) {
      return allocUnsafe(e4);
    }, Buffer$1.isBuffer = function(e4) {
      return null != e4 && true === e4._isBuffer && e4 !== Buffer$1.prototype;
    }, Buffer$1.compare = function(e4, t6) {
      if (isInstance(e4, Uint8Array) && (e4 = Buffer$1.from(e4, e4.offset, e4.byteLength)), isInstance(t6, Uint8Array) && (t6 = Buffer$1.from(t6, t6.offset, t6.byteLength)), !Buffer$1.isBuffer(e4) || !Buffer$1.isBuffer(t6)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (e4 === t6) return 0;
      let r4 = e4.length, s4 = t6.length;
      for (let a4 = 0, c4 = Math.min(r4, s4); a4 < c4; ++a4) if (e4[a4] !== t6[a4]) {
        r4 = e4[a4], s4 = t6[a4];
        break;
      }
      return r4 < s4 ? -1 : s4 < r4 ? 1 : 0;
    }, Buffer$1.isEncoding = function(e4) {
      switch (String(e4).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, Buffer$1.concat = function(e4, t6) {
      if (!Array.isArray(e4)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === e4.length) return Buffer$1.alloc(0);
      let r4;
      if (void 0 === t6) for (t6 = 0, r4 = 0; r4 < e4.length; ++r4) t6 += e4[r4].length;
      const s4 = Buffer$1.allocUnsafe(t6);
      let a4 = 0;
      for (r4 = 0; r4 < e4.length; ++r4) {
        let t7 = e4[r4];
        if (isInstance(t7, Uint8Array)) a4 + t7.length > s4.length ? (Buffer$1.isBuffer(t7) || (t7 = Buffer$1.from(t7.buffer, t7.byteOffset, t7.byteLength)), t7.copy(s4, a4)) : Uint8Array.prototype.set.call(s4, t7, a4);
        else {
          if (!Buffer$1.isBuffer(t7)) throw new TypeError('"list" argument must be an Array of Buffers');
          t7.copy(s4, a4);
        }
        a4 += t7.length;
      }
      return s4;
    }, Buffer$1.byteLength = byteLength, Buffer$1.prototype._isBuffer = true, Buffer$1.prototype.swap16 = function() {
      const e4 = this.length;
      if (e4 % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let t6 = 0; t6 < e4; t6 += 2) swap(this, t6, t6 + 1);
      return this;
    }, Buffer$1.prototype.swap32 = function() {
      const e4 = this.length;
      if (e4 % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let t6 = 0; t6 < e4; t6 += 4) swap(this, t6, t6 + 3), swap(this, t6 + 1, t6 + 2);
      return this;
    }, Buffer$1.prototype.swap64 = function() {
      const e4 = this.length;
      if (e4 % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let t6 = 0; t6 < e4; t6 += 8) swap(this, t6, t6 + 7), swap(this, t6 + 1, t6 + 6), swap(this, t6 + 2, t6 + 5), swap(this, t6 + 3, t6 + 4);
      return this;
    }, Buffer$1.prototype.toString = function() {
      const e4 = this.length;
      return 0 === e4 ? "" : 0 === arguments.length ? utf8Slice(this, 0, e4) : Reflect.apply(slowToString, this, arguments);
    }, Buffer$1.prototype.toLocaleString = Buffer$1.prototype.toString, Buffer$1.prototype.equals = function(e4) {
      if (!Buffer$1.isBuffer(e4)) throw new TypeError("Argument must be a Buffer");
      return this === e4 || 0 === Buffer$1.compare(this, e4);
    }, Buffer$1.prototype.inspect = function() {
      let e4 = "";
      return e4 = this.toString("hex", 0, 50).replace(/(.{2})/g, "$1 ").trim(), this.length > 50 && (e4 += " ... "), "<Buffer " + e4 + ">";
    }, Ft3 && (Buffer$1.prototype[Ft3] = Buffer$1.prototype.inspect), Buffer$1.prototype.compare = function(e4, t6, r4, s4, a4) {
      if (isInstance(e4, Uint8Array) && (e4 = Buffer$1.from(e4, e4.offset, e4.byteLength)), !Buffer$1.isBuffer(e4)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e4);
      if (void 0 === t6 && (t6 = 0), void 0 === r4 && (r4 = e4 ? e4.length : 0), void 0 === s4 && (s4 = 0), void 0 === a4 && (a4 = this.length), t6 < 0 || r4 > e4.length || s4 < 0 || a4 > this.length) throw new RangeError("out of range index");
      if (s4 >= a4 && t6 >= r4) return 0;
      if (s4 >= a4) return -1;
      if (t6 >= r4) return 1;
      if (this === e4) return 0;
      let c4 = (a4 >>>= 0) - (s4 >>>= 0), u3 = (r4 >>>= 0) - (t6 >>>= 0);
      const f3 = Math.min(c4, u3), h4 = this.slice(s4, a4), d3 = e4.slice(t6, r4);
      for (let e5 = 0; e5 < f3; ++e5) if (h4[e5] !== d3[e5]) {
        c4 = h4[e5], u3 = d3[e5];
        break;
      }
      return c4 < u3 ? -1 : u3 < c4 ? 1 : 0;
    }, Buffer$1.prototype.includes = function(e4, t6, r4) {
      return -1 !== this.indexOf(e4, t6, r4);
    }, Buffer$1.prototype.indexOf = function(e4, t6, r4) {
      return bidirectionalIndexOf(this, e4, t6, r4, true);
    }, Buffer$1.prototype.lastIndexOf = function(e4, t6, r4) {
      return bidirectionalIndexOf(this, e4, t6, r4, false);
    }, Buffer$1.prototype.write = function(e4, t6, r4, s4) {
      if (void 0 === t6) s4 = "utf8", r4 = this.length, t6 = 0;
      else if (void 0 === r4 && "string" == typeof t6) s4 = t6, r4 = this.length, t6 = 0;
      else {
        if (!Number.isFinite(t6)) throw new TypeError("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        t6 >>>= 0, Number.isFinite(r4) ? (r4 >>>= 0, void 0 === s4 && (s4 = "utf8")) : (s4 = r4, r4 = void 0);
      }
      const a4 = this.length - t6;
      if ((void 0 === r4 || r4 > a4) && (r4 = a4), e4.length > 0 && (r4 < 0 || t6 < 0) || t6 > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      s4 || (s4 = "utf8");
      let c4 = false;
      for (; ; ) switch (s4) {
        case "hex":
          return hexWrite(this, e4, t6, r4);
        case "utf8":
        case "utf-8":
          return utf8Write(this, e4, t6, r4);
        case "ascii":
        case "latin1":
        case "binary":
          return asciiWrite(this, e4, t6, r4);
        case "base64":
          return base64Write(this, e4, t6, r4);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ucs2Write(this, e4, t6, r4);
        default:
          if (c4) throw new TypeError("Unknown encoding: " + s4);
          s4 = ("" + s4).toLowerCase(), c4 = true;
      }
    }, Buffer$1.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    zt3 = 4096;
    __name(asciiSlice, "asciiSlice");
    __name(latin1Slice, "latin1Slice");
    __name(hexSlice, "hexSlice");
    __name(utf16leSlice, "utf16leSlice");
    __name(checkOffset, "checkOffset");
    __name(checkInt, "checkInt");
    __name(wrtBigUInt64LE, "wrtBigUInt64LE");
    __name(wrtBigUInt64BE, "wrtBigUInt64BE");
    __name(checkIEEE754, "checkIEEE754");
    __name(writeFloat, "writeFloat");
    __name(writeDouble, "writeDouble");
    Buffer$1.prototype.slice = function(e4, t6) {
      const r4 = this.length;
      (e4 = Math.trunc(e4)) < 0 ? (e4 += r4) < 0 && (e4 = 0) : e4 > r4 && (e4 = r4), (t6 = void 0 === t6 ? r4 : Math.trunc(t6)) < 0 ? (t6 += r4) < 0 && (t6 = 0) : t6 > r4 && (t6 = r4), t6 < e4 && (t6 = e4);
      const s4 = this.subarray(e4, t6);
      return Object.setPrototypeOf(s4, Buffer$1.prototype), s4;
    }, Buffer$1.prototype.readUintLE = Buffer$1.prototype.readUIntLE = function(e4, t6, r4) {
      e4 >>>= 0, t6 >>>= 0, r4 || checkOffset(e4, t6, this.length);
      let s4 = this[e4], a4 = 1, c4 = 0;
      for (; ++c4 < t6 && (a4 *= 256); ) s4 += this[e4 + c4] * a4;
      return s4;
    }, Buffer$1.prototype.readUintBE = Buffer$1.prototype.readUIntBE = function(e4, t6, r4) {
      e4 >>>= 0, t6 >>>= 0, r4 || checkOffset(e4, t6, this.length);
      let s4 = this[e4 + --t6], a4 = 1;
      for (; t6 > 0 && (a4 *= 256); ) s4 += this[e4 + --t6] * a4;
      return s4;
    }, Buffer$1.prototype.readUint8 = Buffer$1.prototype.readUInt8 = function(e4, t6) {
      return e4 >>>= 0, t6 || checkOffset(e4, 1, this.length), this[e4];
    }, Buffer$1.prototype.readUint16LE = Buffer$1.prototype.readUInt16LE = function(e4, t6) {
      return e4 >>>= 0, t6 || checkOffset(e4, 2, this.length), this[e4] | this[e4 + 1] << 8;
    }, Buffer$1.prototype.readUint16BE = Buffer$1.prototype.readUInt16BE = function(e4, t6) {
      return e4 >>>= 0, t6 || checkOffset(e4, 2, this.length), this[e4] << 8 | this[e4 + 1];
    }, Buffer$1.prototype.readUint32LE = Buffer$1.prototype.readUInt32LE = function(e4, t6) {
      return e4 >>>= 0, t6 || checkOffset(e4, 4, this.length), (this[e4] | this[e4 + 1] << 8 | this[e4 + 2] << 16) + 16777216 * this[e4 + 3];
    }, Buffer$1.prototype.readUint32BE = Buffer$1.prototype.readUInt32BE = function(e4, t6) {
      return e4 >>>= 0, t6 || checkOffset(e4, 4, this.length), 16777216 * this[e4] + (this[e4 + 1] << 16 | this[e4 + 2] << 8 | this[e4 + 3]);
    }, Buffer$1.prototype.readBigUInt64LE = defineBigIntMethod(function(e4) {
      validateNumber(e4 >>>= 0, "offset");
      const t6 = this[e4], r4 = this[e4 + 7];
      void 0 !== t6 && void 0 !== r4 || boundsError(e4, this.length - 8);
      const s4 = t6 + 256 * this[++e4] + 65536 * this[++e4] + this[++e4] * 2 ** 24, a4 = this[++e4] + 256 * this[++e4] + 65536 * this[++e4] + r4 * 2 ** 24;
      return BigInt(s4) + (BigInt(a4) << BigInt(32));
    }), Buffer$1.prototype.readBigUInt64BE = defineBigIntMethod(function(e4) {
      validateNumber(e4 >>>= 0, "offset");
      const t6 = this[e4], r4 = this[e4 + 7];
      void 0 !== t6 && void 0 !== r4 || boundsError(e4, this.length - 8);
      const s4 = t6 * 2 ** 24 + 65536 * this[++e4] + 256 * this[++e4] + this[++e4], a4 = this[++e4] * 2 ** 24 + 65536 * this[++e4] + 256 * this[++e4] + r4;
      return (BigInt(s4) << BigInt(32)) + BigInt(a4);
    }), Buffer$1.prototype.readIntLE = function(e4, t6, r4) {
      e4 >>>= 0, t6 >>>= 0, r4 || checkOffset(e4, t6, this.length);
      let s4 = this[e4], a4 = 1, c4 = 0;
      for (; ++c4 < t6 && (a4 *= 256); ) s4 += this[e4 + c4] * a4;
      return a4 *= 128, s4 >= a4 && (s4 -= Math.pow(2, 8 * t6)), s4;
    }, Buffer$1.prototype.readIntBE = function(e4, t6, r4) {
      e4 >>>= 0, t6 >>>= 0, r4 || checkOffset(e4, t6, this.length);
      let s4 = t6, a4 = 1, c4 = this[e4 + --s4];
      for (; s4 > 0 && (a4 *= 256); ) c4 += this[e4 + --s4] * a4;
      return a4 *= 128, c4 >= a4 && (c4 -= Math.pow(2, 8 * t6)), c4;
    }, Buffer$1.prototype.readInt8 = function(e4, t6) {
      return e4 >>>= 0, t6 || checkOffset(e4, 1, this.length), 128 & this[e4] ? -1 * (255 - this[e4] + 1) : this[e4];
    }, Buffer$1.prototype.readInt16LE = function(e4, t6) {
      e4 >>>= 0, t6 || checkOffset(e4, 2, this.length);
      const r4 = this[e4] | this[e4 + 1] << 8;
      return 32768 & r4 ? 4294901760 | r4 : r4;
    }, Buffer$1.prototype.readInt16BE = function(e4, t6) {
      e4 >>>= 0, t6 || checkOffset(e4, 2, this.length);
      const r4 = this[e4 + 1] | this[e4] << 8;
      return 32768 & r4 ? 4294901760 | r4 : r4;
    }, Buffer$1.prototype.readInt32LE = function(e4, t6) {
      return e4 >>>= 0, t6 || checkOffset(e4, 4, this.length), this[e4] | this[e4 + 1] << 8 | this[e4 + 2] << 16 | this[e4 + 3] << 24;
    }, Buffer$1.prototype.readInt32BE = function(e4, t6) {
      return e4 >>>= 0, t6 || checkOffset(e4, 4, this.length), this[e4] << 24 | this[e4 + 1] << 16 | this[e4 + 2] << 8 | this[e4 + 3];
    }, Buffer$1.prototype.readBigInt64LE = defineBigIntMethod(function(e4) {
      validateNumber(e4 >>>= 0, "offset");
      const t6 = this[e4], r4 = this[e4 + 7];
      void 0 !== t6 && void 0 !== r4 || boundsError(e4, this.length - 8);
      const s4 = this[e4 + 4] + 256 * this[e4 + 5] + 65536 * this[e4 + 6] + (r4 << 24);
      return (BigInt(s4) << BigInt(32)) + BigInt(t6 + 256 * this[++e4] + 65536 * this[++e4] + this[++e4] * 2 ** 24);
    }), Buffer$1.prototype.readBigInt64BE = defineBigIntMethod(function(e4) {
      validateNumber(e4 >>>= 0, "offset");
      const t6 = this[e4], r4 = this[e4 + 7];
      void 0 !== t6 && void 0 !== r4 || boundsError(e4, this.length - 8);
      const s4 = (t6 << 24) + 65536 * this[++e4] + 256 * this[++e4] + this[++e4];
      return (BigInt(s4) << BigInt(32)) + BigInt(this[++e4] * 2 ** 24 + 65536 * this[++e4] + 256 * this[++e4] + r4);
    }), Buffer$1.prototype.readFloatLE = function(e4, t6) {
      return e4 >>>= 0, t6 || checkOffset(e4, 4, this.length), read(this, e4, true, 23, 4);
    }, Buffer$1.prototype.readFloatBE = function(e4, t6) {
      return e4 >>>= 0, t6 || checkOffset(e4, 4, this.length), read(this, e4, false, 23, 4);
    }, Buffer$1.prototype.readDoubleLE = function(e4, t6) {
      return e4 >>>= 0, t6 || checkOffset(e4, 8, this.length), read(this, e4, true, 52, 8);
    }, Buffer$1.prototype.readDoubleBE = function(e4, t6) {
      return e4 >>>= 0, t6 || checkOffset(e4, 8, this.length), read(this, e4, false, 52, 8);
    }, Buffer$1.prototype.writeUintLE = Buffer$1.prototype.writeUIntLE = function(e4, t6, r4, s4) {
      if (e4 = +e4, t6 >>>= 0, r4 >>>= 0, !s4) {
        checkInt(this, e4, t6, r4, Math.pow(2, 8 * r4) - 1, 0);
      }
      let a4 = 1, c4 = 0;
      for (this[t6] = 255 & e4; ++c4 < r4 && (a4 *= 256); ) this[t6 + c4] = e4 / a4 & 255;
      return t6 + r4;
    }, Buffer$1.prototype.writeUintBE = Buffer$1.prototype.writeUIntBE = function(e4, t6, r4, s4) {
      if (e4 = +e4, t6 >>>= 0, r4 >>>= 0, !s4) {
        checkInt(this, e4, t6, r4, Math.pow(2, 8 * r4) - 1, 0);
      }
      let a4 = r4 - 1, c4 = 1;
      for (this[t6 + a4] = 255 & e4; --a4 >= 0 && (c4 *= 256); ) this[t6 + a4] = e4 / c4 & 255;
      return t6 + r4;
    }, Buffer$1.prototype.writeUint8 = Buffer$1.prototype.writeUInt8 = function(e4, t6, r4) {
      return e4 = +e4, t6 >>>= 0, r4 || checkInt(this, e4, t6, 1, 255, 0), this[t6] = 255 & e4, t6 + 1;
    }, Buffer$1.prototype.writeUint16LE = Buffer$1.prototype.writeUInt16LE = function(e4, t6, r4) {
      return e4 = +e4, t6 >>>= 0, r4 || checkInt(this, e4, t6, 2, 65535, 0), this[t6] = 255 & e4, this[t6 + 1] = e4 >>> 8, t6 + 2;
    }, Buffer$1.prototype.writeUint16BE = Buffer$1.prototype.writeUInt16BE = function(e4, t6, r4) {
      return e4 = +e4, t6 >>>= 0, r4 || checkInt(this, e4, t6, 2, 65535, 0), this[t6] = e4 >>> 8, this[t6 + 1] = 255 & e4, t6 + 2;
    }, Buffer$1.prototype.writeUint32LE = Buffer$1.prototype.writeUInt32LE = function(e4, t6, r4) {
      return e4 = +e4, t6 >>>= 0, r4 || checkInt(this, e4, t6, 4, 4294967295, 0), this[t6 + 3] = e4 >>> 24, this[t6 + 2] = e4 >>> 16, this[t6 + 1] = e4 >>> 8, this[t6] = 255 & e4, t6 + 4;
    }, Buffer$1.prototype.writeUint32BE = Buffer$1.prototype.writeUInt32BE = function(e4, t6, r4) {
      return e4 = +e4, t6 >>>= 0, r4 || checkInt(this, e4, t6, 4, 4294967295, 0), this[t6] = e4 >>> 24, this[t6 + 1] = e4 >>> 16, this[t6 + 2] = e4 >>> 8, this[t6 + 3] = 255 & e4, t6 + 4;
    }, Buffer$1.prototype.writeBigUInt64LE = defineBigIntMethod(function(e4, t6 = 0) {
      return wrtBigUInt64LE(this, e4, t6, BigInt(0), BigInt("0xffffffffffffffff"));
    }), Buffer$1.prototype.writeBigUInt64BE = defineBigIntMethod(function(e4, t6 = 0) {
      return wrtBigUInt64BE(this, e4, t6, BigInt(0), BigInt("0xffffffffffffffff"));
    }), Buffer$1.prototype.writeIntLE = function(e4, t6, r4, s4) {
      if (e4 = +e4, t6 >>>= 0, !s4) {
        const s5 = Math.pow(2, 8 * r4 - 1);
        checkInt(this, e4, t6, r4, s5 - 1, -s5);
      }
      let a4 = 0, c4 = 1, u3 = 0;
      for (this[t6] = 255 & e4; ++a4 < r4 && (c4 *= 256); ) e4 < 0 && 0 === u3 && 0 !== this[t6 + a4 - 1] && (u3 = 1), this[t6 + a4] = Math.trunc(e4 / c4) - u3 & 255;
      return t6 + r4;
    }, Buffer$1.prototype.writeIntBE = function(e4, t6, r4, s4) {
      if (e4 = +e4, t6 >>>= 0, !s4) {
        const s5 = Math.pow(2, 8 * r4 - 1);
        checkInt(this, e4, t6, r4, s5 - 1, -s5);
      }
      let a4 = r4 - 1, c4 = 1, u3 = 0;
      for (this[t6 + a4] = 255 & e4; --a4 >= 0 && (c4 *= 256); ) e4 < 0 && 0 === u3 && 0 !== this[t6 + a4 + 1] && (u3 = 1), this[t6 + a4] = Math.trunc(e4 / c4) - u3 & 255;
      return t6 + r4;
    }, Buffer$1.prototype.writeInt8 = function(e4, t6, r4) {
      return e4 = +e4, t6 >>>= 0, r4 || checkInt(this, e4, t6, 1, 127, -128), e4 < 0 && (e4 = 255 + e4 + 1), this[t6] = 255 & e4, t6 + 1;
    }, Buffer$1.prototype.writeInt16LE = function(e4, t6, r4) {
      return e4 = +e4, t6 >>>= 0, r4 || checkInt(this, e4, t6, 2, 32767, -32768), this[t6] = 255 & e4, this[t6 + 1] = e4 >>> 8, t6 + 2;
    }, Buffer$1.prototype.writeInt16BE = function(e4, t6, r4) {
      return e4 = +e4, t6 >>>= 0, r4 || checkInt(this, e4, t6, 2, 32767, -32768), this[t6] = e4 >>> 8, this[t6 + 1] = 255 & e4, t6 + 2;
    }, Buffer$1.prototype.writeInt32LE = function(e4, t6, r4) {
      return e4 = +e4, t6 >>>= 0, r4 || checkInt(this, e4, t6, 4, 2147483647, -2147483648), this[t6] = 255 & e4, this[t6 + 1] = e4 >>> 8, this[t6 + 2] = e4 >>> 16, this[t6 + 3] = e4 >>> 24, t6 + 4;
    }, Buffer$1.prototype.writeInt32BE = function(e4, t6, r4) {
      return e4 = +e4, t6 >>>= 0, r4 || checkInt(this, e4, t6, 4, 2147483647, -2147483648), e4 < 0 && (e4 = 4294967295 + e4 + 1), this[t6] = e4 >>> 24, this[t6 + 1] = e4 >>> 16, this[t6 + 2] = e4 >>> 8, this[t6 + 3] = 255 & e4, t6 + 4;
    }, Buffer$1.prototype.writeBigInt64LE = defineBigIntMethod(function(e4, t6 = 0) {
      return wrtBigUInt64LE(this, e4, t6, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), Buffer$1.prototype.writeBigInt64BE = defineBigIntMethod(function(e4, t6 = 0) {
      return wrtBigUInt64BE(this, e4, t6, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), Buffer$1.prototype.writeFloatLE = function(e4, t6, r4) {
      return writeFloat(this, e4, t6, true, r4);
    }, Buffer$1.prototype.writeFloatBE = function(e4, t6, r4) {
      return writeFloat(this, e4, t6, false, r4);
    }, Buffer$1.prototype.writeDoubleLE = function(e4, t6, r4) {
      return writeDouble(this, e4, t6, true, r4);
    }, Buffer$1.prototype.writeDoubleBE = function(e4, t6, r4) {
      return writeDouble(this, e4, t6, false, r4);
    }, Buffer$1.prototype.copy = function(e4, t6, r4, s4) {
      if (!Buffer$1.isBuffer(e4)) throw new TypeError("argument should be a Buffer");
      if (r4 || (r4 = 0), s4 || 0 === s4 || (s4 = this.length), t6 >= e4.length && (t6 = e4.length), t6 || (t6 = 0), s4 > 0 && s4 < r4 && (s4 = r4), s4 === r4) return 0;
      if (0 === e4.length || 0 === this.length) return 0;
      if (t6 < 0) throw new RangeError("targetStart out of bounds");
      if (r4 < 0 || r4 >= this.length) throw new RangeError("Index out of range");
      if (s4 < 0) throw new RangeError("sourceEnd out of bounds");
      s4 > this.length && (s4 = this.length), e4.length - t6 < s4 - r4 && (s4 = e4.length - t6 + r4);
      const a4 = s4 - r4;
      return this === e4 && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t6, r4, s4) : Uint8Array.prototype.set.call(e4, this.subarray(r4, s4), t6), a4;
    }, Buffer$1.prototype.fill = function(e4, t6, r4, s4) {
      if ("string" == typeof e4) {
        if ("string" == typeof t6 ? (s4 = t6, t6 = 0, r4 = this.length) : "string" == typeof r4 && (s4 = r4, r4 = this.length), void 0 !== s4 && "string" != typeof s4) throw new TypeError("encoding must be a string");
        if ("string" == typeof s4 && !Buffer$1.isEncoding(s4)) throw new TypeError("Unknown encoding: " + s4);
        if (1 === e4.length) {
          const t7 = e4.charCodeAt(0);
          ("utf8" === s4 && t7 < 128 || "latin1" === s4) && (e4 = t7);
        }
      } else "number" == typeof e4 ? e4 &= 255 : "boolean" == typeof e4 && (e4 = Number(e4));
      if (t6 < 0 || this.length < t6 || this.length < r4) throw new RangeError("Out of range index");
      if (r4 <= t6) return this;
      let a4;
      if (t6 >>>= 0, r4 = void 0 === r4 ? this.length : r4 >>> 0, e4 || (e4 = 0), "number" == typeof e4) for (a4 = t6; a4 < r4; ++a4) this[a4] = e4;
      else {
        const c4 = Buffer$1.isBuffer(e4) ? e4 : Buffer$1.from(e4, s4), u3 = c4.length;
        if (0 === u3) throw new TypeError('The value "' + e4 + '" is invalid for argument "value"');
        for (a4 = 0; a4 < r4 - t6; ++a4) this[a4 + t6] = c4[a4 % u3];
      }
      return this;
    };
    Kt3 = {};
    __name(E$1, "E$1");
    __name(addNumericalSeparator, "addNumericalSeparator");
    __name(checkIntBI, "checkIntBI");
    __name(validateNumber, "validateNumber");
    __name(boundsError, "boundsError");
    E$1("ERR_BUFFER_OUT_OF_BOUNDS", function(e4) {
      return e4 ? `${e4} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError), E$1("ERR_INVALID_ARG_TYPE", function(e4, t6) {
      return `The "${e4}" argument must be of type number. Received type ${typeof t6}`;
    }, TypeError), E$1("ERR_OUT_OF_RANGE", function(e4, t6, r4) {
      let s4 = `The value of "${e4}" is out of range.`, a4 = r4;
      return Number.isInteger(r4) && Math.abs(r4) > 2 ** 32 ? a4 = addNumericalSeparator(String(r4)) : "bigint" == typeof r4 && (a4 = String(r4), (r4 > BigInt(2) ** BigInt(32) || r4 < -(BigInt(2) ** BigInt(32))) && (a4 = addNumericalSeparator(a4)), a4 += "n"), s4 += ` It must be ${t6}. Received ${a4}`, s4;
    }, RangeError);
    Qt3 = /[^\w+/-]/g;
    __name(utf8ToBytes, "utf8ToBytes");
    __name(base64ToBytes, "base64ToBytes");
    __name(blitBuffer, "blitBuffer");
    __name(isInstance, "isInstance");
    __name(numberIsNaN, "numberIsNaN");
    Gt3 = (function() {
      const e4 = "0123456789abcdef", t6 = Array.from({ length: 256 });
      for (let r4 = 0; r4 < 16; ++r4) {
        const s4 = 16 * r4;
        for (let a4 = 0; a4 < 16; ++a4) t6[s4 + a4] = e4[r4] + e4[a4];
      }
      return t6;
    })();
    __name(defineBigIntMethod, "defineBigIntMethod");
    __name(BufferBigIntNotDefined, "BufferBigIntNotDefined");
    Vt2 = globalThis.Buffer || Buffer$1;
    globalThis.btoa.bind(globalThis), globalThis.atob.bind(globalThis);
    Object.assign(() => {
    }, { __unenv__: true });
    Timeout = class {
      static {
        __name(this, "Timeout");
      }
      constructor(e4, t6) {
        "function" == typeof e4 && e4(...t6);
      }
      close() {
        throw createNotImplementedError("node.timers.timeout.close");
      }
      _onTimeout(...e4) {
        throw createNotImplementedError("node.timers.timeout._onTimeout");
      }
      ref() {
        return this;
      }
      unref() {
        return this;
      }
      hasRef() {
        return false;
      }
      refresh() {
        return this;
      }
      [Symbol.dispose]() {
      }
      [Symbol.toPrimitive]() {
        return 0;
      }
    };
    __name(setTimeoutFallback, "setTimeoutFallback");
    setTimeoutFallback.__promisify__ = function(e4, t6, r4) {
      return new Promise((e5) => {
        e5(t6);
      });
    };
    Immediate = class {
      static {
        __name(this, "Immediate");
      }
      _onImmediate;
      _timeout;
      constructor(e4, t6) {
        this._onImmediate = e4, "setTimeout" in globalThis ? this._timeout = setTimeout(e4, 0, ...t6) : e4(...t6);
      }
      ref() {
        return this._timeout?.ref(), this;
      }
      unref() {
        return this._timeout?.unref(), this;
      }
      hasRef() {
        return this._timeout?.hasRef() ?? false;
      }
      [Symbol.dispose]() {
        "clearTimeout" in globalThis && clearTimeout(this._timeout);
      }
    };
    __name(setImmediateFallback, "setImmediateFallback");
    __name(setIntervalFallback, "setIntervalFallback");
    setImmediateFallback.__promisify__ = function(e4) {
      return new Promise((t6) => {
        t6(e4);
      });
    }, setIntervalFallback.__promisify__ = async function* (e4, t6) {
      yield t6;
    };
    Jt3 = globalThis.clearImmediate?.bind(globalThis) || function(e4) {
      e4?.[Symbol.dispose]();
    };
    globalThis.clearInterval?.bind(globalThis), globalThis.clearTimeout?.bind(globalThis);
    Yt3 = globalThis.setImmediate?.bind(globalThis) || setImmediateFallback;
    globalThis.setTimeout?.bind(globalThis), globalThis.setInterval?.bind(globalThis);
    Xt3 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    Zt3 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    er2 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    __name(jsonParseTransform, "jsonParseTransform");
    __name(destr, "destr");
    tr2 = /#/g;
    rr2 = /&/g;
    nr2 = /\//g;
    or2 = /=/g;
    sr2 = /\?/g;
    ir2 = /\+/g;
    ar2 = /%5e/gi;
    cr2 = /%60/gi;
    ur2 = /%7c/gi;
    fr2 = /%20/gi;
    lr2 = /%2f/gi;
    hr2 = /%252f/gi;
    __name(encode, "encode");
    __name(encodeQueryValue, "encodeQueryValue");
    __name(encodeQueryKey, "encodeQueryKey");
    __name(encodePath, "encodePath");
    __name(decode, "decode");
    __name(decodePath, "decodePath");
    __name(decodeQueryKey, "decodeQueryKey");
    __name(decodeQueryValue, "decodeQueryValue");
    __name(parseQuery, "parseQuery");
    __name(stringifyQuery, "stringifyQuery");
    dr2 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
    pr2 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
    gr2 = /^([/\\]\s*){2,}[^/\\]/;
    yr2 = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
    mr2 = /\/$|\/\?|\/#/;
    wr2 = /^\.?\//;
    __name(hasProtocol, "hasProtocol");
    __name(isScriptProtocol, "isScriptProtocol");
    __name(hasTrailingSlash, "hasTrailingSlash");
    __name(withoutTrailingSlash, "withoutTrailingSlash");
    __name(withTrailingSlash, "withTrailingSlash");
    __name(withLeadingSlash, "withLeadingSlash");
    __name(withoutBase, "withoutBase");
    __name(withQuery, "withQuery");
    __name(getQuery$1, "getQuery$1");
    __name(isEmptyURL, "isEmptyURL");
    __name(joinURL, "joinURL");
    __name(joinRelativeURL, "joinRelativeURL");
    __name(isEqual, "isEqual");
    br2 = /* @__PURE__ */ Symbol.for("ufo:protocolRelative");
    __name(parseURL, "parseURL");
    __name(parsePath, "parsePath");
    __name(stringifyParsedURL, "stringifyParsedURL");
    vr2 = 0;
    _r2 = 1;
    Er2 = 2;
    __name(createRouter$1, "createRouter$1");
    __name(insert, "insert");
    __name(createRadixNode, "createRadixNode");
    __name(getNodeType, "getNodeType");
    __name(toRouteMatcher, "toRouteMatcher");
    __name(_matchRoutes, "_matchRoutes");
    __name(_sortRoutesMap, "_sortRoutesMap");
    __name(_routerNodeToTable, "_routerNodeToTable");
    __name(isPlainObject2, "isPlainObject");
    __name(_defu, "_defu");
    __name(createDefu, "createDefu");
    Rr = createDefu();
    Br2 = createDefu((e4, t6, r4) => {
      if (void 0 !== e4[t6] && "function" == typeof r4) return e4[t6] = r4(e4[t6]), true;
    });
    __name(o4, "o");
    i3 = class _i extends _EventEmitter {
      static {
        __name(this, "i");
      }
      __unenv__ = {};
      readableEncoding = null;
      readableEnded = true;
      readableFlowing = false;
      readableHighWaterMark = 0;
      readableLength = 0;
      readableObjectMode = false;
      readableAborted = false;
      readableDidRead = false;
      closed = false;
      errored = null;
      readable = false;
      destroyed = false;
      static from(e4, t6) {
        return new _i(t6);
      }
      constructor(e4) {
        super();
      }
      _read(e4) {
      }
      read(e4) {
      }
      setEncoding(e4) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      isPaused() {
        return true;
      }
      unpipe(e4) {
        return this;
      }
      unshift(e4, t6) {
      }
      wrap(e4) {
        return this;
      }
      push(e4, t6) {
        return false;
      }
      _destroy(e4, t6) {
        this.removeAllListeners();
      }
      destroy(e4) {
        return this.destroyed = true, this._destroy(e4), this;
      }
      pipe(e4, t6) {
        return {};
      }
      compose(e4, t6) {
        throw new Error("Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return this.destroy(), Promise.resolve();
      }
      async *[Symbol.asyncIterator]() {
        throw o4("Readable.asyncIterator");
      }
      iterator(e4) {
        throw o4("Readable.iterator");
      }
      map(e4, t6) {
        throw o4("Readable.map");
      }
      filter(e4, t6) {
        throw o4("Readable.filter");
      }
      forEach(e4, t6) {
        throw o4("Readable.forEach");
      }
      reduce(e4, t6, r4) {
        throw o4("Readable.reduce");
      }
      find(e4, t6) {
        throw o4("Readable.find");
      }
      findIndex(e4, t6) {
        throw o4("Readable.findIndex");
      }
      some(e4, t6) {
        throw o4("Readable.some");
      }
      toArray(e4) {
        throw o4("Readable.toArray");
      }
      every(e4, t6) {
        throw o4("Readable.every");
      }
      flatMap(e4, t6) {
        throw o4("Readable.flatMap");
      }
      drop(e4, t6) {
        throw o4("Readable.drop");
      }
      take(e4, t6) {
        throw o4("Readable.take");
      }
      asIndexedPairs(e4) {
        throw o4("Readable.asIndexedPairs");
      }
    };
    Ar2 = class extends _EventEmitter {
      static {
        __name(this, "Ar");
      }
      __unenv__ = {};
      writable = true;
      writableEnded = false;
      writableFinished = false;
      writableHighWaterMark = 0;
      writableLength = 0;
      writableObjectMode = false;
      writableCorked = 0;
      closed = false;
      errored = null;
      writableNeedDrain = false;
      writableAborted = false;
      destroyed = false;
      _data;
      _encoding = "utf8";
      constructor(e4) {
        super();
      }
      pipe(e4, t6) {
        return {};
      }
      _write(e4, t6, r4) {
        if (this.writableEnded) r4 && r4();
        else {
          if (void 0 === this._data) this._data = e4;
          else {
            const r5 = "string" == typeof this._data ? Vt2.from(this._data, this._encoding || t6 || "utf8") : this._data, s4 = "string" == typeof e4 ? Vt2.from(e4, t6 || this._encoding || "utf8") : e4;
            this._data = Vt2.concat([r5, s4]);
          }
          this._encoding = t6, r4 && r4();
        }
      }
      _writev(e4, t6) {
      }
      _destroy(e4, t6) {
      }
      _final(e4) {
      }
      write(e4, t6, r4) {
        const s4 = "string" == typeof t6 ? this._encoding : "utf8", a4 = "function" == typeof t6 ? t6 : "function" == typeof r4 ? r4 : void 0;
        return this._write(e4, s4, a4), true;
      }
      setDefaultEncoding(e4) {
        return this;
      }
      end(e4, t6, r4) {
        const s4 = "function" == typeof e4 ? e4 : "function" == typeof t6 ? t6 : "function" == typeof r4 ? r4 : void 0;
        if (this.writableEnded) return s4 && s4(), this;
        const a4 = e4 === s4 ? void 0 : e4;
        if (a4) {
          const e5 = t6 === s4 ? void 0 : t6;
          this.write(a4, e5, s4);
        }
        return this.writableEnded = true, this.writableFinished = true, this.emit("close"), this.emit("finish"), this;
      }
      cork() {
      }
      uncork() {
      }
      destroy(e4) {
        return this.destroyed = true, delete this._data, this.removeAllListeners(), this;
      }
      compose(e4, t6) {
        throw new Error("Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return Promise.resolve();
      }
    };
    Ir2 = class {
      static {
        __name(this, "Ir");
      }
      allowHalfOpen = true;
      _destroy;
      constructor(e4 = new i3(), t6 = new Ar2()) {
        Object.assign(this, e4), Object.assign(this, t6), this._destroy = /* @__PURE__ */ (function(...e5) {
          return function(...t7) {
            for (const r4 of e5) r4(...t7);
          };
        })(e4._destroy, t6._destroy);
      }
    };
    Sr2 = (Object.assign(Ir2.prototype, i3.prototype), Object.assign(Ir2.prototype, Ar2.prototype), Ir2);
    A2 = class extends Sr2 {
      static {
        __name(this, "A");
      }
      __unenv__ = {};
      bufferSize = 0;
      bytesRead = 0;
      bytesWritten = 0;
      connecting = false;
      destroyed = false;
      pending = false;
      localAddress = "";
      localPort = 0;
      remoteAddress = "";
      remoteFamily = "";
      remotePort = 0;
      autoSelectFamilyAttemptedAddresses = [];
      readyState = "readOnly";
      constructor(e4) {
        super();
      }
      write(e4, t6, r4) {
        return false;
      }
      connect(e4, t6, r4) {
        return this;
      }
      end(e4, t6, r4) {
        return this;
      }
      setEncoding(e4) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      setTimeout(e4, t6) {
        return this;
      }
      setNoDelay(e4) {
        return this;
      }
      setKeepAlive(e4, t6) {
        return this;
      }
      address() {
        return {};
      }
      unref() {
        return this;
      }
      ref() {
        return this;
      }
      destroySoon() {
        this.destroy();
      }
      resetAndDestroy() {
        const e4 = new Error("ERR_SOCKET_CLOSED");
        return e4.code = "ERR_SOCKET_CLOSED", this.destroy(e4), this;
      }
    };
    y3 = class extends i3 {
      static {
        __name(this, "y");
      }
      aborted = false;
      httpVersion = "1.1";
      httpVersionMajor = 1;
      httpVersionMinor = 1;
      complete = true;
      connection;
      socket;
      headers = {};
      trailers = {};
      method = "GET";
      url = "/";
      statusCode = 200;
      statusMessage = "";
      closed = false;
      errored = null;
      readable = false;
      constructor(e4) {
        super(), this.socket = this.connection = e4 || new A2();
      }
      get rawHeaders() {
        const e4 = this.headers, t6 = [];
        for (const r4 in e4) if (Array.isArray(e4[r4])) for (const s4 of e4[r4]) t6.push(r4, s4);
        else t6.push(r4, e4[r4]);
        return t6;
      }
      get rawTrailers() {
        return [];
      }
      setTimeout(e4, t6) {
        return this;
      }
      get headersDistinct() {
        return p3(this.headers);
      }
      get trailersDistinct() {
        return p3(this.trailers);
      }
    };
    __name(p3, "p");
    w2 = class extends Ar2 {
      static {
        __name(this, "w");
      }
      statusCode = 200;
      statusMessage = "";
      upgrading = false;
      chunkedEncoding = false;
      shouldKeepAlive = false;
      useChunkedEncodingByDefault = false;
      sendDate = false;
      finished = false;
      headersSent = false;
      strictContentLength = false;
      connection = null;
      socket = null;
      req;
      _headers = {};
      constructor(e4) {
        super(), this.req = e4;
      }
      assignSocket(e4) {
        e4._httpMessage = this, this.socket = e4, this.connection = e4, this.emit("socket", e4), this._flush();
      }
      _flush() {
        this.flushHeaders();
      }
      detachSocket(e4) {
      }
      writeContinue(e4) {
      }
      writeHead(e4, t6, r4) {
        e4 && (this.statusCode = e4), "string" == typeof t6 && (this.statusMessage = t6, t6 = void 0);
        const s4 = r4 || t6;
        if (s4 && !Array.isArray(s4)) for (const e5 in s4) this.setHeader(e5, s4[e5]);
        return this.headersSent = true, this;
      }
      writeProcessing() {
      }
      setTimeout(e4, t6) {
        return this;
      }
      appendHeader(e4, t6) {
        e4 = e4.toLowerCase();
        const r4 = this._headers[e4], s4 = [...Array.isArray(r4) ? r4 : [r4], ...Array.isArray(t6) ? t6 : [t6]].filter(Boolean);
        return this._headers[e4] = s4.length > 1 ? s4 : s4[0], this;
      }
      setHeader(e4, t6) {
        return this._headers[e4.toLowerCase()] = t6, this;
      }
      setHeaders(e4) {
        for (const [t6, r4] of Object.entries(e4)) this.setHeader(t6, r4);
        return this;
      }
      getHeader(e4) {
        return this._headers[e4.toLowerCase()];
      }
      getHeaders() {
        return this._headers;
      }
      getHeaderNames() {
        return Object.keys(this._headers);
      }
      hasHeader(e4) {
        return e4.toLowerCase() in this._headers;
      }
      removeHeader(e4) {
        delete this._headers[e4.toLowerCase()];
      }
      addTrailers(e4) {
      }
      flushHeaders() {
      }
      writeEarlyHints(e4, t6) {
        "function" == typeof t6 && t6();
      }
    };
    Tr2 = (() => {
      const n3 = /* @__PURE__ */ __name(function() {
      }, "n");
      return n3.prototype = /* @__PURE__ */ Object.create(null), n3;
    })();
    __name(v2, "v");
    xr2 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    __name(b3, "b");
    __name(hasProp2, "hasProp");
    H3Error = class extends Error {
      static {
        __name(this, "H3Error");
      }
      static __h3_error__ = true;
      statusCode = 500;
      fatal = false;
      unhandled = false;
      statusMessage;
      data;
      cause;
      constructor(e4, t6 = {}) {
        super(e4, t6), t6.cause && !this.cause && (this.cause = t6.cause);
      }
      toJSON() {
        const e4 = { message: this.message, statusCode: sanitizeStatusCode(this.statusCode, 500) };
        return this.statusMessage && (e4.statusMessage = sanitizeStatusMessage(this.statusMessage)), void 0 !== this.data && (e4.data = this.data), e4;
      }
    };
    __name(createError, "createError");
    __name(isError, "isError");
    __name(getQuery, "getQuery");
    __name(getRequestHeaders, "getRequestHeaders");
    kr2 = /* @__PURE__ */ Symbol.for("h3RawBody");
    Cr2 = ["PATCH", "POST", "PUT", "DELETE"];
    __name(readRawBody, "readRawBody");
    __name(handleCacheHeaders, "handleCacheHeaders");
    $r2 = { html: "text/html", json: "application/json" };
    Pr2 = /[^\u0009\u0020-\u007E]/g;
    __name(sanitizeStatusMessage, "sanitizeStatusMessage");
    __name(sanitizeStatusCode, "sanitizeStatusCode");
    __name(splitCookiesString, "splitCookiesString");
    Lr2 = void 0 === Yt3 ? (e4) => e4() : Yt3;
    __name(send, "send");
    __name(setResponseStatus, "setResponseStatus");
    __name(getResponseStatus, "getResponseStatus");
    __name(getResponseStatusText, "getResponseStatusText");
    __name(setResponseHeaders, "setResponseHeaders");
    Or2 = setResponseHeaders;
    __name(setResponseHeader, "setResponseHeader");
    __name(appendResponseHeader, "appendResponseHeader");
    __name(sendStream, "sendStream");
    __name(sendWebResponse, "sendWebResponse");
    Ur2 = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
    Nr2 = /* @__PURE__ */ new Set(["transfer-encoding", "accept-encoding", "connection", "keep-alive", "upgrade", "expect", "host", "accept"]);
    __name(proxyRequest, "proxyRequest");
    __name(getProxyRequestHeaders, "getProxyRequestHeaders");
    __name(fetchWithEvent, "fetchWithEvent");
    __name(_getFetch, "_getFetch");
    __name(rewriteCookieProperty, "rewriteCookieProperty");
    H3Event = class {
      static {
        __name(this, "H3Event");
      }
      __is_event__ = true;
      node;
      web;
      context = {};
      _method;
      _path;
      _headers;
      _requestBody;
      _handled = false;
      _onBeforeResponseCalled;
      _onAfterResponseCalled;
      constructor(e4, t6) {
        this.node = { req: e4, res: t6 };
      }
      get method() {
        return this._method || (this._method = (this.node.req.method || "GET").toUpperCase()), this._method;
      }
      get path() {
        return this._path || this.node.req.url || "/";
      }
      get headers() {
        return this._headers || (this._headers = (function(e4) {
          const t6 = new Headers();
          for (const [r4, s4] of Object.entries(e4)) if (Array.isArray(s4)) for (const e5 of s4) t6.append(r4, e5);
          else s4 && t6.set(r4, s4);
          return t6;
        })(this.node.req.headers)), this._headers;
      }
      get handled() {
        return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
      }
      respondWith(e4) {
        return Promise.resolve(e4).then((e5) => sendWebResponse(this, e5));
      }
      toString() {
        return `[${this.method}] ${this.path}`;
      }
      toJSON() {
        return this.toString();
      }
      get req() {
        return this.node.req;
      }
      get res() {
        return this.node.res;
      }
    };
    __name(isEvent, "isEvent");
    __name(createEvent, "createEvent");
    __name(defineEventHandler, "defineEventHandler");
    __name(_normalizeArray, "_normalizeArray");
    Mr2 = defineEventHandler;
    __name(toEventHandler, "toEventHandler");
    lazyEventHandler = /* @__PURE__ */ __name(function(e4) {
      let t6, r4;
      const resolveHandler = /* @__PURE__ */ __name(() => r4 ? Promise.resolve(r4) : (t6 || (t6 = Promise.resolve(e4()).then((e5) => {
        const t7 = e5.default || e5;
        if ("function" != typeof t7) throw new TypeError("Invalid lazy handler result. It should be a function:", t7);
        return r4 = { handler: toEventHandler(e5.default || e5) }, r4;
      })), t6), "resolveHandler"), s4 = Mr2((e5) => r4 ? r4.handler(e5) : resolveHandler().then((t7) => t7.handler(e5)));
      return s4.__resolve__ = resolveHandler, s4;
    }, "lazyEventHandler");
    __name(createApp2, "createApp");
    __name(use, "use");
    __name(normalizeLayer, "normalizeLayer");
    __name(handleHandlerResponse, "handleHandlerResponse");
    Hr2 = ["connect", "delete", "get", "head", "options", "post", "put", "trace", "patch"];
    __name(toNodeListener, "toNodeListener");
    __name(flatHooks2, "flatHooks");
    jr2 = { run: /* @__PURE__ */ __name((e4) => e4(), "run") };
    Wr2 = void 0 !== console.createTask ? console.createTask : () => jr2;
    __name(serialTaskCaller2, "serialTaskCaller");
    __name(parallelTaskCaller2, "parallelTaskCaller");
    __name(callEachWith2, "callEachWith");
    Hookable = class {
      static {
        __name(this, "Hookable");
      }
      constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
      }
      hook(e4, t6, r4 = {}) {
        if (!e4 || "function" != typeof t6) return () => {
        };
        const s4 = e4;
        let a4;
        for (; this._deprecatedHooks[e4]; ) a4 = this._deprecatedHooks[e4], e4 = a4.to;
        if (a4 && !r4.allowDeprecated) {
          let e5 = a4.message;
          e5 || (e5 = `${s4} hook has been deprecated` + (a4.to ? `, please use ${a4.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e5) || (console.warn(e5), this._deprecatedMessages.add(e5));
        }
        if (!t6.name) try {
          Object.defineProperty(t6, "name", { get: /* @__PURE__ */ __name(() => "_" + e4.replace(/\W+/g, "_") + "_hook_cb", "get"), configurable: true });
        } catch {
        }
        return this._hooks[e4] = this._hooks[e4] || [], this._hooks[e4].push(t6), () => {
          t6 && (this.removeHook(e4, t6), t6 = void 0);
        };
      }
      hookOnce(e4, t6) {
        let r4, _function = /* @__PURE__ */ __name((...e5) => ("function" == typeof r4 && r4(), r4 = void 0, _function = void 0, t6(...e5)), "_function");
        return r4 = this.hook(e4, _function), r4;
      }
      removeHook(e4, t6) {
        if (this._hooks[e4]) {
          const r4 = this._hooks[e4].indexOf(t6);
          -1 !== r4 && this._hooks[e4].splice(r4, 1), 0 === this._hooks[e4].length && delete this._hooks[e4];
        }
      }
      deprecateHook(e4, t6) {
        this._deprecatedHooks[e4] = "string" == typeof t6 ? { to: t6 } : t6;
        const r4 = this._hooks[e4] || [];
        delete this._hooks[e4];
        for (const t7 of r4) this.hook(e4, t7);
      }
      deprecateHooks(e4) {
        Object.assign(this._deprecatedHooks, e4);
        for (const t6 in e4) this.deprecateHook(t6, e4[t6]);
      }
      addHooks(e4) {
        const t6 = flatHooks2(e4), r4 = Object.keys(t6).map((e5) => this.hook(e5, t6[e5]));
        return () => {
          for (const e5 of r4.splice(0, r4.length)) e5();
        };
      }
      removeHooks(e4) {
        const t6 = flatHooks2(e4);
        for (const e5 in t6) this.removeHook(e5, t6[e5]);
      }
      removeAllHooks() {
        for (const e4 in this._hooks) delete this._hooks[e4];
      }
      callHook(e4, ...t6) {
        return t6.unshift(e4), this.callHookWith(serialTaskCaller2, e4, ...t6);
      }
      callHookParallel(e4, ...t6) {
        return t6.unshift(e4), this.callHookWith(parallelTaskCaller2, e4, ...t6);
      }
      callHookWith(e4, t6, ...r4) {
        const s4 = this._before || this._after ? { name: t6, args: r4, context: {} } : void 0;
        this._before && callEachWith2(this._before, s4);
        const a4 = e4(t6 in this._hooks ? [...this._hooks[t6]] : [], r4);
        return a4 instanceof Promise ? a4.finally(() => {
          this._after && s4 && callEachWith2(this._after, s4);
        }) : (this._after && s4 && callEachWith2(this._after, s4), a4);
      }
      beforeEach(e4) {
        return this._before = this._before || [], this._before.push(e4), () => {
          if (void 0 !== this._before) {
            const t6 = this._before.indexOf(e4);
            -1 !== t6 && this._before.splice(t6, 1);
          }
        };
      }
      afterEach(e4) {
        return this._after = this._after || [], this._after.push(e4), () => {
          if (void 0 !== this._after) {
            const t6 = this._after.indexOf(e4);
            -1 !== t6 && this._after.splice(t6, 1);
          }
        };
      }
    };
    qr = globalThis;
    FetchError = class extends Error {
      static {
        __name(this, "FetchError");
      }
      constructor(e4, t6) {
        super(e4, t6), this.name = "FetchError", t6?.cause && !this.cause && (this.cause = t6.cause);
      }
    };
    Fr2 = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
    __name(isPayloadMethod, "isPayloadMethod");
    Dr2 = /* @__PURE__ */ new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
    zr2 = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
    __name(resolveFetchOptions, "resolveFetchOptions");
    __name(callHooks2, "callHooks");
    Kr2 = /* @__PURE__ */ new Set([408, 409, 425, 429, 500, 502, 503, 504]);
    Qr2 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    __name(createFetch, "createFetch");
    Gr2 = (function() {
      if ("undefined" != typeof globalThis) return globalThis;
      if ("undefined" != typeof self) return self;
      if (void 0 !== qr) return qr;
      throw new Error("unable to locate global object");
    })();
    Vr2 = Gr2.fetch ? (...e4) => Gr2.fetch(...e4) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!"));
    Jr2 = Gr2.Headers;
    Yr2 = Gr2.AbortController;
    Xr = createFetch({ fetch: Vr2, Headers: Jr2, AbortController: Yr2 });
    __name(asyncCall, "asyncCall");
    __name(stringify2, "stringify");
    Zr2 = "base64:";
    __name(serializeRaw, "serializeRaw");
    __name(deserializeRaw, "deserializeRaw");
    en3 = ["has", "hasItem", "get", "getItem", "getItemRaw", "set", "setItem", "setItemRaw", "del", "remove", "removeItem", "getMeta", "setMeta", "removeMeta", "getKeys", "clear", "mount", "unmount"];
    __name(normalizeKey$1, "normalizeKey$1");
    __name(joinKeys, "joinKeys");
    __name(normalizeBaseKey, "normalizeBaseKey");
    memory = /* @__PURE__ */ __name(() => {
      const e4 = /* @__PURE__ */ new Map();
      return { name: "memory", getInstance: /* @__PURE__ */ __name(() => e4, "getInstance"), hasItem: /* @__PURE__ */ __name((t6) => e4.has(t6), "hasItem"), getItem: /* @__PURE__ */ __name((t6) => e4.get(t6) ?? null, "getItem"), getItemRaw: /* @__PURE__ */ __name((t6) => e4.get(t6) ?? null, "getItemRaw"), setItem(t6, r4) {
        e4.set(t6, r4);
      }, setItemRaw(t6, r4) {
        e4.set(t6, r4);
      }, removeItem(t6) {
        e4.delete(t6);
      }, getKeys: /* @__PURE__ */ __name(() => [...e4.keys()], "getKeys"), clear() {
        e4.clear();
      }, dispose() {
        e4.clear();
      } };
    }, "memory");
    __name(watch2, "watch");
    __name(dispose, "dispose");
    tn3 = {};
    normalizeKey2 = /* @__PURE__ */ __name(function(e4) {
      return e4 && e4.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
    }, "normalizeKey");
    rn3 = { getKeys: /* @__PURE__ */ __name(() => Promise.resolve(Object.keys(tn3)), "getKeys"), hasItem: /* @__PURE__ */ __name((e4) => (e4 = normalizeKey2(e4), Promise.resolve(e4 in tn3)), "hasItem"), getItem: /* @__PURE__ */ __name((e4) => (e4 = normalizeKey2(e4), Promise.resolve(tn3[e4] ? tn3[e4].import() : null)), "getItem"), getMeta: /* @__PURE__ */ __name((e4) => (e4 = normalizeKey2(e4), Promise.resolve(tn3[e4] ? tn3[e4].meta : {})), "getMeta") };
    nn3 = (function(e4 = {}) {
      const t6 = { mounts: { "": e4.driver || memory() }, mountpoints: [""], watching: false, watchListeners: [], unwatch: {} }, getMount = /* @__PURE__ */ __name((e5) => {
        for (const r5 of t6.mountpoints) if (e5.startsWith(r5)) return { base: r5, relativeKey: e5.slice(r5.length), driver: t6.mounts[r5] };
        return { base: "", relativeKey: e5, driver: t6.mounts[""] };
      }, "getMount"), getMounts = /* @__PURE__ */ __name((e5, r5) => t6.mountpoints.filter((t7) => t7.startsWith(e5) || r5 && e5.startsWith(t7)).map((r6) => ({ relativeBase: e5.length > r6.length ? e5.slice(r6.length) : void 0, mountpoint: r6, driver: t6.mounts[r6] })), "getMounts"), onChange = /* @__PURE__ */ __name((e5, r5) => {
        if (t6.watching) {
          r5 = normalizeKey$1(r5);
          for (const s4 of t6.watchListeners) s4(e5, r5);
        }
      }, "onChange"), stopWatch = /* @__PURE__ */ __name(async () => {
        if (t6.watching) {
          for (const e5 in t6.unwatch) await t6.unwatch[e5]();
          t6.unwatch = {}, t6.watching = false;
        }
      }, "stopWatch"), runBatch = /* @__PURE__ */ __name((e5, t7, r5) => {
        const s4 = /* @__PURE__ */ new Map(), getBatch = /* @__PURE__ */ __name((e6) => {
          let t8 = s4.get(e6.base);
          return t8 || (t8 = { driver: e6.driver, base: e6.base, items: [] }, s4.set(e6.base, t8)), t8;
        }, "getBatch");
        for (const r6 of e5) {
          const e6 = "string" == typeof r6, s5 = normalizeKey$1(e6 ? r6 : r6.key), a4 = e6 ? void 0 : r6.value, c4 = e6 || !r6.options ? t7 : { ...t7, ...r6.options }, u3 = getMount(s5);
          getBatch(u3).items.push({ key: s5, value: a4, relativeKey: u3.relativeKey, options: c4 });
        }
        return Promise.all([...s4.values()].map((e6) => r5(e6))).then((e6) => e6.flat());
      }, "runBatch"), r4 = { hasItem(e5, t7 = {}) {
        e5 = normalizeKey$1(e5);
        const { relativeKey: r5, driver: s4 } = getMount(e5);
        return asyncCall(s4.hasItem, r5, t7);
      }, getItem(e5, t7 = {}) {
        e5 = normalizeKey$1(e5);
        const { relativeKey: r5, driver: s4 } = getMount(e5);
        return asyncCall(s4.getItem, r5, t7).then((e6) => destr(e6));
      }, getItems: /* @__PURE__ */ __name((e5, t7 = {}) => runBatch(e5, t7, (e6) => e6.driver.getItems ? asyncCall(e6.driver.getItems, e6.items.map((e7) => ({ key: e7.relativeKey, options: e7.options })), t7).then((t8) => t8.map((t9) => ({ key: joinKeys(e6.base, t9.key), value: destr(t9.value) }))) : Promise.all(e6.items.map((t8) => asyncCall(e6.driver.getItem, t8.relativeKey, t8.options).then((e7) => ({ key: t8.key, value: destr(e7) }))))), "getItems"), getItemRaw(e5, t7 = {}) {
        e5 = normalizeKey$1(e5);
        const { relativeKey: r5, driver: s4 } = getMount(e5);
        return s4.getItemRaw ? asyncCall(s4.getItemRaw, r5, t7) : asyncCall(s4.getItem, r5, t7).then((e6) => deserializeRaw(e6));
      }, async setItem(e5, t7, s4 = {}) {
        if (void 0 === t7) return r4.removeItem(e5);
        e5 = normalizeKey$1(e5);
        const { relativeKey: a4, driver: c4 } = getMount(e5);
        c4.setItem && (await asyncCall(c4.setItem, a4, stringify2(t7), s4), c4.watch || onChange("update", e5));
      }, async setItems(e5, t7) {
        await runBatch(e5, t7, async (e6) => {
          if (e6.driver.setItems) return asyncCall(e6.driver.setItems, e6.items.map((e7) => ({ key: e7.relativeKey, value: stringify2(e7.value), options: e7.options })), t7);
          e6.driver.setItem && await Promise.all(e6.items.map((t8) => asyncCall(e6.driver.setItem, t8.relativeKey, stringify2(t8.value), t8.options)));
        });
      }, async setItemRaw(e5, t7, s4 = {}) {
        if (void 0 === t7) return r4.removeItem(e5, s4);
        e5 = normalizeKey$1(e5);
        const { relativeKey: a4, driver: c4 } = getMount(e5);
        if (c4.setItemRaw) await asyncCall(c4.setItemRaw, a4, t7, s4);
        else {
          if (!c4.setItem) return;
          await asyncCall(c4.setItem, a4, serializeRaw(t7), s4);
        }
        c4.watch || onChange("update", e5);
      }, async removeItem(e5, t7 = {}) {
        "boolean" == typeof t7 && (t7 = { removeMeta: t7 }), e5 = normalizeKey$1(e5);
        const { relativeKey: r5, driver: s4 } = getMount(e5);
        s4.removeItem && (await asyncCall(s4.removeItem, r5, t7), (t7.removeMeta || t7.removeMata) && await asyncCall(s4.removeItem, r5 + "$", t7), s4.watch || onChange("remove", e5));
      }, async getMeta(e5, t7 = {}) {
        "boolean" == typeof t7 && (t7 = { nativeOnly: t7 }), e5 = normalizeKey$1(e5);
        const { relativeKey: r5, driver: s4 } = getMount(e5), a4 = /* @__PURE__ */ Object.create(null);
        if (s4.getMeta && Object.assign(a4, await asyncCall(s4.getMeta, r5, t7)), !t7.nativeOnly) {
          const e6 = await asyncCall(s4.getItem, r5 + "$", t7).then((e7) => destr(e7));
          e6 && "object" == typeof e6 && ("string" == typeof e6.atime && (e6.atime = new Date(e6.atime)), "string" == typeof e6.mtime && (e6.mtime = new Date(e6.mtime)), Object.assign(a4, e6));
        }
        return a4;
      }, setMeta(e5, t7, r5 = {}) {
        return this.setItem(e5 + "$", t7, r5);
      }, removeMeta(e5, t7 = {}) {
        return this.removeItem(e5 + "$", t7);
      }, async getKeys(e5, t7 = {}) {
        e5 = normalizeBaseKey(e5);
        const r5 = getMounts(e5, true);
        let s4 = [];
        const a4 = [];
        let c4 = true;
        for (const e6 of r5) {
          e6.driver.flags?.maxDepth || (c4 = false);
          const r6 = await asyncCall(e6.driver.getKeys, e6.relativeBase, t7);
          for (const t8 of r6) {
            const r7 = e6.mountpoint + normalizeKey$1(t8);
            s4.some((e7) => r7.startsWith(e7)) || a4.push(r7);
          }
          s4 = [e6.mountpoint, ...s4.filter((t8) => !t8.startsWith(e6.mountpoint))];
        }
        const u3 = void 0 !== t7.maxDepth && !c4;
        return a4.filter((r6) => (!u3 || (function(e6, t8) {
          if (void 0 === t8) return true;
          let r7 = 0, s5 = e6.indexOf(":");
          for (; s5 > -1; ) r7++, s5 = e6.indexOf(":", s5 + 1);
          return r7 <= t8;
        })(r6, t7.maxDepth)) && (function(e6, t8) {
          return t8 ? e6.startsWith(t8) && "$" !== e6[e6.length - 1] : "$" !== e6[e6.length - 1];
        })(r6, e5));
      }, async clear(e5, t7 = {}) {
        e5 = normalizeBaseKey(e5), await Promise.all(getMounts(e5, false).map(async (e6) => {
          if (e6.driver.clear) return asyncCall(e6.driver.clear, e6.relativeBase, t7);
          if (e6.driver.removeItem) {
            const r5 = await e6.driver.getKeys(e6.relativeBase || "", t7);
            return Promise.all(r5.map((r6) => e6.driver.removeItem(r6, t7)));
          }
        }));
      }, async dispose() {
        await Promise.all(Object.values(t6.mounts).map((e5) => dispose(e5)));
      }, watch: /* @__PURE__ */ __name(async (e5) => (await (async () => {
        if (!t6.watching) {
          t6.watching = true;
          for (const e6 in t6.mounts) t6.unwatch[e6] = await watch2(t6.mounts[e6], onChange, e6);
        }
      })(), t6.watchListeners.push(e5), async () => {
        t6.watchListeners = t6.watchListeners.filter((t7) => t7 !== e5), 0 === t6.watchListeners.length && await stopWatch();
      }), "watch"), async unwatch() {
        t6.watchListeners = [], await stopWatch();
      }, mount(e5, s4) {
        if ((e5 = normalizeBaseKey(e5)) && t6.mounts[e5]) throw new Error(`already mounted at ${e5}`);
        return e5 && (t6.mountpoints.push(e5), t6.mountpoints.sort((e6, t7) => t7.length - e6.length)), t6.mounts[e5] = s4, t6.watching && Promise.resolve(watch2(s4, onChange, e5)).then((r5) => {
          t6.unwatch[e5] = r5;
        }).catch(console.error), r4;
      }, async unmount(e5, r5 = true) {
        (e5 = normalizeBaseKey(e5)) && t6.mounts[e5] && (t6.watching && e5 in t6.unwatch && (t6.unwatch[e5]?.(), delete t6.unwatch[e5]), r5 && await dispose(t6.mounts[e5]), t6.mountpoints = t6.mountpoints.filter((t7) => t7 !== e5), delete t6.mounts[e5]);
      }, getMount(e5 = "") {
        e5 = normalizeKey$1(e5) + ":";
        const t7 = getMount(e5);
        return { driver: t7.driver, base: t7.base };
      }, getMounts(e5 = "", t7 = {}) {
        e5 = normalizeKey$1(e5);
        return getMounts(e5, t7.parents).map((e6) => ({ driver: e6.driver, base: e6.mountpoint }));
      }, keys: /* @__PURE__ */ __name((e5, t7 = {}) => r4.getKeys(e5, t7), "keys"), get: /* @__PURE__ */ __name((e5, t7 = {}) => r4.getItem(e5, t7), "get"), set: /* @__PURE__ */ __name((e5, t7, s4 = {}) => r4.setItem(e5, t7, s4), "set"), has: /* @__PURE__ */ __name((e5, t7 = {}) => r4.hasItem(e5, t7), "has"), del: /* @__PURE__ */ __name((e5, t7 = {}) => r4.removeItem(e5, t7), "del"), remove: /* @__PURE__ */ __name((e5, t7 = {}) => r4.removeItem(e5, t7), "remove") };
      return r4;
    })({});
    __name(useStorage, "useStorage");
    nn3.mount("/assets", rn3);
    on3 = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
    sn3 = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
    an3 = [];
    k3 = class {
      static {
        __name(this, "k");
      }
      _data = new l2();
      _hash = new l2([...on3]);
      _nDataBytes = 0;
      _minBufferSize = 0;
      finalize(e4) {
        e4 && this._append(e4);
        const t6 = 8 * this._nDataBytes, r4 = 8 * this._data.sigBytes;
        return this._data.words[r4 >>> 5] |= 128 << 24 - r4 % 32, this._data.words[14 + (r4 + 64 >>> 9 << 4)] = Math.floor(t6 / 4294967296), this._data.words[15 + (r4 + 64 >>> 9 << 4)] = t6, this._data.sigBytes = 4 * this._data.words.length, this._process(), this._hash;
      }
      _doProcessBlock(e4, t6) {
        const r4 = this._hash.words;
        let s4 = r4[0], a4 = r4[1], c4 = r4[2], u3 = r4[3], f3 = r4[4], h4 = r4[5], d3 = r4[6], g3 = r4[7];
        for (let r5 = 0; r5 < 64; r5++) {
          if (r5 < 16) an3[r5] = 0 | e4[t6 + r5];
          else {
            const e5 = an3[r5 - 15], t7 = (e5 << 25 | e5 >>> 7) ^ (e5 << 14 | e5 >>> 18) ^ e5 >>> 3, s5 = an3[r5 - 2], a5 = (s5 << 15 | s5 >>> 17) ^ (s5 << 13 | s5 >>> 19) ^ s5 >>> 10;
            an3[r5] = t7 + an3[r5 - 7] + a5 + an3[r5 - 16];
          }
          const m3 = s4 & a4 ^ s4 & c4 ^ a4 & c4, _3 = (s4 << 30 | s4 >>> 2) ^ (s4 << 19 | s4 >>> 13) ^ (s4 << 10 | s4 >>> 22), E3 = g3 + ((f3 << 26 | f3 >>> 6) ^ (f3 << 21 | f3 >>> 11) ^ (f3 << 7 | f3 >>> 25)) + (f3 & h4 ^ ~f3 & d3) + sn3[r5] + an3[r5];
          g3 = d3, d3 = h4, h4 = f3, f3 = u3 + E3 | 0, u3 = c4, c4 = a4, a4 = s4, s4 = E3 + (_3 + m3) | 0;
        }
        r4[0] = r4[0] + s4 | 0, r4[1] = r4[1] + a4 | 0, r4[2] = r4[2] + c4 | 0, r4[3] = r4[3] + u3 | 0, r4[4] = r4[4] + f3 | 0, r4[5] = r4[5] + h4 | 0, r4[6] = r4[6] + d3 | 0, r4[7] = r4[7] + g3 | 0;
      }
      _append(e4) {
        "string" == typeof e4 && (e4 = l2.fromUtf8(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }
      _process(e4) {
        let t6, r4 = this._data.sigBytes / 64;
        r4 = e4 ? Math.ceil(r4) : Math.max((0 | r4) - this._minBufferSize, 0);
        const s4 = 16 * r4, a4 = Math.min(4 * s4, this._data.sigBytes);
        if (s4) {
          for (let e5 = 0; e5 < s4; e5 += 16) this._doProcessBlock(this._data.words, e5);
          t6 = this._data.words.splice(0, s4), this._data.sigBytes -= a4;
        }
        return new l2(t6, a4);
      }
    };
    l2 = class _l {
      static {
        __name(this, "l");
      }
      words;
      sigBytes;
      constructor(e4, t6) {
        e4 = this.words = e4 || [], this.sigBytes = void 0 === t6 ? 4 * e4.length : t6;
      }
      static fromUtf8(e4) {
        const t6 = unescape(encodeURIComponent(e4)), r4 = t6.length, s4 = [];
        for (let e5 = 0; e5 < r4; e5++) s4[e5 >>> 2] |= (255 & t6.charCodeAt(e5)) << 24 - e5 % 4 * 8;
        return new _l(s4, r4);
      }
      toBase64() {
        const e4 = [];
        for (let t6 = 0; t6 < this.sigBytes; t6 += 3) {
          const r4 = (this.words[t6 >>> 2] >>> 24 - t6 % 4 * 8 & 255) << 16 | (this.words[t6 + 1 >>> 2] >>> 24 - (t6 + 1) % 4 * 8 & 255) << 8 | this.words[t6 + 2 >>> 2] >>> 24 - (t6 + 2) % 4 * 8 & 255;
          for (let s4 = 0; s4 < 4 && 8 * t6 + 6 * s4 < 8 * this.sigBytes; s4++) e4.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(r4 >>> 6 * (3 - s4) & 63));
        }
        return e4.join("");
      }
      concat(e4) {
        if (this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4), this.sigBytes % 4) for (let t6 = 0; t6 < e4.sigBytes; t6++) {
          const r4 = e4.words[t6 >>> 2] >>> 24 - t6 % 4 * 8 & 255;
          this.words[this.sigBytes + t6 >>> 2] |= r4 << 24 - (this.sigBytes + t6) % 4 * 8;
        }
        else for (let t6 = 0; t6 < e4.sigBytes; t6 += 4) this.words[this.sigBytes + t6 >>> 2] = e4.words[t6 >>> 2];
        this.sigBytes += e4.sigBytes;
      }
    };
    cn3 = (() => {
      class Hasher2 {
        static {
          __name(this, "Hasher2");
        }
        buff = "";
        #o = /* @__PURE__ */ new Map();
        write(e4) {
          this.buff += e4;
        }
        dispatch(e4) {
          return this[null === e4 ? "null" : typeof e4](e4);
        }
        object(e4) {
          if (e4 && "function" == typeof e4.toJSON) return this.object(e4.toJSON());
          const t6 = Object.prototype.toString.call(e4);
          let r4 = "";
          const s4 = t6.length;
          r4 = s4 < 10 ? "unknown:[" + t6 + "]" : t6.slice(8, s4 - 1), r4 = r4.toLowerCase();
          let a4 = null;
          if (void 0 !== (a4 = this.#o.get(e4))) return this.dispatch("[CIRCULAR:" + a4 + "]");
          if (this.#o.set(e4, this.#o.size), void 0 !== Vt2 && Vt2.isBuffer && Vt2.isBuffer(e4)) return this.write("buffer:"), this.write(e4.toString("utf8"));
          if ("object" !== r4 && "function" !== r4 && "asyncfunction" !== r4) this[r4] ? this[r4](e4) : this.unknown(e4, r4);
          else {
            const t7 = Object.keys(e4).sort(), r5 = [];
            this.write("object:" + (t7.length + r5.length) + ":");
            const dispatchForKey = /* @__PURE__ */ __name((t8) => {
              this.dispatch(t8), this.write(":"), this.dispatch(e4[t8]), this.write(",");
            }, "dispatchForKey");
            for (const e5 of t7) dispatchForKey(e5);
            for (const e5 of r5) dispatchForKey(e5);
          }
        }
        array(e4, t6) {
          if (t6 = void 0 !== t6 && t6, this.write("array:" + e4.length + ":"), !t6 || e4.length <= 1) {
            for (const t7 of e4) this.dispatch(t7);
            return;
          }
          const r4 = /* @__PURE__ */ new Map(), s4 = e4.map((e5) => {
            const t7 = new Hasher2();
            t7.dispatch(e5);
            for (const [e6, s5] of t7.#o) r4.set(e6, s5);
            return t7.toString();
          });
          return this.#o = r4, s4.sort(), this.array(s4, false);
        }
        date(e4) {
          return this.write("date:" + e4.toJSON());
        }
        symbol(e4) {
          return this.write("symbol:" + e4.toString());
        }
        unknown(e4, t6) {
          if (this.write(t6), e4) return this.write(":"), e4 && "function" == typeof e4.entries ? this.array([...e4.entries()], true) : void 0;
        }
        error(e4) {
          return this.write("error:" + e4.toString());
        }
        boolean(e4) {
          return this.write("bool:" + e4);
        }
        string(e4) {
          this.write("string:" + e4.length + ":"), this.write(e4);
        }
        function(e4) {
          this.write("fn:"), !(function(e5) {
            if ("function" != typeof e5) return false;
            return "[native code] }" === Function.prototype.toString.call(e5).slice(-15);
          })(e4) ? this.dispatch(e4.toString()) : this.dispatch("[native]");
        }
        number(e4) {
          return this.write("number:" + e4);
        }
        null() {
          return this.write("Null");
        }
        undefined() {
          return this.write("Undefined");
        }
        regexp(e4) {
          return this.write("regex:" + e4.toString());
        }
        arraybuffer(e4) {
          return this.write("arraybuffer:"), this.dispatch(new Uint8Array(e4));
        }
        url(e4) {
          return this.write("url:" + e4.toString());
        }
        map(e4) {
          this.write("map:");
          const t6 = [...e4];
          return this.array(t6, false);
        }
        set(e4) {
          this.write("set:");
          const t6 = [...e4];
          return this.array(t6, false);
        }
        bigint(e4) {
          return this.write("bigint:" + e4.toString());
        }
      }
      for (const e4 of ["uint8array", "uint8clampedarray", "unt8array", "uint16array", "unt16array", "uint32array", "unt32array", "float32array", "float64array"]) Hasher2.prototype[e4] = function(t6) {
        return this.write(e4 + ":"), this.array([...t6], false);
      };
      return Hasher2;
    })();
    __name(hash, "hash");
    __name(defineCachedFunction, "defineCachedFunction");
    __name(getKey, "getKey");
    __name(escapeKey, "escapeKey");
    __name(cloneWithProxy, "cloneWithProxy");
    cachedEventHandler = /* @__PURE__ */ __name(function(e4, t6 = { name: "_", base: "/cache", swr: true, maxAge: 1 }) {
      const r4 = (t6.varies || []).filter(Boolean).map((e5) => e5.toLowerCase()).sort(), s4 = { ...t6, getKey: /* @__PURE__ */ __name(async (e5) => {
        const s5 = await t6.getKey?.(e5);
        if (s5) return escapeKey(s5);
        const a5 = e5.node.req.originalUrl || e5.node.req.url || e5.path;
        let c4;
        try {
          c4 = escapeKey(decodeURI(parseURL(a5).pathname)).slice(0, 16) || "index";
        } catch {
          c4 = "-";
        }
        return [`${c4}.${hash(a5)}`, ...r4.map((t7) => [t7, e5.node.req.headers[t7]]).map(([e6, t7]) => `${escapeKey(e6)}.${hash(t7)}`)].join(":");
      }, "getKey"), validate: /* @__PURE__ */ __name((e5) => !!e5.value && (!(e5.value.code >= 400) && (void 0 !== e5.value.body && ("undefined" !== e5.value.headers.etag && "undefined" !== e5.value.headers["last-modified"]))), "validate"), group: t6.group || "nitro/handlers", integrity: t6.integrity || hash([e4, t6]) }, a4 = (function(e5, t7 = {}) {
        return defineCachedFunction(e5, t7);
      })(async (a5) => {
        const c4 = {};
        for (const e5 of r4) {
          const t7 = a5.node.req.headers[e5];
          void 0 !== t7 && (c4[e5] = t7);
        }
        const u3 = cloneWithProxy(a5.node.req, { headers: c4 }), f3 = {};
        let h4;
        const d3 = createEvent(u3, cloneWithProxy(a5.node.res, { statusCode: 200, writableEnded: false, writableFinished: false, headersSent: false, closed: false, getHeader: /* @__PURE__ */ __name((e5) => f3[e5], "getHeader"), setHeader(e5, t7) {
          return f3[e5] = t7, this;
        }, getHeaderNames: /* @__PURE__ */ __name(() => Object.keys(f3), "getHeaderNames"), hasHeader: /* @__PURE__ */ __name((e5) => e5 in f3, "hasHeader"), removeHeader(e5) {
          delete f3[e5];
        }, getHeaders: /* @__PURE__ */ __name(() => f3, "getHeaders"), end(e5, t7, r5) {
          return "string" == typeof e5 && (h4 = e5), "function" == typeof t7 && t7(), "function" == typeof r5 && r5(), this;
        }, write: /* @__PURE__ */ __name((e5, t7, r5) => ("string" == typeof e5 && (h4 = e5), "function" == typeof t7 && t7(void 0), "function" == typeof r5 && r5(), true), "write"), writeHead(e5, t7) {
          if (this.statusCode = e5, t7) {
            if (Array.isArray(t7) || "string" == typeof t7) throw new TypeError("Raw headers  is not supported.");
            for (const e6 in t7) {
              const r5 = t7[e6];
              void 0 !== r5 && this.setHeader(e6, r5);
            }
          }
          return this;
        } }));
        d3.fetch = (e5, t7) => fetchWithEvent(d3, e5, t7, { fetch: useNitroApp().localFetch }), d3.$fetch = (e5, t7) => fetchWithEvent(d3, e5, t7, { fetch: globalThis.$fetch }), d3.waitUntil = a5.waitUntil, d3.context = a5.context, d3.context.cache = { options: s4 };
        const g3 = await e4(d3) || h4, m3 = d3.node.res.getHeaders();
        m3.etag = String(m3.Etag || m3.etag || `W/"${hash(g3)}"`), m3["last-modified"] = String(m3["Last-Modified"] || m3["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString());
        const _3 = [];
        t6.swr ? (t6.maxAge && _3.push(`s-maxage=${t6.maxAge}`), t6.staleMaxAge ? _3.push(`stale-while-revalidate=${t6.staleMaxAge}`) : _3.push("stale-while-revalidate")) : t6.maxAge && _3.push(`max-age=${t6.maxAge}`), _3.length > 0 && (m3["cache-control"] = _3.join(", "));
        return { code: d3.node.res.statusCode, headers: m3, body: g3 };
      }, s4);
      return defineEventHandler(async (r5) => {
        if (t6.headersOnly) {
          if (handleCacheHeaders(r5, { maxAge: t6.maxAge })) return;
          return e4(r5);
        }
        const s5 = await a4(r5);
        if (r5.node.res.headersSent || r5.node.res.writableEnded) return s5.body;
        if (!handleCacheHeaders(r5, { modifiedTime: new Date(s5.headers["last-modified"]), etag: s5.headers.etag, maxAge: t6.maxAge })) {
          r5.node.res.statusCode = s5.code;
          for (const e5 in s5.headers) {
            const t7 = s5.headers[e5];
            "set-cookie" === e5 ? r5.node.res.appendHeader(e5, splitCookiesString(t7)) : void 0 !== t7 && r5.node.res.setHeader(e5, t7);
          }
          return s5.body;
        }
      });
    }, "cachedEventHandler");
    __name(klona, "klona");
    un2 = Br2({ nuxt: {} });
    fn2 = /\d/;
    ln3 = ["-", "_", "/", "."];
    __name(isUppercase, "isUppercase");
    __name(kebabCase, "kebabCase");
    __name(getEnv, "getEnv");
    __name(_isObject, "_isObject");
    __name(applyEnv, "applyEnv");
    hn2 = /\{\{([^{}]*)\}\}/g;
    __name(_expandFromEnv, "_expandFromEnv");
    dn3 = { app: { baseURL: "/", buildId: "58f5cb7c-8d4f-4e05-93f0-c14cb3cfd122", buildAssetsDir: "/_nuxt/", cdnURL: "" }, nitro: { envPrefix: "NUXT_", routeRules: { "/__nuxt_error": { cache: false }, "/_nuxt/builds/meta/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } }, "/_nuxt/builds/**": { headers: { "cache-control": "public, max-age=1, immutable" } }, "/_nuxt/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } } } }, public: {} };
    pn3 = { prefix: "NITRO_", altPrefix: dn3.nitro.envPrefix ?? H.env.NITRO_ENV_PREFIX ?? "_", envExpansion: dn3.nitro.envExpansion ?? H.env.NITRO_ENV_EXPANSION ?? false };
    gn2 = _deepFreeze(applyEnv(klona(dn3), pn3));
    __name(useRuntimeConfig2, "useRuntimeConfig");
    __name(_deepFreeze, "_deepFreeze");
    _deepFreeze(klona(un2)), new Proxy(/* @__PURE__ */ Object.create(null), { get: /* @__PURE__ */ __name((e4, t6) => {
      console.warn("Please use `useRuntimeConfig()` instead of accessing config directly.");
      const r4 = useRuntimeConfig2();
      if (t6 in r4) return r4[t6];
    }, "get") });
    yn2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0 !== qr ? qr : {};
    mn2 = "__unctx__";
    wn2 = yn2[mn2] || (yn2[mn2] = /* @__PURE__ */ (function(e4 = {}) {
      const t6 = {};
      return { get: /* @__PURE__ */ __name((r4, s4 = {}) => (t6[r4] || (t6[r4] = (function(e5 = {}) {
        let t7, r5 = false;
        const checkConflict = /* @__PURE__ */ __name((e6) => {
          if (t7 && t7 !== e6) throw new Error("Context conflict");
        }, "checkConflict");
        let s5;
        if (e5.asyncContext) {
          const t8 = e5.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          t8 ? s5 = new t8() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = /* @__PURE__ */ __name(() => {
          if (s5) {
            const e6 = s5.getStore();
            if (void 0 !== e6) return e6;
          }
          return t7;
        }, "_getCurrentInstance");
        return { use: /* @__PURE__ */ __name(() => {
          const e6 = _getCurrentInstance();
          if (void 0 === e6) throw new Error("Context is not available");
          return e6;
        }, "use"), tryUse: /* @__PURE__ */ __name(() => _getCurrentInstance(), "tryUse"), set: /* @__PURE__ */ __name((e6, s6) => {
          s6 || checkConflict(e6), t7 = e6, r5 = true;
        }, "set"), unset: /* @__PURE__ */ __name(() => {
          t7 = void 0, r5 = false;
        }, "unset"), call: /* @__PURE__ */ __name((e6, a4) => {
          checkConflict(e6), t7 = e6;
          try {
            return s5 ? s5.run(e6, a4) : a4();
          } finally {
            r5 || (t7 = void 0);
          }
        }, "call"), async callAsync(e6, a4) {
          t7 = e6;
          const onRestore = /* @__PURE__ */ __name(() => {
            t7 = e6;
          }, "onRestore"), onLeave = /* @__PURE__ */ __name(() => t7 === e6 ? onRestore : void 0, "onLeave");
          vn2.add(onLeave);
          try {
            const c4 = s5 ? s5.run(e6, a4) : a4();
            return r5 || (t7 = void 0), await c4;
          } finally {
            vn2.delete(onLeave);
          }
        } };
      })({ ...e4, ...s4 })), t6[r4]), "get") };
    })());
    getContext = /* @__PURE__ */ __name((e4, t6 = {}) => wn2.get(e4, t6), "getContext");
    bn2 = "__unctx_async_handlers__";
    vn2 = yn2[bn2] || (yn2[bn2] = /* @__PURE__ */ new Set());
    __name(isPathInScope, "isPathInScope");
    _n2 = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig2().nitro.routeRules }));
    __name(createRouteRulesHandler, "createRouteRulesHandler");
    __name(getRouteRules, "getRouteRules");
    __name(getRouteRulesForPath, "getRouteRulesForPath");
    En2 = /post|put|patch/i;
    __name(requestHasBody, "requestHasBody");
    __name(joinHeaders, "joinHeaders");
    __name(normalizeCookieHeader, "normalizeCookieHeader");
    __name(normalizeCookieHeaders, "normalizeCookieHeaders");
    __name(hasReqHeader, "hasReqHeader");
    __name(defaultHandler, "defaultHandler");
    Rn2 = [async function(e4, t6, { defaultHandler: r4 }) {
      if (t6.handled || (function(e5) {
        return !hasReqHeader(e5, "accept", "text/html") && (hasReqHeader(e5, "accept", "application/json") || hasReqHeader(e5, "user-agent", "curl/") || hasReqHeader(e5, "user-agent", "httpie/") || hasReqHeader(e5, "sec-fetch-mode", "cors") || e5.path.startsWith("/api/") || e5.path.endsWith(".json"));
      })(t6)) return;
      const s4 = await r4(e4, t6, { json: true });
      if (404 === (e4.status || e4.statusCode || 500) && 302 === s4.status) return setResponseHeaders(t6, s4.headers), setResponseStatus(t6, s4.status, s4.statusText), send(t6, JSON.stringify(s4.body, null, 2));
      const a4 = s4.body, c4 = new URL(a4.url);
      a4.url = withoutBase(c4.pathname, useRuntimeConfig2(t6).app.baseURL) + c4.search + c4.hash, a4.message = e4.unhandled ? a4.message || "Server Error" : e4.message || a4.message || "Server Error", a4.data ||= e4.data, a4.statusText ||= e4.statusText || e4.statusMessage, delete s4.headers["content-type"], delete s4.headers["content-security-policy"], setResponseHeaders(t6, s4.headers);
      const u3 = getRequestHeaders(t6), f3 = t6.path.startsWith("/__nuxt_error") || !!u3["x-nuxt-error"] ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig2(t6).app.baseURL, "/__nuxt_error"), a4), { headers: { ...u3, "x-nuxt-error": "true" }, redirect: "manual" }).catch(() => null);
      if (t6.handled) return;
      if (!f3) {
        const { template: e5 } = await Promise.resolve().then(() => (init_error_500(), error_500_exports));
        return setResponseHeader(t6, "Content-Type", "text/html;charset=UTF-8"), send(t6, e5(a4));
      }
      const h4 = await f3.text();
      for (const [e5, r5] of f3.headers.entries()) "set-cookie" !== e5 ? setResponseHeader(t6, e5, r5) : appendResponseHeader(t6, e5, r5);
      return setResponseStatus(t6, f3.status && 200 !== f3.status ? f3.status : s4.status, f3.statusText || s4.statusText), send(t6, h4);
    }, function(e4, t6) {
      const r4 = defaultHandler(e4, t6);
      return setResponseHeaders(t6, r4.headers), setResponseStatus(t6, r4.status, r4.statusText), send(t6, JSON.stringify(r4.body, null, 2));
    }];
    Bn2 = [];
    _lazy__U86uG = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_renderer(), renderer_exports)).then(function(e4) {
      return e4.a;
    }), "_lazy__U86uG");
    An2 = [{ route: "/__nuxt_error", handler: _lazy__U86uG, lazy: true, middleware: false, method: void 0 }, { route: "/__nuxt_island/**", handler: defineEventHandler(() => {
    }), lazy: false, middleware: false, method: void 0 }, { route: "/**", handler: _lazy__U86uG, lazy: true, middleware: false, method: void 0 }];
    In2 = (function() {
      const e4 = useRuntimeConfig2(), t6 = new Hookable(), captureError = /* @__PURE__ */ __name((e5, r5 = {}) => {
        const s5 = t6.callHookParallel("error", e5, r5).catch((e6) => {
          console.error("Error while capturing another error", e6);
        });
        if (r5.event && isEvent(r5.event)) {
          const t7 = r5.event.context.nitro?.errors;
          t7 && t7.push({ error: e5, context: r5 }), r5.event.waitUntil && r5.event.waitUntil(s5);
        }
      }, "captureError"), r4 = createApp2({ debug: destr(false), onError: /* @__PURE__ */ __name((e5, t7) => (captureError(e5, { event: t7, tags: ["request"] }), (async function(e6, t8) {
        for (const r5 of Rn2) try {
          if (await r5(e6, t8, { defaultHandler }), t8.handled) return;
        } catch (e7) {
          console.error(e7);
        }
      })(e5, t7)), "onError"), onRequest: /* @__PURE__ */ __name(async (e5) => {
        e5.context.nitro = e5.context.nitro || { errors: [] };
        const t7 = e5.node.req?.__unenv__;
        t7?._platform && (e5.context = { _platform: t7?._platform, ...t7._platform, ...e5.context }), !e5.context.waitUntil && t7?.waitUntil && (e5.context.waitUntil = t7.waitUntil), e5.fetch = (t8, r5) => fetchWithEvent(e5, t8, r5, { fetch: localFetch }), e5.$fetch = (t8, r5) => fetchWithEvent(e5, t8, r5, { fetch: c4 }), e5.waitUntil = (t8) => {
          e5.context.nitro._waitUntilPromises || (e5.context.nitro._waitUntilPromises = []), e5.context.nitro._waitUntilPromises.push(t8), e5.context.waitUntil && e5.context.waitUntil(t8);
        }, e5.captureError = (t8, r5) => {
          captureError(t8, { event: e5, ...r5 });
        }, await In2.hooks.callHook("request", e5).catch((t8) => {
          captureError(t8, { event: e5, tags: ["request"] });
        });
      }, "onRequest"), onBeforeResponse: /* @__PURE__ */ __name(async (e5, t7) => {
        await In2.hooks.callHook("beforeResponse", e5, t7).catch((t8) => {
          captureError(t8, { event: e5, tags: ["request", "response"] });
        });
      }, "onBeforeResponse"), onAfterResponse: /* @__PURE__ */ __name(async (e5, t7) => {
        await In2.hooks.callHook("afterResponse", e5, t7).catch((t8) => {
          captureError(t8, { event: e5, tags: ["request", "response"] });
        });
      }, "onAfterResponse") }), s4 = (function(e5 = {}) {
        const t7 = createRouter$1({}), r5 = {};
        let s5;
        const a5 = {}, addRoute = /* @__PURE__ */ __name((e6, s6, c6) => {
          let u3 = r5[e6];
          if (u3 || (r5[e6] = u3 = { path: e6, handlers: {} }, t7.insert(e6, u3)), Array.isArray(c6)) for (const t8 of c6) addRoute(e6, s6, t8);
          else u3.handlers[c6] = toEventHandler(s6);
          return a5;
        }, "addRoute");
        a5.use = a5.add = (e6, t8, r6) => addRoute(e6, t8, r6 || "all");
        for (const e6 of Hr2) a5[e6] = (t8, r6) => a5.add(t8, r6, e6);
        const matchHandler = /* @__PURE__ */ __name((e6 = "/", r6 = "get") => {
          const a6 = e6.indexOf("?");
          -1 !== a6 && (e6 = e6.slice(0, Math.max(0, a6)));
          const c6 = t7.lookup(e6);
          if (!c6 || !c6.handlers) return { error: createError({ statusCode: 404, name: "Not Found", statusMessage: `Cannot find any route matching ${e6 || "/"}.` }) };
          let u3 = c6.handlers[r6] || c6.handlers.all;
          if (!u3) {
            s5 || (s5 = toRouteMatcher(t7));
            const a7 = s5.matchAll(e6).reverse();
            for (const e7 of a7) {
              if (e7.handlers[r6]) {
                u3 = e7.handlers[r6], c6.handlers[r6] = c6.handlers[r6] || u3;
                break;
              }
              if (e7.handlers.all) {
                u3 = e7.handlers.all, c6.handlers.all = c6.handlers.all || u3;
                break;
              }
            }
          }
          return u3 ? { matched: c6, handler: u3 } : { error: createError({ statusCode: 405, name: "Method Not Allowed", statusMessage: `Method ${r6} is not allowed on this route.` }) };
        }, "matchHandler"), c5 = e5.preemptive || e5.preemtive;
        return a5.handler = Mr2((e6) => {
          const t8 = matchHandler(e6.path, e6.method.toLowerCase());
          if ("error" in t8) {
            if (c5) throw t8.error;
            return;
          }
          e6.context.matchedRoute = t8.matched;
          const r6 = t8.matched.params || {};
          return e6.context.params = r6, Promise.resolve(t8.handler(e6)).then((e7) => void 0 === e7 && c5 ? null : e7);
        }), a5.handler.__resolve__ = async (e6) => {
          e6 = withLeadingSlash(e6);
          const t8 = matchHandler(e6);
          if ("error" in t8) return;
          let r6 = { route: t8.matched.path, handler: t8.handler };
          if (t8.handler.__resolve__) {
            const s6 = await t8.handler.__resolve__(e6);
            if (!s6) return;
            r6 = { ...r6, ...s6 };
          }
          return r6;
        }, a5;
      })({ preemptive: true }), a4 = toNodeListener(r4), localFetch = /* @__PURE__ */ __name((e5, t7) => e5.toString().startsWith("/") ? (async function(e6, t8, r5 = {}) {
        try {
          const s5 = await b3(e6, { url: t8, ...r5 });
          return new Response(s5.body, { status: s5.status, statusText: s5.statusText, headers: v2(s5.headers) });
        } catch (e7) {
          return new Response(e7.toString(), { status: Number.parseInt(e7.statusCode || e7.code) || 500, statusText: e7.statusText });
        }
      })(a4, e5, t7).then((e6) => (function(e7) {
        return e7.headers.has("set-cookie") ? new Response(e7.body, { status: e7.status, statusText: e7.statusText, headers: normalizeCookieHeaders(e7.headers) }) : e7;
      })(e6)) : globalThis.fetch(e5, t7), "localFetch"), c4 = createFetch({ fetch: localFetch, Headers: Jr2, defaults: { baseURL: e4.app.baseURL } });
      globalThis.$fetch = c4, r4.use(createRouteRulesHandler({ localFetch }));
      for (const t7 of An2) {
        let a5 = t7.lazy ? lazyEventHandler(t7.handler) : t7.handler;
        if (t7.middleware || !t7.route) {
          const s5 = (e4.app.baseURL + (t7.route || "/")).replace(/\/+/g, "/");
          r4.use(s5, a5);
        } else {
          const e5 = getRouteRulesForPath(t7.route.replace(/:\w+|\*\*/g, "_"));
          e5.cache && (a5 = cachedEventHandler(a5, { group: "nitro/routes", ...e5.cache })), s4.use(t7.route, a5, t7.method);
        }
      }
      return r4.use(e4.app.baseURL, s4.handler), { hooks: t6, h3App: r4, router: s4, localCall: /* @__PURE__ */ __name((e5) => b3(a4, e5), "localCall"), localFetch, captureError };
    })();
    __name(useNitroApp, "useNitroApp");
    __name(defineRenderHandler, "defineRenderHandler");
    !(function(e4) {
      for (const t6 of Bn2) try {
        t6(e4);
      } catch (t7) {
        throw e4.captureError(t7, { tags: ["plugin"] }), t7;
      }
    })(In2);
  }
});

// .wrangler/tmp/bundle-lLMLH3/middleware-loader.entry.ts
init_modules_watch_stub();

// .wrangler/tmp/bundle-lLMLH3/middleware-insertion-facade.js
init_modules_watch_stub();

// .output/server/index.mjs
init_modules_watch_stub();
init_nitro();
globalThis._importMeta_ = { url: "file:///_entry.js", env: {} };
"global" in globalThis || (globalThis.global = globalThis);
var c3 = globalThis.process;
globalThis.process = c3 ? new Proxy(c3, { get: /* @__PURE__ */ __name((e4, a4, s4) => Reflect.has(e4, a4) ? Reflect.get(e4, a4, s4) : Reflect.get(H, a4, s4), "get") }) : H, globalThis.Buffer || (globalThis.Buffer = Vt2), globalThis.setImmediate || (globalThis.setImmediate = Yt3), globalThis.clearImmediate || (globalThis.clearImmediate = Jt3);
var i4 = { "/_nuxt/D9gujOu8.js": { type: "text/javascript; charset=utf-8", etag: '"2543-EmUIJH4mnF36I6298MtBfdeKDgI"', mtime: "2026-05-23T09:34:58.733Z", size: 9539, path: "../public/_nuxt/D9gujOu8.js" }, "/_nuxt/CLwpLgr9.js": { type: "text/javascript; charset=utf-8", etag: '"1e9ea-bYhdqnJpmnKdTmbQ9y44nIVIyoE"', mtime: "2026-05-23T09:34:58.734Z", size: 125418, path: "../public/_nuxt/CLwpLgr9.js" }, "/_nuxt/ByAmIp9N.js": { type: "text/javascript; charset=utf-8", etag: '"d96-h6uHvQD0u9zzgBoJsg3Xp7bUBkI"', mtime: "2026-05-23T09:34:58.735Z", size: 3478, path: "../public/_nuxt/ByAmIp9N.js" }, "/_nuxt/builds/latest.json": { type: "application/json", etag: '"47-plQhFVP8ihjhxAYy3JrZcYb84iI"', mtime: "2026-05-23T09:35:00.367Z", size: 71, path: "../public/_nuxt/builds/latest.json" }, "/_nuxt/builds/meta/58f5cb7c-8d4f-4e05-93f0-c14cb3cfd122.json": { type: "application/json", etag: '"58-4WZrdioOaQDEFp69+LE1TTe9fwE"', mtime: "2026-05-23T09:35:00.368Z", size: 88, path: "../public/_nuxt/builds/meta/58f5cb7c-8d4f-4e05-93f0-c14cb3cfd122.json" }, "/_nuxt/DzqrVQwH.js": { type: "text/javascript; charset=utf-8", etag: '"146-NFLbrRHaMc5ce85QzdfV6wn/mwI"', mtime: "2026-05-23T09:34:58.734Z", size: 326, path: "../public/_nuxt/DzqrVQwH.js" }, "/_nuxt/error-404.Biqbe-zG.css": { type: "text/css; charset=utf-8", etag: '"97e-Uhz9hRqx9b2VwDBEBV1UFcqNxfE"', mtime: "2026-05-23T09:34:58.730Z", size: 2430, path: "../public/_nuxt/error-404.Biqbe-zG.css" }, "/_nuxt/error-500.C-osHKvJ.css": { type: "text/css; charset=utf-8", etag: '"773-rKr8AWXwTX44ysEY8/CcSzwZ5Yo"', mtime: "2026-05-23T09:34:58.733Z", size: 1907, path: "../public/_nuxt/error-500.C-osHKvJ.css" } };
var n2 = { "/_nuxt/builds/meta/": { maxAge: 31536e3 }, "/_nuxt/builds/": { maxAge: 1 }, "/_nuxt/": { maxAge: 31536e3 } };
var r3 = (function(t6) {
  const a4 = useNitroApp();
  return { async fetch(s4, c4, i5) {
    const n3 = {}, r4 = new URL(s4.url);
    if (t6.fetch) {
      const e4 = await t6.fetch(s4, c4, i5, r4, n3);
      if (e4) return e4;
    }
    return (async function(t7, a5, s5, c5 = new URL(t7.url), i6 = useNitroApp(), n4) {
      let r5;
      requestHasBody(t7) && (r5 = Vt2.from(await t7.arrayBuffer()));
      return globalThis.__env__ = a5, i6.localFetch(c5.pathname + c5.search, { context: { waitUntil: /* @__PURE__ */ __name((t8) => s5.waitUntil(t8), "waitUntil"), _platform: { cf: t7.cf, cloudflare: { request: t7, env: a5, context: s5, url: c5, ...n4 } } }, host: c5.hostname, protocol: c5.protocol, method: t7.method, headers: t7.headers, body: r5 });
    })(s4, c4, i5, r4, a4, n3);
  }, scheduled(t7, e4, s4) {
    globalThis.__env__ = e4, s4.waitUntil(a4.hooks.callHook("cloudflare:scheduled", { controller: t7, env: e4, context: s4 }));
  }, email(t7, e4, s4) {
    globalThis.__env__ = e4, s4.waitUntil(a4.hooks.callHook("cloudflare:email", { message: t7, event: t7, env: e4, context: s4 }));
  }, queue(t7, e4, s4) {
    globalThis.__env__ = e4, s4.waitUntil(a4.hooks.callHook("cloudflare:queue", { batch: t7, event: t7, env: e4, context: s4 }));
  }, tail(t7, e4, s4) {
    globalThis.__env__ = e4, s4.waitUntil(a4.hooks.callHook("cloudflare:tail", { traces: t7, env: e4, context: s4 }));
  }, trace(t7, e4, s4) {
    globalThis.__env__ = e4, s4.waitUntil(a4.hooks.callHook("cloudflare:trace", { traces: t7, env: e4, context: s4 }));
  } };
})({ fetch(t6, e4, a4, s4) {
  if (e4.ASSETS && (function(t7 = "") {
    if (i4[t7]) return true;
    for (const e5 in n2) if (t7.startsWith(e5)) return true;
    return false;
  })(s4.pathname)) return e4.ASSETS.fetch(t6);
} });

// node_modules/.pnpm/wrangler@4.94.0_@cloudflare+workers-types@4.20260523.1/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e4) {
      console.error("Failed to drain the unused request body.", e4);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/.pnpm/wrangler@4.94.0_@cloudflare+workers-types@4.20260523.1/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
function reduceError(e4) {
  return {
    name: e4?.name,
    message: e4?.message ?? String(e4),
    stack: e4?.stack,
    cause: e4?.cause === void 0 ? void 0 : reduceError(e4.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e4) {
    const error = reduceError(e4);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-lLMLH3/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = r3;

// node_modules/.pnpm/wrangler@4.94.0_@cloudflare+workers-types@4.20260523.1/node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-lLMLH3/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
