<template>
  <div id="app">
    <!-- Header with Logo and Site Name -->
    <b-container fluid>
      <b-row class="align-items-center justify-content-center pt-4">
        <b-col cols="auto">
          <b-img
            src="@/assets/feather-pen-logo.png"
            alt="Feather Pen"
            class="feather-logo"
          ></b-img>
        </b-col>
        <b-col cols="auto">
          <h1 class="company-name mt-3">Cinder Script</h1>
        </b-col>
      </b-row>

      <!-- Centered Navigation Bar -->
      <b-row class="justify-content-center py-3">
        <b-nav>
          <b-nav-item to="/" exact>Home</b-nav-item>
          <b-nav-item to="/state-weaver">StateWeaver</b-nav-item>
          <b-nav-item to="/3d-assets">3D Assets</b-nav-item>
          <b-nav-item to="/#about">About</b-nav-item>
        </b-nav>
      </b-row>
    </b-container>

    <router-view />
  </div>
</template>

<style>
.feather-logo {
  height: 100px;
  width: auto;
}

.nav-link {
  color: white !important;
}

.router-link-active {
  color: #a20000 !important;
}

.nav-link:hover {
  color: #d65d00 !important;
}
</style>
