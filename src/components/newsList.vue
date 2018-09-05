<template>
	<div>
		<o_header></o_header>
		<div class="newsList nyMargin">
			
			<div class="mbNav">
				<a>首页</a>&gt;<a class="act">新闻动态</a>
			</div>
			
			<div class="nyTit">业务新闻</div>
			
			<div class="news_lbt">
				<img class="img100 middle" src="../assets/img/652864756.jpg" />
				<div class="msBxo">
					<h3>热点新闻</h3>
					<div class="date">2018年6月18-22日</div>
					<div class="ms">万商天勤合伙人受邀参加北仲2018中国商事争议解决高峰论坛</div>
					<div class="xq"><span>阅读详情  &gt;</span></div>
				</div>
			</div>
			
			<div style="padding-top: 1.1rem;">
				<select class="customSelect">
					<option>111</option>
					<option>222</option>
				</select>
			</div>
			
			<div class="jgList">
				<ul>
					<li>
						<div class="date">2018-07-04</div>
						<div class="tit">万商天勤助力钜派投资集团集团旗下公司设立境外美元基金</div>
						<div class="red">阅读详情  &gt;</div>
					</li>
					<li>
						<div class="date">2018-07-04</div>
						<div class="tit">万商天勤助力钜派投资集团集团旗下公司设立境外美元基金</div>
						<div class="red">阅读详情  &gt;</div>
					</li>
					<li>
						<div class="date">2018-07-04</div>
						<div class="tit">万商天勤助力钜派投资集团集团旗下公司设立境外美元基金</div>
						<div class="red">阅读详情  &gt;</div>
					</li>
					<li>
						<div class="date">2018-07-04</div>
						<div class="tit">万商天勤助力钜派投资集团集团旗下公司设立境外美元基金</div>
						<div class="red">阅读详情  &gt;</div>
					</li>
					<li>
						<div class="date">2018-07-04</div>
						<div class="tit">万商天勤助力钜派投资集团集团旗下公司设立境外美元基金</div>
						<div class="red">阅读详情  &gt;</div>
					</li>
					<li>
						<div class="date">2018-07-04</div>
						<div class="tit">万商天勤助力钜派投资集团集团旗下公司设立境外美元基金</div>
						<div class="red">阅读详情  &gt;</div>
					</li>
					<li>
						<div class="date">2018-07-04</div>
						<div class="tit">万商天勤助力钜派投资集团集团旗下公司设立境外美元基金</div>
						<div class="red">阅读详情  &gt;</div>
					</li>
					<li>
						<div class="date">2018-07-04</div>
						<div class="tit">万商天勤助力钜派投资集团集团旗下公司设立境外美元基金</div>
						<div class="red">阅读详情  &gt;</div>
					</li>
					<li>
						<div class="date">2018-07-04</div>
						<div class="tit">万商天勤助力钜派投资集团集团旗下公司设立境外美元基金</div>
						<div class="red">阅读详情  &gt;</div>
					</li>
					<li>
						<div class="date">2018-07-04</div>
						<div class="tit">万商天勤助力钜派投资集团集团旗下公司设立境外美元基金</div>
						<div class="red">阅读详情  &gt;</div>
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