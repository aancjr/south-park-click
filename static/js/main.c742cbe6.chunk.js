(this["webpackJsonpsouth-park-click"]=this["webpackJsonpsouth-park-click"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('[{"id":1,"name":"Eric Cartman","alias":"A.W.E.S.O.M.-O 4000","image":"https://vignette.wikia.nocookie.net/southpark/images/6/6d/Awesomo-0.png/revision/latest?cb=20170601014435"},{"id":2,"name":"Kenneth \'Kenny\' McCormick","alias":"Mysterion","image":"https://vignette.wikia.nocookie.net/southpark/images/1/1c/Mysterion_2.png/revision/latest/scale-to-width-down/620?cb=20171107042555"},{"id":3,"name":"Leopold \'Butters\' Scotch","alias":"Professor Chaos","image":"https://vignette.wikia.nocookie.net/southpark/images/b/b8/Professor-chaos.png/revision/latest?cb=20180409101847"},{"id":4,"name":"Kyle Broflovki","alias":"The Human Kite","image":"https://vignette.wikia.nocookie.net/southpark/images/4/4c/HighJewElfKing.transparent.png/revision/latest?cb=20190411032218"},{"id":5,"name":"Stanley \'Stan\' Marsh","alias":"Toolshed","image":"https://vignette.wikia.nocookie.net/southpark/images/b/bd/Toolshed.transparent.png/revision/latest?cb=20170527025409"},{"id":6,"name":"Craig Tucker","alias":"Feldspar the Thief","image":"https://vignette.wikia.nocookie.net/southpark/images/7/77/Feldspar-the-theif.png/revision/latest?cb=20170530123940"},{"id":7,"name":"Tweek Tweak","alias":"Wonder Tweek","image":"https://vignette.wikia.nocookie.net/southpark/images/1/1b/Wonder-tweek-000.png/revision/latest?cb=20170815182943"},{"id":8,"name":"Wendy Testaburger","alias":"Call Girl","image":"https://vignette.wikia.nocookie.net/southpark/images/6/61/Latest-1.png/revision/latest?cb=20170531064404"},{"id":9,"name":"Jimmy Valmer","alias":"Fastpass","image":"https://vignette.wikia.nocookie.net/southpark/images/e/e6/Fastpass-00.png/revision/latest/scale-to-width-down/619?cb=20170815182503"},{"id":10,"name":"Token Black","alias":"Tupperware","image":"https://vignette.wikia.nocookie.net/southpark/images/e/e8/Latest-15.png/revision/latest?cb=20170530124632"},{"id":11,"name":"Bradley Biggle","alias":"Mintberry Crunch","image":"https://vignette.wikia.nocookie.net/southpark/images/c/c7/Mint-berry-crunch.png/revision/latest?cb=20171023030230"},{"id":12,"name":"Towelie","alias":"Smart Towel RG-400","image":"https://vignette.wikia.nocookie.net/southpark/images/0/07/Towelie-0.png/revision/latest/scale-to-width-down/619?cb=20170604100720"}]')},40:function(e,t,a){e.exports=a(52)},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(12),s=a.n(o),r=(a(46),a(37)),c=a(30),l=a(31),h=a(38),m=a(32),u=a(39),g=a(24),d=a(20),k=a(34);a(47);var p=function(e){return i.a.createElement(d.a,null,i.a.createElement(g.a,{className:"charbtn",id:"buttonshadow",variant:"outline-*",onClick:function(){return e.southParkMemory(e.id)}},i.a.createElement(k.a,{className:"imgsize",varient:"top",src:e.image,alt:e.name}),i.a.createElement(d.a.Body,{className:"cardbody"},i.a.createElement(d.a.Text,{className:"title text-center"},e.name),i.a.createElement(d.a.Text,{className:"cardtext text-center"},i.a.createElement("strong",null,"Alias:")," ",e.alias))))},f=a(27);a(48);var w=function(e){return i.a.createElement(f.a,{className:"nav",bg:"light"},i.a.createElement(f.a.Brand,null,i.a.createElement("strong",null,"South Park Rodeo!")),i.a.createElement("span",{className:"ml-auto"},i.a.createElement("strong",null,"Score:"," ",i.a.createElement("span",{className:"currentScore",id:"currentScore"},e.score)," ","| High Score:"," ",i.a.createElement("span",{className:"highScore",id:"highScore"}," ",e.highscore))))},v=a(16);var b=function(e){return i.a.createElement(v.a,{show:e.show,onHide:e.close},i.a.createElement(v.a.Header,null,i.a.createElement(v.a.Title,{className:"mx-auto"},"South Park Rodeo!")),i.a.createElement(v.a.Body,null,i.a.createElement("p",null,"Welcome to South Park Rodeo!"),i.a.createElement("p",null,"The object of the game is to click each South Park character"," ",i.a.createElement("strong",null,"once"),". Each time a character is clicked on, the score will increase by one and the cards will shuffle. If a character is clicked on twice, the game ends, your highscore is tallied and the game restarts. The total maximum number of points is 12 (one point per character)."),i.a.createElement("p",null,'Click "Close" to begin the game!')),i.a.createElement(v.a.Footer,null,i.a.createElement(g.a,{variant:"success",onClick:e.close},"Close")))},E=a(19),S=a(35),y=a(36),T=(a(29),a(51),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={clicked:[],friends:E,highScore:0,score:0,show:!1,setShow:!1},a.southParkMemory=function(e){a.state.clicked.includes(e)?(alert("Okay, let's try this again!"),a.setState({clicked:[],friends:E,score:0}),console.log("High Score: ".concat(a.state.highScore))):(a.setState((function(t){return{clicked:[e].concat(Object(r.a)(t.clicked)),score:a.state.score+1}})),console.log(a.state.clicked))},a.highscore=function(){a.state.score>=12?(a.setState({highScore:12,clicked:[],score:0}),alert("YOU WON! Let's go to City Wok!")):a.state.score>a.state.highScore&&a.setState({highScore:a.state.score})},a.shuffleCards=function(e){if(a.state.score<=12)for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*e.length),i=e[t];e[t]=e[n],e[n]=i}return e},a.handleShow=function(){0===a.state.highScore&&a.setState({show:!0,setShow:!0})},a.handleClose=function(){a.setState({show:!1,setShow:!1})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.shuffleCards(E),this.handleShow()}},{key:"componentDidUpdate",value:function(){this.shuffleCards(E),this.highscore()}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(w,{score:this.state.score,highscore:this.state.highScore}),i.a.createElement(b,{show:this.state.show,close:this.handleClose}),i.a.createElement(S.a,null,i.a.createElement(y.a,{className:"tile-row justify-content-center"},this.state.friends.map((function(t){return i.a.createElement(p,{southParkMemory:e.southParkMemory,key:t.id,id:t.id,name:t.name,image:t.image,alias:t.alias})})))))}}]),t}(n.Component));s.a.render(i.a.createElement(T,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.c742cbe6.chunk.js.map