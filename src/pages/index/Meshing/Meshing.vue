<template>
<div>
 <h1>网格化管理平台</h1>
<iframe src="https://www.baidu.com" frameborder="0" width="100%" height="100%"></iframe>
</div>
 
</template>

<script>
export default {
  created () {
    this.$store.commit('switch_loading',true)
    this.$http.get('/admin/menu/grid').then((res)=>{
      this.$store.commit('switch_loading',false)
        this.$store.commit('update_menu',res.data.data)
    })
  }
}
</script>

<style>

</style>
