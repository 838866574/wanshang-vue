<template>
	<div>
		<o_header></o_header>
			
		<div class="mbNav nyMargin" style="border: none;">
			<a>首页</a>&gt;<a>万商天勤</a>&gt;<a class="act">荣誉奖项</a>
		</div>
		<img class="img100 middle" src="../assets/img/ny07.png" />
		<div class="nyMargin aboutShzr">
			
			
			<div class="nyTit">社会责任</div>
			<div class="red" style="font-size: 1.33rem; margin: 1.6rem 0 0.7rem 0;">万商天勤奖学金</div>
			<div class="font20" style="line-height: 1.67; color: #9b9b9b;">
				在不断追求卓越法律服务和自身发展壮大的同时，亦时刻不忘以回馈社会为己任，
				在公益法律服务、教育扶贫、持续发展慈善等公益活动中自觉承担各项社会责任。
			</div>
			
			<ul class="icon">
				<li><img src="../assets/img/logo-1.png" /></li>
				<li><img src="../assets/img/logo-2.png" /></li>
				<li><img src="../assets/img/logo-3.png" /></li>
				<li><img src="../assets/img/logo-4.png" /></li>
			</ul>
			
		</div>
		
		<div class="shzrTableBox">
		
			<table class="shzrTable" nowrap="nowrap">
				<tbody>
					<tr>
						<th style="width: 7.5rem;">姓名</th>
						<th style="width: 11.5rem;">学校</th>
						<th style="width: 8.7rem;">班级</th>
						<th style="width: 8.7rem;">奖励金额</th>
						<th>授予时间</th>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<td>何以</td>
						<td>中国人民大学法学院</td>
						<td>10级博士</td>
						<td>10000元</td>
						<td>2012-07-01</td>
					</tr>
					<tr>
						<td>何以</td>
						<td>中国人民大学法学院</td>
						<td>10级博士</td>
						<td>10000元</td>
						<td>2012-07-01</td>
					</tr>
					<tr>
						<td>何以</td>
						<td>中国人民大学法学院</td>
						<td>10级博士</td>
						<td>10000元</td>
						<td>2012-07-01</td>
					</tr>
					<tr>
						<td>何以</td>
						<td>中国人民大学法学院</td>
						<td>10级博士</td>
						<td>10000元</td>
						<td>2012-07-01</td>
					</tr>
					<tr>
						<td>何以</td>
						<td>中国人民大学法学院</td>
						<td>10级博士</td>
						<td>10000元</td>
						<td>2012-07-01</td>
					</tr>
					<tr>
						<td>何以</td>
						<td>中国人民大学法学院</td>
						<td>10级博士</td>
						<td>10000元</td>
						<td>2012-07-01</td>
					</tr>
					<tr>
						<td>何以</td>
						<td>中国人民大学法学院</td>
						<td>10级博士</td>
						<td>10000元</td>
						<td>2012-07-01</td>
					</tr>
					<tr>
						<td>何以</td>
						<td>中国人民大学法学院</td>
						<td>10级博士</td>
						<td>10000元</td>
						<td>2012-07-01</td>
					</tr>
					<tr>
						<td>何以</td>
						<td>中国人民大学法学院</td>
						<td>10级博士</td>
						<td>10000元</td>
						<td>2012-07-01</td>
					</tr>
				</tbody>
			</table>
		
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