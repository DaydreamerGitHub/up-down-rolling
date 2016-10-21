;(function($){
	//iscroll5
	/*var scroller = new IScroll("#",{
		"click":true,
		"mouseWheel":true,
		"probeType":3
	});*/
	//iscroll4
	init()
	function init(){
		var homeis = new iScroll("main",{
			onBeforeScrollStart:function(e){
				var tar = e.target||e.srcElement;
				var tag = tar.nodeName.toLowerCase();
				if(tag!="select" && tag!="input" && tag!="a" && tag!="button" && tag!="textarea")
					e.preventDefault();
			},
		});
	};

	//$(".swiper-slide-active").next().next().css("color","#0065D1");

	//点击最高学历
	$(".p1").on("tap",function(){
		var data = getJson();
		$(".y_x").html(data.xuanzhe[0].tit);
		var str = '<div class="pleaseCT">'+
			'<span class="no">取消</span>'+
			'<h3 class="y_x">'+data.xuanzhe[0].tit+'</h3>'+
			'<span class="sure">确定</span>'+
		'</div>'+
		'<div class="swiper-container pleaseC">'+
			'<section class="twoLine"></section>'+
			'<div class="swiper-wrapper wrapper">'+
		'<div class="swiper-slide slide">'+
					'<div class="title"> </div>'+
				'</div>'+
				'<div class="swiper-slide slide">'+
					'<div class="title"> </div>'+
				'</div>'+
				'<div class="swiper-slide slide slideblue">'+
					'<div class="title">'+data.xuanzhe[0].x1+'</div>'+
				'</div>'+
		   		'<div class="swiper-slide slide">'+
					'<div class="title">'+data.xuanzhe[0].x2+'</div>'+
		    	'</div>'+
		    	'<div class="swiper-slide slide">'+
					'<div class="title">'+data.xuanzhe[0].x3+'</div>'+
		    	'</div>'+
		    	'<div class="swiper-slide slide">'+
					'<div class="title">'+data.xuanzhe[0].x4+'</div>'+
		    	'</div>'+
		    	'<div class="swiper-slide slide">'+
					'<div class="title">'+data.xuanzhe[0].x5+'</div>'+
		    	'</div>'+
		    	'<div class="swiper-slide slide">'+
					'<div class="title"> </div>'+
				'</div>'+
				'<div class="swiper-slide slide">'+
					'<div class="title"> </div>'+
				'</div>'+
			'</div>'+
		'</div>'
		$(".Scontainer").html(str)

		var mySwiper1 = new Swiper('.swiper-container',{
		  slidesPerView:5,
		  mode:'vertical',
		 	onTouchEnd: function(){
		 	  $(".swiper-slide-active").next().next().css("color","#0065D1").siblings().css("color","#000");
		 	}
		})	
		
		$(".mark").show();
		$(".Scontainer").css("bottom","0%");
		
		aaa()
	})





	//点击税后月薪
	$(".p2").on("tap",function(){
		$(".y_x").html("选择月薪");
		//console.log(getJson().xuanzhe[0].tit)
		var str = '<div class="pleaseCT">'+
			'<span class="no">取消</span>'+
			'<h3 class="y_x">'+getJson().xuanzhe[1].tit+'</h3>'+
			'<span class="sure">确定</span>'+
		'</div>'+
		'<div class="swiper-container pleaseC">'+
			'<section class="twoLine"></section>'+
			'<div class="swiper-wrapper wrapper">'+

				'<div class="swiper-slide slide">'+
					'<div class="title"> </div>'+
				'</div>'+
				'<div class="swiper-slide slide">'+
					'<div class="title"> </div>'+
				'</div>'+
				'<div class="swiper-slide slide slideblue">'+
					'<div class="title">'+getJson().xuanzhe[1].x1+'</div>'+
				'</div>'+
		   		'<div class="swiper-slide slide">'+
					'<div class="title">'+getJson().xuanzhe[1].x2+'</div>'+
		    	'</div>'+
		    	'<div class="swiper-slide slide">'+
					'<div class="title">'+getJson().xuanzhe[1].x3+'</div>'+
		    	'</div>'+
		    	'<div class="swiper-slide slide">'+
					'<div class="title">'+getJson().xuanzhe[1].x4+'</div>'+
		    	'</div>'+
		    	'<div class="swiper-slide slide">'+
					'<div class="title">'+getJson().xuanzhe[1].x5+'</div>'+
		    	'</div>'+
		    	'<div class="swiper-slide slide">'+
					'<div class="title"> </div>'+
				'</div>'+
				'<div class="swiper-slide slide">'+
					'<div class="title"> </div>'+
				'</div>'+
			'</div>'+
		'</div>'
		$(".Scontainer").html(str)
		//console.log($(".title").length)
		var mySwiper2 = new Swiper('.swiper-container',{
		  slidesPerView:"auto",
		  mode:'vertical',
		  //watchActiveIndex: true,
		 	onTouchEnd: function(){
		 	  $(".swiper-slide-active").next().next().css("color","#0065D1").siblings().css("color","#000");
		 	}
		})	
		$(".mark").show();
		$(".Scontainer").css("bottom","0%");
		aaa()
	})

	function aaa(){
		//点击弹出swiper的确定
		var ab = null;
		$(".sure").on("tap",function(){
			
			ab = $(".swiper-slide-active").next().next().find(".title").text();
			if($(".y_x")[0].innerHTML=="选择学历"){
				$(".p1").find(".please").html(ab)
			}else{
				$(".p2").find(".please").html(ab)
			}
			$(".mark").hide();
			$(".Scontainer").css("bottom","-50%");
		})
		//点击取消
		$(".no").on("tap",function(){
			$(".mark").hide();
			$(".Scontainer").css("bottom","-50%");
		})

		function getmySwiper(mySwiper){
			var mySwiper = new Swiper('.swiper-container',{
			  slidesPerView:5,
			  mode:'vertical',
			  //watchActiveIndex: true,
			 	onTouchEnd: function(){
			 	  $(".swiper-slide-active").next().next().css("color","#0065D1").siblings().css("color","#000");
			 	}
			})	
		}
	}

	function getJson(){
		var Data = null
		$.ajax({
			url:"data.json",
			dataType:"json",
			type:"get",
			async:false,
			success:function(data){
				Data = data
			},
			error:function(){
				alert("获取失败")
			}
		})
		return Data;
	}
	
})(Zepto);
