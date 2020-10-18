学习笔记
js css setting 用法：
domElement.style.backgroundColor = 'color'


Json to string:
JSON.stringfy(object)
String to Json:
JSON.parse(stringobj)

js 中queue：
push+shift / pop+unshift
stack：
push+pop /shift/unshift

cats.unshift('russian blue','ragdoll','siasame');  从左开始往array里面加东西
cats.shift()

js中没有a< x < b 这样连写的语法，必须用 a <b && b <c
copy initialization 的方法：Object.create(obj)

用async 里面没有await也不会报错

启发式搜索：A*，greedy算法，每次取出一个最接近终点的点，能到就用它，不能的话再回queue里面找最近的点，直到找完/找到为止。