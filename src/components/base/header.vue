<template>
	<div>
		<div class="header">
			<img class="logo" src="../../assets/img/logo.png" />
			<i @click="menuClickShow()" class="iconr iconfont icon-caidan"></i>
			<i @click="Show_headerSearch()" class="iconr iconfont icon-search1"></i>
		</div>
		
		<div v-show="isShow_headerSearch" class="headerSearch">
			<div class="box">
				<input type="text" value="" />
				<a>搜索</a>
			</div>
		</div>
		<!--@touchmove.prevent-->
		<div v-show="headerMenu" class="headerMenu">
			<ul>
				<li><a style="margin-left: 0;" class="act">中文</a>|<a>EN</a></li>
				<li @click="showHeaderMenuTwo()"><i class="iconfont icon-slide_right"></i>万商天勤</li>
				<li @click="showHeaderMenuThree()"><i class="iconfont icon-slide_right"></i>业务领域</li>
				<li>V&amp;T联盟</li>
				<li @click="gotoTwoPage('teamSearch')">团队成员</li>
				<li>新闻动态</li>
				<li>出版物</li>
				<li>加入我们</li>
			</ul>
		</div>
		
		<div v-show="headerMenuTwo" class="headerMenuTwoStyle">
			<ul>
				<li @click="returnHeaderMenu()" class="tou"><i class="iconfont icon-slider_left"></i> 返回业务领域</li>
				<li>公司及资本市场</li>
				<li>银行与金融</li>
				<li>私募基金与投资并购</li>
				<li>知识产权</li>
				<li>国际业务</li>
				<li>房地产建筑工程与基础设施</li>
				<li>争议解决</li>
				<li>刑事风险防范和辩护</li>
			</ul>
		</div>
		
		<div v-show="headerMenuThree" class="headerMenuTwoStyle">
			<ul>
				<li @click="returnHeaderMenu()" class="tou"><i class="iconfont icon-slider_left"></i> 返回万商天勤</li>
				<li>关于V&amp;T</li>
				<li>荣誉奖项</li>
				<li>公益活动</li>
				<li>联系我们</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
//	import {XHeader} from 'vux';
//	import util from '@/tools/util';
//	import popManager from '@/tools/popManager';

	export default {
		name: "b_header",
		components: {
			
		},
		data() {
			return {
				headerMenu: false,
				headerMenuTwo: false,
				headerMenuThree: false,
				isShow_headerSearch: false,
			}
		},
		props: {
			
		},
		mounted() {
//			this.touchmoveAdd();
		},
		methods: {
			gotoTwoPage(oUrl){
				this.$router.push({path:'/'+oUrl})
				$("html").css({
					"overflow": "auto",
					"height": "auto"
				});
				$("body").css({
					"overflow": "auto",
					"height": "auto"
				});
			},
			menuClickShow(){
				if(this.headerMenu){
					this.headerMenu = false;
					this.headerMenuTwo = false;
					this.headerMenuThree = false;
					$("html").css({
						"overflow": "auto",
						"height": "auto"
					});
					$("body").css({
						"overflow": "auto",
						"height": "auto"
					});
				} else {
					this.headerMenu = true;
					$("html").css({
						"overflow": "hidden",
						"height": "100%"
					});
					$("body").css({
						"overflow": "hidden",
						"height": "100%"
					});
				}
			},
			showHeaderMenuTwo(){
				this.headerMenuTwo = true;
			},
			showHeaderMenuThree(){
				this.headerMenuThree = true;
			},
			returnHeaderMenu(){
				this.headerMenuTwo = false;
				this.headerMenuThree = false;
			},
			Show_headerSearch(){
				if(this.isShow_headerSearch){
					this.isShow_headerSearch = false;
				} else {
					this.isShow_headerSearch = true;
				}
			},
		},
		
	}
	
	
</script>

<style>
</style>