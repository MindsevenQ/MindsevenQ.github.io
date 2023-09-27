<template>
  <div class="content">
    <div class="title">会议路线</div>
    <div class="title1">请选择您所预定的酒店</div>
    <div class="btnClass">
        <el-button round class="btn" @click="$router.push('./yannian')">
            <div>延年荟景酒店</div>
            <div>（湖南金融中心店）</div>
        </el-button>
        <el-button round class="btn" @click="$router.push('./yasi')">美雅思酒店</el-button>
        <el-button round class="btn" @click="$router.push('./shengweisi')">
            <div>圣威思酒店</div>
            <div>（湖南金融中心店）</div>
        </el-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content {
    text-align: center;
}
.title {
    margin-top: 80px;
}
.title1 {
    margin-top: 30px;
}
.btnClass {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.btn {
    background: red;
    color: #fff;
    font-weight: 700;
    margin-left: 0;
    margin-top: 20px;
    width: 50%;
    text-align: center;
    height: 50px;
}
</style>