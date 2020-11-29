学习笔记
浏览器的工作原理
URL -> bitmap 基础渲染
URL -(HTTP)> HTML -(Parse)> DOM -(css computing)> DOM with css-(layout)>DOM with position -(render)> Bitmap

有限状态机处理字符串

浏览器 ISO OSI 7 layers

底层到高层：
数据链路，物理层   4，5G/wifi
网络 Internet， IP协议 英特网，底层数据传输
传输 TCP/UDP     “net” 包
应用，表示，会话  HTTP   “HTTP包”

流 TCP的传输，端口，TCP协议是给计算机的软件所使用的，每个软件都会去网卡拿数据，具体哪个数据是给哪个软件的，这里的网卡会根据端口把数据交给应用，node 里面就是net包。
TCP 传输一个个数据包，
libnet，labpcap c++底层哭

