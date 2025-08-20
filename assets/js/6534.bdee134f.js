"use strict";(self.webpackChunkkenar_docs=self.webpackChunkkenar_docs||[]).push([["6534"],{57684:function(e,t,a){function i(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}a.d(t,{A:()=>i}),(0,a(85587).eW)(i,"populateCommonDb")},18504:function(e,t,a){a.d(t,{diagram:()=>k});var i=a(57684),l=a(42901),r=a(51559),n=a(85587),s=a(3194),c=a(27818),o=n.vZ.pie,p={sections:new Map,showData:!1,config:o},d=p.sections,u=p.showData,g=structuredClone(o),f=(0,n.eW)(()=>structuredClone(g),"getConfig"),h=(0,n.eW)(()=>{d=new Map,u=p.showData,(0,n.ZH)()},"clear"),x=(0,n.eW)(({label:e,value:t})=>{d.has(e)||(d.set(e,t),n.cM.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),m=(0,n.eW)(()=>d,"getSections"),w=(0,n.eW)(e=>{u=e},"setShowData"),S=(0,n.eW)(()=>u,"getShowData"),T={getConfig:f,clear:h,setDiagramTitle:n.g2,getDiagramTitle:n.Kr,setAccTitle:n.GN,getAccTitle:n.eu,setAccDescription:n.U$,getAccDescription:n.Mx,addSection:x,getSections:m,setShowData:w,getShowData:S},$=(0,n.eW)((e,t)=>{(0,i.A)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),y={parse:(0,n.eW)(async e=>{let t=await (0,s.Qc)("pie",e);n.cM.debug(t),$(t,T)},"parse")},D=(0,n.eW)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),C=(0,n.eW)(e=>{let t=[...e.entries()].map(e=>({label:e[0],value:e[1]})).sort((e,t)=>t.value-e.value);return(0,c.ve8)().value(e=>e.value)(t)},"createPieArcs"),k={parser:y,db:T,renderer:{draw:(0,n.eW)((e,t,a,i)=>{n.cM.debug("rendering pie chart\n"+e);let s=i.db,o=(0,n.nV)(),p=(0,l.Rb)(s.getConfig(),o.pie),d=(0,r.P)(t),u=d.append("g");u.attr("transform","translate(225,225)");let{themeVariables:g}=o,[f]=(0,l.VG)(g.pieOuterStrokeWidth);f??=2;let h=p.textPosition,x=(0,c.Nb1)().innerRadius(0).outerRadius(185),m=(0,c.Nb1)().innerRadius(185*h).outerRadius(185*h);u.append("circle").attr("cx",0).attr("cy",0).attr("r",185+f/2).attr("class","pieOuterCircle");let w=s.getSections(),S=C(w),T=[g.pie1,g.pie2,g.pie3,g.pie4,g.pie5,g.pie6,g.pie7,g.pie8,g.pie9,g.pie10,g.pie11,g.pie12],$=(0,c.PKp)(T);u.selectAll("mySlices").data(S).enter().append("path").attr("d",x).attr("fill",e=>$(e.data.label)).attr("class","pieCircle");let y=0;w.forEach(e=>{y+=e}),u.selectAll("mySlices").data(S).enter().append("text").text(e=>(e.data.value/y*100).toFixed(0)+"%").attr("transform",e=>"translate("+m.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),u.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");let D=u.selectAll(".legend").data($.domain()).enter().append("g").attr("class","legend").attr("transform",(e,t)=>"translate(216,"+(22*t-22*$.domain().length/2)+")");D.append("rect").attr("width",18).attr("height",18).style("fill",$).style("stroke",$),D.data(S).append("text").attr("x",22).attr("y",14).text(e=>{let{label:t,value:a}=e.data;return s.getShowData()?`${t} [${a}]`:t});let k=512+Math.max(...D.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0));d.attr("viewBox",`0 0 ${k} 450`),(0,n.v2)(d,450,k,p.useMaxWidth)},"draw")},styles:D}}}]);