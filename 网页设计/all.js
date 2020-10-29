Vue.component("square", {
	template: `
	<div  class="square" @click="jumpgo">
		<div :style="{backgroundImage:'url('+imformation.url+')'}" class="backpicture"></div>
		<div class="backcontent">
			<h1 style="text-align:center;">{{imformation.name}}</h1>
			<span style="text-indent:2em;">{{imformation.introduction}}</span>
			<slot></slot>
		</div>
	</div>
	
	`,
	props: ["imformation"],
	methods:{
		jumpgo(){
			this.$emit("gojump",this.imformation.link)
		}
	}
});
var world = new Vue({
	el: "#world",
	data: {
		state: {},
	},
	template: `<div class="world"><square v-for="count in state.imformation" :imformation=count v-on:gojump="jump"></square></div> `,
	created() {
		this.state = state;
	},
	methods:{
		jump(link){
			window.location.href=link;
		}
	}
});
Vue.component("ti",{
	template:`<div class="title">
		<div class="titlepicture"></div>
		<div class="titlestyle" data-title="传统文化">传统文化</div>
	</div>`,
	props:[],
})
var title=new Vue({
	el:"#title",
	template:`<ti />`
})