<template>
    <div>
      <nuxt-ui-navbar>
        <nuxt-ui-navbar-item to="/">Home</nuxt-ui-navbar-item>
        <nuxt-ui-navbar-item to="/about">About</nuxt-ui-navbar-item>
        <nuxt-ui-navbar-item to="/contact">Contact</nuxt-ui-navbar-item>
      </nuxt-ui-navbar>
    </div>
  </template>
  
  <script>
  import { NuxtUINavbar, NuxtUINavbarItem } from 'nuxt-ui'
  
  export default {
    components: {
      NuxtUINavbar,
      NuxtUINavbarItem
    }
  }
  </script>
  