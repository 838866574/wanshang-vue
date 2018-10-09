<template>
	<div>
		<o_header></o_header>
		<div class="aboutGyls">
			
			<div class="mbNav nyMargin" style="border: none;">
				<a>首页</a>&gt;<a class="act">联系我们</a>
			</div>
			
			
			<!--map-->
			<div class="banner_map">
				<div style="width: 100%; height: 100%;" id="banner_map"></div>
				<ul class="mapBtn">
					<li @click="changgeOverlay('bj')" class="act"><i class="iconfont icon-lawyer_office"></i>北京</li>
					<li @click="changgeOverlay('sz')"><i class="iconfont icon-lawyer_office"></i>深圳</li>
					<li @click="changgeOverlay('sh')"><i class="iconfont icon-lawyer_office"></i>上海</li>
					<li @click="changgeOverlay('cd')"><i class="iconfont icon-lawyer_office"></i>成都</li>
				</ul>
			</div>
			<!--map-end-->
			
			<div class="nyMargin">
				
				<div class="nyTit">联系我们</div>
				
			</div>
			
		</div>
		<o_footer></o_footer>
	</div>
</template>

<script>

import o_header from '@/components/base/header'; 
import o_footer from '@/components/base/footer';
	
export default {
  name: 'teamSearch',
  components: {
    o_header,
    o_footer
  },
  data () {
    	return {
      		msg: 'Welcome to Your Vue.js App',
//    		map: '',
//    		point_bj: (116.486048,39.912741),
//			var point_sz = new BMap.Point(114.070292,22.549871);        // 深圳    
//			var point_sh = new BMap.Point(121.512382,31.241039);        // 上海    
//			var point_cd = new BMap.Point(104.074896,30.558684);        // 成都    
    	}
  },
  mounted() {
		this.intMap();
  },
  methods: {
  	
  	intMap(){
  		var _this = this;
  		var map = new BMap.Map("banner_map"); 
		map.addControl(new BMap.NavigationControl());
		map.centerAndZoom(new BMap.Point(116.486048, 39.912741), 18); 
		var point_bj = new BMap.Point(116.486048,39.912741);
		var point_sz = new BMap.Point(114.070292,22.549871);        // 深圳    
		var point_sh = new BMap.Point(121.512382,31.241039);        // 上海    
		var point_cd = new BMap.Point(104.074896,30.558684);        // 成都    
		
		console.log(point_bj)
		
		var marker_bj = new BMap.Marker(point_bj);        // 创建标注
		var marker_sz = new BMap.Marker(point_sz);        // 创建标注
		var marker_sh = new BMap.Marker(point_sh);        // 创建标注
		var marker_cd = new BMap.Marker(point_cd);        // 创建标注
		map.addOverlay(marker_bj);
		map.addOverlay(marker_sz);   
		map.addOverlay(marker_sh);   
		map.addOverlay(marker_cd);
		$(".mapBtn li").click(function(){
			$(".mapBtn li").removeClass('act')
			$(this).addClass('act')
		});
			
//		function changgeOverlay(city){
//			if(city == 'bj'){
//				map.panTo(point_bj)
//			}
//			if(city == 'sz'){
//				map.panTo(point_sz)
//			}
//			if(city == 'sh'){
//				map.panTo(point_sh)
//			}
//			if(city == 'cd'){
//				map.panTo(point_cd)
//			}
//		}
  	},
  	changgeOverlay(city){
  		console.log(city);
  		if(city == 'bj'){
			BMap.panTo(point_bj)
		}
		if(city == 'sz'){
			var point_sz = new BMap.Point(114.070292,22.549871);        // 深圳    
			BMap.panTo(point_sz)
		}
		if(city == 'sh'){
			map.panTo(point_sh)
		}
		if(city == 'cd'){
			map.panTo(point_cd)
		}
  	},
  	
  	gotoTeamSearchList(){
  		this.$router.push({path:'/teamSearchList'})
  	},
  }
}
</script>

<style type="text/css" lang="less">
</style>