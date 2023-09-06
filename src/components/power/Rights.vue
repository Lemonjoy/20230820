<template>
    <div>
        <!-- 面包屑导航区 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>权限管理</el-breadcrumb-item>
            <el-breadcrumb-item>权限列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 卡片视图 -->
        <el-card>
            <el-table :data="rightsList" border stripe>
                <el-table-column type="index"></el-table-column>
                <el-table-column lable="权限名称" prop="authName"></el-table-column>
                <el-table-column lable="路径" prop="path"></el-table-column>
                <el-table-column lable="权限等级" prop="level">
                    <!-- 插槽的形式来渲染标签的样式,用scope接收所有的属性 -->
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.level === '0'">一级</el-tag>
                        <el-tag v-if="scope.row.level === '1'" type="success">二级</el-tag>
                        <el-tag v-if="scope.row.level === '2'" type="warning">三级</el-tag>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 权限列表
            rightsList: []
        }
    },
    // 发起数据请求
    created() {
        // 获取所有权限
        this.getRightsList()
    },
    methods: {
        // 获取权限列表
        async getRightsList() {
            const {data: res} = await this.$http.get('rights/list')
            if(res.meta.status !== 200){
                return this.$message.error('获取权限列表失败！')
            }
            // 如果成功，则挂载到rightList中
            this.rightsList = res.data
            console.log(this.rightsList)
        }
    }

}
</script>

<style lang="less" scoped>
</style>