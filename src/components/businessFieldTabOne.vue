<template>
	<div>
		<o_header></o_header>
		
			
		<div class="mbNav nyMargin" style="border: none;">
			<a>首页</a>&gt;<a>业务领域</a>&gt;<a class="act">银行与金融</a>
		</div>
		<img class="img100 middle" src="../assets/img/ny02.png" />
		<div class="aboutGyls nyMargin">
			
			<div class="nyTit">银行与金融</div>
			<div style="padding-top: 0.4rem;">
				<select class="customSelect">
					<option>111</option>
					<option>222</option>
				</select>
			</div>
			
			<div class="red" style="font-size: 1.33rem; margin: 1.6rem 0 0.7rem 0;">业务概述</div>
			
			<div style="line-height: 1.67; font-size: 1rem; color: #9b9b9b;">“ 为超过一百家的企业境内外首次公开发行、再融资
				、收购、兼并和重大资产重组等项目提供法律服务 ”</div>
			<div style="font-size: 0.77rem; line-height: 1.71; margin-top: 1.3rem;">万商天勤律师事务所是一家能够提供全面法律服务
				万商天勤在金融业务创新方面一直走在业内前沿，是国内最早从事债转股业务、银
				行按揭业务、企业集团财务公司业务、不良资产处置业务、资产证券化业务及银行
				间市场票据发行业务的律师事务所之一，是国家开发银行、中国建设银行、中国银行、中国工商银行、中信银
				行、兴业银行、南洋商业银行等多家银行的合作律师机构。<br /><br />
 
本所还为中国信达资产管理公司、中国华融资产管理公司、中国建银投资公司、中船财
务公司、国投财务公司、中国民安保险公司等金融机构提供顾问服务。十余年来，本所先后承办债转股项
目近三十个，参与处置不良资产处置金额逾两百亿元；代理重大金融诉讼案件数十起，累计诉讼金额数十亿元。
			</div>
			
			<div class="red" style="font-size: 1.33rem; margin: 1.6rem 0 0.7rem 0;">行业专业律师</div>
			<div class="teamSearchList">
				<ul class="lsList">
					<li>
						<img class="photo" src="../assets/img/photo1.jpg" />
						<div class="right">
							<div class="name">刘建刚</div>
							<div>银行与金融</div>
							<div style="margin-top: 0.8rem">北京</div>
							<div>chaijiangang@vtlaw.cn</div>
						</div>
					</li>
					<li>
						<img class="photo" src="../assets/img/photo1.jpg" />
						<div class="right">
							<div class="name">刘建刚</div>
							<div>银行与金融</div>
							<div style="margin-top: 0.8rem">北京</div>
							<div>chaijiangang@vtlaw.cn</div>
						</div>
					</li>
					<li>
						<img class="photo" src="../assets/img/photo1.jpg" />
						<div class="right">
							<div class="name">刘建刚</div>
							<div>银行与金融</div>
							<div style="margin-top: 0.8rem">北京</div>
							<div>chaijiangang@vtlaw.cn</div>
						</div>
					</li>
					<li>
						<img class="photo" src="../assets/img/photo1.jpg" />
						<div class="right">
							<div class="name">刘建刚</div>
							<div>银行与金融</div>
							<div style="margin-top: 0.8rem">北京</div>
							<div>chaijiangang@vtlaw.cn</div>
						</div>
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