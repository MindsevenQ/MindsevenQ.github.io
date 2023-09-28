<template>
  <div class="container">
    <el-button type="primary" class="btn" round @click="handleView">查看附件</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleView() {
      console.log('查看')
    }
  }
}
</script>

<style scoped>
.container {
  position: absolute;
  height: 100vh;
  width: 100%;
  background: url("/src/assets/tongzhi.jpg") no-repeat fixed;
  background-size: cover;
}
.btn {
  opacity: 0;
  position: absolute;
  left: 12vw;
  bottom: 8vh;
}
</style>
