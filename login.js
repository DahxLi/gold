let username = "123";
let password = "321";
if (username === "1223" &&
	password === "321"){
		console.log("登录成功")
}else{
	console.log("登录失败，请检查密码")
	

}
function myFunction()
{
	var x=document.getElementById("demo1").value;
	if(x==""||isNaN(x))
	{
		alert("不是数字");
	}
}
window.alert("请在安全的环境登录");