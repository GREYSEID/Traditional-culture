var i = 0;
Vue.component("festival", {
	template: `
	<div class="festivalworld">
		<div :style="{backgroundImage:'url('+imformation.url+')'}" class="backgroundstyle"></div>
		<a href="index.html">首页</a>
		<div class="bigtitle"><div class="title"><template>{{imformation.name}}</template><span>{{imformation.spancontent[0]}}</span><span>{{imformation.spancontent[1]}}</span></div></div>
		<div class="contentstyle">
			<div v-for="(count,index) of imformation.content" class="in-contentstyle">
				<template v-if="index%2==0">
					<div :id="'left'+index" class="inside left" v-html="count.content"></div>
					<div :id="'right'+index" class="inside right"><img :src="count.picture" alt="图片" style="height:100%"></div>
				</template>
				<template v-else>
					<div :id="'left'+index" class="inside left"><img :src="count.picture" alt="图片" style="height:100%"></div>
					<div :id="'right'+index" class="inside right" v-html="count.content">{{count.content}}</div>
				</template>
			</div>
		</div>
		<div class="end"><a href="index.html">END</a></div>
	</div>
	`,
	props: ["imformation"],
	data: function() {
		return {
			locate: 0,
			i: 0,
		}
	},
	created() {
		i = this.imformation.content.length;
	},
	watch: {

	},
})
var vm=new Vue({
	el: "#day",
	data: {
		imformation: {},
	},
	methods: {
		getday() {
			var search = location.search;
			var string = search.split("=")[1];
			this.i = parseInt(string);
		},
	},
	template: `<festival :imformation="imformation"></festival>`,
	created() {
		let search = location.search;
		let string = search.split("=")[1];
		let z = string ? parseInt(string) : 0;
		console.log(z);
		console.log(state.imformation[z]);
		this.imformation = state.imformation[z];
	},
	beforeCreate() {},
})
$(function() {
	$(window).scroll(function() {
		let target = $(this).scrollTop();
		console.log(target);
		let z = i;
		for (let x = 0; x < z; x++) {
			if (target > (700 * x + 500)) {
				let left = "#left" + x + "";
				let right = "#right" + x + "";
				$(left).animate({
					left: "0"
				}, 400);
				$(right).animate({
					right: "0"
				}, 500);
				console.log(left);
			}
		}
		if (target + $(window).height() == $(document).height()) {
			let left = "#left" + (z) + "";
			let right = "#right" + (z) + "";
			$(left).animate({
				left: "0"
			});
			$(right).animate({
				right: "0"
			});

		}
	});
});
