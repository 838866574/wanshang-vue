<template>
	<div>
		<o_header></o_header>
		<div class="aboutGyls nyMargin">
			
			<div class="mbNav">
				<a>首页</a>&gt;<a class="act">国际联盟</a>
			</div>
				
			<div class="nyTit">国际联盟</div>
			
			<div class="font18" style="line-height: 1.67; color: #9b9b9b;">
				万商天勤具有传统优势领域的扩张能力及业务创新，
				致力于建设以中国为中心的全球法律合作网络。以为客户提
				供全球化，本地化的服务为目的，为联盟机构参与中国发展创造机会。<br /><br />

V&T 发起设立 V&T Partner, 邀请全球重要城市的律师事务所加盟，形
成 遍布世界的 V&T 法律服务网络。目前已经着手联络的境外机构所在地包括马德
里(已签 约)/香港/洛杉矶/纽约/里斯本/斯德哥尔摩/莫斯科/温哥华/新加坡/柏林/伦敦/东京/悉尼等。<br /><br />

欲了解更多V&T Partner详情，敬请访问 V&T Partner 网站。
			</div>
			
			<div class="vtPartnerWeb">
				<div class="left"><img src="../assets/img/cursor-2.png" class="middle" /></div>
				<div class="right">www.vandtpartner.com</div>
			</div>
			
		</div>
		
		<img src="../assets/img/gjlm.jpg" class="middle img100" />
		
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