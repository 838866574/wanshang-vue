<template>
	<div>
		<div class="header">
			<img class="logo" src="../../assets/img/logo.png" />
			<i @click="menuClick()" class="iconr iconfont icon-caidan"></i>
			<i class="iconr iconfont icon-search1"></i>
		</div>
		
		<div v-show="headerMenu" class="headerMenu" @touchmove.prevent></div>
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
			}
		},
		props: {
			
		},
		mounted() {
			
		},
		methods: {
			menuClick(){
				this.headerMenu = true;
			},
		},
	}
</script>

<style>
</style>