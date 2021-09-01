<template>
  <div class="tablet_root">
    <div class="tablet_container">
      <div class="tablet_content">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Tablet',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.tablet_root {
    background: #333;
    min-height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
}
.tablet_container {
   width: 768px;
   height:1024px;
   background: #111;
   border-radius: 30px;
   padding: 40px 10px 70px 10px;
}
.tablet_content {
    overflow-y: scroll;
    height: 100%;
    width: 100%;
}
</style>
