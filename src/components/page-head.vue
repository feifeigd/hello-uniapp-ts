<template name="page-head">
	<view class="uni-page-head">
		<view class="uni-page-head-title">{{title}}</view>
	</view>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator'; 
	@Component
	export default class extends Vue{
		@Prop({ default: ''}) private title: string; 
	}
</script>

<style>
</style>
