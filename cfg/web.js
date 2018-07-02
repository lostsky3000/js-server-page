

var hosts = [
{
	//==== listen port 
	//==== 监听端口号
	port:8080,       
	
	//==== RootDirectory,relativePath or absolutePath
	//==== web根目录，支持相对路径和绝对路径
	root:'example',  
	
	//==== url suffix, default is 'jssp'
    //==== url访问时的后缀名,默认为jssp	
	//sfx:'php',
	
	//==== 'server' in response header, default is 'dfactor-js'
	//==== 设置http响应里header的server字段
	//server_name:'nginx',
	
	//==== use https, pub=public cert file path, pri=private key file path
	//==== 开启https, pub为公钥文件(证书)路径, pri为私钥文件路径
	//ssl:{pub:'/var/ssl/pub.cert', pri:'/var/ssl/pri.pem'},
	
	//==== session expire time in second
	//==== session 失效时长，单位：秒
	//session_expire = 2000,
	
	//==== is response error msg when server error happened
	//==== 如果开启，服务器发生错误将返回错误信息
	//error_report : true,
	
	//==== index page search path, default is: index.html, index.jssp 
	//==== 首页文件优先级，默认为: index.html, index.jssp 
	//index:['index.html', 'index.jssp'],
	
	//==== http request content max size in MB, default is 5
	//==== http请求数据大小上限，单位：MB，默认为 5
	//req_max_size:10,    
}


//==== can specify another virtual host 
//==== 可以指定另一个虚拟主机配置
/*
,
{
	port:9090,
	root:'/var/web2'
}*/

];




/*
var worker = {
	
	//==== thread pool init size 
    //==== 初始处理线程的数量
	base:5,
	
	//==== max active thread size 
	//==== 最大处理线程数量
	max:100
}
*/








