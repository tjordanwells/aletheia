<template>
  <v-layout>
    <v-flex>
      <v-toolbar>
        <v-toolbar-title class="font-weight-light title" @click="$router.push('/home')">Aletheia Fellowship</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn text to="/about">About</v-btn>
          <v-btn text to="/sermons">Sermons</v-btn>
          <v-btn text to="/give">Give</v-btn>
          <v-btn text to="contact">Contact</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-flex>
  </v-layout>
</template>

<script>
export default {}
</script>

<style scoped>
.title:hover {
  cursor: pointer;
}
</style>