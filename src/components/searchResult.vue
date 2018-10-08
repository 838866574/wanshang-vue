<template>
	<div>
		<o_header></o_header>
			
		<div class="mbNav nyMargin" style="border: none;">
			<a>首页</a>&gt;<a class="act">搜索结果</a>
		</div>
		<img class="img100 middle" src="../assets/img/ny03.png" />
		<div class="searchResult nyMargin">
			
			
			<div class="nyTit">搜索结果</div>
			
			<div class="xgjg">搜索  “<span class="red">万商天勤</span> ” 相关结果</div>
			
			<div class="jgList">
				<ul>
					<li>
						<div class="tit">万商天勤助力钜派投资集团集团旗下公司设立境外美元基金</div>
						<div class="date">2018-07-04</div>
					</li>
					<li>
						<div class="tit">万商天勤助力钜派投资集团集团旗下公司设立境外美元基金</div>
						<div class="date">2018-07-04</div>
					</li>
					<li>
						<div class="tit">万商天勤助力钜派投资集团集团旗下公司设立境外美元基金</div>
						<div class="date">2018-07-04</div>
					</li>
					<li>
						<div class="tit">万商天勤助力钜派投资集团集团旗下公司设立境外美元基金</div>
						<div class="date">2018-07-04</div>
					</li>
					<li>
						<div class="tit">万商天勤助力钜派投资集团集团旗下公司设立境外美元基金</div>
						<div class="date">2018-07-04</div>
					</li>
					<li>
						<div class="tit">万商天勤助力钜派投资集团集团旗下公司设立境外美元基金</div>
						<div class="date">2018-07-04</div>
					</li>
					<li>
						<div class="tit">万商天勤助力钜派投资集团集团旗下公司设立境外美元基金</div>
						<div class="date">2018-07-04</div>
					</li>
					<li>
						<div class="tit">万商天勤助力钜派投资集团集团旗下公司设立境外美元基金</div>
						<div class="date">2018-07-04</div>
					</li>
					<li>
						<div class="tit">万商天勤助力钜派投资集团集团旗下公司设立境外美元基金</div>
						<div class="date">2018-07-04</div>
					</li>
				</ul>
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