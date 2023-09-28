<template>
  <div class="container">
    <div class="title">
      <div>文件下载</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleLive() {
      console.log(1)
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
.title{
  margin-top: 10vh;
  line-height: 5vh;
  text-align: center;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
