(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(32)},22:function(e,t,a){},23:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n,r,s,i,l,o=a(0),c=a.n(o),u=a(13),h=a.n(u),d=(a(22),a(3)),p=a(4),m=a(7),g=a(5),f=a(6),v=a(1),y=a(9),b=a(8),w=a(2),E={answers:{ageRange:["Under 18","18 - 24","25 - 34","35 - 44","44 - 55","55+"],characterGender:["Male","Female"],class:["Shaman","Rogue","Priest","Warrior","Paladin","Mage","Warlock","Hunter","Druid"],classComparison:["I will be rolling the same class as my previous main","I will be rolling a class I have played extensively, but did not main","I will be rolling a new class, or one that I played minimally"],contentInterest:["Questing","Dungeons","World PvP","Battlegrounds","Raids","Role Playing","Collecting items/recipes/wealth","Barrens Chat"],expectedTimeTo60:["< 1 week","1 - 2 weeks","2 - 4 weeks","1 - 2 months","2 - 4 months","4 - 6 months","6+ months"],faction:["For the Horde!","For the Alliance!"],firstRetailExpansionPlayed:["Vanilla","The Burning Crusade","Wrath of the Lich King","Cataclysm","Mists of Pandaria","Warlords of Draenor","Legion","Battle for Azeroth"],hasActiveSub:["Yes","No"],hasPlayedPrivateServer:["Yes","No"],mostRecentExpansionPlayed:["Vanilla","The Burning Crusade","Wrath of the Lich King","Cataclysm","Mists of Pandaria","Warlords of Draenor","Legion","Battle for Azeroth"],prof60:["Alchemy","Blacksmithing","Enchanting","Engineering","Herbalism","Leatherworking","Mining","Skinning","Tailoring"],profLeveling:["Alchemy","Blacksmithing","Enchanting","Engineering","Herbalism","Leatherworking","Mining","Skinning","Tailoring"],race:["Human","Dwarf","Night Elf","Gnome","Orc","Undead","Tauren","Troll"],region:["Americas","Oceanic","Europe","Asia"],role:["DPS","Healer","Tank"],serverType:["PvP","PvE","RP"],dailyPlayTime:["1 - 2 hours","3 - 4 hours","5 - 6 hours","7 - 8 hours","9 - 10 hours","11 - 12 hours","12+ hours"],willTakeTimeOffWork:["Yes, I have taken a week or more off for Classic's launch","I have no other obligations","No, I do not plan to take time off"],hasFoundGuild:["Yes","No, and I am not currently looking","No, though I am currently looking"],phaseMostExcitedFor:["Phase 1","Phase 2","Phase 3","Phase 4","Phase 5","Phase 6"]},colors:["#C0392B","#2980B9","#9B59B6","#D35400","#1E8449","#B7950B","#D98880","#7FB3D5","#C39BD3","#F0B27A","#7DCEA0","#B3B6B7"],colorBlindColors:["#154360","#1A5276","#1F618D","#1F618D","#2980B9","#5499C7","#5DADE2","#7FB3D5","#85C1E9"],colorsObj:{Druid:"#FF7D0A",Hunter:"#ABD473",Mage:"#40C7EB",Paladin:"#F58CBA",Priest:"#858585",Rogue:"#F1C40F",Shaman:"#0070DE",Warlock:"#8787ED",Warrior:"#C79C6E",DK:"#C41F3B",DH:"#A330C9",Monk:"#00FF96",alt1:"tomato",alt2:"blanchedalmond"},factions:(n={},Object(v.a)(n,"For the Horde!",{Shaman:!0,Rogue:!0,Priest:!0,Warrior:!0,Paladin:!1,Mage:!0,Warlock:!0,Hunter:!0,Druid:!0}),Object(v.a)(n,"For the Alliance!",{Shaman:!1,Rogue:!0,Priest:!0,Warrior:!0,Paladin:!0,Mage:!0,Warlock:!0,Hunter:!0,Druid:!0}),n),questions:["region","serverType","faction","characterGender","race","class","role","profLeveling","prof60","ageRange","hasActiveSub","firstRetailExpansionPlayed","mostRecentExpansionPlayed","hasPlayedPrivateServer","classComparison","hasFoundGuild","expectedTimeTo60","dailyPlayTime","willTakeTimeOffWork","phaseMostExcitedFor","contentInterest"],factionRaces:(i={},Object(v.a)(i,"For the Horde!",(r={Human:!1,Dwarf:!1},Object(v.a)(r,"Night Elf",!1),Object(v.a)(r,"Gnome",!1),Object(v.a)(r,"Orc",!0),Object(v.a)(r,"Undead",!0),Object(v.a)(r,"Tauren",!0),Object(v.a)(r,"Troll",!0),r)),Object(v.a)(i,"For the Alliance!",(s={Human:!0,Dwarf:!0},Object(v.a)(s,"Night Elf",!0),Object(v.a)(s,"Gnome",!0),Object(v.a)(s,"Orc",!1),Object(v.a)(s,"Undead",!1),Object(v.a)(s,"Tauren",!1),Object(v.a)(s,"Troll",!1),s)),i),races:(l={Human:{Shaman:!1,Rogue:!0,Priest:!0,Warrior:!0,Paladin:!0,Mage:!0,Warlock:!0,Hunter:!1,Druid:!1},Dwarf:{Shaman:!1,Rogue:!0,Priest:!0,Warrior:!0,Paladin:!0,Mage:!1,Warlock:!1,Hunter:!0,Druid:!0}},Object(v.a)(l,"Night Elf",{Shaman:!1,Rogue:!0,Priest:!0,Warrior:!0,Paladin:!1,Mage:!1,Warlock:!1,Hunter:!0,Druid:!0}),Object(v.a)(l,"Gnome",{Shaman:!1,Rogue:!0,Priest:!1,Warrior:!0,Paladin:!1,Mage:!0,Warlock:!0,Hunter:!1,Druid:!1}),Object(v.a)(l,"Orc",{Shaman:!0,Rogue:!0,Priest:!1,Warrior:!0,Paladin:!1,Mage:!1,Warlock:!0,Hunter:!0,Druid:!1}),Object(v.a)(l,"Undead",{Shaman:!1,Rogue:!0,Priest:!0,Warrior:!0,Paladin:!1,Mage:!0,Warlock:!0,Hunter:!1,Druid:!1}),Object(v.a)(l,"Tauren",{Shaman:!0,Rogue:!1,Priest:!1,Warrior:!0,Paladin:!1,Mage:!1,Warlock:!1,Hunter:!0,Druid:!0}),Object(v.a)(l,"Troll",{Shaman:!0,Rogue:!0,Priest:!0,Warrior:!0,Paladin:!1,Mage:!0,Warlock:!1,Hunter:!0,Druid:!1}),l),titles:{ageRange:"What is your age",characterGender:"What gender will your character be",class:"What class will your character be",classComparison:"Will you roll the same class your previous main, or try a new one",contentInterest:"What content are you most excited about",expectedTimeTo60:"From the launch of Classic, how long do you anticipate it will take you, in real-world-time, to reach level 60",faction:"What faction will your character belong to",firstRetailExpansionPlayed:"What is the earliest retail World of Warcraft expansion you played",hasActiveSub:"Do you have an active World of Warcraft subscription",hasPlayedPrivateServer:"Had you played on a Vanilla WoW private server, prior to Classic's announcement",mostRecentExpansionPlayed:"What is the most recent retail World of Warcraft expansion you played?",profLeveling:"What primary professions will you be using while leveling from 1-60",prof60:"What primary professions will you be using at level 60",race:"What race will your character be",region:"What region will you be playing on",responseDate:"Response Timestamp",role:"What will the primary role of your character be",serverType:"What type of sever will you be playing on",dailyPlayTime:"After the first month (post-launch), what do you anticipate your average daily playtime will be",willTakeTimeOffWork:"Will you be taking time off work or other obligations for Classic's launch",hasFoundGuild:"Have you already found a guild you will join at launch",phaseMostExcitedFor:"Which of the six Phases are you most excited to play?"}},C=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).displayName="Checkbox",a.startOnSelect=a.startOnSelect.bind(Object(w.a)(a)),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.createElement("div",{className:"filters-filter-checkbox-cont",style:this.props.style},o.createElement("button",{className:"filters-filter-checkbox",onClick:this.startOnSelect,style:{backgroundColor:this.props.isSelected?this.props.isColorBlind?"#1F618D":"#F1C40F":"transparent"}}),o.createElement("label",{className:"filters-filter-checkbox-answer-text",role:"button",onClick:this.startOnSelect},this.props.answer))}},{key:"startOnSelect",value:function(e){this.props.onSelect(this.props.answer,!!this.props.isSelected,this.props.type)}}]),t}(o.Component),O=function(e){var t=e.fill,a=void 0===t?"black":t,n=e.size;return c.a.createElement("svg",{version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:n,height:n,viewBox:"0 0 59.049 59.049",fill:a},c.a.createElement("g",null,c.a.createElement("path",{d:"M11.285,41.39c0.184,0.146,0.404,0.218,0.623,0.218c0.294,0,0.585-0.129,0.783-0.377c0.344-0.432,0.273-1.061-0.159-1.405 c-0.801-0.638-1.577-1.331-2.305-2.06l-7.398-7.398l7.629-7.629c7.334-7.333,18.003-9.836,27.839-6.534 c0.523,0.173,1.09-0.107,1.267-0.63c0.175-0.523-0.106-1.091-0.63-1.267c-10.562-3.545-22.016-0.857-29.89,7.016L0,30.368 l8.812,8.812C9.593,39.962,10.426,40.705,11.285,41.39z"}),c.a.createElement("path",{d:"M50.237,21.325c-1.348-1.348-2.826-2.564-4.394-3.616c-0.458-0.307-1.081-0.185-1.388,0.273 c-0.308,0.458-0.185,1.08,0.273,1.388c1.46,0.979,2.838,2.113,4.094,3.369l7.398,7.398l-7.629,7.629 c-7.385,7.385-18.513,9.882-28.352,6.356c-0.52-0.187-1.093,0.084-1.279,0.604c-0.186,0.52,0.084,1.092,0.604,1.279 c3.182,1.14,6.49,1.693,9.776,1.693c7.621,0,15.124-2.977,20.665-8.518l9.043-9.043L50.237,21.325z"}),c.a.createElement("path",{d:"M30.539,41.774c-2.153,0-4.251-0.598-6.07-1.73c-0.467-0.29-1.084-0.148-1.377,0.321c-0.292,0.469-0.148,1.085,0.321,1.377 c2.135,1.33,4.6,2.032,7.126,2.032c7.444,0,13.5-6.056,13.5-13.5c0-2.685-0.787-5.279-2.275-7.502 c-0.308-0.459-0.93-0.582-1.387-0.275c-0.459,0.308-0.582,0.929-0.275,1.387c1.267,1.893,1.937,4.102,1.937,6.39 C42.039,36.616,36.88,41.774,30.539,41.774z"}),c.a.createElement("path",{d:"M30.539,18.774c2.065,0,4.089,0.553,5.855,1.6c0.474,0.281,1.088,0.125,1.37-0.351c0.281-0.475,0.125-1.088-0.351-1.37 c-2.074-1.229-4.451-1.879-6.875-1.879c-7.444,0-13.5,6.056-13.5,13.5c0,2.084,0.462,4.083,1.374,5.941 c0.174,0.354,0.529,0.56,0.899,0.56c0.147,0,0.298-0.033,0.439-0.102c0.496-0.244,0.701-0.843,0.458-1.338 c-0.776-1.582-1.17-3.284-1.17-5.06C19.039,23.933,24.198,18.774,30.539,18.774z"}),c.a.createElement("path",{d:"M54.621,5.567c-0.391-0.391-1.023-0.391-1.414,0l-46.5,46.5c-0.391,0.391-0.391,1.023,0,1.414 c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l46.5-46.5C55.012,6.591,55.012,5.958,54.621,5.567z"})),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null))},k=function(e){var t=e.fill,a=void 0===t?"black":t,n=e.size;return c.a.createElement("svg",{version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:n,height:n,viewBox:"0 0 59.2 59.2",fill:a},c.a.createElement("g",null,c.a.createElement("path",{d:"M51.062,21.561c-11.889-11.889-31.232-11.889-43.121,0L0,29.501l8.138,8.138c5.944,5.944,13.752,8.917,21.561,8.917 s15.616-2.972,21.561-8.917l7.941-7.941L51.062,21.561z M49.845,36.225c-11.109,11.108-29.184,11.108-40.293,0l-6.724-6.724 l6.527-6.527c11.109-11.108,29.184-11.108,40.293,0l6.724,6.724L49.845,36.225z"}),c.a.createElement("path",{d:"M28.572,21.57c-3.86,0-7,3.14-7,7c0,0.552,0.448,1,1,1s1-0.448,1-1c0-2.757,2.243-5,5-5c0.552,0,1-0.448,1-1 S29.125,21.57,28.572,21.57z"}),c.a.createElement("path",{d:"M29.572,16.57c-7.168,0-13,5.832-13,13s5.832,13,13,13s13-5.832,13-13S36.741,16.57,29.572,16.57z M29.572,40.57 c-6.065,0-11-4.935-11-11s4.935-11,11-11s11,4.935,11,11S35.638,40.57,29.572,40.57z"})),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null),c.a.createElement("g",null))},S=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).displayName="FilterComp",a.startScrollTo=a.startScrollTo.bind(Object(w.a)(a)),a.startUpdate=a.startUpdate.bind(Object(w.a)(a)),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.idx,n=t.selectedAnswers,r=t.type,s=E.titles[r],i=E.answers[r];return o.createElement("div",{className:"filters-filter-cont"},o.createElement("h4",{className:"filters-filter-title"},o.createElement("span",{className:"filters-filter-title-text".concat(this.props.questionIsShowing?"":" is-not-showing"),role:"button",onClick:function(){return e.startScrollTo(r)}},a,". ",s,"?"," "),o.createElement("button",{className:"filters-filter-title-showing-button",onClick:this.startUpdate},this.props.questionIsShowing?o.createElement(k,{fill:"black",size:16}):o.createElement(O,{fill:"black",size:16}))),i&&i.map(function(t){return o.createElement(C,{answer:t,isColorBlind:e.props.isColorBlind,isSelected:!!n[t],key:t,onSelect:e.props.toggleAnswer,type:e.props.type})}))}},{key:"startScrollTo",value:function(e){if(e){var t=document.querySelector("#".concat(e));t&&t.scrollIntoView({behavior:"smooth"})}}},{key:"startUpdate",value:function(){this.props.updateQuestionsShowing(this.props.type)}}]),t}(o.Component),j=(a(23),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).displayName="Filters",a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.createElement("div",{className:"filters-main-cont",style:{height:this.props.innerHeight}},o.createElement("h2",{className:"filters-title"},"Filters"," ",o.createElement("button",{className:"filters-title-reset-button",onClick:this.props.resetQuestionsShowing},"Reset Results Showing")),o.createElement("div",{className:"filters-filters-cont"},E.questions.map(function(t,a){return o.createElement(S,{idx:a+1,isColorBlind:e.props.isColorBlind,key:t,questionIsShowing:e.props.questionsShowing[t],selectedAnswers:e.props.selectedAnswers[t],type:t,toggleAnswer:e.props.toggleAnswer,updateQuestionsShowing:e.props.updateQuestionsShowing})})),o.createElement("div",{className:"filter-button-cont"},o.createElement("button",{className:"filter-button-clear",onClick:this.props.clearFilter},"Clear"),o.createElement("button",{className:"filter-button",onClick:this.props.applyFilter},"Apply Filter"),o.createElement(C,{isSelected:this.props.isColorBlind,isColorBlind:!0,answer:"I'm colorblind",onSelect:function(t,a,n){return e.props.updateColorBlind()},style:{transform:"scale(0.7)"},type:"expectedTimeTo60"})))}}]),t}(o.Component)),F=a(14),P=a.n(F),T=(a(27),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).displayName="BarGraph",a.getAnswerWidth=a.getAnswerWidth.bind(Object(w.a)(a)),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.createElement("div",{className:"bar-graph"},this.props.answers&&this.props.answers.map(function(t){return!!t.value&&o.createElement("p",{className:"answer-bar","data-content":"".concat(t.title,": ").concat(t.value," (").concat(e.getAnswerWidth(t),"%)"),key:t.title,style:{width:"".concat(e.getAnswerWidth(t),"%"),backgroundColor:t.color}})}),o.createElement("p",{className:"bar-graph-range"},o.createElement("span",null,"0"),o.createElement("span",null,this.props.totalAnswers)))}},{key:"getAnswerWidth",value:function(e){return(e.value/this.props.totalAnswers*100).toFixed(2)}}]),t}(o.Component)),x=a(10),A=a.n(x),W=a(11),R=a(15);function B(){return(B=Object(R.a)(A.a.mark(function e(t){var a,n,r,s;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([new Promise(function(e,t){var a=new XMLHttpRequest;function n(e){t(new Error("..."))}a.addEventListener("load",function(t){if(a.status>=400)n(t);else{var r=JSON.parse(this.responseText);e(r)}}),a.addEventListener("error",n),a.addEventListener("abort",n),a.open("GET","https://aablain.github.io/classic-survey-results-august-2019/classic-survey-results-august-2019-part-1.json"),a.send()}),new Promise(function(e,t){var a=new XMLHttpRequest;function n(e){t(new Error("..."))}a.addEventListener("load",function(t){if(a.status>=400)n(t);else{var r=JSON.parse(this.responseText);e(r)}}),a.addEventListener("error",n),a.addEventListener("abort",n),a.open("GET","https://aablain.github.io/classic-survey-results-august-2019/classic-survey-results-august-2019-part-2.json"),a.send()})]);case 2:a=e.sent,n=Object(b.a)(a,2),r=n[0],s=n[1],t(null,[].concat(Object(W.a)(r),Object(W.a)(s)));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function N(e){return Object.entries?Object.entries(e):Object.keys(e).map(function(t){return[t,e[t]]})}var L=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).displayName="Result",a.state={counts:a._getCountsAsArray(e.answerCounts)},a.getColor=a.getColor.bind(Object(w.a)(a)),a.getChartType=a.getChartType.bind(Object(w.a)(a)),a.renderBarGraph=a.renderBarGraph.bind(Object(w.a)(a)),a.renderPieChart=a.renderPieChart.bind(Object(w.a)(a)),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"_getCountsAsArray",value:function(e){var t=this;return N(e).map(function(e,a){var n=Object(b.a)(e,2),r=n[0];return{title:r,value:n[1],color:t.getColor(a,r)}})}},{key:"componentDidUpdate",value:function(e){this.props.answerCounts===e.answerCounts&&this.props.isColorBlind===e.isColorBlind||this.setState({counts:this._getCountsAsArray(this.props.answerCounts)})}},{key:"render",value:function(){var e=this;return o.createElement("div",{className:"result-cont",id:this.props.question},o.createElement("h4",{className:"result-title"},E.titles[this.props.question],"?"),o.createElement("div",{className:"info-cont"},"BarChart"===this.getChartType()?this.renderBarGraph():this.renderPieChart(),o.createElement("ul",{className:"stats-list-cont"},!!this.state.counts.length&&this.state.counts.map(function(t){var a=t.color,n=t.title,r=t.value;return o.createElement("li",{className:"result-text".concat(r?"":" none-match"),key:n,style:{color:a}},o.createElement("span",{className:"result-text-title"},n||"(No Answer)",":")," ",o.createElement("span",{className:"result-text-value"},r," -"," ",o.createElement("span",{className:"result-text-value-percentage",style:{borderColor:a}},(r/e.props.totalAnswers*100).toFixed(2),"%")))}))))}},{key:"getColor",value:function(e,t){return this.props.isColorBlind?E.colorBlindColors[e]:"class"===this.props.question?E.colorsObj[t]:E.colors[e]}},{key:"getChartType",value:function(){switch(this.props.question){case"prof60":case"profLeveling":case"contentInterest":return"BarChart";default:return"PieChart"}}},{key:"renderBarGraph",value:function(){return o.createElement(T,{answers:this.state.counts,totalAnswers:this.props.totalAnswers})}},{key:"renderPieChart",value:function(){var e={data:this.state.counts,label:D,labelPosition:114,labelStyle:{fontSize:"8x"}};return o.createElement(P.a,e)}}]),t}(o.Component),D=function(e){var t=e.data[e.dataIndex].percentage;return o.createElement("text",{className:"chart-result-percent",textAnchor:e.textAnchor,alignmentBaseline:"middle",dx:e.dx,dy:e.dy,fill:e.data[e.dataIndex].color,key:e.key,x:e.x,y:e.y},t?"".concat(t.toFixed(2),"%"):"")},H=(a(30),function(e){var t=e.activeFilters?e.activeFilters.length:0;return o.createElement("div",{className:"results-main-cont",style:{height:e.innerHeight}},o.createElement("h1",{className:"results-title"},"Results"),o.createElement("h3",{className:"results-subtitle"},e.computedResponsesLength," Responses match your filters, Representing"," ",(e.computedResponsesLength/e.allResponsesCount*100).toFixed(2),"% of respondees"),e.activeFilters&&!!e.activeFilters.length&&o.createElement("p",null,"Filtering for"," ",e.activeFilters.map(function(a,n){var r=Object(b.a)(a,2),s=r[0],i=r[1];return o.createElement(o.Fragment,{key:s},o.createElement("span",{style:{color:e.isColorBlind?E.colorBlindColors[n]:E.colors[n]}},i.map(function(t,a){return o.createElement(o.Fragment,{key:t}," ",o.createElement("span",{className:"results-subtitle-filter-opt",style:{backgroundColor:e.isColorBlind?E.colorBlindColors[n]:E.colors[n]}},t," ",o.createElement("span",{className:"results-subtitle-filter-remove-btn",role:"button",onClick:function(){return e.updateFilterLive(s,t)}},"x")))})," ")," ",n+1!==t?" and ":"")})),o.createElement("div",{className:"results-results-cont"},E.questions.map(function(t,a){return e.questionsShowing[t]?o.createElement(L,{idx:a,isColorBlind:e.isColorBlind,key:t,question:t,answerCounts:e.answerCounts[t],totalAnswers:e.computedResponsesLength}):o.createElement("span",{key:t})})))}),M=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).displayName="Wrapper",a.state={answers:{ageRange:{},characterGender:{},class:{},classComparison:{},contentInterest:{},expectedTimeTo60:{},faction:{},firstRetailExpansionPlayed:{},hasActiveSub:{},hasPlayedPrivateServer:{},mostRecentExpansionPlayed:{},prof60:{},profLeveling:{},race:{},region:{},role:{},serverType:{},dailyPlayTime:{},willTakeTimeOffWork:{},hasFoundGuild:{},phaseMostExcitedFor:{}},answerCounts:a._calcAnswerQuantities([]),computedResponsesLength:0,filtering:!1,innerHeight:window.innerHeight,isMobile:window.innerWidth<480,isColorBlind:!1,loaded:!1,questionsShowing:{ageRange:!0,characterGender:!0,class:!0,classComparison:!0,contentInterest:!0,expectedTimeTo60:!0,faction:!0,firstRetailExpansionPlayed:!0,hasActiveSub:!0,hasPlayedPrivateServer:!0,mostRecentExpansionPlayed:!0,prof60:!0,profLeveling:!0,race:!0,region:!0,dailyPlayTime:!0,willTakeTimeOffWork:!0,hasFoundGuild:!0,role:!0,serverType:!0,phaseMostExcitedFor:!0},responses:[],showFilters:window.innerWidth>480},a._calcAnswerQuantities=a._calcAnswerQuantities.bind(Object(w.a)(a)),a._filterResults=a._filterResults.bind(Object(w.a)(a)),a._getAnswersTemplate=a._getAnswersTemplate.bind(Object(w.a)(a)),a.applyFilter=a.applyFilter.bind(Object(w.a)(a)),a.clearFilter=a.clearFilter.bind(Object(w.a)(a)),a.resetQuestionsShowing=a.resetQuestionsShowing.bind(Object(w.a)(a)),a.toggleAnswerFilter=a.toggleAnswerFilter.bind(Object(w.a)(a)),a.updateQuestionShowing=a.updateQuestionShowing.bind(Object(w.a)(a)),a.updateFilterLive=a.updateFilterLive.bind(Object(w.a)(a)),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"_calcAnswerQuantities",value:function(e){return e.reduce(function(e,t){return N(t).forEach(function(t){var a=Object(b.a)(t,2),n=a[0],r=a[1];if("responseDate"===n)return e;"prof60"===n||"profLeveling"===n||"contentInterest"===n?r.split(", ").forEach(function(t){e[n][t]?e[n][t]++:e[n][t]=1}):e[n][r]?e[n][r]++:e[n][r]=1;return e}),e},this._getAnswersTemplate())}},{key:"_getAnswersTemplate",value:function(){return N(E.answers).reduce(function(e,t){var a=Object(b.a)(t,2),n=a[0],r=a[1];return e[n]={},r.forEach(function(t){e[n][t]=0}),e},{})}},{key:"_filterResults",value:function(e){return e.filter(function(e){return E.factions[e.faction][e.class]&&E.races[e.race][e.class]&&E.factionRaces[e.faction][e.race]})}},{key:"_getSurveyResults",value:function(){var e=this;!function(e){B.apply(this,arguments)}(function(t,a){if(t)e.setState({failedToLoad:!0});else{var n=e._filterResults(a),r=e._calcAnswerQuantities(n);e.setState({answerCounts:r,computedResponsesLength:n.length,responses:n,loaded:!0})}})}},{key:"_setHeight",value:function(){var e=this;this.timeoutID&&clearTimeout(this.timeoutID),this.timeoutID=setTimeout(function(){e.setState({innerHeight:window.innerHeight})},300)}},{key:"componentDidMount",value:function(){var e=this;this._getSurveyResults(),window.addEventListener("resize",function(){return e.setState({innerHeight:window.innerHeight})})}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("resize",function(){return e.setState({innerHeight:window.innerHeight})})}},{key:"render",value:function(){var e=this;return this.state.failedToLoad?o.createElement("div",{className:"main-wrapper"},"Survey Results Failed to load :("):this.state.loaded?o.createElement("div",{className:"main-wrapper"},this.state.isMobile&&o.createElement("button",{className:"filters-toggle",onClick:function(){return e.setState({showFilters:!e.state.showFilters})}},this.state.showFilters?"Hide":"Filters"),this.state.showFilters&&o.createElement(j,{applyFilter:this.applyFilter,clearFilter:this.clearFilter,innerHeight:this.state.innerHeight,isColorBlind:this.state.isColorBlind,questionsShowing:this.state.questionsShowing,resetQuestionsShowing:this.resetQuestionsShowing,selectedAnswers:this.state.answers,toggleAnswer:this.toggleAnswerFilter,updateColorBlind:function(){return e.setState({isColorBlind:!e.state.isColorBlind})},updateQuestionsShowing:this.updateQuestionShowing}),this.state.answerCounts&&o.createElement(H,{answerCounts:this.state.answerCounts,activeFilters:this.state.activeFilters,computedResponsesLength:this.state.computedResponsesLength,allResponsesCount:this.state.responses.length,innerHeight:this.state.innerHeight,isColorBlind:this.state.isColorBlind,questionsShowing:this.state.questionsShowing,updateFilterLive:this.updateFilterLive})):o.createElement("div",{className:"loading-cont "},o.createElement("h1",{className:"loading-message"},"Loadin' that sweet, sweet data..."),o.createElement("h4",{className:"loading-message-sub"},"That means Survey Results"))}},{key:"applyFilter",value:function(){var e=this;this.setState({filtering:!0},function(){var t=e.state.answers,a=e.getFilters(t);if(!a.length)return e.setState({activeFilters:[],filtering:!1,answerCounts:e._calcAnswerQuantities(e.state.responses),computedResponsesLength:e.state.responses.length});var n=e.getFilteredResponses(e.state.responses||[],a),r=e._calcAnswerQuantities(n);e.setState({activeFilters:a,answerCounts:r,filtering:!1,computedResponsesLength:n.length})})}},{key:"clearFilter",value:function(){this.setState({answers:{ageRange:{},characterGender:{},class:{},classComparison:{},contentInterest:{},expectedTimeTo60:{},faction:{},firstRetailExpansionPlayed:{},hasActiveSub:{},hasPlayedPrivateServer:{},mostRecentExpansionPlayed:{},prof60:{},profLeveling:{},race:{},region:{},role:{},serverType:{},dailyPlayTime:{},willTakeTimeOffWork:{},hasFoundGuild:{},phaseMostExcitedFor:{}}})}},{key:"getFilters",value:function(e){return N(e).reduce(function(e,t){var a=Object(b.a)(t,2),n=a[0],r=N(a[1]).filter(function(e){var t=Object(b.a)(e,2);t[0];return t[1]}).map(function(e){return Object(b.a)(e,1)[0]});return r.length?e.concat([[n,r]]):e},[])}},{key:"getFilteredResponses",value:function(e,t){return e.filter(function(e){return t.every(function(t){var a=Object(b.a)(t,2),n=a[0];return a[1].some(function(t){return"contentInterest"===n||"prof60"===n||"profLeveling"===n?e[n].includes(t):e[n]===t})})})}},{key:"resetQuestionsShowing",value:function(){this.setState({questionsShowing:{ageRange:!0,characterGender:!0,class:!0,classComparison:!0,contentInterest:!0,expectedTimeTo60:!0,faction:!0,firstRetailExpansionPlayed:!0,hasActiveSub:!0,hasPlayedPrivateServer:!0,mostRecentExpansionPlayed:!0,prof60:!0,profLeveling:!0,race:!0,region:!0,role:!0,serverType:!0,dailyPlayTime:!0,willTakeTimeOffWork:!0,hasFoundGuild:!0,phaseMostExcitedFor:!0}})}},{key:"toggleAnswerFilter",value:function(e,t,a,n){var r=Object(y.a)({},this.state.answers[a],Object(v.a)({},e,!t));this.setState({answers:Object(y.a)({},this.state.answers,Object(v.a)({},a,r))},function(){n&&n()})}},{key:"updateQuestionShowing",value:function(e){this.setState({questionsShowing:Object(y.a)({},this.state.questionsShowing,Object(v.a)({},e,!this.state.questionsShowing[e]))})}},{key:"updateFilterLive",value:function(e,t){var a=this;this.toggleAnswerFilter(t,!0,e,function(){return a.applyFilter()})}}]),t}(o.Component),I=(a(31),function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(M,null))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));h.a.render(c.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.7d07396d.chunk.js.map