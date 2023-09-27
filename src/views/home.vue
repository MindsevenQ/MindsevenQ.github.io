<template>
  <div class="content">
    <div @click="jump('active')">1</div>
    <div>2</div>
    <div @click="jump('meeting')">3</div>
    <div @click="jump('meetingRoute/index')">4</div>
    <div @click="jump('application')">5</div>
    <div>6</div>
    <div @click="jump('live/index')">7</div>
    <div>8</div>
    <div @click="jump('download')">9</div>
    <div @click="jump('contact')">10</div>
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
.content {
  margin-top: 30vh;
  display: flex;
  flex-wrap: wrap;
}
.content div {
  width: 50%;
  height: 10vh;
  text-align: center;
}
</style>