<template name="page-foot">
	<view class="page-share-title">
		<text>感谢{{name}}提供本示例，</text>
		<text class="submit" @tap="submit">我也提交</text>
	</view>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	@Component
	export default class extends Vue {
		name = 'page-foot';
		@Prop({ default: ''}) private name: string;
		
		submit(){
			uni.showModal({
				content: "hello uni-app开源地址为https://github.com/dcloudio/uni-app/tree/master/examples，请在这个开源项目上贡献你的代码",
				showCancel: false
			});
		}
	}
</script>

<style>
	.page-share-title{
		text-align: center;
		font-size: 30upx;
		color: #bebebe;
		padding: 20upx 0;
	}
	.submit {
		border-bottom: 1upx solid #BEBEBE;
	}
</style>
