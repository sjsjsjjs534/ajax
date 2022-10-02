/*
   * 封装一个函数，通过这个函数可以获取到html页面当中的节点，这个函数我给他取一个名字，叫jQuery
   * 要封装的代码时：根据id获取元素。document.getElementById("mybtn")
   * 设计思路主要来自于CSS的语法。#id可以获取到这个元素
   * */
function jQuery(selector){//selector是id选择器
    //根据id获取元素
    if (typeof selector == "string") {
        if (selector.charAt(0) == "#") {
            //selector是一个id选择器
            //升级成全局变量
            domObj=document.getElementById(selector.substring(1));
            return new jQuery();
        }
    }
    //页面加载完毕后，注册回调函数
    if (typeof selector == "function") {
        //selector是一个回调函数
        window.onload=selector
    }
    this.html=function (htmlStr){
        domObj.innerHTML=htmlStr
    }
    //定义一个click方法：代替domObj.Onclick=function(){}
    this.click=function (fun){
        domObj.onclick=fun
    }
    this.focus=function (fun){
        domObj.onfocus=fun
    }
    this.change=function (fun){
        domObj.onchange=fun
    }
    this.blur=function (fun){
        domObj.onblur=fun
    }
    this.val=function (v){
        if (v == undefined) {
            return domObj.value
        }else{
            domObj.value=v
        }

    }
}

$=jQuery