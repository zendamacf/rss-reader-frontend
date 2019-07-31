<template>
  <nav class="nav">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="/logo.png">
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <div id="navButtons"></div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
