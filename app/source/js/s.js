// index.js

var param = window.location.search;
var decoded = decodeURIComponent(param); // URLデコード
decoded = decoded.substr(3); // ?p= を切り取る
console.log(decoded);
