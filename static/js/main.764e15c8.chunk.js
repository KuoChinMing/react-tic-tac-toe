(this["webpackJsonpreact-tic-tac-toc"]=this["webpackJsonpreact-tic-tac-toc"]||[]).push([[0],{12:function(e,t,r){"use strict";r.r(t);var s=r(11),n=r(8),a=r(5),c=r(6),i=r(9),u=r(7),o=r(0),l=r(1),h=r.n(l),j=r(10),b=r.n(j),d=(r(18),function(e){return Object(o.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}),x=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(o.jsx)(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"board-row",children:[Object(o.jsx)(d,{value:this.props.squares[0],onClick:function(){return e.props.onClick(0)}}),this.renderSquare(1),this.renderSquare(2)]}),Object(o.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(o.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(h.a.Component),O=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(e){var s;return Object(a.a)(this,r),(s=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},s}return Object(c.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1],s=Object(n.a)(r.squares);v(s)||s[e]||(s[e]=this.state.xIsNext?"X":"O",this.setState({history:[].concat(Object(n.a)(t),[{squares:s}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e=this,t=this.state.history.slice(0,this.state.stepNumber+1),r=t[this.state.stepNumber],s=t.map((function(t,r){var s=r?"Go to move #".concat(r):"Go to game start";return Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:function(){return e.jumpTo(r)},children:s})},r)})),n=v(r.squares),a=n?"Winner: ".concat(n):"Next Player: ".concat(this.state.xIsNext?"X":"O");return Object(o.jsxs)("div",{className:"game",children:[Object(o.jsx)("div",{className:"game-board",children:Object(o.jsx)(x,{squares:r.squares,onClick:function(t){return e.handleClick(t)}})}),Object(o.jsxs)("div",{className:"game-info",children:[Object(o.jsx)("div",{children:a}),Object(o.jsx)("ol",{children:s})]})]})}}]),r}(h.a.Component);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(s.a)(t[r],3),a=n[0],c=n[1],i=n[2];if(e[a]&&e[a]===e[c]&&e[a]===e[i])return e[a]}return null}b.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))},18:function(e,t,r){}},[[12,1,2]]]);
//# sourceMappingURL=main.764e15c8.chunk.js.map