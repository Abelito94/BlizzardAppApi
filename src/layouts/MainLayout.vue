<template>
  <div class="container">
    <HeaderBar />

    <router-view />

    <FooterBar />
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
import FooterBar from '../components/Footer'

export default {
  name: 'MainLayout',
  components: {
    HeaderBar,
    FooterBar
  }
}
</script>
