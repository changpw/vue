<template>
    <el-table
            :data="tableData"
            border
            style="width: 100%">
        <el-table-column
                fixed
                prop="SERIALNUMBER1"
                label="超柜流水号"
                width="150">
        </el-table-column>
        <el-table-column
                prop="SERIALNUMBER2"
                label="核心流水号"
                width="120">
        </el-table-column>
        <el-table-column
                prop="BSPSERIAL"
                label="ESB流水号"
                width="120">
        </el-table-column>
        <el-table-column
                prop="TRADE_CODE"
                label="接口"
                width="120">
        </el-table-column>
        <el-table-column
                prop="TRADE_DATA"
                label="请求字段报文"
                width="300">
        </el-table-column>
        <el-table-column
                prop="TRADE_DATA1"
                label="返回报文"
                width="120">
        </el-table-column>
        <el-table-column
                prop="RETCODE"
                label="retCode"
                width="120">
        </el-table-column>
        <el-table-column
                prop="RETMSG"
                label="返回结果"
                width="120">
        </el-table-column>

        <el-table-column
                prop="zip"
                label="交易名称"
                width="120">
        </el-table-column>
        <el-table-column
                fixed="right"
                label="操作"
                width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>

    export default {
        name: "tableView",
        data(){
            return{
                tableData:[]
            }
        },
        methods:{
            handleClick(row) {
                console.log(row);
            }
        }

    }
</script>

<style scoped>

</style>