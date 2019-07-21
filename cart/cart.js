/**
 * Created by cpw on 2019/7/21.
 */
var vm = new Vue({

    el:'#app',
    data : {
        items : {
            iphone : {
                    name : '苹果X',
                    price : '6000',
                    num :0
            },
            huawei :{
                    name :'华为',
                    price :'5000',
                    num :0
            },
            sansung :{
                    name : '三星',
                    price : '6000',
                    num :0
            }
        }
    },
    methods:{
        sum : function () {
             var sum =
                this.items.iphone.num * this.items.iphone.price+this.items.huawei.num * this.items.huawei.price+
                this.items.sansung.num * this.items.sansung.price;
            return sum ;
        }

    },
    watch : {

    }



});