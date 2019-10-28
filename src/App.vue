<template>
  <v-app>
    <Header />
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from './core/components/Header'
import Footer from './core/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
