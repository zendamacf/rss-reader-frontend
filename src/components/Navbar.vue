<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="/logo-white.png">
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/">
          Home
        </a>

        <a class="navbar-item has-dropdown is-hoverable" v-if="this.authenticated">
          <a class="navbar-link">
            Feeds
          </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item">
              Add Feed
            </a>
            <a class="navbar-item">
              Edit Feeds
            </a>
          </div>
        </a>
      </div>

      <hr class="divider">

      <div class="navbar-end">
        <a class="navbar-item" v-if="this.authenticated" href="/logout">
          Logout
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted () {
    let navbarScript = document.createElement('script')
    navbarScript.setAttribute('src', '/navbar.js')
    document.head.appendChild(navbarScript)
  },
  computed: {
    authenticated () { return this.$store.getters.isAuthenticated }
  }
}
</script>

<style scoped>
.divider { margin: 2px 12px 2px 12px; }
</style>
