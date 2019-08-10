/**
 * Created by cpw on 2019/7/21.
 */

var vm = new Vue({
    el : '#app',
    data :{
        datetime:"",
        name:[],
        activeColor:"green",
        watches :'',
        msg : 'Hello Vue',
        use : "true",
        message:'<h1>Vue</h1>',
        lastName : '',
        firstName : '',
        items : {
            zs: {
                name: 'zs',
                age : '18'
            },
            ls: {
                name: 'ls',
                age : '20'
            }
        }
        // items : [
        //     {name : 'zs'},
        //     {name : 'll'}
        //
        //
        // ]


    },
    methods :{
        show : function () {
            alert(this.use)
        },
        showName: function () {
            var reg=/^1(3|4|5|6|7|8|9)\d{9}$/;
            console.log(this.name)
            console.log(this.datetime)
            if(reg.test(this.name)){
                alert('格式正确');
            }
            else {
                alert(this.datetime)
            }
        }

        
    },
    computed:{
        name:function () {
            return this.lastName + ' '+ this.firstName;
        }
    },
    filters : {
        check: function (value) {
            console.log(value);
            if(value){
              return  this.msg=value
            }
        }
        
    },
    watch : {
     watches : function (val) {
         this.watches=val
     }

    }


});
 vm.$watch('watches',function (newValue, oldValue) {

     document.getElementById('watch02').innerHTML=newValue
})
