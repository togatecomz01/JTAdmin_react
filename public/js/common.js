$(document).ready( function() {
	$(".LNB .ST-Ac-Button").click(function(){ // LNB
		var tg = $(this).siblings(".LNB .ST-Ac-Action");
		var dis = tg.css("display");
		if (dis=="none") {
			$(".LNB .ST-Ac-Button").removeClass("Active");
			$(".LNB .ST-Ac-Action").slideUp(300);
			$(this).addClass("Active");
			tg.slideDown(300);
		} else {
			$(".LNB .ST-Ac-Button").removeClass("Active");
			$(".LNB .ST-Ac-Action").slideUp(300);
		}
		return false;
	});


});

/*
* 3자릿수 콤마
*/
function comma(str)
{
	str = String(str);
	return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

/*
* 3자릿수 콤마제거
*/
function uncomma(str)
{
	return str.replace(/[^\d]+/g,'');
}

/*
* 숫자만 입력 
*/
function inputNumberFormat(obj)
{
	obj.value = uncomma(obj.value);
}


