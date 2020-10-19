const { parseCss } = require("./css/css")

const { cst } = parseCss('a { width: 5px;}')
console.log(cst)
