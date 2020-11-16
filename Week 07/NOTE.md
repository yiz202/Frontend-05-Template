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
