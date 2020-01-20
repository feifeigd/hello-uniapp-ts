<template>
	<view class="center">
		<view class="logo" :hover-class="!userinfo.login ? 'logo-hover' : ''" @click="goLogin">
			<image class="logo-img" :src="userinfo.login ? userinfo.avatarUrl : logoUrl"></image>		
			<view class="logo-title">
				<text class="user-name">Hi, {{userinfo.login ? userinfo.userName : '您尚未登陆'}}</text>
				<text class="go-login navigat-arrow" v-if="!userinfo.login">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-text">我的地址</text>	
				<text class="navigat-arrow">&#xe65e;</text>				
			</view>
			<view class="center-list-item border-bottom">
				<text class="list-text">消息</text>	
				<text class="navigat-arrow">&#xe65e;</text>				
			</view>
        </view>
		<view class="footer" v-if="userinfo.login">
			<button class="logout" type="primary" @click="loginOut">退出登录</button>
		</view>
	</view>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
	@Component
	export default class extends Vue {
		logoUrl: string = '../../static/avatar.png';
		userinfo = {
			avatarUrl: '',
			token: '',
			userName: '',
			login: false
		};
		onLoad() {
			uni.$on('login', e=>{
				console.log(e);
				this.userinfo = e;
			});
		}	
			
		onUnload(){
			uni.$off('login');
		}
		
		goLogin(){
			if(!this.userinfo.login){
				uni.navigateTo({
					url: '../login/login'
				});
			}
		}
		
		loginOut(){
			this.userinfo = {
				avatarUrl: '',
				token: '',
				userName: '',
				login: false
			};
		}
	}
</script>

<style>
	@import url(../../common/common.css);
	.footer{
		margin-top: 50upx;
	}
	button.logout{
		background-color: #fb6f18;
	}
</style>
