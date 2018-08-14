<template>
	<div>
		<router-link to="teamSearch">User123</router-link>
	</div>
</template>

<script>

import { Toast, Loading } from 'vux'
	
	
export default {
  name: 'index',
  components: {
    Loading,
    Toast
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
			this.$vux.toast.show({
				text: 'Loading'
			})
//			this.$vux.loading.show({
//				text: 'Loading'
//			})
		},
	}
  
}
</script>

<style>
</style>