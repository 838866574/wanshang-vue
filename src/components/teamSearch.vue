<template>
	<div>
		<o_header></o_header>
		<div class="teamSearch">
			<div class="mbNav">
				<a>首页</a>&gt;<a class="act">团队成员</a>
			</div>
			<div class="condition">
				<h3>按姓名搜索</h3>
				<div>
					<input type="text" value="" />
				</div>
				<h3>按办公地点搜索</h3>
				<div>
					<select>
						<option>111</option>
						<option>222</option>
					</select>
				</div>
				<h3>按专业领域搜索</h3>
				<div>
					<select>
						<option>111</option>
						<option>222</option>
					</select>
				</div>
				<button @click="gotoTeamSearchList()" type="button" class="searchBtn">搜 索</button>
			</div>
			
			<div class="tsItemBox">
				<div class="tsItemTit">按专业领域搜索</div>
				<ul>
					<li>
						<div class="icon"><i class="iconfont icon-bars"></i></div>
						<div class="text">公司及资本市场</div>
					</li>
					<li style="margin-right: 0;">
						<div class="icon"><i class="iconfont icon-bankfinance"></i></div>
						<div class="text">银行与金融</div>
					</li>
					<li>
						<div class="icon"><i class="iconfont icon-money"></i></div>
						<div class="text">私募基金与投资并购</div>
					</li>
					<li style="margin-right: 0;">
						<div class="icon"><i class="iconfont icon-copyright"></i></div>
						<div class="text">知识产权</div>
					</li>
					<li>
						<div class="icon"><i class="iconfont icon-world"></i></div>
						<div class="text">国际业务</div>
					</li>
					<li style="margin-right: 0;">
						<div class="icon"><i class="iconfont icon-realeaste"></i></div>
						<div class="text">房地产<br />建筑工程与基础设施</div>
					</li>
					<li>
						<div class="icon"><i class="iconfont icon-balance"></i></div>
						<div class="text">争议解决</div>
					</li>
					<li style="margin-right: 0;">
						<div class="icon"><i class="iconfont icon-shield-"></i></div>
						<div class="text">刑事风险和防范</div>
					</li>
				</ul>
				<div class="tsItemTit">按办公地点搜索</div>
				<ul>
					<li>
						<div class="icon"><i class="iconfont icon-beijing"></i></div>
						<div class="text">北京</div>
					</li>
					<li style="margin-right: 0;">
						<div class="icon"><i class="iconfont icon-shanghai"></i></div>
						<div class="text">上海</div>
					</li>
					<li>
						<div class="icon"><i class="iconfont icon-sz"></i></div>
						<div class="text">深圳</div>
					</li>
					<li style="margin-right: 0;">
						<div class="icon"><i class="iconfont icon-chengdu"></i></div>
						<div class="text">成都</div>
					</li>
					<li>
						<div class="icon"><i class="iconfont icon-wuhan"></i></div>
						<div class="text">武汉</div>
					</li>
					<li style="margin-right: 0;">
						<div class="icon"><i class="iconfont icon-machester"></i></div>
						<div class="text">曼彻斯特</div>
					</li>
					<li>
						<div class="icon"><i class="iconfont icon-madrid"></i></div>
						<div class="text">马德里</div>
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

<style>
</style>