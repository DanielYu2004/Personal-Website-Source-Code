(this["webpackJsonpdanielyu2004.github.io"]=this["webpackJsonpdanielyu2004.github.io"]||[]).push([[0],Array(24).concat([function(e,t,a){e.exports=a.p+"static/media/Resume.48b6bc44.pdf"},function(e,t,a){e.exports=a.p+"static/media/Whistler.0567d782.jpg"},function(e,t,a){e.exports=a.p+"static/media/VisionaryImage.6f1d2104.jpg"},function(e,t,a){e.exports=a.p+"static/media/Organotes.80d3669e.PNG"},function(e,t,a){e.exports=a.p+"static/media/python-file.bea2ce05.svg"},function(e,t,a){e.exports=a(55)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/browsericon.e0d4cba1.svg"},function(e,t,a){e.exports=a.p+"static/media/server.9a8c0e83.svg"},function(e,t,a){e.exports=a.p+"static/media/algorithm.e9e63d12.svg"},function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/github-logo.76d344f0.svg"},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(21),l=a.n(o),c=(a(34),a(3)),r=a(4),s=a(6),d=a(5),m=a(7),u=(a(35),a(8)),h=a(12),p=(a(36),a(37),i.a.Component,function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"about-div"},i.a.createElement("div",{class:"about-div-content"},i.a.createElement("div",{class:"about-div-text"},i.a.createElement("div",{class:"about-title"},"About Me"),i.a.createElement("div",{class:"about-content"},"I am a grade 10 student in Waterloo Ontario with a strong passion for software development. I enjoy competitive coding problems with python while honing my skills in software development with react as a front-end developer. I have experience at over 7 hackathons (with a few wins) and have mentored at various coding seminars. In my spare time, I like to play chess, develop my competitive math skills and learn more about the world of business.")),i.a.createElement("div",{class:"about-image-div"})),i.a.createElement("div",{class:"about-section-div"},i.a.createElement("div",{class:"triangle-topright"}),i.a.createElement("div",{class:"about-section-divv"},i.a.createElement("div",{class:"about-section-card"},i.a.createElement("img",{src:a(38),width:"100",class:"about-section-icon"}),i.a.createElement("div",{class:"section-card-title"}," Frontend"),i.a.createElement("div",{class:"about-section-wrapper"},i.a.createElement("div",{class:"about-section-content-item"},"HTML5"),i.a.createElement("div",{class:"about-section-content-item"},"CSS3"),i.a.createElement("div",{class:"about-section-content-item"},"Javascript"),i.a.createElement("div",{class:"about-section-content-item"},"React"))),i.a.createElement("div",{class:"about-section-card"},i.a.createElement("img",{src:a(39),width:"100",class:"about-section-icon"}),i.a.createElement("div",{class:"section-card-title"},"Backend"),i.a.createElement("div",{class:"about-section-wrapper"},i.a.createElement("div",{class:"about-section-content-item"},"Node.js"),i.a.createElement("div",{class:"about-section-content-item"},"Express"),i.a.createElement("div",{class:"about-section-content-item"},"Firebase"),i.a.createElement("div",{class:"about-section-content-item"},"GCD"))),i.a.createElement("div",{class:"about-section-card"},i.a.createElement("img",{src:a(40),width:"100",class:"about-section-icon"}),i.a.createElement("div",{class:"section-card-title"},"Other"),i.a.createElement("div",{class:"about-section-wrapper"},i.a.createElement("div",{class:"about-section-content-item"},"Python"),i.a.createElement("div",{class:"about-section-content-item"},"Git/Github"),i.a.createElement("div",{class:"about-section-content-item"},"Photoshop"),i.a.createElement("div",{class:"about-section-content-item"},"Figma")))),i.a.createElement("div",{class:"footer-div-about"},i.a.createElement("div",{class:"footer-copyright"},"\xa9\ufe0f Daniel Yu | All Rights Reserved ",i.a.createElement("br",null),"Developed as a side project"))))}}]),t}(i.a.Component)),v=(a(41),function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(e){var t=function(e,t,a){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(a,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};t.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var a=this,n=150-100*Math.random();this.isDeleting&&(n/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,n=300):(n=this.period,this.isDeleting=!0),setTimeout((function(){a.tick()}),n)};!function(){for(var e=document.getElementsByClassName("txt-rotate"),a=0;a<e.length;a++){var n=e[a].getAttribute("data-rotate"),i=e[a].getAttribute("data-period");n&&new t(e[a],JSON.parse(n),i)}var o=document.createElement("style");o.type="text/css",o.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(o)}()}},{key:"render",value:function(){return i.a.createElement("div",{class:"home-div"},i.a.createElement("div",{class:"home-title-div"}," Daniel Yu"),i.a.createElement("div",{class:"home-subtitle-div"}," I am a",i.a.createElement("span",{class:"txt-rotate","data-period":"2000","data-rotate":'[ " developer", " mathematician", " designer", " student"]'})),i.a.createElement("div",{class:"button_cont",align:"center"},i.a.createElement(u.b,{to:"/about",class:"example_c"},"Learn More")))}}]),t}(i.a.Component)),b=a(14),E=(a(49),a(24)),g=a.n(E),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={checked:"False"},a.onClick=a.onClick.bind(Object(b.a)(a)),a.setWrapperRef=a.setWrapperRef.bind(Object(b.a)(a)),a.handleClickOutside=a.handleClickOutside.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"setWrapperRef",value:function(e){this.wrapperRef=e}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside),window.addEventListener("scroll",(function(e){var t=document.getElementsByClassName("navbar-div")[0];document.documentElement.scrollTop||document.body.scrollTop>window.innerHeight?t.style.background="#474747":t.style.background="transparent"}))}},{key:"homePage",value:function(){}},{key:"contentPage",value:function(){}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.setState((function(e){document.getElementsByClassName("hidden-navbutton")[0].checked=!1}))}},{key:"onClick",value:function(){document.getElementsByClassName("hidden-navbutton")[0].checked=!document.getElementsByClassName("hidden-navbutton")[0].checked,console.log(document.getElementsByClassName("hidden-navbutton")[0].checked)}},{key:"render",value:function(){return i.a.createElement("div",{class:"navbar-div"},i.a.createElement("div",{class:"logo-div"},i.a.createElement(u.b,{to:"/home",style:{textDecoration:"none",color:"white"}},"DANIEL YU")),i.a.createElement("div",{class:"navlinks-div"},i.a.createElement(u.b,{to:"about",class:"navitem",style:{textDecoration:"none",color:"white"}},"About"),i.a.createElement(u.b,{to:"awards",class:"navitem",style:{textDecoration:"none",color:"white"}},"Awards"),i.a.createElement(u.b,{to:"projects",class:"navitem",style:{textDecoration:"none",color:"white"}},"Projects"),i.a.createElement("a",{href:g.a,target:"_blank",class:"navitem"},"Resume")),i.a.createElement("nav",{role:"navigation",class:"navbar-small"},i.a.createElement("div",{id:"menuToggle",onClick:this.onClick,ref:this.setWrapperRef},i.a.createElement("input",{type:"checkbox",class:"hidden-navbutton"}),i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("ul",{id:"menu"},i.a.createElement("div",{class:"hidden-menu-content"},i.a.createElement(u.b,{to:"home",class:"navitemm",style:{textDecoration:"none",color:"#232323"}},"Home"),i.a.createElement(u.b,{to:"about",class:"navitemm",style:{textDecoration:"none",color:"#232323"}},"About"),i.a.createElement(u.b,{to:"awards",class:"navitemm",style:{textDecoration:"none",color:"#232323"}},"Awards"),i.a.createElement(u.b,{to:"projects",class:"navitemm",style:{textDecoration:"none",color:"#232323"}},"Projects"),i.a.createElement(u.b,{to:"resume",class:"navitemm",style:{textDecoration:"none",color:"#232323"}},"Resume"))))))}}]),t}(i.a.Component),f=(a(50),a(51),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={title:""},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"awarditem-div"},i.a.createElement("div",{class:"awarditem-title"},this.props.title),i.a.createElement("div",{class:"awarditem-details"},i.a.createElement("p",{class:"awarditem-award"},this.props.award),i.a.createElement("p",{class:"awarditem-textdetails"}," ",this.props.details)),i.a.createElement("div",{class:"awarditem-bottom"},i.a.createElement("div",{class:"awarditem-date"}," ",this.props.date)))}}]),t}(i.a.Component)),C=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"awards-div"},i.a.createElement("div",{class:"awards-div-container"},i.a.createElement("div",{class:"awards-title"},"My Awards"),i.a.createElement("div",{class:"awards-content"},i.a.createElement(f,{title:"SHAD",award:"Accepted into SHAD 2020 Summer Program",details:"",date:"Feb 2020"}),i.a.createElement(f,{title:"Canadian Computing Competition",award:"Honor Roll Group 2",details:"Received a score of 71/75 on the Jr",date:"Feb 2020"}),i.a.createElement(f,{title:"DECA Provincials (ACT)",award:"Top 20 Oral 1",details:"Received a 95/100 on my oral case",date:"Feb 2020"}),i.a.createElement(f,{title:"Canadian Open Mathematics Challenge",award:"Southwestern Ontario Honor Roll",details:"Received a score of 54/80 ",date:"Jan 2020"}),i.a.createElement(f,{title:"MLH Hack Day",award:"3rd Place Hack",details:"created digitizing automatic cue card generator web application",date:"Dec 2019"}),i.a.createElement(f,{title:"Hack the Hammer",award:"Overall Security Hack",details:"created blockchain whistleblower complaint webapp",date:"Dec 2019"}),i.a.createElement(f,{title:"Beaver Computing Competition",award:"First Place Honor Roll",details:"Received Perfect Score",date:"Nov 2019"}),i.a.createElement(f,{title:"Canadian Intermediate Mathematics Challenge",award:"Distinction",date:"Nov 2019"}),i.a.createElement(f,{title:"Fryer",award:"Honor Roll Group 3",details:"Received a score of 38/40",date:"Apr 2019"}),i.a.createElement(f,{title:"Canadian Computing Competition",award:"Distinction",details:"Received a score of 60/75 on the Jr",date:"Feb 2019"}),i.a.createElement(f,{title:"Pascal",award:"Distinction",date:"Feb 2019"}),i.a.createElement(f,{title:"Provincial Chess Challenge",award:"12th Overall",date:"2019"}),i.a.createElement(f,{title:"Caribou Math",award:"6th Overall",date:"2018-2019"}),i.a.createElement(f,{title:"DECA Regionals (PFN)",award:"Top 10 Oral Case",date:"Nov 2018"}),i.a.createElement(f,{title:"The Canadian Math Kangaroo Contest",award:"National Silver Medal; Waterloo Regional First Place",date:"2018"}),i.a.createElement(f,{title:"Polar Expressions Writing Contest",award:"Published Writer",date:"2018"}),i.a.createElement(f,{title:"Canadian Intermediate Mathematics Challenge",award:"Distinction",date:"Nov 2018"}),i.a.createElement(f,{title:"Provincial Chess Challenge",award:"9th Overall",date:"2018"}),i.a.createElement(f,{title:"Mathematica Centrum Lagrange",award:"51st Overall",date:"2018"}),i.a.createElement(f,{title:"Caribou Math",award:"25th Overall",date:"2017-2018"}),i.a.createElement(f,{title:"Mathematica Centrum Euler",award:"1st Overall",date:"2017"}),i.a.createElement(f,{title:"Provincial Chess Challenge",award:"5th Overall",date:"2017"}),i.a.createElement(f,{title:"The Canadian Math Kangaroo Contest",award:"National Gold Medal; Waterloo Regional First Place",date:"2017"}),i.a.createElement(f,{title:"AMC 8",award:"Distinguished Honor Roll Top 1%",date:"2017"}),i.a.createElement(f,{title:"Caribou Math",award:"21st Overall",date:"2016-2017"}),i.a.createElement(f,{title:"The Canadian Math Kangaroo Contest",award:" National Gold Medal; Waterloo Regional Third Place",date:"2016"}),i.a.createElement(f,{title:"Mathematica Centrum Pythagoras",award:"63rd Overall",date:"2016"}),i.a.createElement(f,{title:"Provincial Chess Challenge",award:"18th Overall",date:"2016"}),i.a.createElement(f,{title:"Caribou Math",award:"4th Overall",date:"2015-2016"}),i.a.createElement(f,{title:"Provincial Chess Challenge",award:"6th Overall",date:"2015"}),i.a.createElement(f,{title:"Mathematica Centrum Fibonaccian",award:"20th Overall",date:"2015"}),i.a.createElement(f,{title:"The Canadian Math Kangaroo Contest",award:"Top 2% in Canada; Waterloo Region Silver Medal",date:"2015"}),i.a.createElement(f,{title:"Provincial Chess Challenge",award:"13th Overall",date:"2014"}),i.a.createElement(f,{title:"Mathematica Centrum Byron-Germain",award:"20th Overall",date:"2014"}),i.a.createElement(f,{title:"Provincial Chess Challenge",award:"10th Overall",date:"2013"}),i.a.createElement(f,{title:"Mathematica Centrum Thales",award:"67th Overall",date:"2013"})),i.a.createElement("div",{class:"footer-div-awards"},i.a.createElement("div",{class:"footer-copyright"},"\xa9\ufe0f Daniel Yu | All Rights Reserved ",i.a.createElement("br",null),"Developed as a side project"))))}}]),t}(i.a.Component),y=(a(52),a(53),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"project-item-div"},i.a.createElement("div",{class:"project-item-content"},i.a.createElement("a",{href:this.props.link},i.a.createElement("div",{class:"project-image-div",style:{backgroundImage:"url(".concat(this.props.image,")")}})),i.a.createElement("div",{class:"project-title"},this.props.title),i.a.createElement("div",{class:"project-description"},this.props.description),i.a.createElement("div",{class:"project-contribution"},this.props.contribution),i.a.createElement("div",{class:"project-technologies"},this.props.technologies)),i.a.createElement("div",{class:"project-item-footer"},i.a.createElement("a",{href:this.props.github,target:"_blank"},i.a.createElement("img",{src:a(54),width:"40",class:"github-logo"}))))}}]),t}(i.a.Component)),j=a(25),O=a.n(j),k=a(26),D=a.n(k),P=a(27),R=a.n(P),x=a(28),I=a.n(x),A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"projects-div"},i.a.createElement("div",{class:"projects-content-container"},i.a.createElement("div",{class:"projects-title"},"My Projects"),i.a.createElement("div",{class:"projects-content"},i.a.createElement(y,{title:"Visionary Development Studios",image:D.a,link:"https://google.com",description:"A SaaS model web application that will be the first social platform where users can plan, pledge, commit, and act on setting the planet to the path of environmental sustainability.",contribution:"Designed the entirety of UI and UX elements of web application on Figma with Photoshop and Illustrator. Developed the front-end client application using React.js. Integrated many API's including a realtime event tracking calendar",technologies:"React | Javascript | Figma  Photoshop | Illustrator",github:"https://www.visionary.app/"}),i.a.createElement(y,{title:"Canadian Computing Competition",image:I.a,description:"A portfolio of CCC Junior problems available on the online grader while studying for the junior competition. Attained a perfect score on majority of problems",contribution:"Includes implementation of fundamental data structures and algorithms. High focus of graph theory with DFS and BFS traversals and recursive solutions with memoization",technologies:"Python",github:"https://github.com/DanielYu2004/CCC-Junior-Solutions"}),i.a.createElement(y,{image:O.a,title:"Whistler",description:"A blockchain web application that allows users to securely and anonymously upload whistleblower complaints using the Inter Planetary File System and Metamask authentication",contribution:"Developed front-end client application using React.js. Integrated Fetch API to connect client application to Node webserver. Implemented client-side file upload system to connect with Inter Planetary File System",technologies:i.a.createElement("div",null," Node.js | Fetch API | Javascript  ",i.a.createElement("br",null),"  React | Illustrator"),github:"https://github.com/DanielYu2004/Whistler-Hack-The-Hammer"}),i.a.createElement(y,{image:R.a,title:"Organotes",description:"An online digitizing cue card generator where users can upload handwritten notes and receive online cue cards using Google Vision API and Imgur Upload API",contribution:"Developed front-end client application using React.js with interactive digital cue cards. Implemented Imgur Upload API with file upload system to feed into Google Vision API. Implemented Fetch API to connect to Node webserver",technologies:i.a.createElement("div",null," React | Node.js | Express ",i.a.createElement("br",null)," Imgur API | Photoshop"),github:"https://github.com/DanielYu2004/Organotes-MLH-Local-Hack-Day"})),i.a.createElement("div",{class:"footer-div-projects"},i.a.createElement("div",{class:"footer-copyright"},"\xa9\ufe0f Daniel Yu | All Rights Reserved ",i.a.createElement("br",null),"Developed as a side project"))))}}]),t}(i.a.Component),M=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(w,null),i.a.createElement(h.c,null,i.a.createElement(h.a,{path:"/home",component:v}),i.a.createElement(h.a,{path:"/about",component:p}),i.a.createElement(h.a,{path:"/awards",component:C}),i.a.createElement(h.a,{path:"/projects",component:A}),i.a.createElement(h.a,{path:"/resume"}),i.a.createElement(h.a,{exact:!0,path:"/",component:v}))))}}]),t}(i.a.Component);l.a.render(i.a.createElement(M,null),document.getElementById("root"))}]),[[29,1,2]]]);
//# sourceMappingURL=main.c902fe46.chunk.js.map