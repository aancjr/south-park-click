(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Eric Cartman",alias:"A.W.E.S.O.M.-O 4000",image:"https://vignette.wikia.nocookie.net/southpark/images/6/6d/Awesomo-0.png/revision/latest?cb=20170601014435"},{id:2,name:"Kenneth 'Kenny' McCormick",alias:"Mysterion",image:"https://vignette.wikia.nocookie.net/southpark/images/1/1c/Mysterion_2.png/revision/latest/scale-to-width-down/620?cb=20171107042555"},{id:3,name:"Leopold 'Butters' Scotch",alias:"Professor Chaos",image:"https://vignette.wikia.nocookie.net/southpark/images/b/b8/Professor-chaos.png/revision/latest?cb=20180409101847"},{id:4,name:"Kyle Broflovki",alias:"The Human Kite",image:"https://vignette.wikia.nocookie.net/southpark/images/4/4c/HighJewElfKing.transparent.png/revision/latest?cb=20190411032218"},{id:5,name:"Stanley 'Stan' Marsh",alias:"Toolshed",image:"https://vignette.wikia.nocookie.net/southpark/images/b/bd/Toolshed.transparent.png/revision/latest?cb=20170527025409"},{id:6,name:"Craig Tucker",alias:"Feldspar the Thief",image:"https://vignette.wikia.nocookie.net/southpark/images/7/77/Feldspar-the-theif.png/revision/latest?cb=20170530123940"},{id:7,name:"Tweek Tweak",alias:"Wonder Tweek",image:"https://vignette.wikia.nocookie.net/southpark/images/1/1b/Wonder-tweek-000.png/revision/latest?cb=20170815182943"},{id:8,name:"Wendy Testaburger",alias:"Call Girl",image:"https://vignette.wikia.nocookie.net/southpark/images/6/61/Latest-1.png/revision/latest?cb=20170531064404"},{id:9,name:"Jimmy Valmer",alias:"Fastpass",image:"https://vignette.wikia.nocookie.net/southpark/images/e/e6/Fastpass-00.png/revision/latest/scale-to-width-down/619?cb=20170815182503"},{id:10,name:"Token Black",alias:"Tupperware",image:"https://vignette.wikia.nocookie.net/southpark/images/e/e8/Latest-15.png/revision/latest?cb=20170530124632"},{id:11,name:"Bradley Biggle",alias:"Mintberry Crunch",image:"https://vignette.wikia.nocookie.net/southpark/images/6/69/Mint-berry-crunch23.png/revision/latest?cb=20170601103450"},{id:12,name:"Towlelie",alias:"Smart Towel RG-400",image:"https://vignette.wikia.nocookie.net/southpark/images/0/07/Towelie-0.png/revision/latest/scale-to-width-down/619?cb=20170604100720"}]},,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(3),o=a.n(s),r=(a(16),a(7)),c=a(4),l=a(5),m=a(8),h=a(6),u=a(9);a(17);var g=function(e){return i.a.createElement("button",{type:"button",className:"btn shadow-none",onClick:function(){return e.southParkMemory(e.id)}},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-wrapper"},i.a.createElement("div",{className:"img-wrapper"},i.a.createElement("img",{src:e.image,className:"card-img-top",alt:e.name})),i.a.createElement("div",{className:"card-body"},i.a.createElement("h5",{className:"card-title text-center"},e.name),i.a.createElement("p",{className:"card-text text-center"},i.a.createElement("strong",null,"Alias:")," ",e.alias)))))};a(18);var d=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(19);var p=function(e){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},i.a.createElement("a",{className:"navbar-brand"},"South Park Click!"),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},i.a.createElement("span",{className:"ml-auto"},"Score: ",i.a.createElement("span",{className:"currentScore",id:"currentScore"},e.count)," | High Score: ",i.a.createElement("span",{className:"highScore",id:"highScore"}," ",e.highscore))))};a(20);var k=function(e){return i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,e.children))},v=a(1),f=(a(21),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={clicked:[],friends:v,highScore:0,count:0},a.southParkMemory=function(e){a.state.clicked.includes(e)?(alert("Try again!"),a.setState({clicked:[],friends:v,count:0}),console.log("High Score: ".concat(a.state.highScore))):(a.setState(function(t){return{clicked:[e].concat(Object(r.a)(t.clicked)),count:a.state.count+1}}),console.log(a.state.clicked))},a.highscore=function(){a.state.count>a.state.highScore&&a.setState({highScore:a.state.count})},a.shuffleCards=function(e){if(a.state.count<=12)for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*e.length),i=e[t];e[t]=e[n],e[n]=i}return e},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.shuffleCards(v)}},{key:"componentDidUpdate",value:function(){this.shuffleCards(v),this.highscore()}},{key:"render",value:function(){var e=this;return i.a.createElement(d,null,i.a.createElement(p,{count:this.state.count,highscore:this.state.highScore}),i.a.createElement(k,null,"South Park Click!"),i.a.createElement("div",{className:"container col-8"},this.state.friends.map(function(t){return i.a.createElement(g,{southParkMemory:e.southParkMemory,key:t.id,id:t.id,name:t.name,image:t.image,alias:t.alias})})))}}]),t}(n.Component));o.a.render(i.a.createElement(f,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.08cf6feb.chunk.js.map