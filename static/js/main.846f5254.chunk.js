(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{20:function(e,t,a){e.exports=a(37)},25:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),m=a(9),o=a(1),i=(a(7),a(25),function(){return l.a.createElement("nav",{className:"navbar"},l.a.createElement(m.b,{to:"https://Artem20201610.github.io/react_people-table-basics/",className:"navbar-item is-tab",activeClassName:"is-active",exact:!0},"Home"),l.a.createElement(m.b,{to:"https://Artem20201610.github.io/react_people-table-basics/people",className:"navbar-item is-tab",activeClassName:"is-active",exact:!0},"People"))}),u=(a(31),function(){return l.a.createElement("div",{className:"home-page content is-large"},l.a.createElement("h1",null,"Home Page"))}),s=a(18),p=a(19),h=a(3),b=a.n(h),E=(b.a.shape({name:b.a.string.isRequired,sex:b.a.string.isRequired,born:b.a.number.isRequired,died:b.a.number.isRequired,motherName:b.a.string,fatherName:b.a.string}),a(32),function(e){var t=e.person;return l.a.createElement("tr",{className:"Person"},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.sex),l.a.createElement("td",null,t.born),l.a.createElement("td",null,t.died),l.a.createElement("td",null,t.motherName),l.a.createElement("td",null,t.fatherName))}),f=(a(33),function(e){var t=e.people;return l.a.createElement("table",{className:"PeopleTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Sex"),l.a.createElement("th",null,"Born"),l.a.createElement("th",null,"Died"),l.a.createElement("th",null,"Mother"),l.a.createElement("th",null,"Father"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement(E,{key:Object(p.a)(),person:e})}))))}),d=a(13),g=(a(34),function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){return e.map((function(t){return Object(d.a)(Object(d.a)({},t),{},{mother:e.find((function(e){return t.motherName===e.name})),father:e.find((function(e){return t.fatherName===e.name}))})}))})).then((function(e){r(e)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:" people-page content is-large"},l.a.createElement("h1",null,"People Page"),l.a.createElement(f,{people:a})))}),N=(a(35),function(){return l.a.createElement("div",{className:"not-found-page content is-large"},l.a.createElement("h1",null,"Page Not Found"))}),v=(a(36),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement(i,null)),l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"container"},l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"https://Artem20201610.github.io/react_people-table-basics/people"},l.a.createElement(g,null)),l.a.createElement(o.b,{path:"https://Artem20201610.github.io/react_people-table-basics/",exact:!0},l.a.createElement(u,null)),l.a.createElement(o.a,{path:"https://Artem20201610.github.io/react_people-table-basics/home",to:"https://Artem20201610.github.io/react_people-table-basics/",exact:!0}),l.a.createElement(N,null)))))});c.a.render(l.a.createElement(m.a,null,l.a.createElement(v,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.846f5254.chunk.js.map