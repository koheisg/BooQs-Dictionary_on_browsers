document.addEventListener("mouseup",(function(e){var o=window.getSelection();const t=document.querySelector("#booqs-dict-search-form");null!=t&&""!=o&&(t.value=o,function(e){let o="https://www.booqs.net/api/v1/extension/search?keyword="+encodeURIComponent(e);fetch(o,{method:"GET"}).then((e=>e.json())).then((e=>{!function(e){console.log(e.data);let o=document.querySelector("#search-booqs-dict-results");o.innerHTML="",e.data.forEach((function(e,t,n){console.log(e,t);let s='<div class="booqs-dict-entry">'+e.entry+'</div><div class="booqs-dict-meaning">'+e.meaning+'</div><div class="booqs-dict-explanation">'+e.explanation+"</div>"+`<a href="https://www.booqs.net/ja/words/${e.id}" target="_blank" rel="noopener"><div class="booqs-dict-review-btn">復習する</div></a>`;o.insertAdjacentHTML("afterbegin",s)})),console.log("success")}(e)})).catch((e=>{console.log(e)}))}(o),e.stopPropagation())}),!1),chrome.extension.onMessage.addListener((function(e,o,t){"Action"==e&&function(){let e=document.getElementsByClassName("jsframe-titlebar-focused");if(0==e.length){jsFrame=new JSFrame({horizontalAlign:"right"});const e='<div id="booqs-dict-extension-wrapper"><form method="get" action=""><input type="text" name="keyword" id="booqs-dict-search-form"></form><div id ="search-booqs-dict-results"></div></div>';let o=jsFrame.create({name:"booqs-dict-window",title:"BooQs Dictionary",width:320,height:480,movable:!0,resizable:!0,style:{overflow:"auto"},html:e});console.log(o),o.setPosition(-20,20,["RIGHT_TOP"]),o.show(),o.requestFocus(),console.log("show")}else e[0].parentNode.parentNode.remove()}()}));