screenSizeChanging()

document.querySelector(".down-button").addEventListener("click", function(){
	fullpage.moveSectionDown('secondPage');
})

var timer = null;
window.addEventListener('resize', function(){
    if(timer == null){
        timer = setTimeout(function(){
        		screenSizeChanging()
            timer = null;
        },200);
    }
});

function screenSizeChanging(){
	if(document.documentElement.clientWidth < 768){
		var html = document.getElementById('html_template').innerHTML;
		console.log("small")
		document.getElementById('section1').innerHTML = html
	}else{
		var htmlBig = document.getElementById('html_template_big').innerHTML;
		console.log("big")
		document.getElementById('section1').innerHTML = htmlBig
	}
	fullpage.initialize('#fullpage', {
	anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage','5thpage', 'lastPage'],
	menu: '#menu',
	css3:true
	});
}