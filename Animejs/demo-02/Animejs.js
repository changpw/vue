const vm = new Vue({
	el:'#app',
	data:{
		count:0,
		position:{
			left:'',
			top:'',
			show:false
		},
		addList:[],
		list:[]
	},
	watch:{
		addList:function(val){
			console.log(val)
			var list=[];
			for(var it in val){
				if(list.indexOf(val[it])==-1){
					list.push(val[it]);
					console.log(list)
				}
			}
			this.list=list;
		}
	},
	methods:{
		getLocation:function(e,id){
			// console.log(JSON.stringify(e.toElement.textContent)+'e---');
			// console.log(JSON.stringify(id+'e---');
			console.log(id)
			let list=this.addList
			this.addList.push(id)
			console.log(this.addList)
			this.position.left=e.clientX
			this.position.top=e.clientY
			this.position.show=true
			let ball=document.getElementById('ball');
			ball.style.position="absolute";
			ball.style.left=this.position.left+'px';
			ball.style.top=this.position.top+'px';
			console.log(this.$data)
			
		},
		enter:function(el){
			let det=document.getElementById('content');
			console.log(det.getBoundingClientRect().left)
			console.log(det.getBoundingClientRect().top)
			let disLeft=det.getBoundingClientRect().left;
			let disTop=det.getBoundingClientRect().top;
			let muxLeft=Number(disLeft)-Number(this.position.left);
			let muxTop=Number(disTop)-Number(this.position.top);
			console.log(el+'el')
			// anime({
			//   targets: el,
			//   translateX: muxLeft,
			//   translateY:muxTop,
			//    direction: 'reverse',
			//   easing: 'cubicBezier(.5, .05, .1, .3)',
			// })
			anime({
			  targets: el,
			  translateX: muxLeft,
			  translateY:muxTop,
			  duration: 500,
			  easing: 'cubicBezier(.5, .05, .1, .3)',
			  complete: function(anim) {
			     if(anim.completed){
					 let ball=document.getElementById('ball');
					 ball.style.transform='none';
					 if(vm.count<4){
						 vm.count++;
					 }
				 }		
			 }
			});
			setTimeout(function() {
			  vm.position.show=false;
			}, 400);
		
		},
		showAll:function(){
			
		},
	}
})