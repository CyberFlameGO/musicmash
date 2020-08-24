<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary" fixed>
      <b-navbar-nav class="mx-auto">
        <b-navbar-brand>MusicMash</b-navbar-brand>
      </b-navbar-nav>
    </b-navbar>
    <div class="d-flex align-items-center mt-4">
      <div class="container text-center">
        <Poll />
        <div class="mt-4">
          <ul class="list-inline text-muted">
            <li class="list-inline-item">
              <a href="https://en.wikipedia.org/wiki/Elo_rating_system">
                Elo rating
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://spotifycharts.com/regional">
                Spotify Charts
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://vuejs.org/">
                Vue.js
              </a>
            </li>
            <li class="list-inline-item">
              <a v-b-modal.aboutModal href="#">About</a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/maciejpedzich/musicmash">
                Source code
              </a>
            </li>
          </ul>
        </div>
        <b-modal
          id="aboutModal"
          title="About"
          centered
          ok-only>
          <p>
            <em>MusicMash</em> - made by Maciej Pędzich, 2020
            <br>
            Email address:
            <a href="mailto:contact@maciejpedzi.ch">
              contact@maciejpedzi.ch
            </a>
          </p>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import Poll from './components/Poll.vue'

export default {
  name: 'App',
  components: { Poll }
}
</script>

<style>
.list-inline .list-inline-item:not(:last-child) {
  margin-right: 1.5rem;
}
</style>
