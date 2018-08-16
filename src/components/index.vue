<template>
	<div>
		<div class="header">
			<img class="logo" src="../assets/img/logo.png" />
			<i class="iconr iconfont icon-caidan"></i>
			<i class="iconr iconfont icon-search1"></i>
		</div>
		
		<div class="index1">
			<img src="../assets/img/homepage.png" />
			<div class="indexFont">
				<div class="tit">业务新闻</div>
				<div class="cont">万商天勤成功入围西安市新城区PPP项目全过程咨询服务项目</div>
				<div class="tit2">V&T动态</div>
				<div class="cont2">"数字经济视野下的律师业务探究"研讨会圆满举行</div>
				<div class="more"><a href="#">了解更多</a></div>
			</div>
		</div>
		
		<ul class="indexNav">
			<li>
				<img src="../assets/img/indexNav1.png" />
				<div class="ms">公司及资本市场<i class="iconfont icon-sanjiaoright middle"></i></div>
			</li>
			<li>
				<img src="../assets/img/indexNav2.png" />
				<div class="ms">银行与金融<i class="iconfont icon-sanjiaoright middle"></i></div>
			</li>
			<li>
				<img src="../assets/img/indexNav3.png" />
				<div class="ms">国际金融<i class="iconfont icon-sanjiaoright middle"></i></div>
			</li>
			<li>
				<img src="../assets/img/indexNav4.png" />
				<div class="ms">私募基金与投资并购<i class="iconfont icon-sanjiaoright middle"></i></div>
			</li>
			<li>
				<img src="../assets/img/indexNav5.png" />
				<div class="ms">知识产权<i class="iconfont icon-sanjiaoright middle"></i></div>
			</li>
			<li>
				<img src="../assets/img/indexNav6.png" />
				<div class="ms">房地产与基础建设<i class="iconfont icon-sanjiaoright middle"></i></div>
			</li>
			<li>
				<img src="../assets/img/indexNav7.png" />
				<div class="ms">刑事风险防范及辩护<i class="iconfont icon-sanjiaoright middle"></i></div>
			</li>
			<li>
				<img src="../assets/img/indexNav8.png" />
				<div class="ms">公司及资本市场<i class="iconfont icon-sanjiaoright middle"></i></div>
			</li>
		</ul>
		
		<div class="footer">
			<ul class="menu">
				<li><i class="iconfont icon-mobsite"></i></li>
				<li><i class="iconfont icon-laywer_phone"></i></li>
				<li><i class="iconfont icon-laywer_email"></i></li>
				<li id="wxBtn" v-on:hover=""><i class="iconfont icon-wechat1"></i></li>
			</ul>
			<div class="xNav">
				<a class="left">免责声明</a>
				<a class="center">使用条款</a>
				<a class="right">法律声明</a>
			</div>
			<div class="dz">
				©2017 V&T. All Rights Reserved. 京ICP备07010430号-1 <br />
京公网安备110105011164
			</div>
		</div>
		
	</div>
</template>

<script>

import { Toast, Loading, Flexbox, FlexboxItem } from 'vux'
	
	
export default {
  name: 'index',
  components: {
    Loading,
    Toast,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
	/**
	 * 生命周期 start
	 */

	/**
	 * 创建前状态
	 */
	beforeCreate: function () {
		console.info('---------> beforeCreate');
	},
	/**
	 * 创建完毕状态
	 */
	created: function () {
		console.info('---------> created');
		
		this.test();
	},
	/**
	 * 挂载前状态
	 */
	beforeMount: function () {
		console.info('---------> beforeMount');
	},
	/**
	 * 挂载结束状态
	 */
	mounted: function () {
		console.info('---------> mounted');
	},
	/**
	 * 更新前状态
	 */
	beforeUpdate: function () {
		console.info('---------> beforeUpdate');
	},
	/**
	 * 更新完成状态
	 */
	updated: function () {
		console.info('---------> updated');
	},
	/**
	 * 销毁前状态
	 */
	beforeDestroy: function () {
		console.info('---------> beforeDestroy');
	},
	/**
	 * 销毁完成状态
	 */
	destroyed: function () {
		console.info('---------> destroyed');
	},

	/**
	 * 生命周期 end
	 */

	methods: {
		test: function(){
			
		},
	}
  
}
</script>

<style>
</style>