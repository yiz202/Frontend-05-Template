学习笔记

1. 语言：
乔姆斯基谱系
形式语言
0 无限制
1 上下文相关
2 上下文无关（哪儿都是一样）
3 正则文法

上下包含，3属于2属于1属于0 反过来就不对了
非形式语言：中文

2. 产生式： 在计算机中指 Tiger 编译器将源程序经过词法分析（Lexical Analysis）和语法分析（Syntax Analysis）后得到的一系列符合文法规则（Backus-Naur Form，BNF）的语句

巴科斯诺尔范式：即巴科斯范式（英语：Backus Normal Form，缩写为 BNF）是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。它是由约翰·巴科斯（John Backus）和彼得·诺尔（Peter Naur）首先引入的用来描述计算机语言语法的符号集。

终结符： 最终在代码中出现的字符（ https://zh.wikipedia.org/wiki/ 終結符與非終結符)

用途
数据描述 JSON，HTML，XAML，SQL，CSS
编程语言 C python js
声明式： JSON HTML HASKELL，LISP
命令式语言： Ruby，python

图灵完备性
所有可计算的语言都能被描述

动态：runtime 运行
静态：compile time

Types
Number    有理数，double float     0,0., .2, 1e3
ex: 0.toString() //报错     正确写法： 0 .toString()
String
Boolean
Object
Null  有值，但是空 Null typeof "object"
Undefined   最好不赋值，可以检查undefined
Symbol  用于object索引，专门用于object属性名，取不到symbol变量，干着急

Number    有理数，double float     0,0., .2, 1e3
ex: 0.toString() //报错     正确写法： 0 .toString()

String: 

undefined 全局变量 可赋值，如何表示undefined？ void 0， 或者void后面跟任何
Null 关键字

Object
改变对象状态
key：symbol(用变量得到，2个symbol即使名字一样，也是不相等的) or strig()

数据属性（描述状态）： data property【【value】】任何js的值 7种类型之一
            writable 
            enumerable
            configurable,false 之后，上面几种属性都不能改了，但可以用define property来强行更改
 访问器属性   accessor property（描述行为）
        get
        set
        enumerable
        configurable
Object API
{} . [] Object.defineProperty   改变/获取对象value
Object.create/Object.setPrototypeOf/Object.getPrototypeOf   基于原型的对象API
new/class/extends  基于类的API

特殊对象
Function  typeOf = function    [[call]]  有call的话 对象就能用 （）方法被call, [[]] 访问不到
Array   
window setTimeout   hostobject

