(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{55:function(e,t,a){e.exports=a(84)},60:function(e,t,a){},61:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(13),o=a.n(r),c=(a(60),a(61),a(42)),l=a(43),s=a(49),m=a(48),u=a(118),p=a(4),d=a(117),h=a(119),g=a(116),v=a(120),f=a(121),b=a(122),E=a(128),k=a(23);function x(e){var t=Object(p.a)((function(t){return{badge:{backgroundColor:"Alive"==e.status?"#5cb85c":"#d9534f",boxShadow:"0 0 0 3px #fff"}}}))(g.a),a=Object(d.a)((function(e){return{root:{},media:{height:0,paddingTop:"56.25%"},title:{textAlign:"left"},avatar:{backgroundColor:"#0275d8"}}}))();return i.a.createElement(u.a,{item:!0,md:3,xs:12,sm:6},i.a.createElement(h.a,{className:a.root},i.a.createElement(v.a,{avatar:i.a.createElement(t,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot"},i.a.createElement(E.a,{alt:"Remy Sharp"},e.name.charAt(0))),title:e.name,className:a.title}),i.a.createElement(f.a,{className:a.media,image:e.image,title:"Paella dish"}),i.a.createElement(b.a,null,i.a.createElement(k.a,{variant:"caption",display:"block",gutterBottom:!0,className:a.title},"Species : ",e.species),i.a.createElement(k.a,{variant:"caption",display:"block",gutterBottom:!0,className:a.title},"Gender : ",e.gender),i.a.createElement(k.a,{variant:"caption",display:"block",gutterBottom:!0,className:a.title},"Origin : ",e.origin))))}var y=a(22),w=a(123),O=a(124),j=a(127),P=a(8),L=a(45),N=a.n(L),C=Object(d.a)((function(e){return{root:{flexGrow:1,paddingBottom:20},menuButton:{marginRight:e.spacing(2)},title:Object(y.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(y.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(P.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(P.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(y.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function B(e){var t=C();return i.a.createElement("div",{className:t.root},i.a.createElement(w.a,{position:"static"},i.a.createElement(O.a,null,i.a.createElement(k.a,{className:t.title,variant:"h6",noWrap:!0},"Rick And Morty"),i.a.createElement("div",{className:t.search},i.a.createElement("div",{className:t.searchIcon},i.a.createElement(N.a,null)),i.a.createElement(j.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},onChange:e.search,inputProps:{"aria-label":"search"}})))))}var A=a(46),R=a.n(A),I=a(125),S=a(47),D=a(129),F=a(126),q=a(25),G=a.n(q),z=a(26),M=a.n(z),U=Object(d.a)({root:{flexGrow:1,marginBottom:20}});function W(e){var t=U(),a=Object(S.a)();return i.a.createElement(D.a,{position:"static",className:t.root,nextButton:i.a.createElement(F.a,{size:"small",onClick:e.next,disabled:null===e.isNext},"Next","rtl"===a.direction?i.a.createElement(G.a,null):i.a.createElement(M.a,null)),backButton:i.a.createElement(F.a,{size:"small",onClick:e.prev,disabled:null===e.isPrev},"rtl"===a.direction?i.a.createElement(M.a,null):i.a.createElement(G.a,null),"Back")})}var _=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleOnInputChange=function(e){n.setState({query:e.target.value,isLoaded:!1},(function(){n.fetchDataFromApi(n.state.api_URL,n.state.query)}))},n.nextPage=function(){n.fetchDataFromApi(n.state.nextPageLink,"")},n.prevPage=function(){n.fetchDataFromApi(n.state.prevPageLink,"")},n.state={items:[],api_URL:"https://rickandmortyapi.com/api/character/?name=",nextPage:"",prevPage:"",isLoaded:!1,query:""},n}return Object(l.a)(a,[{key:"fetchDataFromApi",value:function(e,t){var a=this;R.a.get(e+t).then((function(e){a.setState({items:e.data.results,nextPageLink:e.data.info.next,prevPageLink:e.data.info.prev,isLoaded:!0})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.fetchDataFromApi(this.state.api_URL,this.state.query)}},{key:"render",value:function(){var e=this.state,t=e.items,a=e.nextPageLink,n=e.prevPageLink;return i.a.createElement("div",null,i.a.createElement(I.a,{spacing:1},i.a.createElement(u.a,{item:!0,md:12,xs:12},i.a.createElement(B,{search:this.handleOnInputChange})),i.a.createElement(u.a,{item:!0,md:12},i.a.createElement(W,{isNext:a,isPrev:n,next:this.nextPage,prev:this.prevPage,style:{justifyContent:"flex-end"}})),i.a.createElement(u.a,{item:!0,container:!0,spacing:1},t.map((function(e){return i.a.createElement(x,{key:e.id,name:e.name,status:e.status,species:e.species,image:e.image,gender:e.gender,origin:e.origin.name})})))))}}]),a}(i.a.Component);var J=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.5330fdc3.chunk.js.map