(this["webpackJsonpteka-teki-silang"]=this["webpackJsonpteka-teki-silang"]||[]).push([[0],[,,,,,,,,function(t,o,n){},function(t,o,n){},,function(t,o,n){},function(t,o,n){"use strict";n.r(o);var a=n(1),e=n.n(a),i=n(3),s=n.n(i);n(8),n(9);const c=[{position:2,clue:"Danau di Sulawesi Tengah",answer:"poso",orientation:"across",startCol:7,startRow:1},{position:5,clue:"Tarian dari Bali",answer:"kecak",orientation:"across",startCol:11,startRow:3},{position:6,clue:"Lembaga pemerintah Indonesia yang meneliti luar angkasa",answer:"lapan",orientation:"across",startCol:3,startRow:3},{position:7,clue:"Pendapatan non upah menjelang hari raya keagamaan",answer:"thr",orientation:"across",startCol:7,startRow:4},{position:9,clue:"Tarian Suku Gayo",answer:"saman",orientation:"across",startCol:11,startRow:5},{position:10,clue:"Suku yang menempati wilayah Jakarta",answer:"betawi",orientation:"across",startCol:2,startRow:5},{position:13,clue:"Ibukota Provinsi Sumatra Barat",answer:"padang",orientation:"across",startCol:9,startRow:7},{position:16,clue:"Makanan khas Palembang",answer:"pempek",orientation:"across",startCol:4,startRow:11},{position:17,clue:"Lagu daerah dari Kalimantan Barat",answer:"cikcikperiuk",orientation:"across",startCol:2,startRow:13},{position:18,clue:"Sinetron tentang kehidupan supir bajaj",answer:"bajajbajuri",orientation:"across",startCol:1,startRow:15},{position:1,clue:"Mata uang Indonesia",answer:"rupiah",orientation:"down",startCol:5,startRow:1},{position:2,clue:"Kota khatulistiwa",answer:"pontianak",orientation:"down",startCol:7,startRow:1},{position:4,clue:"Jumlah bulu ekor Garuda Pancasila",answer:"delapan",orientation:"down",startCol:12,startRow:2},{position:8,clue:"Gorengan berbentuk pipih dari tepung dan kacang",answer:"rempeyek",orientation:"down",startCol:9,startRow:4},{position:10,clue:"Kerajaan di Kalimantan Selatan",answer:"banjar",orientation:"down",startCol:2,startRow:5},{position:12,clue:"Makanan khas Yogyakarta dari nagka muda",answer:"gudeg",orientation:"down",startCol:14,startRow:7},{position:14,clue:'Penulis "Habis Gelap Terbitlah Terang"',answer:"kartini",orientation:"down",startCol:11,startRow:9},{position:15,clue:"Taman wisata di Jakarta yang bertema budaya Indonesia",answer:"tmii",orientation:"down",startCol:6,startRow:10}];var r=n(0);var l=function(t){let{hasInput:o,hasNumber:n,cellRef:a,className:e,cellHeight:i,coord:s,firstPosition:c,secondPosition:l,col:d,row:u,number:p,onKeyUp:w,onClick:h}=t;return Object(r.jsx)("td",{children:Object(r.jsxs)("div",{style:{height:i},children:[o&&Object(r.jsx)("input",{autoComplete:"off",ref:a,className:e,id:s,maxLength:1,onKeyUp:w,onClick:h,"data-first-position":c,"data-second-position":l,"data-col":d,"data-row":u}),n&&Object(r.jsx)("span",{children:p})]})})};var d=function(t){var o,n,a,i;let{cellOrientation:s,col:c,data:d,hasInput:u,hasNumber:p,number:w,onChange:h,onClick:m,onClickOutside:g,row:f,...v}=t,j="";null!==(o=d.position)&&void 0!==o&&o.secondPosition?j="cell-position-".concat(d.position.firstPosition," cell-position-").concat(d.position.secondPosition):null!==(n=d.position)&&void 0!==n&&n.firstPosition&&(j="cell-position-".concat(d.position.firstPosition));const b=e.a.useRef(null),C="".concat(j," cell-row-").concat(f," cell-col-").concat(c);var k,y;k=b,y=()=>g(C),e.a.useEffect((()=>{const t=t=>{k.current&&!k.current.contains(t.target)&&y(t)};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}}),[k,y]);const O={hasInput:u,hasNumber:p,cellRef:b,className:C,coord:d.coord,firstPosition:null===(a=d.position)||void 0===a?void 0:a.firstPosition,secondPosition:null===(i=d.position)||void 0===i?void 0:i.secondPosition,col:c,row:f,number:w,onKeyUp:function(t){const{dataset:o}=t.target;if("Delete"===t.key||"Backspace"===t.key){var n;const t="across"===s?"".concat(+o.col-1,",").concat(o.row):"".concat(o.col,",").concat(+o.row-1);null===(n=document.getElementById(t))||void 0===n||n.select()}else if(""!==t.key){var a;const t="across"===s?"".concat(+o.col+1,",").concat(o.row):"".concat(o.col,",").concat(+o.row+1);null===(a=document.getElementById(t))||void 0===a||a.select()}h(t)},onClick:m,...v};return Object(r.jsx)(l,{...O})};n(11);var u=function(t){let{activePosition:o,cellOrientation:n,cellHeight:a,convertedEntries:e,firstValues:i,onChangeCell:s,onClickCell:l,onClickOutsideCell:u,onClickClue:p,totalCols:w,totalRows:h}=t;return Object(r.jsxs)("div",{className:"tts-container",children:[Object(r.jsxs)("div",{className:"tts-questions",children:[Object(r.jsxs)("div",{className:"across",children:[Object(r.jsx)("h2",{children:"Mendatar"}),c.filter((t=>"across"===t.orientation)).map((t=>Object(r.jsx)("p",{onClick:p,"data-target-class":"cell-position-".concat(t.position,"-").concat(t.orientation),"data-orientation":t.orientation,"data-position":"".concat(t.position,"-").concat(t.orientation),className:o==="".concat(t.position,"-").concat(t.orientation)?"active":"",children:"".concat(t.position,". ").concat(t.clue)},t.position)))]}),Object(r.jsxs)("div",{className:"down",children:[Object(r.jsx)("h2",{children:"Menurun"}),c.filter((t=>"down"===t.orientation)).map((t=>Object(r.jsx)("p",{onClick:p,"data-target-class":"cell-position-".concat(t.position,"-").concat(t.orientation),"data-orientation":t.orientation,"data-position":"".concat(t.position,"-").concat(t.orientation),className:o==="".concat(t.position,"-").concat(t.orientation)?"active":"",children:"".concat(t.position,". ").concat(t.clue)},t.position)))]})]}),Object(r.jsx)("div",{className:"tts-table",children:Object(r.jsx)("table",{children:Object(r.jsx)("tbody",{children:Array.from(Array(h).keys()).map((t=>Object(r.jsx)("tr",{children:Array.from(Array(w).keys()).map((o=>{var c;const p="".concat(o+1,",").concat(t+1),w=function(t,o){const n={},a=t.filter((t=>t.coord===o));var e,i;return a.length>0&&(n.coord=a[0].coord,n.word=a[0].word,n.position={...a[0].position&&{firstPosition:"".concat(a[0].position,"-","".concat(a[0].orientation))},...(null===(e=a[1])||void 0===e?void 0:e.position)&&{secondPosition:"".concat(a[1].position,"-","".concat(a[1].orientation))}},n.length={...a[0].length&&{firstLegth:a[0].length},...(null===(i=a[1])||void 0===i?void 0:i.length)&&{secondLength:a[1].length}}),n}(e,p),m=e.some((t=>t.coord===p)),g=i.some((t=>t.coord===p)),f=null===(c=i.find((t=>t.coord===p)))||void 0===c?void 0:c.position;return Object(r.jsx)(d,{cellOrientation:n,cellHeight:a,col:o+1,data:w,hasInput:m,hasNumber:g,number:f,onClick:l,onClickOutside:u,onChange:s,row:t+1,totalRows:h},p)}))},t)))})})})]})};function p(t,o){const n="across"===o?"down":"across",a="across"===n?"row":"col";return t.split(" ").filter((t=>!t.includes(n))).filter((t=>!t.includes(a))).filter((t=>!t.includes("active"))).join(" ")}var w=function(){const{width:t}=function(){var t,o;const[n,a]=e.a.useState({width:null===(t=window)||void 0===t?void 0:t.innerWidth,height:null===(o=window)||void 0===o?void 0:o.innerHeight});function i(){a({width:window.innerWidth,height:window.innerHeight})}return e.a.useEffect((()=>(window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)})),[]),n}(),[o,n]=e.a.useState(0),[a,i]=e.a.useState(0),[s,l]=e.a.useState({}),[d,w]=e.a.useState(""),[h,m]=e.a.useState({position:"",words:[]}),[g,f]=e.a.useState("");e.a.useEffect((()=>{const t=function(t){const o=t.reduce(((t,o)=>{const n=o.answer.split(""),a=[];for(let e=0;e<n.length;e+=1){a.push(e);const t="across"===o.orientation?"".concat((o.startCol+=1)-1,",").concat(o.startRow):"".concat(o.startCol,",").concat((o.startRow+=1)-1);a[e]={coord:t,length:n.length,word:n[e],position:o.position,orientation:o.orientation}}return t["".concat(o.position,"-").concat(o.orientation)]=a,t}),{}),n=Object.keys(o).map((t=>o[t].map((t=>t.coord.split(",")[0])))).flat(2),a=Object.keys(o).map((t=>o[t].map((t=>t.coord.split(",")[1])))).flat(2),e=Math.max.apply(Math,n),i=Math.max.apply(Math,a);return{entries:o,totalRows:i,totalCols:e}}(c);n(t.totalRows),i(t.totalCols),l(t.entries)}),[]);const v=Object.keys(s).map((t=>({position:t.split("-")[0],orientation:t.split("-")[1],coord:s[t][0].coord,word:s[t][0].word}))),j=Object.keys(s).map((t=>s[t])).flat(2);e.a.useEffect((()=>{if(h){var t;if(h.words.join("")===(null===(t=s[h.position])||void 0===t?void 0:t.map((t=>t.word)).join(""))){const t=document.getElementsByClassName(g);for(let o=0;o<t.length;o+=1)t[o].classList.remove("active"),t[o].classList.add("answered"),t[o].setAttribute("readonly",!0),t[o].setAttribute("data-answered","true")}}}),[h,s,g]);let b=64,C="100vw";t<768?(console.log("mobile"),b=64):t>=768&&t<=1024?(console.log("tablet"),b=192):(console.log("desktop"),C="1440px",b=50*o);const k="calc((".concat(C," - ").concat(b,"px) / ").concat(o,")"),y={activePosition:h.position,cellOrientation:d,cellHeight:k,convertedEntries:j,firstValues:v,onClickCell:function(t){if("true"!==t.target.dataset.answered){m({position:t.target.dataset.firstPosition,words:[]});const o=t.target.dataset.firstPosition.split("-")[1],{className:n}=t.target;t.target.select(),w(o);const a=p(n,o);f(a);const e=document.getElementsByClassName(a);for(let t=0;t<e.length;t+=1)e[t].classList.add("active")}},onClickClue:function(t){if("true"!==t.target.dataset.answered){m({position:t.target.dataset.position,words:[]});const{targetClass:o,position:n}=t.target.dataset,a=p(o,n.split("-")[1]);f(a);const e=document.getElementsByClassName(o);for(let t=0;t<e.length;t+=1)e[t].classList.add("active");e[0].select(),w(t.target.dataset.orientation)}},onClickOutsideCell:function(t){const o=document.getElementsByClassName(t);for(let n=0;n<o.length;n+=1)o[n].classList.remove("active")},onChangeCell:function(t){const{col:o,row:n}=t.target.dataset,a="across"===h.position.split("-")[1]?+o-1:+n-1,e=h.words.slice();e.splice(a,1,t.target.value),m({...h,words:e})},totalCols:a,totalRows:o};return Object(r.jsx)(u,{...y})};var h=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(w,{})})};var m=t=>{t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((o=>{let{getCLS:n,getFID:a,getFCP:e,getLCP:i,getTTFB:s}=o;n(t),a(t),e(t),i(t),s(t)}))};s.a.render(Object(r.jsx)(e.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),m()}],[[12,1,2]]]);
//# sourceMappingURL=main.72dae906.chunk.js.map