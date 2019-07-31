<template>
  <section class="section">
    <div class="list is-hoverable">
      <a class="list-item" v-for="article in articles" v-bind:key="article.id">
        <img class="favicon" :src="article.image">
        <span>{{ article.name }}</span>
        <span>{{ article.published }}</span>
      </a>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Feed',
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getMessage () {
      axios.get('/feeds')
        .then((resp) => {
          this.articles = resp.data
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        })
    }
  },
  created () {
    this.getMessage()
  }
}
</script>

<style scoped>
.favicon { height: 24px; width: 24px; }
</style>
