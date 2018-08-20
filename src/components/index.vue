<template>
	<div>
		<o_header></o_header>
		
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
		
		<o_footer></o_footer>
		
	</div>
</template>

<script>

import { Toast, Loading, Flexbox, FlexboxItem } from 'vux'
import o_header from '@/components/base/header'; 
import o_footer from '@/components/base/footer';
	
export default {
  name: 'index',
  components: {
    Loading,
    Toast,
    Flexbox,
    FlexboxItem,
    o_header,
    o_footer
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