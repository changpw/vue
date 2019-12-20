const vm = new Vue({
	el:'#app',
	data:{
		msg:'Hello',
		show:true
	},
	methods:{
		enter:function(el,done){
			console.log('enter'+this.show);
			anime({
			  targets: el,
			  translateX: 0,
			  opacity: [0,1],
			  rotate: [0,-360],
			  duration: 3000,
			  borderRadius: ['50%', '0%'],
			   opacity: [0,1]
			});
			setTimeout(function(){
				done();
			},3000)
			
		},
		leave:function(el,done){
			console.log('leave'+this.show)
			anime({
			  targets: el,
			  translateX: 250,
			  rotate: [-360,0],
			  duration: 3000,
			  borderRadius: ['0%', '50%'],
			  opacity: [1,0]
			});
			setTimeout(function(){
				done();
			},1000)
			
		}
	}
})