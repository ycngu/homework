#!/usr/bin/env node

let fs = require("fs")
var dirName = process.argv[2]

var html =`<!DOCTYPE>
<title>Hello</title>
<h1>Hi</h1>`
var css =`h1{color: red;}`
var js =`var string = "Hello World"
alert(string)`

fs.exists(dirName, function(exists){
    if(exists){
        console.log('该文件夹已存在')
        process.exit(0)
    } else {
        fs.mkdirSync("./" + dirName)
        process.chdir("./" + dirName)
        fs.mkdirSync('css')
        fs.mkdirSync('js')

        fs.writeFileSync("./index.html", html)
        fs.writeFileSync("css/style.css", css)
        fs.writeFileSync("./js/main.js", js)
        console.log('创建成功')
        process.exit(0)
    }
})