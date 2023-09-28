<template>
  <div class="container">
    <div class="title">
      <div>第二十二届全国学校体育联盟(教学改革)</div>
      <div>湖南湘江新区现场展示活动暨研讨会</div>
    </div>
    <div class="content">
      <div @click="jump('active')">
        <img class="img" src="../assets/11.png" alt="" />
      </div>
      <div>
        <img class="img" src="../assets/22.png" alt="" />
      </div>
      <div @click="jump('meeting')">
        <img class="img" src="../assets/33.png" alt="" />
      </div>
      <div @click="jump('meetingRoute/index')">
        <img class="img" src="../assets/44.png" alt="" />
      </div>
      <div @click="jump('application')">
        <img class="img" src="../assets/55.png" alt="" />
      </div>
      <div>
        <img class="img" src="../assets/66.png" alt="" />
      </div>
      <div @click="jump('live/index')">
        <img class="img" src="../assets/77.png" alt="" />
      </div>
      <div>
        <img class="img" src="../assets/88.png" alt="" />
      </div>
      <div @click="jump('download')">
        <img class="img" src="../assets/99.png" alt="" />
      </div>
      <div @click="jump('contact')">
        <img class="img" src="../assets/999.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    jump(url) {
      console.log(url)
      this.$router.push({path: `${url}`})
    }
  }
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
.img {
  width: 100%;
  height: 100%;
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
  flex-wrap: wrap;
  justify-content: center;
}
.content div {
  width: 40%;
  height: 15vh;
  text-align: center;
}
.content div img {
  width: 70%;
  height: 12vh;
}
</style>
