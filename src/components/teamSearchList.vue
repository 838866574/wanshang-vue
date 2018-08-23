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
				<button type="button" class="searchBtn">搜 索</button>
				<div style="margin-top: 1.1rem;">
					<select>
						<option>合伙人</option>
						<option>顾问</option>
						<option>律师</option>
					</select>
				</div>
			</div>
			
			<div class="teamSearchList">
				<div class="tsItemTit">合伙人搜索结果</div>
				
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
				
				<div class="page" style="margin-top: 10px;">
					<a>上一页</a>
					<a class="num">1</a>
					<a class="num">2</a>
					<a class="num">3</a>
					<a class="num">4</a>
					<a class="num">5</a>
					<a>下一页</a>
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

<style>
</style>