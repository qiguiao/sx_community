<template>
  <el-container>
    <sxmenu></sxmenu>
    <sxmain></sxmain>
  </el-container>
</template>

<script>
import sxmenu from '../menu/menu.vue'
import sxmain from '../main/main.vue'
export default {
  
  components:{
    sxmenu,
    sxmain  
  },
    
  }
</script>

<style scoped>

</style>
