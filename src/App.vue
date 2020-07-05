<template>
    <div id="app">
        <el-container>
            <el-aside>
                <el-tree
                :data="menuData"
                icon-class="el-icon-folder"
                @node-click="nodeClick"
                >

                </el-tree>
            </el-aside>
            <el-container>
                <router-view></router-view>
            </el-container>
        </el-container>

    </div>
</template>


<script>
    export default {
        name: 'App',
        data(){
            return{
                menuData:[{
                    label:'数据库表查看',
                    children:[
                        {
                            label: "主流水表查询"
                        },
                        {
                            label: "挂失登记簿表查询"
                        },
                        {
                            label: "子流水表查询"
                        },
                        {
                            label: "设备信息表查询"
                        },
                    ]
                },{
                    label:'服务器文件目录',
                    children:[
                        {
                            label: "主流水表查询"
                        },
                        {
                            label: "挂失登记簿表查询"
                        },
                        {
                            label: "子流水表查询"
                        },
                        {
                            label: "设备信息表查询"
                        },
                    ]
                }
                ]
            }
        },
        methods:{
            nodeClick(data) {
                console.log('tree drag over: ',data);
            }
        }

    }

</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
