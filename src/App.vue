<template>
  <div>
    <Navbar></Navbar>
    <section class="main-content columns is-fullheight">
      <div class="container column">
        <div id="app">
          <router-view/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    'Navbar': Navbar
  }
}
</script>
