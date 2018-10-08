<template>
	<div>
		<o_header></o_header>
		<div class="aboutGyls">
			
			<div class="mbNav nyMargin" style="border: none;">
				<a>首页</a>&gt;<a class="act">关于V&T</a>
			</div>
			
			<img class="img100 middle" src="../assets/img/ny01.png" />
			<div class="nyMargin">
				
				<div class="nyTit">关于V&T</div>
				
				<div style="line-height: 1.67; font-size: 1rem; color: #9b9b9b;">“万商天勤律师事务所是一家能够提供全面法律服务的综合性律师事务所 ”</div>
				<div style="font-size: 0.77rem; line-height: 1.71; margin-top: 1.3rem;">万商天勤律师事务所是一家能够提供全面法律服务
					的综合性律师事务所，总部设在北京，在北京、深圳、上海、成都等地设有办公室，拥有律师和专业人员三百余人。   <br /><br />
	
	万商天勤汇集了活跃于公司、证券、金融、保险、城市基础设施、建筑、房地产、环境、能源、政府法
	律事务等各个专业领域的优秀律师。基于对客户业务领域的深入了解，万商天勤凭借卓越的专业能力和高效的解决方案，成为客户长久信赖的合作伙伴。  <br /><br />
	
	秉承专业、务实、高效、优质的服务理念，万商天勤在持续巩固自身优势业务的同时，稳健拓展国际化、多元化的新领域，充分满足客户
	不断发展的新需求。
				</div>
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