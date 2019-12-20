new Vue({
  el: '#flip-list-demo',
  data: {
    items: [1,2,3,4,5,6,7,8,9],
	  nextNum: 10
  },
  methods: {
    shuffle: function () {
      console.log(this.$data)
	  this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
	 randomIndex: function () {
	      return Math.floor(Math.random() * this.items.length)
		  var myAnimation = anime({
		    targets: ['.blue', '.green'],
		    translateX: '13rem',
		    rotate: 180,
		    borderRadius: 8,
		    duration: 2000,
		    loop: true
		  });
	    }
  }
})