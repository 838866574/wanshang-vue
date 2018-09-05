<template>
	<div>
		<o_header></o_header>
		<div class="newsList nyMargin">
			
			<div class="mbNav">
				<a>首页</a>&gt;<a>出版物</a>&gt;<a class="act">专业刊物</a>
			</div>
			
			<div class="nyTit">专业刊物</div>
			
			<div class="news_lbt">
				<img class="img100 middle" src="../assets/img/6528647526.jpg" />
				<div class="msBxo" style="background: #252c5c;">
					<h3>专业刊物下载推荐</h3>
					<div style="margin-top: 1.5rem;" class="ms">法律观察-律师事务所费率调查 </div>
					<div class="xq"><span>立即下载  &gt;</span></div>
				</div>
			</div>
			
			<div style="padding-top: 1.1rem;">
				<select class="customSelect">
					<option>111</option>
					<option>222</option>
				</select>
			</div>
			
			<div class="publication">
				<ul>
					<li>
						<div class="left">
							<div style="margin-top: 0.4rem;"><i style="color: #525252; font-size: 1.6rem;" class="iconfont icon-pdf"></i></div>
							<div><i style="color: #b4201f;" class="iconfont icon-laywer_download"></i></div>
						</div>
						<div class="right">
							<div class="tit">法律观察-律师事务所费率调查</div>
							<div class="date"><span>期刊: 第10期</span>&nbsp;&nbsp;<span>发布日期: 2017/10/18</span></div>
						</div>
					</li>
					<li>
						<div class="left">
							<div style="margin-top: 0.4rem;"><i style="color: #525252; font-size: 1.6rem;" class="iconfont icon-pdf"></i></div>
							<div><i style="color: #b4201f;" class="iconfont icon-laywer_download"></i></div>
						</div>
						<div class="right">
							<div class="tit">法律观察-律师事务所费率调查</div>
							<div class="date"><span>期刊: 第10期</span>&nbsp;&nbsp;<span>发布日期: 2017/10/18</span></div>
						</div>
					</li>
					<li>
						<div class="left">
							<div style="margin-top: 0.4rem;"><i style="color: #525252; font-size: 1.6rem;" class="iconfont icon-pdf"></i></div>
							<div><i style="color: #b4201f;" class="iconfont icon-laywer_download"></i></div>
						</div>
						<div class="right">
							<div class="tit">法律观察-律师事务所费率调查</div>
							<div class="date"><span>期刊: 第10期</span>&nbsp;&nbsp;<span>发布日期: 2017/10/18</span></div>
						</div>
					</li>
					<li>
						<div class="left">
							<div style="margin-top: 0.4rem;"><i style="color: #525252; font-size: 1.6rem;" class="iconfont icon-pdf"></i></div>
							<div><i style="color: #b4201f;" class="iconfont icon-laywer_download"></i></div>
						</div>
						<div class="right">
							<div class="tit">法律观察-律师事务所费率调查</div>
							<div class="date"><span>期刊: 第10期</span>&nbsp;&nbsp;<span>发布日期: 2017/10/18</span></div>
						</div>
					</li>
					<li>
						<div class="left">
							<div style="margin-top: 0.4rem;"><i style="color: #525252; font-size: 1.6rem;" class="iconfont icon-pdf"></i></div>
							<div><i style="color: #b4201f;" class="iconfont icon-laywer_download"></i></div>
						</div>
						<div class="right">
							<div class="tit">法律观察-律师事务所费率调查</div>
							<div class="date"><span>期刊: 第10期</span>&nbsp;&nbsp;<span>发布日期: 2017/10/18</span></div>
						</div>
					</li>
					<li>
						<div class="left">
							<div style="margin-top: 0.4rem;"><i style="color: #525252; font-size: 1.6rem;" class="iconfont icon-pdf"></i></div>
							<div><i style="color: #b4201f;" class="iconfont icon-laywer_download"></i></div>
						</div>
						<div class="right">
							<div class="tit">法律观察-律师事务所费率调查</div>
							<div class="date"><span>期刊: 第10期</span>&nbsp;&nbsp;<span>发布日期: 2017/10/18</span></div>
						</div>
					</li>
					<li>
						<div class="left">
							<div style="margin-top: 0.4rem;"><i style="color: #525252; font-size: 1.6rem;" class="iconfont icon-pdf"></i></div>
							<div><i style="color: #b4201f;" class="iconfont icon-laywer_download"></i></div>
						</div>
						<div class="right">
							<div class="tit">法律观察-律师事务所费率调查</div>
							<div class="date"><span>期刊: 第10期</span>&nbsp;&nbsp;<span>发布日期: 2017/10/18</span></div>
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