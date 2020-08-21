<template>
  <div>
    <h2 class="mb-3">Which song do you think is better?</h2>
    <b-button block variant="danger">
      <em>Song 1</em> by Author 1
    </b-button>
    <b-button block variant="primary">
      <em>Song 2</em> by Author 2
    </b-button>
    <b-button block variant="secondary">
      I can't decide
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Poll'
}
</script>
