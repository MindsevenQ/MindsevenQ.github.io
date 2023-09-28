<template>
  <div class="content container">
    <div class="title">
      <div>会议路线</div>
      <div>请选择您所预定的酒店</div>
    </div>

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
.container {
  position: absolute;
  height: 100vh;
  width: 100%;
  background: url("/src/assets/kongbai.jpg") no-repeat fixed;
  background-size: cover;
}
.content {
    text-align: center;
}
.title{
  margin-top: 10vh;
  line-height: 5vh;
  text-align: center;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
}
.btnClass {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.btn {
    background: url("/src/assets/btn2.png") no-repeat;
    background-size: 100% 100%;
    border: 0;
    color: #fff;
    font-weight: 700;
    margin-left: 0;
    margin-top: 20px;
    width: 50%;
    text-align: center;
    height: 50px;
}
</style>
