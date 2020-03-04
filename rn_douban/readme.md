java SE jdk 8.0+
配置jdk的环境变量

android sdk 最新的
配置环境变量

python 2.0+

node 10.0+ 

react-native 2.0+ (node不能用最新的12.0+，会报错)

jdk环境变量配置成功校验指令 javac

android环境变量配置成功校验指令 adb

Python配置环境变量

adb connect 172.0.0.1:62001 连接模拟器
adb devices 连接真机，真机需要打开开发者模式
adb kill-server 杀掉所有进程

react-native init 初始化项目下载文件会很耗时间
报错：
1.报 adnroid skd 某个版本 license 没有许可，按照这个地址解决：https://segmentfault.com/a/1190000008395219
2.报 缺少一个 local.properties 文件错，自己可以新建一个文件，内容是android sdk安装路径 sdk.dir=D\:\\Android\\android-sdk-windows

ps：每次运行项目都会出点问题，然后需要重新启动