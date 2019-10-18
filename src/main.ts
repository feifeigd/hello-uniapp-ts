import Vue from 'vue'
import App from './App.vue'
import store from './store';
import pageFoot from './components/page-foot.vue';
import pageHead from './components/page-head.vue';
import uLink from '@/components/uLink.vue';

Vue.config.productionTip = false

Vue.prototype.$store = store;
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00',
};

Vue.component('page-foot', pageFoot);
Vue.component('page-head', pageHead);
Vue.component('uLink', uLink);

App.mpType = 'app';

new App({
	store,
}).$mount();
