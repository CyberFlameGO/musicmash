<template>
  <div>
    <h2 class="mb-3">Which song do you think is better?</h2>
    <div class="d-flex justify-content-center mb-3" v-if="loading">
      <b-spinner
        style="width: 3rem; height: 3rem;"
        variant="primary">
      </b-spinner>
    </div>
    <div v-else>
      <b-button
        block
        v-for="(song, index) of songs"
        :key="song._id"
        :variant="index === 0 ? 'danger' : 'primary'"
        @click="vote(song._id)">
        {{ song.author }} - <em>{{ song.title }}</em>
      </b-button>
      <b-button
        block
        variant="secondary"
        @click="vote('draw')">
        I can't decide
      </b-button>
    </div>
  </div>
</template>

<script>
import environment from '../environment/index'

export default {
  name: 'Poll',
  data () {
    return {
      loading: true,
      songs: null
    }
  },
  methods: {
    async createPoll (songsToExclude) {
      const qs = songsToExclude ? `?exclude=${songsToExclude.join(',')}` : ''
      const data = await (
        await fetch(`${environment.API_URL}/poll${qs}`)
      ).json()

      this.songs = data
      this.loading = false
    },
    async vote (id) {
      this.loading = true

      const body = JSON.stringify(
        this.songs.reduce(
          (obj, song) => {
            if (id === song._id) {
              obj[song._id] = 1
            } else if (id === 'draw') {
              obj[song._id] = 0.5
            } else {
              obj[song._id] = 0
            }

            return obj
          },
          {}
        )
      )

      await fetch(
        `${environment.API_URL}/vote`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body
        }
      )

      this.createPoll(this.songs.map(song => song._id))
    }
  },
  created () {
    this.createPoll()
  }
}
</script>
