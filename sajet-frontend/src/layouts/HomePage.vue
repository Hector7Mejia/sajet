<template>
  <q-layout view="hhh lpR fFf">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>

        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/static/adrianM.jpg">
          </q-avatar>
        </q-toolbar-title>
        <div class="q-px-md"></div>
        <div class="home" tabindex="0">Home</div>
        <div class="Portfolio" tabindex="0">Portfolio</div>
        <div class="About" tabindex="0">About</div>
        <div class="Contact" tabindex="0">Contact</div>
        <div class="Get Quote" tabindex="0">Get Quote</div>
      </q-toolbar>

<!--      <q-tabs align="left">-->
<!--        <q-route-tab to="/page1" label="Page One" />-->
<!--        <q-route-tab to="/TestPage" label="Page Two" />-->
<!--        <q-route-tab to="/page3" label="Page Three" />-->
<!--      </q-tabs>-->
    </q-header>

<!--    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated>-->
<!--      &lt;!&ndash; drawer content &ndash;&gt;-->
<!--    </q-drawer>-->

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "HomePage",
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<!--<script>-->
<!--export default {-->
<!--  name: "HomePage"-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
