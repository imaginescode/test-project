<template>
    <div class="header">
      <v-app-bar
      app
      color="primary"
      dark
      >
        <v-tabs centered>
          <v-tab to="/">HOME</v-tab>
          <!-- <v-tab to="/about">ABOUT</v-tab>
          <v-tab to="/projects">PROJECTS</v-tab> -->
          <v-tab to="/testBoard">testBoard</v-tab>
          <!-- <v-tab to="/contact">CONTACT</v-tab> -->
        </v-tabs>
    </v-app-bar>
        <!-- <router-link to="/news">News</router-link> |
        <router-link to="/ask">Ask</router-link> |
        <router-link to="/jobs">jobs</router-link> -->
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.header {
    color: white;
    background-color: #42b883;
    display: flex;
    padding: 8px;
}
.header .router-link-exact-active {
    color: #35495e;
}
.header a {
    color: white;
}
</style>
