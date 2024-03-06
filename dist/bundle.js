(()=>{"use strict";var n={208:(n,t,e)=>{e.d(t,{A:()=>s});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap);"]),i.push([n.id,'body {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Nanum Gothic Coding", monospace;\n}\n\n/* PAGE LAYOUT */\nmain {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n}\n\n.sidebar {\n  grid-row: 1 / 5;\n  grid-column: 1;\n  border: 1px solid #434543;\n}\n\n.task-board {\n  border: 1px solid #434543;\n  grid-row: 1 / 5;\n  grid-column: 2 / 5;\n}\n\nsection {\n  padding: 1rem 2rem;\n}\n\nheader {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.name {\n  display: inline-block;\n}\n\n.logo {\n  width: 3.5rem;\n  height: 3.5rem;\n}\n\n/* NEW TASK MODAL FORM */\n.modal {\n  padding: 1rem;\n  height: 520px;\n}\n\ninput {\n  padding: 0.5rem;\n}\n\ntextarea {\n  display: block;\n}\n\n.priority {\n  margin: 1rem 0;\n}\n\n.btn-close-modal {\n  position: absolute;\n  right: 1rem;\n  top: 1rem;\n  background-color: white;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.div1 {\n  display: flex;\n  justify-content: space-around;\n  gap: 1rem;\n  flex-direction: column;\n}\n\n.div1 h3 {\n  margin: 0;\n}\n\n#low {\n  background-color: rgba(240, 237, 84, 0.3);\n  border: 2px solid #f9f506;\n  color: #ffea08;\n}\n\n#med {\n  background-color: rgba(255, 132, 0, 0.3);\n  border: 2px solid #f9a006;\n  color: #f9a006;\n}\n\n#high {\n  background-color: rgba(255, 0, 0, 0.3);\n  border: 2px solid #f90606;\n  color: #f90606;\n}\n\n.btn-priority {\n  width: 100px;\n  font-size: 1rem;\n  padding: 0.7rem 1.5rem;\n  cursor: pointer;\n}\n\n.btn-status {\n  padding: 0.7rem 1.5rem;\n  width: fit-content;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n#not {\n  background-color: rgba(67, 69, 67, 0.3);\n  border: 2px solid #434543;\n  color: #434543;\n}\n\n#done {\n  background-color: rgba(12, 205, 6, 0.3);\n  border: 2px solid #07c700;\n  color: #07c700;\n}\n\n.btn-add {\n  margin: 1rem;\n  position: absolute;\n  left: 6rem;\n  font-size: 1rem;\n  padding: 0.7rem 1.5rem;\n  border: 2px solid black;\n  color: black;\n  background-color: #fff;\n  cursor: pointer;\n}\n\n/* TASKS PAGE */\n.title-alltasks {\n  text-align: center;\n  padding: 1rem;\n}\n\n.btn-new {\n  border: 1px solid #85a784;\n  background-color: #ffff;\n  padding: 1rem;\n  margin: 2rem;\n  border-radius: 4px;\n  font-size: 1.2rem;\n  box-shadow: 3px 3px #85a784;\n  cursor: pointer;\n}\n',""]);const s=i},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var d=n[s],c=r.base?d[0]+r.base:d[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var p=e(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);t[s].references--}for(var d=r(n,o),c=0;c<a.length;c++){var l=e(a[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=e(72),t=e.n(n),r=e(825),o=e.n(r),a=e(659),i=e.n(a),s=e(56),d=e.n(s),c=e(540),l=e.n(c),u=e(113),p=e.n(u),f=e(208),m={};m.styleTagTransform=p(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(f.A,m),f.A&&f.A.locals&&f.A.locals;const b=document.querySelector(".task-board"),g=document.querySelector("dialog");window.onload=()=>{(function(){const n=document.createElement("h1");n.textContent="All Tasks",n.classList.add("title-alltasks"),b.appendChild(n);const t=document.createElement("btn");t.textContent="+Add new task",t.classList.add("btn-new"),b.appendChild(t),t.addEventListener("click",(function(){!function(){const n=document.querySelector("dialog");n.insertAdjacentHTML("beforeend",'\n    <button class="btn-close-modal">✖️</button>\n  <form action="#" class="task-form">\n        <h2>New Task</h2>\n        <div class=\'div1\'> \n          <label for="title"><h3>Title</h3></label>\n          <input type="text" id="title" required />\n             <label for="date"><h3>Due date</h3></label>\n          <input type="date" id="date" required />\n        </div>\n        <div class=\'priority\'>\n          <h3>Priority</h3>\n          <button id="low" class="btn-priority">Low</button>\n          <button id="med" class="btn-priority">Medium</button>\n          <button id="high" class="btn-priority">High</button>\n        </div>\n        <div>\n          <label for="notes"><h3>Notes</h3></label>\n          <textarea name="notes" id="notes" cols="20" rows="4"></textarea>\n        </div>\n        <div>\n          <h3>Status</h3>\n          <button id="not" class="btn-status">Not started</button>\n          <button id="done" class="btn-status">Done!</button>\n        </div>\n        <button type="submit" class="btn-add">Add task</button>\n      </form>\n  '),n.showModal()}()}))})(),document.addEventListener("click",(function(n){n.target.closest(".btn-close-modal")&&(g.textContent="",g.close())}))}})()})();