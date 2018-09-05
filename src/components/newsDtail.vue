<template>
	<div>
		<o_header></o_header>
		<div class="newsList nyMargin">
			
			<div class="mbNav">
				<a>首页</a>&gt;<a class="act">新闻动态</a>
			</div>
			
			<div class="font22" style="margin-top: 1.2rem;">万商天勤合伙人受邀参加北仲2018中国商事争议解决高峰论坛</div>
			<div><span class="font14">2018年6月18-22日</span>
				
			</div>
			<div style="margin: 1rem 0;"><img src="../assets/img/news_photo.jpg" class="img100 middle" /></div>
			
			<div class="font18" style="color: #9b9b9b; line-height: 1.67;">
				“ 多年来帮助客户解决证券、金融、工程、知识产权等各
				类型纠纷，提供富有建设性和操作性的解决方案或法律建议，
				诉讼及仲裁领域经验丰富，赢得了客户的高度信赖和广泛赞誉 ”
			</div>
			
			<div class="font14" style="line-height: 1.71; margin-top: 2rem;">
				2018年6月18-22日，由北京仲裁委员会/北京国际仲裁中心（以下简
				称“北仲”）主办，北欧、英国等地国际仲裁中心协办，分别在瑞典斯
				德哥尔摩、英国伦敦和爱丁堡三大城市举办的《2018中国商事争议解决高峰论坛》活动已拉开帷幕。<br /><br />

自2013年起，北仲联合欧洲多国的仲裁机构逐年举办“欧洲年度观察发布会”，组织国内外著名的仲
裁专家就一系列与贸易、商业相关的法律问题进行研讨，希望为涉华跨境交易（包括中国企业对外
投资）及争议解决服务搭建一个专业的交流和对接平台。除了中国仲裁专家外，北仲邀请了超过50名世界知名的法律专业人事参会。<br /><br />

 万商天勤创始合伙人张志律师受邀出席本次研讨会并就《第三方资助在中国的现状及发展
 》发表主旨演讲。演讲结束后，张志律师回答了来自现场点评嘉宾和台下与会嘉宾的问题。<br /><br />

 万商天勤的专业团队具有丰富的国际、国内诉讼及仲裁经验，多年来帮助客户解决证券、金融
 、工程、知识产权等各类型纠纷，提供富有建设性和操作性的解决方案或法律建议，诉讼及仲裁领域经验丰富，赢得了客户的高度信赖和广泛赞誉。
			</div>
			
			<div class="red" style="font-size: 1.33rem; margin: 1.6rem 0 0.7rem 0;">相关新闻</div>
			
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