学习笔记
类型转换
双等，如果两边类型不一致，会先转换成boolean
string to Boolean是“” 而不是“false”，所以“false”==false 不相等
NAN: not a number
=========================================================
unboxing：covert object to 普通类型
Symbol.oPremitive
toString
valueOf

var o = {
    toString() {return '2'},
    valueOf(){return 1},
    [Symbol.toPrimitive]() {return 3}
}
1)
console.log('x'+o)
如果有toPrimitive的话就是 x3
如果comment out toPrimitive的话因为加法，所以会调用valueOf()
如果comment out valueOf() 就会调用toString（）

2）
var x = {}
x[o] = 1
o 如果作为属性名的话会优先调用toString方法（如果toPrimitivecommennt out就会x2）

绕开双等
=========================================================
Boxing

undefined ,Null 没有包装类
剩下的Number String Boolean Symbol都能用new 调用
ex for number，如果直接调用就是产生值，用new调用会产生object
比如New Number(1) 和 1 存在装箱关系
注意Symbol的包装类是Object， new Object(Symbol('a')),值为 Symbol('a')
可以用typeof区分到底是包装后的对象还是包装前的值

=========================================================
运行时statement
Completion Record
存在与js engine执行的电脑里，需要一个数据结构来描述语句的执行结果，是否返回了，返回得值是什么，等
[[type]] normal break continue return or throw
[[value]] 基本类型
[[target]] label 语句前加上标识符和冒号，break和continue会跟label交互，用completion record分析语句运行的结果

=========================================================
简单语句和复合语句
debugger statement  debugger关键字加分号 专门给调试用的，触发debugger断点

WithStatement 不要用
LabelledStatement 加上一个label
TryStatemennt，try,catch,finnally，就算在catch里面return了，finally还是会执行

带label的break在多层嵌套循坏使用时可以一下子跳出

声明：
Function * generator
async Function  
async Function*
function
var
以上declare之前用不会报错

Variable Statement
CLass
const let -》lexical

预处理，在代码执行之前呢，js engine会对代码预处理
var 在预处理时会被调出来把这个变量声明到当前函数的额作用级别
var a = 2
void function() {
    a = 1
    return
    var a;
}();
console.log(a)
结果打印2
======================
const
var a = 2
void function() {
    a = 1
    return
    const a;
}();
console.log(a) //也是2
所有的声明都有预处理，都能把变量变成局部变量，但是 const的话在声明前引用就会抛错，可以被try catch处理
scope 作用域
var作用范围就是函数体，代码从哪到哪发生作用 
const作用域在他所在的花括号

var a = 2
void function() {
    a = 1;
    {
        var a;
    }
}();
console.log(a); //2

var a = 2
void function() {
    a = 1;
    {
        const a;
    }
}();
console.log(a); //Uncaught SyntaxError: Missing initializer in const declaration

const 的作用域是block，也就是这个变量只对于某个block有用，const在循环语句下每次循环都产生新的function scope, every iteration creates a new lexical scope
var的作用域是他所在的函数体

在block的scope里，或者在iife里面的variable（const or let）不会被 block外面所拿到
const outside = 'foo';

// This only works for block-scope variables (i. e. `const` and `let`).
{
  const inside = 'bar';

  console.log(outside); 'foo'
  console.log(inside); 'bar'
}

console.log(outside); // 'foo'
console.log(inside); // ReferenceError
=====================================================================================
宏任务(to js engine) 把代码塞给engine让他执行
微任务(promise产生的) 每个异步都是不一样的微任务
事件循坏：
如何使用engine的过程，来自node的概念

独立的thread get code -> execute -> wait（implement的时候就是等待锁，等待IO，user event） ->get code

======================================================================================
同一个微任务里面 函数调用
每个stack里面有execution context,执行一个语句的时候所需要的东西都会保存在这里
正在跑的running execution context
lexical env: this, new.target, super, variable
variable env: 历史的遗留包袱，var 的声明,专门给eval('var x;')
{
    let y = 2 //声明到block作用域
}
{
    eval('var x = 1;')  //声明到更大 function/script body里面
}
with({a:1}){    
    eval('var x') //穿过with声明到更外层的function
}
======================================================================================
env record

[],{} 原型是什么呢
realm