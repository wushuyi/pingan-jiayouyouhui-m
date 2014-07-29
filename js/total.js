function total(){
	var isDebug = false;
	function gadebug(){
		if(isDebug){
			alert("ok");
		}
	}
	$('.btn').click(function(){
		_gaq.push(['_trackEvent', 'button', 'click', '爸爸去哪儿-了解详情']);
		gadebug();
	});
	$('.select_box').click(function(){
		_gaq.push(['_trackEvent', 'cityselect', 'click', '点击选择城市']);
		gadebug();
	});
	$('.region_list a').click(function(){
		var address = $(this).html();
		var urlid = $(this).attr("href").split('?wid=')[1];
		if(urlid == "40001897" || urlid == "40001898"){
			address = "北京 "+address;
		}
		if(urlid == "40001887" || urlid == "40001888"){
			address = "上海 "+address;
		}
		_gaq.push(['_trackEvent', 'cityselect', 'click', '点击 '+address]);
		gadebug();
	});
}
