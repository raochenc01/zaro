(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"0gy7":function(e,t,a){e.exports={pie:"pie___-22A5",chart:"chart___1ouq9",hasLegend:"hasLegend___3kTty",legend:"legend___5h9l_",dot:"dot___3hqvn",line:"line___3AQnH",legendTitle:"legendTitle___2Scir",percent:"percent___22Onf",value:"value___2nHKm",title:"title___1uZ7R",total:"total___2ZRar",legendBlock:"legendBlock___N6ebW"}},2:function(e,t){},EXbP:function(e,t,a){e.exports={tagCloud:"tagCloud___3EPZO"}},Vy8S:function(e,t,a){e.exports={miniChart:"miniChart___AiZl5",chartContent:"chartContent___1ymwE",chartLoading:"chartLoading___1LO0k"}},"muE+":function(e,t,a){e.exports={waterWave:"waterWave___tPyd_",text:"text___teHvn",waterWaveCanvasWrapper:"waterWaveCanvasWrapper___8U4A3"}},"nc8+":function(e,t,a){e.exports={mapChart:"mapChart___f-c-d",pieCard:"pieCard___2OD8A"}},pUri:function(e,t,a){"use strict";a.r(t);a("NIGw");var n=a("4fzX"),r=(a("r81L"),a("xjop")),i=(a("H0yR"),a("VwV8")),o=a("5weM"),l=a("5g+l"),c=a("42kL"),s=a("YG5q"),d=(a("lbWu"),a("24dS")),m=a("9kvl"),u=a("ZZRV"),h=a.n(u),p=a("IpBO"),f=a("BS6i"),v=a.n(f),g=a("cXu0"),y=a("6Gbx");function E(e){var t=e.style;t.height="100%";var a=parseInt("".concat(getComputedStyle(e).height),10),n=parseInt("".concat(getComputedStyle(e).paddingTop),10)+parseInt("".concat(getComputedStyle(e).paddingBottom),10);return a-n}function b(e){if(!e)return 0;var t=e,a=E(t),n=t.parentNode;return n&&(a=E(n)),a}function x(){return function(e){var t=function(t){Object(c["a"])(n,t);var a=Object(s["a"])(n);function n(){var e;Object(o["a"])(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=a.call.apply(a,[this].concat(r)),e.state={computedHeight:0},e.root=null,e.handleRoot=function(t){e.root=t},e}return Object(l["a"])(n,[{key:"componentDidMount",value:function(){var e=this.props.height;if(!e&&this.root){var t=b(this.root);this.setState({computedHeight:t}),t<1&&(t=b(this.root),this.setState({computedHeight:t}))}}},{key:"render",value:function(){var t=this.props.height,a=this.state.computedHeight,n=t||a;return h.a.createElement("div",{ref:this.handleRoot},n>0&&h.a.createElement(e,Object(y["a"])({},this.props,{height:n})))}}]),n}(h.a.Component);return t}}var w=x,_=g["Guide"].Arc,k=g["Guide"].Html,C=g["Guide"].Line,O=function(e){switch(e){case"2":return"\u5dee";case"4":return"\u4e2d";case"6":return"\u826f";case"8":return"\u4f18";default:return""}};g["Shape"].registerShape&&g["Shape"].registerShape("point","pointer",{drawShape:function(e,t){var a=e.points[0];a=this.parsePoint(a);var n=this.parsePoint({x:0,y:0});return t.addShape("line",{attrs:{x1:n.x,y1:n.y,x2:a.x,y2:a.y,stroke:e.color,lineWidth:2,lineCap:"round"}}),t.addShape("circle",{attrs:{x:n.x,y:n.y,r:6,stroke:e.color,lineWidth:3,fill:"#fff"}})}});var S=function(e){var t=e.title,a=e.height,n=void 0===a?1:a,r=e.percent,i=e.forceFit,o=void 0===i||i,l=e.formatter,c=void 0===l?O:l,s=e.color,d=void 0===s?"#2F9CFF":s,m=e.bgColor,u=void 0===m?"#F0F2F5":m,p={value:{type:"linear",min:0,max:10,tickCount:6,nice:!0}},f=[{value:r/10}],v=function(){return'\n  <div style="width: 300px;text-align: center;font-size: 12px!important;">\n    <div style="font-size: 14px; color: rgba(0,0,0,0.43);margin: 0;">'.concat(t,'</div>\n    <div style="font-size: 24px;color: rgba(0,0,0,0.85);margin: 0;">\n      ').concat((10*f[0].value).toFixed(2),"%\n    </div>\n  </div>")},y={fontSize:12,fill:"rgba(0, 0, 0, 0.65)",textAlign:"center"};return h.a.createElement(g["Chart"],{height:n,data:f,scale:p,padding:[-16,0,16,0],forceFit:o},h.a.createElement(g["Coord"],{type:"polar",startAngle:-1.25*Math.PI,endAngle:.25*Math.PI,radius:.8}),h.a.createElement(g["Axis"],{name:"1",line:void 0}),h.a.createElement(g["Axis"],{line:void 0,tickLine:void 0,subTickLine:void 0,name:"value",zIndex:2,label:{offset:-12,formatter:c,textStyle:y}}),h.a.createElement(g["Guide"],null,h.a.createElement(C,{start:[3,.905],end:[3,.85],lineStyle:{stroke:d,lineDash:void 0,lineWidth:2}}),h.a.createElement(C,{start:[5,.905],end:[5,.85],lineStyle:{stroke:d,lineDash:void 0,lineWidth:3}}),h.a.createElement(C,{start:[7,.905],end:[7,.85],lineStyle:{stroke:d,lineDash:void 0,lineWidth:3}}),h.a.createElement(_,{start:[0,.965],end:[10,.965],style:{stroke:u,lineWidth:10}}),h.a.createElement(_,{start:[0,.965],end:[f[0].value,.965],style:{stroke:d,lineWidth:10}}),h.a.createElement(k,{position:["50%","95%"],html:v()})),h.a.createElement(g["Geom"],{line:!1,type:"point",position:"value*1",shape:"pointer",color:d,active:!1}))},j=w()(S),M=a("Dqrt"),F=a("Vy8S"),z=a.n(F),A=function(e){var t=e.height,a=void 0===t?1:t,n=e.data,r=void 0===n?[]:n,i=e.forceFit,o=void 0===i||i,l=e.color,c=void 0===l?"rgba(24, 144, 255, 0.2)":l,s=e.borderColor,d=void 0===s?"#1089ff":s,m=e.scale,u=void 0===m?{x:{},y:{}}:m,p=e.borderWidth,f=void 0===p?2:p,v=e.line,E=e.xAxis,b=e.yAxis,x=e.animate,w=void 0===x||x,_=[36,5,30,5],k={x:Object(M["a"])({type:"cat",range:[0,1]},u.x),y:Object(M["a"])({min:0},u.y)},C=["x*y",function(e,t){return{name:e,value:t}}],O=a+54;return h.a.createElement("div",{className:z.a.miniChart,style:{height:a}},h.a.createElement("div",{className:z.a.chartContent},a>0&&h.a.createElement(g["Chart"],{animate:w,scale:k,height:O,forceFit:o,data:r,padding:_},h.a.createElement(g["Axis"],Object(y["a"])({key:"axis-x",name:"x",label:null,line:null,tickLine:null,grid:null},E)),h.a.createElement(g["Axis"],Object(y["a"])({key:"axis-y",name:"y",label:null,line:null,tickLine:null,grid:null},b)),h.a.createElement(g["Tooltip"],{showTitle:!1,crosshairs:!1}),h.a.createElement(g["Geom"],{type:"area",position:"x*y",color:c,tooltip:C,shape:"smooth",style:{fillOpacity:1}}),v?h.a.createElement(g["Geom"],{type:"line",position:"x*y",shape:"smooth",color:d,size:f,tooltip:!1}):h.a.createElement("span",{style:{display:"none"}}))))},L=w()(A),W=(a("F23Y"),a("6LXr")),N=a("cOqA"),T=a("4iym"),D=a.n(T),R=a("TX3P"),q=a.n(R),B=a("ZvQp"),G=a.n(B),P=a("iczh"),I=a.n(P),H=a("0gy7"),U=a.n(H),X=function(e){Object(c["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;Object(o["a"])(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),e.state={legendData:[],legendBlock:!1},e.chart=void 0,e.root=void 0,e.requestRef=0,e.resize=q()((function(){var t=e.props.hasLegend,a=e.state.legendBlock;t&&e.root?e.root&&e.root.parentNode&&e.root.parentNode.clientWidth<=380?a||e.setState({legendBlock:!0}):a&&e.setState({legendBlock:!1}):window.removeEventListener("resize",e.resize)}),300),e.getG2Instance=function(t){e.chart=t,requestAnimationFrame((function(){e.getLegendData(),e.resize()}))},e.getLegendData=function(){if(e.chart){var t=e.chart.getAllGeoms()[0];if(t){var a=t.get("dataArray")||[],n=a.map((function(e){var t=e[0]._origin;return t.color=e[0].color,t.checked=!0,t}));e.setState({legendData:n})}}},e.handleRoot=function(t){e.root=t},e.handleLegendClick=function(t,a){var n=t;n.checked=!n.checked;var r=e.state.legendData;r[a]=n;var i=r.filter((function(e){return e.checked})).map((function(e){return e.x}));e.chart&&e.chart.filter("x",(function(e){return i.indexOf("".concat(e))>-1})),e.setState({legendData:r})},e}return Object(l["a"])(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){e.requestRef=requestAnimationFrame((function(){return e.resize()}))}),{passive:!0})}},{key:"componentDidUpdate",value:function(e){var t=this.props.data;t!==e.data&&this.getLegendData()}},{key:"componentWillUnmount",value:function(){this.requestRef&&window.cancelAnimationFrame(this.requestRef),window.removeEventListener("resize",this.resize),this.resize&&this.resize.cancel()}},{key:"render",value:function(){var e,t,a=this,n=this.props,r=n.valueFormat,i=n.subTitle,o=n.total,l=n.hasLegend,c=void 0!==l&&l,s=n.className,d=n.style,m=n.height,u=void 0===m?0:m,p=n.forceFit,f=void 0===p||p,v=n.percent,y=n.color,E=n.inner,b=void 0===E?.75:E,x=n.animate,w=void 0===x||x,_=n.colors,k=n.lineWidth,C=void 0===k?1:k,O=this.state,S=O.legendData,j=O.legendBlock,M=I()(U.a.pie,s,(e={},Object(N["a"])(e,U.a.hasLegend,!!c),Object(N["a"])(e,U.a.legendBlock,j),e)),F=this.props,z=F.data,A=F.selected,L=void 0===A||A,D=F.tooltip,R=void 0===D||D,q=z||[],B=L,P=R,H=_;q=q||[],B=B||!0,P=P||!0;var X={x:{type:"cat",range:[0,1]},y:{min:0}};(v||0===v)&&(B=!1,P=!1,t=function(e){return"\u5360\u6bd4"===e?y||"rgba(24, 144, 255, 0.85)":"#F0F2F5"},q=[{x:"\u5360\u6bd4",y:parseFloat("".concat(v))},{x:"\u53cd\u6bd4",y:100-parseFloat("".concat(v))}]);var Z=["x*percent",function(e,t){return{name:e,value:"".concat((100*t).toFixed(2),"%")}}],V=[12,0,12,0],J=new T["DataView"];return J.source(q).transform({type:"percent",field:"y",dimension:"x",as:"percent"}),h.a.createElement("div",{ref:this.handleRoot,className:M,style:d},h.a.createElement(G.a,{maxFontSize:25},h.a.createElement("div",{className:U.a.chart},h.a.createElement(g["Chart"],{scale:X,height:u,forceFit:f,data:J,padding:V,animate:w,onGetG2Instance:this.getG2Instance},!!P&&h.a.createElement(g["Tooltip"],{showTitle:!1}),h.a.createElement(g["Coord"],{type:"theta",innerRadius:b}),h.a.createElement(g["Geom"],{style:{lineWidth:C,stroke:"#fff"},tooltip:P?Z:void 0,type:"intervalStack",position:"percent",color:["x",v||0===v?t:H],selected:B})),(i||o)&&h.a.createElement("div",{className:U.a.total},i&&h.a.createElement("h4",{className:"pie-sub-title"},i),o&&h.a.createElement("div",{className:"pie-stat"},"function"===typeof o?o():o)))),c&&h.a.createElement("ul",{className:U.a.legend},S.map((function(e,t){return h.a.createElement("li",{key:e.x,onClick:function(){return a.handleLegendClick(e,t)}},h.a.createElement("span",{className:U.a.dot,style:{backgroundColor:e.checked?e.color:"#aaa"}}),h.a.createElement("span",{className:U.a.legendTitle},e.x),h.a.createElement(W["a"],{type:"vertical"}),h.a.createElement("span",{className:U.a.percent},"".concat((Number.isNaN(e.percent)?0:100*e.percent).toFixed(2),"%")),h.a.createElement("span",{className:U.a.value},r?r(e.y):e.y))}))))}}]),a}(u["Component"]),Z=w()(X),V=a("dyzW"),J=a("EXbP"),Y=a.n(J),Q="https://gw.alipayobjects.com/zos/rmsportal/gWyeGLCdFFRavBGIDzWk.png",K=function(e){Object(c["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;Object(o["a"])(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),e.state={dv:null,height:0,width:0},e.requestRef=0,e.isUnmount=!1,e.root=void 0,e.imageMask=void 0,e.resize=function(){e.requestRef=requestAnimationFrame((function(){e.renderChart(e.props)}))},e.saveRootRef=function(t){e.root=t},e.initTagCloud=function(){function e(e){return Object(M["a"])(Object(M["a"])({},e.style),{},{fillOpacity:e.opacity,fontSize:e.origin._origin.size,rotate:e.origin._origin.rotate,text:e.origin._origin.text,textAlign:"center",fontFamily:e.origin._origin.font,fill:e.color,textBaseline:"Alphabetic"})}g["Shape"].registerShape("point","cloud",{drawShape:function(t,a){var n=e(t);return a.addShape("text",{attrs:Object(M["a"])(Object(M["a"])({},n),{},{x:t.x,y:t.y})})}})},e.renderChart=q()((function(t){var a=t||e.props,n=a.data,r=a.height;if(!(n.length<1)&&e.root){var i=r,o=e.root.offsetWidth,l=function(){var t=(new D.a.View).source(n),a=t.range("value"),r=Object(V["a"])(a,2),l=r[0],c=r[1];t.transform({type:"tag-cloud",fields:["name","value"],imageMask:e.imageMask,font:"Verdana",size:[o,i],padding:0,timeInterval:5e3,rotate:function(){return 0},fontSize:function(e){var t=Math.pow((e.value-l)/(c-l),2);return 12.5*t+5}}),e.isUnmount||e.setState({dv:t,width:o,height:i})};e.imageMask?l():(e.imageMask=new Image,e.imageMask.crossOrigin="",e.imageMask.src=Q,e.imageMask.onload=l)}}),200),e}return Object(l["a"])(a,[{key:"componentDidMount",value:function(){var e=this;requestAnimationFrame((function(){e.initTagCloud(),e.renderChart(e.props)})),window.addEventListener("resize",this.resize,{passive:!0})}},{key:"componentDidUpdate",value:function(e){var t=this.props.data;e&&JSON.stringify(e.data)!==JSON.stringify(t)&&this.renderChart(this.props)}},{key:"componentWillUnmount",value:function(){this.isUnmount=!0,window.cancelAnimationFrame(this.requestRef),window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.height,n=this.state,r=n.dv,i=n.width,o=n.height;return h.a.createElement("div",{className:I()(Y.a.tagCloud,t),style:{width:"100%",height:a},ref:this.saveRootRef},r&&h.a.createElement(g["Chart"],{width:i,height:o,data:r,padding:0,scale:{x:{nice:!1},y:{nice:!1}}},h.a.createElement(g["Tooltip"],{showTitle:!1}),h.a.createElement(g["Coord"],{reflect:"y"}),h.a.createElement(g["Geom"],{type:"point",position:"x*y",color:"text",shape:"cloud",tooltip:["text*value",function(e,t){return{name:e,value:t}}]})))}}]),a}(u["Component"]),$=w()(K),ee=a("muE+"),te=a.n(ee),ae=function(e){Object(c["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;Object(o["a"])(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),e.state={radio:1},e.timer=0,e.root=null,e.node=null,e.resize=function(){if(e.root){var t=e.props.height,a=void 0===t?1:t,n=e.root.parentNode.offsetWidth;e.setState({radio:n<a?n/a:1})}},e}return Object(l["a"])(a,[{key:"componentDidMount",value:function(){var e=this;this.renderChart(),this.resize(),window.addEventListener("resize",(function(){requestAnimationFrame((function(){return e.resize()}))}),{passive:!0})}},{key:"componentDidUpdate",value:function(e){var t=this.props.percent;e.percent!==t&&this.renderChart("update")}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.timer),this.node&&(this.node.innerHTML=""),window.removeEventListener("resize",this.resize)}},{key:"renderChart",value:function(e){var t=this.props,a=t.percent,n=t.color,r=void 0===n?"#1890FF":n,i=a/100,o=this;if(cancelAnimationFrame(this.timer),this.node&&(0===i||i)){var l=this.node,c=l.getContext("2d");if(c){var s=l.width,d=l.height,m=s/2,u=2,h=m-u;c.beginPath(),c.lineWidth=2*u;for(var p=s-u,f=p/8,v=.2,g=v,y=u,E=0,b=0,x=.005,w=[],_=m-u,k=-Math.PI/2,C=!0,O=k;O<k+2*Math.PI;O+=1/(8*Math.PI))w.push([m+_*Math.cos(O),m+_*Math.sin(O)]);var S=w.shift();c.strokeStyle=r,c.moveTo(S[0],S[1]),M()}}function j(){if(c){c.beginPath(),c.save();for(var e=[],t=y;t<=y+p;t+=20/p){var a=E+(y+t)/f,n=Math.sin(a)*g,i=t,o=2*h*(1-b)+(m-h)-f*n;c.lineTo(i,o),e.push([i,o])}var l=e.shift();c.lineTo(y+p,d),c.lineTo(y,d),c.lineTo(l[0],l[1]);var s=c.createLinearGradient(0,0,0,d);s.addColorStop(0,"#ffffff"),s.addColorStop(1,r),c.fillStyle=s,c.fill(),c.restore()}}function M(){if(c){if(c.clearRect(0,0,s,d),C&&"update"!==e)if(w.length){var t=w.shift();c.lineTo(t[0],t[1]),c.stroke()}else C=!1,c.lineTo(S[0],S[1]),c.stroke(),w=[],c.globalCompositeOperation="destination-over",c.beginPath(),c.lineWidth=u,c.arc(m,m,_,0,2*Math.PI,!0),c.beginPath(),c.save(),c.arc(m,m,m-3*u,0,2*Math.PI,!0),c.restore(),c.clip(),c.fillStyle=r;else{if(i>=.85){if(g>v/4){var a=.01*v;g-=a}}else if(i<=.1){if(g<1.5*v){var n=.01*v;g+=n}}else{if(g<=v){var l=.01*v;g+=l}if(g>=v){var h=.01*v;g-=h}}i-b>0&&(b+=x),i-b<0&&(b-=x),E+=.07,j()}o.timer=requestAnimationFrame(M)}}}},{key:"render",value:function(){var e=this,t=this.state.radio,a=this.props,n=a.percent,r=a.title,i=a.height,o=void 0===i?1:i;return h.a.createElement("div",{className:te.a.waterWave,ref:function(t){return e.root=t},style:{transform:"scale(".concat(t,")")}},h.a.createElement("div",{style:{width:o,height:o,overflow:"hidden"}},h.a.createElement("canvas",{className:te.a.waterWaveCanvasWrapper,ref:function(t){return e.node=t},width:2*o,height:2*o})),h.a.createElement("div",{className:te.a.text,style:{width:o}},r&&h.a.createElement("span",null,r),h.a.createElement("h4",null,n,"%")))}}]),a}(u["Component"]),ne=w()(ae),re=(a("YX7Y"),a("c9BW")),ie=a("gl5a"),oe=a.n(ie),le=a("rpo5"),ce=a("FTih"),se=["#eff3ff","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],de=function(e){Object(c["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;Object(o["a"])(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),e.state={data:null,grid:null,loading:!1},e}return Object(l["a"])(a,[{key:"componentDidMount",value:function(){var e=Object(le["a"])(oe.a.mark((function e(){var t,a,n,r;return oe.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch("https://gw.alipayobjects.com/os/bmw-prod/c5dba875-b6ea-4e88-b778-66a862906c93.json").then((function(e){return e.json()})),fetch("https://gw.alipayobjects.com/os/bmw-prod/8990e8b4-c58e-419b-afb9-8ea3daff2dd1.json").then((function(e){return e.json()}))]);case 2:t=e.sent,a=Object(V["a"])(t,2),n=a[0],r=a[1],this.setState({data:n,grid:r,loading:!0});case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.grid,n=e.loading;return!1===n?u["createElement"](re["a"],null):u["createElement"](ce["b"],{map:{center:[110.19382669582967,50.258134],pitch:0,style:"blank",zoom:1},style:{position:"relative",width:"100%",height:"452px"}},a&&u["createElement"](ce["a"],{key:"1",source:{data:a,transforms:[{type:"hexagon",size:8e5,field:"capacity",method:"sum"}]},color:{values:"#ddd"},shape:{values:"hexagon"},style:{coverage:.7,opacity:.8}}),t&&[u["createElement"](ce["c"],{key:"2",options:{autoFit:!0},source:{data:t},scale:{values:{color:{field:"cum_conf",type:"quantile"},size:{field:"cum_conf",type:"log"}}},color:{field:"cum_conf",values:se},shape:{values:"circle"},active:{option:{color:"#0c2c84"}},size:{field:"cum_conf",values:[0,30]},style:{opacity:.8}}),u["createElement"](ce["c"],{key:"5",source:{data:t},color:{values:"#fff"},shape:{field:"Short_Name_ZH",values:"text"},filter:{field:"cum_conf",values:function(e){return e>2e3}},size:{values:12},style:{opacity:1,strokeOpacity:1,strokeWidth:0}})])}}]),a}(u["Component"]),me=a("xS0X"),ue=a("xBsX"),he=a.n(ue);function pe(e){return 1*e<10?"0".concat(e):e}function fe(){for(var e=[],t=0;t<24;t+=1)e.push({x:"".concat(pe(t),":00"),y:Math.floor(200*Math.random())+50*t});return e}var ve=function(e){Object(c["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;Object(o["a"])(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),e.state={activeData:fe()},e.timer=void 0,e.requestRef=void 0,e.loopData=function(){e.requestRef=requestAnimationFrame((function(){e.timer=window.setTimeout((function(){e.setState({activeData:fe()},(function(){e.loopData()}))}),1e3)}))},e}return Object(l["a"])(a,[{key:"componentDidMount",value:function(){this.loopData()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),this.requestRef&&cancelAnimationFrame(this.requestRef)}},{key:"render",value:function(){var e=this.state.activeData,t=void 0===e?[]:e;return h.a.createElement("div",{className:he.a.activeChart},h.a.createElement(d["a"],{title:"\u76ee\u6807\u8bc4\u4f30",value:"\u6709\u671b\u8fbe\u5230\u9884\u671f"}),h.a.createElement("div",{style:{marginTop:32}},h.a.createElement(L,{animate:!1,line:!0,borderWidth:2,height:84,scale:{y:{tickCount:3}},yAxis:{tickLine:void 0,label:void 0,title:void 0,line:void 0},data:t})),t&&h.a.createElement("div",null,h.a.createElement("div",{className:he.a.activeChartGrid},h.a.createElement("p",null,Object(me["a"])(t).sort()[t.length-1].y+200," \u4ebf\u5143"),h.a.createElement("p",null,Object(me["a"])(t).sort()[Math.floor(t.length/2)].y," \u4ebf\u5143")),h.a.createElement("div",{className:he.a.dashedLine},h.a.createElement("div",{className:he.a.line})),h.a.createElement("div",{className:he.a.dashedLine},h.a.createElement("div",{className:he.a.line}))),t&&h.a.createElement("div",{className:he.a.activeChartLegend},h.a.createElement("span",null,"00:00"),h.a.createElement("span",null,t[Math.floor(t.length/2)].x),h.a.createElement("span",null,t[t.length-1].x)))}}]),a}(u["Component"]),ge=a("nc8+"),ye=a.n(ge),Ee=d["a"].Countdown,be=Date.now()+1728e5+3e4,xe=function(e){Object(c["a"])(a,e);var t=Object(s["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return Object(l["a"])(a,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"dashboardMonitorTwo/fetchTags"})}},{key:"render",value:function(){var e=this.props,t=e.dashboardMonitorTwo,a=e.loading,o=t.tags;return h.a.createElement(p["b"],null,h.a.createElement(h.a.Fragment,null,h.a.createElement(r["a"],{gutter:24},h.a.createElement(i["a"],{xl:18,lg:24,md:24,sm:24,xs:24,style:{marginBottom:24}},h.a.createElement(n["a"],{title:h.a.createElement(m["a"],{id:"dashboardmonitortwo.monitor.trading-activity",defaultMessage:"Real-Time Trading Activity"}),bordered:!1},h.a.createElement(r["a"],null,h.a.createElement(i["a"],{md:6,sm:12,xs:24},h.a.createElement(d["a"],{title:h.a.createElement(m["a"],{id:"dashboardmonitortwo.monitor.total-transactions",defaultMessage:"Total transactions today"}),suffix:"\u5143",value:v()(124543233).format("0,0")})),h.a.createElement(i["a"],{md:6,sm:12,xs:24},h.a.createElement(d["a"],{title:h.a.createElement(m["a"],{id:"dashboardmonitortwo.monitor.sales-target",defaultMessage:"Sales target completion rate"}),value:"92%"})),h.a.createElement(i["a"],{md:6,sm:12,xs:24},h.a.createElement(Ee,{title:h.a.createElement(m["a"],{id:"dashboardmonitortwo.monitor.remaining-time",defaultMessage:"Remaining time of activity"}),value:be,format:"HH:mm:ss:SSS"})),h.a.createElement(i["a"],{md:6,sm:12,xs:24},h.a.createElement(d["a"],{title:h.a.createElement(m["a"],{id:"dashboardmonitortwo.monitor.total-transactions-per-second",defaultMessage:"Total transactions per second"}),suffix:"\u5143",value:v()(234).format("0,0")}))),h.a.createElement("div",{className:ye.a.mapChart},h.a.createElement(de,null)))),h.a.createElement(i["a"],{xl:6,lg:24,md:24,sm:24,xs:24},h.a.createElement(n["a"],{title:h.a.createElement(m["a"],{id:"dashboardmonitortwo.monitor.activity-forecast",defaultMessage:"Activity forecast"}),style:{marginBottom:24},bordered:!1},h.a.createElement(ve,null)),h.a.createElement(n["a"],{title:h.a.createElement(m["a"],{id:"dashboardmonitortwo.monitor.efficiency",defaultMessage:"Efficiency"}),style:{marginBottom:24},bodyStyle:{textAlign:"center"},bordered:!1},h.a.createElement(j,{title:Object(m["c"])({id:"dashboardmonitortwo.monitor.ratio",defaultMessage:"Ratio"}),height:180,percent:87})))),h.a.createElement(r["a"],{gutter:24},h.a.createElement(i["a"],{xl:12,lg:24,sm:24,xs:24,style:{marginBottom:24}},h.a.createElement(n["a"],{title:h.a.createElement(m["a"],{id:"dashboardmonitortwo.monitor.proportion-per-category",defaultMessage:"Proportion Per Category"}),bordered:!1,className:ye.a.pieCard},h.a.createElement(r["a"],{style:{padding:"16px 0"}},h.a.createElement(i["a"],{span:8},h.a.createElement(Z,{animate:!1,percent:28,title:h.a.createElement(m["a"],{id:"dashboardmonitortwo.monitor.fast-food",defaultMessage:"Fast food"}),total:"28%",height:128,lineWidth:2})),h.a.createElement(i["a"],{span:8},h.a.createElement(Z,{animate:!1,color:"#5DDECF",percent:22,title:h.a.createElement(m["a"],{id:"dashboardmonitortwo.monitor.western-food",defaultMessage:"Western food"}),total:"22%",height:128,lineWidth:2})),h.a.createElement(i["a"],{span:8},h.a.createElement(Z,{animate:!1,color:"#2FC25B",percent:32,title:h.a.createElement(m["a"],{id:"dashboardmonitortwo.monitor.hot-pot",defaultMessage:"Hot pot"}),total:"32%",height:128,lineWidth:2}))))),h.a.createElement(i["a"],{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24}},h.a.createElement(n["a"],{title:h.a.createElement(m["a"],{id:"dashboardmonitortwo.monitor.popular-searches",defaultMessage:"Popular Searches"}),loading:a,bordered:!1,bodyStyle:{overflow:"hidden"}},h.a.createElement($,{data:o||[],height:161}))),h.a.createElement(i["a"],{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24}},h.a.createElement(n["a"],{title:h.a.createElement(m["a"],{id:"dashboardmonitortwo.monitor.resource-surplus",defaultMessage:"Resource Surplus"}),bodyStyle:{textAlign:"center",fontSize:0},bordered:!1},h.a.createElement(ne,{height:161,title:h.a.createElement(m["a"],{id:"dashboardmonitortwo.monitor.fund-surplus",defaultMessage:"Fund Surplus"}),percent:34}))))))}}]),a}(u["Component"]);t["default"]=Object(m["b"])((function(e){var t=e.dashboardMonitorTwo,a=e.loading;return{dashboardMonitorTwo:t,loading:a.models.dashboardMonitorTwo}}))(xe)},xBsX:function(e,t,a){e.exports={activeChart:"activeChart___-HZ1f",activeChartGrid:"activeChartGrid___10wI2",activeChartLegend:"activeChartLegend___30woS",dashedLine:"dashedLine___2cL7p",line:"line___bBiu9"}}}]);