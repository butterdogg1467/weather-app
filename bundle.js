(()=>{"use strict";function e(e){const t=e.split("-"),o=parseInt(t[0]),r=parseInt(t[1]),c=parseInt(t[2]);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][new Date(o,r-1,c).getMonth()]} ${c}, ${o}`}function t(e){return e.split(" ")[1]}document.querySelector("#search"),document.querySelector("#ftoc");let o=document.querySelector(".cityname"),r=document.querySelector(".date"),c=document.querySelector(".time");const n=document.querySelector(".condition"),a=document.querySelector(".conditionicon"),u=document.querySelector(".temp"),d=document.querySelector(".feelslike"),s=document.querySelector(".wind"),l=document.querySelector(".gust");let y=document.querySelector(".currentgroup"),f=document.querySelector("#f"),i=document.querySelector("#c"),m=document.querySelector("#search");m.value;const h=document.querySelector("#date1"),p=document.querySelector("#avgtemp1"),C=document.querySelector("#forecasticon1"),x=document.querySelector("#date2"),b=document.querySelector("#avgtemp2"),q=document.querySelector("#forecasticon2"),S=document.querySelector("#date3"),k=document.querySelector("#avgtemp3"),_=document.querySelector("#forecasticon3");let g=document.querySelector(".forecastgroup1"),R=document.querySelector(".forecastgroup2"),w=document.querySelector(".forecastgroup3"),F=document.querySelector("#f"),v=document.querySelector("#c");document.querySelector(".forecastgroups");let B=document.querySelector("#f"),L=document.querySelector("#c"),E=document.querySelector(".hourlyforecast"),j=document.querySelector("#hour0"),T=document.querySelector("#hour0icon"),D=document.querySelector("#hour0date"),M=document.querySelector("#hour0temp"),G=document.querySelector("#hour1"),I=document.querySelector("#hour1icon"),J=document.querySelector("#hour1date"),W=document.querySelector("#hour1temp"),$=document.querySelector("#hour2"),A=document.querySelector("#hour2icon"),O=document.querySelector("#hour2date"),N=document.querySelector("#hour2temp"),z=document.querySelector("#hour3"),H=document.querySelector("#hour3icon"),K=document.querySelector("#hour3date"),P=document.querySelector("#hour3temp"),Q=document.querySelector("#hour4"),U=document.querySelector("#hour4icon"),V=document.querySelector("#hour4date"),X=document.querySelector("#hour4temp"),Y=document.querySelector("#hour5"),Z=document.querySelector("#hour5icon"),ee=document.querySelector("#hour5date"),te=document.querySelector("#hour5temp"),oe=document.querySelector("#hour6"),re=document.querySelector("#hour6icon"),ce=document.querySelector("#hour6date"),ne=document.querySelector("#hour6temp"),ae=document.querySelector("#hour7"),ue=document.querySelector("#hour7icon"),de=document.querySelector("#hour7date"),se=document.querySelector("#hour7temp"),le=document.querySelector("#hour8"),ye=document.querySelector("#hour8icon"),fe=document.querySelector("#hour8date"),ie=document.querySelector("#hour8temp"),me=document.querySelector("#hour9"),he=document.querySelector("#hour9icon"),pe=document.querySelector("#hour9date"),Ce=document.querySelector("#hour9temp"),xe=document.querySelector("#hour10"),be=document.querySelector("#hour10icon"),qe=document.querySelector("#hour10date"),Se=document.querySelector("#hour10temp"),ke=document.querySelector("#hour11"),_e=document.querySelector("#hour11icon"),ge=document.querySelector("#hour11date"),Re=document.querySelector("#hour11temp"),we=document.querySelector("#hour12"),Fe=document.querySelector("#hour12icon"),ve=document.querySelector("#hour12date"),Be=document.querySelector("#hour12temp"),Le=document.querySelector("#hour13"),Ee=document.querySelector("#hour13icon"),je=document.querySelector("#hour13date"),Te=document.querySelector("#hour13temp"),De=document.querySelector("#hour14"),Me=document.querySelector("#hour14icon"),Ge=document.querySelector("#hour14date"),Ie=document.querySelector("#hour14temp"),Je=document.querySelector("#hour15"),We=document.querySelector("#hour15icon"),$e=document.querySelector("#hour15date"),Ae=document.querySelector("#hour15temp"),Oe=document.querySelector("#hour16"),Ne=document.querySelector("#hour16icon"),ze=document.querySelector("#hour16date"),He=document.querySelector("#hour16temp"),Ke=document.querySelector("#hour17"),Pe=document.querySelector("#hour17icon"),Qe=document.querySelector("#hour17date"),Ue=document.querySelector("#hour17temp"),Ve=document.querySelector("#hour18"),Xe=document.querySelector("#hour18icon"),Ye=document.querySelector("#hour18date"),Ze=document.querySelector("#hour18temp"),et=document.querySelector("#hour19"),tt=document.querySelector("#hour19icon"),ot=document.querySelector("#hour19date"),rt=document.querySelector("#hour19temp"),ct=document.querySelector("#hour20"),nt=document.querySelector("#hour20icon"),at=document.querySelector("#hour20date"),ut=document.querySelector("#hour20temp"),dt=document.querySelector("#hour21"),st=document.querySelector("#hour21icon"),lt=document.querySelector("#hour21date"),yt=document.querySelector("#hour21temp"),ft=document.querySelector("#hour22"),it=document.querySelector("#hour22icon"),mt=document.querySelector("#hour22date"),ht=document.querySelector("#hour22temp"),pt=document.querySelector("#hour23"),Ct=document.querySelector("#hour23icon"),xt=document.querySelector("#hour23date"),bt=document.querySelector("#hour23temp");document.addEventListener("DOMContentLoaded",(()=>{let qt=document.querySelector("#searchbutton");fetch("http://api.weatherapi.com/v1/current.json?key=42830ef394df4aba9fc235453242906&days=3&q=Toronto&aqi=no").then((function(e){e.json(),console.log("Success!")})).catch((function(e){let t=e.json();console.log("Error!:"+t)})),qt.addEventListener("click",(function(){fetch("http://api.weatherapi.com/v1/current.json?key=42830ef394df4aba9fc235453242906&q="+m.value+"&days=3&aqi=no").then((function(e){return e.json()})).then((function(m){console.log(m),o.textContent=m.location.name+", "+m.location.region+", "+m.location.country,r.textContent="Date: "+e(m.location.localtime),c.textContent="Time: "+t(m.location.localtime),n.textContent="Condition: "+m.current.condition.text,a.src=m.current.condition.icon,y.style.backgroundColor="white",y.style.border="solid black 1px",u.textContent="Temperature: "+m.current.temp_c+"°C",d.textContent="Feels Like: "+m.current.feelslike_c+"°C",s.textContent="Wind: "+m.current.wind_mph+" k/ph",l.textContent="Gust: "+m.current.gust_mph+" k/ph",f.addEventListener("click",(()=>{u.textContent="Temperature: "+m.current.temp_f+"°F",d.textContent="Feels Like: "+m.current.feelslike_f+"°F",s.textContent="Wind: "+m.current.wind_kph+" m/ph",l.textContent="Gust: "+m.current.gust_kph+" m/ph"})),i.addEventListener("click",(()=>{u.textContent="Temperature: "+m.current.temp_c+"°C",d.textContent="Feels Like: "+m.current.feelslike_c+"°C",s.textContent="Wind: "+m.current.wind_mph+" k/ph",l.textContent="Gust: "+m.current.gust_mph+" k/ph"}))})).catch((function(e){console.log(e)})),fetch("http://api.weatherapi.com/v1/forecast.json?key=42830ef394df4aba9fc235453242906&q="+search.value+"&days=3&aqi=no").then((function(e){return e.json()})).then((function(t){console.log(t),document.body.style.backgroundColor="#87CEEB",h.textContent=e(t.forecast.forecastday[0].date),p.textContent=t.forecast.forecastday[0].day.avgtemp_c+"°C",C.src=t.forecast.forecastday[0].day.condition.icon,g.style.border="solid black 1px",g.style.backgroundColor="white",x.textContent=e(t.forecast.forecastday[1].date),b.textContent=t.forecast.forecastday[1].day.avgtemp_c+"°C",q.src=t.forecast.forecastday[1].day.condition.icon,R.style.border="solid black 1px",R.style.backgroundColor="white",S.textContent=e(t.forecast.forecastday[2].date),k.textContent=t.forecast.forecastday[2].day.avgtemp_c+"°C",_.src=t.forecast.forecastday[2].day.condition.icon,w.style.border="solid black 1px",w.style.backgroundColor="white",F.addEventListener("click",(()=>{p.textContent=t.forecast.forecastday[0].day.avgtemp_f+"°F",b.textContent=t.forecast.forecastday[1].day.avgtemp_f+"°F",k.textContent=t.forecast.forecastday[2].day.avgtemp_f+"°F"})),v.addEventListener("click",(()=>{p.textContent=t.forecast.forecastday[0].day.avgtemp_c+"°C",b.textContent=t.forecast.forecastday[1].day.avgtemp_c+"°C",k.textContent=t.forecast.forecastday[2].day.avgtemp_c+"°C"}))})).catch((function(e){console.log(e)})),fetch("http://api.weatherapi.com/v1/forecast.json?key=42830ef394df4aba9fc235453242906&q="+search.value+"&aqi=no").then((function(e){return e.json()})).then((function(e){console.log(e),E.style.border="solid black 0.5px",T.src=e.forecast.forecastday[0].hour[0].condition.icon,D.textContent=t(e.forecast.forecastday[0].hour[0].time),M.textContent=e.forecast.forecastday[0].hour[0].temp_c+"°C",I.src=e.forecast.forecastday[0].hour[1].condition.icon,J.textContent=t(e.forecast.forecastday[0].hour[1].time),W.textContent=e.forecast.forecastday[0].hour[1].temp_c+"°C",A.src=e.forecast.forecastday[0].hour[2].condition.icon,O.textContent=t(e.forecast.forecastday[0].hour[2].time),N.textContent=e.forecast.forecastday[0].hour[2].temp_c+"°C",H.src=e.forecast.forecastday[0].hour[3].condition.icon,K.textContent=t(e.forecast.forecastday[0].hour[3].time),P.textContent=e.forecast.forecastday[0].hour[3].temp_c+"°C",U.src=e.forecast.forecastday[0].hour[4].condition.icon,V.textContent=t(e.forecast.forecastday[0].hour[4].time),X.textContent=e.forecast.forecastday[0].hour[4].temp_c+"°C",Z.src=e.forecast.forecastday[0].hour[5].condition.icon,ee.textContent=t(e.forecast.forecastday[0].hour[5].time),te.textContent=e.forecast.forecastday[0].hour[5].temp_c+"°C",re.src=e.forecast.forecastday[0].hour[6].condition.icon,ce.textContent=t(e.forecast.forecastday[0].hour[6].time),ne.textContent=e.forecast.forecastday[0].hour[6].temp_c+"°C",ue.src=e.forecast.forecastday[0].hour[7].condition.icon,de.textContent=t(e.forecast.forecastday[0].hour[7].time),se.textContent=e.forecast.forecastday[0].hour[7].temp_c+"°C",ye.src=e.forecast.forecastday[0].hour[8].condition.icon,fe.textContent=t(e.forecast.forecastday[0].hour[8].time),ie.textContent=e.forecast.forecastday[0].hour[8].temp_c+"°C",he.src=e.forecast.forecastday[0].hour[9].condition.icon,pe.textContent=t(e.forecast.forecastday[0].hour[9].time),Ce.textContent=e.forecast.forecastday[0].hour[9].temp_c+"°C",be.src=e.forecast.forecastday[0].hour[10].condition.icon,qe.textContent=t(e.forecast.forecastday[0].hour[10].time),Se.textContent=e.forecast.forecastday[0].hour[10].temp_c+"°C",_e.src=e.forecast.forecastday[0].hour[11].condition.icon,ge.textContent=t(e.forecast.forecastday[0].hour[11].time),Re.textContent=e.forecast.forecastday[0].hour[11].temp_c+"°C",Fe.src=e.forecast.forecastday[0].hour[12].condition.icon,ve.textContent=t(e.forecast.forecastday[0].hour[12].time),Be.textContent=e.forecast.forecastday[0].hour[12].temp_c+"°C",Ee.src=e.forecast.forecastday[0].hour[13].condition.icon,je.textContent=t(e.forecast.forecastday[0].hour[13].time),Te.textContent=e.forecast.forecastday[0].hour[13].temp_c+"°C",Me.src=e.forecast.forecastday[0].hour[14].condition.icon,Ge.textContent=t(e.forecast.forecastday[0].hour[14].time),Ie.textContent=e.forecast.forecastday[0].hour[14].temp_c+"°C",We.src=e.forecast.forecastday[0].hour[15].condition.icon,$e.textContent=t(e.forecast.forecastday[0].hour[15].time),Ae.textContent=e.forecast.forecastday[0].hour[15].temp_c+"°C",Ne.src=e.forecast.forecastday[0].hour[16].condition.icon,ze.textContent=t(e.forecast.forecastday[0].hour[16].time),He.textContent=e.forecast.forecastday[0].hour[16].temp_c+"°C",Pe.src=e.forecast.forecastday[0].hour[17].condition.icon,Qe.textContent=t(e.forecast.forecastday[0].hour[17].time),Ue.textContent=e.forecast.forecastday[0].hour[17].temp_c+"°C",Xe.src=e.forecast.forecastday[0].hour[18].condition.icon,Ye.textContent=t(e.forecast.forecastday[0].hour[18].time),Ze.textContent=e.forecast.forecastday[0].hour[18].temp_c+"°C",tt.src=e.forecast.forecastday[0].hour[19].condition.icon,ot.textContent=t(e.forecast.forecastday[0].hour[19].time),rt.textContent=e.forecast.forecastday[0].hour[19].temp_c+"°C",nt.src=e.forecast.forecastday[0].hour[20].condition.icon,at.textContent=t(e.forecast.forecastday[0].hour[20].time),ut.textContent=e.forecast.forecastday[0].hour[20].temp_c+"°C",st.src=e.forecast.forecastday[0].hour[21].condition.icon,lt.textContent=t(e.forecast.forecastday[0].hour[21].time),yt.textContent=e.forecast.forecastday[0].hour[21].temp_c+"°C",it.src=e.forecast.forecastday[0].hour[22].condition.icon,mt.textContent=t(e.forecast.forecastday[0].hour[22].time),ht.textContent=e.forecast.forecastday[0].hour[22].temp_c+"°C",Ct.src=e.forecast.forecastday[0].hour[23].condition.icon,xt.textContent=t(e.forecast.forecastday[0].hour[23].time),bt.textContent=e.forecast.forecastday[0].hour[23].temp_c+"°C",j.style.borderRight="0.5px solid black",j.style.borderBottom="0.5px solid black",j.style.borderRadius="0px",j.style.backgroundColor="white",G.style.borderRight="0.5px solid black",G.style.borderBottom="0.5px solid black",G.style.borderRadius="0px",G.style.backgroundColor="white",$.style.borderRight="0.5px solid black",$.style.borderBottom="0.5px solid black",$.style.borderRadius="0px",$.style.backgroundColor="white",z.style.borderRight="0.5px solid black",z.style.borderBottom="0.5px solid black",z.style.borderRadius="0px",z.style.backgroundColor="white",Q.style.borderRight="0.5px solid black",Q.style.borderBottom="0.5px solid black",Q.style.borderRadius="0px",Q.style.backgroundColor="white",Y.style.borderRight="0.5px solid black",Y.style.borderBottom="0.5px solid black",Y.style.borderRadius="0px",Y.style.backgroundColor="white",oe.style.borderRight="0.5px solid black",oe.style.borderBottom="0.5px solid black",oe.style.borderRadius="0px",oe.style.backgroundColor="white",ae.style.borderRight="0.5px solid black",ae.style.borderBottom="0.5px solid black",ae.style.borderRadius="0px",ae.style.backgroundColor="white",le.style.borderRight="0.5px solid black",le.style.borderBottom="0.5px solid black",le.style.borderRadius="0px",le.style.backgroundColor="white",me.style.borderRight="0.5px solid black",me.style.borderBottom="0.5px solid black",me.style.borderRadius="0px",me.style.backgroundColor="white",xe.style.borderRight="0.5px solid black",xe.style.borderBottom="0.5px solid black",xe.style.borderRadius="0px",xe.style.backgroundColor="white",ke.style.borderRight="0.5px solid black",ke.style.borderBottom="0.5px solid black",ke.style.borderRadius="0px",ke.style.backgroundColor="white",we.style.borderRight="0.5px solid black",we.style.borderBottom="0.5px solid black",we.style.borderRadius="0px",we.style.backgroundColor="white",Le.style.borderRight="0.5px solid black",Le.style.borderBottom="0.5px solid black",Le.style.borderRadius="0px",Le.style.backgroundColor="white",De.style.borderRight="0.5px solid black",De.style.borderBottom="0.5px solid black",De.style.borderRadius="0px",De.style.backgroundColor="white",Je.style.borderRight="0.5px solid black",Je.style.borderBottom="0.5px solid black",Je.style.borderRadius="0px",Je.style.backgroundColor="white",Oe.style.borderRight="0.5px solid black",Oe.style.borderBottom="0.5px solid black",Oe.style.borderRadius="0px",Oe.style.backgroundColor="white",Ke.style.borderRight="0.5px solid black",Ke.style.borderBottom="0.5px solid black",Ke.style.borderRadius="0px",Ke.style.backgroundColor="white",Ve.style.borderRight="0.5px solid black",Ve.style.borderBottom="0.5px solid black",Ve.style.borderRadius="0px",Ve.style.backgroundColor="white",et.style.borderRight="0.5px solid black",et.style.borderBottom="0.5px solid black",et.style.borderRadius="0px",et.style.backgroundColor="white",ct.style.borderRight="0.5px solid black",ct.style.borderBottom="0.5px solid black",ct.style.borderRadius="0px",ct.style.backgroundColor="white",dt.style.borderRight="0.5px solid black",dt.style.borderBottom="0.5px solid black",dt.style.borderRadius="0px",dt.style.backgroundColor="white",ft.style.borderRight="0.5px solid black",ft.style.borderBottom="0.5px solid black",ft.style.borderRadius="0px",ft.style.backgroundColor="white",pt.style.borderBottom="0.5px solid black",pt.style.borderRadius="0px",pt.style.backgroundColor="white",B.addEventListener("click",(()=>{M.textContent=e.forecast.forecastday[0].hour[0].temp_f+"°F",W.textContent=e.forecast.forecastday[0].hour[1].temp_f+"°F",N.textContent=e.forecast.forecastday[0].hour[2].temp_f+"°F",P.textContent=e.forecast.forecastday[0].hour[3].temp_f+"°F",X.textContent=e.forecast.forecastday[0].hour[4].temp_f+"°F",te.textContent=e.forecast.forecastday[0].hour[5].temp_f+"°F",ne.textContent=e.forecast.forecastday[0].hour[6].temp_f+"°F",se.textContent=e.forecast.forecastday[0].hour[7].temp_f+"°F",ie.textContent=e.forecast.forecastday[0].hour[8].temp_f+"°F",Ce.textContent=e.forecast.forecastday[0].hour[9].temp_f+"°F",Se.textContent=e.forecast.forecastday[0].hour[10].temp_f+"°F",Re.textContent=e.forecast.forecastday[0].hour[11].temp_f+"°F",Be.textContent=e.forecast.forecastday[0].hour[12].temp_f+"°F",Te.textContent=e.forecast.forecastday[0].hour[13].temp_f+"°F",Ie.textContent=e.forecast.forecastday[0].hour[14].temp_f+"°F",Ae.textContent=e.forecast.forecastday[0].hour[15].temp_f+"°F",He.textContent=e.forecast.forecastday[0].hour[16].temp_f+"°F",Ue.textContent=e.forecast.forecastday[0].hour[17].temp_f+"°F",Ze.textContent=e.forecast.forecastday[0].hour[18].temp_f+"°F",rt.textContent=e.forecast.forecastday[0].hour[19].temp_f+"°F",ut.textContent=e.forecast.forecastday[0].hour[20].temp_f+"°F",yt.textContent=e.forecast.forecastday[0].hour[21].temp_f+"°F",ht.textContent=e.forecast.forecastday[0].hour[22].temp_f+"°F",bt.textContent=e.forecast.forecastday[0].hour[23].temp_f+"°F"})),L.addEventListener("click",(()=>{M.textContent=e.forecast.forecastday[0].hour[0].temp_c+"°C",W.textContent=e.forecast.forecastday[0].hour[1].temp_c+"°C",N.textContent=e.forecast.forecastday[0].hour[2].temp_c+"°C",P.textContent=e.forecast.forecastday[0].hour[3].temp_c+"°C",X.textContent=e.forecast.forecastday[0].hour[4].temp_c+"°C",te.textContent=e.forecast.forecastday[0].hour[5].temp_c+"°C",ne.textContent=e.forecast.forecastday[0].hour[6].temp_c+"°C",se.textContent=e.forecast.forecastday[0].hour[7].temp_c+"°C",ie.textContent=e.forecast.forecastday[0].hour[8].temp_c+"°C",Ce.textContent=e.forecast.forecastday[0].hour[9].temp_c+"°C",Se.textContent=e.forecast.forecastday[0].hour[10].temp_c+"°C",Re.textContent=e.forecast.forecastday[0].hour[11].temp_c+"°C",Be.textContent=e.forecast.forecastday[0].hour[12].temp_c+"°C",Te.textContent=e.forecast.forecastday[0].hour[13].temp_c+"°C",Ie.textContent=e.forecast.forecastday[0].hour[14].temp_c+"°C",Ae.textContent=e.forecast.forecastday[0].hour[15].temp_c+"°C",He.textContent=e.forecast.forecastday[0].hour[16].temp_c+"°C",Ue.textContent=e.forecast.forecastday[0].hour[17].temp_c+"°C",Ze.textContent=e.forecast.forecastday[0].hour[18].temp_c+"°C",rt.textContent=e.forecast.forecastday[0].hour[19].temp_c+"°C",ut.textContent=e.forecast.forecastday[0].hour[20].temp_c+"°C",yt.textContent=e.forecast.forecastday[0].hour[21].temp_c+"°C",ht.textContent=e.forecast.forecastday[0].hour[22].temp_c+"°C",bt.textContent=e.forecast.forecastday[0].hour[23].temp_c+"°C"}))})).catch((function(e){console.log(e)}))}))}))})();
//# sourceMappingURL=bundle.js.map