function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function m(e,t,n){var o,r,i,a,u,f,c=0,l=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,u=setTimeout(j,t),l?b(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function j(){var e=p();if(h(e))return w(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?v(n,i-(e-c)):n}(e))}function w(e){return u=void 0,m&&o?b(e):(o=r=void 0,a)}function x(){var e=p(),n=h(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=g(t)||0,y(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(g(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},x.flush=function(){return void 0===u?a:w(p())},x}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),S=document.querySelector('[type="email"]'),h=document.querySelector('[name="message"]'),j=document.querySelector('[type="submit"]');let w;try{w=JSON.parse(localStorage.getItem("feedback-form-state")),w?(S.value=w.email,h.value=w.textarea):(S.value="",h.value="")}catch(e){console.log("Error")}b.addEventListener("input",e(t)((function(){x.email=S.value,x.textarea=h.value,localStorage.setItem("feedback-form-state",JSON.stringify(x))}),500)),j.addEventListener("click",(function(e){e.preventDefault(),console.log(x),x={},localStorage.clear(),b.reset()}));let x={...w};
//# sourceMappingURL=03-feedback.e92f5967.js.map