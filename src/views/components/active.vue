<template>
  <div>
      <div class="content">
        <el-button type="primary" round @click="$router.push('./brief')">活动简介</el-button>
        <el-button type="primary" round @click="$router.push('./notice')">活动通知</el-button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-around;
  margin-top: 30vh;
}
</style>