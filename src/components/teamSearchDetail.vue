<template>
	<div>
		<o_header></o_header>
		<div class="teamSearchDetail nyMargin">
			
			<div class="mbNav">
				<a>首页</a>&gt;<a>团队成员</a>&gt;<a class="act">刘建港</a>
			</div>
			
			<div class="name">
				<span class="xm">刘建刚</span>
				<span class="zc">合伙人</span>
			</div>
			
			<img src="../assets/img/invalid-name.jpg" class="img100 middle" />
			<ul class="jj">
				<li><i class="iconfont icon-email" style="font-size: 0.85rem;"></i>邮件：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chaijiangang@vtlaw.cn</li>
				<li><i class="iconfont icon-laywer_phone"></i>电话：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;86 10 8225 5588</li>
				<li><i class="iconfont icon-laayer_fax"></i>传真：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;86 10 8225 5588</li>
				<li><i class="iconfont icon-lawyer_office"></i>办公室：&nbsp;&nbsp;北京</li>
			</ul>
			
			<div class="xz"><a href="#">下载律师中文简历</a></div>
			<div class="red" style="font-size: 1.33rem; margin: 1.4rem 0 0.7rem 0;">律师简介</div>
			<div style="font-size: 0.77rem; line-height: 1.71;">
				建刚律师曾在新加坡上市公司：国浩地产（中国）投资公司Guocoland (chin
				a) limited 担任董事会秘书及法务总监；曾在北京天润置地集团
				公司担任法务总监及法务部经理；曾在冀中能源集团有限公司法律处供职。<br /><br />

凭借多年的工作经历，柴律师拥有丰富的国际商业运作投融资法律经验，对项目投融资、对VC和PE投
资银行业务有专项研究，能够深刻理解客户的商业目标，准确策划商业运作模式，规避投融资法律风险。 <br /><br />

建刚曾今或正在担任多家上市公司及股权投资基金企业的法律顾问，如中国风险投资公司、北京千舟清
源基金公里公司、花木兰（北京）投资基金管理有限公司、优势资本、桃花源（天津）股权投资基金合伙企业
（有限合伙）、蓝海投资基金等公司；凭借多年的投融资法律经验，柴律师在私募基金企业的设立、GP与LP的
合伙人协议、募集说明书、LP的认购协议、资金托管协议、投资决策议事规则及拟投项目公司的股权并购、增资
扩股、定向增发、股权置换、回购、对赌、反摊薄条款等方面的商业策划有着独到见解。<br /><br />

建刚曾经或目前担任的房地产及基础设施建设公司的法律顾问：如唐山曹妃甸城市投资公司、泛华建
设集团、天润置地集团、北京中隧隧道工程有限公司、北京玉亭房地产开发公司、北京城建东华房地
产开发有限公司、北京明华置业有限公司、北京江盛房地产开发有限公司、北京龙腾投资开发有限公司、
北京晋商联合投资管理公司、北京市百泽霖物业服务总公司等房地产公司的法律顾问，在道路、楼宇等基
础设施BT\BOT融资建设及不动产项目的设计、规划、征地、拆迁、安置、建设、销售、物业管理等方面有全程法律工作的经验，涉及投融资金额几十亿元。
			</div>
			<div class="red" style="font-size: 1.33rem; margin: 1.4rem 0 0.7rem 0;">服务客户</div>
			<div style="font-size: 0.77rem; line-height: 1.71;">中信国安盟固利新能源科技公司、北京贝能达技术有
				限公司、毅新兴业（北京）科技有限公司、四川格兰德技术有限公司。</div>
			<div class="red" style="font-size: 1.33rem; margin: 1.4rem 0 0.7rem 0;">教育背景</div>
			<div style="font-size: 0.77rem; line-height: 1.71;">
				中国政法大学法学学士<br />
长江商学院高级工商管理硕士<br />
中国社会科学院金融学博士<br />
独立董事资格 董事会秘书资格<br />
			</div>
			<div class="red" style="font-size: 1.33rem; margin: 1.4rem 0 0.7rem 0;">业务专长</div>
			<div style="font-size: 0.77rem; line-height: 1.71;">
				 私募股权基金、公司证券、公司并购重组、项目投融资、房地产、建筑工程、基础设施
			</div>
			<div class="red" style="font-size: 1.33rem; margin: 1.4rem 0 0.7rem 0;">工作语言</div>
			<div style="font-size: 0.77rem; line-height: 1.71;">
				中文、英文
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