function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;

}
// console.log(byId(banner));  
var index=0;
var timer = null;
var pics=byId("banner").getElementsByTagName("div");
var len=pics.length;
var prev =byId("prev");
var next =byId("next");

function slideImg(){
	var main = byId("main");
//	 console.log(byId(main));  
	main.onmousemove = function(){
	if(timer) clearInterval(timer);
	}//鼠标悬浮在main盒子上，清除定时器
	main.onmouseout =function(){
		timer = setInterval(function(){
			index++;
			if(index>=len)
			{index=0}
			changeImg();
		},2000);}
	main.onmouseout();//网页进入自动触发
	//下一张
	next.onclick = function(){
		index++;
		if(index>=len){
			index=0;
		}
		changeImg();
	}
	//上一张
	prev.onclick = function(){
		index--;
		if(index<0){
			index=len-1;
		}
		changeImg();
	}
}
function changeImg(){
	for(var i=0;i<len;i++){
		pics[i].style.display='none';
		
	}
	    pics[index].style.display='block';
}
slideImg();
