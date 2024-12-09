<template>
<Header/>
<router-view></router-view>
<Footer/>
</template>

<script>
import Header from '@/app/components/header/Header.vue'
import Footer from '@/app/components/footer/Footer.vue'
export default {
  components: { 
    Header,
    Footer 

  },

}
</script>

<style>

</style>