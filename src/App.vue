<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary" fixed>
      <b-navbar-nav class="mx-auto">
        <b-navbar-brand href="#">MusicMash</b-navbar-brand>
      </b-navbar-nav>
    </b-navbar>
    <div class="d-flex align-items-center">
      <div class="container text-center mt-4">
        <Poll />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Poll: () => import('./components/Poll.vue')
  }
}
</script>
