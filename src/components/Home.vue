<template>
    <el-container class="home-container">
        <!-- 侧边栏 -->
        <el-aside :width= "isCollapse ? '64px' : '200px'" >
            <div class = "toggle-button" @click="toggleCollapse">|||</div>
            <!-- 侧边栏菜单区域 -->
            <el-menu background-color="#324057" text-color="#fff" active-text-color="#3f9eff" :unique-opened="true"
            :collapse=isCollapse :collapse-transition="false" :router="true" :default-active="activePath">
                <!-- 一级菜单 -->
                <el-submenu :index="item.id + ''" v-for="item in menulist" :key='item.id'>
                    <!-- 一级菜单的模板区 -->
                    <template slot="title">
                        <!-- 图标 -->
                        <i :class="iconsObj[item.id]"></i>
                        <!-- 文本动态绑定 --> 
                        <span>{{ item.authName }}</span>
                    </template>
                    <!-- 二级菜单 -->
                    <el-menu-item :index="'/'+ subItem.path + ''" v-for="subItem in item.children" 
                    :key="subItem.id" @click="saveNavState('/'+ subItem.path )">
                        <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-menu"></i>
                            <!-- 文本 -->
                            <span>{{ subItem.authName }}</span>
                        </template>
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <!-- 右侧内容主体 -->
        <el-container>
            <el-header>
                <div class="image-container">
                    <!-- 头部区域 -->
                    <img src="../assets/manage.png" alt="">
                    <span class="textstyle">后台管理系统</span>
                </div>
                <el-button type="primary" @click="logout">退出</el-button>
            </el-header>
            <!-- 页面主体区域 -->
            <el-main>
                <!-- 路由占位符 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            // 左侧菜单数据
            menulist: [],
            iconsObj: {
                '125': 'iconfont icon-users',
                '103': 'iconfont icon-tijikongjian',
                '101': 'iconfont icon-shangpin',
                '102': 'iconfont icon-danju',
                '145': 'iconfont icon-baobiao'
            },
            //是否折叠
            isCollapse: false,
            // 被激活的链接地址，动态绑定到el-menu上
            activePath:'' 
        }
    },
    created() {
        this.getMenuList()
        this.activePath = window.sessionStorage.getItem('activePath')// 动态存储
    },
    methods: {
        logout() {
            window.sessionStorage.clear() // 清空token
            this.$router.push("/login") // 跳转到登录页
        },
        //获取所有的菜单
        async getMenuList() {
            const { data: res } = await this.$http.get('menus')
            if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
            this.menulist = res.data
            console.log(res)
        // 点击按钮，切换菜单的折叠和收起
        },
        toggleCollapse(){
            this.isCollapse = ! this.isCollapse 
        },
        // 保存链接的激活状态
        saveNavState(activePath){
            window.sessionStorage.setItem('activePath' , activePath)
            this.activePath = activePath // 菜单高亮效果的保持
        }
    }
}
</script>

<style lang="less" scoped>
.home-container {
    height: 100%;
}
.el-header {
    background-color: #c0c8d8; // F0F2F6
    display: flex;
    justify-content: space-between; // 贴边对齐
    padding-left: 15px;
    align-items: center;
    color: #324057;
    font-size: 20px;

    >idv {
        display: flex;
        align-items: center;
        text-align: center;

        span {
            margin-left: 15px;
        }
    }
}

.image-container {
    display: flex;
    width: 60%;
    height: 60%;
}

.textstyle {
    font-weight: bold;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 30px;
    padding-left: 10px;
}

.el-aside {
    background-color: #324057;
    .el-menu {
        border-right: none
    }
}

.el-main {
    background-color: #F0F2F6;
}

.iconfont {
    // font-size: 50px;
    margin-right: 10px;
}
.toggle-button {
    background-color: #6a7286;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2rem;
    cursor: pointer;
}
.iconfont_head {
    font-size: 50px;
}</style>