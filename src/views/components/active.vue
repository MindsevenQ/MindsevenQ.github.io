<template>
  <div class="container">
    <div class="title">
      <div>第二十二届全国学校体育联盟(教学改革)</div>
      <div>湖南湘江新区现场展示活动暨研讨会</div>
    </div>
      <div class="content">
        <el-button type="primary" class="btn" round @click="$router.push('./brief')">活动简介</el-button>
        <el-button type="primary" class="btn" round @click="$router.push('./notice')">活动通知</el-button>
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
.title{
  margin-top: 10vh;
  line-height: 5vh;
  text-align: center;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
}
.content {
  display: flex;
  justify-content: space-around;
  margin-top: 5vh;
}
.btn {
  width: 30%;
  background: url("/src/assets/btn1.png") no-repeat;
  background-size: 100% 100%;
  border: 0;
}
</style>
