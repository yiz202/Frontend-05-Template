学习笔记
专题：使用LL算法构建AST

字符串处理 AST 抽象语法术

分词，构成语法树，解析代码
构建语法树：语法分析
1） LL  从左到右扫描 规约
2） LR 

四则运算
number，1-10 .
operator +-*/
whitespace <SP>
LineTerminator

+ * 优先级关系  
+ = 左右乘法组成，重复自身的序列，递归

<Expr> = <AddictiveExpr><EOF>
乘法表达式
<MultiplicativeExpr> =
<Number>
|<MultiplicativeExpr> <*><Number>
|<MultiplicativeExpr> </><Number>

加发表达式 -数个乘法表达式用+-连在一起
<AddictiveExpr> =
<MultiplicativeExpr>
|<AddictiveExpr> <+><MultiplicativeExpr>
|<AddictiveExpr> <-><MultiplicativeExpr>

regexPattern.exec(source)  //从左到右扫描source

regexp.exec的结果是array，注意一定要在loop里面运行，因为每次match到了就会断开
index 0 的位置是刚match 上的。 
Array里的attribute：如果在原字符的i 位置match到的，那当前loop中exec的result 里面index：i
index上以后会逐个match capturing parentheses 里面的东西, 一match到就会暂时断开，做一些操作，回到loop继续match
https://unbounded.systems/blog/3-kinds-of-parentheses-are-you-a-regex-master/
