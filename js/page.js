var page = {
	init: function() {
		var wWidth = $(window).width();
		var wHeight = $(window).height();
		var pWidth = wWidth;
		var pHeight = 1096 / 640 * wWidth;
		$(".map").width(640);
		var mapHeight = 651 / 640 * wWidth;
		$(".map").height(mapHeight);


		$(".map_oil").hide();
		$(".map_bg").hide();
	},
	start: function(){
		$(".map_oil").show();
		$(".map_bg").show();
	}
};

var map = {
	init: function() {
		$(".map_oil").css({
			top: 308,
		});
	},
	start: function() {
		$(".map_oil").animate({
			top: 120,
		}, 4000, "easeOutQuad");
	}
}
var line = {
	init: function(){
		$(".line").css({
			width: 0,
		});
		$(".line_3").css({
			width: 46,
			height: 0,
			paddingBottom: 0,
		})
		$(".icon").hide();
	},
	start: function(){
		addoil.start();
		var time = 6;
		$(".line_1").animate({
			width: 120.
		}, 130*time, function(){
				line.icon($(".icon_1"), -50);
				$(".line_2").animate({
					width: 98,
				}, 98*time, function(){
					line.icon($(".icon_2"), -50);
					$(".line_3").animate({
						height: 160,
						paddingBottom: 34,
					}, 160*time, function(){
						line.icon($(".icon_3"), -30);
					});
				});
			});
	},
	icon: function(obj, val){
		obj.show().children(".icon_top").css("margin-top", val).animate({
			marginTop: 0,
		}, 3000, "easeOutElastic");
	},
}
var addoil = {
	init: function(){
		/*
		$(".addoil").css({
			width: 0,
			height: 0,
			marginTop: 175,
			left: -300,
		});
		*/
	},
	start: function(){
		/*
		$(".addoil").animate({
			width: 213,
			height: 175,
			marginTop: 0,
			left: 10,
		}, 1000, "easeOutElastic");
		*/
		 TweenLite.from($(".addoil"), 1, {
				top: 602,
				ease:Elastic.easeOut,
				onComplete: function() {
				//	line.start();
				}
          });
	}
}
var addsList = {
	data: "",
	list: new Array(),
	init: function(){
		$.getJSON("./js/addsjson.js", function(data){
			addsList.data = data.data;
			addsList.start();
		});
		$(".select_box").click(function(){
			$(this).children(".triangle").toggleClass("active");
			$(".city_list").toggleClass("active");
		});
	},
	start: function(){
		//console.log(addsList.data);
		var region="", adds="", i, j;
		var adds_list = new Array();
		for(i in addsList.data){
			region += '<li class="region">'+addsList.data[i].region+'<span class="list_icon"></li>\n';
			var region_adds="";
			//console.log(iplookup.city);
			for(j in addsList.data[i].data){
				region_adds += '<li><a target="_blank" href="'+addsList.data[i].data[j].link+'" >'+addsList.data[i].data[j].adds+'</a></li>\n';
			}
			var num = parseInt(i) + 1;
			adds_list[num]= '<div class="scroll"><div class="scroll_box"><ul class="adds_list adds_list_'+i+'">\n'+region_adds+'</ul></div></div>';
		}
		adds_list[0] = '<ul class="region_list">\n'+region+'</span></ul>';
		addsList.list = adds_list;
		//console.log(addsList.list);
		addsList.view();
	},
	view: function(){
		$(".city_list").html(addsList.list[0]);
		$(".region").each(function(i){
			i+=1;
			$(this).append(addsList.list[i]);
			$(this).find(".scroll").hide();
			$(this).click(function(){
				$(".region").removeClass("active").children(".list_icon").removeClass("active")
				$(".scroll").hide();
				$(this).find(".scroll").show();
				$(this).addClass("active").children(".list_icon").addClass("active")
				//$(this).find(".scroll").jScrollPane();
			});
		});
		addsList.viewReset();
	},
	viewReset: function(){
		var beijing = '<a href="javascript:void(0)" style="height: 40px;">北京</a><span style="display: none;height: 23px;padding-left: 30px;float:left;"><a target="_blank" href="http://creditcard.pingan.com/cms-tmplt/creditecard/searchPreferentialInformDetail.do?wid=40001897" style="display: block;float: left;width: 90px;font-size: 24px;text-decoration: blink; color: #5D5D5D;">中石油</a><a target="_blank" href="http://creditcard.pingan.com/cms-tmplt/creditecard/searchPreferentialInformDetail.do?wid=40001898" style="display: block;float: left;width: 90px;font-size: 24px;text-decoration: blink; color: #5D5D5D;">中石化</a></span>';
		var shanghai = '<a href="javascript:void(0)" style="height: 40px;">上海</a><span style="display: none;height: 23px;padding-left: 30px;float:left;"><a target="_blank" href="http://creditcard.pingan.com/cms-tmplt/creditecard/searchPreferentialInformDetail.do?wid=40001887" style="display: block;float: left;width: 90px;font-size: 24px;text-decoration: blink; color: #5D5D5D;">中石油</a><a target="_blank" href="http://creditcard.pingan.com/cms-tmplt/creditecard/searchPreferentialInformDetail.do?wid=40001888" style="display: block;float: left;width: 90px;font-size: 24px;text-decoration: blink; color: #5D5D5D;">中石化</a></span>';
		$(".adds_list_0 li:first").html(beijing).click(function(){
			$(this).toggleClass("list_open");
			if($(this).attr("class") == "list_open"){
				$(this).css({"height": "86px"});
				$(this).children("span").show();
			}else{
				$(this).css({"height": "auto"});
				$(this).children("span").hide();
			}
		});;//.css({"height": "62px"});
		$(".adds_list_1 li:first").html(shanghai).click(function(){
			$(this).toggleClass("list_open");
			if($(this).attr("class") == "list_open"){
				$(this).css({"height": "86px"});
				$(this).children("span").show();
			}else{
				$(this).css({"height": "auto"});
				$(this).children("span").hide();
			}
		});
		$(".adds_list_3 li:eq(4) a").css({"color": "#D3D3D3"});
		//$(".adds_list_3 li:eq(6) a").css({"color": "#D3D3D3"});
		total();
	}
}
$(document).ready(function(){
	page.init();
	map.init();
	line.init();
	addoil.init();
	addsList.init();
});
$(window).load(function(){
	page.start();
	map.start();
	line.start();
});
