<template>
	<div>
		<o_header></o_header>
			
		<div class="mbNav nyMargin" style="border: none;">
			<a>首页</a>&gt;<a>万商天勤</a>&gt;<a class="act">荣誉奖项</a>
		</div>
		<img class="img100 middle" src="../assets/img/ny06.png" />
		<div class="nyMargin aboutRyjx">
			
			
			<div class="nyTit">荣誉奖项</div>
			
			<div class="font18" style="line-height: 1.67; color: #9b9b9b;">
				“ 多年来为客户提供卓越的服务，呈献法律及商业解决方案，深得客户及同业认可。万商天勤律师们，收获了众多行业领先媒体的赞誉 ”
			</div>
			
			<img style="margin-top: 1rem;" class="img100 middle" src="../assets/img/ryjx1.jpg" />
			
			<div class="tit">《商法》2016年度建筑及基础设施领域卓越律所大奖</div>
			<div class="cont">
				2017年1月，《商法》（China Business Law）
				公布了《 China Business Law Awards
				 2016 》，万商天勤律师事务所凭借在房地产建
				 筑和基础设施领域扎实的业务实力、出色的法律
				 服务及多年的业界声誉，荣获建筑及基础设施
				 领域（Construction & infrastructure）卓越律所大奖。
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  	gotoTeamSearchList(){
  		this.$router.push({path:'/teamSearchList'})
  	},
  }
}
</script>

<style type="text/css" lang="less">
</style>